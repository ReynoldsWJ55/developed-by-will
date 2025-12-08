"use client";

import { motion } from "framer-motion";
import Head from "@/components/Head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  ExternalLink, 
  TrendingUp, 
  Users, 
  Search,
  Globe,
  MapPin,
  BarChart3,
  Zap,
  Award
} from "lucide-react";

interface ProjectMetric {
  label: string;
  value: string;
  icon: React.ReactElement;
}

interface MarketingStrategy {
  strategy: string;
  result: string;
}

interface Project {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  link: string;
  tags: string[];
  icon: React.ReactElement;
  metrics: ProjectMetric[];
  marketingStrategies: MarketingStrategy[];
  category: "Development" | "Marketing" | "Business";
}

// Custom SVG Components
const VisaIcon = () => (
  <svg className="w-8 h-8 text-brand-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" role="img" aria-label="Visa services icon">
    <rect x="2" y="6" width="20" height="12" rx="2" ry="2" />
    <path d="M6 10h12" />
    <circle cx="7" cy="14" r="0.5" fill="currentColor"/>
    <circle cx="12" cy="14" r="0.5" fill="currentColor"/>
    <circle cx="17" cy="14" r="0.5" fill="currentColor"/>
    <path d="M20 8V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v2" fill="none"/>
  </svg>
);

const CameraIcon = () => (
  <svg className="w-8 h-8 text-navy-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" role="img" aria-label="Photography portfolio icon">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
    <circle cx="12" cy="13" r="2" fill="currentColor"/>
  </svg>
);

const CompassIcon = () => (
  <svg className="w-8 h-8 text-gold-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" role="img" aria-label="Travel and exploration icon">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" fill="currentColor"/>
    <path d="M12 2v4"/>
    <path d="M12 18v4"/>
    <path d="M2 12h4"/>
    <path d="M18 12h4"/>
  </svg>
);

const projects: Project[] = [
  {
    title: "V Goal Visa Service",
    description: "Complete digital transformation for Bangkok's leading visa consultancy, creating a bilingual platform that serves both Thai and international markets.",
    challenge: "Local visa consultancy struggling with online presence and competing against established players in a saturated market.",
    solution: "Built a high-performance Next.js application with strategic SEO optimization, bilingual content management, and conversion-focused design.",
    link: "https://vgoalvisaservice.com",
    tags: ["Next.js", "Bilingual SEO", "Vercel CI/CD", "Conversion Optimization"],
    icon: <VisaIcon />,
    category: "Development",
    metrics: [
      { label: "Online Inquiries", value: "+300%", icon: <TrendingUp className="w-4 h-4 text-brand-600" /> },
      { label: "Page Load Speed", value: "1.2s", icon: <Zap className="w-4 h-4 text-gold-500" /> },
      { label: "User Engagement", value: "+180%", icon: <Users className="w-4 h-4 text-brand-600" /> },
      { label: "Mobile Traffic", value: "75%", icon: <Globe className="w-4 h-4 text-navy-600" /> }
    ],
    marketingStrategies: [
      { strategy: "Thai & English SEO Strategy", result: "Improved visibility for key visa service terms in both languages" },
      { strategy: "Content Marketing Hub", result: "Visa guides driving majority of organic traffic" },
      { strategy: "Local Business Optimization", result: "Google My Business optimization increased visibility" },
      { strategy: "Conversion Rate Optimization", result: "Streamlined inquiry process improved conversion rates" }
    ]
  },
  {
    title: "WJR Visuals Portfolio",
    description: "High-performance photography portfolio engineered for speed and visual impact, featuring advanced gallery systems and optimized image delivery.",
    challenge: "Photographer needed a portfolio that could showcase high-resolution work without sacrificing performance or user experience.",
    solution: "Custom-built gallery system with lazy loading, image optimization, and progressive enhancement for seamless browsing across devices.",
    link: "https://wjrvisuals.com",
    tags: ["Performance Engineering", "Image Optimization", "Vercel Deployment", "Progressive Enhancement"],
    icon: <CameraIcon />,
    category: "Development",
    metrics: [
      { label: "Load Time", value: "50% faster", icon: <Zap className="w-4 h-4 text-gold-500" /> },
      { label: "Image Optimization", value: "75% reduction", icon: <BarChart3 className="w-4 h-4 text-brand-600" /> },
      { label: "Mobile Performance", value: "95/100", icon: <Award className="w-4 h-4 text-gold-500" /> },
      { label: "Bounce Rate", value: "-40%", icon: <TrendingUp className="w-4 h-4 text-brand-600" /> }
    ],
    marketingStrategies: [
      { strategy: "Visual SEO Optimization", result: "Images optimized for search visibility and performance" },
      { strategy: "Portfolio Showcase Strategy", result: "Improved client inquiry flow through optimized gallery design" },
      { strategy: "Performance as Marketing", result: "Fast load times became a competitive differentiator" }
    ]
  },
  {
    title: "Thailand Wanderer",
    description: "Strategic content platform designed to capture the growing Thailand travel market through authentic storytelling and SEO-optimized destination guides.",
    challenge: "Highly competitive travel blog space with established players dominating search results for Thailand-related content.",
    solution: "Data-driven content strategy focusing on underserved long-tail keywords, local insights, and comprehensive destination coverage.",
    link: "https://thailand-wanderer.com",
    tags: ["Content Strategy", "SEO Strategy", "Market Research", "Brand Development"],
    icon: <CompassIcon />,
    category: "Marketing",
    metrics: [
      { label: "Content Growth", value: "+200%", icon: <TrendingUp className="w-4 h-4 text-brand-600" /> },
      { label: "Destination Guides", value: "50+ articles", icon: <MapPin className="w-4 h-4 text-gold-500" /> }
    ],
    marketingStrategies: [
      { strategy: "Long-tail Keyword Research", result: "Identified underserved content opportunities in Thailand travel" },
      { strategy: "Content Cluster Strategy", result: "Built comprehensive coverage of Thailand destinations" },
      { strategy: "Local SEO + Travel Content", result: "Created authentic local perspective on travel destinations" },
      { strategy: "Authentic Storytelling", result: "Developed unique voice and perspective in competitive market" }
    ]
  }
];

