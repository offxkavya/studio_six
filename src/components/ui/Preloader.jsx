import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const preloaderRef = useRef(null);
    const logoRef = useRef(null);
    const counterRef = useRef(null);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            // Animate out
            const tl = gsap.timeline({
                onComplete: () => {
                    if (onComplete) onComplete();
                },
            });

            tl.to(counterRef.current, {
                opacity: 0,
                y: -30,
                duration: 0.5,
            })
                .to(logoRef.current, {
                    scale: 1.2,
                    opacity: 0,
                    duration: 0.6,
                }, '-=0.3')
                .to(preloaderRef.current, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: 'power4.inOut',
                }, '-=0.3');
        }
    }, [progress, onComplete]);

    useEffect(() => {
        // Logo reveal animation
        gsap.fromTo(
            logoRef.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' }
        );

        // Counter animation
        gsap.fromTo(
            counterRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 0.3 }
        );
    }, []);

    return (
        <div
            ref={preloaderRef}
            className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center"
        >
            <div ref={logoRef} className="mb-8">
                <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter">
                    STUDIO<span className="text-primary">SIX</span>
                </h1>
            </div>

            <div ref={counterRef} className="text-4xl font-bold text-primary tabular-nums">
                {Math.floor(progress)}%
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};

export default Preloader;
