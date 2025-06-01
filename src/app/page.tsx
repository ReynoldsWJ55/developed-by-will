"use client";

import { motion } from "framer-motion";
import Head from "@/components/Head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Code2,
  TrendingUp,
  Building2,
  BarChart3,
  CheckCircle,
  ExternalLink,
  Users,
  Award,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Business Development",
    description: "Strategic market expansion and partnership development across Thailand and ASEAN markets",
    features: ["Market entry strategy", "Partnership development", "Cross-cultural engagement"],
  },
  {
    icon: TrendingUp,
    title: "Marketing Strategy",
    description: "Data-driven customer acquisition and brand positioning for competitive markets",
    features: ["Organic marketing", "Content strategy", "Customer acquisition"],
  },
  {
    icon: BarChart3,
    title: "Operations Excellence",
    description: "Digital transformation and process optimization for sustainable growth",
    features: ["Analytics implementation", "Process optimization", "Performance management"],
  },
  {
    icon: Code2,
    title: "Technical Implementation",
    description: "Frontend development and marketing technology to support business initiatives",
    features: ["Website development", "Analytics setup", "Marketing automation"],
  },
];

const achievements = [
  { number: "20+", label: "Years Experience" },
  { number: "5+", label: "Years in Thailand" },
  { number: "300%", label: "Average Growth" },
];

// Custom SVG Components (matching projects page)
const VisaIcon = () => (
  <svg className="w-8 h-8 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="6" width="20" height="12" rx="2" ry="2" />
    <path d="M6 10h12" />
    <circle cx="7" cy="14" r="0.5" fill="currentColor"/>
    <circle cx="12" cy="14" r="0.5" fill="currentColor"/>
    <circle cx="17" cy="14" r="0.5" fill="currentColor"/>
    <path d="M20 8V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v2" fill="none"/>
  </svg>
);

const CameraIcon = () => (
  <svg className="w-8 h-8 text-purple-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
    <circle cx="12" cy="13" r="2" fill="currentColor"/>
  </svg>
);

const CompassIcon = () => (
  <svg className="w-8 h-8 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" fill="currentColor"/>
    <path d="M12 2v4"/>
    <path d="M12 18v4"/>
    <path d="M2 12h4"/>
    <path d="M18 12h4"/>
  </svg>
);

const featuredProjects = [
  {
    title: "V Goal Visa Service",
    description: "Complete digital transformation for Bangkok's leading visa consultancy, creating bilingual platform for Thai and international markets",
    url: "https://vgoalvisaservice.com",
    tags: ["Next.js", "Bilingual SEO", "Vercel CI/CD", "Business Development"],
    impact: "300% increase in online inquiries",
    icon: <VisaIcon />,
    category: "Business Development",
  },
  {
    title: "WJR Visuals",
    description: "High-performance photography portfolio engineered for speed and visual impact with advanced gallery systems",
    url: "https://wjrvisuals.com",
    tags: ["Performance Engineering", "Image Optimization", "Portfolio Design"],
    impact: "50% faster load times",
    icon: <CameraIcon />,
    category: "Technical Implementation",
  },
  {
    title: "Thailand Wanderer",
    description: "Strategic content platform capturing Thailand travel market through authentic storytelling and market research",
    url: "https://thailand-wanderer.com",
    tags: ["Content Strategy", "Market Research", "SEO Strategy", "Brand Development"],
    impact: "200% content growth",
    icon: <CompassIcon />,
    category: "Marketing Strategy",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Head
        title="Will Reynolds | Business Development & Marketing Strategy in Thailand"
        description="Strategic business development and marketing expert with 20+ years global experience. Specializing in Thailand market expansion, ASEAN growth strategies, and digital transformation for international businesses."
        url="https://developedbywill.com"
        image="/images/og-home.jpg"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://developedbywill.com/#person",
          name: "Will Reynolds",
          alternateName: "William Reynolds",
          url: "https://developedbywill.com",
          sameAs: [
            "https://www.linkedin.com/in/reynoldswj/",
            "https://github.com/ReynoldsWJ55"
          ],
          jobTitle: "Business Development & Marketing Strategy Consultant",
          description: "Strategic business development and marketing expert with 20+ years global experience, specializing in Thailand market expansion and ASEAN growth strategies.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bangkok",
            addressCountry: "Thailand"
          },
          areaServed: [
            {
              "@type": "Country",
              name: "Thailand"
            },
            {
              "@type": "Place", 
              name: "ASEAN"
            }
          ],
          knowsAbout: [
            "Business Development",
            "Marketing Strategy", 
            "Thailand Market Expansion",
            "ASEAN Business Growth",
            "Cross-cultural Business Development",
            "Digital Transformation",
            "Operations Excellence"
          ],
          hasOccupation: {
            "@type": "Occupation",
            name: "Business Development Consultant",
            occupationLocation: {
              "@type": "City",
              name: "Bangkok, Thailand"
            },
            skills: "Thailand business development, ASEAN market expansion, marketing strategy, digital transformation"
          },
          alumniOf: {
            "@type": "EducationalOrganization",
            name: "International University Bangkok",
            description: "MBA Program"
          }
        }}
      />
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                  Business Growth in
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                    Thailand & ASEAN
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Strategic business development and marketing expertise for market expansion across Southeast Asia. 
                  20+ years global experience with deep Thailand market knowledge.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
              >
                <a
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center border-2 border-gray-300 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                >
                  View Portfolio
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </motion.div>

              {/* Achievement Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
              >
                {achievements.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Strategic Market Expansion
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive business development and marketing strategies tailored for success in Thailand and Southeast Asian markets.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gradient-to-br from-gray-50 to-blue-50/30 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Strategic business development and marketing projects showcasing real transformation in Thailand markets.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 flex items-center justify-center mr-4">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {project.title}
                        </h3>
                        <span className={`text-sm font-medium ${
                          project.category === 'Business Development' ? 'text-blue-600' :
                          project.category === 'Marketing Strategy' ? 'text-green-600' :
                          'text-purple-600'
                        }`}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                      {project.impact}
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      View Project
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <a
                href="/projects"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Scale Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join ambitious businesses already transforming their markets with elite development and strategic growth.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}