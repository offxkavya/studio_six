import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center bg-surface-black overflow-hidden">

            {/* Ambient Background - Digital Void */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-brand-blue/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[20%] right-[20%] w-[30vw] h-[30vw] bg-brand-purple/20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                >
                    <Sparkles className="w-3 h-3 text-brand-blue" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                        The Creative Intelligence Agency
                    </span>
                </motion.div>

                {/* Main Title - Preserved Copy, High-End Typography */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[10vw] md:text-[8vw] leading-[0.85] font-display font-bold text-white tracking-tighter mb-8"
                >
                    MASTERING<br />
                    <span className="text-gradient-brand">THE DIGITAL</span>
                </motion.h1>

                {/* Description - Preserved Copy */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-lg md:text-2xl text-text-secondary max-w-2xl font-light leading-relaxed mb-12"
                >
                    We fuse <span className="text-white font-medium">architectural design</span> with <span className="text-white font-medium">cinematic motion</span> to define the next era of digital existence.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex flex-col md:flex-row gap-6"
                >
                    <a
                        href="https://drive.google.com/file/d/1BzQKWnAaAFfTtlBMLM1XuI56dEJLGnjR/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-brand-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                        <span className="relative z-10 font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:text-white transition-colors">
                            Explore Portfolio <ArrowRight className="w-4 h-4" />
                        </span>
                    </a>
                    <a
                        href="#services"
                        className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors font-bold uppercase tracking-widest text-xs"
                    >
                        Our Expertise
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">Scroll</span>
                <ArrowDown className="w-4 h-4 text-white/30 animate-bounce" />
            </motion.div>

        </section>
    );
};

export default Hero;
