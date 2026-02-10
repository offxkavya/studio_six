import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-black border-t border-white/10 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-display font-bold mb-2">
                            STUDIO<span className="text-primary">SIX</span>
                        </h3>
                        <p className="text-gray-500 text-sm">
                            Crafting digital experiences since 2020
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500">
                        <span>Made with</span>
                        <Heart size={16} className="text-primary fill-primary" />
                        <span>by Studio Six</span>
                    </div>

                    <div className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} All rights reserved
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
