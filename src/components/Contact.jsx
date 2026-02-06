import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Contact = () => {
    const liquidEase = [0.23, 1, 0.32, 1];
    const form = useRef();
    const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'
    const [phone, setPhone] = useState('');

    const sendEmail = (e) => {
        // ... same logic
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-black border-t border-white/5">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div
                    className="absolute -top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-rose-900/10 rounded-full blur-[140px]"
                />
                <div
                    className="absolute -bottom-1/4 -right-1/4 w-[1100px] h-[1100px] bg-indigo-900/10 rounded-full blur-[160px]"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: liquidEase }}
                    className="text-center mb-24"
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 text-rose-400 text-[10px] font-black uppercase tracking-[0.2em]"
                    >
                        <Sparkles className="w-4 h-4 animate-pulse" />
                        <span>Establish Connection</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-8xl font-black mb-6 tracking-tighter text-white leading-tight">
                        Launch Your <span className="bg-gradient-to-r from-rose-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Legacy</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium px-4 md:px-0">
                        Ready to transcend the ordinary? We're the architects of your digital future.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-7xl mx-auto">
                    {/* Contact Info Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: liquidEase }}
                        className="lg:col-span-5 space-y-10"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-indigo-600 rounded-[50px] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                            <div className="relative bg-white/[0.03] border border-white/10 p-10 md:p-14 rounded-[40px] md:rounded-[50px] shadow-3xl shadow-black/80 backdrop-blur-2xl">
                                <h3 className="text-4xl font-black mb-12 text-white tracking-tighter">Contact <span className="text-rose-400">Details</span></h3>

                                <div className="space-y-12">
                                    {[
                                        { icon: <Mail className="w-8 h-8" />, label: 'Email', value: 'hellow.studiosixx@gmail.com', color: 'bg-rose-900/20 text-rose-400' },
                                        { icon: <Phone className="w-8 h-8" />, label: 'Phone', value: '+91 7737507540', color: 'bg-indigo-900/20 text-indigo-400' },
                                        { icon: <MapPin className="w-8 h-8" />, label: 'Location', value: 'Delhi, India', color: 'bg-emerald-900/20 text-emerald-400' }
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ x: 15 }}
                                            className="flex flex-row items-center gap-6 md:gap-8 group/item"
                                        >
                                            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-[24px] ${item.color} flex items-center justify-center transition-all duration-700 group-hover/item:scale-110 border border-white/5`}>
                                                {item.icon}
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black mb-2">{item.label}</div>
                                                <div className="text-lg md:text-2xl text-white font-black group-hover/item:text-rose-400 transition-colors break-all md:break-words leading-none">{item.value}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Modern Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: liquidEase }}
                        className="lg:col-span-7"
                    >
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="bg-white/[0.03] border border-white/10 p-8 md:p-16 rounded-[40px] md:rounded-[50px] shadow-3xl shadow-black/80 space-y-10 md:space-y-12 backdrop-blur-2xl"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-gray-500 ml-2 uppercase tracking-[0.2em]">First Name</label>
                                    <input
                                        name="first_name"
                                        type="text"
                                        required
                                        className="w-full bg-white/5 border border-white/5 rounded-2xl md:rounded-3xl p-6 md:p-7 focus:outline-none focus:ring-4 focus:ring-rose-500/5 focus:border-rose-400/50 transition-all duration-500 placeholder:text-gray-700 text-white font-bold"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-gray-500 ml-2 uppercase tracking-[0.2em]">Last Name</label>
                                    <input
                                        name="last_name"
                                        type="text"
                                        required
                                        className="w-full bg-white/5 border border-white/5 rounded-2xl md:rounded-3xl p-6 md:p-7 focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-400/50 transition-all duration-500 placeholder:text-gray-700 text-white font-bold"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-gray-500 ml-2 uppercase tracking-[0.2em]">Email Address</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full bg-white/5 border border-white/5 rounded-2xl md:rounded-3xl p-6 md:p-7 focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-400/50 transition-all duration-500 placeholder:text-gray-700 text-white font-bold"
                                    placeholder="Enter your email address"
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-gray-500 ml-2 uppercase tracking-[0.2em]">Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    required
                                    className="w-full bg-white/5 border border-white/5 rounded-2xl md:rounded-3xl p-6 md:p-7 focus:outline-none focus:ring-4 focus:ring-rose-500/5 focus:border-rose-400/50 transition-all duration-500 placeholder:text-gray-700 text-white font-bold resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={status === 'sending'}
                                className="w-full relative group overflow-hidden bg-gradient-to-r from-rose-600 via-indigo-600 to-emerald-600 bg-[length:200%_auto] animate-gradient transition-all duration-700 text-white font-black py-7 md:py-8 rounded-2xl md:rounded-3xl shadow-3xl shadow-rose-500/20 flex items-center justify-center gap-6 disabled:opacity-50"
                            >
                                <AnimatePresence mode="wait">
                                    {status === 'sending' ? (
                                        <motion.div
                                            key="sending"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="flex items-center gap-3"
                                        >
                                            <Loader2 className="w-6 h-6 animate-spin" />
                                            <span className="tracking-[0.3em] uppercase text-sm">Sending...</span>
                                        </motion.div>
                                    ) : status === 'success' ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex items-center gap-3"
                                        >
                                            <CheckCircle2 className="w-6 h-6" />
                                            <span className="tracking-[0.3em] uppercase text-sm">Message Sent!</span>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="idle"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="flex items-center gap-3"
                                        >
                                            <span className="tracking-[0.3em] uppercase text-sm">Send Message</span>
                                            <Send className="w-5 h-5" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
