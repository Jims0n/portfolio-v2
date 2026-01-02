import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { siteConfig } from "@/lib/site-config";

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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.author.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Software Developer",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Blockchain Developer",
    "Solana",
    "Portfolio",
    "Abdulateef Jimson",
  ],
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@_Jimson__",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary text-white`}
      >
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-primary focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="min-h-screen pt-20 overflow-hidden">
          {children}
        </main>

        <footer className="py-8 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} {siteConfig.author.name}. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-accent transition-colors text-sm"
                  aria-label="GitHub Profile"
                >
                  GitHub
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-accent transition-colors text-sm"
                  aria-label="LinkedIn Profile"
                >
                  LinkedIn
                </a>
                <a
                  href={siteConfig.links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-accent transition-colors text-sm"
                  aria-label="Twitter Profile"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
