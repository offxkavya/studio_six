import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
                >
                    Studio Six
                </motion.div>

                <div className="hidden md:flex space-x-8">
                    {['Services', 'Work', 'Clients', 'Contact'].map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-wider"
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>

                <motion.a
                    href="#contact"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                >
                    Let's Talk
                </motion.a>
            </div>
        </nav>
    );
};

export default Navbar;
