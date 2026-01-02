"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import Social from "@/components/Social";
import Link from "next/link";
import { motion } from "framer-motion";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <section className="min-h-[calc(100vh-200px)] flex items-center relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5 pointer-events-none" />

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left order-2 lg:order-none max-w-2xl"
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full mb-4 text-sm font-medium">
                Software Developer
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hello, I&apos;m{" "}
                <span className="text-accent">Abdulateef</span>
              </h1>
              <p className="text-lg mb-8 text-white/70 leading-relaxed">
                I&apos;m Abdulateef Jimoh, a software engineer with experience building full-stack web applications using React, Next.js, Node.js, Django, PostgreSQL, and cloud tools. I focus on turning complex problems into intuitive, scalable digital solutions that improve user experience and business outcomes.
              </p>

              {/* buttons and socials */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a href="/CV(jimoh-abdulateef).pdf" download>
                  <Button
                    variant="default"
                    size="lg"
                    className="rounded-full flex items-center gap-2 px-6"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" aria-hidden="true" />
                  </Button>
                </a>

                <Link href="/works">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full flex items-center gap-2 px-6"
                  >
                    <span>View My Work</span>
                    <FiArrowRight className="text-xl" aria-hidden="true" />
                  </Button>
                </Link>
              </div>

              <div className="mt-10">
                <Social />
              </div>
            </motion.div>

            {/* photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-none relative"
            >
              <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-accent/20">
                <Image
                  src="/assets/cg.png"
                  alt="Abdulateef Jimson - Software Developer"
                  fill
                  sizes="(max-width: 768px) 280px, 400px"
                  className="object-cover"
                  priority
                />
              </div>
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-b from-accent/10 to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Stats />
        </div>
      </section>
    </>
  );
}
