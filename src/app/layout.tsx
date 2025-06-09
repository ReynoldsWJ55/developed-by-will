import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: {
    default: "Thailand Business Consultant Bangkok | Will Reynolds | ASEAN Market Expansion Expert",
    template: "%s | Will Reynolds - Thailand Business Expert"
  },
  description:
    "Thailand business consultant with global experience helping international companies expand in Bangkok and ASEAN markets. Expert in market entry strategy, digital transformation, and cross-cultural business development based in Thailand.",
  keywords: [
    "Thailand business consultant Bangkok",
    "ASEAN market expansion expert", 
    "Bangkok business development consultant",
    "Thailand market entry strategy",
    "international business consultant Thailand",
    "cross-cultural business development ASEAN",
    "Thailand digital transformation consultant",
    "Bangkok marketing strategy expert",
    "Southeast Asia business growth consultant",
    "Thailand market research consultant",
    "ASEAN business strategy advisor",
    "Bangkok international business expert",
    "how to enter Thailand market",
    "Thailand business expansion services",
    "ASEAN market entry consulting"
  ],
  authors: [{ name: "Will Reynolds", url: "https://developedbywill.com" }],
  creator: "Will Reynolds",
  publisher: "Will Reynolds",
  category: "Business Consulting",
  classification: "Business Development and Marketing Strategy",
  metadataBase: new URL("https://developedbywill.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://developedbywill.com",
    siteName: "Will Reynolds - Thailand Business Consultant Bangkok",
    title: "Thailand Business Consultant Bangkok | Will Reynolds | ASEAN Market Expert",
    description: "Expert Thailand business consultant with global experience helping international companies expand in Bangkok and ASEAN markets. Specializing in market entry, digital transformation, and strategic growth.",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Will Reynolds - Business Development & Marketing Strategy Expert in Thailand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thailand Business Consultant Bangkok | Will Reynolds | ASEAN Market Expert",
    description: "Expert Thailand business consultant with global experience helping international companies expand in Bangkok and ASEAN markets. Specializing in market entry, digital transformation, and strategic growth.",
    images: ["/images/twitter-card.jpg"],
    creator: "@willreynolds",
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
    shortcut: "/favicon-16x16.png", 
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#209CEE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-domain="developedbywill.com"
          src="https://analytics.developedbywill.com/js/script.js"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.plausible = window.plausible || function() {
                (window.plausible.q = window.plausible.q || []).push(arguments)
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}