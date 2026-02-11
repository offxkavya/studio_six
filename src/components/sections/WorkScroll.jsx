import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import battleAiImg from '../../assets/battle-ai.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'Knowva',
        category: 'Intelligent Education',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop',
        link: 'https://edusync-plum.vercel.app',
        year: '2024',
        color: '#D4FF00',
    },
    {
        title: 'Bittle-AI',
        category: 'Cognitive Interface',
        image: battleAiImg,
        link: 'https://quiz-project-weld-eight.vercel.app',
        year: '2024',
        color: '#3b82f6',
    },
    {
        title: 'LocalBuzz',
        category: 'Digital Marketplace',
        image: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=2070&auto=format&fit=crop',
        link: 'https://localbuzz-roan.vercel.app/login',
        year: '2023',
        color: '#ec4899',
    },
];

const WorkScroll = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;

        // Horizontal scroll animation
        const scrollTween = gsap.to(container, {
            x: () => -(container.scrollWidth - window.innerWidth),
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${container.scrollWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            },
        });

        // Parallax effect on images
        const images = container.querySelectorAll('.project-image');
        images.forEach((img) => {
            gsap.to(img, {
                scale: 1.1,
                scrollTrigger: {
                    trigger: img,
                    containerAnimation: scrollTween,
                    start: 'left right',
                    end: 'right left',
                    scrub: true,
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section id="work" ref={sectionRef} className="relative bg-black overflow-hidden">
            <div ref={containerRef} className="flex h-screen items-center">
                {/* Title Card */}
                <div className="flex-shrink-0 w-screen h-full flex items-center justify-center px-12">
                    <div className="max-w-2xl">
                        <h2 className="text-6xl md:text-8xl font-display font-bold leading-none mb-8">
                            SELECTED <br />
                            <span className="text-primary">WORKS</span>
                        </h2>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            A curated collection of our most impactful projects. Each one tells a unique story of creativity, strategy, and results.
                        </p>
                    </div>
                </div>

                {/* Project Cards */}
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-[80vw] md:w-[60vw] h-[70vh] mx-8 group cursor-pointer"
                        onClick={() => window.open(project.link, '_blank')}
                    >
                        <div className="relative w-full h-full rounded-3xl overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span
                                        className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 text-black"
                                        style={{ backgroundColor: project.color }}
                                    >
                                        {project.category}
                                    </span>
                                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                        {project.title}
                                    </h3>
                                    <button className="magnetic flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <span className="text-lg font-semibold">View Project</span>
                                        <ExternalLink size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Year */}
                            <div className="absolute top-10 right-10 text-6xl font-display font-bold text-white/10">
                                {project.year}
                            </div>
                        </div>
                    </div>
                ))}

                {/* End Card */}
                <div className="flex-shrink-0 w-screen h-full flex items-center justify-center px-12">
                    <div className="text-center">
                        <h3 className="text-5xl font-display font-bold mb-6">
                            Like What You See?
                        </h3>
                        <a
                            href="#contact"
                            className="magnetic inline-block px-12 py-6 bg-primary text-black rounded-full font-bold text-xl hover:scale-105 transition-transform"
                        >
                            Let's Create Together
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkScroll;
