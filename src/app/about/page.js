"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EmailObfuscation from "@/components/EmailObfuscation";
import { Mail, Github, Send } from "lucide-react";

import { Terminal, Palette, Globe, Code } from "lucide-react";

export default function About() {
  const skills = [
    {
      category: "Frontend Development",
      items: ["HTML", "CSS", "SCSS", "Bootstrap", "Tailwind CSS"],
      icon: <Terminal className="w-8 h-8 text-blue-600" />,
    },
    {
      category: "Design & User Experience",
      items: ["Responsive Design", "UI/UX", "Figma", "Adobe XD"],
      icon: <Palette className="w-8 h-8 text-purple-600" />,
    },
    {
      category: "Learning Backend Basics",
      items: ["Python", "SQL"],
      icon: <Globe className="w-8 h-8 text-green-600" />,
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "VS Code"],
      icon: <Code className="w-8 h-8 text-indigo-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <section className="mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              About Me
            </h1>
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-4">
                Hi, I&apos;m Will! My web development journey began with CSS and
                SCSS, where I honed my skills in building clean, responsive
                layouts. More recently, I've started exploring frameworks like
                Bootstrap and Tailwind CSS to create scalable and modern
                designs.
              </p>
              <p className="text-gray-600 mb-4">
                While I&apos;m still learning JavaScript and backend
                technologies like Python and SQL, I bring strong attention to
                detail and a passion for design to every project. I strive to
                build websites that are not only functional but also
                user-friendly and visually appealing.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillSet) => (
                <div
                  key={skillSet.category}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex items-center mb-4">
                    {skillSet.icon}
                    <h3 className="text-xl font-semibold text-gray-800 ml-4">
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
      {/* Footer */}
      <Footer />
    </div>
  );
}
