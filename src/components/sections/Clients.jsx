import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Award, TrendingUp, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    {
        icon: <Users size={40} />,
        number: '50+',
        label: 'Happy Clients',
        description: 'Schools, Businesses & Influencers',
    },
    {
        icon: <Award size={40} />,
        number: '100+',
        label: 'Projects Delivered',
        description: 'Websites, Campaigns & Content',
    },
    {
        icon: <TrendingUp size={40} />,
        number: '200%',
        label: 'Avg. Growth',
        description: 'Client Social Media Reach',
    },
    {
        icon: <Zap size={40} />,
        number: '24/7',
        label: 'Support',
        description: 'Always Here For You',
    },
];

const Clients = () => {
    const sectionRef = useRef(null);
    const statsRef = useRef([]);

    useEffect(() => {
        const statElements = statsRef.current;

        gsap.fromTo(
            statElements,
            {
                y: 60,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
            }
        );

        // Animate numbers counting up
        statElements.forEach((stat, index) => {
            const numberElement = stat.querySelector('.stat-number');
            if (numberElement) {
                const targetNumber = stats[index].number;
                const numericValue = parseInt(targetNumber);

                if (!isNaN(numericValue)) {
                    gsap.fromTo(
                        { value: 0 },
                        {
                            value: numericValue,
                            duration: 2,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: 'top 70%',
                            },
                            onUpdate: function () {
                                numberElement.textContent = Math.floor(this.targets()[0].value) + (targetNumber.includes('+') ? '+' : targetNumber.includes('%') ? '%' : '');
                            },
                        }
                    );
                }
            }
        });
    }, []);

    return (
        <section id="clients" ref={sectionRef} className="py-32 relative bg-gradient-to-b from-black via-zinc-950 to-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
                        TRUSTED BY <span className="text-primary">MANY</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-xl">
                        From educational institutions to thriving businesses and growing Instagram pages, we've helped 50+ clients achieve their digital goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            ref={(el) => (statsRef.current[index] = el)}
                            className="relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/30 transition-all duration-500 text-center group"
                        >
                            <div className="mb-6 text-primary mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>
                            <div className="stat-number text-5xl font-display font-bold mb-2 text-white">
                                {stat.number}
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {stat.label}
                            </h3>
                            <p className="text-gray-400 text-sm">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
