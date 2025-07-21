import React, { useState } from "react";
import { ChevronRight, Star, TrendingUp, Zap } from "lucide-react";

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techStacks = [
    {
      category: "Frontend Frameworks",
      icon: "⚛️",
      description: "Modern frontend libraries and frameworks",
      technologies: [
        {
          name: "React",
          experience: "3+ years",
          proficiency: 95,
          description: "Component-based UI library with hooks and context",
          status: "Expert",
        },
        {
          name: "Next.js",
          experience: "2+ years",
          proficiency: 90,
          description: "Full-stack React framework with SSR/SSG",
          status: "Advanced",
        },
        {
          name: "Vue.js",
          experience: "1+ year",
          proficiency: 80,
          description: "Progressive JavaScript framework",
          status: "Proficient",
        },
        {
          name: "Angular",
          experience: "1 year",
          proficiency: 75,
          description: "TypeScript-based web application framework",
          status: "Intermediate",
        },
      ],
    },
    {
      category: "Backend Technologies",
      icon: "🖥️",
      description: "Server-side technologies and frameworks",
      technologies: [
        {
          name: "Node.js",
          experience: "3+ years",
          proficiency: 90,
          description: "JavaScript runtime for server-side development",
          status: "Expert",
        },
        {
          name: "Express.js",
          experience: "3+ years",
          proficiency: 88,
          description: "Fast and minimalist web framework for Node.js",
          status: "Expert",
        },
        {
          name: "Python",
          experience: "2+ years",
          proficiency: 85,
          description: "Versatile programming language",
          status: "Advanced",
        },
        {
          name: "Django",
          experience: "1+ year",
          proficiency: 80,
          description: "High-level Python web framework",
          status: "Proficient",
        },
      ],
    },
    {
      category: "Databases",
      icon: "🗄️",
      description: "Data storage and management solutions",
      technologies: [
        {
          name: "MongoDB",
          experience: "3+ years",
          proficiency: 90,
          description: "NoSQL document-oriented database",
          status: "Expert",
        },
        {
          name: "PostgreSQL",
          experience: "2+ years",
          proficiency: 85,
          description: "Advanced open-source relational database",
          status: "Advanced",
        },
        {
          name: "Redis",
          experience: "2+ years",
          proficiency: 80,
          description: "In-memory data structure store",
          status: "Proficient",
        },
        {
          name: "Firebase",
          experience: "2+ years",
          proficiency: 85,
          description: "Google's mobile and web application platform",
          status: "Advanced",
        },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      description: "Cloud platforms and deployment tools",
      technologies: [
        {
          name: "AWS",
          experience: "2+ years",
          proficiency: 85,
          description: "Amazon Web Services cloud platform",
          status: "Advanced",
        },
        {
          name: "Docker",
          experience: "2+ years",
          proficiency: 80,
          description: "Containerization platform",
          status: "Proficient",
        },
        {
          name: "Vercel",
          experience: "2+ years",
          proficiency: 90,
          description: "Frontend cloud platform",
          status: "Expert",
        },
        {
          name: "Netlify",
          experience: "1+ year",
          proficiency: 85,
          description: "Web development platform",
          status: "Advanced",
        },
      ],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Expert":
        return "text-neon-green";
      case "Advanced":
        return "text-neon-blue";
      case "Proficient":
        return "text-neon-purple";
      case "Intermediate":
        return "text-neon-yellow";
      default:
        return "text-foreground";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Expert":
        return <Star className="w-4 h-4 text-neon-green" />;
      case "Advanced":
        return <TrendingUp className="w-4 h-4 text-neon-blue" />;
      case "Proficient":
        return <Zap className="w-4 h-4 text-neon-purple" />;
      default:
        return <ChevronRight className="w-4 h-4 text-neon-yellow" />;
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
            Tech Stack
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            My preferred technologies and tools for building modern, scalable,
            and performant applications.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6"></div>
        </div>

        {/* Tech Stacks */}
        <div className="space-y-16">
          {techStacks.map((stack, stackIndex) => (
            <div
              key={stackIndex}
              className={`animate-fade-in-up delay-${(stackIndex + 1) * 200}`}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-4 mb-4">
                  <span className="text-5xl">{stack.icon}</span>
                  <h2 className="text-3xl font-bold text-gradient">
                    {stack.category}
                  </h2>
                </div>
                <p className="text-foreground/70">{stack.description}</p>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stack.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="card-modern p-6 hover:scale-105 transition-all duration-300 group cursor-pointer"
                    onMouseEnter={() =>
                      setHoveredTech(`${stackIndex}-${techIndex}`)
                    }
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-gradient">
                            {tech.name}
                          </h3>
                          {getStatusIcon(tech.status)}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-foreground/70 mb-3">
                          <span>{tech.experience}</span>
                          <span className={getStatusColor(tech.status)}>
                            {tech.status}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-neon-blue mb-1">
                          {tech.proficiency}%
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                      {tech.description}
                    </p>

                    <div className="w-full bg-dark-300 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full transition-all duration-1000 ${
                          hoveredTech === `${stackIndex}-${techIndex}`
                            ? "animate-pulse"
                            : ""
                        }`}
                        style={{
                          width: `${tech.proficiency}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Preferred Stack */}
        <div className="mt-20 animate-fade-in-up delay-800">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              My Preferred Full-Stack
            </h2>
            <p className="text-xl text-foreground/70">
              The combination I reach for when starting new projects
            </p>
          </div>

          <div className="card-gradient p-12 text-center max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {[
                { name: "React/Next.js", category: "Frontend", icon: "⚛️" },
                { name: "Node.js/Express", category: "Backend", icon: "🟢" },
                {
                  name: "MongoDB/PostgreSQL",
                  category: "Database",
                  icon: "🗄️",
                },
                { name: "AWS/Vercel", category: "Cloud", icon: "☁️" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className={`text-center hover:scale-110 transition-transform duration-300 delay-${(index + 1) * 100}`}
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className="text-lg font-bold text-gradient mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-foreground/70">{tech.category}</p>
                </div>
              ))}
            </div>

            <p className="text-foreground/80 leading-relaxed mb-8">
              This stack provides the perfect balance of developer experience,
              performance, and scalability. It allows for rapid prototyping
              while maintaining production-ready architecture.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/projects" className="btn-primary">
                See Projects Built
              </a>
              <a href="/contact" className="btn-secondary">
                Discuss Your Stack
              </a>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="mt-20 animate-fade-in-up delay-1000">
          <h2 className="text-3xl font-bold text-gradient mb-12 text-center">
            Currently Learning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Rust",
                progress: 30,
                description: "Systems programming language",
                icon: "🦀",
              },
              {
                name: "GraphQL",
                progress: 60,
                description: "Query language for APIs",
                icon: "🔗",
              },
              {
                name: "WebAssembly",
                progress: 25,
                description: "High-performance web applications",
                icon: "⚡",
              },
            ].map((learning, index) => (
              <div
                key={index}
                className="card-modern p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl mb-4">{learning.icon}</div>
                <h3 className="text-xl font-bold text-gradient mb-2">
                  {learning.name}
                </h3>
                <p className="text-foreground/70 text-sm mb-4">
                  {learning.description}
                </p>
                <div className="w-full bg-dark-300 rounded-full h-2 mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-neon-green to-neon-blue rounded-full transition-all duration-1000"
                    style={{ width: `${learning.progress}%` }}
                  ></div>
                </div>
                <div className="text-sm text-neon-green font-medium">
                  {learning.progress}% Progress
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
