import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Heart, Shield, Users } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Page Header */}
            <section className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6"
                    >
                        About Our <span className="text-blue-500">Trust</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        A legacy of service, a commitment to growth, and a passion for people.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl shadow-xl mt-10" alt="About 1" />
                            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl shadow-xl" alt="About 2" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-white border-8 border-slate-50 shadow-2xl">
                            <Heart className="w-12 h-12 fill-current" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-extrabold text-slate-900 italic">Our Story of Change</h2>
                        <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                            <p>
                                Arunachaleshwarar Educational & Social Development Trust was founded on the belief that social progress is only possible when we empower the core of our community. We started as a small group of passionate individuals and have grown into a dedicated organization making impacts across various sectors.
                            </p>
                            <p>
                                Our approach is holistic – we don't just provide aid; we build capabilities. From classrooms to farmlands, our initiatives are designed to create self-sustaining systems of growth and prosperity.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6">
                            {[
                                { label: 'Founded', value: '2015' },
                                { label: 'Volunteers', value: '150+' },
                                { label: 'Areas', value: '20+' },
                            ].map((stat, i) => (
                                <div key={i} className="glass-card p-4 text-center rounded-2xl">
                                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-slate-900 text-white rounded-[4rem] mx-4 my-20">
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm"
                    >
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8">
                            <Target className="w-10 h-10" />
                        </div>
                        <h3 className="text-3xl font-bold mb-6 italic">Our Mission</h3>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            To drive sustainable social development by providing education, health support, and economic opportunities to the underprivileged, with a special focus on children, women, and the rural workforce.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm"
                    >
                        <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8">
                            <Eye className="w-10 h-10" />
                        </div>
                        <h3 className="text-3xl font-bold mb-6 italic">Our Vision</h3>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            A society where every individual, regardless of their background, has access to quality education, equal opportunities, and the resources to live a life of dignity and purpose.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding">
                <div className="text-center mb-16">
                    <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">What We Stand For</h2>
                    <h3 className="text-4xl font-extrabold text-slate-900 border-b-4 border-blue-600 inline-block pb-2">Our Core Values</h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: Award, title: 'Integrity', desc: 'Maintain the highest ethical standards in all actions.' },
                        { icon: Users, title: 'Inclusivity', desc: 'Embracing diversity and ensuring equal access for all.' },
                        { icon: Heart, title: 'Compassion', desc: 'Acting with empathy and kindness in everything we do.' },
                        { icon: Shield, title: 'Transparency', desc: 'Total accountability and openness in our trust operations.' },
                    ].map((value, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="glass-card p-8 rounded-3xl text-center group"
                        >
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <value.icon className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                            <p className="text-slate-500 text-sm">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
