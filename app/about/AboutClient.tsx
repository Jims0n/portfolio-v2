"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiGlobe, FiBook, FiLink } from "react-icons/fi";
import PageHeader from "@/components/PageHeader";
import SkillCard from "@/components/SkillCard";
import Stats from "@/components/Stats";

// Skills data
const skills = [
    {
        icon: <FiCode />,
        title: "Frontend Development",
        description:
            "Building responsive and interactive user interfaces with modern JavaScript frameworks.",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
        icon: <FiDatabase />,
        title: "Backend Development",
        description:
            "Creating robust and scalable server-side applications and APIs.",
        technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
    },
    {
        icon: <FiLink />,
        title: "Blockchain Development",
        description:
            "Building decentralized applications and smart contracts for blockchain platforms.",
        technologies: ["Rust", "Web3.js", "Smart Contracts", "DApps", "Solana"],
    },
    {
        icon: <FiGlobe />,
        title: "Web Design",
        description:
            "Creating visually appealing and user-friendly web experiences.",
        technologies: [
            "UI/UX",
            "Responsive Design",
            "Animations",
            "Component Design",
            "Design Systems",
        ],
    },
];

export default function AboutClient() {
    return (
        <div className="container mx-auto px-4 py-16">
            <PageHeader
                title="About Me"
                subtitle="I'm a passionate software developer specializing in building exceptional web applications."
            />

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
                            Hello! I&apos;m Abdulateef, a software developer with a passion
                            for creating innovative and user-friendly web applications. My
                            journey in tech started with curiosity about how websites work,
                            which led me to dive deep into web development.
                        </p>
                        <p>
                            I specialize in building full-stack web applications using modern
                            JavaScript frameworks like React and Next.js, along with backend
                            technologies such as Node.js and PostgreSQL. I&apos;m passionate
                            about clean code, responsive design, and creating intuitive user
                            experiences.
                        </p>
                        <p>
                            When I&apos;m not coding, I enjoy learning about new technologies,
                            contributing to open-source projects, and collaborating with other
                            developers to solve challenging problems.
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
                            alt="Abdulateef Jimson"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    <div className="absolute -top-8 -left-8 bg-[#1A1A1A] p-4 rounded-lg border border-white/10 shadow-xl">
                        <div className="flex items-center gap-3">
                            <FiBook className="text-accent text-xl" aria-hidden="true" />
                            <div>
                                <p className="font-bold">Projects</p>
                                <p className="text-white/70">10+ Completed</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Stats section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-20"
            >
                <Stats />
            </motion.div>

            {/* Skills section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            icon={skill.icon}
                            title={skill.title}
                            description={skill.description}
                            technologies={skill.technologies}
                            index={index}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
