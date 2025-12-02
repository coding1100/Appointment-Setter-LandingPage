"use client";

import Footer from "@/app/Components/Footer";
import NavBar from "@/app/Components/Navbar";
import TermsofUse from "@/app/Components/TermsofUse";

export default function Page() {
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

      {/* <NavBar /> */}

      <main className="relative z-10">
        <TermsofUse />
      </main>

      {/* <Footer /> */}
    </div>
  );
}
