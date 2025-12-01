"use client";

import { Toaster as ReactHotToaster } from "react-hot-toast";

export default function Toaster() {
  return (
    <ReactHotToaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: "#0B162F",
          color: "#F5F7FF",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
        success: {
          iconTheme: {
            primary: "#38E0FF",
            secondary: "#0B162F",
          },
        },
        error: {
          iconTheme: {
            primary: "#FF6B6B",
            secondary: "#0B162F",
          },
        },
      }}
    />
  );
}
