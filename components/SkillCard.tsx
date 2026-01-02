"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SkillCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    technologies: string[];
    index?: number;
}

const SkillCard = ({
    icon,
    title,
    description,
    technologies,
    index = 0,
}: SkillCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-[#1A1A1A] p-6 rounded-xl border border-white/10 card-hover"
        >
            <div
                className="w-12 h-12 bg-accent/20 text-accent rounded-lg flex items-center justify-center mb-4 text-2xl"
                aria-hidden="true"
            >
                {icon}
            </div>

            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-white/70 mb-5">{description}</p>

            <div className="flex flex-wrap gap-2" role="list" aria-label={`${title} technologies`}>
                {technologies.map((tech, i) => (
                    <span
                        key={i}
                        role="listitem"
                        className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillCard;
