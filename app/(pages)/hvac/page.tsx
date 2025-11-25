"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import NavBar from "@/app/Components/Navbar";
import Hero from "@/app/Components/Hero";
import Features from "@/app/Components/Features";
import { hvacData } from "./content";
import PlatformPreviewSection from "@/app/Components/PlatformPreviewSection";
import MediaFeature from "@/app/Components/MediaFeature";
import Testimonial from "@/app/Components/Tetimonial";
import Footer from "@/app/Components/Footer";
import QA from "@/app/Components/QA";
import ProcessFlow from "@/app/Components/ProcessFlow";

export default function LandingPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    requestAnimationFrame(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => undefined);
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#02030B] text-[#F5F7FF]"
      style={{ fontFamily: 'Inter, "PingFang SC", Helvetica, sans-serif' }}
    >
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(56,224,255,0.18)_0%,transparent_60%),radial-gradient(circle_at_20%_80%,rgba(255,107,107,0.12)_0%,transparent_55%),linear-gradient(135deg,#02030B_0%,#0E1A3A_55%,#02030B_100%)]" />
      <div
        className="pointer-events-none fixed inset-0 opacity-40 mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='4' cy='4' r='4' fill='%23283759'/%3E%3C/svg%3E\")",
        }}
      />

      <NavBar />

      <main className="relative z-10 lg:container lg:mx-auto">
        <div className="sm:px-16 px-9 ">
          <Hero />
        </div>
        <div className="sm:px-10 px-4">
          <Features featureSection={hvacData.featureSection} />

          <PlatformPreviewSection
            platformPreviewSection={hvacData.platformPreviewSection}
          />

          <ProcessFlow />
          <section className="relative sm:mt-10 mb-10">
            <div
              className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#060C1E] via-[#0B162F] to-[#081128] shadow-[0_30px_80px_rgba(4,10,40,0.65)] sm:px-16 px-5 pt-10 sm:pb-24 pb-16"
              style={{ transform: `translate3d(0, ${scrollY * 0.03}px, 0)` }}
            >
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#38E0FF]/15 to-transparent" />
              <h3 className="relative mb-8 sm:mb-10 text-center sm:text-[34px] text-2xl font-semibold leading-tight text-white md:text-[40px]">
                Increase in Revenue
              </h3>

              <div className="relative mx-auto flex md:flex-row flex-col md:gap-8 gap-6 justify-center max-w-4xl"></div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-[23px]">
                <div className="w-full h-[153px] outline-2 outline-offset-2 outline-dashed outline-[#38E0FF] bg-[#0A1423] rounded-[14px] flex justify-center items-center gap-5">
                  <p className="text-[64px] font-bold text-[#38E0FF]">20%</p>
                  <p className="text-[32px] font-medium text-white">
                    Increase in
                  </p>
                  <div className="relative z-30">
                    <div className="absolute z-10 left-1 w-[133px] h-[52px] bg-[#38e0ff] rounded-full "></div>
                    <div className="relative z-20 rounded-full bg-[#0A1423] h-[49px] flex justify-center items-center w-[132px] border border-[#38E0FF] ">
                      <p className="text-[32px] font-medium text-[#38e0ff]">
                        Leads
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[153px] outline-2 outline-offset-2 outline-dashed outline-[#38E0FF] bg-[#0A1423] rounded-[14px] flex justify-center items-center gap-5">
                  <p className="text-[64px] font-bold text-[#38E0FF]">35%</p>
                  <p className="text-[32px] font-medium text-white">
                    Increase in
                  </p>
                  <div className="relative z-30">
                    <div className="absolute z-10 left-1 w-[133px] h-[52px] bg-[#38e0ff] rounded-full "></div>
                    <div className="relative z-20 rounded-full bg-[#0A1423] h-[49px] flex justify-center items-center w-[176px] border border-[#38E0FF] ">
                      <p className="text-[32px] font-medium text-[#38e0ff]">
                        Revenue
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <MediaFeature featureSections={hvacData.featureSections} />

          <Testimonial />
          <QA faqSection={hvacData.faqSection} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
