"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "@/components/Head";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Mail, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Loader2,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  Globe
} from "lucide-react";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'submitting' | 'success' | 'error';
  message: string;
}


export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  // Load reCAPTCHA script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=6LdNA1IrAAAAAP-5ttsUTAjBvJB9mGOvJRVNUvr';
    script.async = true;
    script.defer = true;
    script.onload = () => setRecaptchaLoaded(true);
    script.onerror = () => {
      console.error('Failed to load reCAPTCHA script');
      setRecaptchaLoaded(false);
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const executeRecaptcha = async (): Promise<string | null> => {
    if (!recaptchaLoaded || !window.grecaptcha) {
      console.warn('reCAPTCHA not loaded, skipping verification');
      return null;
    }

    try {
      const token = await window.grecaptcha.execute('6LdNA1IrAAAAAP-5ttsUTAjBvJB9mGOvJRVNUvr', {
        action: 'contact_form'
      });
      console.log('reCAPTCHA token generated successfully');
      return token;
    } catch (error) {
      console.error('reCAPTCHA execution failed:', error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'submitting', message: 'Sending your message...' });

    try {
      // Basic validation
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Please fill in all required fields');
      }

      // Prepare FormData for Formspree (using FormData instead of JSON)
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('name', formData.name.trim());
      formDataToSubmit.append('email', formData.email.trim());
      formDataToSubmit.append('company', formData.company.trim());
      formDataToSubmit.append('message', formData.message.trim());
      
      // Add honeypot field to help with spam prevention
      formDataToSubmit.append('_gotcha', '');

      // Execute reCAPTCHA and add if available
      try {
        const recaptchaToken = await executeRecaptcha();
        if (recaptchaToken) {
          formDataToSubmit.append('g-recaptcha-response', recaptchaToken);
          console.log('reCAPTCHA token added to form submission');
        }
      } catch (recaptchaError) {
        console.warn('reCAPTCHA failed, proceeding without it:', recaptchaError);
      }

      // Submit to Formspree
      console.log('Submitting form to Formspree...');
      const response = await fetch('https://formspree.io/f/mgvywjkk', {
        method: 'POST',
        body: formDataToSubmit,
        headers: {
          'Accept': 'application/json'
        }
      });

      console.log('Formspree response status:', response.status);
      console.log('Formspree response headers:', Object.fromEntries(response.headers.entries()));

      if (response.ok) {
        let result;
        try {
          result = await response.json();
          console.log('Formspree success result:', result);
        } catch (jsonError) {
          console.log('No JSON response, but status was OK');
          result = { ok: true };
        }

        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you within 24 hours.'
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        let errorResult;
        try {
          errorResult = await response.json();
          console.error('Formspree error response:', errorResult);
        } catch (jsonError) {
          console.error('Failed to parse error response as JSON');
          errorResult = { error: `HTTP ${response.status}: ${response.statusText}` };
        }
        
        // If Formspree fails due to reCAPTCHA, offer email fallback
        if (errorResult.error?.includes('reCAPTCHA') || errorResult.error?.includes('recaptcha')) {
          const emailSubject = encodeURIComponent(`Contact from ${formData.name} - ${formData.company || 'Web Inquiry'}`);
          const emailBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`);
          const mailtoLink = `mailto:will@developedbywill.com?subject=${emailSubject}&body=${emailBody}`;
          
          setStatus({
            type: 'error',
            message: 'Form submission requires verification. Would you like to send via email instead?'
          });
          
          // Show email fallback option
          const sendViaEmail = window.confirm('The contact form requires additional verification. Would you like to open your email client to send the message instead?');
          if (sendViaEmail) {
            window.location.href = mailtoLink;
            return;
          }
        }
        
        throw new Error(errorResult.error || errorResult.errors?.[0]?.message || `Form submission failed (${response.status})`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      
      setStatus({
        type: 'error',
        message: errorMessage.includes('Failed to fetch') 
          ? 'Network error. Please check your connection and try again, or email me directly at will@developedbywill.com'
          : `Failed to send message: ${errorMessage}. Please try again or email me directly at will@developedbywill.com`
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Head
        title="Contact Will Reynolds | Thailand Business Development Consultant Bangkok"
        description="Contact Will Reynolds for Thailand market expansion and ASEAN business development. 20+ years global experience, 5+ years Bangkok resident. Business development consultant specializing in international growth strategies."
        url="https://developedbywill.com/contact"
        image="/images/contact-og.jpg"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": "https://developedbywill.com/contact",
          url: "https://developedbywill.com/contact",
          name: "Contact Will Reynolds",
          description: "Contact Will Reynolds for Thailand business development, ASEAN market expansion, and strategic business growth solutions.",
          about: {
            "@type": "Person",
            "@id": "https://developedbywill.com/#person",
            name: "Will Reynolds",
            jobTitle: "Business Development & Marketing Strategy Consultant",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bangkok",
              addressCountry: "Thailand"
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Business Development",
              email: "will@developedbywill.com",
              availableLanguage: ["English"],
              areaServed: ["Thailand", "ASEAN"],
              serviceType: [
                "Business Development",
                "Marketing Strategy", 
                "Market Entry Consulting",
                "Digital Transformation"
              ]
            }
          },
          mainEntity: {
            "@type": "Service",
            name: "Thailand Business Development Consulting",
            provider: {
              "@type": "Person", 
              "@id": "https://developedbywill.com/#person",
              name: "Will Reynolds"
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
            serviceType: [
              "Market Entry Strategy",
              "Partnership Development",
              "Digital Transformation", 
              "Marketing Strategy",
              "Operations Excellence"
            ]
          }
        }}
      />
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let&apos;s Build Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Extraordinary
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with elite development and strategic growth? 
              Let&apos;s discuss your vision and create something that drives real results.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Get In Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a
                        href="mailto:will@developedbywill.com"
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        will@developedbywill.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600">Bangkok, Thailand</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
                      <p className="text-gray-600">Within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Globe className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Time Zone</h3>
                      <p className="text-gray-600">GMT+7 (ICT)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">What to Expect</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Detailed project analysis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Strategic recommendations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Transparent pricing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Clear timeline & milestones
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Start Your Project</h2>
                    <p className="text-gray-600">Tell me about your vision and goals</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Tell me about your project goals, challenges, timeline, and any specific requirements..."
                    />
                  </div>

                  {/* Status Messages */}
                  {status.type !== 'idle' && (
                    <div className={`p-4 rounded-xl flex items-center ${
                      status.type === 'success' ? 'bg-green-50 text-green-700' :
                      status.type === 'error' ? 'bg-red-50 text-red-700' :
                      'bg-blue-50 text-blue-700'
                    }`}>
                      {status.type === 'success' && <CheckCircle className="w-5 h-5 mr-2" />}
                      {status.type === 'error' && <AlertCircle className="w-5 h-5 mr-2" />}
                      {status.type === 'submitting' && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
                      {status.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status.type === 'submitting'}
                    className="w-full flex justify-center items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status.type === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    This form is protected by reCAPTCHA and the Google{' '}
                    <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="https://policies.google.com/terms" className="text-blue-600 hover:underline">
                      Terms of Service
                    </a>{' '}
                    apply.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}