import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import edusyncImg from '../assets/edusync.png';
import battleAiImg from '../assets/battle-ai.png';

const projects = [
    {
        title: 'Knowva',
        category: 'LMS & AI',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        color: 'from-indigo-600 to-blue-600',
        link: 'https://edusync-plum.vercel.app'
    },

    {
        title: 'Bittle-AI',
        category: 'Web App',
        image: battleAiImg,
        color: 'from-blue-600 to-cyan-600',
        link: 'https://quiz-project-weld-eight.vercel.app'
    },
    {
        title: 'LocalBuzz',
        category: 'E-commerce',
        image: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=2070&auto=format&fit=crop',
        color: 'from-cyan-600 to-blue-600',
        link: 'https://localbuzz-roan.vercel.app/login'
    }
];




const Work = () => {
    return (
        <section id="work" className="py-32 bg-[#020617] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6"
                >
                    <div>
                        <h2 className="text-6xl md:text-7xl font-black mb-4 tracking-tighter text-white leading-tight">
                            Selected <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Work</span>
                        </h2>
                        <p className="text-gray-400 text-xl font-medium">Showcasing our best creative projects scaling brands globally.</p>
                    </div>
                </motion.div>



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="group relative aspect-[4/5] rounded-[32px] overflow-hidden cursor-pointer shadow-xl shadow-gray-200/50 block"
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-400">
                                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-black bg-gradient-to-r ${project.color} text-white mb-4 tracking-widest uppercase`}>
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-bold mb-3 text-white">{project.title}</h3>
                                <div className="flex items-center gap-2 text-white/90 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    <span>View Project</span>
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Link/Icon Button */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-400 border border-white/30 shadow-2xl">
                                <ExternalLink className="w-8 h-8 text-white" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
