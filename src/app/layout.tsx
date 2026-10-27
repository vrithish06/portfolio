import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rithishreddy.me"),
  title: "Rithish Reddy | Student at IIT Ropar",
  description:
    "Personal portfolio of Rithish Reddy, former Software Engineering Intern at Google and B.Tech student at IIT Ropar. Specializing in distributed systems, backend infrastructure, and scalable software.",
  keywords: [
    "Rithish Reddy",
    "IIT Ropar",
    "Google",
    "Software Engineering Intern",
    "Distributed Systems",
    "Backend Developer",
  ],
  authors: [{ name: "Rithish Reddy" }],
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
      <body className="min-h-full bg-[#09090b] text-zinc-100 flex flex-col selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
