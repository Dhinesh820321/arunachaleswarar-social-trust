import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/servicesData';
import { ArrowRight } from 'lucide-react';

const ServicesAutoSlider = () => {
    // Duplicate services multiple times to ensure enough items for the loop
    const doubledServices = [...services, ...services, ...services];

    return (
        <section className="py-20 bg-slate-50 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Services</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                            Areas of Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Impact</span>
                        </h3>
                    </div>
                    <Link to="/services" className="group flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md border border-slate-100 transition-all">
                        View All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            <div className="slider-container relative w-full overflow-hidden py-10">
                {/* Gradient Masks for smooth fade on sides */}
                <div className="absolute inset-y-0 left-0 w-20 md:w-60 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-20 md:w-60 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

                <div className="flex w-max animate-scroll hover:[animation-play-state:paused] gap-8 px-4">
                    {doubledServices.map((service, index) => (
                        <div key={index} className="w-[350px] shrink-0">
                            <ServiceSliderCard service={service} />
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-100% / 3)); }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
            `}} />

            <div className="mt-8 flex justify-center lg:hidden">
                <p className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-slate-200"></span>
                    Scroll left to explore
                    <span className="w-8 h-[1px] bg-slate-200"></span>
                </p>
            </div>
        </section>
    );
};

const ServiceSliderCard = ({ service }) => {
    return (
        <Link to={service.path} className="block group h-full">
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 h-full flex flex-col group-hover:-translate-y-2">
                {/* Image Section */}
                <div className="h-56 relative overflow-hidden">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>

                    {/* Floating Icon */}
                    <div className={`absolute bottom-4 left-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                        <service.icon className="w-7 h-7" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 pb-10 flex flex-col flex-grow">
                    <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {service.title}
                    </h4>
                    <p className="text-slate-600 text-base leading-relaxed mb-8 line-clamp-3">
                        {service.desc}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                        <span className="text-blue-600 font-bold text-sm flex items-center gap-2">
                            Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ServicesAutoSlider;
