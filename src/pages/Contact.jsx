import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Mail, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
    const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');
        setTimeout(() => {
            setFormStatus('success');
            setTimeout(() => setFormStatus('idle'), 5000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Our Location",
            details: ["3/187 , Nethaji Nagar", "Y-Othakkadai, Tamil Nadu, India"],
            color: "blue"
        },
        {
            icon: Phone,
            title: "Call Us",
            details: ["+91 63856 53415", "+91 91503 43415"],
            color: "indigo"
        },
        {
            icon: MessageCircle,
            title: "WhatsApp",
            details: ["+91 91503 43415"],
            color: "green"
        },
        {
            icon: Mail,
            title: "Email Support",
            details: ["reach@arunachaleshwarar.trust"],
            color: "rose"
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <section className="bg-slate-900 pt-32 pb-20 text-center relative overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]"></div>
                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6"
                    >
                        Get In <span className="text-blue-500">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Have questions or want to volunteer? We'd love to hear from you.
                    </motion.p>
                </div>
            </section>

            <section className="section-padding">
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Contact Details */}
                    <div className="lg:col-span-5 space-y-8">
                        <h2 className="text-3xl font-extrabold text-slate-900 italic">Contact Information</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            {contactInfo.map((info, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass-card p-6 rounded-3xl flex items-start gap-4 border-transparent hover:border-blue-500/20 transition-all shadow-md"
                                >
                                    <div className={`p-3 bg-${info.color}-500/10 rounded-2xl text-${info.color}-600`}>
                                        <info.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">{info.title}</h4>
                                        {info.details.map((text, idx) => (
                                            <p key={idx} className="text-slate-500 text-sm">{text}</p>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Map Placeholder/Iframe */}
                        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-80 relative border-4 border-white glass-card">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.914238713444!2d80.2076043!3d13.1163456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52643a6774483f%3A0x8673323083fcc40a!2sArunachaleshwarar%20Temple!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>

                            <h3 className="text-3xl font-extrabold text-slate-900 mb-8 italic">Send us a Message</h3>

                            {formStatus === 'success' ? (
                                <div className="text-center py-20 space-y-6">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-12 h-12" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-900">Message Sent Successfully!</h4>
                                    <p className="text-slate-500">Thank you for reaching out. We will get back to you shortly.</p>
                                    <button
                                        onClick={() => setFormStatus('idle')}
                                        className="text-blue-600 font-bold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 ml-1 italic">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors"
                                                placeholder="Dhinesh"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 ml-1 italic">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors"
                                                placeholder="dhinesh@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1 italic">Subject</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors"
                                            placeholder="How can we help?"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1 italic">Your Message</label>
                                        <textarea
                                            required
                                            rows="5"
                                            className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors"
                                            placeholder="Write your message here..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus === 'sending'}
                                        className={`btn-primary w-full flex items-center justify-center gap-3 py-4 text-lg ${formStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {formStatus === 'sending' ? 'Sending...' : (
                                            <>
                                                Send Message <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="h-20"></div>
        </div>
    );
};

export default Contact;
