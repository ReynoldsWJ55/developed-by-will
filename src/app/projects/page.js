import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Baan Paave",
      description:
        "A real estate platform designed to simplify property searches in Thailand, featuring interactive maps and advanced filtering options.",
      link: "#",
      github: "#",
      tags: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    },
    {
      title: "V Goal Visa Service",
      description:
        "A visa consultancy service website optimized for user engagement and streamlined information about visa options and requirements.",
      link: "#",
      github: "#",
      tags: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      title: "WJR Visuals",
      description:
        "A photography portfolio showcasing professional-grade travel and landscape photography with e-commerce capabilities.",
      link: "#",
      github: "#",
      tags: ["Next.js", "React", "Stripe", "AWS"],
    },
    {
      title: "Thailand-Wanderer",
      description:
        "A travel blog and YouTube channel website featuring off-the-beaten-path destinations, travel tips, and cultural insights in Thailand.",
      link: "#",
      github: "#",
      tags: ["Next.js", "React", "Tailwind CSS", "YouTube API"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">My Projects</h1>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-gray-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.link}
                      className="flex items-center text-gray-600 hover:text-gray-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      {/* Add Footer here */}
      <Footer />
    </div>
  );
}
