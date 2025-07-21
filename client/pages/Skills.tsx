import React, { useState } from "react";
import {
  Code,
  Database,
  Palette,
  Server,
  Smartphone,
  Cloud,
  GitBranch,
  Settings,
} from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      icon: Code,
      title: "Frontend Development",
      color: "from-neon-blue to-neon-purple",
      skills: [
        { name: "React/Next.js", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "HTML5/CSS3", level: 95, icon: "🎨" },
        { name: "Tailwind CSS", level: 90, icon: "💨" },
        { name: "Vue.js", level: 80, icon: "💚" },
        { name: "Angular", level: 75, icon: "🔴" },
        { name: "SASS/SCSS", level: 85, icon: "💗" },
      ],
    },
    backend: {
      icon: Server,
      title: "Backend Development",
      color: "from-neon-purple to-neon-pink",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express.js", level: 88, icon: "🚀" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "Django/FastAPI", level: 80, icon: "🎯" },
        { name: "PHP", level: 75, icon: "🐘" },
        { name: "Java", level: 70, icon: "☕" },
        { name: "C#/.NET", level: 65, icon: "🔷" },
        { name: "Go", level: 60, icon: "🐹" },
      ],
    },
    database: {
      icon: Database,
      title: "Database & Storage",
      color: "from-neon-pink to-neon-yellow",
      skills: [
        { name: "MongoDB", level: 90, icon: "🍃" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MySQL", level: 85, icon: "🐬" },
        { name: "Redis", level: 80, icon: "🔴" },
        { name: "Firebase", level: 85, icon: "🔥" },
        { name: "Supabase", level: 80, icon: "⚡" },
        { name: "SQLite", level: 75, icon: "📦" },
        { name: "InfluxDB", level: 70, icon: "📊" },
      ],
    },
    mobile: {
      icon: Smartphone,
      title: "Mobile Development",
      color: "from-neon-green to-neon-blue",
      skills: [
        { name: "React Native", level: 85, icon: "📱" },
        { name: "Flutter", level: 75, icon: "🦋" },
        { name: "Expo", level: 80, icon: "🎪" },
        { name: "Android (Java)", level: 70, icon: "🤖" },
        { name: "iOS (Swift)", level: 65, icon: "🍎" },
        { name: "Cordova", level: 60, icon: "📲" },
        { name: "Ionic", level: 65, icon: "⚡" },
        { name: "PWA", level: 85, icon: "🌐" },
      ],
    },
    devops: {
      icon: Cloud,
      title: "DevOps & Cloud",
      color: "from-neon-blue to-neon-green",
      skills: [
        { name: "AWS", level: 85, icon: "☁️" },
        { name: "Docker", level: 80, icon: "🐳" },
        { name: "Kubernetes", level: 75, icon: "⚓" },
        { name: "CI/CD", level: 85, icon: "🔄" },
        { name: "Terraform", level: 70, icon: "🏗️" },
        { name: "Nginx", level: 80, icon: "🌐" },
        { name: "Linux", level: 85, icon: "🐧" },
        { name: "Google Cloud", level: 75, icon: "☁️" },
      ],
    },
    tools: {
      icon: Settings,
      title: "Tools & Workflow",
      color: "from-neon-purple to-neon-blue",
      skills: [
        { name: "Git/GitHub", level: 95, icon: "🐙" },
        { name: "VS Code", level: 95, icon: "💙" },
        { name: "Figma", level: 85, icon: "🎨" },
        { name: "Postman", level: 90, icon: "🚀" },
        { name: "Jest/Vitest", level: 85, icon: "🧪" },
        { name: "Webpack/Vite", level: 80, icon: "📦" },
        { name: "ESLint/Prettier", level: 90, icon: "✨" },
        { name: "Jira/Linear", level: 85, icon: "📋" },
      ],
    },
  };

  const categories = Object.keys(skillCategories);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels across different domains.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up delay-200">
          {categories.map((category, index) => {
            const categoryData = skillCategories[category];
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                  isActive
                    ? "bg-gradient-to-r " +
                      categoryData.color +
                      " text-white shadow-glow"
                    : "bg-dark-300 text-foreground hover:bg-dark-400"
                }`}
              >
                <categoryData.icon className="w-5 h-5" />
                <span className="font-medium">{categoryData.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="animate-fade-in-up delay-400">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              {skillCategories[activeCategory].title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`card-modern p-6 hover:scale-105 transition-all duration-300 delay-${(index + 1) * 50}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-lg font-semibold text-gradient">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-neon-blue font-bold">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-dark-300 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 delay-${(index + 1) * 100}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Summary */}
        <div className="mt-20 animate-fade-in-up delay-600">
          <h2 className="text-3xl font-bold text-gradient mb-12 text-center">
            Skill Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Mastery",
                description:
                  "Expert in modern frontend frameworks and libraries with focus on user experience.",
                icon: "🎨",
                skills: ["React", "TypeScript", "Next.js", "Tailwind"],
              },
              {
                title: "Backend Proficiency",
                description:
                  "Strong backend development skills with multiple programming languages and frameworks.",
                icon: "⚙️",
                skills: ["Node.js", "Python", "MongoDB", "PostgreSQL"],
              },
              {
                title: "Full Stack Expertise",
                description:
                  "End-to-end development capabilities with modern DevOps and deployment practices.",
                icon: "🚀",
                skills: ["AWS", "Docker", "CI/CD", "Git"],
              },
            ].map((summary, index) => (
              <div
                key={index}
                className="card-gradient p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{summary.icon}</div>
                <h3 className="text-xl font-bold text-gradient mb-4">
                  {summary.title}
                </h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {summary.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {summary.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-dark-300 text-neon-blue px-3 py-1 rounded-full text-sm border border-neon-blue/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20 animate-fade-in-up delay-800">
          <div className="card-modern p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-6">
              Ready to Build Together?
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              Let's leverage these skills to create something amazing for your
              next project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/projects" className="btn-primary">
                See My Work
              </a>
              <a href="/contact" className="btn-secondary">
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
