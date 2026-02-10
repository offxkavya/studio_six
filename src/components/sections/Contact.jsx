import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const inputs = formRef.current.querySelectorAll('input, textarea');

        inputs.forEach((input, index) => {
            gsap.fromTo(
                input,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: index * 0.1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    },
                }
            );
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Animate success
        gsap.to(formRef.current, {
            scale: 0.95,
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                setIsSubmitted(true);
                gsap.fromTo(
                    '.success-message',
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
                );
            },
        });
    };

    return (
        <section id="contact" ref={sectionRef} className="py-32 relative bg-black">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Side - Info */}
                    <div>
                        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
                            LET'S <span className="text-primary">TALK</span>
                        </h2>
                        <p className="text-gray-400 text-xl mb-12 leading-relaxed">
                            Ready to transform your digital presence? Drop us a message and let's create something extraordinary together.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors">
                                <Mail size={24} />
                                <a href="mailto:hellow.studiosixx@gmail.com" className="text-lg">hellow.studiosixx@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors">
                                <Phone size={24} />
                                <a href="tel:+917737507540" className="text-lg">+91 7737507540</a>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors">
                                <MapPin size={24} />
                                <span className="text-lg">Delhi, India</span>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="#" className="magnetic w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="magnetic w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="magnetic w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="relative">
                        {!isSubmitted ? (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        rows={6}
                                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="magnetic w-full px-8 py-5 bg-primary text-black rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
                                >
                                    Send Message <Send size={20} />
                                </button>
                            </form>
                        ) : (
                            <div className="success-message text-center py-20">
                                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Send size={32} className="text-black" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                                <p className="text-gray-400 text-lg">
                                    We'll get back to you within 24 hours.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
