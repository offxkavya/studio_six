import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 bg-black text-white/40 text-xs font-bold uppercase tracking-widest border-t border-white/10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                <div>
                    © 2026 Studio Six Ecosystem.
                </div>

                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
