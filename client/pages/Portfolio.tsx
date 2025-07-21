import React, { useState, useEffect, useRef } from "react";
import {
  Home,
  User,
  GraduationCap,
  Code,
  Briefcase,
  FolderOpen,
  Mail,
  ArrowDown,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Calendar,
  Building,
  Award,
  Star,
  Send,
  Menu,
  X,
  Sparkles,
  Zap,
  Heart,
  Rocket,
} from "lucide-react";

const Portfolio = () => {
    const [currentSection, setCurrentSection] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  const sections = [
    { id: "home", name: "Home", icon: Home },
    { id: "about", name: "About", icon: User },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "skills", name: "Skills", icon: Code },
    { id: "projects", name: "Projects", icon: FolderOpen },
    { id: "experience", name: "Experience", icon: Briefcase },
    { id: "contact", name: "Contact", icon: Mail },
  ];

  // Load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

    // Removed mouse tracking as we're using breathing effects instead

  // Enhanced typewriter effect
  useEffect(() => {
    const name = "Akshit Bhardwaj";
    const title = "AI/ML Enthusiast";

    let nameIndex = 0;
    let titleIndex = 0;
    let nameComplete = false;

    const typeWriter = () => {
      if (!nameComplete) {
        if (nameIndex <= name.length) {
          setDisplayText(name.substring(0, nameIndex));
          nameIndex++;
        } else {
          nameComplete = true;
          setTimeout(() => {}, 500);
        }
      } else {
        if (titleIndex <= title.length) {
          setTitleText(title.substring(0, titleIndex));
          titleIndex++;
        } else {
          setShowCursor(false);
          return;
        }
      }

      setTimeout(typeWriter, 80);
    };

    if (isLoaded) {
      typeWriter();
    }

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [isLoaded]);

  // Smooth scroll handling
  const scrollToSection = (index: number) => {
    if (sectionsRef.current[index]) {
      sectionsRef.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setCurrentSection(index);
      setMobileMenuOpen(false);
    }
  };

      // Intersection Observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let activeIndex = -1;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            const index = sectionsRef.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              maxRatio = entry.intersectionRatio;
              activeIndex = index;
            }
          }
        });

        if (activeIndex !== -1) {
          setCurrentSection(activeIndex);
        }
      },
      {
        threshold: [0.1, 0.25, 0.5, 0.75],
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    sectionsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Alternative scroll-based section detection as backup
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sectionsRef.current.length - 1; i >= 0; i--) {
        const section = sectionsRef.current[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            setCurrentSection(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/akshitbhardwaj315",
      icon: Github,
      color: "from-gray-700 to-gray-800",
      hoverColor: "hover:from-gray-600 hover:to-gray-700",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/akshit-bhardwaj-19a55424b/",
      icon: Linkedin,
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-500 hover:to-blue-600",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/akshit_bhardwaj.0017/",
      icon: Instagram,
      color: "from-pink-600 via-purple-600 to-red-600",
      hoverColor: "hover:from-pink-500 hover:via-purple-500 hover:to-red-500",
    },
    {
      name: "Email",
            url: "mailto:akshitbhardwaj315@gmail.com",
      icon: Mail,
      color: "from-emerald-600 to-teal-600",
            hoverColor: "hover:from-emerald-500 hover:to-teal-500",
    },
  ];

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open email client
    window.location.href = `mailto:akshitbhardwaj315@gmail.com?subject=${subject}&body=${body}`;

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
            {/* Crazy Beautiful Background with Multiple Layers */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* Animated mesh gradient */}
        <div className="absolute inset-0 mesh-gradient animate-gradient-xy pointer-events-none"></div>
        
                                {/* Calm floating orbs - only blue/purple/pink */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-15 animate-float-gentle transition-opacity duration-2000"
              style={{
                width: `${400 + i * 150}px`,
                height: `${400 + i * 150}px`,
                left: `${15 + (i * 18)}%`,
                top: `${10 + (i * 20)}%`,
                background: `radial-gradient(circle, ${
                  [
                    'rgba(59, 130, 246, 0.2)',
                    'rgba(139, 92, 246, 0.2)',
                    'rgba(236, 72, 153, 0.2)',
                    'rgba(147, 51, 234, 0.2)',
                    'rgba(99, 102, 241, 0.2)'
                  ][i % 5]
                }, transparent)`,
                animationDelay: `${i * 4}s`,
                animationDuration: `${40 + i * 10}s`,
                filter: 'blur(2px)',
              }}
            />
          ))}
        </div>

                                                {/* Smooth CSS-only geometric waves */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-96 h-96 rounded-full opacity-10"
            style={{
              background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))',
              left: '10%',
              top: '20%',
              animation: 'float-smooth-1 20s ease-in-out infinite',
              transform: 'translate3d(0,0,0)',
              filter: 'blur(1px)',
            }}
          />
          <div
            className="absolute w-80 h-80 rounded-full opacity-8"
            style={{
              background: 'linear-gradient(-45deg, rgba(236, 72, 153, 0.25), rgba(147, 51, 234, 0.25))',
              right: '15%',
              bottom: '25%',
              animation: 'float-smooth-2 25s ease-in-out infinite',
              animationDelay: '10s',
              transform: 'translate3d(0,0,0)',
              filter: 'blur(1px)',
            }}
          />
        </div>

                                                {/* Smooth minimal accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-2 h-2 rounded-full bg-blue-400 opacity-40"
            style={{
              left: '20%',
              top: '30%',
              animation: 'gentle-pulse 6s ease-in-out infinite',
              transform: 'translate3d(0,0,0)',
            }}
          />
          <div
            className="absolute w-2 h-2 rounded-full bg-purple-400 opacity-40"
            style={{
              right: '25%',
              top: '60%',
              animation: 'gentle-pulse 8s ease-in-out infinite',
              animationDelay: '3s',
              transform: 'translate3d(0,0,0)',
            }}
          />
          <div
            className="absolute w-2 h-2 rounded-full bg-indigo-400 opacity-40"
            style={{
              left: '70%',
              bottom: '40%',
              animation: 'gentle-pulse 7s ease-in-out infinite',
              animationDelay: '1.5s',
              transform: 'translate3d(0,0,0)',
            }}
          />
        </div>

        {/* Interactive cursor effects */}
        <div 
                                        className="absolute inset-0 pointer-events-none"
        >
          <div
            className="absolute w-full h-full rounded-full opacity-5 animate-pulse pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 30% 20%, rgba(59, 130, 246, 0.1), transparent, rgba(139, 92, 246, 0.1))',
              animationDuration: '8s',
            }}
          />
          <div
            className="absolute w-full h-full rounded-full opacity-5 animate-pulse pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 50% 30% at 70% 80%, rgba(236, 72, 153, 0.1), transparent, rgba(147, 51, 234, 0.1))',
              animationDuration: '12s',
              animationDelay: '4s',
            }}
                    />
        </div>

        {/* Enhanced accent gradients */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_400px_at_50%_0px,rgba(59,130,246,0.1),transparent)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_20%_80%,rgba(139,92,246,0.08),transparent)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_80%_20%,rgba(236,72,153,0.06),transparent)] pointer-events-none"></div>
      </div>

      {/* Animated Navigation with 3D effects */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 transform-3d">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-white hover:scale-110 transition-all duration-500 cursor-pointer transform-3d">
              <Sparkles className="inline w-6 h-6 mr-2 text-blue-400 animate-pulse hover:animate-spin transition-all duration-500" />
              <span className="text-gradient animate-gradient-x">Portfolio</span>
            </div>

            {/* Desktop Navigation with crazy hover effects */}
            <div className="hidden md:flex space-x-2">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(index)}
                  className={`group relative px-4 py-2 rounded-lg font-medium transition-all duration-500 hover:scale-110 hover:-translate-y-1 transform-3d perspective-1000 ${
                    currentSection === index
                      ? "bg-blue-600 text-white glow-blue"
                      : "text-gray-300 hover:text-white hover:bg-slate-700/80 backdrop-blur-sm"
                  }`}
                  style={{
                    transform: currentSection === index ? 'rotateX(5deg) rotateY(-2deg)' : 'none'
                  }}
                >
                  <section.icon className="w-4 h-4 inline mr-2 group-hover:animate-bounce" />
                  <span className="relative z-10">{section.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button with rotation */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-all duration-300 hover:scale-110 hover:rotate-90 transform"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white animate-spin" />
              ) : (
                <Menu className="w-6 h-6 text-white hover:animate-pulse" />
              )}
            </button>
          </div>

          {/* Mobile Navigation with slide animations */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-xl border-t border-slate-700 animate-slide-down">
              <div className="px-4 py-4 space-y-2">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:translate-x-2 transform ${
                      currentSection === index
                        ? "bg-blue-600 text-white glow-blue"
                        : "text-gray-300 hover:text-white hover:bg-slate-700"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <section.icon className="w-4 h-4 inline mr-2 animate-bounce" style={{ animationDelay: `${index * 100}ms` }} />
                    {section.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Home Section with Floating Skills */}
        <section
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative perspective-2000"
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={`space-y-8 ${isLoaded ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <div className="space-y-6">
                  <div className="inline-block hover:scale-110 transition-transform duration-500">
                    <span className="text-xl font-medium text-blue-400 animate-pulse">
                      👋 Hello, I'm
                    </span>
                  </div>

                  <div className="min-h-[120px]">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight text-glow hover:scale-105 transition-transform duration-500">
                      {displayText}
                      <span
                        className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity text-blue-400`}
                      >
                        |
                      </span>
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-light mt-4 animate-gradient-x hover:scale-105 transition-transform duration-500">
                      {titleText}
                      <span
                        className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity text-purple-400`}
                      >
                        |
                      </span>
                    </h2>
                  </div>

                  <div className="flex items-center space-x-4 hover:scale-110 transition-transform duration-500">
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-gradient-x"></div>
                    <Zap className="w-5 h-5 text-yellow-400 animate-bounce" />
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-gradient-x"></div>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed max-w-2xl hover:text-gray-200 transition-colors duration-300">
                  I develop intelligent <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors cursor-pointer">Python applications</span> using Machine
                  Learning and AI technologies. Passionate about building
                  <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors cursor-pointer"> data-driven solutions</span>, predictive models, and automation
                  systems that solve complex real-world challenges.
                </p>

                <div className="p-6 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 card-gradient">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600/20 rounded-lg hover:scale-110 hover:rotate-6 transition-all duration-300">
                      <Mail className="w-6 h-6 text-blue-400 hover:animate-pulse" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                                            <a
                        href="mailto:akshitbhardwaj315@gmail.com"
                        className="text-xl font-semibold text-white hover:text-blue-300 transition-all duration-300 hover:scale-105 inline-block"
                      >
                        akshitbhardwaj315@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 text-gray-300">
                  <div className="flex items-center space-x-3 hover:text-blue-300 transition-all duration-300 hover:scale-110 transform cursor-pointer">
                    <div className="p-2 bg-blue-600/20 rounded-lg hover:rotate-12 transition-transform duration-300">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="font-medium">Punjab, India</span>
                  </div>
                  <div className="flex items-center space-x-3 hover:text-purple-300 transition-all duration-300 hover:scale-110 transform cursor-pointer">
                    <div className="p-2 bg-purple-600/20 rounded-lg hover:rotate-12 transition-transform duration-300">
                      <Phone className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="font-medium">+91 6230593730</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => scrollToSection(4)}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-semibold transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-2xl hover:shadow-blue-500/50 transform-3d perspective-1000"
                    style={{ transform: 'rotateX(2deg)' }}
                  >
                    <span className="flex items-center">
                      <Rocket className="w-5 h-5 mr-2 animate-bounce" />
                      View Projects
                      <ExternalLink className="w-4 h-4 ml-2 hover:animate-pulse" />
                    </span>
                  </button>
                                    <a
                    href="https://cdn.builder.io/o/assets%2Fc51a831239f444ca9d7e68165738d4a6%2F0781269caaf342f6ab5f7b38e017c495?alt=media&token=7175042b-ab52-493a-ac5d-1f0b61829154&apiKey=c51a831239f444ca9d7e68165738d4a6"
                    download="Akshit_Bhardwaj_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold border border-slate-600 hover:border-slate-500 transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-slate-500/30 transform hover:rotate-1"
                  >
                    <span className="flex items-center">
                      <Download className="w-5 h-5 mr-2 hover:animate-bounce" />
                      Download CV
                    </span>
                  </a>
                </div>

                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-gradient-to-r ${social.color} ${social.hoverColor} text-white transition-all duration-500 hover:scale-125 hover:rotate-12 hover:-translate-y-2 shadow-lg hover:shadow-2xl transform-3d`}
                      aria-label={social.name}
                      style={{ 
                        animationDelay: `${index * 200}ms`,
                        transform: 'perspective(1000px) rotateX(5deg)'
                      }}
                    >
                      <social.icon className="w-5 h-5 hover:animate-pulse" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Profile section with floating skills */}
              <div className={`flex justify-center lg:justify-end ${isLoaded ? 'animate-fade-in-right' : 'opacity-0'} relative`}>
                <div className="relative perspective-2000">
                  <div className="relative w-80 h-80 sm:w-96 sm:h-96 transform-3d">
                    {/* Multiple animated rings */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-spin-slow hover:scale-110 transition-transform duration-1000"></div>
                    <div
                      className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-spin-slow hover:scale-110 transition-transform duration-1000"
                      style={{ animationDirection: 'reverse', animationDuration: '20s' }}
                    ></div>
                    <div
                      className="absolute inset-8 rounded-full bg-gradient-to-r from-pink-500/10 to-yellow-500/10 animate-spin-slow"
                      style={{ animationDuration: '35s' }}
                    ></div>

                    {/* Profile image container with 3D effects */}
                    <div className="absolute inset-12 rounded-full overflow-hidden border-4 border-slate-600 shadow-2xl hover:shadow-blue-500/50 transition-all duration-1000 hover:scale-110 hover:rotate-3 transform-3d">
                      <img
                       src="/images/my_pic.jpeg"
                        alt="Akshit Bhardwaj"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent hover:from-blue-500/10 transition-all duration-500"></div>
                    </div>

                    {/* Floating Skills around picture - RESTORED! */}
                    <div className="absolute -top-8 left-1/4 bg-slate-800/90 px-3 py-2 rounded-lg border border-blue-500/30 backdrop-blur-sm animate-float-gentle hover:scale-125 hover:rotate-3 transition-all duration-500 cursor-pointer transform-3d">
                      <span className="text-blue-300 font-semibold text-sm flex items-center">
                        🐍 <span className="ml-1 animate-pulse">Python</span>
                      </span>
                    </div>
                    <div className="absolute -bottom-8 right-1/4 bg-slate-800/90 px-3 py-2 rounded-lg border border-purple-500/30 backdrop-blur-sm animate-float-gentle hover:scale-125 hover:rotate-3 transition-all duration-500 cursor-pointer transform-3d" style={{ animationDelay: '1s' }}>
                      <span className="text-purple-300 font-semibold text-sm flex items-center">
                        🤖 <span className="ml-1 animate-pulse" style={{ animationDelay: '0.5s' }}>AI/ML</span>
                      </span>
                    </div>
                    <div className="absolute top-1/2 -right-12 bg-slate-800/90 px-3 py-2 rounded-lg border border-pink-500/30 backdrop-blur-sm animate-float-gentle hover:scale-125 hover:rotate-3 transition-all duration-500 cursor-pointer transform-3d" style={{ animationDelay: '2s' }}>
                      <span className="text-pink-300 font-semibold text-sm flex items-center">
                        📊 <span className="ml-1 animate-pulse" style={{ animationDelay: '1s' }}>Data</span>
                      </span>
                    </div>
                    <div className="absolute top-1/4 -left-12 bg-slate-800/90 px-3 py-2 rounded-lg border border-green-500/30 backdrop-blur-sm animate-float-gentle hover:scale-125 hover:rotate-3 transition-all duration-500 cursor-pointer transform-3d" style={{ animationDelay: '3s' }}>
                      <span className="text-green-300 font-semibold text-sm flex items-center">
                        🔬 <span className="ml-1 animate-pulse" style={{ animationDelay: '1.5s' }}>ML</span>
                      </span>
                    </div>
                    <div className="absolute bottom-1/4 -left-8 bg-slate-800/90 px-3 py-2 rounded-lg border border-yellow-500/30 backdrop-blur-sm animate-float-gentle hover:scale-125 hover:rotate-3 transition-all duration-500 cursor-pointer transform-3d" style={{ animationDelay: '4s' }}>
                      <span className="text-yellow-300 font-semibold text-sm flex items-center">
                        🚀 <span className="ml-1 animate-pulse" style={{ animationDelay: '2s' }}>Deploy</span>
                      </span>
                    </div>
                    <div className="absolute top-3/4 right-1/4 bg-slate-800/90 px-3 py-2 rounded-lg border border-cyan-500/30 backdrop-blur-sm animate-float-gentle hover:scale-125 hover:rotate-3 transition-all duration-500 cursor-pointer transform-3d" style={{ animationDelay: '5s' }}>
                      <span className="text-cyan-300 font-semibold text-sm flex items-center">
                        ⚡ <span className="ml-1 animate-pulse" style={{ animationDelay: '2.5s' }}>FastAPI</span>
                      </span>
                    </div>

                    {/* Additional sparkles around the picture */}
                    {/* {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute animate-pulse"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${Math.random() * 3}s`,
                          animationDuration: `${2 + Math.random() * 2}s`,
                        }}
                      >
                        <Star className="w-3 h-3 text-yellow-400 animate-spin" style={{
                          animationDuration: `${3 + Math.random() * 4}s`
                        }} /> */}
                      </div>
                    {/* ))} */}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => scrollToSection(1)}
                className="p-3 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-blue-400 hover:text-blue-300 transition-all duration-500 hover:scale-125 hover:-translate-y-2 hover:rotate-12 shadow-lg hover:shadow-blue-500/30"
              >
                <ArrowDown className="w-6 h-6 animate-bounce" />
              </button>
            </div>
          {/* </div> */}
        </section>

                {/* Royal About Section with Advanced Animations */}
        <section
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden"
        >
          {/* Royal background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute w-96 h-96 rounded-full opacity-5"
              style={{
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.4), transparent)',
                left: '5%',
                top: '10%',
                animation: 'float-smooth-1 25s ease-in-out infinite',
                filter: 'blur(2px)',
              }}
            />
            <div
              className="absolute w-80 h-80 rounded-full opacity-5"
              style={{
                background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4), transparent)',
                right: '8%',
                bottom: '15%',
                animation: 'float-smooth-2 30s ease-in-out infinite',
                animationDelay: '12s',
                filter: 'blur(2px)',
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block relative mb-8 group">
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 text-glow hover:scale-105 transition-transform duration-500 relative">
                  <span className="bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">About Me</span>
                </h2>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 via-purple-400/20 to-blue-400/20 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              </div>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-purple-400 rounded-full animate-gradient-x"></div>
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-purple-400 animate-pulse"></div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-transparent rounded-full animate-gradient-x"></div>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed hover:text-gray-200 transition-colors duration-500">
                Discover the journey of an <span className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors cursor-pointer">AI/ML Engineer</span> passionate about
                <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors cursor-pointer"> innovation</span> and <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors cursor-pointer">excellence</span>
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 p-8 sm:p-12 card-gradient hover:scale-105 transform-3d perspective-1000">
                                <div className="text-center mb-16">
                  <div className="inline-block relative group mb-8">
                    <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4 hover:text-yellow-300 transition-all duration-500 transform group-hover:scale-105">
                      <span className="bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">Personal Overview</span>
                    </h3>
                    <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/10 via-purple-400/10 to-blue-400/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                  </div>
                  <div className="flex items-center justify-center space-x-3 mb-6">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-purple-400 rounded-full animate-gradient-x"></div>
                    <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
                    <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-transparent rounded-full animate-gradient-x"></div>
                  </div>
                  <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    A comprehensive view of my <span className="text-yellow-400 font-semibold">academic excellence</span>,
                    <span className="text-purple-400 font-semibold">competitive achievements</span>, and
                    <span className="text-blue-400 font-semibold">academic performance</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Academic Excellence with tilt */}
                  <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-500/30 transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:rotate-1 transform-3d perspective-1000 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-125 hover:rotate-12 transition-all duration-500">
                        <Award className="w-8 h-8 text-blue-400 hover:animate-pulse" />
                      </div>
                      <h4 className="text-xl font-bold text-blue-300 hover:text-blue-200 transition-colors duration-300">
                        Academic Excellence
                      </h4>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-slate-600/50 rounded-lg p-4 hover:bg-slate-600/70 hover:scale-105 transition-all duration-300">
                        <p className="text-blue-300 font-semibold text-sm mb-1">10th Grade</p>
                        <p className="text-white font-bold text-xl mb-1">88%</p>
                        <p className="text-gray-300 text-xs">IRMB DAV School</p>
                      </div>
                      <div className="bg-slate-600/50 rounded-lg p-4 hover:bg-slate-600/70 hover:scale-105 transition-all duration-300">
                        <p className="text-purple-300 font-semibold text-sm mb-1">12th Grade</p>
                        <p className="text-white font-bold text-xl mb-1">75%</p>
                        <p className="text-gray-300 text-xs">IRMB DAV School</p>
                      </div>
                    </div>
                  </div>

                  {/* Competitive Achievements with tilt */}
                  <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-purple-500/30 transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:-rotate-1 transform-3d perspective-1000 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-125 hover:rotate-12 transition-all duration-500">
                        <Star className="w-8 h-8 text-purple-400 hover:animate-spin" />
                      </div>
                      <h4 className="text-xl font-bold text-purple-300 hover:text-purple-200 transition-colors duration-300">
                        Competitive Exams
                      </h4>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-slate-600/50 rounded-lg p-4 hover:bg-slate-600/70 hover:scale-105 transition-all duration-300">
                        <p className="text-purple-300 font-semibold text-sm mb-1">JEE Mains</p>
                        <p className="text-white font-bold text-xl mb-1">72 Percentile</p>
                        <p className="text-gray-300 text-xs">Problem Solving</p>
                      </div>
                      <div className="bg-slate-600/50 rounded-lg p-4 hover:bg-slate-600/70 hover:scale-105 transition-all duration-300">
                        <p className="text-pink-300 font-semibold text-sm mb-1">NDA Exam</p>
                        <p className="text-white font-bold text-xl mb-1">782 Marks</p>
                        <p className="text-gray-300 text-xs">Comprehensive Knowledge</p>
                      </div>
                    </div>
                  </div>

                  {/* College Performance with tilt */}
                  <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-green-500/30 transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:rotate-1 transform-3d perspective-1000 hover:shadow-2xl hover:shadow-green-500/20 cursor-pointer">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:scale-125 hover:rotate-12 transition-all duration-500">
                        <GraduationCap className="w-8 h-8 text-green-400 hover:animate-bounce" />
                      </div>
                      <h4 className="text-xl font-bold text-green-300 hover:text-green-200 transition-colors duration-300">
                        College CGPA
                      </h4>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {[
                        { sem: "1st", cgpa: "7.0" },
                        { sem: "2nd", cgpa: "6.8" },
                        { sem: "3rd", cgpa: "7.2" },
                        { sem: "4th", cgpa: "7.0" },
                        { sem: "5th", cgpa: "7.1" },
                        { sem: "6th", cgpa: "7.8" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-slate-600/50 rounded-lg p-2 text-center hover:bg-slate-600/70 hover:scale-110 transition-all duration-300 cursor-pointer"
                        >
                          <p className="text-green-300 text-xs font-semibold">{item.sem}</p>
                          <p className="text-white font-bold text-sm">{item.cgpa}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-slate-600/50 rounded-lg p-3 text-center hover:bg-slate-600/70 hover:scale-105 transition-all duration-300">
                      <p className="text-yellow-300 font-semibold text-sm mb-1">7th Semester</p>
                      <p className="text-white font-bold text-sm">Currently Pursuing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

                {/* Royal Education Section */}
        <section
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden"
        >
          {/* Royal education background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute w-80 h-80 rounded-full opacity-4"
              style={{
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.4), transparent)',
                right: '10%',
                top: '20%',
                animation: 'float-smooth-1 28s ease-in-out infinite',
                filter: 'blur(3px)',
              }}
            />
            <div
              className="absolute w-96 h-96 rounded-full opacity-4"
              style={{
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent)',
                left: '5%',
                bottom: '10%',
                animation: 'float-smooth-2 35s ease-in-out infinite',
                animationDelay: '15s',
                filter: 'blur(3px)',
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block relative mb-8 group">
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 text-glow hover:scale-105 transition-transform duration-500 relative">
                  <span className="bg-gradient-to-r from-yellow-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">Education</span>
                </h2>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 via-indigo-400/20 to-purple-400/20 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              </div>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-indigo-400 rounded-full animate-gradient-x"></div>
                <GraduationCap className="w-5 h-5 text-yellow-400 animate-pulse" />
                <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-transparent rounded-full animate-gradient-x"></div>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed hover:text-gray-200 transition-colors duration-500">
                Academic journey of <span className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors cursor-pointer">innovation</span>,
                <span className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors cursor-pointer">learning</span>, and
                <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors cursor-pointer">growth</span>
              </p>
            </div>
            
            <div className="space-y-12 max-w-6xl mx-auto">
              {/* Higher Education with 3D effects */}
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 p-8 sm:p-12 card-gradient hover:scale-105 hover:-translate-y-4 transform-3d perspective-1000 hover:shadow-2xl hover:shadow-blue-500/30">
                <div className="flex flex-col lg:flex-row lg:items-center mb-8">
                  <div className="flex items-center mb-6 lg:mb-0">
                    <div className="w-20 h-20 bg-blue-600/20 rounded-xl flex items-center justify-center mr-6 hover:scale-110 hover:rotate-12 transition-all duration-500">
                      <GraduationCap className="w-10 h-10 text-blue-400 hover:animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2 hover:text-blue-300 transition-colors duration-300">
                        Bachelor of Technology (B.Tech)
                      </h3>
                      <p className="text-xl text-blue-300 font-semibold hover:text-blue-200 transition-colors duration-300">
                        Computer Science & Engineering (AI & ML)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 hover:scale-105 transition-all duration-300">
                      <Building className="w-6 h-6 text-purple-400 hover:animate-bounce" />
                      <span className="text-lg font-medium text-white">DAVIET College Jalandhar</span>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 hover:scale-105 transition-all duration-300">
                      <Calendar className="w-6 h-6 text-blue-400 hover:animate-pulse" />
                      <span className="text-lg text-white">2022 - 2026</span>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-700/40 rounded-xl border border-slate-600/50 hover:border-blue-500/30 hover:scale-105 transition-all duration-500">
                    <p className="text-gray-200 leading-relaxed text-lg hover:text-gray-100 transition-colors duration-300">
                      Specializing in <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors cursor-pointer">Artificial Intelligence</span> and 
                      <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors cursor-pointer"> Machine Learning</span> with comprehensive training in modern computing
                      technologies, data science, and intelligent systems development.
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondary Education with 3D effects */}
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-500 p-8 sm:p-12 card-gradient hover:scale-105 hover:-translate-y-4 transform-3d perspective-1000 hover:shadow-2xl hover:shadow-purple-500/30">
                <div className="flex flex-col lg:flex-row lg:items-center mb-8">
                  <div className="flex items-center mb-6 lg:mb-0">
                    <div className="w-20 h-20 bg-purple-600/20 rounded-xl flex items-center justify-center mr-6 hover:scale-110 hover:rotate-12 transition-all duration-500">
                      <Award className="w-10 h-10 text-purple-400 hover:animate-spin" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2 hover:text-purple-300 transition-colors duration-300">
                        Secondary Education
                      </h3>
                      <p className="text-xl text-purple-300 font-semibold hover:text-purple-200 transition-colors duration-300">
                        Senior Secondary School
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 hover:scale-105 transition-all duration-300">
                      <Building className="w-6 h-6 text-pink-400 hover:animate-bounce" />
                      <span className="text-lg font-medium text-white">
                        RMB DAV Senior Secondary Centenary Public School
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 hover:scale-105 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-purple-400 hover:animate-pulse" />
                      <span className="text-lg text-white">Nawanshahr, Punjab</span>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-700/40 rounded-xl border border-slate-600/50 hover:border-purple-500/30 hover:scale-105 transition-all duration-500">
                    <p className="text-gray-200 leading-relaxed text-lg hover:text-gray-100 transition-colors duration-300">
                      Strong foundation in <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors cursor-pointer">mathematics</span>, 
                      <span className="text-pink-400 font-semibold hover:text-pink-300 transition-colors cursor-pointer"> science</span>, and analytical thinking. 
                      Achieved excellent academic performance with consistent high scores in both 10th and 12th grade examinations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section with CRAZY ANIMATIONS */}
        <section
          ref={(el) => (sectionsRef.current[3] = el)}
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative"
        >
                    {/* Skills section - smooth CSS-only gradient waves */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute w-72 h-72 rounded-full opacity-8"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent)',
                left: '80%',
                top: '10%',
                animation: 'float-smooth-1 18s ease-in-out infinite',
                transform: 'translate3d(0,0,0)',
                filter: 'blur(2px)',
              }}
            />
            <div
              className="absolute w-64 h-64 rounded-full opacity-6"
              style={{
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12), transparent)',
                left: '5%',
                bottom: '15%',
                animation: 'float-smooth-2 22s ease-in-out infinite',
                animationDelay: '8s',
                transform: 'translate3d(0,0,0)',
                filter: 'blur(2px)',
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up text-glow hover:scale-110 transition-transform duration-500">
                Skills
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto animate-fade-in-up animation-delay-200 animate-gradient-x"></div>
            </div>
            
            <div className="max-w-7xl mx-auto">
              {/* Skills Categories with EXTREME 3D effects */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {/* Programming & Core with insane animations */}
                <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-115 transform hover:shadow-2xl hover:shadow-blue-500/40 animate-fade-in-up animation-delay-300 group cursor-pointer transform-3d perspective-1000 hover:-translate-y-8 hover:rotate-2 card-gradient">
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/50">
                        <Code className="w-10 h-10 text-blue-400 group-hover:animate-pulse" />
                      </div>
                      <h3 className="text-2xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
                        Programming & Core
                      </h3>
                    </div>
                    
                    <div className="space-y-6">
                      {[
                        { name: "Python", level: 90, icon: "🐍", color: "from-blue-400 to-green-400" },
                        { name: "SQL", level: 60, icon: "🗄️", color: "from-purple-400 to-blue-400" },
                        { name: "FastAPI", level: 70, icon: "⚡", color: "from-green-400 to-teal-400" },
                      ].map((skill, index) => (
                        <div
                          key={index}
                          className="p-4 bg-slate-700/50 rounded-lg border border-slate-600/50 hover:border-blue-400/70 transition-all duration-300 hover:scale-110 hover:bg-slate-700/80 animate-fade-in-up hover:-translate-y-2 hover:rotate-1 transform-3d cursor-pointer hover:shadow-lg hover:shadow-blue-500/30"
                          style={{ animationDelay: `${500 + index * 100}ms` }}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl hover:scale-150 transition-transform duration-300 cursor-pointer hover:animate-bounce">{skill.icon}</span>
                              <span className="font-bold text-white text-lg hover:text-blue-300 transition-colors duration-300">{skill.name}</span>
                            </div>
                            <span className="text-lg font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:scale-110">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-slate-600 rounded-full h-3 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out hover:animate-pulse glow-blue`}
                              style={{ width: `${skill.level}%`, animationDelay: `${800 + index * 200}ms` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Data Science & ML with crazy effects */}
                <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-115 transform hover:shadow-2xl hover:shadow-purple-500/40 animate-fade-in-up animation-delay-400 group cursor-pointer transform-3d perspective-1000 hover:-translate-y-8 hover:-rotate-2 card-gradient">
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-45 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/50">
                        <span className="text-3xl group-hover:animate-bounce">🤖</span>
                      </div>
                      <h3 className="text-2xl font-bold text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                        Data Science & ML
                      </h3>
                    </div>
                    
                    <div className="space-y-6">
                      {[
                        { name: "NumPy & Pandas", level: 92, icon: "📊", color: "from-purple-400 to-pink-400" },
                        { name: "Scikit-Learn", level: 90, icon: "🔬", color: "from-pink-400 to-red-400" },
                        { name: "PyTorch", level: 55, icon: "🔥", color: "from-orange-400 to-red-400" },
                        { name: "Deep Learning", level: 55, icon: "🧠", color: "from-purple-400 to-blue-400" },
                      ].map((skill, index) => (
                        <div
                          key={index}
                          className="p-4 bg-slate-700/50 rounded-lg border border-slate-600/50 hover:border-purple-400/70 transition-all duration-300 hover:scale-110 hover:bg-slate-700/80 animate-fade-in-up hover:-translate-y-2 hover:-rotate-1 transform-3d cursor-pointer hover:shadow-lg hover:shadow-purple-500/30"
                          style={{ animationDelay: `${600 + index * 100}ms` }}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl hover:scale-150 transition-transform duration-300 cursor-pointer hover:animate-spin">{skill.icon}</span>
                              <span className="font-bold text-white text-lg hover:text-purple-300 transition-colors duration-300">{skill.name}</span>
                            </div>
                            <span className="text-lg font-bold text-purple-400 hover:text-purple-300 transition-colors duration-300 hover:scale-110">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-slate-600 rounded-full h-3 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out hover:animate-pulse glow-purple`}
                              style={{ width: `${skill.level}%`, animationDelay: `${1000 + index * 200}ms` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Deployment & Tools with wild animations */}
                <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-115 transform hover:shadow-2xl hover:shadow-green-500/40 animate-fade-in-up animation-delay-500 group cursor-pointer transform-3d perspective-1000 hover:-translate-y-8 hover:rotate-1 card-gradient">
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/50">
                        <span className="text-3xl group-hover:animate-pulse">🚀</span>
                      </div>
                      <h3 className="text-2xl font-bold text-green-300 group-hover:text-green-200 transition-colors duration-300">
                        Deployment & Tools
                      </h3>
                    </div>
                    
                    <div className="space-y-6">
                      {[
                        { name: "Streamlit", level: 90, icon: "📱", color: "from-green-400 to-teal-400" },
                        { name: "Firebase", level: 83, icon: "🔥", color: "from-yellow-400 to-orange-400" },
                      ].map((skill, index) => (
                        <div
                          key={index}
                          className="p-4 bg-slate-700/50 rounded-lg border border-slate-600/50 hover:border-green-400/70 transition-all duration-300 hover:scale-110 hover:bg-slate-700/80 animate-fade-in-up hover:-translate-y-2 hover:rotate-2 transform-3d cursor-pointer hover:shadow-lg hover:shadow-green-500/30"
                          style={{ animationDelay: `${700 + index * 100}ms` }}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl hover:scale-150 transition-transform duration-300 cursor-pointer hover:animate-pulse">{skill.icon}</span>
                              <span className="font-bold text-white text-lg hover:text-green-300 transition-colors duration-300">{skill.name}</span>
                            </div>
                            <span className="text-lg font-bold text-green-400 hover:text-green-300 transition-colors duration-300 hover:scale-110">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-slate-600 rounded-full h-3 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out hover:animate-pulse`}
                              style={{ width: `${skill.level}%`, animationDelay: `${1200 + index * 200}ms` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Expertise Overview with INSANE 3D effects */}
              <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-108 transform hover:shadow-2xl hover:shadow-blue-500/40 animate-fade-in-up animation-delay-600 p-8 sm:p-12 card-gradient hover:-translate-y-6 transform-3d perspective-1000">
                <div className="text-center">
                  <div className="mb-12">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:scale-125 hover:rotate-45 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/50 cursor-pointer">
                      <span className="text-4xl animate-pulse hover:animate-spin transition-all duration-500">🎯</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fade-in-up animation-delay-700 text-glow hover:scale-105 transition-transform duration-500">
                      Technical Expertise Overview
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto animate-fade-in-up animation-delay-800 animate-gradient-x"></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                      { category: "Core Programming", tech: "Python", color: "text-blue-400", bgColor: "bg-blue-600/20", borderColor: "border-blue-500/30", icon: "🐍" },
                      { category: "Data Science", tech: "Pandas & NumPy", color: "text-purple-400", bgColor: "bg-purple-600/20", borderColor: "border-purple-500/30", icon: "📊" },
                      { category: "Machine Learning", tech: "Scikit-Learn & PyTorch", color: "text-pink-400", bgColor: "bg-pink-600/20", borderColor: "border-pink-500/30", icon: "🤖" },
                      { category: "Deployment", tech: "FastAPI & Streamlit", color: "text-green-400", bgColor: "bg-green-600/20", borderColor: "border-green-500/30", icon: "🚀" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`${item.bgColor} rounded-xl p-6 border ${item.borderColor} hover:scale-125 transition-all duration-500 hover:shadow-2xl cursor-pointer group animate-fade-in-up hover:-translate-y-4 hover:rotate-3 transform-3d perspective-1000`}
                        style={{ animationDelay: `${900 + index * 100}ms` }}
                      >
                        <div className="text-3xl mb-3 group-hover:scale-150 group-hover:animate-bounce transition-transform duration-500">{item.icon}</div>
                        <h4 className={`text-sm font-bold ${item.color} mb-2 group-hover:animate-pulse`}>{item.category}</h4>
                        <p className="text-xs text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{item.tech}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-8 bg-slate-700/40 rounded-xl border border-slate-600/50 hover:border-blue-500/30 hover:scale-105 transition-all duration-500 hover:shadow-lg">
                    <p className="text-lg text-gray-200 max-w-5xl mx-auto leading-relaxed hover:text-gray-100 transition-colors duration-300">
                      Proficient in{" "}
                      <span className="text-blue-400 font-bold hover:text-blue-300 transition-colors cursor-pointer hover:scale-110 inline-block">Python ecosystem</span>{" "}
                      for AI/ML development, experienced with{" "}
                      <span className="text-purple-400 font-bold hover:text-purple-300 transition-colors cursor-pointer hover:scale-110 inline-block">data manipulation</span>{" "}
                      using NumPy & Pandas, skilled in{" "}
                      <span className="text-pink-400 font-bold hover:text-pink-300 transition-colors cursor-pointer hover:scale-110 inline-block">machine learning</span>{" "}
                      with Scikit-Learn & PyTorch, and capable of{" "}
                      <span className="text-green-400 font-bold hover:text-green-300 transition-colors cursor-pointer hover:scale-110 inline-block">full-stack deployment</span>{" "}
                      using FastAPI, Streamlit, and Firebase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section with amazing 3D cards */}
        <section
          ref={(el) => (sectionsRef.current[4] = el)}
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-glow hover:scale-105 transition-transform duration-500">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-6 animate-gradient-x"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed hover:text-gray-200 transition-colors duration-300">
                Explore my latest work in <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors cursor-pointer">AI/ML</span> and <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors cursor-pointer">data science</span> projects
              </p>
            </div>

            {/* Projects Grid with insane 3D effects */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
              {/* Customer Churn Prediction Project */}
              <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-110 p-8 card-gradient hover:-translate-y-6 hover:rotate-2 transform-3d perspective-1000 hover:shadow-2xl hover:shadow-blue-500/40 cursor-pointer group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/50">
                    <span className="text-3xl group-hover:animate-bounce">📈</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-125 group-hover:animate-pulse transition-all duration-300">
                    <span className="text-xs text-white font-bold">���</span>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    Customer Churn Prediction
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex flex-wrap justify-center gap-2">
                      {['🐍 Python', '📊 Pandas', '🎯 NumPy'].map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-2 text-sm font-medium bg-blue-600/20 text-blue-300 rounded-lg border border-blue-500/30 hover:scale-110 hover:bg-blue-600/30 transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {['🔬 Scikit-Learn', '🤖 ML'].map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-2 text-sm font-medium bg-purple-600/20 text-purple-300 rounded-lg border border-purple-500/30 hover:scale-110 hover:bg-purple-600/30 transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-200 leading-relaxed text-lg mb-8 group-hover:text-gray-100 transition-colors duration-300">
                    Advanced ML model predicting customer churn with <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors cursor-pointer">feature engineering</span> and <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors cursor-pointer">deployment pipeline</span>.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://github.com/akshitbhardwaj315/customer-churn-prediction-.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all duration-300 hover:scale-110 border border-slate-600 hover:border-slate-500 font-semibold hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Github className="w-5 h-5 mr-3 hover:animate-spin" />
                    View Code
                  </a>
                  <a
                    href="https://www.linkedin.com/posts/akshit-bhardwaj-19a55424b_excited-to-share-my-latest-machine-learning-activity-7284246619238080512-Y_dW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3W3QYBKIwuk_NpGDJv23KyK8eSuz5Oz1M"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-110 font-semibold hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Linkedin className="w-5 h-5 mr-3 hover:animate-pulse" />
                    LinkedIn Post
                  </a>
                </div>
              </div>

              {/* HeartGuard AI Project */}
              <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-110 p-8 card-gradient hover:-translate-y-6 hover:-rotate-2 transform-3d perspective-1000 hover:shadow-2xl hover:shadow-purple-500/40 cursor-pointer group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/50">
                    <span className="text-3xl group-hover:animate-pulse">❤️</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-125 group-hover:animate-pulse transition-all duration-300">
                    <span className="text-xs text-white font-bold">✓</span>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    HeartGuard AI
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex flex-wrap justify-center gap-2">
                      {['🐍 Python', '🧠 ANN', '📱 Streamlit'].map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-2 text-sm font-medium bg-purple-600/20 text-purple-300 rounded-lg border border-purple-500/30 hover:scale-110 hover:bg-purple-600/30 transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {['🔥 PyTorch', '�� Healthcare AI'].map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-2 text-sm font-medium bg-pink-600/20 text-pink-300 rounded-lg border border-pink-500/30 hover:scale-110 hover:bg-pink-600/30 transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-200 leading-relaxed text-lg mb-8 group-hover:text-gray-100 transition-colors duration-300">
                    Heart disease prediction using <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors cursor-pointer">ANN</span> with interactive <span className="text-pink-400 font-semibold hover:text-pink-300 transition-colors cursor-pointer">Streamlit interface</span> for real-time assessment.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://github.com/Manan79/HeartgaurdAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all duration-300 hover:scale-110 border border-slate-600 hover:border-slate-500 font-semibold hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Github className="w-5 h-5 mr-3 hover:animate-spin" />
                    View Code
                  </a>
                  <a
                    href="https://www.linkedin.com/posts/akshit-bhardwaj-19a55424b_heartgaurd-ai-activity-7304556984656179200-mWhV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3W3QYBKIwuk_NpGDJv23KyK8eSuz5Oz1M"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-110 font-semibold hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Linkedin className="w-5 h-5 mr-3 hover:animate-pulse" />
                    LinkedIn Post
                  </a>
                </div>
              </div>

                            {/* AI Medical Analysis System Project */}
              <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-110 p-8 card-gradient hover:-translate-y-6 hover:rotate-1 transform-3d perspective-1000 hover:shadow-2xl hover:shadow-green-500/40 cursor-pointer group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/50">
                    <span className="text-3xl group-hover:animate-pulse">🏥</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-125 group-hover:animate-pulse transition-all duration-300">
                    <span className="text-xs text-white font-bold">✓</span>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                    AI Medical Analysis System
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex flex-wrap justify-center gap-2">
                      {['🐍 Python', '🧠 TensorFlow', '📱 Streamlit'].map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-2 text-sm font-medium bg-green-600/20 text-green-300 rounded-lg border border-green-500/30 hover:scale-110 hover:bg-green-600/30 transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {['🔬 Computer Vision', '🏥 Healthcare AI', '📊 Medical Data'].map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-2 text-sm font-medium bg-teal-600/20 text-teal-300 rounded-lg border border-teal-500/30 hover:scale-110 hover:bg-teal-600/30 transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-200 leading-relaxed text-lg mb-8 group-hover:text-gray-100 transition-colors duration-300">
                    Advanced AI system for <span className="text-green-400 font-semibold hover:text-green-300 transition-colors cursor-pointer">medical image analysis</span> and diagnostic assistance using <span className="text-teal-400 font-semibold hover:text-teal-300 transition-colors cursor-pointer">deep learning algorithms</span> with 95.7% accuracy.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://github.com/akshitbhardwaj315/ai-medical-analysis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all duration-300 hover:scale-110 border border-slate-600 hover:border-slate-500 font-semibold hover:-translate-y-1 hover:shadow-lg"
                  >
                    <Github className="w-5 h-5 mr-3 hover:animate-spin" />
                    View Code
                  </a>
                  <a
                    href="https://ai-medical-analysis.streamlit.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 hover:scale-110 font-semibold hover:-translate-y-1 hover:shadow-lg"
                  >
                    <ExternalLink className="w-5 h-5 mr-3 hover:animate-pulse" />
                    Live Demo
                  </a>
                </div>
              </div>

              {/* More Projects Coming */}
              <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-500 hover:scale-110 p-8 card-gradient hover:-translate-y-6 hover:rotate-1 transform-3d perspective-1000 hover:shadow-2xl hover:shadow-yellow-500/40 cursor-pointer group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-yellow-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/50">
                    <span className="text-3xl group-hover:animate-bounce">🚀</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center animate-pulse group-hover:scale-125 group-hover:animate-spin transition-all duration-300">
                    <span className="text-xs text-white font-bold">+</span>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                    More Projects Coming
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex flex-wrap justify-center gap-2">
                      {['🔬 Data Science', '🤖 Deep Learning'].map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-2 text-sm font-medium bg-yellow-600/20 text-yellow-300 rounded-lg border border-yellow-500/30 hover:scale-110 hover:bg-yellow-600/30 transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {['📊 Analytics', '🧠 AI Systems'].map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-2 text-sm font-medium bg-orange-600/20 text-orange-300 rounded-lg border border-orange-500/30 hover:scale-110 hover:bg-orange-600/30 transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-200 leading-relaxed text-lg mb-8 group-hover:text-gray-100 transition-colors duration-300">
                    Exciting <span className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors cursor-pointer">AI/ML projects</span> in development. Advanced algorithms and <span className="text-orange-400 font-semibold hover:text-orange-300 transition-colors cursor-pointer">innovative solutions</span> coming soon!
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-center w-full px-6 py-3 bg-yellow-600/20 text-yellow-300 rounded-lg border border-yellow-500/30 font-semibold cursor-not-allowed hover:scale-105 transition-transform duration-300">
                    <span className="w-5 h-5 mr-3 animate-spin">⏳</span>
                    In Development
                  </div>
                  <div className="flex items-center justify-center w-full px-6 py-3 bg-purple-600/20 text-purple-300 rounded-lg border border-purple-500/30 font-semibold hover:scale-105 transition-transform duration-300">
                    <Star className="w-5 h-5 mr-3 animate-pulse" />
                    Stay Tuned
                  </div>
                </div>
              </div>
            </div>

                        {/* Project Stats with awesome animations */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "3+", label: "Completed Projects", icon: "✅", color: "from-green-400 to-emerald-500" },
                { number: "8+", label: "Technologies Used", icon: "⚡", color: "from-blue-400 to-purple-500" },
                { number: "100%", label: "Open Source", icon: "🔓", color: "from-purple-400 to-pink-500" },
                { number: "∞", label: "Learning", icon: "📚", color: "from-orange-400 to-red-500" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-slate-800/60 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:rotate-1 transform cursor-pointer hover:shadow-xl card-gradient"
                >
                  <div className="text-3xl mb-3 hover:scale-125 hover:animate-bounce transition-transform duration-300">{stat.icon}</div>
                  <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-300 font-medium hover:text-gray-200 transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          ref={(el) => (sectionsRef.current[5] = el)}
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-glow hover:scale-105 transition-transform duration-500">
                Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto animate-gradient-x"></div>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 p-8 sm:p-12 card-gradient hover:scale-105 hover:-translate-y-4 transform-3d perspective-1000 hover:shadow-2xl hover:shadow-blue-500/30">
                <div className="flex flex-col lg:flex-row lg:items-center mb-8">
                  <div className="flex items-center mb-6 lg:mb-0">
                    <div className="w-20 h-20 bg-blue-600/20 rounded-xl flex items-center justify-center mr-6 hover:scale-110 hover:rotate-12 transition-all duration-500">
                      <Briefcase className="w-10 h-10 text-blue-400 hover:animate-pulse" />
                    </div>
                    <div>
                                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 hover:text-blue-300 transition-colors duration-300">
                        AI/ML Engineering Intern
                      </h3>
                      <p className="text-lg sm:text-xl text-blue-300 font-semibold hover:text-blue-200 transition-colors duration-300">
                        Paymentus Holdings Inc (NYSE: PAY)
                      </p>
                      <p className="text-sm text-purple-300 font-medium">
                        Leading FinTech AI Platform • 2.3B+ Transactions/Year
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                                        <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 hover:scale-105 transition-all duration-300">
                      <Building className="w-6 h-6 text-blue-400 hover:animate-bounce" />
                      <div className="flex flex-col">
                        <span className="text-lg font-medium text-white">Paymentus Holdings Inc</span>
                        <span className="text-sm text-gray-400">Public FinTech Company (NYSE: PAY)</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 hover:scale-105 transition-all duration-300">
                      <Calendar className="w-6 h-6 text-purple-400 hover:animate-pulse" />
                      <span className="text-lg text-white">2024 - Present</span>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 hover:scale-105 transition-all duration-300">
                      <Rocket className="w-6 h-6 text-green-400 hover:animate-bounce" />
                      <span className="text-lg text-white">AI Innovation Team</span>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-700/40 rounded-xl border border-slate-600/50 hover:border-blue-500/30 hover:scale-105 transition-all duration-500">
                                        <p className="text-gray-200 leading-relaxed text-lg mb-4 hover:text-gray-100 transition-colors duration-300">
                      Contributing to <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors cursor-pointer">AI-powered payment solutions</span> at a leading
                      publicly-traded FinTech company processing <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors cursor-pointer">2.3+ billion transactions annually</span>.
                    </p>
                    <p className="text-gray-200 leading-relaxed text-lg hover:text-gray-100 transition-colors duration-300">
                      Developing <span className="text-pink-400 font-semibold hover:text-pink-300 transition-colors cursor-pointer">machine learning algorithms</span> including 
                      fraud detection, transaction optimization, and intelligent payment routing using 
                      <span className="text-green-400 font-semibold hover:text-green-300 transition-colors cursor-pointer"> 99.2% accuracy rates</span>.
                    </p>
                  </div>
                </div>

                {/* Skills & Achievements with enhanced animations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-700/40 rounded-xl border border-slate-600/50 hover:border-blue-500/30 hover:scale-105 transition-all duration-500">
                    <h4 className="text-xl font-bold text-blue-300 mb-4 flex items-center hover:text-blue-200 transition-colors duration-300">
                      <Code className="w-6 h-6 mr-2 hover:animate-spin" />
                      Technical Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                                            {['Machine Learning', 'Fraud Detection AI', 'Payment Analytics', 'Deep Learning', 'FinTech Systems', 'Real-time Processing'].map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-2 text-sm bg-blue-600/20 text-blue-300 rounded-lg border border-blue-500/30 hover:scale-110 hover:bg-blue-600/30 transition-all duration-300 cursor-pointer"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6 bg-slate-700/40 rounded-xl border border-slate-600/50 hover:border-purple-500/30 hover:scale-105 transition-all duration-500">
                    <h4 className="text-xl font-bold text-purple-300 mb-4 flex items-center hover:text-purple-200 transition-colors duration-300">
                      <Star className="w-6 h-6 mr-2 hover:animate-pulse" />
                      Key Projects
                    </h4>
                    <ul className="space-y-2">
                      {['Customer Churn Prediction ML Model', 'HeartGuard AI Healthcare System', 'Data Analysis & Visualization'].map((project, i) => (
                        <li key={i} className="flex items-start space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></span>
                          <span className="text-gray-200 text-sm hover:text-gray-100 transition-colors duration-300">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section with enhanced effects */}
        <section
          ref={(el) => (sectionsRef.current[6] = el)}
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 text-glow hover:scale-105 transition-transform duration-500">
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-6 animate-gradient-x"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed hover:text-gray-200 transition-colors duration-300">
                Ready to collaborate on <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors cursor-pointer">AI/ML projects</span> or discuss 
                <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors cursor-pointer"> innovative ideas</span>? Let's connect!
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Info with animations */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 hover:text-blue-300 transition-colors duration-300">
                    Let's Connect
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed mb-8 hover:text-gray-200 transition-colors duration-300">
                    I'm always excited to discuss new projects, 
                    <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors cursor-pointer"> innovative AI solutions</span>, and 
                    <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors cursor-pointer"> collaboration opportunities</span>.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      label: 'Email',
                      value: 'akshitbhardwaj315@gmail.com',
                      href: 'mailto:akshitbhardwaj315@gmail.com',
                      color: 'bg-blue-600/20',
                      borderColor: 'border-blue-500/30',
                      iconColor: 'text-blue-400'
                    },
                    {
                      icon: Phone,
                      label: 'Phone',
                      value: '+91 6230593730',
                      href: 'tel:+916230593730',
                      color: 'bg-purple-600/20',
                      borderColor: 'border-purple-500/30',
                      iconColor: 'text-purple-400'
                    },
                    {
                      icon: MapPin,
                      label: 'Location',
                      value: 'Punjab, India',
                      href: '#',
                      color: 'bg-green-600/20',
                      borderColor: 'border-green-500/30',
                      iconColor: 'text-green-400'
                    }
                  ].map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className={`flex items-center space-x-6 p-6 bg-slate-800/60 backdrop-blur-sm rounded-2xl border ${contact.borderColor} hover:scale-110 transition-all duration-500 hover:-translate-y-2 hover:rotate-1 transform card-gradient hover:shadow-xl cursor-pointer`}
                    >
                      <div className={`p-4 ${contact.color} rounded-xl hover:scale-110 hover:rotate-12 transition-all duration-300`}>
                        <contact.icon className={`w-6 h-6 ${contact.iconColor} hover:animate-pulse`} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                        <span className="text-lg font-semibold text-white hover:text-blue-300 transition-colors duration-300">
                          {contact.value}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links with wild animations */}
                <div className="pt-8">
                  <h4 className="text-xl font-bold text-white mb-6 hover:text-blue-300 transition-colors duration-300">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-lg bg-gradient-to-r ${social.color} ${social.hoverColor} text-white transition-all duration-500 hover:scale-150 hover:rotate-45 hover:-translate-y-4 shadow-lg hover:shadow-2xl transform-3d perspective-1000`}
                        aria-label={social.name}
                        style={{ 
                          animationDelay: `${index * 200}ms`,
                        }}
                      >
                        <social.icon className="w-6 h-6 hover:animate-spin" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

                            {/* Contact Form with 3D effects */}
              <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 p-8 sm:p-12 card-gradient hover:scale-105 hover:-translate-y-4 transform-3d perspective-1000 hover:shadow-2xl hover:shadow-blue-500/30 pointer-events-auto">
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 hover:text-blue-300 transition-colors duration-300">
                    Send a Message
                  </h3>
                  <p className="text-gray-300 hover:text-gray-200 transition-colors duration-300">Have a project in mind? Let's discuss how we can work together!</p>
                </div>
                
                                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                                                                  className="w-full px-6 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 pointer-events-auto"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                                                                  className="w-full px-6 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 pointer-events-auto"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                                                                  className="w-full px-6 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 pointer-events-auto"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={6}
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                                            className="w-full px-6 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                    />
                  </div>
                  <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transform-3d">
                    <span className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-3 hover:animate-bounce" />
                      Send Message
                      <Sparkles className="w-5 h-5 ml-3 hover:animate-spin" />
                    </span>
                  </button>
                </form>
              </div>
            </div>

            {/* Call to Action with insane animations */}
            <div className="text-center mt-20">
              <div className="bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 p-8 sm:p-12 max-w-4xl mx-auto card-gradient hover:scale-105 hover:-translate-y-4 transform-3d perspective-1000 hover:shadow-2xl hover:shadow-blue-500/30">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-glow hover:scale-110 transition-transform duration-500">
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed hover:text-gray-200 transition-colors duration-300">
                  Whether it's an <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors cursor-pointer">AI-powered solution</span>, 
                  <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors cursor-pointer"> machine learning model</span>, or 
                  <span className="text-pink-400 font-semibold hover:text-pink-300 transition-colors cursor-pointer"> data analysis project</span> – I'm here to help bring your ideas to life.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => scrollToSection(4)}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-500 hover:scale-125 hover:-translate-y-4 hover:rotate-3 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transform-3d"
                  >
                    <span className="flex items-center">
                      <Rocket className="w-5 h-5 mr-2 animate-bounce" />
                      View My Projects
                    </span>
                  </button>
                  <a
                    href="mailto:akshitbhardwaj315@gmail.com"
                    className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold border border-slate-600 hover:border-slate-500 transition-all duration-500 hover:scale-125 hover:-translate-y-4 hover:-rotate-3 transform shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center">
                      <Heart className="w-5 h-5 mr-2 text-red-400 animate-pulse" />
                      Message Me
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Section Indicators with enhanced animations */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        {sections.map((section, index) => (
          <div key={index} className="relative group">
            <button
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-150 transform-3d ${
                currentSection === index
                  ? "bg-blue-500 scale-125 glow-blue animate-pulse"
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Go to ${section.name} section`}
            />
            
            {/* Tooltip with 3D effect */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-slate-800/95 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap border border-slate-700 group-hover:scale-110 group-hover:-translate-x-2 shadow-lg">
              {section.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
