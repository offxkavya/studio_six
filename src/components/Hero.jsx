import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-[#fcfcfd]">
       
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 30, 0],
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="absolute top-0 -left-1/4 w-[800px] h-[800px] bg-indigo-100/40 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, -40, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="absolute bottom-0 -right-1/4 w-[900px] h-[900px] bg-blue-50/50 rounded-full blur-[120px]"
            />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-gray-100 mb-10 text-indigo-600 text-sm font-bold shadow-sm backdrop-blur-md"
                >
                    <Sparkles className="w-4 h-4" />
                    <span>Creative Marketing Agency</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="text-7xl md:text-[9rem] font-black tracking-tight mb-10 text-gray-900 leading-[0.9]"
                >
                    We Are <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Studio Six</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-xl md:text-3xl text-gray-500 max-w-4xl mx-auto mb-16 leading-tight font-medium"
                >
                    Elevating brands through <span className="text-gray-900 font-bold">bold design</span> and <span className="text-gray-900 font-bold">strategic motion</span>. We build digital legacies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col md:flex-row justify-center gap-6"
                >
                    <a
                        href="https://drive.google.com/file/d/1BzQKWnAaAFfTtlBMLM1XuI56dEJLGnjR/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-12 py-5 rounded-full font-bold text-lg overflow-hidden shadow-xl shadow-indigo-100/50"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-transform duration-300 group-hover:scale-105" />
                        <span className="relative text-white flex items-center gap-2">
                            Explore Our Portfolio
                        </span>
                    </a>
                    <a href="#services" className="px-12 py-5 rounded-full font-bold text-lg border border-gray-200 text-gray-900 hover:bg-gray-50 transition-all shadow-sm">
                        Our Services
                    </a>
                </motion.div>
            </div>

            
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-blue-600 to-transparent" />
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-6 h-6 text-blue-600" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
