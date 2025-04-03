"use client";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "./ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "about",
        path: "/about"
    },
    {
        name: "works",
        path: "/works"
    },
    {
        name: "contact",
        path: "/contact"
    },
];

const MobileNavbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="default" className="w-10 h-10 rounded-full p-0">
                    <FiMenu className="text-2xl" />
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#121212] border-l border-white/10 p-0">
                <div className="flex flex-col h-full">
                    {/* Close button */}
                    <div className="flex justify-end p-4">
                        <Button variant="ghost" size="default" className="w-10 h-10 rounded-full p-0" onClick={() => setIsOpen(false)}>
                            <FiX className="text-2xl" />
                        </Button>
                    </div>
                    
                    {/* logo */}
                    <div className="mt-8 mb-16 text-center">
                        <h2 className="text-3xl font-bold">
                            Jimson<span className="text-accent">.</span>
                        </h2>
                    </div>
                    
                    {/* nav */}
                    <nav className="flex flex-col items-center gap-8">
                        <AnimatePresence>
                            {links.map((link, index) => {
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link 
                                            href={link.path}
                                            className={`${
                                                link.path === pathname 
                                                ? "text-accent" 
                                                : "text-white"
                                            } text-2xl capitalize hover:text-accent transition-all`}
                                            onClick={() => setIsOpen(false)}
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