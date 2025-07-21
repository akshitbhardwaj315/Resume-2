import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      location: "San Francisco, CA",
      period: "2018 - 2022",
      gpa: "3.8/4.0",
      description:
        "Focused on software engineering, algorithms, and data structures. Completed several projects in web development and machine learning.",
      achievements: [
        "Dean's List (6 semesters)",
        "CS Department Award",
        "Senior Project Excellence",
      ],
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "TechAcademy Pro",
      location: "Online",
      period: "2021",
      gpa: "A+",
      description:
        "Intensive 6-month program covering modern web technologies including React, Node.js, MongoDB, and cloud deployment.",
      achievements: [
        "Top 5% of class",
        "Best Final Project",
        "Teaching Assistant",
      ],
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
    },
    { name: "React Professional Certificate", issuer: "Meta", year: "2022" },
    { name: "Google Cloud Professional", issuer: "Google", year: "2022" },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      year: "2021",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
            Education
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            My academic journey and continuous learning path in technology and
            software development.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mt-6"></div>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gradient mb-12 text-center animate-fade-in-up delay-200">
            Academic Background
          </h2>
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`card-gradient p-8 animate-fade-in-up delay-${(index + 1) * 200} hover:scale-105 transition-transform duration-300`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gradient mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center space-x-4 text-foreground/80 mb-4">
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="w-5 h-5 text-neon-blue" />
                        <span className="font-semibold">{edu.school}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-neon-purple" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <div className="flex items-center space-x-2 bg-dark-300 px-4 py-2 rounded-lg">
                      <Calendar className="w-4 h-4 text-neon-blue" />
                      <span className="text-foreground font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <div className="text-neon-green font-bold">
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed mb-6">
                  {edu.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-gradient mb-3 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-neon-yellow" />
                    Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="bg-dark-300 text-neon-blue px-3 py-1 rounded-full text-sm border border-neon-blue/30"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-fade-in-up delay-600">
          <h2 className="text-3xl font-bold text-gradient mb-12 text-center">
            Certifications & Credentials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`card-modern p-6 hover:scale-105 transition-transform duration-300 delay-${(index + 1) * 100}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gradient mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-foreground/70 mb-2">{cert.issuer}</p>
                    <div className="text-sm text-neon-blue font-medium">
                      {cert.year}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20 animate-fade-in-up delay-800">
          <div className="card-modern p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-6">
              Continuous Learning Journey
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              Education never stops. I'm constantly updating my skills with the
              latest technologies and best practices.
            </p>
            <a href="/skills" className="btn-primary">
              View My Skills
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
