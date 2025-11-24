"use client";

import { FC, useState } from "react";
import { ChevronDown } from "lucide-react";

interface QAProps {
  faqSection: {
    question: string;
    answer: string;
  }[];
}

const QA: FC<QAProps> = ({ faqSection }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative container mx-auto sm:pt-24 pt-14 sm:pb-32 pb-16">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 md:px-0 px-5">
        {faqSection.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="overflow-hidden rounded-[24px] border border-white/8 bg-[#070D1F]/80 shadow-[0_20px_60px_rgba(9,18,56,0.55)] backdrop-blur-2xl transition-all"
            >
              <button
                type="button"
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between gap-4 p-6 sm:p-8 text-left transition-colors hover:bg-[#0A122C]/50"
                aria-expanded={isOpen}
              >
                <h3 className="flex-1 text-lg sm:text-xl font-semibold text-white pr-4">
                  {item.question}
                </h3>
                <div
                  className={`flex-shrink-0 transition-transform duration-300 ease-in-out ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-[#38E0FF]" />
                </div>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <p className="text-base sm:text-lg leading-relaxed text-[#A9B6D9]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default QA;
