"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import Social from "@/components/Social";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-200px)] flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12">
          {/* text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center xl:text-left order-2 xl:order-none max-w-2xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full mb-4 text-sm font-medium">Software Developer</span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Hello, I&apos;m <span className="text-accent">Abdulateef</span>
            </h1>
            <p className="text-lg mb-8 text-white/70 leading-relaxed">
              A software engineer specializing in web development. I&apos;m passionate about creating elegant solutions and exploring the interplay of technology with our world.
            </p>
            
            {/* buttons and socials */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
              <a href="/assets/CV.pdf" download>
                <Button
                  variant="default"
                  size="lg"
                  className="rounded-full uppercase flex items-center gap-2 px-6"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              
              <Link href="/works">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full flex items-center gap-2 px-6"
                >
                  <span>See My Work</span>
                  <FiArrowRight className="text-xl" />
                </Button>
              </Link>
            </div>
            
            <div className="mt-10">
              <Social 
                containerStyles="flex gap-6 justify-center xl:justify-start" 
                iconStyles="w-10 h-10 border border-white/20 rounded-full flex justify-center items-center text-white/70 hover:text-accent hover:border-accent transition-all duration-300" 
              />
            </div>
          </motion.div>
          
          {/* photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 xl:order-none relative"
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-accent/20">
              <Image
                src="/assets/cg.png"
                alt="Abdulateef Jimson"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-accent/10 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
