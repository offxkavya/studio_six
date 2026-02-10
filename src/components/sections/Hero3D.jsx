import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { gsap } from 'gsap';
import { MoveRight } from 'lucide-react';

function Stars(props) {
    const ref = useRef();
    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#D4FF00"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

const Hero3D = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ delay: 0.5 });

        // Split text animation
        const titleChars = titleRef.current.querySelectorAll('.char');

        tl.fromTo(
            titleChars,
            { y: 100, opacity: 0, rotationX: -90 },
            {
                y: 0,
                opacity: 1,
                rotationX: 0,
                duration: 1,
                stagger: 0.03,
                ease: 'power4.out',
            }
        )
            .fromTo(
                subtitleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                '-=0.5'
            )
            .fromTo(
                ctaRef.current.children,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
                '-=0.4'
            );
    }, []);

    const title = "WE CREATE DIGITAL MAGIC";
    const chars = title.split('').map((char, i) => (
        <span key={i} className="char inline-block" style={{ perspective: '1000px' }}>
            {char === ' ' ? '\u00A0' : char}
        </span>
    ));

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 1] }}>
                    <Stars />
                </Canvas>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-[1]" />

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 text-center">
                <h1
                    ref={titleRef}
                    className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-tight mb-8"
                >
                    {chars}
                </h1>

                <p
                    ref={subtitleRef}
                    className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    Transforming brands through cutting-edge design, development, and digital experiences that captivate audiences worldwide.
                </p>

                <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#work"
                        className="magnetic group relative px-10 py-5 bg-primary text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Explore Work <MoveRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </span>
                    </a>

                    <a
                        href="#contact"
                        className="magnetic px-10 py-5 bg-white/5 text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/10 hover:border-primary/50 transition-all backdrop-blur-sm"
                    >
                        Start a Project
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
                <span className="text-xs uppercase tracking-widest">Scroll to Discover</span>
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
};

export default Hero3D;
