import type { Metadata } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import AppWrapper from "@/components/layout/AppWrapper";
import AnimatedDataStream from "@/components/3d/AnimatedDataStream";
import SecurityWrapper from "@/components/layout/SecurityWrapper";

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
  metadataBase: new URL("https://akhil-dev-portfolio.vercel.app"),
  title: "PAKHILDEV | P Akhil Dev - AI Engineer & Full Stack Developer",
  description: "Official portfolio of P Akhil Dev (PAKHILDEV) — AI Engineer and Full-Stack Developer specializing in artificial intelligence, autonomous agents, and luxury digital experiences.",
  keywords: [
    "PAKHILDEV",
    "pakhildev",
    "P Akhil Dev",
    "Akhil Dev",
    "adp-groups",
    "AI Engineer",
    "Full Stack Developer",
    "Machine Learning Engineer",
    "Next.js Developer",
    "Portfolio",
    "P Akhil Dev Portfolio",
  ],
  authors: [{ name: "P Akhil Dev (PAKHILDEV)", url: "https://www.linkedin.com/in/adp-groups/" }],
  creator: "P Akhil Dev (PAKHILDEV)",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    title: "PAKHILDEV | P Akhil Dev - AI Engineer & Full Stack Developer",
    description: "Official portfolio of P Akhil Dev (PAKHILDEV) — AI Engineer & Full Stack Developer. Connect on LinkedIn: https://www.linkedin.com/in/adp-groups/",
    url: "https://akhil-dev-portfolio.vercel.app",
    siteName: "PAKHILDEV",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PAKHILDEV | P Akhil Dev - AI Engineer & Full Stack Developer",
    description: "Official portfolio of P Akhil Dev (PAKHILDEV) — AI Engineer & Full Stack Developer.",
    creator: "@AkhilDev06",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google6f21b1973506728d",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "P Akhil Dev",
  alternateName: ["PAKHILDEV", "pakhildev", "Akhil Dev", "adp-groups"],
  url: "https://akhil-dev-portfolio.vercel.app",
  image: "https://akhil-dev-portfolio.vercel.app/portrait.jpg",
  jobTitle: "AI Engineer & Full Stack Developer",
  sameAs: [
    "https://www.linkedin.com/in/adp-groups/",
    "https://x.com/AkhilDev06",
    "https://github.com/Akhil-Dev-Git",
    "https://www.upwork.com/freelancers/~017c60e5c9a72ab018"
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Full Stack Development",
    "Next.js",
    "Autonomous Agents",
    "React",
    "Python"
  ],
  description: "AI Engineer and Full-Stack Developer architecting intelligent digital experiences."
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-text-primary selection:bg-hover-glow selection:text-white overflow-x-hidden w-full relative">
        <SecurityWrapper>
          <AnimatedDataStream />
          <CustomCursor />
          <SmoothScroll>
            <AppWrapper>
              {children}
            </AppWrapper>
          </SmoothScroll>
        </SecurityWrapper>
      </body>
    </html>
  );
}
