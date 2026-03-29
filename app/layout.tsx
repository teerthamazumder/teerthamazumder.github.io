import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import RoamingAvatar from "@/components/RoamingAvatar";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teertha.dev"),
  title: "Teertha Mazumder — Senior Infrastructure & Security Analyst",
  description:
    "Senior Infrastructure and Security Analyst at the Government of Newfoundland and Labrador. Full-Stack Developer and AI/ML Engineer bridging enterprise infrastructure with modern software engineering.",
  keywords: [
    "Teertha Mazumder",
    "Infrastructure Engineer",
    "Security Analyst",
    "Full Stack Developer",
    "AI ML Engineer",
    "RHEL",
    "Cloud Architecture",
    "DevOps",
    "St. John's NL",
  ],
  authors: [{ name: "Teertha Mazumder" }],
  openGraph: {
    title: "Teertha Mazumder — Senior Infrastructure & Security Analyst",
    description:
      "Bridging enterprise infrastructure with software engineering and AI-driven innovation.",
    type: "website",
    images: [{ url: "/teertha-headshot.jpg", width: 1200, height: 630, alt: "Teertha Mazumder" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teertha Mazumder — Portfolio",
    description:
      "Senior Infrastructure & Security Analyst · AI/ML Developer · Full-Stack Engineer",
    images: ["/teertha-headshot.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body
        className="bg-[#050505] text-[#f0f0f0] font-inter antialiased"
        style={{ cursor: "none" }}
      >
        <CustomCursor />
        <RoamingAvatar />
        {children}
      </body>
    </html>
  );
}
