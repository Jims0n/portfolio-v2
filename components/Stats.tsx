"use client";

import { motion } from "framer-motion";

interface StatItemProps {
    value: string;
    label: string;
    delay?: number;
}

const StatItem = ({ value, label, delay = 0 }: StatItemProps) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
        className="text-center"
    >
        <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{value}</div>
        <div className="text-white/70 text-sm uppercase tracking-wider">{label}</div>
    </motion.div>
);

interface StatsProps {
    stats?: Array<{ value: string; label: string }>;
    className?: string;
}

const Stats = ({
    stats = [
        { value: "10+", label: "Projects Completed" },
        { value: "4+", label: "Years Experience" },
        { value: "15+", label: "Technologies" },
    ],
    className = "",
}: StatsProps) => {
    return (
        <div
            className={`grid grid-cols-3 gap-8 py-8 px-4 bg-[#1A1A1A] rounded-xl border border-white/10 ${className}`}
            role="list"
            aria-label="Career statistics"
        >
            {stats.map((stat, index) => (
                <StatItem
                    key={index}
                    value={stat.value}
                    label={stat.label}
                    delay={index * 0.1}
                />
            ))}
        </div>
    );
};

export default Stats;
