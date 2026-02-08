import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [textIndex, setTextIndex] = useState(0);
    const words = ["Studio", "Six"];

    useEffect(() => {
        const timer = setTimeout(() => {
            if (textIndex < words.length) {
                setTextIndex(textIndex + 1);
            } else {
                // Wait a bit after showing both words
                setTimeout(onComplete, 800);
            }
        }, 1200);

        return () => clearTimeout(timer);
    }, [textIndex, onComplete]);

    const liquidEase = [0.23, 1, 0.32, 1];

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
        >
            <div className="relative z-10">
                <div className="overflow-hidden relative">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 1.2, ease: liquidEase }}
                        className="text-6xl md:text-9xl font-black text-white tracking-tighter"
                    >
                        <span className="inline-block relative">
                            Studio
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 0.5, duration: 1, ease: liquidEase }}
                                className="absolute bottom-2 left-0 h-2 bg-rose-500"
                            />
                        </span>
                        <span className="inline-block ml-4 md:ml-8 text-white">
                            Six
                        </span>
                    </motion.h1>
                </div>
            </div>

            {/* Background Effects */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600 rounded-full blur-[200px]"
            />
        </motion.div>
    );
};

export default Preloader;
