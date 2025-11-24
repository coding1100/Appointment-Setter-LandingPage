"use client";

import { FC, useState, FormEvent } from "react";
import HeroImg from "@/app/assets/images/plumberHero.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Heroprops {
  scrollY: number;
}

const Hero: FC<Heroprops> = ({ scrollY }) => {
  const currentRoute = usePathname();
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validatePhone = (value: string): boolean => {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    const digitsOnly = value.replace(/\D/g, "");
    return phoneRegex.test(value) && digitsOnly.length >= 10;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors = {
      email: "",
      phone: "",
    };

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.phone;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Add API call here
      // const response = await fetch('/api/submit-form', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      console.log("Form data:", formData);

      // Reset form after successful submission
      setFormData({ email: "", phone: "" });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="relative sm:pt-44 pt-24 sm:pb-20 pb-12 px-4 sm:px-6 container mx-auto">
      <div className="pointer-events-none absolute -inset-x-6 inset-y-0 z-0 overflow-hidden">
        <div
          className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#38E0FF]/12 blur-[140px]"
          style={{ transform: `translate3d(-50%, ${scrollY * 0.15}px, 0)` }}
        />
        <div
          className="absolute bottom-0 left-0 h-[22rem] w-[22rem] -translate-x-2/3 translate-y-1/3 rounded-full bg-[#FF6B6B]/10 blur-[160px]"
          style={{ transform: `translate3d(0, ${scrollY * 0.25}px, 0)` }}
        />
        <div
          className="absolute -right-1/3 top-10 h-[26rem] w-[26rem] rounded-full bg-[#2757FF]/14 blur-[180px]"
          style={{
            transform: `translate3d(0, ${scrollY * 0.1 * -1}px, 0)`,
          }}
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,224,255,0.18),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(39,87,255,0.18),transparent_50%)]"
          style={{ opacity: 0.6 }}
        />
      </div>

      <div className="flex flex-col gap-10 sm:gap-12 md:gap-16 lg:flex-row lg:items-end">
        <div className="relative z-10 flex-1">
          <div className="sm:text-[52px] sm:leading-[1.05] text-3xl  font-black tracking-[-0.02em] text-white ">
            <span className="block">World's first</span>
            {currentRoute === "/plumbing" ||
              (currentRoute === "/" && (
                <span className="block">plumbing specialist</span>
              ))}
            {currentRoute === "/hvac" && (
              <span className="block">hvac specialist</span>
            )}
            {currentRoute === "/cleaning" && (
              <span className="block">cleaning specialist</span>
            )}
            <span className="block bg-gradient-to-r from-white via-[#A4D7FF] to-[#38E0FF] bg-clip-text text-transparent">
              AI Appointment setter
            </span>
          </div>
          <p
            id="quoteForm"
            className="mt-6 text-lg font-medium uppercase tracking-[0.28em] text-[#9AA7D1]"
          >
            {currentRoute === "/plumbing" ||
              (currentRoute === "/" && (
                <span className="block">
                  Answer Plumbing Calls Intelligently. Book Automatically
                </span>
              ))}
            {currentRoute === "/hvac" && (
              <span className="block">
                Answer HVAC Calls Intelligently. Book Automatically
              </span>
            )}
            {currentRoute === "/cleaning" && (
              <span className="block">
                Answer Cleaning Calls Intelligently. Book Automatically
              </span>
            )}
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 sm:mt-8 md:mt-10"
            id="quoteForm"
          >
            <div className="space-y-4 sm:space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-[#A9B6D9] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-lg sm:rounded-xl border ${
                    errors.email
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-white/10 focus:border-[#38E0FF]/50"
                  } bg-[#070D1F]/80 px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-white placeholder:text-[#7687B4] focus:outline-none focus:ring-2 focus:ring-[#38E0FF]/20 transition-all backdrop-blur-sm`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs sm:text-sm text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs sm:text-sm font-medium text-[#A9B6D9] mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full rounded-lg sm:rounded-xl border ${
                    errors.phone
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-white/10 focus:border-[#38E0FF]/50"
                  } bg-[#070D1F]/80 px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-white placeholder:text-[#7687B4] focus:outline-none focus:ring-2 focus:ring-[#38E0FF]/20 transition-all backdrop-blur-sm`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs sm:text-sm text-red-400">
                    {errors.phone}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative inline-flex items-center justify-center gap-2 rounded-lg sm:rounded-xl bg-[#38E0FF] px-4 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-semibold text-[#021026] shadow-[0_18px_45px_rgba(56,224,255,0.35)] transition-all hover:shadow-[0_24px_60px_rgba(56,224,255,0.45)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>
                  {isSubmitting ? "Submitting..." : "Book a Free Trial"}
                </span>
                <span className="absolute inset-0 -z-10 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#38E0FF]/80 to-[#38E0FF]/20 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </div>
          </form>
        </div>
        <div className="relative z-10 w-full flex-1 rounded-3xl max-h-[500px]">
          <Image
            src={HeroImg}
            alt="Hero Image"
            className="mx-auto object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
