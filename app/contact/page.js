"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");
    setErrorMessage("");
    
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormStatus(null);
        }, 5000);
      } else {
        setFormStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setFormStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
      console.error('Form submission error:', error);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email",
      value: "kumbharkaveri50@gmail.com",
      link: "mailto:kumbharkaveri50@gmail.com"
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 7249751953",
      link: "tel:+917249751953"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Location",
      value: "Maharashtra, India",
      link: null
    }
  ];

  const socialLinks = [
    { name: "GitHub", icon: <FiGithub className="w-6 h-6" />, url: "https://github.com/KaveriKumbhar" },
    { name: "LinkedIn", icon: <FiLinkedin className="w-6 h-6" />, url: "https://www.linkedin.com/in/kaveri-kumbhar-0b2623292/" }
  ];

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to say hello? I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <h2 className="text-3xl font-bold text-white mb-6">Send Me a Message</h2>
              
              {formStatus === "success" && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400">
                  ✅ Thank you! Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}

              {formStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400">
                  ❌ {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {formStatus === "sending" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-gray-400 mb-8">
                  Feel free to reach out through any of these channels. I'm always happy to connect!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
                    >
                      <div className="text-blue-500 mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                        {info.link ? (
                          <Link
                            href={info.link}
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                          >
                            {info.value}
                          </Link>
                        ) : (
                          <p className="text-gray-400">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 text-gray-400 hover:text-blue-400"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-3">Availability</h3>
                <p className="text-blue-100">
                  I'm currently available for freelance projects and full-time opportunities. 
                  Let's discuss how I can help bring your ideas to life!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-20 px-4 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">
                What services do you offer?
              </h3>
              <p className="text-gray-400">
                I specialize in web development services including static and dynamic website development, 
                responsive design, SEO optimization, and full-stack application development using modern technologies.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">
                How long does a typical project take?
              </h3>
              <p className="text-gray-400">
                Project timelines vary depending on complexity and requirements. A simple website might take 1-2 weeks, 
                while a complex web application could take several months. I'll provide a detailed timeline during our consultation.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-3">
                What is your development process?
              </h3>
              <p className="text-gray-400">
                I follow an agile development approach: initial consultation, planning and design, development, 
                testing, deployment, and ongoing support. You'll be involved throughout the process with regular updates.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}

