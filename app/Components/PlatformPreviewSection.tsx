import { Play, Pause } from "lucide-react";
import { FC, useEffect, useMemo, useRef, useState } from "react";

interface PlatformPreviewSectionprops {
  platformPreviewSection: {
    headline: string;
    video: string;
  };
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const PlatformPreviewSection: FC<PlatformPreviewSectionprops> = ({
  platformPreviewSection,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Check if video is YouTube URL and convert to embed format
  const isYouTube = useMemo(() => {
    return (
      platformPreviewSection.video.includes("youtube.com") ||
      platformPreviewSection.video.includes("youtu.be")
    );
  }, [platformPreviewSection.video]);

  const getYouTubeVideoId = (url: string): string => {
    let videoId = "";

    // Extract video ID from different YouTube URL formats
    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0].split("&")[0];
    } else if (url.includes("youtube.com/watch?v=")) {
      videoId = url.split("v=")[1].split("&")[0];
    } else if (url.includes("youtube.com/embed/")) {
      videoId = url.split("embed/")[1].split("?")[0].split("&")[0];
    }

    return videoId;
  };

  const getYouTubeEmbedUrl = (
    url: string,
    enableApi: boolean = false
  ): string => {
    const videoId = getYouTubeVideoId(url);
    const params = new URLSearchParams({
      rel: "0",
      modestbranding: "1",
      iv_load_policy: "3",
      controls: "0",
      showinfo: "0",
      fs: "0",
      cc_load_policy: "0",
      disablekb: "1",
      playsinline: "1",
      enablejsapi: enableApi ? "1" : "0",
      ...(isPlaying && { autoplay: "1" }),
    });
    return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
  };

  // Format time in MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Load YouTube IFrame API script (only once)
  useEffect(() => {
    if (!isYouTube) return;

    if (window.YT && window.YT.Player) {
      return; // API already loaded
    }

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
  }, [isYouTube]);

  // Cleanup function to safely destroy player
  const destroyPlayer = () => {
    stopTimeUpdate();
    if (!playerRef.current) return;

    const player = playerRef.current;
    const container = containerRef.current;

    // Clear the ref immediately to prevent any further operations
    playerRef.current = null;

    // Early return if container doesn't exist or is not in DOM
    if (!container || !document.body.contains(container)) {
      return;
    }

    try {
      // Find the iframe element
      const iframe = container.querySelector("iframe");

      if (iframe) {
        // Critical: Verify iframe is still a direct child of container
        // and both are still in the DOM before attempting any operations
        const isIframeChild = iframe.parentNode === container;
        const isContainerInDOM = document.body.contains(container);
        const isIframeInDOM = document.body.contains(iframe);

        if (isIframeChild && isContainerInDOM && isIframeInDOM) {
          try {
            // Try to destroy the player - this will remove the iframe
            player.destroy();
          } catch (destroyError: any) {
            // If destroy fails (e.g., removeChild error), manually remove the iframe
            // This handles the case where the iframe structure has changed
            try {
              // Re-check one more time before manual removal
              if (
                iframe.parentNode === container &&
                document.body.contains(container)
              ) {
                // Use remove() if available (more forgiving), otherwise removeChild
                if (typeof iframe.remove === "function") {
                  iframe.remove();
                } else if (iframe.parentNode === container) {
                  container.removeChild(iframe);
                }
              }
            } catch (removeError) {
              // Silently ignore - DOM already cleaned up by React or iframe already removed
            }
          }
        }
        // If iframe is not a direct child or not in DOM, don't try to destroy
        // Just clear ref and let React handle cleanup
      } else {
        // No iframe found - player might already be destroyed or not initialized
        // Only try destroy if container is still valid
        if (document.body.contains(container)) {
          try {
            player.destroy();
          } catch (e) {
            // Ignore - player might already be destroyed
          }
        }
      }
    } catch (e) {
      // Silently ignore all errors - DOM might already be cleaned up by React
      // The ref is already cleared, so no memory leaks
    }
  };

  // Destroy player when video URL changes
  useEffect(() => {
    return () => {
      destroyPlayer();
    };
  }, [platformPreviewSection.video]);

