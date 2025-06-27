// src/app/layout.js

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/pages/hf/Navbar";
import Footer from "@/components/pages/hf/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "S&IB Services Private Limited",
  description: "Best Security Service in Kolkata",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
