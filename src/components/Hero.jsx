import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
    const liquidEase = [0.23, 1, 0.32, 1];

    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-black">
            {/* Liquid Background Orbs */}
            <div
                className="absolute top-[-20%] -left-1/4 w-[1000px] h-[1000px] bg-indigo-900/30 rounded-full blur-[160px]"
            />
            <div
                className="absolute bottom-[-20%] -right-1/4 w-[1100px] h-[1100px] bg-blue-900/20 rounded-full blur-[180px]"
            />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[120px]"
            />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: liquidEase }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 mb-10 text-indigo-400 text-sm font-semibold shadow-2xl shadow-indigo-500/5 backdrop-blur-xl"
                >
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    <span className="tracking-widest uppercase text-[10px]">Creative Intelligence Agency</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: liquidEase }}
                    className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 md:mb-12 text-white leading-[1] md:leading-[1.1]"
                >
                    Mastering <span className="text-white">The Digital</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1, ease: liquidEase }}
                    className="text-lg md:text-3xl text-gray-400 max-w-4xl mx-auto mb-10 md:mb-20 leading-tight font-medium px-4 md:px-0"
                >
                    We fuse <span className="text-white font-semibold">architectural design</span> with <span className="text-white font-semibold">cinematic motion</span> to define the next era of digital existence.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1, ease: liquidEase }}
                    className="flex flex-col md:flex-row justify-center gap-8"
                >
                    <a
                        href="https://drive.google.com/file/d/1BzQKWnAaAFfTtlBMLM1XuI56dEJLGnjR/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-10 md:px-16 py-5 md:py-6 rounded-full font-bold text-base md:text-xl overflow-hidden shadow-2xl shadow-indigo-500/30 transition-all hover:scale-105"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 bg-[length:200%_auto] animate-gradient" />
                        <span className="relative text-white flex items-center justify-center gap-3">
                            Explore Portfolio
                            <ArrowRight className="w-5 h-5 transition-transform" />
                        </span>
                    </a>
                    <a href="#services" className="px-10 md:px-16 py-5 md:py-6 rounded-full font-bold text-base md:text-xl border border-white/10 text-white hover:bg-white/5 transition-all shadow-xl backdrop-blur-sm group">
                        Discover Expertise
                    </a>
                </motion.div>
            </div>


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="hidden md:flex absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-rose-500 via-indigo-500 to-transparent" />
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-6 h-6 text-indigo-400" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
