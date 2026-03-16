import React from 'react';
import { motion } from 'framer-motion';
import { Heart, GraduationCap, Users, Sprout, Briefcase, Shovel, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroImageSlider from '../components/Hero/HeroImageSlider';
import ServicesAutoSlider from '../components/Service/ServicesAutoSlider';

const Hero = () => {
    return (
        <section className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-slate-900">
            <HeroImageSlider />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-100 font-semibold mb-8 backdrop-blur-md"
                >
                    <Heart className="w-5 h-5 fill-blue-500 text-blue-500" />
                    Empowering Communities for a Better Tomorrow
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-extrabold text-white mb-8 leading-[1.1]"
                >
                    Building a Brighter <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                        Future for Everyone
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-slate-200 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-medium drop-shadow-lg"
                >
                    Arunachaleshwarar Educational & Social Development Trust is committed to driving meaningful change through education, empowerment, and sustainable social initiatives.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                    <Link to="/about" className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 group">
                        Learn Our Story <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/contact" className="px-10 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all backdrop-blur-md flex items-center justify-center gap-2">
                        Get Involved
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

const StatCard = ({ icon: Icon, value, label, color }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="glass-card p-8 rounded-3xl text-center flex flex-col items-center group overflow-hidden relative"
    >
        <div className={`absolute -top-4 -right-4 w-24 h-24 bg-${color}-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform`}></div>
        <div className={`p-4 bg-${color}-500/10 rounded-2xl mb-4 group-hover:bg-${color}-500 group-hover:text-white transition-all`}>
            <Icon className={`w-10 h-10`} />
        </div>
        <div className="text-4xl font-extrabold text-slate-900 mb-2">{value}+</div>
        <div className="text-slate-500 font-medium uppercase tracking-wider text-sm">{label}</div>
    </motion.div>
);

const Home = () => {
    return (
        <div>
            <Hero />
            <ServicesAutoSlider />

            {/* About Brief */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="w-full aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-[3rem] overflow-hidden rotate-3 relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                                alt="Social Work"
                                className="w-full h-full object-cover -rotate-3 scale-110 hover:scale-100 transition-transform duration-700"
                            />
                        </div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-indigo-600/10 rounded-full blur-3xl"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">About the Trust</h2>
                            <h3 className="text-4xl font-extrabold text-slate-900 leading-tight">
                                Dedicated to Social Upliftment & Educational Excellence
                            </h3>
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Arunachaleshwarar Educational & Social Development Trust was born from a vision of a society where every individual has the opportunity to thrive. Since our founding, we have been working tirelessly at the grassroots level to address critical social issues.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                "Established Trust with Pure Vision",
                                "Community Focused Initiatives",
                                "Educational Support Programs",
                                "Transperant & Impactful Work"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-center">
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                    </div>
                                    <span className="font-semibold text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>
                        <Link to="/about" className="btn-primary inline-block">
                            Learn More About Us
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section-padding bg-slate-50">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Impact</h2>
                    <h3 className="text-4xl font-extrabold text-slate-900">Making a Tangible Difference</h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <StatCard icon={GraduationCap} value="5000" label="Students Impacted" color="blue" />
                    <StatCard icon={Users} value="1200" label="Women Empowered" color="pink" />
                    <StatCard icon={Sprout} value="800" label="Farmers Supported" color="green" />
                    <StatCard icon={Briefcase} value="300" label="Youth Skilled" color="indigo" />
                </div>
            </section>

            {/* Mission & Vision cards omitted for brevity in Preview, will add more details if needed, let's keep it compact */}


            {/* CTA Section */}
            <section className="section-padding py-0">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 italic">Ready to Make an Impact?</h2>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-12">
                            Join our mission to create a more equitable and prosperous society. Your support can change lives.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/contact" className="px-10 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-xl hover:shadow-blue-900/40 transition-all transform hover:-translate-y-1">
                                Donate Now
                            </Link>
                            <Link to="/contact" className="px-10 py-4 border-2 border-white/30 hover:bg-white/10 text-white font-bold rounded-full transition-all">
                                Become a Volunteer
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>

            <div className="h-20"></div>
        </div>
    );
};

export default Home;
