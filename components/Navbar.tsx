"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/navigation";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="flex gap-8" aria-label="Main navigation">
            {navLinks.map((link, index) => {
                const isActive = link.path === pathname;

                return (
                    <Link
                        href={link.path}
                        key={index}
                        className="relative group"
                        aria-current={isActive ? "page" : undefined}
                    >
                        <motion.span
                            className={`capitalize font-medium ${isActive ? "text-accent" : "text-white"
                                } hover:text-accent transition-all`}
                            whileHover={{ y: -2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {link.name}
                        </motion.span>

                        {isActive && (
                            <motion.span
                                className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"
                                layoutId="navbar-underline"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Navbar;