import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Work', href: '#work' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: 'circOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'
                    }`}
            >
                <div className="container mx-auto px-6">
                    <div
                        className={`flex items-center justify-between rounded-2xl px-6 py-4 transition-all duration-300 ${isScrolled
                                ? 'bg-black/50 backdrop-blur-md border border-white/10 shadow-lg'
                                : 'bg-transparent'
                            }`}
                    >
                        {/* Logo */}
                        <a href="#" className="text-2xl font-bold font-display tracking-tighter">
                            STUDIO<span className="text-primary">SIX</span>.
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="px-5 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-primary transition-colors duration-300"
                            >
                                Let's Talk
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white hover:text-primary transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex items-center justify-center"
                    >
                        <div className="flex flex-col items-center space-y-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-display font-bold text-white hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="px-8 py-3 text-lg font-bold text-black bg-white rounded-full hover:bg-primary transition-colors"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