const categories = ["All", "Development", "Marketing", "Business"] as const;

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <Head
        title="Thailand Business Consulting Case Studies | Will Reynolds Portfolio Bangkok"
        description="Thailand business case studies: 300% growth for V Goal Visa, WJR Visuals portfolio, Thailand Wanderer content strategy. Real market entry success in Bangkok."
        url="https://developedbywill.com/projects"
        image="/images/projects-og.jpg"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": "https://developedbywill.com/projects",
          url: "https://developedbywill.com/projects",
          name: "Will Reynolds Project Portfolio",
          description: "Strategic business development and marketing projects showcasing real transformation in Thailand and ASEAN markets.",
          about: {
            "@type": "Thing",
            name: "Business Development Projects",
            description: "Thailand market expansion and digital transformation projects"
          },
          hasPart: [
            {
              "@type": "CreativeWork",
              "@id": "https://developedbywill.com/projects#vgoal",
              name: "V Goal Visa Service Digital Transformation",
              description: "Complete digital transformation for Bangkok's leading visa consultancy with bilingual platform and strategic marketing.",
              url: "https://vgoalvisaservice.com",
              creator: {
                "@type": "Person",
                "@id": "https://developedbywill.com/#person",
                name: "Will Reynolds"
              },
              about: [
                "Business Development",
                "Digital Transformation", 
                "Bilingual SEO",
                "Thailand Visa Services"
              ],
              result: "300% increase in online inquiries"
            },
            {
              "@type": "CreativeWork", 
              "@id": "https://developedbywill.com/projects#wjr",
              name: "WJR Visuals Performance Portfolio",
              description: "High-performance photography portfolio engineered for speed and visual impact with advanced gallery systems.",
              url: "https://wjrvisuals.com",
              creator: {
                "@type": "Person",
                "@id": "https://developedbywill.com/#person", 
                name: "Will Reynolds"
              },
              about: [
                "Performance Engineering",
                "Portfolio Design",
                "Image Optimization"
              ],
              result: "50% faster load times"
            },
            {
              "@type": "CreativeWork",
              "@id": "https://developedbywill.com/projects#wanderer", 
              name: "Thailand Wanderer Content Strategy",
              description: "Strategic content platform capturing Thailand travel market through authentic storytelling and market research.",
              url: "https://thailand-wanderer.com",
              creator: {
                "@type": "Person",
                "@id": "https://developedbywill.com/#person",
                name: "Will Reynolds"
              },
              about: [
                "Content Strategy",
                "Thailand Market Research", 
                "Travel Marketing",
                "SEO Strategy"
              ],
              result: "200% content growth"
            }
          ]
        }}
      />
      <Navigation />
      
      <main id="main-content" className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Success Stories
              <span className="block premium-gradient-text">
                That Drive Growth
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Three key projects showcasing business transformation through strategic development, 
              marketing excellence, and authentic market research in Thailand.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="premium-card rounded-3xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column - Project Info */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 flex items-center justify-center mr-4">
                        {project.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                          {project.title}
                        </h2>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          project.category === 'Development' ? 'bg-brand-100 text-brand-700' :
                          project.category === 'Marketing' ? 'bg-gold-100 text-gold-700' :
                          'bg-navy-100 text-navy-700'
                        }`}>
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Challenge & Solution */}
                    <div className="space-y-6 mb-8">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h3>
                        <p className="text-gray-600">{project.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
                        <p className="text-gray-600">{project.solution}</p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gradient-to-r from-brand-600 to-brand-700 text-white rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-6 py-3"
                    >
                      View Live Project
                      <ExternalLink className="ml-2 w-5 h-5" />
                    </a>
                  </div>

                  {/* Right Column - Metrics & Strategies */}
                  <div className="bg-gradient-to-br from-gray-50 to-brand-50 p-8 lg:p-12">
                    {/* Metrics */}
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Results</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {project.metrics.map((metric, metricIndex) => (
                          <motion.div
                            key={metricIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: metricIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                          >
                            <div className="flex items-center mb-2">
                              {metric.icon}
                              <span className="ml-2 text-sm text-gray-600">{metric.label}</span>
                            </div>
                            <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Marketing Strategies */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Marketing Strategies</h3>
                      <div className="space-y-4">
                        {project.marketingStrategies.map((strategy, strategyIndex) => (
                          <motion.div
                            key={strategyIndex}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: strategyIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                          >
                            <h4 className="font-semibold text-gray-900 mb-2">{strategy.strategy}</h4>
                            <p className="text-sm text-gray-600">{strategy.result}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-navy-950 to-brand-700 rounded-3xl p-12 text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready for Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s create a project that combines technical excellence with strategic marketing
                to drive real business growth.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center bg-gold-400 text-navy-950 px-8 py-4 rounded-xl font-semibold hover:bg-gold-300 transition-all duration-300 shadow-lg"
              >
                Start Your Project
                <TrendingUp className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}