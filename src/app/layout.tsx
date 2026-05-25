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
    "Senior software engineer with 8 years building enterprise Angular, .NET Core, and React systems. Shipped an ERP/WMS from scratch, scaled logistics across 15+ countries, and delivered headless commerce for LEGO, Crate & Barrel, and AllSaints. Remote from Izmir, Türkiye.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "16x16 32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "icon", url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
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
          content="Senior software engineer with 8 years building enterprise Angular, .NET Core, and React systems. Shipped an ERP/WMS from scratch, scaled logistics across 15+ countries, and delivered headless commerce for LEGO, Crate & Barrel, and AllSaints. Remote from Izmir, Türkiye."
        />

        {/* Open Graph */}
        <meta property="og:url" content="https://ozkandogu.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Özkan Doğu — Senior Software Engineer" />
        <meta
          property="og:description"
          content="Senior software engineer with 8 years building enterprise Angular, .NET Core, and React systems. Shipped an ERP/WMS from scratch, scaled logistics across 15+ countries, and delivered headless commerce for LEGO, Crate & Barrel, and AllSaints. Remote from Izmir, Türkiye."
        />
        <meta property="og:image" content="/zen-og.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ozkandogu.dev" />
        <meta property="twitter:url" content="https://ozkandogu.dev/" />
        <meta name="twitter:title" content="Özkan Doğu — Senior Software Engineer" />
        <meta
          name="twitter:description"
          content="Senior software engineer with 8 years building enterprise Angular, .NET Core, and React systems. Shipped an ERP/WMS from scratch, scaled logistics across 15+ countries, and delivered headless commerce for LEGO, Crate & Barrel, and AllSaints. Remote from Izmir, Türkiye."
        />
        <meta name="twitter:image" content="/zen-og.png" />

        {/* Author */}
        <meta name="author" content="Özkan Doğu" />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
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
