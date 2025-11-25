import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface Navbarprops {}

const NavBar: FC<Navbarprops> = ({}) => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050915]/70 py-6 backdrop-blur-2xl">
      <div className="flex items-center justify-between sm:px-10 px-4 lg:container lg:mx-auto">
        <Link
          href="/"
          className="flex items-center space-x-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#9AA7D1]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#38E0FF] to-[#6F4BFF] text-base font-black text-[#04112D] shadow-[0_10px_25px_rgba(56,224,255,0.35)]">
            AI
          </span>
          <span className="hidden md:inline uppercase">Samairep</span>
        </Link>

        <div className="hidden items-center space-x-10 text-sm font-medium text-[#C6CBE3] lg:flex">
          <Link href="/product" className="transition hover:text-white">
            Product
          </Link>
          <Link href="/built" className="transition hover:text-white">
            Built for
          </Link>
          <Link href="/pricing" className="transition hover:text-white">
            Pricing
          </Link>
          <Link href="/about" className="transition hover:text-white">
            About Us
          </Link>
        </div>

        <Link
          href="/register"
          className="relative inline-flex items-center gap-2 rounded-full bg-[#38E0FF] px-6 py-2 text-sm font-semibold text-[#021026] shadow-[0_18px_45px_rgba(56,224,255,0.35)] transition-all hover:shadow-[0_24px_60px_rgba(56,224,255,0.45)]"
        >
          <span>Book a Free Trial</span>
          <ArrowRight className="h-4 w-4" />
          <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#38E0FF]/80 to-[#38E0FF]/20 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
