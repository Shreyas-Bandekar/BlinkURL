import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BlinkURL - URL Shortener",
  description: "A simple and fast URL shortening service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cyan-50`}
      >
        <Navbar/>
        <div className="min-h-[80vh] flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
