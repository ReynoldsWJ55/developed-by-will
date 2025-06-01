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
    default: "Will Reynolds | Business Development & Marketing Strategy in Thailand",
    template: "%s | Will Reynolds"
  },
  description:
    "Strategic business development and marketing expert with 20+ years global experience. Specializing in Thailand market expansion, ASEAN growth strategies, and digital transformation for international businesses.",
  keywords: [
    "Thailand business development",
    "ASEAN market expansion", 
    "Bangkok business consultant",
    "Thailand marketing strategy",
    "Southeast Asia business growth",
    "international business Thailand",
    "cross-cultural business development",
    "Thailand market entry",
    "ASEAN business strategy",
    "Bangkok MBA consultant"
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
    siteName: "Will Reynolds - Business Development & Marketing Strategy",
    title: "Will Reynolds | Business Development & Marketing Strategy in Thailand",
    description: "Strategic business development and marketing expert with 20+ years global experience. Specializing in Thailand market expansion and ASEAN growth strategies.",
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
    title: "Will Reynolds | Business Development & Marketing Strategy in Thailand",
    description: "Strategic business development and marketing expert with 20+ years global experience. Specializing in Thailand market expansion and ASEAN growth strategies.",
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