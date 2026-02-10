import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Palette, Globe, Megaphone, Smartphone, Video, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        icon: <Video size={40} />,
        title: 'Video Editing',
        description: 'Cinematic storytelling through professional video editing that captures attention and drives engagement.',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        icon: <Globe size={40} />,
        title: 'Website Design',
        description: 'Stunning, high-performance websites that convert visitors into customers with seamless UX.',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        icon: <Megaphone size={40} />,
        title: 'Meta & Google Ads',
        description: 'Data-driven advertising campaigns that maximize ROI and scale your business exponentially.',
        gradient: 'from-orange-500 to-red-500',
    },
    {
        icon: <Smartphone size={40} />,
        title: 'Social Media',
        description: 'Strategic social media management that builds communities and amplifies your brand voice.',
        gradient: 'from-green-500 to-emerald-500',
    },
    {
        icon: <Palette size={40} />,
        title: 'Brand Identity',
        description: 'Memorable brand identities that resonate with your audience and stand out in the market.',
        gradient: 'from-yellow-500 to-orange-500',
    },
    {
        icon: <Sparkles size={40} />,
        title: 'Creative Strategy',
        description: 'Innovative creative strategies that transform ideas into impactful digital experiences.',
        gradient: 'from-indigo-500 to-purple-500',
    },
];

const ServicesAnimated = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const cards = cardsRef.current;

        // Stagger animation on scroll
        gsap.fromTo(
            cards,
            {
                y: 100,
                opacity: 0,
                scale: 0.9,
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        // Tilt effect on hover
        cards.forEach((card) => {
            if (!card) return;

            const handleMouseMove = (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;

                gsap.to(card, {
                    rotateX,
                    rotateY,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            };

            const handleMouseLeave = () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                });
            };

            card.addEventListener('mousemove', handleMouseMove);
            card.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                card.removeEventListener('mousemove', handleMouseMove);
                card.removeEventListener('mouseleave', handleMouseLeave);
            };
        });
    }, []);

    return (
        <section id="services" ref={sectionRef} className="py-32 relative bg-black">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center">
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        OUR <span className="text-primary">SERVICES</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-xl">
                        Comprehensive digital solutions designed to elevate your brand and drive measurable results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="magnetic group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-primary/30 transition-all duration-500 cursor-pointer"
                            style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
                        >
                            {/* Gradient Glow */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className={`mb-6 text-white group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesAnimated;
