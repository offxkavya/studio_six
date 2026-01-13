import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Code, Video, Megaphone, Smartphone, PlayCircle, Fingerprint } from 'lucide-react';

const services = [
    {
        title: 'Video Editing',
        description: 'Cinematic storytelling with high-impact visuals and transition mastery for global reach.',
        icon: <Video className="w-8 h-8" />,
        tags: ['PRODUCING', 'STORY'],
        gradient: 'from-blue-500 to-indigo-600'
    },
    {
        title: 'Animated Videos',
        description: 'Dynamic 2D/3D motion graphics that bring your brand concepts to life vibrantly.',
        icon: <PlayCircle className="w-8 h-8" />,
        tags: ['MOTION', 'ANIMATION'],
        gradient: 'from-indigo-500 to-purple-600'
    },
    {
        title: 'UI/UX Design',
        description: 'Vibrant and intuitive interfaces that translate complex ideas into seamless digital journeys.',
        icon: <Fingerprint className="w-8 h-8" />,
        tags: ['DESIGN', 'USER-CENTRIC'],
        gradient: 'from-cyan-500 to-blue-600'
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
        gradient: 'from-indigo-600 to-blue-500'
    },
    {
        title: 'Social Media Handling',
        description: 'Comprehensive brand management to dominate every digital platform and community.',
        icon: <Smartphone className="w-8 h-8" />,
        tags: ['CONTENT', 'TRENDING'],
        gradient: 'from-blue-600 to-indigo-600'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-32 relative bg-[#fcfcfd] overflow-hidden">
            {/* Soft Ambient Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6 text-indigo-600 text-sm font-bold">
                        <Sparkles className="w-4 h-4" />
                        <span>Our Expertise</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-gray-900 leading-tight">
                        Premium <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">Digital Solutions</span>
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                        We build digital legacies that help brands <span className="text-gray-900 font-bold">dominate</span> their industry.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-white border border-gray-100 p-10 rounded-[40px] shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-300 overflow-hidden"
                        >
                            {/* Decorative Background Accent */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-[0.03] rounded-bl-[100px] transition-opacity group-hover:opacity-[0.08]`} />

                            <div className="relative z-10 space-y-8">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg shadow-indigo-100/20 transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                                    {service.icon}
                                </div>

                                <div className="space-y-4">
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map((tag, i) => (
                                            <span key={i} className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500/80">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-500 text-base leading-relaxed font-medium group-hover:text-gray-600 transition-colors">
                                        {service.description}
                                    </p>
                                </div>

                                <motion.a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 text-sm font-black text-indigo-600 group/link"
                                >
                                    <span>Initiate Project</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
