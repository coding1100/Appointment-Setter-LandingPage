import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface MediaFeatureprops {
  featureSections: {
    headline: string;
    description: string;
    image: string;
    id: string;
  }[];
}

const MediaFeature: FC<MediaFeatureprops> = ({ featureSections }) => {
  return (
    <section className="relative bg-[#02030B] container mx-auto sm:pt-24 pt-14 sm:pb-32 pb-16">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0B1632] via-[#02030B]_60% to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col sm:gap-20 gap-10 md:px-0 px-5 ">
        {featureSections.map((feature, index) => (
          <div
            key={index}
            id={feature.id}
            className={`flex flex-col overflow-hidden rounded-[40px] border border-white/8 bg-[#070D1F]/80 shadow-[0_30px_80px_rgba(4,10,40,0.45)] backdrop-blur-2xl transition-transform lg:flex-row ${
              index % 2 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="sm:text-start text-center flex-1 flex flex-col justify-center space-y-6 sm:px-10 px-5 sm:py-12 py-8 text-[#C6CBE3] lg:px-16">
              <div>
                <h3 className="sm:mt-4 mt-2 sm:text-[32px] text-2xl font-semibold leading-[1.25] text-white md:text-[38px]">
                  {feature.headline}
                </h3>
              </div>
              <p className="text-base leading-relaxed text-[#A9B6D9]">
                {feature.description}
              </p>
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
                className="w-fit sm:mx-0 mx-auto relative inline-flex items-center gap-2 rounded-full bg-[#38E0FF] px-6 py-2 text-sm font-semibold text-[#021026] shadow-[0_18px_45px_rgba(56,224,255,0.35)] transition-all hover:shadow-[0_24px_60px_rgba(56,224,255,0.45)] cursor-pointer"
              >
                <span>Book a Free Trial</span>
                {/* <ArrowRight className="h-4 w-4" /> */}
                <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#38E0FF]/80 to-[#38E0FF]/20 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </div>
            <div className="flex-1 bg-[#050C1C] p-6 lg:p-8">
              <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/12 bg-[#020712]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,224,255,0.18),transparent_60%)] opacity-80" />
                <img
                  src={feature.image}
                  className="relative h-full w-full max-h-[415px] rounded-[24px] object-cover shadow-[0_25px_70px_rgba(3,8,28,0.45)]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaFeature;
