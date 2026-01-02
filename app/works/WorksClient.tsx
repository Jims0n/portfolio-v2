"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiCode } from "react-icons/fi";
import PageHeader from "@/components/PageHeader";

// Project data with relevant information
const projects = [
    {
        id: 1,
        name: "Drift Subaccounts",
        description:
            "A Solana-based tool for managing Drift Protocol subaccounts with wallet integration and position tracking. Built for the Drift ecosystem to help users manage their on-chain positions.",
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
        description:
            "A code snippet sharing platform for developers to share and discover useful code snippets.",
        color: "from-blue-500/30 to-cyan-500/30",
        logoType: "text",
        logo: "",
        technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
        liveLink: "https://snip-x-one.vercel.app/",
        githubLink: "https://github.com/Jims0n/snipx",
        featured: true,
    },
    {
        id: 3,
        name: "Daggers",
        description:
            "Premium Nigerian streetwear e-commerce platform with modern design and seamless shopping experience.",
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
        description:
            "A full-featured e-commerce platform with product catalog, cart functionality, and checkout process.",
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
    {
        id: 6,
        name: "Trackwise",
        description: "A personal finance companion app for tracking expenses, managing budgets, and achieving financial goals.",
        color: "from-emerald-500/30 to-green-500/30",
        logoType: "image",
        logo: "/assets/trackwise.png",
        technologies: ["Next.js", "React", "Tailwind CSS", "PostgreSQL"],
        liveLink: "https://trackwise-kappa.vercel.app/",
        githubLink: "https://github.com/Jims0n/trackwise",
        featured: true,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
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

export default function WorksClient() {
    return (
        <div className="container mx-auto px-4 py-16">
            <PageHeader
                title="My Projects"
                subtitle="A showcase of my recent web development projects, demonstrating my skills and experience."
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                {projects.map((project) => (
                    <motion.article
                        key={project.id}
                        variants={itemVariants}
                        className="project-card bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/10 card-hover group"
                    >
                        <div className="relative h-56 w-full overflow-hidden">
                            {/* Use a gradient background with project-specific colors */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${project.color}`}
                                aria-hidden="true"
                            />

                            {/* Display project logo */}
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                {project.logoType === "text" ? (
                                    // For text-based logos
                                    <div className="project-logo text-center">
                                        <div className="bg-white/20 p-4 rounded-lg inline-flex items-center mb-2">
                                            <FiCode
                                                className="text-white text-3xl mr-2"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <h2 className="text-4xl font-bold tracking-tight">
                                            <span className="text-white">Snip</span>
                                            <span className="text-blue-400">X</span>
                                        </h2>
                                        <p className="text-white/70 text-sm mt-2">Code Snippets</p>
                                    </div>
                                ) : (
                                    // For image-based logos
                                    <div className="project-logo relative w-full h-full max-w-[180px] max-h-[180px] mx-auto">
                                        <Image
                                            src={project.logo}
                                            alt=""
                                            fill
                                            sizes="180px"
                                            className="object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                            <p className="text-white/70 mb-4 line-clamp-2">
                                {project.description}
                            </p>

                            <div
                                className="flex flex-wrap gap-2 mb-6"
                                role="list"
                                aria-label={`Technologies used in ${project.name}`}
                            >
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        role="listitem"
                                        className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium"
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
                                    className="flex items-center gap-2 text-accent hover:underline focus-visible:underline"
                                    aria-label={`View live demo of ${project.name}`}
                                >
                                    <FiExternalLink aria-hidden="true" />
                                    <span>Live Demo</span>
                                </Link>

                                <Link
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white/70 hover:text-white focus-visible:text-white transition-colors"
                                    aria-label={`View GitHub repository for ${project.name}`}
                                >
                                    <FiGithub aria-hidden="true" />
                                    <span>GitHub</span>
                                </Link>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </div>
    );
}