  // Initialize YouTube player when user clicks play
  useEffect(() => {
    if (!isYouTube || !isPlaying || !containerRef.current) return;
    if (playerRef.current) return; // Player already initialized

    const initializePlayer = () => {
      if (!containerRef.current || playerRef.current) return;

      const videoId = getYouTubeVideoId(platformPreviewSection.video);
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: videoId,
        playerVars: {
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          controls: 0,
          showinfo: 0,
          fs: 0,
          cc_load_policy: 0,
          disablekb: 1,
          playsinline: 1,
          autoplay: 1,
        },
        events: {
          onReady: (event: any) => {
            const duration = event.target.getDuration();
            setDuration(duration);
            event.target.playVideo();
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              startTimeUpdate();
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
              stopTimeUpdate();
            } else if (event.data === window.YT.PlayerState.ENDED) {
              setIsPlaying(false);
              setCurrentTime(0);
              stopTimeUpdate();
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initializePlayer();
    } else {
      window.onYouTubeIframeAPIReady = () => {
        initializePlayer();
      };
    }
  }, [isYouTube, isPlaying, platformPreviewSection.video]);

  // Final cleanup on component unmount
  useEffect(() => {
    return () => {
      destroyPlayer();
    };
  }, []);

  const startTimeUpdate = () => {
    stopTimeUpdate();
    intervalRef.current = setInterval(() => {
      if (playerRef.current) {
        try {
          const current = playerRef.current.getCurrentTime();
          setCurrentTime(current);
        } catch (e) {
          // Ignore errors
        }
      }
    }, 100);
  };

  const stopTimeUpdate = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handlePlayPause = () => {
    if (!playerRef.current) {
      setIsPlaying(true);
      return;
    }

    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    } catch (e) {
      // Ignore errors
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    if (playerRef.current) {
      try {
        playerRef.current.seekTo(seekTime, true);
      } catch (e) {
        // Ignore errors
      }
    }
  };

  const getYouTubeThumbnail = (url: string): string => {
    const videoId = getYouTubeVideoId(url);
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <section className="relative container mx-auto">
      <div className="relative overflow-hidden sm:pb-28 pb-16 rounded-[40px] border border-white/12 bg-gradient-to-br from-[#060C1E] via-[#0B162F] to-[#081128] shadow-[0_30px_80px_rgba(4,10,40,0.65)]">
        <div className="relative flex flex-col items-center justify-center px-10 pb-16 pt-20 text-center">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#38E0FF]/15 to-transparent" />

          <h2 className="sm:mt-4 sm:max-w-2xl sm:text-3xl text-2xl font-semibold text-white md:text-[42px] md:leading-[1.1]">
            {platformPreviewSection.headline}
          </h2>
        </div>
        <div className="relative aspect-video max-w-3xl overflow-hidden rounded-[40px] mx-auto bg-[#0A122C]">
          {isYouTube ? (
            <>
              {/* Always keep container mounted to avoid DOM removal issues */}
              <div
                ref={containerRef}
                className={`h-full w-full ${
                  !isPlaying && !playerRef.current ? "hidden" : ""
                }`}
              />
              {/* Thumbnail overlay - only show when not playing and player not initialized */}
              {!isPlaying && !playerRef.current && (
                <>
                  <img
                    src={getYouTubeThumbnail(platformPreviewSection.video)}
                    alt="Video thumbnail"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="absolute left-1/2 top-1/2 z-10 flex h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#060C1E] shadow-lg transition hover:scale-105"
                    aria-label="Play video"
                  >
                    <Play className="h-6 w-6" fill="currentColor" />
                  </button>
                </>
              )}
              {/* Custom Controls - only show when playing */}
              {isPlaying && playerRef.current && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  {/* Seekbar */}
                  <div className="mb-2">
                    <input
                      type="range"
                      min="0"
                      max={duration || 100}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #38E0FF 0%, #38E0FF ${
                          (currentTime / (duration || 1)) * 100
                        }%, rgba(255,255,255,0.2) ${
                          (currentTime / (duration || 1)) * 100
                        }%, rgba(255,255,255,0.2) 100%)`,
                      }}
                    />
                  </div>
                  {/* Controls Bar */}
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handlePlayPause}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <Pause className="h-5 w-5" fill="currentColor" />
                      ) : (
                        <Play className="h-5 w-5" fill="currentColor" />
                      )}
                    </button>
                    {/* Duration */}
                    <span className="text-sm text-white font-medium">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>
                </div>
              )}
            </>
          ) : (
            <video
              className="h-full w-full cursor-pointer object-cover"
              onClick={() => {
                const video = document.querySelector("video");
                if (video) {
                  if (video.paused) {
                    video.play().then(() => setIsPlaying(true));
                  } else {
                    video.pause();
                    setIsPlaying(false);
                  }
                }
              }}
              onEnded={() => setIsPlaying(false)}
              controls={isPlaying}
              playsInline
              preload="metadata"
              onLoadedMetadata={(e) => {
                const video = e.currentTarget;
                video.currentTime = 0.1;
              }}
            >
              <source src={platformPreviewSection.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="w-full flex justify-center pt-7">
          <button
            type="button"
            onClick={() => {
              const form = document.getElementById("quoteForm");
              if (form) {
                form.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="w-fit mx-auto relative inline-flex items-center gap-2 rounded-full bg-[#38E0FF] px-6 py-2 text-sm font-semibold text-[#021026] shadow-[0_18px_45px_rgba(56,224,255,0.35)] transition-all hover:shadow-[0_24px_60px_rgba(56,224,255,0.45)] cursor-pointer"
          >
            <span>Book a Free Trial</span>
            {/* <ArrowRight className="h-4 w-4" /> */}
            <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#38E0FF]/80 to-[#38E0FF]/20 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlatformPreviewSection;
