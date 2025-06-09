"use client";

import { motion } from "framer-motion";
import Head from "@/components/Head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  TrendingUp, 
  Building2, 
  BarChart3, 
  Code2,
  MapPin, 
  Award,
  Users,
  Target,
  Globe,
  Briefcase
} from "lucide-react";
import Image from "next/image";

type IconType = 'TrendingUp' | 'Building2' | 'BarChart3' | 'Code2' | 'Target' | 'Globe';

interface Expertise {
  category: string;
  description: string;
  skills: string[];
  icon: IconType;
}

const expertise: Expertise[] = [
  {
    category: "Business Development",
    description: "Strategic growth initiatives and market expansion across Thailand and ASEAN markets",
    skills: ["Market Entry Strategy", "Partnership Development", "Revenue Growth", "Cross-cultural Stakeholder Engagement", "ASEAN Market Expansion"],
    icon: "Building2",
  },
  {
    category: "Marketing Strategy", 
    description: "Data-driven marketing and customer acquisition strategies for competitive markets",
    skills: ["Customer Acquisition", "Content Marketing", "SEO Strategy", "Social Media Marketing", "Brand Positioning"],
    icon: "TrendingUp",
  },
  {
    category: "Operations Excellence",
    description: "Operational leadership and digital transformation for sustainable business growth",
    skills: ["Process Optimization", "Digital Transformation", "Analytics Implementation", "Performance Management", "Team Leadership"],
    icon: "BarChart3",
  },
  {
    category: "Technical Implementation",
    description: "Frontend development skills to support marketing and business initiatives",
    skills: ["Next.js", "React", "Website Development", "Analytics Setup", "Marketing Technology"],
    icon: "Code2",
  },
];

const achievements = [
  {
    icon: Globe,
    number: "Global",
    label: "Business Experience",
    description: "International operations and leadership background"
  },
  {
    icon: Briefcase,
    number: "5+",
    label: "Years in Thailand",
    description: "Deep understanding of ASEAN markets"
  },
  {
    icon: TrendingUp,
    number: "300%",
    label: "Client Growth",
    description: "Average business growth achieved"
  },
];

