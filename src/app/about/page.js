"use client";

import { useMemo } from "react";
import Head from "@/components/Head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Terminal, Palette, Globe, Code } from "lucide-react";
import Image from "next/image";

export default function About() {
  // Refactored skills array
  const skills = useMemo(
    () => [
      {
        category: "Frontend Development",
        items: ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind CSS"],
        icon: "Terminal", // String representation for the icon
      },
      {
        category: "Design & User Experience",
        items: ["Responsive Design", "UI/UX", "Figma", "Adobe XD"],
        icon: "Palette",
      },
      {
        category: "Learning Backend Basics",
        items: ["Python", "SQL"],
        icon: "Globe",
      },
      {
        category: "Tools & Technologies",
        items: ["Git", "VS Code"],
        icon: "Code",
      },
    ],
    []
  );

  // Map of icons for dynamic rendering
  const iconComponents = {
    Terminal: <Terminal className="w-8 h-8 text-blue-600" />,
    Palette: <Palette className="w-8 h-8 text-purple-600" />,
    Globe: <Globe className="w-8 h-8 text-green-600" />,
    Code: <Code className="w-8 h-8 text-indigo-600" />,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Metadata */}
      <Head
        title="About - Developed by Will"
        description="Learn more about Will, a passionate web developer with expertise in modern web technologies and responsive design."
        keywords="Will Reynolds, web developer, about Will, portfolio, responsive design, web technologies"
        url="https://developedbywill.com/about"
        image="/images/about-og.jpg"
      />
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction Section */}
          <section className="mb-16 text-center">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-8">
                  About Me
                </h1>
                <div className="prose prose-lg">
                  <p className="text-gray-600 mb-4">
                    Hi, I&apos;m Will! My web development journey began with CSS
                    and SCSS, where I honed my skills in building clean,
                    responsive layouts. More recently, I&apos;ve started
                    exploring frameworks like Bootstrap and Tailwind CSS to
                    create scalable and modern designs.
                  </p>
                  <p className="text-gray-600 mb-4">
                    While I&apos;m still learning JavaScript and backend
                    technologies like Python and SQL, I bring strong attention
                    to detail and a passion for design to every project. I
                    strive to build websites that are not only functional but
                    also user-friendly and visually appealing.
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <div className="flex justify-center">
                <div className="relative w-80 h-80">
                  <Image
                    src="/images/will.jpg"
                    alt="Will Reynolds"
                    fill
                    priority
                    className="rounded-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center">
              {skills.map((skillSet) => (
                <div
                  key={skillSet.category}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex flex-col items-center mb-4">
                    {iconComponents[skillSet.icon]}
                    <h3 className="text-xl font-semibold text-gray-800 mt-4">
                      {skillSet.category}
                    </h3>
                  </div>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    {skillSet.items.map((item) => (
                      <li key={item}>
                        <span className="text-blue-500 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
