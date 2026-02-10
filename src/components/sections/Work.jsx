import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const projects = [
    {
        title: 'Neon Nexus',
        category: 'Web Design',
        image: 'https://images.unsplash.com/photo-1481487123985-78002a6361da?q=80&w=2670&auto=format&fit=crop',
        id: '01'
    },
    {
        title: 'Cyber Pulse',
        category: 'Branding',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop',
        id: '02'
    },
    {
        title: 'Echo Valley',
        category: 'App Development',
        image: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=2691&auto=format&fit=crop',
        id: '03'
    },
    {
        title: 'Solaris',
        category: 'Marketing',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        id: '04'
    },
];

const Work = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

    return (
        <section id="work" ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-10 px-10 md:px-24">
                    <div className="flex flex-col justify-center min-w-[400px] md:min-w-[600px]">
                        <h2 className="text-6xl md:text-8xl font-display font-bold leading-none mb-6">
                            SELECTED <br />
                            <span className="text-primary">WORKS</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-md">
                            A showcase of our recent projects where design meets functionality in perfect harmony.
                        </p>
                    </div>

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative group min-w-[300px] md:min-w-[500px] h-[50vh] md:h-[60vh] overflow-hidden rounded-3xl"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                                <span className="text-6xl font-display font-bold text-white/10 absolute top-6 right-6">
                                    {project.id}
                                </span>
                                <span className="text-primary font-medium tracking-wider mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-bold text-white">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Work;
