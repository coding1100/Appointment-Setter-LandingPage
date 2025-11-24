import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface Featuresprops {
  scrollY: number;
  featureSection: {
    headline: string;
    problemCards: {
      title: string;
      anchor: string;
    }[];
  };
}

const Features: FC<Featuresprops> = ({ scrollY, featureSection }) => {
  return (
    <section className="container mx-auto sm:pt-24 pt-14 sm:pb-32">
      <div
        className="rounded-[32px] border border-white/10 bg-white/5 py-10 sm:px-10 px-5 shadow-[0_25px_70px_rgba(9,18,56,0.4)] backdrop-blur-2xl"
        style={{ transform: `translate3d(0, ${scrollY * -0.03}px, 0)` }}
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="sm:mt-4 max-w-md text-2xl font-semibold text-white text-center mx-auto">
            {featureSection.headline}
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureSection.problemCards.map((problem) => (
            <button
              key={problem.title}
              type="button"
              onClick={() => {
                const section = document.getElementById(problem.anchor);
                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="group relative flex flex-col justify-between gap-10 overflow-hidden rounded-3xl border border-white/8 bg-[#070D1F]/70 p-6 text-left shadow-[0_20px_60px_rgba(9,18,56,0.55)] transition-all hover:-translate-y-2 hover:border-white/20 hover:bg-[#0A122C]/80"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#38E0FF]/15 blur-[60px] transition group-hover:bg-[#38E0FF]/25" />
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white text-center">
                  {problem.title}
                </h3>
              </div>
              <div className="w-fit mx-auto relative inline-flex items-center gap-2 rounded-full bg-[#38E0FF] px-6 py-2 text-sm font-semibold text-[#021026] shadow-[0_18px_45px_rgba(56,224,255,0.35)] transition-all hover:shadow-[0_24px_60px_rgba(56,224,255,0.45)]">
                <span>Solution</span>
                <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#38E0FF]/80 to-[#38E0FF]/20 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </button>
          ))}
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

export default Features;
