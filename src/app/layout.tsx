import React from "react";
import { IBM_Plex_Sans_Arabic, IBM_Plex_Mono } from "next/font/google";
import { websiteMetadata } from "@/lib/seo";
import "./globals.css";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";

const fontSans = IBM_Plex_Sans_Arabic({
  variable: "--font-sans",
  subsets: ["latin", "arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  preload: true,
});

const fontMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = websiteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen bg-white">
          {/* Header */}
          <Header />

          {children}

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
