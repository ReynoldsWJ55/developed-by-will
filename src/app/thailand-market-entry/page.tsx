"use client";

import { motion } from "framer-motion";
import Head from "@/components/Head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  TrendingUp, 
  Building2, 
  BarChart3, 
  Users,
  CheckCircle,
  ArrowRight,
  MapPin,
  Globe
} from "lucide-react";

const marketEntrySteps = [
  {
    title: "Market Research & Analysis",
    description: "Comprehensive Thailand market research, competitor analysis, and opportunity assessment for your industry",
    icon: BarChart3,
    timeline: "2-4 weeks"
  },
  {
    title: "Legal & Regulatory Strategy", 
    description: "Navigate Thailand's business registration, BOI incentives, and regulatory requirements with expert guidance",
    icon: Building2,
    timeline: "3-6 weeks"
  },
  {
    title: "Local Partnership Development",
    description: "Identify and vet potential Thai business partners, distributors, and key stakeholders for market entry",
    icon: Users,
    timeline: "4-8 weeks"
  },
  {
    title: "Digital Market Entry",
    description: "Launch digital presence with Thailand-optimized website, local SEO, and Thai language content strategy",
    icon: Globe,
    timeline: "6-10 weeks"
  }
];

const challenges = [
  "Complex regulatory environment and BOI requirements",
  "Cultural differences in business practices and relationship building", 
  "Finding reliable local partners and distributors",
  "Understanding Thai consumer behavior and preferences",
  "Language barriers and communication challenges",
  "Competition from established local and international players"
];

export default function ThailandMarketEntry() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Head
        title="How to Enter Thailand Market | Complete Market Entry Guide Bangkok 2024"
        description="Expert guide to entering Thailand market: step-by-step market entry strategy, legal requirements, local partnerships, and digital expansion. Get proven Thailand business expansion advice from Bangkok consultant Will Reynolds."
        url="https://developedbywill.com/thailand-market-entry"
        image="/images/thailand-market-entry-og.jpg"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": "https://developedbywill.com/thailand-market-entry",
          "headline": "How to Enter Thailand Market: Complete Business Expansion Guide 2024",
          "description": "Comprehensive guide to Thailand market entry covering legal requirements, local partnerships, digital strategy, and proven expansion tactics for international businesses.",
          "author": {
            "@type": "Person",
            "@id": "https://developedbywill.com/#person",
            "name": "Will Reynolds",
            "jobTitle": "Thailand Business Consultant",
            "address": {
              "@type": "PostalAddress", 
              "addressLocality": "Bangkok",
              "addressCountry": "Thailand"
            }
          },
          "publisher": {
            "@type": "Organization",
            "name": "Developed by Will",
            "url": "https://developedbywill.com"
          },
          "datePublished": "2024-01-01",
          "dateModified": "2024-12-09",
          "about": [
            {
              "@type": "Thing",
              "name": "Thailand Market Entry",
              "description": "Business expansion strategies for entering Thailand market"
            },
            {
              "@type": "Place",
              "name": "Thailand",
              "description": "Southeast Asian market with growing business opportunities"
            }
          ],
          "mentions": [
            {
              "@type": "Organization",
              "name": "Board of Investment Thailand",
              "description": "Thai government agency promoting foreign investment"
            }
          ]
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
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              How to Enter
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Thailand Market
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Complete guide to Thailand market entry: proven strategies for international businesses 
              expanding into Bangkok and Southeast Asian markets.
            </p>
            <div className="flex items-center justify-center text-gray-600 mb-8">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Updated for 2024 • Bangkok Market Expert</span>
            </div>
          </motion.section>

          {/* Market Entry Process */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Thailand Market Entry Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Step-by-step roadmap to successfully enter and establish your business in Thailand's growing market.
              </p>
            </div>

            <div className="grid gap-8">
              {marketEntrySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <step.icon className="w-6 h-6 text-blue-600 mr-3" />
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <span className="ml-auto text-sm text-blue-600 font-semibold">
                          {step.timeline}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Common Challenges */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Common Thailand Market Entry Challenges
              </h2>
              <p className="text-lg text-gray-600 text-center mb-10 max-w-3xl mx-auto">
                Understanding these challenges upfront helps international businesses prepare 
                effective strategies for successful Thailand market expansion.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">{challenge}</p>
                  </motion.div>
                ))}
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
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Enter Thailand Market?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get expert guidance from a Bangkok-based consultant with global experience 
                helping international businesses successfully expand into Thailand.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                Start Your Thailand Expansion
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}