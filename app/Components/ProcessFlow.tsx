import { FC } from "react";
import { ChevronRight } from "lucide-react";

interface ProcessFlowProps {}

const ProcessFlow: FC<ProcessFlowProps> = () => {
  const steps = [
    {
      id: 1,
      text: "Book a meeting",
    },
    {
      id: 2,
      text: "AI is trained on your plumbing service",
    },
    {
      id: 3,
      text: "AI is launched",
    },
    {
      id: 4,
      text: "More leads",
    },
    {
      id: 5,
      text: "More revenue",
    },
  ];

  return (
    <section className="container mx-auto sm:pt-24 pt-14 sm:pb-32">
      <div className="rounded-[32px] border border-white/10 bg-white/5 py-10 sm:px-10 px-5 shadow-[0_25px_70px_rgba(9,18,56,0.4)] backdrop-blur-2xl">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            <span className="block">From Free Trial to</span>
            <span className="block">Increased Revenue</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#9AA7D1] max-w-2xl mx-auto">
            See how our AI transforms your business in just a few simple steps
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4 sm:gap-x-3 sm:gap-y-5 md:gap-x-4 md:gap-y-6 lg:gap-x-5 lg:gap-y-6">
          {steps.map((step, index) => {
            const isLastTwo = index >= 3; // Steps 4 and 5 (index 3 and 4)

            return (
              <div key={step.id} className="contents">
                <div className="relative group flex-shrink-0">
                  <div
                    className={`relative rounded-xl sm:rounded-2xl border-2  px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3.5 lg:px-6 lg:py-4 backdrop-blur-2xl transition-all hover:scale-105 min-w-[140px] sm:min-w-[160px] md:min-w-[180px] ${
                      isLastTwo
                        ? "bg-[#38E0FF] text-[#070D1F] border-[#7de2f5]/50 shadow-[0_0_30px_rgba(125,226,245,0.4),0_20px_60px_rgba(9,18,56,0.7)] hover:border-[#7de2f5]/70 hover:shadow-[0_0_40px_rgba(125,226,245,0.5),0_25px_80px_rgba(9,18,56,0.8)]"
                        : "bg-[#070D1F] border-[#38E0FF]/30 shadow-[0_0_30px_rgba(56,224,255,0.3),0_20px_60px_rgba(9,18,56,0.7)] hover:border-[#38E0FF]/50 hover:shadow-[0_0_40px_rgba(56,224,255,0.4),0_25px_80px_rgba(9,18,56,0.8)]"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br opacity-50 ${
                        isLastTwo
                          ? "from-[#7de2f5]/20 via-transparent to-transparent"
                          : "from-[#38E0FF]/5 via-transparent to-transparent"
                      }`}
                    />
                    <p className="relative text-xs sm:text-sm md:text-base font-bold text-center break-words leading-tight">
                      {step.text}
                    </p>
                  </div>
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-xl sm:rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity ${
                      isLastTwo ? "bg-[#7de2f5]/30" : "bg-[#38E0FF]/20"
                    }`}
                  />
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight
                    className={`h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0 rotate-90 sm:rotate-0 hidden sm:block ${
                      isLastTwo ? "text-[#7de2f5]" : "text-[#38E0FF]"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
