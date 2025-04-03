import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jimson | Software Developer",
  description: "Portfolio website of Abdulateef Jimson, a Software Developer specializing in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121212] text-white`}
      >
        <Header />
        <main className="min-h-screen pt-20 overflow-hidden">
          {children}
        </main>
        <footer className="py-6 text-center text-white/60 text-sm">
          <div className="container mx-auto">
            © {new Date().getFullYear()} Abdulateef Jimson. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
