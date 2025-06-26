import React from "react";
import { IBM_Plex_Sans_Arabic, IBM_Plex_Mono } from "next/font/google";
import { websiteMetadata } from "@/lib/seo";
import "./globals.css";
import Script from "next/script";
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

        <Script>
          {`
  window.chatId = 'f230f0f0-e8ac-44f4-b791-28bccf38f86d';
  window.locale = 'ar';
  window.position = 'bottom-left';
  window.positionX = 30;
  window.positionY = 30;
  window.borderRadius = 3;
  window.helpdeskURL = 'https://manhali.zaetoon.com';
  (function () {
    d = document;
    s = d.createElement('script');
    s.src = 'https://manhali.zaetoon.com/assets/widget/zaetoon-widget.min.js';
    s.defer = 1;
    d.getElementsByTagName('head')[0].appendChild(s);
  })();`}
        </Script>
      </body>
    </html>
  );
}
