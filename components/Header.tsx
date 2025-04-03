"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-6 fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-[#121212]/80 border-b border-white/10"
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* logo */}
        <Link href="/">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h1 className="text-3xl font-bold">
              Jimson <span className="text-accent">.</span>
            </h1>
          </motion.div>
        </Link>
        
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          {pathname !== "/contact" && (
            <Link href="/contact">
              <Button variant="default" size="lg" className="rounded-full">
                Hire Me
              </Button>
            </Link>
          )}
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;