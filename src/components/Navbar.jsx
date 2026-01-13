import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/10' : 'py-8 bg-transparent'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent tracking-tighter"
                >
                    Studio Six
                </motion.div>

                <div className="hidden md:flex items-center space-x-10">
                    {['Services', 'Work', 'Clients', 'Contact'].map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative text-gray-400 hover:text-white transition-all text-sm font-bold uppercase tracking-widest group"
                        >
                            {item}
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full" />
                        </motion.a>
                    ))}

                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative group px-8 py-3 rounded-full overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600" />
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                        <span className="relative text-white font-bold text-sm tracking-wider">
                            Let's Talk
                        </span>
                    </motion.a>
                </div>

                {/* Mobile Menu Trigger (Placeholder) */}
                <div className="md:hidden w-8 h-8 flex flex-col justify-center space-y-1.5 cursor-pointer group">
                    <span className="w-full h-[2px] bg-white group-hover:w-1/2 transition-all" />
                    <span className="w-full h-[2px] bg-white" />
                    <span className="w-full h-[2px] bg-white group-hover:w-3/4 transition-all" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
