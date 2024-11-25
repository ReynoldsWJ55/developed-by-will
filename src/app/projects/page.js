import Head from "@/components/Head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink, Code, Globe, Palette, Terminal } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "V Goal Visa Service",
      description:
        "Expert visa consulting in Bangkok, Thailand. Built with a bilingual interface, mobile-first approach, and modern JavaScript features.",
      link: "https://vgoalvisaservice.com",
      tags: ["UI/UX", "Vanilla JS", "Azure", "CI/CD"],
      icon: <Globe className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "WJR Visuals",
      description:
        "Photography portfolio featuring travel, landscape, and sports photography. Includes lightbox galleries and optimized image loading.",
      link: "https://wjrvisuals.com",
      tags: ["Photography", "Vanilla JS", "Azure"],
      icon: <Palette className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Thailand Wanderer",
      description:
        "Travel blog showcasing off-the-beaten-path destinations in Thailand, featuring cultural insights and travel tips.",
      link: "https://thailand-wanderer.com",
      tags: ["Blog", "Content", "Travel", "SEO"],
      icon: <Terminal className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Baan Pavee",
      description:
        "Real estate platform with interactive maps and advanced filtering, simplifying property searches in Thailand.",
      link: "https://baanpavee.netlify.app",
      tags: ["Vanilla JS", "Netlify", "Filters"],
      icon: <Code className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Metadata */}
      <Head
        title="Projects - Developed by Will"
        description="Explore Will's portfolio of projects, showcasing responsive, scalable, and modern web applications built using the latest technologies."
        keywords="web development projects, modern design, portfolio, scalable applications, React projects, Next.js projects"
        url="https://developedbywill.com/projects"
        image="/images/projects-og.jpg"
      />
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of my recent work in web development, design, and
              digital solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300 relative"
              >
                <div className="p-8">
                  {/* Title and Icon Section */}
                  <div className="flex items-center justify-center mb-6 gap-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8 justify-center">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* External Link - Bottom Right */}
                  <div className="absolute bottom-6 right-6">
                    <a
                      href={project.link}
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors inline-flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} website`}
                    >
                      <span className="text-sm font-medium">Visit Site</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
