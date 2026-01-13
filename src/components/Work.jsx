import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: 'Neon Dreams Campaign',
        category: 'Video Editing',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
        color: 'from-purple-500 to-pink-500'
    },
    {
        title: 'Future Tech Intro',
        category: '3D Animation',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'Urban Style Reel',
        category: 'Social Media',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
        color: 'from-orange-500 to-red-500'
    }
];

const Work = () => {
    return (
        <section id="work" className="py-20 bg-black relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div>
                        <h2 className="text-5xl md:text-6xl font-bold mb-4">Selected <span className="text-white">Work</span></h2>
                        <p className="text-gray-400 text-lg">Showcasing our best creative projects.</p>
                    </div>
                    <button className="flex items-center gap-2 text-white border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                        View All Projects <ArrowUpRight className="w-4 h-4" />
                    </button>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${project.color} text-white mb-3`}>
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                <div className="flex items-center gap-2 text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    <span>View Case Study</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Play Button (for video vibes) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 border border-white/20">
                                <Play className="w-6 h-6 fill-white text-white" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
