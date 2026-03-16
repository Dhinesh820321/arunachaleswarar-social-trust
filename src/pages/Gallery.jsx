import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Heart, Calendar } from 'lucide-react';

const Gallery = () => {
    const [filter, setFilter] = useState('All');
    const [selectedImg, setSelectedImg] = useState(null);

    const images = [
        {
            id: 1,
            category: 'Social Work',
            title: 'Education for All',
            url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop',
            desc: 'Distribution of school kits to rural children.'
        },
        {
            id: 2,
            category: 'Trust Events',
            title: 'Annual Meet 2023',
            url: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=1974&auto=format&fit=crop',
            desc: 'Board of Trustees meeting at the head office.'
        },
        {
            id: 3,
            category: 'Social Work',
            title: 'Self Help Training',
            url: 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?q=80&w=2024&auto=format&fit=crop',
            desc: 'Women learning new vocational skills.'
        },
        {
            id: 4,
            category: 'Social Work',
            title: 'Farmer Support',
            url: 'https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?q=80&w=2072&auto=format&fit=crop',
            desc: 'Organic farming awareness camp.'
        },
        {
            id: 5,
            category: 'Trust Events',
            title: 'Awareness Seminar',
            url: 'https://images.unsplash.com/photo-1517457373958-b7bdd458ad20?q=80&w=2070&auto=format&fit=crop',
            desc: 'Community health awareness program.'
        },
        {
            id: 6,
            category: 'Social Work',
            title: 'Food Distribution',
            url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop',
            desc: 'Providing meals to the needy during holidays.'
        },
        {
            id: 7,
            category: 'Trust Events',
            title: 'Volunteer Kickoff',
            url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop',
            desc: 'New volunteers joining our mission.'
        },
        {
            id: 8,
            category: 'Social Work',
            title: 'Clean Up Drive',
            url: 'https://images.unsplash.com/photo-1591393223703-56fe1347ac62?q=80&w=1974&auto=format&fit=crop',
            desc: 'Village cleanliness initiative.'
        }
    ];

    const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Header */}
            <section className="bg-slate-900 pt-32 pb-20 text-center">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6"
                    >
                        Activity <span className="text-blue-500">Gallery</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        A visual journey through our work and events.
                    </motion.p>
                </div>
            </section>

            {/* Filter Buttons */}
            <section className="py-10 max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {['All', 'Social Work', 'Trust Events'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${filter === cat
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/40'
                                    : 'bg-white text-slate-600 hover:bg-slate-100'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry-like Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredImages.map((img) => (
                            <motion.div
                                key={img.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                whileHover={{ y: -5 }}
                                className="group cursor-pointer"
                                onClick={() => setSelectedImg(img)}
                            >
                                <div className="glass-card rounded-[2rem] overflow-hidden p-3 relative h-full">
                                    <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-4">
                                        <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <div className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white">
                                                <ZoomIn className="w-8 h-8" />
                                            </div>
                                        </div>
                                        {/* Category Tag */}
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md text-white ${img.category === 'Social Work' ? 'bg-heart-500/80 bg-rose-500' : 'bg-blue-500/80'}`}>
                                                {img.category === 'Social Work' ? <Heart className="w-3 h-3 inline mr-1 fill-current" /> : <Calendar className="w-3 h-3 inline mr-1" />}
                                                {img.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="px-4 pb-2">
                                        <h3 className="text-xl font-bold text-slate-900 mb-1">{img.title}</h3>
                                        <p className="text-slate-500 text-sm line-clamp-1">{img.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-950/95 flex items-center justify-center p-4 md:p-10 backdrop-blur-xl"
                        onClick={() => setSelectedImg(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedImg(null)}
                        >
                            <X className="w-10 h-10" />
                        </button>
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            className="max-w-5xl w-full max-h-[90vh] relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={selectedImg.url} alt={selectedImg.title} className="w-full h-full max-h-[70vh] object-contain bg-slate-900" />
                            <div className="p-8 md:p-12 text-white">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-2 block">{selectedImg.category}</span>
                                        <h2 className="text-3xl md:text-4xl font-extrabold">{selectedImg.title}</h2>
                                    </div>
                                </div>
                                <p className="text-slate-400 text-lg italic">"{selectedImg.desc}"</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="h-20"></div>
        </div>
    );
};

export default Gallery;
