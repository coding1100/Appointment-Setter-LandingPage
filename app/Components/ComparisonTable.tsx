import { FC } from "react";
import { Check, X } from "lucide-react";

interface ComparisonTableProps {}

const ComparisonTable: FC<ComparisonTableProps> = () => {
  const features = [
    "Natural Conversation Flow with State Management",
    "Real-Time Speech Recognition & Natural Voice Response",
    "Intelligent Information Extraction & Validation",
    "Service-Specific Conversation Templates",
    "Confirmation Flow Before Booking",
    "Customizable Agent Personality & Greeting",
    "Automatic Appointment Creation",
    "Intelligent Escalation Handling",
    "Conversation Engagement & Recovery",
    "Prompt Injection Defense & Security",
  ];

  // Your Atlas has ticks for first 3 features, rest are crosses
  const yourAtlasFeatures = [
    true, // tick
    true, // tick
    true, // tick
    false, // cross
    false, // cross
    false, // cross
    false, // cross
    false, // cross
    false, // cross
    false, // cross
  ];

  return (
    <section className="container mx-auto pt-20 pb-12">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[32px] border border-white/10 bg-white/5 py-8 sm:py-10 px-4 sm:px-6 md:px-8 shadow-[0_25px_70px_rgba(9,18,56,0.4)] backdrop-blur-2xl">
          <h2 className=" mx-auto text-center mb-6 sm:text-3xl text-2xl font-semibold text-white md:text-[42px] md:leading-[1.1]">
            How Our AI Rep Compares With Others
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-white/20">
                  <th className="text-left py-4 px-3 sm:px-4 md:px-5 text-sm sm:text-base font-bold text-white bg-[#070D1F]/50">
                    Features
                  </th>
                  <th className="text-center py-4 px-3 sm:px-4 md:px-5 text-sm sm:text-base font-bold text-white bg-[#070D1F]/50">
                    AI Appointment Setter
                  </th>
                  <th className="text-center py-4 px-3 sm:px-4 md:px-5 text-sm sm:text-base font-bold text-white bg-[#070D1F]/50">
                    Your Atlas
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/5 hover:bg-[#070D1F]/30 transition-colors"
                  >
                    <td className="py-3 px-3 sm:px-4 md:px-5 text-xs sm:text-sm text-[#A9B6D9]">
                      {feature}
                    </td>
                    <td className="py-3 px-3 sm:px-4 md:px-5 text-center">
                      <div className="flex justify-center">
                        <div className="rounded-full bg-[#38E0FF]/20 p-1">
                          <Check className="h-3 w-3 sm:h-4 sm:w-4 text-[#38E0FF]" />
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-3 sm:px-4 md:px-5 text-center">
                      <div className="flex justify-center">
                        {yourAtlasFeatures[index] ? (
                          <div className="rounded-full bg-[#38E0FF]/20 p-1">
                            <Check className="h-3 w-3 sm:h-4 sm:w-4 text-[#38E0FF]" />
                          </div>
                        ) : (
                          <div className="rounded-full bg-red-400/20 p-1">
                            <X className="h-3 w-3 sm:h-4 sm:w-4 text-red-400" />
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
