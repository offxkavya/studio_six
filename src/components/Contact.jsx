import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, Star } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulating 
        setTimeout(() => setStatus('success'), 1500);
    };

    return (
        <section id="contact" className="py-32 bg-surface-black text-white relative rounded-t-[50px] -mt-10 z-30">
            <div className="container mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Left: Info */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
                            <Star className="w-3 h-3 text-brand-pink" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Connect</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                            Launch Your<br /><span className="text-gray-500">Legacy.</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-12">
                            Ready to transcend the ordinary? We're the architects of your digital future.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Email</div>
                                    <div className="text-lg font-bold">hellow.studiosixx@gmail.com</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Phone</div>
                                    <div className="text-lg font-bold">+91 7737507540</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-white text-black p-10 md:p-14 rounded-[40px]">
                        <form ref={form} onSubmit={sendEmail} className="space-y-8">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">First Name</label>
                                    <textarea className="hidden" name="dummy" /> {/* Prevent styling issues if any */}
                                    <input required type="text" placeholder="John" className="w-full bg-gray-50 border-none rounded-2xl p-4 font-semibold focus:ring-2 focus:ring-brand-blue outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Last Name</label>
                                    <input required type="text" placeholder="Doe" className="w-full bg-gray-50 border-none rounded-2xl p-4 font-semibold focus:ring-2 focus:ring-brand-blue outline-none" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Email</label>
                                <input required type="email" placeholder="john@example.com" className="w-full bg-gray-50 border-none rounded-2xl p-4 font-semibold focus:ring-2 focus:ring-brand-blue outline-none" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-2">Vision</label>
                                <textarea required rows="4" placeholder="Tell us about the project..." className="w-full bg-gray-50 border-none rounded-2xl p-4 font-semibold focus:ring-2 focus:ring-brand-blue outline-none resize-none" />
                            </div>

                            <button
                                disabled={status === 'sending'}
                                className="w-full py-5 rounded-2xl bg-black text-white font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                            >
                                {status === 'sending' ? (
                                    <> <Loader2 className="w-5 h-5 animate-spin" /> Sending </>
                                ) : status === 'success' ? (
                                    <> <CheckCircle2 className="w-5 h-5 text-green-400" /> Sent! </>
                                ) : (
                                    <> Send Message <Send className="w-4 h-4" /> </>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
