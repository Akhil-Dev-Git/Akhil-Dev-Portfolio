"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "../ui/LoadingScreen";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NetworkBackground from "../ui/NetworkBackground";
import CommandPalette from "../ui/CommandPalette";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  // Force scroll to top on every reload
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      {!isLoading && <Navbar />}
      <CommandPalette />
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.8s ease-in-out",
        }}
        className="relative min-h-screen"
      >
        <NetworkBackground />
        
        {children}
        <Footer />
      </div>
    </>
  );
}