export default function About() {
  const iconComponents: Record<IconType, React.ReactElement> = {
    TrendingUp: <TrendingUp className="w-8 h-8 text-green-600" />,
    Building2: <Building2 className="w-8 h-8 text-blue-600" />,
    BarChart3: <BarChart3 className="w-8 h-8 text-purple-600" />,
    Code2: <Code2 className="w-8 h-8 text-orange-600" />,
    Target: <Target className="w-8 h-8 text-red-600" />,
    Globe: <Globe className="w-8 h-8 text-indigo-600" />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Head
        title="About Will Reynolds | Thailand Business Consultant Bangkok | Global ASEAN Expert"
        description="Meet Will Reynolds: Leading Thailand business consultant with global experience helping international companies succeed in Bangkok and ASEAN markets. Expert in market entry, cross-cultural business development, and digital transformation."
        url="https://developedbywill.com/about"
        image="/images/about-og.jpg"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": "https://developedbywill.com/about",
          url: "https://developedbywill.com/about",
          name: "About Will Reynolds",
          description: "Learn about Will Reynolds' 20+ years of global business experience and expertise in Thailand market expansion and ASEAN business development.",
          mainEntity: {
            "@type": "Person",
            "@id": "https://developedbywill.com/#person",
            name: "Will Reynolds",
            alternateName: "William Reynolds",
            jobTitle: "Business Development & Marketing Strategy Consultant",
            description: "Business development and marketing strategy expert with global experience, specializing in Thailand market expansion and ASEAN growth strategies.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bangkok",
              addressCountry: "Thailand"
            },
            hasCredential: [
              {
                "@type": "EducationalOccupationalCredential",
                name: "MBA",
                credentialCategory: "degree",
                educationalLevel: "Master's",
                recognizedBy: {
                  "@type": "EducationalOrganization",
                  name: "International University Bangkok"
                }
              }
            ],
            knowsAbout: [
              "Thailand Business Development",
              "ASEAN Market Expansion",
              "Cross-cultural Stakeholder Engagement", 
              "Digital Transformation",
              "Operations Excellence",
              "Marketing Strategy",
              "Partnership Development"
            ],
            hasOccupation: {
              "@type": "Occupation",
              name: "Business Development Consultant",
              description: "Strategic business development and marketing expert specializing in Thailand and ASEAN markets",
              occupationLocation: {
                "@type": "City",
                name: "Bangkok, Thailand"
              },
              experienceRequirements: "Global business experience with Thailand market expertise",
              skills: [
                "Market Entry Strategy",
                "Partnership Development", 
                "Customer Acquisition",
                "Digital Transformation",
                "Process Optimization"
              ]
            }
          }
        }}
      />
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Driving Business Growth in
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Thailand & ASEAN
                  </span>
                </h1>
                <div className="prose prose-lg text-left">
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    I&apos;m <strong>Will</strong> — a business development expert with global experience, specializing in driving growth across Thailand and Southeast Asian markets.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    Based in <strong>Bangkok for 5+ years</strong>, I combine deep regional market knowledge with international business expertise. I help organizations navigate Thailand&apos;s dynamic business landscape through strategic marketing, operational excellence, and cross-cultural stakeholder engagement.
                  </p>
                  <p className="text-lg text-gray-600">
                    I&apos;m expanding my expertise in digital business transformation and marketing strategy to help businesses thrive in Southeast Asia&apos;s fast-evolving markets.
                  </p>
                </div>
                
                <div className="flex items-center mt-8 pt-6 border-t border-gray-200">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-600">Bangkok, Thailand • ASEAN Market Expert</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-center"
              >
                <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about-image.jpg"
                    alt="Will Reynolds - Business Development & Marketing Strategy Expert"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-[center_40%]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Achievements Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {achievement.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Expertise Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Core Competencies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Strategic business development and marketing expertise focused on sustainable growth in Thailand and ASEAN markets.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {expertise.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      {iconComponents[area.icon]}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {area.category}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {area.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {area.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience Highlight */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Current Focus: Digital Business Transformation
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">V Goal Visa Service</h3>
                    <p className="text-gray-600 mb-4">
                      Leading complete digital transformation for Bangkok&apos;s premier visa services firm, focusing on customer acquisition through strategic website redesign, organic marketing, and content-driven growth.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Directed Next.js website redevelopment with bilingual support</li>
                      <li>• Built comprehensive organic marketing strategy</li>
                      <li>• Implemented analytics and lead tracking systems</li>
                      <li>• Developed &quot;Visa News&quot; content hub for SEO authority</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Expertise</h3>
                    <p className="text-gray-600 mb-4">
                      Deep understanding of Thailand&apos;s business environment, regulatory landscape, and cultural nuances essential for successful market entry and expansion.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• 5+ years living and working in Bangkok</li>
                      <li>• Cross-cultural stakeholder engagement</li>
                      <li>• ASEAN market expansion strategies</li>
                      <li>• Local partnership development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Philosophy Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 lg:p-12 text-white">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  My Approach
                </h2>
                <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                  &ldquo;Successful business development in Thailand requires deep cultural understanding, strategic patience, and data-driven execution. I combine global business experience with local market expertise to create sustainable competitive advantages.&rdquo;
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Market-Driven</h3>
                    <p className="text-blue-100">Strategies tailored to Thailand&apos;s unique business environment</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Data-Driven</h3>
                    <p className="text-blue-100">Analytics and insights guide every strategic decision</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Relationship-Focused</h3>
                    <p className="text-blue-100">Building long-term partnerships for sustainable growth</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Expand in Thailand?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how strategic business development and marketing can accelerate your growth in Southeast Asia&apos;s most dynamic markets.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start the Conversation
                <TrendingUp className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}