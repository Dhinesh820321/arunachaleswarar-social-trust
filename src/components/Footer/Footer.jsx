import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import trustLogo from '../../assets/trust-logo.png';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* About Section */}
                <div className="space-y-6">
                    <Link to="/" className="flex items-center gap-3 md:gap-4 group">
                        <div className="flex items-center justify-center overflow-hidden w-12 h-12 shrink-0 bg-white rounded-xl p-1 shadow-md">
                            <img
                                src={trustLogo}
                                alt="Arunachaleshwarar Trust Logo"
                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="font-bold text-white text-lg leading-none">
                                Arunachaleshwarar
                            </span>
                            <span className="text-[10px] sm:text-[11px] font-semibold text-primary-light tracking-wider uppercase mt-1">
                                Educational & Social Trust
                            </span>
                        </div>
                    </Link>
                    <p className="text-sm leading-relaxed text-slate-400">
                        Dedicated to community empowerment and sustainable social development since inception. We strive to create a better future for all.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                            <Youtube className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
                    <ul className="space-y-4 text-sm">
                        <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link to="/trustees" className="hover:text-primary transition-colors">Board of Trustees</Link></li>
                        <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
                        <li><Link to="/gallery" className="hover:text-primary transition-colors">Activity Gallery</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">Our Focus</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li>Child Education</li>
                        <li>Women Empowerment</li>
                        <li>Agricultural Support</li>
                        <li>Youth Training</li>
                        <li>Human Rights</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                    <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
                    <div className="flex gap-3 text-sm">
                        <MapPin className="text-primary w-5 h-5 shrink-0" />
                        <span>3/187 , Nethaji Nagar,Y-Othakkadai<br />Tamil Nadu, India.</span>
                    </div>
                    <div className="flex gap-3 text-sm border-t border-slate-800 pt-4">
                        <Phone className="text-primary w-5 h-5 shrink-0" />
                        <span>+91  63856 53415</span>
                    </div>
                    <div className="flex gap-3 text-sm border-t border-slate-800 pt-4">
                        <Mail className="text-primary w-5 h-5 shrink-0" />
                        <span>reach@arunachaleshwarar.trust</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                <p>&copy; {new Date().getFullYear()} Arunachaleshwarar Educational & Social Development Trust. All Rights Reserved.</p>
                <p className="mt-2">Designed with ❤️ for Social Good.</p>
            </div>
        </footer>
    );
};

export default Footer;
