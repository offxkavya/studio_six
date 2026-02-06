import React from 'react';

const Footer = () => {
    return (
        <footer className="py-20 bg-[#020617] relative border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-8 md:space-y-0 text-center md:text-left">
                    <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent tracking-tighter">
                        Studio Six
                    </div>

                    <div className="text-gray-400 font-medium max-w-xs">
                        Crafting digital legacies through <span className="text-white font-bold">bold design</span> and strategic motion.
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-bold uppercase tracking-[0.2em]">
                    <p>© 2026 Studio Six Agency. All rights reserved.</p>
                    <div className="flex space-x-10 mt-6 md:mt-0">
                        <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
