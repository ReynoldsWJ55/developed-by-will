import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const obfuscatedEmail = () => {
    const user = "Will"; // Normal "Will"
    const domain = "DevelopedbyWill.com"; // Normal "DevelopedbyWill.com"
    return `${user}@${domain}`;
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          {/* GitHub Link */}
          <a
            href="https://github.com/ReynoldsWJ55"
            className="hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/reynoldswj/"
            className="hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          {/* Email Icon with Obfuscated mailto */}
          <a
            href={`mailto:${obfuscatedEmail()}`}
            className="hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-center mt-8 text-gray-400">
          © {new Date().getFullYear()} Developed by Will. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
