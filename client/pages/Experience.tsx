import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Building,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Award,
} from "lucide-react";

const Experience = () => {
  const [expandedJob, setExpandedJob] = useState(0);

  const workExperience = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description:
        "Lead development of scalable web applications using React, Node.js, and cloud technologies. Manage a team of 4 developers and architect solutions for high-traffic applications.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Led migration to microservices architecture",
        "Mentored 3 junior developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "AWS",
        "MongoDB",
        "TypeScript",
      ],
      projects: [
        "E-commerce Platform (1M+ users)",
        "Real-time Analytics Dashboard",
        "Mobile API Gateway",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2021 - 2022",
      type: "Full-time",
      description:
        "Developed and maintained multiple client projects using modern web technologies. Collaborated closely with design teams to create pixel-perfect user interfaces.",
      achievements: [
        "Built 5+ client projects from scratch",
        "Improved code quality through testing (90% coverage)",
        "Reduced bug reports by 50%",
        "Implemented responsive design patterns",
      ],
      technologies: [
        "React",
        "Vue.js",
        "Express.js",
        "PostgreSQL",
        "Docker",
        "Jest",
      ],
      projects: [
        "SaaS Dashboard Platform",
        "Restaurant Management System",
        "Portfolio Website Builder",
      ],
    },
    {
      title: "Frontend Developer",
      company: "WebAgency Pro",
      location: "New York, NY",
      period: "2020 - 2021",
      type: "Contract",
      description:
        "Specialized in creating responsive web applications and improving user experience across various client projects. Focused on performance optimization and accessibility.",
      achievements: [
        "Improved website loading speed by 35%",
        "Achieved 98% accessibility compliance",
        "Created reusable component library",
        "Delivered 15+ client projects on time",
      ],
      technologies: ["React", "JavaScript", "SASS", "Webpack", "Firebase"],
      projects: [
        "Corporate Website Redesign",
        "E-learning Platform",
        "Real Estate Portal",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "Digital Solutions LLC",
      location: "Austin, TX",
      period: "2019 - 2020",
      type: "Full-time",
      description:
        "Started my professional journey building websites and learning modern development practices. Worked on various projects ranging from landing pages to web applications.",
      achievements: [
        "Completed 20+ website projects",
        "Learned modern development workflows",
        "Contributed to open source projects",
        "Earned AWS certification",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL"],
      projects: [
        "Business Landing Pages",
        "WordPress Custom Themes",
        "Contact Management System",
      ],
    },
  ];

  const freelanceProjects = [
    {
      client: "Local Restaurant Chain",
      project: "Online Ordering System",
      duration: "3 months",
      description:
        "Built a complete online ordering system with payment integration and real-time order tracking.",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    },
    {
      client: "Fitness Startup",
      project: "Mobile Fitness App",
      duration: "4 months",
      description:
        "Developed a React Native app for workout tracking and meal planning with social features.",
      technologies: ["React Native", "Firebase", "Redux"],
    },
    {
      client: "Non-profit Organization",
      project: "Donation Platform",
      duration: "2 months",
      description:
        "Created a donation platform with recurring payments and impact tracking dashboard.",
      technologies: ["Next.js", "PostgreSQL", "Stripe"],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
            Experience
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            My professional journey in software development, from junior
            developer to senior full-stack engineer.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6"></div>
        </div>

        {/* Work Experience Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gradient mb-12 text-center animate-fade-in-up delay-200">
            Professional Experience
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue to-neon-purple hidden md:block"></div>

            <div className="space-y-12">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className={`relative animate-fade-in-up delay-${(index + 1) * 200}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full border-4 border-dark-100 hidden md:block"></div>

                  {/* Content */}
                  <div className="md:ml-20 card-gradient p-8 hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gradient mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-foreground/80 mb-4">
                          <div className="flex items-center space-x-2">
                            <Building className="w-5 h-5 text-neon-blue" />
                            <span className="font-semibold">{job.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-neon-purple" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-neon-green" />
                            <span>{job.period}</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-dark-300 px-4 py-2 rounded-lg">
                        <span className="text-neon-blue font-medium">
                          {job.type}
                        </span>
                      </div>
                    </div>

                    <p className="text-foreground/80 leading-relaxed mb-6">
                      {job.description}
                    </p>

                    {/* Expandable Content */}
                    <button
                      onClick={() =>
                        setExpandedJob(expandedJob === index ? -1 : index)
                      }
                      className="flex items-center space-x-2 text-neon-blue hover:text-neon-purple transition-colors mb-4"
                    >
                      {expandedJob === index ? (
                        <ChevronDown className="w-5 h-5" />
                      ) : (
                        <ChevronRight className="w-5 h-5" />
                      )}
                      <span className="font-medium">
                        {expandedJob === index
                          ? "Show Less"
                          : "Show More Details"}
                      </span>
                    </button>

                    {expandedJob === index && (
                      <div className="space-y-6 animate-fade-in-up">
                        {/* Achievements */}
                        <div>
                          <h4 className="text-lg font-semibold text-gradient mb-3 flex items-center">
                            <Award className="w-5 h-5 mr-2 text-neon-yellow" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {job.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start space-x-2"
                              >
                                <span className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-foreground/80">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-lg font-semibold text-gradient mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="bg-dark-300 text-neon-blue px-3 py-1 rounded-full text-sm border border-neon-blue/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Projects */}
                        <div>
                          <h4 className="text-lg font-semibold text-gradient mb-3">
                            Notable Projects
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {job.projects.map((project, i) => (
                              <div
                                key={i}
                                className="bg-dark-300/50 p-4 rounded-lg border border-dark-400"
                              >
                                <span className="text-foreground/80 text-sm">
                                  {project}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Freelance Work */}
        <div className="mb-20 animate-fade-in-up delay-600">
          <h2 className="text-3xl font-bold text-gradient mb-12 text-center">
            Freelance Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {freelanceProjects.map((project, index) => (
              <div
                key={index}
                className={`card-modern p-6 hover:scale-105 transition-transform duration-300 delay-${(index + 1) * 100}`}
              >
                <h3 className="text-xl font-bold text-gradient mb-2">
                  {project.project}
                </h3>
                <div className="flex items-center space-x-2 text-neon-blue mb-3">
                  <Building className="w-4 h-4" />
                  <span className="font-medium">{project.client}</span>
                </div>
                <div className="flex items-center space-x-2 text-foreground/70 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{project.duration}</span>
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-dark-300 text-neon-blue px-2 py-1 rounded text-xs border border-neon-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Stats */}
        <div className="mb-20 animate-fade-in-up delay-800">
          <h2 className="text-3xl font-bold text-gradient mb-12 text-center">
            Career Highlights
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "3+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "15+", label: "Happy Clients" },
              { number: "10+", label: "Technologies Mastered" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center card-modern p-6 hover:scale-105 transition-transform duration-300 delay-${(index + 1) * 100}`}
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

        {/* CTA */}
        <div className="text-center animate-fade-in-up delay-1000">
          <div className="card-modern p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              Ready to add value to your team? I'm always open to discussing new
              opportunities and exciting projects.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
