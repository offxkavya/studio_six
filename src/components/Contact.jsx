import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'
    const [phone, setPhone] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(form.current);
        const templateParams = {
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            email: formData.get('email'),
            phone: phone,
            message: formData.get('message'),
        };

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                setStatus('success');
                setPhone('');
                form.current.reset();
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 }
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-black">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-pink-600/10 rounded-full blur-[140px]"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 text-purple-400 text-sm font-medium"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>Get in Touch</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Let's <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Work Together</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Ready to transform your vision into reality? We're just a message away from creating something extraordinary.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-7xl mx-auto">
                    {/* Contact Info Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                            <div className="relative bg-[#0A0A0A] border border-white/10 p-10 rounded-3xl backdrop-blur-xl">
                                <h3 className="text-3xl font-bold mb-10 text-white">Contact <span className="text-purple-500">Details</span></h3>

                                <div className="space-y-10">
                                    {[
                                        { icon: <Mail />, label: 'Email', value: 'hellow.studiosixx@gmail.com', color: 'bg-purple-500/10 text-purple-400' },
                                        { icon: <Phone />, label: 'Phone', value: '+91 7737507540', color: 'bg-pink-500/10 text-pink-400' },
                                        { icon: <MapPin />, label: 'Office', value: 'Delhi, India', color: 'bg-purple-500/10 text-purple-400' }
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ x: 10 }}
                                            className="flex items-center gap-6 group/item"
                                        >
                                            <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center transition-transform group-hover/item:scale-110 group-hover/item:rotate-3`}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">{item.label}</div>
                                                <div className="text-lg text-gray-200 font-medium group-hover/item:text-white transition-colors">{item.value}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-16 pt-10 border-t border-white/5">
                                    <div className="flex gap-4">
                                        {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                                            <button key={social} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                                                {social}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Modern Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="bg-white/[0.03] border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-md space-y-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-semibold text-gray-400 ml-1 italic">First Name</label>
                                    <input
                                        name="first_name"
                                        type="text"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all placeholder:text-gray-600"
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-semibold text-gray-400 ml-1 italic">Last Name</label>
                                    <input
                                        name="last_name"
                                        type="text"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all placeholder:text-gray-600"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-semibold text-gray-400 ml-1 italic">Email Address</label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all placeholder:text-gray-600"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-semibold text-gray-400 ml-1 italic">Phone Number</label>
                                    <PhoneInput
                                        country={'in'}
                                        value={phone}
                                        onChange={setPhone}
                                        inputStyle={{
                                            width: '100%',
                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: '1rem',
                                            padding: '1.25rem',
                                            paddingLeft: '3.5rem',
                                            color: '#E5E7EB',
                                            fontSize: '1rem',
                                            height: '67px',
                                            transition: 'all 0.3s',
                                        }}
                                        buttonStyle={{
                                            backgroundColor: 'transparent',
                                            border: 'none',
                                            borderRadius: '1rem 0 0 1rem',
                                            paddingLeft: '0.75rem',
                                            zIndex: 10
                                        }}
                                        dropdownStyle={{
                                            backgroundColor: '#111',
                                            color: '#E5E7EB',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            borderRadius: '1rem',
                                            padding: '0.5rem',
                                            boxShadow: '0 15px 35px rgba(0,0,0,0.7)',
                                            zIndex: 50
                                        }}
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-semibold text-gray-400 ml-1 italic">Your Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all placeholder:text-gray-600 resize-none"
                                    placeholder="Enter your message"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={status === 'sending'}
                                className="w-full relative group overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 text-white font-bold py-5 rounded-2xl shadow-xl shadow-purple-500/20 flex items-center justify-center gap-3 disabled:opacity-50"
                            >
                                <AnimatePresence mode="wait">
                                    {status === 'sending' ? (
                                        <motion.div
                                            key="sending"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-2"
                                        >
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Transmitting...</span>
                                        </motion.div>
                                    ) : status === 'success' ? (
                                        <motion.div
                                            key="success"
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="flex items-center gap-2"
                                        >
                                            <CheckCircle2 className="w-5 h-5" />
                                            <span>Message Sent Successfully!</span>
                                        </motion.div>
                                    ) : status === 'error' ? (
                                        <motion.div
                                            key="error"
                                            initial={{ x: 10, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            className="flex items-center gap-2"
                                        >
                                            <AlertCircle className="w-5 h-5" />
                                            <span>Error Occurred</span>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="idle"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="flex items-center gap-2"
                                        >
                                            <span>Send Message</span>
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </section>
    );
};

export default Contact;
