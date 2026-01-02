"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiSend, FiCheck, FiLoader } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import Social from "@/components/Social";

export default function ContactClient() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // This is a placeholder for actual form submission
        // TODO: Integrate with Formspree, EmailJS, or custom API route
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Reset submitted state after 5 seconds
            setTimeout(() => setSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <PageHeader
                title="Get In Touch"
                subtitle="Have a project in mind or want to work together? Feel free to reach out!"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-[#1A1A1A] p-8 rounded-xl border border-white/10"
                >
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <FiMail className="text-accent text-xl mt-1" aria-hidden="true" />
                            <div>
                                <h3 className="font-medium">Email</h3>
                                <a
                                    href="mailto:opeyemiabdulateef41@gmail.com"
                                    className="text-white/70 hover:text-accent transition-colors"
                                >
                                    opeyemiabdulateef41@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h3 className="text-lg font-medium mb-4">Follow Me</h3>
                        <Social
                            containerStyles="flex gap-4"
                            iconStyles="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                        />
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {submitted ? (
                        <div className="bg-[#1A1A1A] p-8 rounded-xl border border-accent/30 text-center">
                            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiCheck className="text-accent text-3xl" aria-hidden="true" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                            <p className="text-white/70">
                                Thank you for reaching out. I&apos;ll get back to you as soon as
                                possible.
                            </p>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="bg-[#1A1A1A] p-8 rounded-xl border border-white/10"
                        >
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Name <span className="text-accent">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 bg-[#252525] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-white/40"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Email <span className="text-accent">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 bg-[#252525] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-white/40"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Subject <span className="text-accent">*</span>
                                    </label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What's this about?"
                                        className="w-full px-4 py-3 bg-[#252525] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-white/40"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Message <span className="text-accent">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        className="w-full px-4 py-3 bg-[#252525] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none placeholder:text-white/40"
                                    />
                                </div>

                                <div>
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full rounded-lg flex items-center justify-center gap-2 py-6"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <FiLoader
                                                    className="animate-spin"
                                                    aria-hidden="true"
                                                />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <FiSend aria-hidden="true" />
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </form>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
