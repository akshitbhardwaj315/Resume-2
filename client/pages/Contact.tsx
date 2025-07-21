import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:akshitbhardwaj315@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
            label: "Email",
      value: "akshitbhardwaj315@gmail.com",
      link: "mailto:akshitbhardwaj315@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      link: "https://maps.google.com",
    },
    {
      icon: Clock,
      label: "Availability",
      value: "Mon - Fri, 9AM - 6PM PST",
      link: null,
    },
  ];

    const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: Github,
      color: "hover:text-gray-400",
      bgColor: "hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-600",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: Instagram,
      color: "hover:text-pink-400",
      bgColor:
        "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600",
    },
    {
      name: "Email",
      url: "mailto:akshitbhardwaj315@gmail.com",
      icon: Mail,
      color: "hover:text-emerald-400",
      bgColor: "hover:bg-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-fade-in-up delay-200">
            <h2 className="text-3xl font-bold text-gradient mb-8">
              Let's Connect
            </h2>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              I'm always excited to discuss new projects, creative ideas, and
              opportunities to be part of your vision. Whether you're a company
              looking to hire, a fellow developer wanting to collaborate, or
              someone with a great idea, feel free to reach out.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 p-4 card-modern hover:scale-105 transition-all duration-300 delay-${(index + 1) * 100}`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gradient">
                      {info.label}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-neon-blue transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground/80">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-gradient mb-6">
                Follow Me Online
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 bg-dark-300 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.bgColor} group`}
                  >
                    <social.icon
                      className={`w-6 h-6 text-foreground group-hover:text-white transition-colors ${social.color}`}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="mt-12 p-6 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-xl border border-neon-blue/20">
              <h3 className="text-lg font-bold text-gradient mb-2">
                Quick Response Guarantee
              </h3>
              <p className="text-foreground/80 text-sm">
                I typically respond to all inquiries within 24 hours. For urgent
                matters, feel free to call or message me directly on LinkedIn.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up delay-400">
            <div className="card-gradient p-8 sticky top-8">
              <h2 className="text-3xl font-bold text-gradient mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-300 border border-dark-400 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-300 border border-dark-400 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-300 border border-dark-400 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-300 border border-dark-400 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, idea, or how I can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 p-4 bg-dark-300/50 rounded-lg border border-dark-400">
                <p className="text-sm text-foreground/70 text-center">
                  By sending a message, you agree to my privacy policy and terms
                  of service. Your information will never be shared with third
                  parties.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 animate-fade-in-up delay-600">
          <h2 className="text-3xl font-bold text-gradient mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "What's your typical response time?",
                answer:
                  "I usually respond within 24 hours, often much sooner. For urgent matters, feel free to call directly.",
              },
              {
                question: "Do you work on weekends?",
                answer:
                  "While I prefer to keep weekends free, I'm flexible for urgent projects or deadlines.",
              },
              {
                question: "What's your hourly rate?",
                answer:
                  "My rates vary based on project complexity and timeline. Let's discuss your specific needs.",
              },
              {
                question: "Do you sign NDAs?",
                answer:
                  "Absolutely! I'm happy to sign NDAs and work under confidentiality agreements.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className={`card-modern p-6 hover:scale-105 transition-transform duration-300 delay-${(index + 1) * 100}`}
              >
                <h3 className="text-lg font-bold text-gradient mb-3">
                  {faq.question}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
