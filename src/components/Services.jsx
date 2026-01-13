import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Code, Video, Megaphone, Smartphone } from 'lucide-react';

const services = [
    {
        title: 'Video Editing',
        description: 'Cinematic storytelling with high-impact visuals and transition mastery.',
        icon: <Video className="w-12 h-12" />,
        tags: ['PRODUCING', 'STORYTELLING', 'GRADING'],
        gradient: 'from-blue-100 to-indigo-100'
    },
    {
        title: 'Website Designing',
        description: 'Next-gen digital experiences built with performance and aesthetics at the core.',
        icon: <Code className="w-12 h-12" />,
        tags: ['UI/UX', 'DEVELOPMENT', 'INTERACTIVE'],
        gradient: 'from-indigo-100 to-blue-100'
    },
    {
        title: 'Meta & Google Ads',
        description: 'Strategic growth through data-driven campaigns that scale businesses.',
        icon: <Megaphone className="w-12 h-12" />,
        tags: ['STRATEGY', 'ROI', 'SCALING'],
        gradient: 'from-cyan-100 to-blue-100'
    },
    {
        title: 'Social Media Handling',
        description: 'Comprehensive brand management to dominate every digital platform.',
        icon: <Smartphone className="w-12 h-12" />,
        tags: ['CONTENT', 'ENGAGEMENT', 'TRENDING'],
        gradient: 'from-blue-100 to-cyan-100'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-32 relative bg-white overflow-hidden">
            {/* Soft Mesh Background */}
            <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[140px]" />
            <div className="absolute bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-indigo-50/40 rounded-full blur-[140px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-32"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6 text-indigo-600 text-sm font-semibold">
                        <Sparkles className="w-4 h-4" />
                        <span>Our Expertise</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-gray-900 leading-tight">
                        Premium <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Digital Solutions</span>
                    </h2>
                    <p className="text-gray-500 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-medium">
                        We don't just provide services; we build <span className="text-gray-900 font-bold">digital legacies</span> that help brands dominate their industry.
                    </p>
                </motion.div>

                <div className="space-y-40">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
                        >
                            {/* High-Impact Visual */}
                            <div className="w-full lg:w-1/2 group">
                                <div className="relative aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl shadow-gray-200/50 transform group-hover:scale-[1.02] transition-transform duration-500">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-40`} />
                                    <div className="absolute inset-0 backdrop-blur-3xl" />

                                    {/* Central Icon Representation */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className="w-48 h-48 bg-white rounded-[32px] border border-gray-100 flex items-center justify-center text-indigo-600 shadow-xl shadow-indigo-100/50"
                                        >
                                            <div className="transition-transform duration-300">
                                                {service.icon}
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Refined Content */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div className="flex flex-wrap gap-3">
                                    {service.tags.map((tag, i) => (
                                        <span key={i} className="px-5 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs font-bold uppercase tracking-widest text-indigo-500">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-none">
                                        {service.title}
                                    </h3>
                                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                                </div>

                                <p className="text-gray-500 text-xl leading-relaxed font-medium">
                                    {service.description}
                                </p>

                                <motion.a
                                    href="#contact"
                                    whileHover={{ x: 10 }}
                                    className="inline-flex items-center gap-4 text-indigo-600 font-black group transition-colors hover:text-blue-600"
                                >
                                    <span className="text-lg">Initiate Project</span>
                                    <div className="w-14 h-14 rounded-full border border-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 bg-white shadow-sm">
                                        <ArrowRight className="w-6 h-6" />
                                    </div>
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
