import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Megaphone, Share2, Video } from 'lucide-react';

const services = [
    {
        icon: <Code size={32} />,
        title: 'Website Development',
        description: 'High-performance websites built with cutting-edge technologies for optimal user experience.',
        colSpan: 'md:col-span-2',
    },
    {
        icon: <Palette size={32} />,
        title: 'Website Design',
        description: 'Beautiful, user-centric designs that captivate audiences and drive engagement.',
        colSpan: 'md:col-span-1',
    },
    {
        icon: <Megaphone size={32} />,
        title: 'Meta & Google Ads',
        description: 'Strategic ad campaigns on Meta and Google platforms that drive conversions and ROI.',
        colSpan: 'md:col-span-1',
    },
    {
        icon: <Share2 size={32} />,
        title: 'Social Media',
        description: 'Comprehensive social media management including content strategy, creation, and community engagement.',
        colSpan: 'md:col-span-2',
    },
    {
        icon: <Video size={32} />,
        title: 'Animated Videos',
        description: 'Captivating animated videos and motion design to bring your brand story to life.',
        colSpan: 'md:col-span-3',
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 relative bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        OUR <span className="text-primary">EXPERTISE</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We offer a comprehensive suite of digital services designed to elevate your brand in the digital landscape.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group ${service.colSpan}`}
                        >
                            <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
