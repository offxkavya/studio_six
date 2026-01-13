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
        <section id="clients" className="py-32 relative overflow-hidden bg-white">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-6xl md:text-7xl font-black mb-6 tracking-tighter text-gray-900 leading-tight">
                        Trusted by <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Global Brands</span>
                    </h2>
                    <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto">From local startups to industry leaders, we're proud partners in growth.</p>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
                    {clientCategories.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5, type: 'spring', stiffness: 150 }}
                            className="text-center p-12 bg-gray-50/50 rounded-[40px] border border-gray-100 shadow-xl shadow-gray-100/50"
                        >
                            <div className="text-7xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 tracking-tighter">
                                {item.count}
                            </div>
                            <div className="text-gray-500 font-bold text-lg uppercase tracking-widest">{item.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Categories Pills */}
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {clientTypes.map((type, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + (index * 0.05), duration: 0.4 }}
                            className="px-8 py-4 bg-white rounded-2xl border border-gray-100 text-gray-600 font-bold hover:shadow-lg hover:border-indigo-200 hover:-translate-y-1 transition-all cursor-default shadow-sm"
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
