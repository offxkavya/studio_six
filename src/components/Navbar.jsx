import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const liquidEase = [0.23, 1, 0.32, 1];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-4 bg-black/40 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/50' : 'py-10 bg-transparent'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: liquidEase }}
                    className="text-4xl font-bold text-white tracking-tighter"
                >
                    Studio Six
                </motion.div>

                <div className="hidden md:flex items-center space-x-12">
                    {['Services', 'Work', 'Clients', 'Contact'].map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: liquidEase }}
                            className="relative text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors group"
                        >
                            {item}
                            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-rose-500 to-indigo-500 transition-all duration-500 group-hover:w-full" />
                        </motion.a>
                    ))}

                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: liquidEase }}
                        className="relative group px-10 py-4 rounded-full overflow-hidden shadow-2xl shadow-rose-500/10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-rose-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] animate-gradient" />
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                        <span className="relative text-white font-bold text-[10px] uppercase tracking-[0.3em]">
                            Initiate Protocol
                        </span>
                    </motion.a>
                </div>


                <div className="md:hidden w-8 h-8 flex flex-col justify-center space-y-2 cursor-pointer group">
                    <span className="w-full h-[2px] bg-white group-hover:bg-rose-400 transition-all origin-right" />
                    <span className="w-full h-[2px] bg-white group-hover:bg-indigo-400" />
                    <span className="w-full h-[2px] bg-white group-hover:bg-blue-400 group-hover:w-1/2 transition-all" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
