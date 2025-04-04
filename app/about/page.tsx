"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiGlobe, FiBook, FiLink,  } from "react-icons/fi";

export default function About() {
  // Skills data
  const skills = [
    {
      icon: <FiCode />,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern JavaScript frameworks.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"]
    },
    {
      icon: <FiDatabase />,
      title: "Backend Development",
      description: "Creating robust and scalable server-side applications and APIs.",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      icon: <FiLink />,
      title: "Blockchain Development",
      description: "Building decentralized applications and smart contracts for blockchain platforms.",
      technologies: ["Rust", "Web3.js", "Smart Contracts", "DApps", "Solana"]
    },
    {
      icon: <FiGlobe />,
      title: "Web Design",
      description: "Creating visually appealing and user-friendly web experiences.",
      technologies: ["UI/UX", "Responsive Design", "Animations", "Component Design", "Design Systems"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          I&apos;m a passionate software developer specializing in building exceptional web applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        {/* About text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6">My Journey</h2>
          <div className="space-y-4 text-white/70">
            <p>
              Hello! I&apos;m Abdulateef, a software developer with a passion for creating
              innovative and user-friendly web applications. My journey in tech started with curiosity
              about how websites work, which led me to dive deep into web development.
            </p>
            <p>
              I specialize in building full-stack web applications using modern JavaScript frameworks
              like React and Next.js, along with backend technologies such as Node.js and PostgreSQL.
              I&apos;m passionate about clean code, responsive design, and creating intuitive user experiences.
            </p>
            <p>
              When I&apos;m not coding, I enjoy learning about new technologies, contributing to open-source
              projects, and collaborating with other developers to solve challenging problems.
            </p>
          </div>
          
          
        </motion.div>
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border-2 border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20" />
            <Image
              src="/assets/cg.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          
          
          <div className="absolute -top-8 -left-8 bg-[#1A1A1A] p-4 rounded-lg border border-white/10 shadow-xl">
            <div className="flex items-center gap-3">
              <FiBook className="text-accent text-xl" />
              <div>
                <p className="font-bold">Projects</p>
                <p className="text-white/70">10+ Completed</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Skills section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-20"
      >
        <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-[#1A1A1A] p-6 rounded-xl border border-white/10"
            >
              <div className="w-12 h-12 bg-accent/20 text-accent rounded-lg flex items-center justify-center mb-4 text-2xl">
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-white/70 mb-5">{skill.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/10 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 