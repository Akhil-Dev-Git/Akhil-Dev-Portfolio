import type { Metadata } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import AppWrapper from "@/components/layout/AppWrapper";
import AnimatedDataStream from "@/components/3d/AnimatedDataStream";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Akhil Dev | AI Engineer & Full Stack Developer",
  description: "Portfolio of Akhil Dev, an AI Engineer and Full-Stack Developer building intelligent products and luxury web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased dark`}
    >
      <body className="bg-background text-text-primary selection:bg-hover-glow selection:text-white overflow-x-hidden w-full relative">
        <AnimatedDataStream />
        <CustomCursor />
        <SmoothScroll>
          <AppWrapper>
            {children}
          </AppWrapper>
        </SmoothScroll>
      </body>
    </html>
  );
}
