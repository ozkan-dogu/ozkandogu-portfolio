import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Footer from "./sections/Footer";
import { Header } from "./sections/Header";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetBrainMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Özkan Doğu — Senior Software Engineer",
  description:
    "Senior Software Engineer with 8+ years of full-stack experience. Angular, React, .NET Core, and Node.js — building scalable products for global teams from Izmir, Turkiye.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Özkan Doğu — Senior Software Engineer</title>
        <meta
          name="description"
          content="Senior Software Engineer with 8+ years of full-stack experience. Angular, React, .NET Core, and Node.js — building scalable products for global teams from Izmir, Turkiye."
        />

        {/* Open Graph */}
        <meta property="og:url" content="https://ozkandogu.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Özkan Doğu — Senior Software Engineer" />
        <meta
          property="og:description"
          content="Senior Software Engineer with 8+ years of full-stack experience. Angular, React, .NET Core, and Node.js — building scalable products for global teams from Izmir, Turkiye."
        />
        <meta property="og:image" content="/zen-og.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ozkandogu.dev" />
        <meta property="twitter:url" content="https://ozkandogu.dev/" />
        <meta name="twitter:title" content="Özkan Doğu — Senior Software Engineer" />
        <meta
          name="twitter:description"
          content="Senior Software Engineer with 8+ years of full-stack experience. Angular, React, .NET Core, and Node.js — building scalable products for global teams from Izmir, Turkiye."
        />
        <meta name="twitter:image" content="/zen-og.png" />

        {/* Author */}
        <meta name="author" content="Özkan Doğu" />
      </head>
      <body
        className={twMerge(
          inter.variable,
          jetBrainMono.variable,
          "bg-[#333333] text-[#D6D2BD] font-sans antialiased"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
