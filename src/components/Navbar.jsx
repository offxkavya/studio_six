import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkSection, setIsDarkSection] = useState(true);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
        // Hero is roughly 100vh. After 100vh, we assume light section (based on "Hybrid" plan)
        // Adjust this logic if sections change heights dynamically
        setIsDarkSection(latest < window.innerHeight - 100);
    });

    const textColor = isDarkSection ? "text-white" : "text-black";
    const borderColor = isDarkSection ? "border-white/10" : "border-black/5";
    const glassBg = isDarkSection ? "bg-white/5" : "bg-white/80";

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-6 transition-all duration-500`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <motion.div
                layout
                className={`
                    ${isScrolled ? 'px-6 py-3 rounded-full backdrop-blur-xl shadow-lg' : 'px-10 py-5 bg-transparent'}
                    ${isScrolled ? glassBg : ''}
                    ${isScrolled ? 'border ' + borderColor : ''}
                    flex items-center gap-12 transition-all duration-500
                `}
            >
                {/* Brand */}
                <a href="#" className={`font-display font-bold text-xl tracking-tighter ${textColor} transition-colors duration-500`}>
                    STUDIO SIX
                </a>

                {/* Links (Desktop) */}
                <div className="hidden md:flex items-center gap-8">
                    {['Services', 'Work', 'Clients', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={`text-xs font-bold uppercase tracking-widest ${isDarkSection ? 'text-white/70 hover:text-white' : 'text-black/60 hover:text-black'} transition-colors duration-300`}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <a
                    href="#contact"
                    className={`
                        hidden md:flex items-center justify-center px-5 py-2 rounded-full 
                        ${isDarkSection ? 'bg-white text-black' : 'bg-black text-white'}
                        text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300
                    `}
                >
                    Start
                </a>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;
