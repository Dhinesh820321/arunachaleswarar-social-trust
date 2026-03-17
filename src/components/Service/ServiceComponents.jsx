import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Heart, Users, Calendar, MapPin } from 'lucide-react';

export const ServiceHero = ({ title, tagline, heroImage, icon: Icon }) => (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax-like effect */}
        <div className="absolute inset-0">
            <img
                src={heroImage}
                alt={title}
                className="w-full h-full object-cover"
                onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop';
                    e.target.onerror = null;
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/25 backdrop-blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 text-center text-white">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center p-5 bg-white/10 backdrop-blur-xl rounded-[2rem] mb-8 border border-white/20 shadow-2xl"
            >
                <Icon className="w-12 h-12 text-blue-300" />
            </motion.div>
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight drop-shadow-2xl"
            >
                {title}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-3xl text-white max-w-3xl mx-auto font-bold leading-relaxed drop-shadow-lg"
            >
                {tagline}
            </motion.p>
        </div>

    </section>
);

export const ServiceContent = ({ aboutDesc, quote, quoteAuthor }) => (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="inline-block px-4 py-1.5 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-600 font-bold text-sm tracking-widest uppercase">
                        Mission Overview
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                        Working Towards A <span className="text-blue-600">Unified Future</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                        {aboutDesc}
                    </p>
                    <div className="p-8 bg-white rounded-[2rem] border-l-8 border-blue-600 shadow-xl italic text-slate-700 text-lg relative">
                        <span className="absolute -top-4 -left-2 text-7xl text-blue-100 font-serif opacity-50">"</span>
                        {quote || "We believe that together, we can empower communities and build a legacy of hope and prosperity."}
                        <footer className="mt-4 font-bold text-slate-900 not-italic">— {quoteAuthor || "Trust Chairperson"}</footer>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                        <img
                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                            alt="Social Support"
                            className="w-full aspect-[4/5] object-cover"
                            onError={(e) => {
                                e.target.src = 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop';
                                e.target.onerror = null;
                            }}
                        />
                    </div>
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600 rounded-[2rem] -z-10 animate-pulse opacity-20"></div>
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-600 rounded-full -z-10 blur-3xl opacity-20"></div>
                </motion.div>
            </div>
        </div>
    </section>
);

export const ImpactStats = ({ stats }) => (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {stats.map((stat, idx) => {
                    const StatIcon = stat.icon;
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-center group"
                        >
                            <div className="w-24 h-24 mx-auto bg-white/5 rounded-[2rem] border border-white/10 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-all duration-500 transform group-hover:-translate-y-2">
                                <StatIcon className="w-10 h-10 text-blue-400 group-hover:text-white" />
                            </div>
                            <h3 className="text-5xl md:text-6xl font-black text-white mb-3 tracking-tight">{stat.value}</h3>
                            <p className="text-blue-200 font-bold text-lg uppercase tracking-widest">{stat.label}</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </section>
);

export const ActivitySection = ({ activities }) => (
    <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-24 max-w-3xl mx-auto">
                <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">What We Do</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">Our Core Activities & Grassroot Programs</h3>
                <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-32">
                {activities.map((activity, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}
                    >
                        <div className="w-full lg:w-1/2">
                            <div className="relative group">
                                <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                                    <img
                                        src={activity.image || "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=2026&auto=format&fit=crop"}
                                        alt={activity.title}
                                        className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-700"
                                        onError={(e) => {
                                            e.target.src = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop';
                                            e.target.onerror = null;
                                        }}
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl -z-10 group-hover:bg-blue-600/20 transition-colors"></div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 space-y-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 font-black text-2xl">
                                0{idx + 1}
                            </div>
                            <h4 className="text-3xl md:text-4xl font-bold text-slate-900">{activity.title}</h4>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                {activity.description}
                            </p>
                            <ul className="space-y-4 pt-4">
                                {activity.points && activity.points.map((point, pIdx) => (
                                    <li key={pIdx} className="flex items-center gap-4 text-slate-700 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                        </div>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export const ServiceGallery = ({ images }) => (
    <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-20">
                <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Visual Journey</h2>
                <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Capturing Our Impact</h3>
                <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {images.map((img, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="break-inside-avoid rounded-[2rem] overflow-hidden shadow-lg group relative cursor-pointer"
                    >
                        <img
                            src={img.url}
                            alt={img.alt}
                            className="w-full object-cover group-hover:scale-105 transition-transform duration-700 hover:rotate-1"
                            onError={(e) => {
                                e.target.src = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop';
                                e.target.onerror = null;
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                            <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-lg mb-3 uppercase tracking-tighter">Activity</span>
                                <h5 className="text-white font-bold text-xl">{img.alt}</h5>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export const CallToAction = ({ title, desc }) => (
    <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-blue-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl transform -translate-y-16"
            >
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[100px] -ml-20 -mb-20"></div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
                        {title || "Ready to Join Our Mission Today?"}
                    </h2>
                    <p className="text-xl md:text-2xl text-blue-100 mb-14 leading-relaxed font-medium">
                        {desc || "Every step you take with us helps bring a smile to someone's face. Whether you donate your time or resources, you're making a real difference."}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                        <Link to="/contact" className="w-full sm:w-auto px-12 py-5 bg-white text-blue-600 font-black rounded-full shadow-2xl hover:shadow-white/20 transition-all transform hover:-translate-y-1 text-lg flex items-center justify-center gap-3 group">
                            Donate Now <Heart className="w-6 h-6 fill-blue-600 group-hover:scale-125 transition-transform" />
                        </Link>
                        <Link to="/contact" className="w-full sm:w-auto px-12 py-5 border-2 border-white/30 text-white font-black rounded-full hover:bg-white/10 transition-all text-lg flex items-center justify-center gap-3">
                            <Users className="w-6 h-6" /> Become a Volunteer
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);
