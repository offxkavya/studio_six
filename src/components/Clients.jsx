import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const clientCategories = [
    { count: '50+', label: 'Happy Clients', gradient: 'from-rose-500 to-indigo-600' },
    { count: '100+', label: 'Projects Done', gradient: 'from-emerald-500 to-blue-600' },
    { count: '4.9', label: 'Client Rating', gradient: 'from-amber-500 to-rose-600' },
];

const clientTypes = [
    "Institutional Giants",
    "Digital Communities",
    "Strategic Partners",
    "E-commerce Disruptors",
    "Content Ecosystems",
    "Neural Startups"
];

const Clients = () => {
    const liquidEase = [0.23, 1, 0.32, 1];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 1, ease: liquidEase }
        }
    };

    return (
        <section id="clients" className="py-32 relative overflow-hidden bg-black border-t border-white/5">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-indigo-950/20 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: liquidEase }}
                    className="text-center mb-28"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 text-rose-400 text-[10px] font-black uppercase tracking-[0.3em]">
                        <Sparkles className="w-4 h-4 animate-pulse" />
                        <span>Global Impact</span>
                    </div>
                    <h2 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter text-white leading-tight">
                        Powering <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-rose-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Industry Leaders</span>
                    </h2>
                    <p className="text-gray-500 text-lg md:text-2xl font-medium max-w-2xl mx-auto px-4 md:px-0">
                        We bridge the gap between creative vision and <span className="text-white font-bold">undisputed market dominance</span>.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-28"
                >
                    {clientCategories.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -15, scale: 1.05 }}
                            className="group text-center p-12 md:p-16 bg-white/[0.03] rounded-[50px] border border-white/5 shadow-3xl shadow-black/50 hover:border-white/20 transition-all duration-700 backdrop-blur-xl overflow-hidden relative"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`} />
                            <div className={`text-6xl md:text-8xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-6 tracking-tighter group-hover:scale-110 transition-transform duration-700`}>
                                {item.count}
                            </div>
                            <div className="text-gray-500 font-black text-xs md:text-sm uppercase tracking-[0.3em] group-hover:text-white transition-colors">{item.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Categories Pills */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto"
                >
                    {clientTypes.map((type, index) => (
                        <motion.span
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                            className="px-10 py-5 bg-white/[0.04] rounded-[24px] border border-white/5 text-gray-400 font-black uppercase tracking-widest text-[10px] md:text-xs hover:text-white hover:border-rose-500/50 transition-all cursor-default shadow-3xl shadow-black/40 backdrop-blur-2xl"
                        >
                            {type}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Clients;
