import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Video, Megaphone, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: <Video className="w-12 h-12" />,
        title: 'Video Editing',
        description: 'We craft compelling video content that grabs attention. From high-energy reels to polished corporate presentations, our editing services turn raw footage into storytelling masterpieces.',
        gradient: 'from-purple-500 to-indigo-500',
        tags: ['Reels', 'YouTube', 'Promo']
    },
    {
        icon: <Monitor className="w-12 h-12" />,
        title: 'Website Designing',
        description: 'Your website is your digital storefront. We design stunning, responsive, and high-converting websites using the latest technologies like React and Tailwind to ensure you stand out.',
        gradient: 'from-pink-500 to-rose-500',
        tags: ['UI/UX', 'React', 'E-commerce']
    },
    {
        icon: <Megaphone className="w-12 h-12" />,
        title: 'Meta & Google Ads',
        description: 'Stop wasting money on ineffective ads. Our data-driven strategies for Meta and Google Ads ensure your budget is spent on acquiring real leads and driving measurable growth.',
        gradient: 'from-orange-500 to-red-500',
        tags: ['Lead Gen', 'PPC', 'Retargeting']
    },
    {
        icon: <Smartphone className="w-12 h-12" />,
        title: 'Social Media Management',
        description: 'We handle everything from content creation to community engagement. Watch your brand grow as we implement strategic campaigns across Instagram, LinkedIn, and more.',
        gradient: 'from-blue-400 to-cyan-400',
        tags: ['Strategy', 'Content', 'Growth']
    },
    {
        icon: <Video className="w-12 h-12" />,
        title: 'Animated Videos',
        description: 'Bring your ideas to life with stunning 2D/3D animations. Perfect for explainers, product demos, and engaging social content.',
        gradient: 'from-teal-400 to-emerald-500',
        tags: ['Motion', '3D', 'Explainers']
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 relative bg-black">
            {/* Background Glow */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[128px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Services</span></h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to scale your brand.
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                        >
                            {/* Graphic Side */}
                            <div className="w-full lg:w-1/2">
                                <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden group`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                                    <div className="absolute inset-0 backdrop-blur-3xl" />

                                    {/* Glass Card in Center */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-48 h-48 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center text-white shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                            {service.icon}
                                        </div>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className={`absolute top-10 right-10 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-full blur-xl opacity-40`} />
                                    <div className={`absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl`} />
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div className="flex gap-3">
                                    {service.tags.map((tag, i) => (
                                        <span key={i} className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-4xl font-bold text-white">{service.title}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>

                                <a href="#contact" className="group flex items-center gap-2 text-purple-400 font-bold hover:text-purple-300 transition-colors">
                                    Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
