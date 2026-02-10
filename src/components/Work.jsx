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
        link: 'https://edusync-plum.vercel.app',
        year: '2024'
    },
    {
        title: 'Bittle-AI',
        category: 'Cognitive Interface',
        image: battleAiImg,
        link: 'https://quiz-project-weld-eight.vercel.app',
        year: '2024'
    },
    {
        title: 'LocalBuzz',
        category: 'Digital Marketplace',
        image: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=2070&auto=format&fit=crop',
        link: 'https://localbuzz-roan.vercel.app/login',
        year: '2023'
    }
];

const Work = () => {
    return (
        <section id="work" className="py-32 bg-surface-white text-text-dark relative z-20 border-t border-black/5">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                    <div>
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-text-dark">
                            Selected<br /><span className="text-gray-300">Work.</span>
                        </h2>
                    </div>
                    <p className="text-text-dark-secondary text-lg max-w-sm text-right font-medium">
                        Defining global digital standards through architectural excellence.
                    </p>
                </div>

                {/* Projects */}
                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8 }}
                            className="block group relative"
                        >
                            {/* Large Image Container */}
                            <div className="relative w-full aspect-[16/9] md:aspect-[2.2/1] bg-gray-100 rounded-[30px] overflow-hidden">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105"
                                />

                                {/* Overlay Reveal */}
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-700" />

                                {/* Center Button */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 ease-[0.16,1,0.3,1]">
                                    <span className="text-xs font-bold uppercase tracking-widest text-black">View</span>
                                </div>
                            </div>

                            {/* Meta Data */}
                            <div className="mt-8 flex justify-between items-center border-b border-black/10 pb-8">
                                <div>
                                    <h3 className="text-4xl font-bold tracking-tighter mb-1">{project.title}</h3>
                                    <span className="text-sm font-bold uppercase tracking-widest text-text-dark-secondary">{project.category}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-bold text-gray-400">{project.year}</span>
                                    <div className="p-3 rounded-full border border-black/10 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
