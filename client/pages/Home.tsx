import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/akshitbhardwaj315",
      icon: Github,
      className: "social-btn github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/akshit-bhardwaj-19a55424b/",
      icon: Linkedin,
      className: "social-btn linkedin",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/akshit_bhardwaj.0017/",
      icon: Instagram,
      className: "social-btn instagram",
    },
    {
      name: "Email",
      url: "akshitbhardwaj315@gmail.com",
      icon: Mail,
      className: "social-btn email",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Interactive Background */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(102, 126, 234, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Greeting */}
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-neon-blue text-lg font-medium animate-fade-in-left">
                  👋 Hello, I'm
                </span>
              </div>

              {/* Name with Gradient */}
              <h1 className="text-5xl md:text-7xl font-bold text-gradient animate-fade-in-up delay-200">
                John Doe
              </h1>

              {/* Role */}
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl text-foreground font-light animate-fade-in-right delay-300">
                  ML Engineer
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full animate-fade-in-up delay-400"></div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-foreground/80 leading-relaxed max-w-lg animate-fade-in-up delay-500">
              I craft exceptional digital experiences with modern technologies.
              Passionate about creating beautiful, functional, and user-friendly
              applications that make a difference.
            </p>

            {/* Email Display */}
            <div className="animate-fade-in-up delay-600">
              <div className="flex items-center space-x-3 p-4 bg-dark-200/50 rounded-xl border border-dark-400 hover:border-neon-blue/50 transition-all duration-300 group">
                <Mail className="w-6 h-6 text-neon-blue group-hover:animate-bounce" />
                <div>
                  <p className="text-sm text-foreground/60">Email</p>
                  <a
                    href="mailto:john.doe@example.com"
                    className="text-xl font-semibold text-gradient hover:text-neon-blue transition-colors"
                  >
                    akshitbhardwaj315@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-700">
              <div className="flex items-center space-x-2 text-foreground/70">
                <MapPin className="w-4 h-4 text-neon-blue" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2 text-foreground/70">
                <Phone className="w-4 h-4 text-neon-blue" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-800">
              <Link to="/projects" className="btn-primary group">
                View Projects
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="btn-secondary group">
                Download CV
                <Download className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 animate-fade-in-up delay-1000">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.className} delay-${(index + 1) * 100}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Animated Background Rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-20 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-neon-pink to-neon-blue opacity-20 animate-pulse delay-2000"></div>

                {/* Profile Image */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl hover:scale-105 transition-transform duration-500">
                  <img
                    src="/placeholder.svg"
                    alt="John Doe"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-100/30 to-transparent"></div>
                </div>

                {/* Floating Particles */}
                <div className="absolute -top-4 -left-4 w-3 h-3 bg-neon-blue rounded-full float opacity-60"></div>
                <div className="absolute -top-8 right-8 w-2 h-2 bg-neon-purple rounded-full float delay-1000 opacity-60"></div>
                <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-neon-pink rounded-full float delay-2000 opacity-60"></div>
                <div className="absolute bottom-8 -left-8 w-2 h-2 bg-neon-green rounded-full float delay-500 opacity-60"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-neon-blue animate-pulse" />
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed", delay: "100" },
              { number: "3+", label: "Years Experience", delay: "200" },
              { number: "100%", label: "Client Satisfaction", delay: "300" },
              { number: "24/7", label: "Support Available", delay: "400" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 card-modern animate-fade-in-up delay-${stat.delay} hover:scale-105 transition-transform duration-300`}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/70 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-6 animate-fade-in-up">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 animate-fade-in-up delay-200">
            Let's collaborate and bring your ideas to life with cutting-edge
            technology.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up delay-400">
            <Link to="/contact" className="btn-primary">
              Get In Touch
            </Link>
            <Link to="/projects" className="btn-secondary">
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
