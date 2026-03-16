import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingContactButtons = () => {
    return (
        <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-4">
            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/919150343415"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-2xl hover:bg-green-600 transition-colors flex items-center justify-center group relative cursor-pointer"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="w-7 h-7 fill-current" />

                {/* Tooltip */}
                <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-slate-700">
                    Chat with us
                    {/* Triangle pointing right */}
                    <span className="absolute top-1/2 -right-1 mt-[-4px] border-4 border-transparent border-l-slate-900"></span>
                </span>
            </motion.a>

            {/* Call Button */}
            <motion.a
                href="tel:+91 6385653415"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-2xl hover:bg-blue-700 transition-colors flex items-center justify-center group relative cursor-pointer"
                aria-label="Call Us"
            >
                <Phone className="w-6 h-6 fill-current" />

                {/* Tooltip */}
                <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border border-slate-700">
                    Call us now
                    {/* Triangle pointing right */}
                    <span className="absolute top-1/2 -right-1 mt-[-4px] border-4 border-transparent border-l-slate-900"></span>
                </span>
            </motion.a>
        </div>
    );
};

export default FloatingContactButtons;
