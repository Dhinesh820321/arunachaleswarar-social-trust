import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import heroPng from '../../assets/hero.png';
import agricultureHero from '../../assets/images/services/agriculture-hero.jpg';
import womenHero from '../../assets/images/services/women-empowerment-hero.jpg';

const heroImages = [
     {
        url: 'https://images.unsplash.com/photo-1573497620053-ea5310f94f17?q=80&w=2070&auto=format&fit=crop',
        title: 'Education for Every Child'
    },
   
   
    {
        url: agricultureHero,
        title: 'Supporting Sustainable Agriculture'
    },
   
    {
        url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop',
        title: 'Reaching Out to Those in Need'
    },
     {
        url: womenHero,
        title: 'Empowering Women Locally'
    },
    {
        url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop',
        title: 'Building Stronger Communities'
    },
     {
        url:'',
        title: 'Arunachaleswarar Social Trust'
    },
];

const HeroImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 z-0">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Dark Overlay */}
                    <img
                        src={heroImages[currentIndex].url}
                        alt={heroImages[currentIndex].title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop';
                            e.target.onerror = null;
                        }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Gradient Overlay for extra readability and depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900 z-10"></div>

            {/* Animated Dots / Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-primary' : 'bg-white/50 hover:bg-white'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroImageSlider;
