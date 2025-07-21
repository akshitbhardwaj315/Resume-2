import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  User,
  GraduationCap,
  Code,
  Briefcase,
  FolderOpen,
  Mail,
} from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Education", href: "/education", icon: GraduationCap },
    { name: "Skills", href: "/skills", icon: Code },
    { name: "Tech Stack", href: "/tech-stack", icon: Code },
    { name: "Projects", href: "/projects", icon: FolderOpen },
    { name: "Experience", href: "/experience", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen animated-bg">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark-100/80 backdrop-blur-md border-b border-dark-400/50 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-300"
            >
              Portfolio
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    <item.icon className="w-4 h-4 inline mr-2" />
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-dark-300 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-dark-200/95 backdrop-blur-md border-t border-dark-400/50">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item, index) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 animate-fade-in-up delay-${index * 100} ${
                      isActive
                        ? "bg-dark-300 text-neon-blue"
                        : "text-foreground hover:bg-dark-300 hover:text-neon-blue"
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">{children}</main>

      {/* Floating Elements for Animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-neon-blue/30 rounded-full float blur-sm"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-neon-purple/20 rounded-full float delay-1000 blur-sm"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-neon-pink/25 rounded-full float delay-2000 blur-sm"></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-neon-blue/15 rounded-full float delay-500 blur-sm"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-neon-yellow/40 rounded-full float delay-1500 blur-sm"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-neon-green/30 rounded-full float delay-3000 blur-sm"></div>
      </div>

      {/* Background Mesh Gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
      </div>
    </div>
  );
};

export default Layout;
