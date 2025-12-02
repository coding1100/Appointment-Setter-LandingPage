import type { Metadata } from "next";
import "./globals.css";
import Toaster from "./Components/Toaster";

export const metadata: Metadata = {
  title: "Sam AI Rep - Answer plumbing calls instantly",
  description:
    "Answer plumbing calls instantly. Qualify intelligently. Book automatically.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{ fontFamily: 'Inter, "PingFang SC", Helvetica, sans-serif' }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
