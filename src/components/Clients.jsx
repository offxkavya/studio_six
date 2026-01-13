import React from 'react';
import { motion } from 'framer-motion';

const clientCategories = [
    { count: '50+', label: 'Happy Clients' },
    { count: '100+', label: 'Projects Done' },
    { count: '4.9', label: 'Client Rating' },
];

const clientTypes = [
    "Schools & Institutions",
    "Instagram Pages",
    "Business Owners",
    "E-commerce Brands",
    "Content Creators",
    "Startups"
];

const Clients = () => {
    return (
        <section id="clients" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by 50+ Clients</h2>
                    <p className="text-gray-400 text-lg">From local businesses to global brands</p>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {clientCategories.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-8 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10"
                        >
                            <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                                {item.count}
                            </div>
                            <div className="text-gray-400">{item.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Categories Pills */}
                <div className="flex flex-wrap justify-center gap-4">
                    {clientTypes.map((type, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (index * 0.05) }}
                            className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-gray-300 hover:bg-white/10 hover:border-purple-500/50 transition-all cursor-default"
                        >
                            {type}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
