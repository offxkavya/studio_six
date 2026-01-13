import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus('idle'), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus('idle'), 5000);
            });
    };

    return (
        <section id="contact" className="py-20 bg-black/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="text-purple-500">Work Together</span></h2>
                    <p className="text-gray-400 text-lg">Ready to transform your digital presence?</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                                        <Mail />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Email</div>
                                        <div>hellow.studiosixx@gmail.com</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                                        <Phone />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Phone</div>
                                        <div>+91 7737507540</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                                        <MapPin />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500">Office</div>
                                        <div>Delhi, India</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        ref={form}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                        onSubmit={sendEmail}
                    >
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">First Name</label>
                                <input name="first_name" type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-600" placeholder="Enter your first name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Last Name</label>
                                <input name="last_name" type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-600" placeholder="Enter your last name" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Email</label>
                                <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-600" placeholder="Enter your email" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Phone Number</label>
                                <input name="phone" type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-purple-500 transition-colors placeholder:text-gray-600" placeholder="Enter your phone number" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Message</label>
                            <textarea name="message" rows="4" required className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-purple-500 transition-colors" placeholder="Tell us about your project..." />
                        </div>

                        <button
                            disabled={status === 'sending'}
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {status === 'sending' ? (
                                'Sending...'
                            ) : status === 'success' ? (
                                <>Message Sent! <CheckCircle2 className="w-4 h-4" /></>
                            ) : status === 'error' ? (
                                <>Error Sending <AlertCircle className="w-4 h-4" /></>
                            ) : (
                                <>Send Message <Send className="w-4 h-4" /></>
                            )}
                        </button>

                        {status === 'success' && (
                            <p className="text-green-400 text-sm text-center">Thank you! Your message has been sent successfully.</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-400 text-sm text-center">Something went wrong. Please try again later.</p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
