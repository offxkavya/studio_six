import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: 'Neon Dreams Campaign',
        category: 'Video Editing',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
        color: 'from-blue-600 to-indigo-600'
    },
    {
        title: 'Future Tech Intro',
        category: '3D Animation',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
        color: 'from-indigo-600 to-blue-600'
    },
    {
        title: 'Urban Style Reel',
        category: 'Social Media',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
        color: 'from-blue-500 to-cyan-500'
    }
];

const Work = () => {
    return (
        <section id="work" className="py-32 bg-white relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6"
                >
                    <div>
                        <h2 className="text-6xl md:text-7xl font-black mb-4 tracking-tighter text-gray-900 leading-tight">
                            Selected <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Work</span>
                        </h2>
                        <p className="text-gray-500 text-xl font-medium">Showcasing our best creative projects scaling brands globally.</p>
                    </div>
                    <button className="flex items-center gap-3 text-indigo-600 font-bold border border-indigo-100 px-8 py-4 rounded-full hover:bg-indigo-50 transition-all shadow-sm">
                        View All Projects <ArrowUpRight className="w-5 h-5" />
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="group relative aspect-[4/5] rounded-[32px] overflow-hidden cursor-pointer shadow-xl shadow-gray-200/50"
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-400">
                                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-black bg-gradient-to-r ${project.color} text-white mb-4 tracking-widest uppercase`}>
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-bold mb-3 text-white">{project.title}</h3>
                                <div className="flex items-center gap-2 text-white/90 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    <span>View Case Study</span>
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Play Button */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-400 border border-white/30 shadow-2xl">
                                <Play className="w-8 h-8 fill-white text-white translate-x-0.5" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
