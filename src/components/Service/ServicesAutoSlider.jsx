import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/servicesData';
import { ArrowRight } from 'lucide-react';

const ServicesAutoSlider = () => {
    // Duplicate services multiple times to ensure enough items for the loop
    const doubledServices = [...services, ...services, ...services];

    return (
        <section className="py-24 bg-slate-50 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div className="max-w-2xl text-left">
                        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Services</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                            Areas of Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Impact</span>
                        </h3>
                    </div>
                    <Link to="/services" className="group flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors bg-white/80 backdrop-blur-md px-8 py-4 rounded-full shadow-sm hover:shadow-md border border-white/20 transition-all">
                        View All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            <div className="slider-container relative w-full overflow-hidden py-10">
                {/* Gradient Masks for smooth fade on sides */}
                <div className="absolute inset-y-0 left-0 w-20 md:w-60 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-20 md:w-60 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

                {/* The Scrolling Flexbox - Left to Right Animation */}
                <div className="flex w-max animate-scroll-reverse hover:[animation-play-state:paused] gap-8 px-4 md:px-0">
                    {doubledServices.map((service, index) => (
                        <div key={index} className="w-[320px] md:w-[400px] shrink-0">
                            <ServiceSliderCard service={service} />
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scroll-reverse {
                    0% { transform: translateX(calc(-100% / 3)); }
                    100% { transform: translateX(0); }
                }
                .animate-scroll-reverse {
                    animation: scroll-reverse 50s linear infinite;
                }
                @media (max-width: 768px) {
                    .slider-container {
                        overflow-x: auto;
                        -webkit-overflow-scrolling: touch;
                    }
                    .animate-scroll-reverse {
                        animation: none;
                    }
                }
            `}} />

            <div className="mt-8 flex justify-center lg:hidden">
                <p className="text-slate-400 text-sm flex items-center gap-2 font-medium">
                    <span className="w-8 h-[1px] bg-slate-300"></span>
                    Swipe horizontally to explore
                    <span className="w-8 h-[1px] bg-slate-300"></span>
                </p>
            </div>
        </section>
    );
};

const ServiceSliderCard = ({ service }) => {
    return (
        <Link to={service.path} className="block group h-full px-2">
            <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-white/40 h-full flex flex-col group-hover:-translate-y-3">
                {/* Image Section */}
                <div className="h-64 relative overflow-hidden">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 transition-opacity group-hover:opacity-70"></div>

                    {/* Floating Icon */}
                    <div className={`absolute bottom-6 left-8 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                        <service.icon className="w-7 h-7" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 pb-10 flex flex-col flex-grow">
                    <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {service.title}
                    </h4>
                    <p className="text-slate-600 text-base leading-relaxed mb-8 line-clamp-3 font-medium">
                        {service.desc}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                        <span className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                            Learn More <ArrowRight className="w-4 h-4" />
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ServicesAutoSlider;
