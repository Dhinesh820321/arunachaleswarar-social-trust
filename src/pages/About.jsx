import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield, Users, Award, BookOpen, Sprout, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* 1. About the Trust - Header & Introduction */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/20 via-transparent to-slate-900/50"></div>
                
                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-6 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary-light font-bold mb-6 backdrop-blur-md"
                    >
                        Our Story & Legacy
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-extrabold text-white mb-8"
                    >
                        About the <span className="text-primary">Trust</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed"
                    >
                        Arunachaleshwarar Educational & Social Development Trust is a non-profit organization dedicated to creating a self-reliant and prosperous society through sustainable empowerment.
                    </motion.p>
                </div>
            </section>

            {/* Introduction Detail */}
            <section className="section-padding">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" alt="Trust Activities" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl -z-10"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Purpose and Vision</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Founded with a deep-rooted commitment to social welfare, our trust operates on the principle that true development happens when we address the fundamental needs of the underprivileged.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Our purpose is to bridge the gap between opportunity and those who need it most. We believe in building a future where every child is educated, every woman is empowered, and every farmer is supported to thrive.
                        </p>
                        <div className="flex gap-6 pt-4">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-primary">100%</span>
                                <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Transparency</span>
                            </div>
                            <div className="w-[1px] h-full bg-slate-200"></div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-secondary">8+</span>
                                <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Core Areas</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2 & 3. Mission & Vision */}
            <section className="section-padding bg-slate-50 relative overflow-hidden">
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100 relative group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] transition-transform group-hover:scale-150"></div>
                        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-8">
                            <Target className="w-10 h-10" />
                        </div>
                        <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            To drive sustainable social development by providing education, health support, and economic opportunities to the underprivileged, with a special focus on helping rural communities and supporting holistic growth.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100 relative group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[5rem] transition-transform group-hover:scale-150"></div>
                        <div className="w-20 h-20 bg-secondary/10 rounded-3xl flex items-center justify-center text-secondary mb-8">
                            <Eye className="w-10 h-10" />
                        </div>
                        <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            A society where every individual has access to quality education and resources, achieving long-term social impact and empowering people to live lives of dignity and self-sufficiency.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 4. What We Do */}
            <section className="section-padding">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Core Focus Areas</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">What We Do</h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: GraduationCap, title: 'Child Education', desc: 'Sponsoring schooling and educational resources for rural children.' },
                        { icon: Sprout, title: 'Agriculture Dev', desc: 'Implementing sustainable farming techniques and supporting farmers.' },
                        { icon: Users, title: 'Women Empowerment', desc: 'Vocational training and self-help groups for financial independence.' },
                        { icon: Briefcase, title: 'Youth Support', desc: 'Skill development and job placement assistance for the rural youth.' },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center"
                        >
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 5. Why Choose Us */}
            <section className="section-padding bg-secondary text-white rounded-[4rem] mx-4 my-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl -ml-32 -mb-32"></div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">The Trust Advantage</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold mb-8">Why Choose Us</h3>
                        <div className="space-y-6">
                            {[
                                { title: 'Community-Focused', desc: 'Our initiatives are built from the ground up, starting with real community needs.' },
                                { title: 'Transparent Work', desc: 'Every rupee donated and every hour volunteered is accounted for with total transparency.' },
                                { title: 'Real Impact', desc: 'We don\'t just talk about change; we measure our results through lives transformed.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1">
                                        <CheckCircle2 className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                        <p className="text-slate-300">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="h-40 bg-white/10 rounded-3xl backdrop-blur-sm flex flex-col items-center justify-center text-center p-4">
                                <span className="text-3xl md:text-4xl font-extrabold text-accent">500+</span>
                                <span className="text-xs uppercase font-bold tracking-widest text-slate-300">Projects</span>
                            </div>
                            <div className="h-40 bg-white shadow-2xl rounded-3xl flex flex-col items-center justify-center text-center p-4">
                                <span className="text-3xl md:text-4xl font-extrabold text-secondary">25K+</span>
                                <span className="text-xs uppercase font-bold tracking-widest text-slate-500">Lives Impacted</span>
                            </div>
                        </div>
                        <div className="pt-8">
                            <div className="h-80 bg-primary rounded-3xl flex flex-col items-center justify-center text-center p-4 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                <span className="text-3xl md:text-5xl font-extrabold text-white relative z-10">10Y+</span>
                                <span className="text-xs uppercase font-bold tracking-widest text-white/80 relative z-10">Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Call to Action */}
            <section className="section-padding">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-slate-900 rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Make a Meaningful Difference</h2>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                            Whether you choose to volunteer your time or provide financial support, your contribution moves us one step closer to our vision.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/contact" className="px-10 py-5 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2">
                                <Heart className="w-5 h-5 fill-current" /> Support / Donate
                            </Link>
                            <Link to="/contact" className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2">
                                <Users className="w-5 h-5" /> Become Volunteer
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default About;

