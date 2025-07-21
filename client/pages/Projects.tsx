// import React, { useState } from "react";
// import {
//   ExternalLink,
//   Github,
//   Calendar,
//   Users,
//   Code,
//   Star,
//   Filter,
// } from "lucide-react";

// const Projects = () => {
//   const [activeFilter, setActiveFilter] = useState("all");

//   const projects = [
//     {
//       id: 1,
//       title: "E-Commerce Platform",
//       description:
//         "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
//       image: "/placeholder.svg",
//       category: "fullstack",
//       technologies: [
//         "React",
//         "Node.js",
//         "MongoDB",
//         "Stripe",
//         "Redux",
//         "Express",
//       ],
//       liveUrl: "https://example.com",
//       githubUrl: "https://github.com",
//       featured: true,
//       status: "Completed",
//       duration: "3 months",
//       team: "Solo Project",
//       highlights: [
//         "Payment Integration",
//         "Admin Dashboard",
//         "Responsive Design",
//       ],
//     },
//     {
//       id: 2,
//       title: "Task Management App",
//       description:
//         "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
//       image: "/placeholder.svg",
//       category: "frontend",
//       technologies: [
//         "React",
//         "TypeScript",
//         "Firebase",
//         "Material-UI",
//         "Framer",
//       ],
//       liveUrl: "https://example.com",
//       githubUrl: "https://github.com",
//       featured: true,
//       status: "Completed",
//       duration: "2 months",
//       team: "2 Developers",
//       highlights: ["Real-time Updates", "Drag & Drop", "Team Collaboration"],
//     },
//     {
//       id: 3,
//       title: "Weather Dashboard",
//       description:
//         "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
//       image: "/placeholder.svg",
//       category: "frontend",
//       technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind CSS"],
//       liveUrl: "https://example.com",
//       githubUrl: "https://github.com",
//       featured: false,
//       status: "Completed",
//       duration: "1 month",
//       team: "Solo Project",
//       highlights: ["Weather API", "Interactive Maps", "Data Visualization"],
//     },
//     {
//       id: 4,
//       title: "REST API Service",
//       description:
//         "A scalable REST API built with Node.js and Express, featuring authentication, rate limiting, and comprehensive documentation.",
//       image: "/placeholder.svg",
//       category: "backend",
//       technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger"],
//       liveUrl: "https://api.example.com",
//       githubUrl: "https://github.com",
//       featured: false,
//       status: "Completed",
//       duration: "2 months",
//       team: "Solo Project",
//       highlights: ["API Documentation", "Rate Limiting", "Authentication"],
//     },
//     {
//       id: 5,
//       title: "Mobile Fitness App",
//       description:
//         "A React Native fitness tracking application with workout plans, progress tracking, and social features.",
//       image: "/placeholder.svg",
//       category: "mobile",
//       technologies: ["React Native", "Expo", "Firebase", "AsyncStorage"],
//       liveUrl: "https://play.google.com",
//       githubUrl: "https://github.com",
//       featured: true,
//       status: "In Progress",
//       duration: "4 months",
//       team: "3 Developers",
//       highlights: ["Workout Tracking", "Social Features", "Progress Charts"],
//     },
//     {
//       id: 6,
//       title: "AI Chat Interface",
//       description:
//         "An intelligent chat interface powered by OpenAI, featuring context-aware responses and conversation history.",
//       image: "/placeholder.svg",
//       category: "ai",
//       technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
//       liveUrl: "https://example.com",
//       githubUrl: "https://github.com",
//       featured: false,
//       status: "Completed",
//       duration: "1.5 months",
//       team: "Solo Project",
//       highlights: ["AI Integration", "Context Awareness", "Chat History"],
//     },
//   ];

//   const filters = [
//     { id: "all", label: "All Projects", count: projects.length },
//     {
//       id: "fullstack",
//       label: "Full Stack",
//       count: projects.filter((p) => p.category === "fullstack").length,
//     },
//     {
//       id: "frontend",
//       label: "Frontend",
//       count: projects.filter((p) => p.category === "frontend").length,
//     },
//     {
//       id: "backend",
//       label: "Backend",
//       count: projects.filter((p) => p.category === "backend").length,
//     },
//     {
//       id: "mobile",
//       label: "Mobile",
//       count: projects.filter((p) => p.category === "mobile").length,
//     },
//     {
//       id: "ai",
//       label: "AI/ML",
//       count: projects.filter((p) => p.category === "ai").length,
//     },
//   ];

//   const filteredProjects =
//     activeFilter === "all"
//       ? projects
//       : projects.filter((project) => project.category === activeFilter);

//   const featuredProjects = projects.filter((project) => project.featured);

//   return (
//     <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16 animate-fade-in-up">
//           <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
//             Projects
//           </h1>
//           <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
//             A showcase of my recent work, ranging from full-stack applications
//             to mobile apps and AI-powered solutions.
//           </p>
//           <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6"></div>
//         </div>

