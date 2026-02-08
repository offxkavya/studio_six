import React from 'react';

const Footer = () => {
    return (
        <footer className="py-24 bg-black relative border-t border-white/5 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-10 md:space-y-0 text-center md:text-left">
                    <div className="text-5xl font-bold text-white tracking-tighter">
                        Studio Six
                    </div>

                    <div className="text-gray-500 font-medium max-w-sm leading-relaxed">
                        Redefining digital excellence through <span className="text-white font-semibold">architectural motion</span> and <span className="text-white font-semibold">visceral design</span>.
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-bold uppercase tracking-[0.3em]">
                    <p>© 2026 Studio Six Ecosystem. All rights reserved.</p>
                    <div className="flex space-x-12 mt-8 md:mt-0">
                        <a href="#" className="hover:text-rose-400 transition-colors duration-500">Privacy Protocol</a>
                        <a href="#" className="hover:text-rose-400 transition-colors duration-500">Terms of existence</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
