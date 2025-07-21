// import React, { useEffect, useState } from "react";
// import { Code, Heart, Zap, Target, Users, Award } from "lucide-react";

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const skills = [
//     {
//       name: "Fron",
//       level: 95,
//       color: "from-neon-blue to-neon-purple",
//     },
//     {
//       name: "Backend Development",
//       level: 88,
//       color: "from-neon-purple to-neon-pink",
//     },
//     { name: "UI/UX Design", level: 85, color: "from-neon-pink to-neon-yellow" },
//     {
//       name: "Mobile Development",
//       level: 80,
//       color: "from-neon-green to-neon-blue",
//     },
//   ];

//   const values = [
//     {
//       icon: Code,
//       title: "Clean Code",
//       description:
//         "Writing maintainable, scalable, and efficient code that stands the test of time.",
//     },
//     {
//       icon: Heart,
//       title: "User-Centered",
//       description:
//         "Putting user experience at the heart of every design and development decision.",
//     },
//     {
//       icon: Zap,
//       title: "Innovation",
//       description:
//         "Staying ahead of the curve with the latest technologies and best practices.",
//     },
//     {
//       icon: Target,
//       title: "Goal-Oriented",
//       description:
//         "Focused on delivering results that align with business objectives and user needs.",
//     },
//     {
//       icon: Users,
//       title: "Collaboration",
//       description:
//         "Working effectively with teams to create amazing products together.",
//     },
//     {
//       icon: Award,
//       title: "Excellence",
//       description:
//         "Committed to delivering high-quality work that exceeds expectations.",
//     },
//   ];

//   return (
//     <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div
//           className={`text-center mb-16 transition-all duration-1000 ${
//             isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//           }`}
//         >
//           <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
//             About Me
//           </h1>
//           <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
//         </div>

//         {/* Main Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
//           {/* Left Column - Story */}
//           <div
//             className={`space-y-8 transition-all duration-1000 delay-200 ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "-translate-x-10 opacity-0"
//             }`}
//           >
//             <div className="card-gradient p-8 hover:scale-105 transition-transform duration-300">
//               <h2 className="text-3xl font-bold text-gradient mb-6">
//                 My Story
//               </h2>
//               <div className="space-y-4 text-foreground/80 leading-relaxed">
//                 <p>
//                   {/* I'm a passionate full-stack developer with over 3 years of
//                   experience creating digital solutions that matter. My journey
//                   started with a simple curiosity about how websites work, and
//                   it quickly evolved into a deep love for crafting exceptional
//                   user experiences. */}
//                 </p>
//                 <p>
//                   {/* I specialize in modern web technologies including React,
//                   Node.js, TypeScript, and cloud platforms. I believe in writing
//                   clean, maintainable code and creating interfaces that are not
//                   just functional, but delightful to use. */}
//                 </p>
//                 <p>
//                   When I'm not coding, you'll find me exploring new
//                   technologies, contributing to open source projects, or sharing
//                   knowledge with the developer community through blogs and
//                   talks.
//                 </p>
//               </div>
//             </div>

//             {/* Skills Progress */}
//             <div className="card-modern p-8">
//               <h3 className="text-2xl font-bold text-gradient mb-6">
//                 Technical Expertise
//               </h3>
//               <div className="space-y-6">
//                 {skills.map((skill, index) => (
//                   <div key={skill.name} className="space-y-2">
//                     <div className="flex justify-between items-center">
//                       <span className="text-foreground font-medium">
//                         {skill.name}
//                       </span>
//                       <span className="text-neon-blue font-semibold">
//                         {skill.level}%
//                       </span>
//                     </div>
//                     <div className="w-full bg-dark-300 rounded-full h-3 overflow-hidden">
//                       <div
//                         className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 delay-${(index + 1) * 200}`}
//                         style={{
//                           width: isVisible ? `${skill.level}%` : "0%",
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Image & Stats */}
//           <div
//             className={`space-y-8 transition-all duration-1000 delay-400 ${
//               isVisible
//                 ? "translate-x-0 opacity-100"
//                 : "translate-x-10 opacity-0"
//             }`}
//           >
//             {/* Profile Image */}
//             <div className="relative">
//               <div className="relative w-full h-96 rounded-2xl overflow-hidden">
//                 <img
//                   src="/placeholder.svg"
//                   alt="About John Doe"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-dark-100/50 to-transparent"></div>

//                 {/* Floating Badge */}
//                 <div className="absolute top-4 right-4 bg-dark-200/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-neon-blue/30">
//                   <div className="flex items-center space-x-2">
//                     <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
//                     <span className="text-sm text-foreground">
//                       Available for work
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Decorative Elements */}
//               <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-blue/20 rounded-full float"></div>
//               <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-purple/20 rounded-full float delay-1000"></div>
//             </div>

//             {/* Achievement Cards */}
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 { number: "50+", label: "Projects", icon: "🚀" },
//                 { number: "3+", label: "Years", icon: "⭐" },
//                 { number: "15+", label: "Clients", icon: "🤝" },
//                 { number: "100%", label: "Success", icon: "🎯" },
//               ].map((stat, index) => (
//                 <div
//                   key={index}
//                   className={`card-modern p-6 text-center hover:scale-105 transition-all duration-300 delay-${(index + 1) * 100}`}
//                 >
//                   <div className="text-2xl mb-2">{stat.icon}</div>
//                   <div className="text-2xl font-bold text-gradient mb-1">
//                     {stat.number}
//                   </div>
//                   <div className="text-sm text-foreground/70">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Values Section */}
//         <div
//           className={`transition-all duration-1000 delay-600 ${
//             isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//           }`}
//         >
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gradient mb-4">My Values</h2>
//             <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
//               The principles that guide my work and shape every project I
//               undertake.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {values.map((value, index) => (
//               <div
//                 key={index}
//                 className={`card-gradient p-8 text-center hover:scale-105 transition-all duration-300 group delay-${(index + 1) * 100}`}
//               >
//                 <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <value.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gradient mb-4">
//                   {value.title}
//                 </h3>
//                 <p className="text-foreground/70 leading-relaxed">
//                   {value.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div
//           className={`text-center mt-20 transition-all duration-1000 delay-800 ${
//             isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//           }`}
//         >
//           <div className="card-modern p-12 max-w-4xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
//               Let's Create Something Extraordinary
//             </h2>
//             <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
//               I'm always excited to work on new projects and collaborate with
//               amazing people. Let's discuss how we can bring your vision to
//               life.
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center">
//               <a href="mailto:john.doe@example.com" className="btn-primary">
//                 Start a Conversation
//               </a>
//               <a href="/projects" className="btn-secondary">
//                 View My Work
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
