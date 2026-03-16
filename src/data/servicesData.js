import {
    GraduationCap,
    Sprout,
    Users,
    Briefcase,
    Heart,
    ShieldCheck,
    HandHeart
} from 'lucide-react';
import agricultureHero from '../assets/images/services/agriculture-hero.jpg';
import womenHero from '../assets/images/services/women-empowerment-hero.jpg';
import childEducation from '../assets/images/services/child-education.jpg';
import youthTraining from '../assets/images/services/youth-training.jpg';
import ruralWomen from '../assets/images/services/rural-women.jpg';

export const services = [
    {
        icon: GraduationCap,
        title: "Child Education",
        desc: "Ensuring every child has access to quality schooling, stationery, and learning support.",
        image: childEducation,
        gradient: "from-blue-500 to-cyan-500",
        path: "/services/child-education"
    },
    {
        icon: Sprout,
        title: "Agriculture Development",
        desc: "Empowering farmers with modern irrigation, organic farming, and seed programs.",
        image: agricultureHero,
        gradient: "from-green-500 to-emerald-600",
        path: "/services/agriculture-development"
    },
    {
        icon: Users,
        title: "Women Empowerment",
        desc: "Skill training in tailoring and handicrafts to promote financial independence.",
        image: womenHero,
        gradient: "from-purple-500 to-fuchsia-600",
        path: "/services/women-empowerment"
    },
    {
        icon: Briefcase,
        title: "Unemployment Youth",
        desc: "Vocational training and job placement support for rural youth development.",
        image: youthTraining,
        gradient: "from-slate-700 to-blue-800",
        path: "/services/unemployment-youth"
    },
    {
        icon: HandHeart,
        title: "Rural Women Support",
        desc: "Self-help groups and micro-finance guidance for women in rural communities.",
        image: ruralWomen,
        gradient: "from-rose-500 to-red-600",
        path: "/services/rural-women-support"
    },
    {
        icon: Heart,
        title: "Helping Hands",
        desc: "Emergency relief, hunger eradication, and medical camps for the vulnerable.",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop",
        gradient: "from-amber-500 to-orange-600",
        path: "/services/helping-hands"
    },
    {
        icon: ShieldCheck,
        title: "Human Rights",
        desc: "Legal awareness workshops and advocacy for marginalized community justice.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
        gradient: "from-slate-800 to-slate-900",
        path: "/services/human-rights"
    }
];
