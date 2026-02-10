import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        // Mouse move handler
        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: 'power2.out',
            });

            gsap.to(cursorDot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            });
        };

        // Hover effect for interactive elements
        const handleMouseEnter = () => {
            gsap.to(cursor, {
                scale: 2,
                backgroundColor: 'rgba(212, 255, 0, 0.3)',
                duration: 0.3,
            });
        };

        const handleMouseLeave = () => {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                duration: 0.3,
            });
        };

        // Add event listeners
        window.addEventListener('mousemove', moveCursor);

        const interactiveElements = document.querySelectorAll('a, button, .magnetic');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
            />
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-1 h-1 rounded-full pointer-events-none z-[9999] bg-primary"
                style={{
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </>
    );
};

export default CustomCursor;
