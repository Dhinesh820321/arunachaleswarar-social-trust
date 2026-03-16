import React from 'react';
import { motion } from 'framer-motion';

const TrusteeCard = ({ name, position, desc, image, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="glass-card bg-white/60 backdrop-blur-md rounded-[2.5rem] overflow-hidden p-5 h-full border border-white/50 relative z-10 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 flex flex-col">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6 shadow-inner">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <div className="px-2 pb-4 flex flex-col flex-grow text-center">
                <h3 className="text-2xl font-extrabold text-slate-800 mb-1 group-hover:text-blue-700 transition-colors">{name}</h3>
                <p className="text-blue-600 font-bold text-xs md:text-sm uppercase tracking-widest mb-4 opacity-90">{position}</p>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto mb-4 opacity-50"></div>
                <p className="text-slate-600 text-sm leading-relaxed italic mt-auto px-2">
                    "{desc}"
                </p>
            </div>
        </div>
    </motion.div>
);

const Trustees = () => {
    const trustees = [
        {
            name: "Dr. A. Arun Kumar",
            position: "Founder & Chairman",
            desc: "Visionary leader with 15+ years of experience in social development and education reforms.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
        },
        {
            name: "Mrs. S. Meenakshi",
            position: "Managing Trustee",
            desc: "Dedicated to women's empowerment and grassroots level community organization.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
        },
        {
            name: "Mr. R. Rajesh",
            position: "Executive Secretary",
            desc: "Expert in operations and large-scale project management for social initiatives.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
        },
        {
            name: "Dr. K. Vidya",
            position: "Educational Director",
            desc: "Passionate about innovative teaching methods and child cognitive development.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
        },
        {
            name: "Mr. M. Senthil",
            position: "Treasurer",
            desc: "Ensuring financial transparency and sustainable resource allocation for the trust.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
        },
        {
            name: "Ms. Priyanka R.",
            position: "Chief Social Worker",
            desc: "Focusing on rural development and implementing field-level charitable projects.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
        }
    ];

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
                        Board of <span className="text-blue-500">Trustees</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto italic"
                    >
                        The visionaries behind our mission, leading with experience and empathy.
                    </motion.p>
                </div>
            </section>

            {/* Grid */}
            <section className="section-padding">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {trustees.map((trustee, index) => (
                        <TrusteeCard key={index} {...trustee} index={index} />
                    ))}
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="section-padding bg-blue-600 text-white rounded-[4rem] mx-4 mb-20 text-center overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-8 italic">"Leadership is the capacity to translate vision into reality."</h2>
                    <p className="text-blue-100 text-lg mb-8">
                        Our board members bring a diverse set of skills and a unified passion for social change. Under their guidance, the trust has reached milestones that initially seemed impossible.
                    </p>
                    <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
                </div>
            </section>
        </div>
    );
};

export default Trustees;
