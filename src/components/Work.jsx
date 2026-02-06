import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import edusyncImg from '../assets/edusync.png';
import battleAiImg from '../assets/battle-ai.png';

const projects = [
    {
        title: 'Knowva',
        category: 'Intelligent Education',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        color: 'from-rose-600 to-indigo-600',
        link: 'https://edusync-plum.vercel.app'
    },

    {
        title: 'Bittle-AI',
        category: 'Cognitive Interface',
        image: battleAiImg,
        color: 'from-emerald-600 to-blue-600',
        link: 'https://quiz-project-weld-eight.vercel.app'
    },
    {
        title: 'LocalBuzz',
        category: 'Digital Marketplace',
        image: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=2070&auto=format&fit=crop',
        color: 'from-amber-600 to-rose-600',
        link: 'https://localbuzz-roan.vercel.app/login'
    }
];




const Work = () => {
    const liquidEase = [0.23, 1, 0.32, 1];

    return (
        <section id="work" className="py-32 bg-black relative overflow-hidden border-t border-white/5">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[140px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: liquidEase }}
                    className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6"
                >
                    <div>
                        <h2 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter text-white leading-[0.9]">
                            Selected <span className="bg-gradient-to-r from-rose-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Work</span>
                        </h2>
                        <p className="text-gray-400 text-xl md:text-2xl font-medium max-w-2xl">Defining global digital standards through architectural excellence.</p>
                    </div>
                </motion.div>



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 1, ease: liquidEase }}
                            className="group relative aspect-[3/4] rounded-[40px] md:rounded-[50px] overflow-hidden cursor-pointer shadow-3xl shadow-black/80 block"
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-12 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[0.23,1,0.32,1]">
                                <span className={`inline-block px-5 py-2 rounded-full text-[10px] font-black bg-gradient-to-r ${project.color} text-white mb-6 tracking-[0.2em] uppercase shadow-2xl`}>
                                    {project.category}
                                </span>
                                <h3 className="text-4xl md:text-5xl font-black mb-4 text-white tracking-tighter">{project.title}</h3>
                                <div className="flex items-center gap-3 text-white/70 text-sm font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    <span>View Project</span>
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </div>

                            {/* Link/Icon Button */}
                            <div className="absolute top-12 right-12 w-16 h-16 bg-white/10 backdrop-blur-2xl rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500 border border-white/20">
                                <ExternalLink className="w-6 h-6 text-white" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
