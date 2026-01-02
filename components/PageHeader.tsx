"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

const PageHeader = ({ title, subtitle, className = "" }: PageHeaderProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-center mb-16 ${className}`}
        >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            {subtitle && (
                <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

export default PageHeader;
