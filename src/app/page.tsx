"use client";

import { motion } from "framer-motion";
import Head from "@/components/Head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Building2,
  BarChart3,
  CheckCircle,
  Globe,
  Award,
  MapPin,
  Handshake,
  Target,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Thailand Market Entry",
    description: "Strategic Thailand business expansion and partnership development for international companies entering Bangkok and ASEAN markets",
    features: ["Market entry strategy", "Local partnership development", "Cross-cultural stakeholder engagement"],
    color: "brand",
  },
  {
    icon: TrendingUp,
    title: "Growth & Marketing Strategy",
    description: "Data-driven customer acquisition and brand positioning strategies tailored for Thailand market and Thai consumer behavior",
    features: ["Customer acquisition strategy", "Brand positioning", "Digital marketing optimization"],
    color: "gold",
  },
  {
    icon: Handshake,
    title: "Partnership Development",
    description: "Building strategic local partnerships and distribution networks to accelerate market presence",
    features: ["Local partner identification", "Distributor networks", "Joint venture facilitation"],
    color: "navy",
  },
  {
    icon: BarChart3,
    title: "Operations & Digital Transformation",
    description: "Streamlining operations and implementing digital solutions for sustainable business growth",
    features: ["Process optimization", "Digital transformation", "Performance management"],
    color: "brand",
  },
];

const credentials = [
  {
    icon: Globe,
    number: "Global",
    label: "Business Experience",
    description: "International operations & leadership"
  },
  {
    icon: MapPin,
    number: "5+",
    label: "Years in Thailand",
    description: "Deep ASEAN market expertise"
  },
  {
    icon: TrendingUp,
    number: "300%",
    label: "Average Growth",
    description: "Client business results"
  },
  {
    icon: Award,
    number: "MBA",
    label: "International Business",
    description: "Bangkok university program"
  },
];

const caseStudies = [
  {
    title: "V Goal Visa Service",
    description: "Transformed a local Bangkok visa consultancy into a market leader through strategic digital positioning and bilingual customer acquisition",
    outcome: "300% increase in client inquiries",
    metrics: ["Revenue growth", "Market expansion", "Brand authority"],
    icon: Building2,
    category: "Market Transformation",
  },
  {
    title: "Thailand Content Strategy",
    description: "Developed comprehensive market research and content strategy capturing underserved segments in Thailand's competitive travel market",
    outcome: "200% audience growth",
    metrics: ["Market research", "Content strategy", "Audience development"],
    icon: Target,
    category: "Growth Strategy",
  },
  {
    title: "Digital Transformation",
    description: "Led end-to-end digital transformation initiatives improving operational efficiency and customer experience for Thailand-based businesses",
    outcome: "40% efficiency improvement",
    metrics: ["Process optimization", "Digital adoption", "Customer satisfaction"],
    icon: TrendingUp,
    category: "Operations Excellence",
  },
];

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; icon: string; border: string }> = {
    brand: { bg: "bg-brand-50", text: "text-brand-700", icon: "bg-brand-600", border: "border-brand-100" },
    gold: { bg: "bg-gold-50", text: "text-gold-700", icon: "bg-gold-500", border: "border-gold-100" },
    navy: { bg: "bg-navy-50", text: "text-navy-700", icon: "bg-navy-950", border: "border-navy-100" },
  };
  return colors[color] || colors.brand;
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Head
        title="Will Reynolds | Thailand Business Consultant Bangkok | ASEAN Market Expert"
        description="Thailand business consultant helping international companies expand in Bangkok and ASEAN. Expert in market entry, digital transformation & cross-cultural business development."
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
            "https://www.linkedin.com/in/reynoldswj/"
          ],
          jobTitle: "Business Development & Marketing Strategy Consultant",
          description: "Business development and marketing expert with global experience, specializing in Thailand market expansion and ASEAN growth strategies.",
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

      <main id="main-content" className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden premium-bg-pattern">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 via-transparent to-gold-50/30" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
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
                className="mb-10"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-8">
                  <MapPin className="w-4 h-4 mr-2" />
                  Bangkok-Based • ASEAN Market Expert
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.1]">
                  Thailand Business
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-navy-950">
                    Development Expert
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Helping international companies expand into Thailand and Southeast Asia
                  with strategic market entry, digital transformation, and local partnership development.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
              >
                <Link
                  href="/contact"
                  className="btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="btn-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-16 bg-gradient-to-r from-navy-950 to-brand-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {credentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4">
                    <item.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {item.number}
                  </div>
                  <div className="text-gold-400 font-medium text-sm mb-1">{item.label}</div>
                  <div className="text-white/60 text-xs">{item.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="premium-section bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-heading mb-6">
                Thailand & ASEAN Market Services
              </h2>
              <p className="section-subheading">
                Proven business development and marketing strategies helping international companies
                successfully enter and expand in Bangkok, Thailand, and ASEAN markets.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const colorClasses = getColorClasses(service.color);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`premium-card p-8 hover:shadow-premium-lg ${colorClasses.border}`}
                  >
                    <div className="flex items-start space-x-5">
                      <div className="flex-shrink-0">
                        <div className={`w-14 h-14 ${colorClasses.icon} rounded-xl flex items-center justify-center`}>
                          <service.icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className={`w-4 h-4 ${colorClasses.text} mr-2 flex-shrink-0`} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                href="/thailand-market-entry"
                className="inline-flex items-center text-brand-600 font-semibold hover:text-brand-700 transition-colors"
              >
                Learn about Thailand Market Entry
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section className="premium-section bg-gray-50 premium-bg-pattern">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="section-heading mb-6">
                Proven Results
              </h2>
              <p className="section-subheading">
                Real business outcomes from strategic consulting engagements
                helping companies succeed in Thailand.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="premium-card overflow-hidden group"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 flex items-center justify-center mr-4 bg-brand-50 rounded-xl">
                        <study.icon className="w-7 h-7 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {study.title}
                        </h3>
                        <span className={`text-sm font-medium ${
                          study.category === 'Market Transformation' ? 'text-brand-600' :
                          study.category === 'Growth Strategy' ? 'text-gold-600' :
                          'text-navy-600'
                        }`}>
                          {study.category}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4 bg-brand-50 text-brand-700 px-3 py-1.5 rounded-lg text-sm font-semibold inline-block">
                      {study.outcome}
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {study.metrics.map((metric, metricIndex) => (
                        <span
                          key={metricIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
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
              <Link
                href="/about"
                className="btn-secondary"
              >
                Learn More About My Approach
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-brand-600 via-brand-700 to-navy-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Expand in Thailand?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s discuss how strategic business development can accelerate
                your growth in Southeast Asia&apos;s most dynamic markets.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-brand-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start the Conversation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
