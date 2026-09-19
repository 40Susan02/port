import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Susan Dahal — BSc CSIT Student & Developer",
  description:
    "Personal portfolio of Susan Dahal, a BSc CSIT student at Kathmandu College of Technology, Tribhuvan University. Exploring web development, data analysis, and AI/ML.",
  metadataBase: new URL("https://susandahal.com.np"),
  openGraph: {
    title: "Susan Dahal — BSc CSIT Student & Developer",
    description:
      "Personal portfolio of Susan Dahal, a BSc CSIT student exploring web development, data analysis, and AI/ML.",
    type: "website",
    locale: "en_US",
    siteName: "Susan Dahal Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-ink font-body text-paper antialiased">
        {children}
      </body>
    </html>
  );
}