//         {/* Featured Projects */}
//         <div className="mb-20 animate-fade-in-up delay-200">
//           <div className="flex items-center space-x-3 mb-8">
//             <Star className="w-6 h-6 text-neon-yellow" />
//             <h2 className="text-3xl font-bold text-gradient">
//               Featured Projects
//             </h2>
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {featuredProjects.slice(0, 2).map((project, index) => (
//               <div
//                 key={project.id}
//                 className={`card-gradient p-8 hover:scale-105 transition-all duration-300 delay-${(index + 1) * 100}`}
//               >
//                 <div className="relative mb-6 rounded-lg overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-dark-100/50 to-transparent"></div>
//                   {project.status === "In Progress" && (
//                     <div className="absolute top-4 left-4 bg-neon-yellow text-dark-100 px-3 py-1 rounded-full text-sm font-medium">
//                       In Progress
//                     </div>
//                   )}
//                 </div>

//                 <h3 className="text-2xl font-bold text-gradient mb-3">
//                   {project.title}
//                 </h3>
//                 <p className="text-foreground/80 mb-4 leading-relaxed">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.technologies.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="bg-dark-300 text-neon-blue px-3 py-1 rounded-full text-sm border border-neon-blue/30"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex items-center justify-between mb-4 text-sm text-foreground/70">
//                   <div className="flex items-center space-x-4">
//                     <div className="flex items-center space-x-1">
//                       <Calendar className="w-4 h-4" />
//                       <span>{project.duration}</span>
//                     </div>
//                     <div className="flex items-center space-x-1">
//                       <Users className="w-4 h-4" />
//                       <span>{project.team}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex space-x-4">
//                   <a
//                     href={project.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn-primary flex-1 text-center"
//                   >
//                     <ExternalLink className="w-4 h-4 mr-2" />
//                     Live Demo
//                   </a>
//                   <a
//                     href={project.githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn-secondary flex-1 text-center"
//                   >
//                     <Github className="w-4 h-4 mr-2" />
//                     Code
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Filter Tabs */}
//         <div className="mb-12 animate-fade-in-up delay-400">
//           <div className="flex items-center space-x-4 mb-8">
//             <Filter className="w-6 h-6 text-neon-blue" />
//             <h2 className="text-3xl font-bold text-gradient">All Projects</h2>
//           </div>
//           <div className="flex flex-wrap gap-4">
//             {filters.map((filter) => (
//               <button
//                 key={filter.id}
//                 onClick={() => setActiveFilter(filter.id)}
//                 className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
//                   activeFilter === filter.id
//                     ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-glow"
//                     : "bg-dark-300 text-foreground hover:bg-dark-400"
//                 }`}
//               >
//                 <span className="font-medium">{filter.label}</span>
//                 <span
//                   className={`text-xs px-2 py-1 rounded-full ${
//                     activeFilter === filter.id
//                       ? "bg-white/20"
//                       : "bg-dark-200 text-neon-blue"
//                   }`}
//                 >
//                   {filter.count}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up delay-600">
//           {filteredProjects.map((project, index) => (
//             <div
//               key={project.id}
//               className={`card-modern p-6 hover:scale-105 transition-all duration-300 delay-${(index + 1) * 50}`}
//             >
//               <div className="relative mb-4 rounded-lg overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-40 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-dark-100/50 to-transparent"></div>
//                 {project.featured && (
//                   <div className="absolute top-2 right-2">
//                     <Star className="w-5 h-5 text-neon-yellow fill-current" />
//                   </div>
//                 )}
//               </div>

//               <h3 className="text-lg font-bold text-gradient mb-2">
//                 {project.title}
//               </h3>
//               <p className="text-foreground/80 text-sm mb-4 leading-relaxed line-clamp-3">
//                 {project.description}
//               </p>

//               <div className="flex flex-wrap gap-1 mb-4">
//                 {project.technologies.slice(0, 3).map((tech, i) => (
//                   <span
//                     key={i}
//                     className="bg-dark-300 text-neon-blue px-2 py-1 rounded text-xs border border-neon-blue/30"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//                 {project.technologies.length > 3 && (
//                   <span className="text-xs text-foreground/60 px-2 py-1">
//                     +{project.technologies.length - 3} more
//                   </span>
//                 )}
//               </div>

//               <div className="flex space-x-2">
//                 <a
//                   href={project.liveUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 bg-gradient-to-r from-neon-blue to-neon-purple text-white py-2 px-4 rounded-lg text-sm font-medium text-center hover:scale-105 transition-transform duration-300"
//                 >
//                   <ExternalLink className="w-3 h-3 inline mr-1" />
//                   Demo
//                 </a>
//                 <a
//                   href={project.githubUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex-1 bg-dark-300 text-foreground py-2 px-4 rounded-lg text-sm font-medium text-center hover:bg-dark-400 transition-colors duration-300"
//                 >
//                   <Github className="w-3 h-3 inline mr-1" />
//                   Code
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-20 animate-fade-in-up delay-800">
//           <div className="card-modern p-12 max-w-4xl mx-auto">
//             <h2 className="text-3xl font-bold text-gradient mb-6">
//               Have a Project in Mind?
//             </h2>
//             <p className="text-xl text-foreground/80 mb-8">
//               I'm always excited to work on new challenges and bring innovative
//               ideas to life. Let's discuss your project!
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center">
//               <a href="/contact" className="btn-primary">
//                 Start a Project
//               </a>
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn-secondary"
//               >
//                 <Github className="w-4 h-4 mr-2" />
//                 View All on GitHub
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
