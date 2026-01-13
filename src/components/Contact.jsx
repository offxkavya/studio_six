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
            phone: phone || formData.get('phone'),
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

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-white">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-indigo-50/60 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-1/4 -right-1/4 w-[900px] h-[900px] bg-blue-50/50 rounded-full blur-[140px]"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-24"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-8 text-indigo-600 text-sm font-semibold"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>Get in Touch</span>
                    </motion.div>

                    <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-gray-900 leading-tight">
                        Let's <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">Work Together</span>
                    </h2>
                    <p className="text-gray-500 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
                        Ready to transform your vision into reality? We're just a message away from creating something extraordinary.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 max-w-7xl mx-auto">
                    {/* Contact Info Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-5 space-y-10"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[40px] blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
                            <div className="relative bg-white border border-gray-100 p-12 rounded-[40px] shadow-2xl shadow-gray-200/50">
                                <h3 className="text-4xl font-black mb-12 text-gray-900 tracking-tight">Contact <span className="text-indigo-600">Details</span></h3>

                                <div className="space-y-12">
                                    {[
                                        { icon: <Mail className="w-7 h-7" />, label: 'Email', value: 'hellow.studiosixx@gmail.com', color: 'bg-indigo-50 text-indigo-600' },
                                        { icon: <Phone className="w-7 h-7" />, label: 'Phone', value: '+91 7737507540', color: 'bg-blue-50 text-blue-600' },
                                        { icon: <MapPin className="w-7 h-7" />, label: 'Office', value: 'Delhi, India', color: 'bg-cyan-50 text-cyan-600' }
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ x: 10 }}
                                            className="flex items-center gap-8 group/item"
                                        >
                                            <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center transition-all group-hover/item:scale-110 group-hover/item:shadow-lg shadow-sm border border-transparent group-hover/item:border-current/10`}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <div className="text-xs uppercase tracking-widest text-gray-400 font-black mb-1.5">{item.label}</div>
                                                <div className="text-xl text-gray-900 font-bold group-hover/item:text-indigo-600 transition-colors">{item.value}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Modern Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-7"
                    >
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="bg-white border border-gray-100 p-10 md:p-14 rounded-[40px] shadow-2xl shadow-gray-200/50 space-y-10"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-sm font-black text-gray-500 ml-1 uppercase tracking-wider">First Name</label>
                                    <input
                                        name="first_name"
                                        type="text"
                                        required
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-6 focus:outline-none focus:ring-2 focus:ring-indigo-600/10 focus:border-indigo-600 transition-all placeholder:text-gray-400 text-gray-900 font-medium"
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-sm font-black text-gray-500 ml-1 uppercase tracking-wider">Last Name</label>
                                    <input
                                        name="last_name"
                                        type="text"
                                        required
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-6 focus:outline-none focus:ring-2 focus:ring-indigo-600/10 focus:border-indigo-600 transition-all placeholder:text-gray-400 text-gray-900 font-medium"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-sm font-black text-gray-500 ml-1 uppercase tracking-wider">Email Address</label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-6 focus:outline-none focus:ring-2 focus:ring-indigo-600/10 focus:border-indigo-600 transition-all placeholder:text-gray-400 text-gray-900 font-medium"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-sm font-black text-gray-500 ml-1 uppercase tracking-wider">Phone Number</label>
                                    <PhoneInput
                                        country={'in'}
                                        value={phone}
                                        onChange={(val) => setPhone(val)}
                                        inputProps={{
                                            name: 'phone',
                                            required: true,
                                        }}
                                        containerStyle={{
                                            border: 'none',
                                            width: '100%',
                                        }}
                                        inputStyle={{
                                            width: '100%',
                                            backgroundColor: '#f9fafb',
                                            border: '1px solid #f3f4f6',
                                            borderRadius: '1rem',
                                            padding: '1.5rem',
                                            paddingLeft: '4.5rem',
                                            color: '#111827',
                                            fontSize: '1rem',
                                            height: '74px',
                                            fontWeight: '500',
                                            transition: 'all 0.3s',
                                        }}
                                        buttonStyle={{
                                            backgroundColor: 'transparent',
                                            border: 'none',
                                            borderRadius: '1rem 0 0 1rem',
                                            paddingLeft: '1rem',
                                            zIndex: 10,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '60px'
                                        }}
                                        dropdownStyle={{
                                            backgroundColor: '#fff',
                                            color: '#111827',
                                            border: '1px solid #f3f4f6',
                                            borderRadius: '1rem',
                                            padding: '0.5rem',
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                            zIndex: 50
                                        }}
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-sm font-black text-gray-500 ml-1 uppercase tracking-wider">Your Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    required
                                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-6 focus:outline-none focus:ring-2 focus:ring-indigo-600/10 focus:border-indigo-600 transition-all placeholder:text-gray-400 text-gray-900 font-medium resize-none"
                                    placeholder="Tell us about your project"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                disabled={status === 'sending'}
                                className="w-full relative group overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 text-white font-black py-6 rounded-2xl shadow-xl shadow-indigo-200 flex items-center justify-center gap-4 disabled:opacity-50"
                            >
                                <AnimatePresence mode="wait">
                                    {status === 'sending' ? (
                                        <motion.div
                                            key="sending"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span className="text-lg">Transmitting...</span>
                                        </motion.div>
                                    ) : status === 'success' ? (
                                        <motion.div
                                            key="success"
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="flex items-center gap-3"
                                        >
                                            <CheckCircle2 className="w-7 h-7" />
                                            <span className="text-lg">Sent Successfully!</span>
                                        </motion.div>
                                    ) : status === 'error' ? (
                                        <motion.div
                                            key="error"
                                            initial={{ x: 10, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            className="flex items-center gap-3"
                                        >
                                            <AlertCircle className="w-7 h-7" />
                                            <span className="text-lg">Error Sending</span>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="idle"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="flex items-center gap-3"
                                        >
                                            <span className="text-lg">Initiate Project</span>
                                            <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
