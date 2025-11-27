import { Play } from "lucide-react";
import { FC, useEffect, useRef, useState } from "react";

interface PlatformPreviewSectionprops {
  platformPreviewSection: {
    headline: string;
    video: string;
  };
}

const PlatformPreviewSection: FC<PlatformPreviewSectionprops> = ({
  platformPreviewSection,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setIsPlaying(false);
  }, []);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (!video) return;
    video
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {});
  };

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      handlePlayClick();
    } else {
      video.pause();
      setIsPlaying(false);
    }
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
          {!isPlaying && (
            <button
              type="button"
              onClick={handlePlayClick}
              className="absolute left-1/2 top-1/2 z-10 flex h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#060C1E] shadow-lg transition hover:scale-105"
              aria-label="Play video"
            >
              <Play className="h-6 w-6" fill="currentColor" />
            </button>
          )}
          <video
            ref={videoRef}
            className="h-full w-full cursor-pointer object-cover"
            onClick={handleVideoClick}
            onEnded={() => setIsPlaying(false)}
            controls={isPlaying}
            playsInline
            preload="metadata"
            onLoadedMetadata={(e) => {
              // Set video to first frame for thumbnail
              const video = e.currentTarget;
              video.currentTime = 0.1;
            }}
          >
            <source src={platformPreviewSection.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
