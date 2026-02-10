import React from 'react';
import { motion } from 'framer-motion';

const clientCategories = [
    { count: '50+', label: 'Happy Clients' },
    { count: '100+', label: 'Projects Done' },
    { count: '4.9', label: 'Client Rating' },
];

const Clients = () => {
    return (
        <section id="clients" className="py-24 bg-surface-white border-t border-black/5">
            <div className="container mx-auto px-6">

                {/* Marquee / Title area */}
                <div className="text-center mb-20">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-purple mb-4 block">Global Impact</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-text-dark tracking-tighter max-w-2xl mx-auto">
                        Powering <span className="text-gray-400">Industry Leaders</span> with undeniable results.
                    </h2>
                </div>

                {/* Light Minimal Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {clientCategories.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="p-10 bg-gray-50 rounded-[40px] text-center hover:bg-white hover:shadow-xl transition-all duration-500"
                        >
                            <h3 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-brand-blue to-brand-purple mb-4 tracking-tighter">
                                {item.count}
                            </h3>
                            <p className="text-sm font-bold uppercase tracking-widest text-text-dark-secondary">{item.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Client Pills */}
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {[
                        "Institutional Giants", "Digital Communities", "Strategic Partners",
                        "E-commerce Disruptors", "Content Ecosystems", "Neural Startups"
                    ].map((tag, i) => (
                        <span key={i} className="px-6 py-3 rounded-full border border-black/5 text-sm font-semibold text-text-dark-secondary bg-white shadow-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
