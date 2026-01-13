import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Video, Megaphone, ArrowRight, Sparkles } from 'lucide-react';

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
        <section id="services" className="py-32 relative bg-black overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[128px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/[0.03] rounded-full blur-[140px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-32"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 text-purple-400 text-sm font-medium">
                        <Sparkles className="w-4 h-4" />
                        <span>Our Expertise</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white">
                        Premium <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Digital Solutions</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                        We don't just provide services; we build <span className="text-white">digital legacies</span> that help brands dominate their industry.
                    </p>
                </motion.div>

                <div className="space-y-40">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
                        >
                            {/* High-Impact Visual */}
                            <div className="w-full lg:w-1/2 group">
                                <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-20 transition-all duration-700 scale-110 group-hover:scale-100`} />
                                    <div className="absolute inset-0 backdrop-blur-3xl" />

                                    {/* Central Animated Icon Card */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            whileHover={{ rotateY: 180 }}
                                            transition={{ duration: 0.8, type: "spring" }}
                                            className="w-56 h-56 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 flex items-center justify-center text-white shadow-[0_0_50px_rgba(0,0,0,0.3)] perspective-1000"
                                        >
                                            <div className="group-hover:scale-110 transition-transform duration-500">
                                                {service.icon}
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Orbiting Elements */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 pointer-events-none"
                                    >
                                        <div className={`absolute top-1/4 right-1/4 w-3 h-3 bg-white/20 rounded-full`} />
                                        <div className={`absolute bottom-1/4 left-1/4 w-4 h-4 bg-white/10 rounded-full`} />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Refined Content */}
                            <div className="w-full lg:w-1/2 space-y-10">
                                <div className="flex flex-wrap gap-3">
                                    {service.tags.map((tag, i) => (
                                        <span key={i} className="px-5 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-bold uppercase tracking-widest text-purple-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                                        {service.title}
                                    </h3>
                                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                                </div>

                                <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                                    {service.description}
                                </p>

                                <motion.a
                                    href="#contact"
                                    whileHover={{ x: 10 }}
                                    className="inline-flex items-center gap-4 text-white font-bold group"
                                >
                                    <span className="text-lg">Initiate Project</span>
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-600 transition-all duration-300">
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    animation: gradient 3s ease infinite;
                }
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </section>
    );
};

export default Services;
