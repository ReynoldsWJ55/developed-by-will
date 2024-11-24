"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Github, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Email Obfuscation Function
  const obfuscatedEmail = () => {
    const user = "Will";
    const domain = "DevelopedbyWill.com";
    return `${user}@${domain}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xovqnnab", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert("Thanks for your message! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />

      <main className="flex-grow pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Me</h1>
          <p className="text-xl text-gray-600 mb-12">
            Have a project in mind? Let's talk about how we can work together.
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
                    href={`mailto:${obfuscatedEmail()}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {obfuscatedEmail()}
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

              <div className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Let's Create Something Amazing
                </h2>
                <p className="text-gray-600">
                  Whether you need a website, web application, or technical
                  consultation, I'm here to help turn your ideas into reality.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
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
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
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
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-900 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
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
      {/* Add Footer here */}
      <Footer />
    </div>
  );
}
