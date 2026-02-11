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
  title: "Deep Debnath | Frontend Developer",
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
  ],
  authors: [{ name: "Deep Debnath" }],
  creator: "Deep Debnath",
  metadataBase: new URL("https://deep-debnath-portfolio.vercel.app"),
  openGraph: {
    images: [
      {
        url: "./public/portfolio_image.png",
        width: 1200,
        height: 630,
        alt: "Deep Debnath - Frontend Developer",
      },
    ],
    title: "Deep Debnath | Frontend Developer",
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
    images: ["./public/portfolio_image.png"],
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
