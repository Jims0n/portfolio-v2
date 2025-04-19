"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiCode } from "react-icons/fi";

// Project data with relevant information
const projects = [
  {
    id: 1,
    name: "Drift Subaccounts",
    description: "A Solana-based tool for managing Drift Protocol subaccounts with wallet integration and position tracking. Built for the Drift ecosystem to help users manage their on-chain positions.",
    color: "blockchain-gradient",
    logo: "/assets/drift.svg",
    logoType: "image",
    technologies: ["Next.js", "React", "Solana", "Blockchain", "Web3"],
    liveLink: "https://drift-subaccounts.vercel.app/",
    githubLink: "https://github.com/Jims0n/drift-subaccounts",
    featured: true,
  },
  {
    id: 2,
    name: "SnipX",
    description: "A code snippet sharing platform for developers to share and discover useful code snippets.",
    color: "from-blue-500/30 to-cyan-500/30",
    logoType: "text", // Using a text-based logo for SnipX
    logo: "", // Empty string as a fallback
    technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    liveLink: "https://snip-x-one.vercel.app/",
    githubLink: "https://github.com/Jims0n/snipx",
    featured: true,
  },
  {
    id: 3,
    name: "Daggers",
    description: "Premium Nigerian streetwear e-commerce platform with modern design and seamless shopping experience.",
    color: "from-pink-500/30 to-purple-500/30",
    logo: "/assets/daggers.svg",
    logoType: "image",
    technologies: ["Next.js", "React", "Tailwind CSS", "Stripe"],
    liveLink: "https://daggers.vercel.app/",
    githubLink: "https://github.com/Jims0n/daggers",
    featured: true,
  },
  {
    id: 4,
    name: "ProStore",
    description: "A full-featured e-commerce platform with product catalog, cart functionality, and checkout process.",
    color: "from-amber-500/30 to-red-500/30",
    logo: "/assets/prostore.svg",
    logoType: "image",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveLink: "https://prostore-tau.vercel.app/",
    githubLink: "https://github.com/Jims0n/prostore",
    featured: true,
  },
  {
    id: 5,
    name: "Podium",
    description: "An onchain mini league F1 prediction platform",
    color: "from-green-500/30 to-teal-500/30",
    logo: "/assets/podium.png",
    logoType: "image",
    technologies: ["Next.js", "React", "Tailwind CSS", "NextAuth"],
    liveLink: "https://podium-iota.vercel.app/",
    githubLink: "https://github.com/Jims0n/podium",
    featured: true,
  },
];

const Works = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16">
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          A showcase of my recent web development projects, demonstrating my skills and experience.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="project-card bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/10 hover:border-accent/40 transition-all duration-300"
          >
            <div className="relative h-64 w-full overflow-hidden">
              {/* Use a gradient background with project-specific colors */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color}`} />
              
              {/* Display project logo */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                {project.logoType === "text" ? (
                  // For text-based logos 
                  <div className="project-logo text-center">
                    <div className="bg-white/20 p-4 rounded-lg inline-flex items-center mb-2">
                      <FiCode className="text-white text-3xl mr-2" />
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight">
                      <span className="text-white">Snip</span>
                      <span className="text-blue-400">X</span>
                    </h2>
                    <p className="text-white/70 text-sm mt-2">Code Snippets</p>
                  </div>
                ) : (
                  // For image-based logos
                  <div className="project-logo relative w-full h-full max-w-[200px] max-h-[200px] mx-auto">
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      fill
                      className="object-contain"
                    />
                       </div>
                )}
                        </div>
                </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-white/70 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
        </div>

              <div className="flex gap-4">
                <Link 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-accent hover:underline"
                >
                  <FiExternalLink />
                  <span>Live Demo</span>
                </Link>
                
                <Link 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white"
                >
                  <FiGithub />
                  <span>GitHub</span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
    </motion.div>
    </div>
  );
};

export default Works;