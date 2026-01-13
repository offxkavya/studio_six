import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
            {/* Background Gradients */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[128px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    x: [0, -50, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full blur-[128px]"
            />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold tracking-tight mb-6"
                >
                    We Are <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Studio Six</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10"
                >
                    A creative marketing agency crafting digital experiences for over 50+ clients worldwide.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex justify-center gap-4"
                >
                    <a href="#work" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity">
                        View Our Work
                    </a>
                    <a href="#services" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                        Our Services
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
