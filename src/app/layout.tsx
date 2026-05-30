import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Equity Africa | Powering Africa's Innovation & Transformation Ecosystem",
  description:
    "Where governments, institutions, businesses, innovators, and communities come together to build Africa's digital future through technology infrastructure, AI innovation, and future-ready talent.",
  keywords: [
    "Digital Inclusion Africa",
    "AI Innovation",
    "Digital Transformation",
    "Venture Ecosystems",
    "Government Modernization",
    "Kids Tech Fest",
    "Tech Conferences Africa",
  ],
  authors: [{ name: "Digital Equity Africa" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digitalequity.africa",
    title: "Digital Equity Africa | Shaping Africa's Digital Future",
    description:
      "Where governments, institutions, businesses, innovators, and communities come together to build Africa's digital future.",
    siteName: "Digital Equity Africa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-deepspace text-light-text selection:bg-cyan-electric/25 selection:text-white">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
