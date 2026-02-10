import React from 'react';
import { motion } from 'framer-motion';
import { Code, Video, Megaphone, Smartphone, PlayCircle, Fingerprint, ArrowRight } from 'lucide-react';

const services = [
    {
        title: 'Video Editing',
        description: 'Cinematic storytelling with high-impact visuals and transition mastery for global reach.',
        icon: <Video className="w-6 h-6" />,
        tags: ['PRODUCING', 'STORY']
    },
    {
        title: 'Animated Videos',
        description: 'Dynamic 2D/3D motion graphics that bring your brand concepts to life vibrantly.',
        icon: <PlayCircle className="w-6 h-6" />,
        tags: ['MOTION', 'ANIMATION']
    },
    {
        title: 'UI/UX Design',
        description: 'Vibrant and intuitive interfaces that translate complex ideas into seamless digital journeys.',
        icon: <Fingerprint className="w-6 h-6" />,
        tags: ['DESIGN', 'USER-CENTRIC']
    },
    {
        title: 'Website Development',
        description: 'Next-gen digital experiences built with performance and aesthetics at the core.',
        icon: <Code className="w-6 h-6" />,
        tags: ['FULL-STACK', 'SCALABLE']
    },
    {
        title: 'Meta & Google Ads',
        description: 'Strategic growth through data-driven campaigns that scale businesses efficiently.',
        icon: <Megaphone className="w-6 h-6" />,
        tags: ['STRATEGY', 'ROI']
    },
    {
        title: 'Social Media Handling',
        description: 'Comprehensive brand management to dominate every digital platform and community.',
        icon: <Smartphone className="w-6 h-6" />,
        tags: ['CONTENT', 'TRENDING']
    }
];

const Services = () => {
    return (
        <section id="services" className="py-32 bg-surface-white relative z-20">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="mb-24 md:flex justify-between items-end border-b border-black/10 pb-10">
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-4">Our Expertise</h2>
                        <h3 className="text-5xl md:text-7xl font-bold text-text-dark tracking-tighter">
                            Evolving<br />Digital Worlds.
                        </h3>
                    </div>
                    <p className="mt-8 md:mt-0 text-text-dark-secondary max-w-sm text-lg font-medium leading-relaxed">
                        We don't just provide services; we engineer digital infrastructure for tomorrow's leaders.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group p-10 bg-gray-50 rounded-[40px] hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 border border-transparent hover:border-black/5"
                        >
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black mb-8 shadow-sm group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                                {service.icon}
                            </div>

                            <h4 className="text-2xl font-bold text-text-dark mb-4 group-hover:translate-x-2 transition-transform duration-300">{service.title}</h4>
                            <p className="text-text-dark-secondary leading-relaxed mb-8">{service.description}</p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {service.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-black/5 text-black/50">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <span>Start Project</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
