import React from 'react';
import { motion } from 'framer-motion';

const PremiumHero = ({ title, tagline, heroImage, icon: Icon }) => {
    return (
        <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Cinematic Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt={title}
                    className="w-full h-full object-cover select-none transform scale-105"
                    onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop';
                        e.target.onerror = null;
                    }}
                />
                {/* Subtle Cinematic Overlay - NO heavy black shadow */}
                <div className="absolute inset-2 bg-gradient-to-r from-black/50 to-black/20 pointer-events-none"></div>
            </div>

            {/* Extra Premium Touch: Soft gradient glow behind card (Option B) */}
            <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
                <div className="w-[60vw] h-[40vh] bg-white/10 rounded-full blur-[100px] opacity-30 transform -translate-y-10"></div>
            </div>

            {/* Floating Light Particles (Option A - Subtle Cinematic Touch) */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/40 rounded-full z-10"
                    initial={{ 
                        x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 500, 
                        y: typeof window !== 'undefined' ? Math.random() * 600 : 300,
                        opacity: 0 
                    }}
                    animate={{ 
                        y: [0, -60, 0],
                        opacity: [0, 0.4, 0],
                        scale: [1, 1.5, 1]
                    }}
                    transition={{ 
                        duration: 7 + Math.random() * 5, 
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear"
                    }}
                />
            ))}

            {/* Premium Floating Glass Card */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 w-full flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    whileHover={{ 
                        scale: 1.02, 
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    className="relative group transition-all duration-700"
                >
                    {/* The Glass Card itself */}
                    <div className="
                        relative
                        bg-gradient-to-br from-white/25 to-white/10 
                        backdrop-blur-[14px] 
                        rounded-[24px] 
                        p-8 md:p-14 
                        border border-white/30 
                        shadow-[0_10px_40px_rgba(0,0,0,0.15)] 
                        max-w-3xl 
                        text-center
                        overflow-hidden
                    ">
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        {/* Icon Container with subtle animation */}
                        {Icon && (
                            <motion.div 
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.8, type: 'spring', damping: 12 }}
                                className="w-20 h-20 mx-auto mb-8 bg-white/20 backdrop-blur-xl rounded-[20px] flex items-center justify-center border border-white/40 shadow-xl"
                            >
                                <Icon className="w-10 h-10 text-white drop-shadow-md" />
                            </motion.div>
                        )}
                        
                        {/* Large Bold Typography with Premium Gradient */}
                        <h1 className="
                            text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight 
                            bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-200
                            drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]
                            leading-[1.1]
                        ">
                            {title}
                        </h1>

                        {/* Subtitle / Tagline */}
                        <p className="text-lg md:text-2xl text-slate-100 font-medium leading-relaxed max-w-2xl mx-auto opacity-95 drop-shadow-md">
                            {tagline}
                        </p>
                    </div>

                    {/* Subtle border-glow reflection */}
                    <div className="absolute -inset-px rounded-[24px] border border-white/10 pointer-events-none opacity-50"></div>
                </motion.div>
            </div>

        </section>
    );
};

export default PremiumHero;
