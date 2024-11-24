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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
export const metadata = {
  title: "Developed by Will | Web Developer, Designer, and Marketer",
  description:
    "Professional web developer specializing in creating innovative web solutions with clean code and thoughtful design. Expert in UI/UX, digital marketing, and DevOps.",
  keywords:
    "web development, UI/UX design, digital marketing, DevOps, web developer",
};
