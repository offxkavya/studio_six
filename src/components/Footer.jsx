import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 pt-20 pb-10 bg-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 md:mb-0">
                        Studio Six
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                            <Facebook className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Studio Six. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
