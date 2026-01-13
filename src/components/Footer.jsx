import React from 'react';

const Footer = () => {
    return (
        <footer className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-8 md:space-y-0 text-center md:text-left">
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tighter">
                        Studio Six
                    </div>

                    <div className="text-gray-500 font-medium">
                        Crafting digital legacies through bold design.
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-bold uppercase tracking-widest">
                    <p>© 2026 Studio Six Agency. All rights reserved.</p>
                    <div className="flex space-x-10 mt-4 md:mt-0">
                        <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
