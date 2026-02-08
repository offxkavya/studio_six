import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Code, Video, Megaphone, Smartphone, PlayCircle, Fingerprint } from 'lucide-react';

const services = [
    {
        title: 'Video Editing',
        description: 'Cinematic storytelling with high-impact visuals and transition mastery for global reach.',
        icon: <Video className="w-8 h-8" />,
        tags: ['PRODUCING', 'STORY'],
        gradient: 'from-rose-500 to-indigo-600'
    },
    {
        title: 'Animated Videos',
        description: 'Dynamic 2D/3D motion graphics that bring your brand concepts to life vibrantly.',
        icon: <PlayCircle className="w-8 h-8" />,
        tags: ['MOTION', 'ANIMATION'],
        gradient: 'from-emerald-500 to-blue-600'
    },
    {
        title: 'UI/UX Design',
        description: 'Vibrant and intuitive interfaces that translate complex ideas into seamless digital journeys.',
        icon: <Fingerprint className="w-8 h-8" />,
        tags: ['DESIGN', 'USER-CENTRIC'],
        gradient: 'from-amber-500 to-rose-600'
    },
    {
        title: 'Website Development',
        description: 'Next-gen digital experiences built with performance and aesthetics at the core.',
        icon: <Code className="w-8 h-8" />,
        tags: ['FULL-STACK', 'SCALABLE'],
        gradient: 'from-blue-600 to-cyan-500'
    },
    {
        title: 'Meta & Google Ads',
        description: 'Strategic growth through data-driven campaigns that scale businesses efficiently.',
        icon: <Megaphone className="w-8 h-8" />,
        tags: ['STRATEGY', 'ROI'],
        gradient: 'from-purple-600 to-indigo-500'
    },
    {
        title: 'Social Media Handling',
        description: 'Comprehensive brand management to dominate every digital platform and community.',
        icon: <Smartphone className="w-8 h-8" />,
        tags: ['CONTENT', 'TRENDING'],
        gradient: 'from-cyan-600 to-emerald-500'
    }
];

const Services = () => {
    const liquidEase = [0.23, 1, 0.32, 1];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.8, ease: liquidEase }
        }
    };

    return (
        <section id="services" className="py-32 relative bg-black overflow-hidden border-t border-white/5">
            {/* Soft Ambient Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-rose-900/10 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: liquidEase }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 mb-6 text-rose-400 text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm">
                        <Sparkles className="w-4 h-4" />
                        <span>Core Capabilities</span>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-bold mb-6 tracking-tighter text-white leading-tight">
                        Evolving <span className="text-white">Digital Worlds</span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium px-4 md:px-0">
                        We don't just provide services; we engineer <span className="text-white font-semibold">digital infrastructure</span> for tomorrow's leaders.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -12, scale: 1.02 }}
                            className="group relative bg-white/[0.03] border border-white/5 p-10 md:p-12 rounded-[40px] md:rounded-[50px] transition-all duration-500 overflow-hidden backdrop-blur-xl hover:bg-white/[0.05] hover:border-white/20"
                        >

                            <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-[0.05] rounded-bl-[120px] transition-opacity group-hover:opacity-[0.15]`} />

                            <div className="relative z-10 space-y-10">
                                <div className={`w-20 h-20 rounded-[24px] bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-2xl shadow-black/40 transform transition-transform duration-700 group-hover:rotate-[15deg] group-hover:scale-110`}>
                                    {service.icon}
                                </div>

                                <div className="space-y-6">
                                    <div className="flex flex-wrap gap-3">
                                        {service.tags.map((tag, i) => (
                                            <span key={i} className={`text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-none">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed font-medium group-hover:text-gray-200 transition-colors">
                                        {service.description}
                                    </p>
                                </div>

                                <motion.a
                                    href="#contact"
                                    className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-indigo-400 group/link"
                                >
                                    <span>Start Project</span>
                                    <ArrowRight className="w-5 h-5 transition-transform" />
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
