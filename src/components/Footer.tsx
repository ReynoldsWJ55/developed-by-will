import { Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const obfuscatedEmail = () => {
    const user = "Will";
    const domain = "DevelopedbyWill.com";
    return `${user}@${domain}`;
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Thailand Market Entry", href: "/thailand-market-entry" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-navy-950 text-white py-16" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand and tagline */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block font-bold text-2xl text-white hover:text-gold-400 transition-colors mb-3">
            Developed by Will
          </Link>
          <p className="text-gray-400 text-sm">Thailand Business Development • ASEAN Market Expert</p>
        </div>

        {/* Footer Navigation */}
        <nav aria-label="Footer navigation" className="mb-10">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-400 hover:text-gold-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 rounded text-sm"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-10">
          <a
            href="https://www.linkedin.com/in/reynoldswj/"
            className="text-gray-400 hover:text-gold-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 rounded-lg p-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Will Reynolds on LinkedIn"
          >
            <Linkedin className="w-5 h-5" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${obfuscatedEmail()}`}
            className="text-gray-400 hover:text-gold-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 rounded-lg p-2"
            aria-label="Send email to Will Reynolds"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Developed by Will. All rights reserved. Bangkok, Thailand.
          </p>
        </div>
      </div>
    </footer>
  );
}
