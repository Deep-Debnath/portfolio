import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deep Debnath Portfolio",
  description:
    "Deep Debnath is a passionate Frontend Developer skilled in React, Next.js, JavaScript, and modern UI development. Explore projects, skills, and professional experience.",
  keywords: [
    "Deep Debnath",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer Portfolio",
    "Habra Developer",
    "Kolkata Developer",
    "West Bengal Developer",

    "HTML CSS JavaScript",
    "TypeScript Developer",
    "Tailwind CSS Developer",
    "Material UI Developer",
    "MUI Developer",
    "Framer Motion Developer",
    "Responsive Web Design",
    "Modern UI Developer",
    "Frontend Engineer",

    "Vite Developer",
    "Redux Toolkit",
    "Zustand State Management",
    "React Router",
    "REST API Integration",
    "Git GitHub Developer",
    "Performance Optimized Websites",

    "Hire Frontend Developer",
    "Entry Level Frontend Developer",
    "Junior React Developer",
    "Frontend Developer India",
    "Portfolio Website Developer",
    "UI Developer India",
    "Freelance Frontend Developer",

    "E-commerce Website Developer",
    "Landing Page Developer",
    "Single Page Application Developer",
    "Interactive Web Applications",
  ],
  authors: [{ name: "Deep Debnath" }],
  creator: "Deep Debnath",
  metadataBase: new URL("https://deep-debnath-portfolio.vercel.app"),
  openGraph: {
    images: [
      {
        url: "https://deep-debnath-portfolio.vercel.app/portfolio_image.png",
        width: 1200,
        height: 630,
        alt: "Deep Debnath - Frontend Developer",
      },
    ],
    title: "Deep Debnath Portfolio",
    description:
      "Portfolio of Deep Debnath — Frontend Developer building modern, fast and scalable web applications.",
    url: "https://deep-debnath-portfolio.vercel.app",
    siteName: "Deep Debnath Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Debnath | Frontend Developer",
    description:
      "Frontend Developer skilled in React, Next.js, and modern UI development.",
    images: ["https://deep-debnath-portfolio.vercel.app/portfolio_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
