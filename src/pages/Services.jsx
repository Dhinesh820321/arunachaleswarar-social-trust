import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/servicesData';

const ServiceCard = ({ icon: Icon, title, desc, gradient, path, image, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="group relative h-full flex flex-col"
    >
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 h-full flex flex-col">
            {/* Image Section */}
            <div className="h-64 relative overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>

                {/* Floating Icon */}
                <div className={`absolute bottom-6 left-8 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                    <Icon className="w-8 h-8" />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                    {desc}
                </p>

                <div className="mt-auto">
                    <Link
                        to={path}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-600 transition-all group-hover:shadow-lg group-hover:shadow-blue-200"
                    >
                        Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    </motion.div>
);

const Services = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <section className="bg-slate-900 pt-40 pb-24 text-center relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"></div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 font-semibold mb-6 backdrop-blur-sm"
                    >
                        Our Initiatives
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold text-white mb-8"
                    >
                        Providing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Better Lives</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed"
                    >
                        We are dedicated to creating sustainable impact through our comprehensive range of social development services.
                    </motion.p>
                </div>
            </section>

            {/* Grid */}
            <section className="py-24 md:py-32 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">How We Work</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Development Process</h3>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">A structured approach to ensuring every initiative creates maximum positive impact.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-12"></div>

                        {[
                            { step: "01", title: "Identify", desc: "Pinpointing the most urgent community needs." },
                            { step: "02", title: "Plan", desc: "Creating sustainable, long-term solution models." },
                            { step: "03", title: "Execute", desc: "Implementing programs with local participation." },
                            { step: "04", title: "Measure", desc: "Tracking impact and refining our approach." },
                        ].map((item, i) => (
                            <div key={i} className="relative group">
                                <div className="w-20 h-20 bg-white border-4 border-slate-50 rounded-[2rem] flex items-center justify-center text-3xl font-black text-blue-600 shadow-xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 relative z-10">
                                    {item.step}
                                </div>
                                <h4 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
