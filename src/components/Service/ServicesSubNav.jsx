import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    GraduationCap, 
    Sprout, 
    Users, 
    Briefcase, 
    HandHeart, 
    Heart, 
    ShieldCheck,
    LayoutGrid
} from 'lucide-react';

const serviceLinks = [
    { name: 'Child Education', path: '/services/child-education', icon: GraduationCap },
    { name: 'Agriculture Development', path: '/services/agriculture-development', icon: Sprout },
    { name: 'Women Empowerment', path: '/services/women-empowerment', icon: Users },
    { name: 'Unemployment Youth', path: '/services/unemployment-youth', icon: Briefcase },
    { name: 'Rural Women Support', path: '/services/rural-women-support', icon: HandHeart },
    { name: 'Helping Hands', path: '/services/helping-hands', icon: Heart },
    { name: 'Human Rights', path: '/services/human-rights', icon: ShieldCheck },
];

const ServicesSubNav = () => {
    const location = useLocation();
    
    // Only show on /services and sub-pages
    if (!location.pathname.startsWith('/services')) return null;

    return (
        <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-20 z-40 shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-4 md:px-0">
                <div className="flex items-center overflow-x-auto no-scrollbar scroll-smooth gap-2 md:gap-4 py-4 md:justify-center touch-pan-x">
                    {/* Overview Link */}
                    <NavLink
                        to="/services"
                        end
                        className={({ isActive }) => 
                            `flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                                isActive 
                                ? 'bg-primary text-white shadow-lg shadow-primary/25' 
                                : 'text-slate-600 hover:bg-primary/5 hover:text-primary'
                            }`
                        }
                    >
                        <LayoutGrid className="w-4 h-4" />
                        Overview
                    </NavLink>
                    
                    {/* Vertical Divider */}
                    <div className="w-px h-6 bg-slate-200 shrink-0"></div>

                    {/* Service Links */}
                    {serviceLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => 
                                `flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                                    isActive 
                                    ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105' 
                                    : 'text-slate-600 hover:bg-primary/5 hover:text-primary'
                                }`
                            }
                        >
                            <link.icon className="w-4 h-4" />
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ServicesSubNav;
