import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

// TODO: Replace with your real name, description, URL, and OG image
export const metadata: Metadata = {
  title: {
    default: "MD Afsaruddin Nafim — Portfolio",
    template: "%s | MD Afsaruddin Nafim",
  },
  description:
    "TODO: Add your personal tagline / bio summary here for SEO and social sharing.",
  keywords: ["portfolio", "developer", "software engineer", "MD Afsaruddin Nafim"],
  authors: [{ name: "MD Afsaruddin Nafim" }],
  creator: "MD Afsaruddin Nafim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://TODO-your-domain.com", // TODO: Replace with real URL
    siteName: "MD Afsaruddin Nafim",
    title: "MD Afsaruddin Nafim — Portfolio",
    description: "TODO: Add your personal tagline / bio summary here.",
    images: [
      {
        url: "https://TODO-your-domain.com/og-image.png", // TODO: Add real OG image
        width: 1200,
        height: 630,
        alt: "MD Afsaruddin Nafim Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Afsaruddin Nafim — Portfolio",
    description: "TODO: Add your personal tagline / bio summary here.",
    // TODO: Add your Twitter handle
    // creator: "@your_handle",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-bg-base text-text-primary font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
