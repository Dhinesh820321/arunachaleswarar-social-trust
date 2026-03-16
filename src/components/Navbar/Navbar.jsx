import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import trustLogo from '../../assets/trust-logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Trustees', path: '/trustees' },
        {
            name: 'Services',
            path: '/services',
            dropdown: [
                { name: 'Child Education', path: '/services/child-education' },
                { name: 'Agriculture Development', path: '/services/agriculture-development' },
                { name: 'Women Empowerment', path: '/services/women-empowerment' },
                { name: 'Unemployment Youth', path: '/services/unemployment-youth' },
                { name: 'Rural Women Support', path: '/services/rural-women-support' },
                { name: 'Helping Hands', path: '/services/helping-hands' },
                { name: 'Human Rights', path: '/services/human-rights' },
            ]
        },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4 shadow-lg' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 md:gap-3 lg:gap-4 group shrink-0 min-w-0">
                    <div className="flex items-center justify-center overflow-hidden w-14 h-14 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-18 lg:h-18 shrink-0">
                        <img
                            src={trustLogo}
                            alt="Arunachaleshwarar Trust Logo"
                            className="w-full h-full object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                        <span className="font-bold text-sm md:text-lg lg:text-xl leading-tight text-slate-900 transition-colors duration-300 truncate">
                            Arunachaleshwarar
                        </span>
                        <span className="text-[9px] md:text-[11px] lg:text-xs font-semibold text-blue-600 tracking-wider uppercase leading-tight truncate">
                            Educational & Social Trust
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group h-full flex items-center"
                            onMouseEnter={() => link.dropdown && setIsServicesOpen(true)}
                            onMouseLeave={() => link.dropdown && setIsServicesOpen(false)}
                        >
                            <Link
                                to={link.path}
                                className={`font-semibold text-sm xl:text-base flex items-center gap-1 transition-colors hover:text-blue-600 py-2 ${location.pathname.startsWith(link.path) && link.path !== '/' || location.pathname === link.path
                                    ? 'text-blue-600'
                                    : 'text-slate-700'
                                    }`}
                            >
                                {link.name}
                                {link.dropdown && (
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                )}
                            </Link>

                            {/* Dropdown Menu */}
                            {link.dropdown && (
                                <AnimatePresence>
                                    {isServicesOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 15 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-white/20 overflow-hidden"
                                        >
                                            <div className="py-2 flex flex-col">
                                                {link.dropdown.map((subLink) => (
                                                    <Link
                                                        key={subLink.path}
                                                        to={subLink.path}
                                                        className={`px-4 py-2.5 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600 ${location.pathname === subLink.path ? 'text-blue-600 bg-blue-50/50' : 'text-slate-700'
                                                            }`}
                                                        onClick={() => setIsServicesOpen(false)}
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                    <Link to="/contact" className="btn-primary py-2 px-6 text-sm xl:text-base font-semibold whitespace-nowrap">
                        Donate Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 -mr-2 text-slate-700 hover:text-blue-600 transition-colors shrink-0"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6 md:w-8 md:h-8" /> : <Menu className="w-6 h-6 md:w-8 md:h-8" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden glass-card border-none rounded-none overflow-hidden"
                    >
                        <div className="px-4 py-8 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col">
                                    {link.dropdown ? (
                                        <>
                                            <div className="flex items-center justify-between py-2">
                                                <Link
                                                    to={link.path}
                                                    className={`font-bold text-lg md:text-xl transition-colors hover:text-blue-600 ${location.pathname.startsWith(link.path) && link.path !== '/' || location.pathname === link.path
                                                        ? 'text-blue-600'
                                                        : 'text-slate-700'
                                                        }`}
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {link.name}
                                                </Link>
                                            </div>
                                            <div className="pl-4 flex flex-col gap-2 border-l-2 border-slate-100 ml-2 mt-2">
                                                {link.dropdown.map((subLink) => (
                                                    <Link
                                                        key={subLink.path}
                                                        to={subLink.path}
                                                        className={`text-base font-semibold transition-colors hover:text-blue-600 py-1 ${location.pathname === subLink.path ? 'text-blue-600' : 'text-slate-600'
                                                            }`}
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            className={`font-bold text-lg md:text-xl py-2 transition-colors hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-600' : 'text-slate-700'
                                                }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 mt-2 border-t border-slate-100">
                                <Link
                                    to="/contact"
                                    className="btn-primary w-full max-w-sm text-center py-3 text-lg block mx-auto"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Donate Now
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
