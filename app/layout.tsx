import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const heading = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["200", "400", "700", "800"],
  display: "swap",
});

const body = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prompt & Ship — AI Coding Consulting",
  description:
    "Ship faster with AI-powered development tools. Expert coaching for Claude Code, Cursor, Lovable, and more.",
  openGraph: {
    title: "Prompt & Ship — AI Coding Consulting",
    description:
      "Ship faster with AI-powered development tools. Expert coaching for Claude Code, Cursor, Lovable, and more.",
    type: "website",
    url: "https://promptandship.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompt & Ship — AI Coding Consulting",
    description:
      "Ship faster with AI-powered development tools. Expert coaching for Claude Code, Cursor, Lovable, and more.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${heading.variable} ${body.variable} ${mono.variable} font-sans antialiased bg-[#0a0a0a] text-zinc-100`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-500 focus:text-white focus:rounded-lg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
