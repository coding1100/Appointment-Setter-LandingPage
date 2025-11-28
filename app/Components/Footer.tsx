import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Logo from "@/app/assets/images/logo.png";

interface Footerprops {}

const Footer: FC<Footerprops> = ({}) => {
  const footerLinks = {
    product: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms" },
    ],
    company: [{ label: "About Us", href: "/about" }],
    social: [
      { label: "LinkedIn", href: "https://www.linkedin.com" },
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Instagram", href: "https://www.instagram.com" },
    ],
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#01020A]/80 px-6 pt-16 pb-10 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 lg:flex-row lg:justify-between">
        <div className="max-w-sm space-y-6">
          <Link
            href="/"
            className="flex items-center space-x-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9AA7D1]"
          >
            <Image
              src={Logo}
              alt="Logo"
              className="max-w-[120px] min-w-[70px]"
            />
          </Link>
          <p className="text-base text-[#B4C0E4]">
            Built for plumbing crews that can&apos;t afford to miss a single
            leak alert.
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
            className="inline-flex items-center gap-3 rounded-full bg-[#38E0FF] px-6 py-2 text-sm font-semibold text-[#021026] shadow-[0_18px_45px_rgba(56,224,255,0.35)] transition hover:shadow-[0_24px_60px_rgba(56,224,255,0.45)]cursor-pointer"
          >
            <span>Book a Free Trial</span>
            {/* <ArrowRight className="h-4 w-4" /> */}
            <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#38E0FF]/80 to-[#38E0FF]/20 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
          <p className="pt-4 text-xs uppercase tracking-[0.3em] text-[#586694]">
            © 2025 sam ai
          </p>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-10 text-sm md:grid-cols-3 lg:gap-16">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7687B4]">
              Product
            </h4>
            <ul className="mt-5 space-y-3 text-[#C6CBE3]">
              {footerLinks.product.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7687B4]">
              Company
            </h4>
            <ul className="mt-5 space-y-3 text-[#C6CBE3]">
              {footerLinks.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7687B4]">
              Social Media
            </h4>
            <ul className="mt-5 space-y-3 text-[#C6CBE3]">
              {footerLinks.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <p className="mt-16 text-center text-xs uppercase tracking-[0.28em] text-[#4D5C86]">
        sam ai.
      </p> */}
    </footer>
  );
};

export default Footer;
