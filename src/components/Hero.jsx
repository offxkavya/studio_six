import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
    const liquidEase = [0.23, 1, 0.32, 1];

    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-black">
            {/* Clean Background - Removed Orbs */}
            <div className="absolute inset-0 bg-black" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: liquidEase }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 mb-10 text-white text-sm font-semibold shadow-sm backdrop-blur-xl"
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
                        className="group relative px-10 md:px-16 py-5 md:py-6 rounded-full font-bold text-base md:text-xl overflow-hidden bg-white text-black transition-all hover:scale-105"
                    >
                        <span className="relative flex items-center justify-center gap-3">
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
                <div className="w-[1px] h-20 bg-white/20" />
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-6 h-6 text-white/50" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
