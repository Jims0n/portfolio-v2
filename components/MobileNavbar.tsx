"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { Button } from "./ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/navigation";

const MobileNavbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    aria-label="Open navigation menu"
                >
                    <FiMenu className="text-2xl" aria-hidden="true" />
                </Button>
            </SheetTrigger>
            <SheetContent
                className="bg-primary border-l border-white/10 p-0"
                aria-describedby={undefined}
            >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full pt-12">
                    {/* logo */}
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold">
                            Jimson<span className="text-accent">.</span>
                        </h2>
                    </div>

                    {/* nav */}
                    <nav
                        className="flex flex-col items-center gap-8"
                        aria-label="Mobile navigation"
                    >
                        <AnimatePresence>
                            {navLinks.map((link, index) => {
                                const isActive = link.path === pathname;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={link.path}
                                            className={`${isActive ? "text-accent" : "text-white"
                                                } text-2xl capitalize hover:text-accent transition-all`}
                                            onClick={() => setIsOpen(false)}
                                            aria-current={isActive ? "page" : undefined}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </nav>

                    {/* contact button */}
                    <div className="mt-auto mb-8 text-center">
                        {pathname !== "/contact" && (
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                <Button className="rounded-full px-8">Hire Me</Button>
                            </Link>
                        )}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNavbar;