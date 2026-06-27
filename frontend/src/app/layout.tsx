import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Adithya | Full Stack Developer to AI Engineer",
  description:
    "Portfolio platform for Adithya, showcasing full stack engineering, cloud experience, and an AI engineering journey."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-ink text-cloud antialiased`}>{children}</body>
    </html>
  );
}

