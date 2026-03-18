import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '../../data/servicesData';

const ServicesGrid = () => {
    // Show ONLY 6 services (excluding "Human Rights" based on the list provided)
    const homeServices = services.slice(0, 6);

    return (
        <section className="section-padding bg-slate-50">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
                >
                    Our Key Initiatives
                </motion.h2>
                <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight"
                >
                    Empowering Lives Through <span className="text-primary">Action</span>
                </motion.h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {homeServices.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>

            <div className="mt-16 text-center">
                <Link to="/services" className="btn-primary inline-flex items-center gap-2 group">
                    Explore All Services 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    );
};

const ServiceCard = ({ service, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            <Link to={service.path} className="block group h-full">
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 h-full flex flex-col group-hover:-translate-y-2">
                    {/* Image Section */}
                    <div className="h-64 relative overflow-hidden">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        {/* Service Icon overlay */}
                        <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-primary shadow-lg transform group-hover:rotate-12 transition-transform">
                            <service.icon className="w-6 h-6" />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col flex-grow">
                        <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                            {service.title}
                        </h4>
                        <p className="text-slate-600 text-base leading-relaxed mb-6 font-medium">
                            {service.desc}
                        </p>
                        <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm">
                            Learn More 
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ServicesGrid;
