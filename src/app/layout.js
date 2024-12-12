// src/components/analytics/PlausibleProvider.js
import localFont from "next/font/local";
import "./globals.css";
import PlausibleProvider from "../components/analytics/PlausibleProvider";

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

export const metadata = {
  title: "Developed by Will | Web Developer, Designer, and Marketer",
  description:
    "Professional web developer specializing in creating innovative web solutions with clean code and thoughtful design. Expert in UI/UX, digital marketing, and DevOps.",
  keywords:
    "web development, UI/UX design, digital marketing, DevOps, web developer",
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon-16x16.png",
    apple: "/images/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#209CEE",
};

export default function RootLayout({ children }) {
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
