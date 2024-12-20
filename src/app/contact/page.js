"use client";

import { useState } from "react";
import Head from "@/components/Head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Github, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Head
        title="Contact - Developed by Will"
        description="Get in touch with Will for collaboration, inquiries, or to discuss your next web development project."
        url="https://developedbywill.com/contact"
        image="/images/contact-og.jpg"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: "https://developedbywill.com/contact",
          name: "Contact Will Reynolds",
          description:
            "Use this page to contact Will Reynolds for web development inquiries or collaborations.",
        }}
      />
      <Navigation />
      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Me</h1>
          <p className="text-xl text-gray-600 mb-12">
            Have a project in mind? Let&apos;s talk about how we can work
            together.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-3" />
                  <a
                    href="mailto:Will@DevelopedbyWill.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Will@DevelopedbyWill.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="w-6 h-6 text-blue-600 mr-3" />
                  <a
                    href="https://github.com/ReynoldsWJ55"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    github.com/ReynoldsWJ55
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <form
                action="https://formspree.io/f/xovqnnab"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
