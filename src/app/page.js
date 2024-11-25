import Head from "@/components/Head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  Code,
  Globe,
  Palette,
  Terminal,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* SEO Metadata */}
      <Head
        title="Home - Developed by Will"
        description="Welcome to Developed by Will, a portfolio of modern web development projects and responsive designs."
        url="https://developedbywill.com"
        image="/images/home-og.jpg"
      />
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                Developed by{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Will
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Developer, Designer, and Marketer specializing in creating
                innovative web solutions with clean code and thoughtful design
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="mailto:will@developedbywill.com"
                  target="_blank"
                  className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  Contact Me
                  <Mail className="ml-2 w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/reynoldswj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-gray-300 bg-white text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  LinkedIn
                  <Linkedin className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-gray-50 py-20" aria-labelledby="skills-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="skills-heading"
              className="text-3xl font-bold text-gray-900 mb-12 text-center"
            >
              Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-4 gap-8" role="list">
              <div
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
                role="listitem"
              >
                <div className="flex justify-center mb-4">
                  <Code className="w-8 h-8 text-blue-600" aria-hidden="true" />
                </div>
                <h3
                  className="text-lg font-semibold mb-2 text-gray-900"
                  id="web-dev-heading"
                >
                  Web Development
                </h3>
                <p className="text-gray-700" aria-labelledby="web-dev-heading">
                  Building responsive, mobile-first designs using modern
                  frameworks and best practices
                </p>
              </div>

              <div
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
                role="listitem"
              >
                <div className="flex justify-center mb-4">
                  <Palette
                    className="w-8 h-8 text-purple-600"
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className="text-lg font-semibold mb-2 text-gray-900"
                  id="uiux-heading"
                >
                  UI/UX Design
                </h3>
                <p className="text-gray-700" aria-labelledby="uiux-heading">
                  Creating intuitive and visually appealing user experiences
                </p>
              </div>

              <div
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
                role="listitem"
              >
                <div className="flex justify-center mb-4">
                  <Globe
                    className="w-8 h-8 text-green-600"
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className="text-lg font-semibold mb-2 text-gray-900"
                  id="marketing-heading"
                >
                  Digital Marketing
                </h3>
                <p
                  className="text-gray-700"
                  aria-labelledby="marketing-heading"
                >
                  Driving brand awareness and promoting projects across
                  platforms
                </p>
              </div>

              <div
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
                role="listitem"
              >
                <div className="flex justify-center mb-4">
                  <Terminal
                    className="w-8 h-8 text-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className="text-lg font-semibold mb-2 text-gray-900"
                  id="devops-heading"
                >
                  DevOps
                </h3>
                <p className="text-gray-700" aria-labelledby="devops-heading">
                  Implementing CI/CD pipelines with GitHub and Microsoft Azure
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-white py-20" aria-labelledby="projects-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="projects-heading"
              className="text-3xl font-bold text-gray-900 mb-12 text-center"
            >
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <a
                href="https://vgoalvisaservice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
                aria-label="Visit V Goal Visa Service website"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors text-center">
                  V Goal Visa Service
                </h3>
                <p className="text-gray-700 mb-4">
                  Expert visa consulting in Bangkok, Thailand. Built with a
                  bilingual interface, mobile-first approach, and modern
                  JavaScript features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {["UI/UX", "Next.js", "Azure", "CI/CD"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-sm text-gray-500 justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                  Visit Site
                </div>
              </a>

              <a
                href="https://wjrvisuals.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
                aria-label="Visit WJR Visuals photography portfolio"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors text-center">
                  WJR Visuals
                </h3>
                <p className="text-gray-700 mb-4">
                  Photography portfolio featuring travel, landscape, and sports
                  photography. Includes lightbox galleries and optimized image
                  loading.
                </p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {["Photography", "JavaScript", "Azure", "Gallery"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
                <div className="flex items-center text-sm text-gray-500 justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                  Visit Site
                </div>
              </a>

              <a
                href="https://thailand-wanderer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
                aria-label="Visit Thailand Wanderer travel blog"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors text-center">
                  Thailand Wanderer
                </h3>
                <p className="text-gray-700 mb-4">
                  Travel blog showcasing off-the-beaten-path destinations in
                  Thailand, featuring cultural insights and travel tips.
                </p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {["Blog", "Content", "Travel", "SEO"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-sm text-gray-500 justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                  Visit Site
                </div>
              </a>

              <a
                href="https://baanpavee.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
                aria-label="Visit Baan Pavee real estate platform"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors text-center">
                  Baan Pavee
                </h3>
                <p className="text-gray-700 mb-4">
                  Real estate platform with interactive maps and advanced
                  filtering, simplifying property searches in Thailand.
                </p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {["Next.js", "React", "Maps", "Filters"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-sm text-gray-500 justify-center">
                  <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                  Visit Site
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Add Footer here */}
      <Footer />
    </div>
  );
}
