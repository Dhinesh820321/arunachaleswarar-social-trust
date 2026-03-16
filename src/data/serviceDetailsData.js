import { GraduationCap, BookOpen, Users, Sprout, Briefcase, Heart, ShieldCheck, HandHeart, Shovel, UserCheck, Scale, Globe, Calendar } from 'lucide-react';

export const serviceDetails = {
    "child-education": {
        title: "Child Education",
        tagline: "Unlocking potential through the power of knowledge and structured learning.",
        heroImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
        icon: BookOpen,
        aboutDesc: "Education is the cornerstone of a thriving society. Our Trust is committed to ensuring that every child, regardless of their financial background, has access to quality schooling. From providing stationary and uniforms to setting up evening tuition centers in remote villages, we bridge the gap between dreams and reality.",
        quote: "The beautiful thing about learning is that no one can take it away from you.",
        quoteAuthor: "B.B. King",
        stats: [
            { icon: GraduationCap, value: "5,000+", label: "Scholarships Provided" },
            { icon: BookOpen, value: "100+", label: "Learning Centers" },
            { icon: Users, value: "12,000+", label: "Student Lives Impacted" }
        ],
        activities: [
            {
                title: "Educational Kit Distribution",
                description: "We provide comprehensive kits including books, stationary, bags, and uniforms to children in rural areas to remove barriers to school attendance.",
                image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
                points: ["Quality stationary for all grades", "Ergonomic school bags", "Proper school uniforms"]
            },
            {
                title: "After-School Coaching",
                description: "Our evening tuition centers provide free academic support to students, helping them excel in their curriculum and preventing school dropouts.",
                image: "https://images.unsplash.com/photo-1524069290683-0457ab881459?q=80&w=2070&auto=format&fit=crop",
                points: ["Personalized attention", "Focus on core subjects", "Regular progress tracking"]
            }
        ],
        gallery: [
            { url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop", alt: "Children in classroom" },
            { url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop", alt: "Reading time" },
            { url: "https://images.unsplash.com/photo-1577891392652-3210453de70a?q=80&w=2070&auto=format&fit=crop", alt: "Science experiment" },
            { url: "https://images.unsplash.com/photo-1522661060204-856fd596c374?q=80&w=2070&auto=format&fit=crop", alt: "Students playing" },
            { url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop", alt: "Graduation ceremony" },
            { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104&auto=format&fit=crop", alt: "Teaching session" }
        ]
    },
    "agriculture-development": {
        title: "Agriculture Development",
        tagline: "Nurturing the land to secure a sustainable and prosperous future for our farmers.",
        heroImage: "https://messages-prod.27c852f3500f38c1e7786e2c9ff9e48f.r2.cloudflarestorage.com/019b9d32-2379-7ec6-9625-bbb9f0db17a4/1773491507642-019cec54-8d89-74e3-911f-3ede7bbaff67.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=75514238966d6677c3874ef9149f1398%2F20260314%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260314T123147Z&X-Amz-Expires=3600&X-Amz-Signature=8d34d6676e2940c9f726aca320eef4c5f12b980b1a481f29ad40ba15fa2ca2af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
        icon: Sprout,
        aboutDesc: "Farmers are the backbone of our economy. We empower them by introducing modern irrigation techniques, organic farming practices, and high-quality seed distribution. Our focus is on long-term sustainability and improving the yield of small-scale farmers through continuous training and support.",
        quote: "The discovery of agriculture was the first big step toward a civilized life.",
        quoteAuthor: "Arthur Keith",
        stats: [
            { icon: Shovel, value: "1,200+", label: "Farmers Trained" },
            { icon: Sprout, value: "2,500+", label: "Acres Impacted" },
            { icon: Globe, value: "15+", label: "Village Clusters" }
        ],
        activities: [
            {
                title: "Organic Farming Workshops",
                description: "Training farmers to shift from chemical-heavy agriculture to sustainable organic practices that restore soil health and produce healthier crops.",
                image: "https://images.unsplash.com/photo-1495107334309-fcf20504fa5f?q=80&w=2070&auto=format&fit=crop",
                points: ["Natural fertilizer production", "Pest management without toxins", "Soil health restoration"]
            },
            {
                title: "Modern Irrigation Support",
                description: "Implementing drip and sprinkler irrigation systems in drought-prone areas to maximize water efficiency and ensure year-round harvest.",
                image: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=2071&auto=format&fit=crop",
                points: ["Water conservation techniques", "Low-cost system setup", "Maintenance training"]
            }
        ],
        gallery: [
            { url: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop", alt: "Farmer in the field" },
            { url: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=2070&auto=format&fit=crop", alt: "Fresh crops harvest" },
            { url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop", alt: "Green field landscape" },
            { url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop", alt: "Agricultural tools" },
            { url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop", alt: "Community garden" },
            { url: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1932&auto=format&fit=crop", alt: "Seed planting" }
        ]
    },
    "women-empowerment": {
        title: "Women Empowerment",
        tagline: "Empowering women today to lead the change for a prosperous tomorrow.",
        heroImage: "https://images.unsplash.com/photo-1590650516494-23253a088a24?q=80&w=2070&auto=format&fit=crop",
        icon: Users,
        aboutDesc: "When you empower a woman, you empower a whole family and a community. Our programs focus on providing women with vocational skills, leadership training, and financial literacy to help them achieve social and economic independence.",
        quote: "There is no limit to what we, as women, can accomplish.",
        quoteAuthor: "Michelle Obama",
        stats: [
            { icon: Heart, value: "3,500+", label: "Women Skilled" },
            { icon: Users, value: "500+", label: "Self-Help Groups" },
            { icon: UserCheck, value: "1,000+", label: "New Entrepreneurs" }
        ],
        activities: [
            {
                title: "Tailoring & Handicrafts",
                description: "Setting up vocational centers where women learn sewing, embroidery, and traditional handicrafts to start their own micro-enterprises.",
                image: "https://images.unsplash.com/photo-1552044234-5853f60021c3?q=80&w=2070&auto=format&fit=crop",
                points: ["Professional tailoring courses", "Design development", "Market linkage for products"]
            },
            {
                title: "Financial Literacy Training",
                description: "Educating women on banking, savings, and government schemes to ensure they can manage their finances independently and securely.",
                image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=2070&auto=format&fit=crop",
                points: ["Micro-finance awareness", "Savings management", "Digital banking skills"]
            }
        ],
        gallery: [
            { url: "https://images.unsplash.com/photo-1573497620053-ea5310f94f17?q=80&w=2070&auto=format&fit=crop", alt: "Woman working with laptop" },
            { url: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=2070&auto=format&fit=crop", alt: "Group of women meeting" },
            { url: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1974&auto=format&fit=crop", alt: "Skill training session" },
            { url: "https://images.unsplash.com/photo-1517315003714-a071486bd9ea?q=80&w=2071&auto=format&fit=crop", alt: "Entrepreneur success" },
            { url: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop", alt: "Traditional weaving" },
            { url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop", alt: "Leadership workshop" }
        ]
    },
    "unemployment-youth": {
        title: "Unemployment Youth",
        tagline: "Bridging the gap between rural talent and modern career opportunities.",
        heroImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop",
        icon: Briefcase,
        aboutDesc: "Our Trust identifies rural youth with potential and provides them with intensive vocational training and soft skill development. We aim to reduce unemployment by aligning their skills with current industry demands and providing placement support.",
        quote: "The future belongs to those who learn more skills and combine them in creative ways.",
        quoteAuthor: "Robert Greene",
        stats: [
            { icon: Briefcase, value: "2,000+", label: "Youth Trained" },
            { icon: UserCheck, value: "1,500+", label: "Job Placements" },
            { icon: Globe, value: "50+", label: "Partner Companies" }
        ],
        activities: [
            {
                title: "Skill Development Workshops",
                description: "Technical training in areas like mobile repair, electrical work, and basic computer applications to boost employability.",
                image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
                points: ["Industry-relevant curriculum", "Hands-on practical training", "Certification support"]
            },
            {
                title: "Soft Skills & Communication",
                description: "Focusing on personality development, interview preparation, and professional communication to build confidence in young job seekers.",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
                points: ["Spoken English classes", "CV writing assistance", "Mock interview sessions"]
            }
        ],
        gallery: [
            { url: "https://images.unsplash.com/photo-1522071823991-b99c223e7483?q=80&w=2070&auto=format&fit=crop", alt: "Youth meeting" },
            { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop", alt: "Computer training" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop", alt: "Collaboration session" },
            { url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", alt: "Career guidance" },
            { url: "https://images.unsplash.com/photo-1521791136064-7986c2923216?q=80&w=2069&auto=format&fit=crop", alt: "Workshop success" },
            { url: "https://images.unsplash.com/photo-1454165833772-d996d4951ee1?q=80&w=2070&auto=format&fit=crop", alt: "Interview prep" }
        ]
    },
    "rural-women-support": {
        title: "Rural Women Support",
        tagline: "Strengthening the heart of the village through collective action and support.",
        heroImage: "https://images.unsplash.com/photo-1621648011116-f33162799793?q=80&w=1935&auto=format&fit=crop",
        icon: HandHeart,
        aboutDesc: "Rural women often face multiple challenges ranging from limited mobility to lack of healthcare. We set up comprehensive support systems including Self-Help Groups (SHGs) and mobile health units to address their specific needs at the doorstep.",
        quote: "Rural women are the backbone of our communities.",
        quoteAuthor: "Food and Agriculture Organization",
        stats: [
            { icon: Users, value: "8,000+", label: "Women Reached" },
            { icon: Heart, value: "20+", label: "Villages Served" },
            { icon: HandHeart, value: "600+", label: "Support Groups" }
        ],
        activities: [
            {
                title: "Self-Help Group (SHG) Meetings",
                description: "Organizing weekly village meetings where women can pool savings, discuss village issues, and access community loans.",
                image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
                points: ["Collective problem solving", "Micro-savings culture", "Social support network"]
            },
            {
                title: "Maternal & Rural Healthcare",
                description: "Mobile health camps specifically for women and children in remote areas providing check-ups, medication, and awareness.",
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
                points: ["Free medical consultations", "Health awareness talks", "Nutrition supplements"]
            }
        ],
        gallery: [
            { url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1931&auto=format&fit=crop", alt: "Village women meeting" },
            { url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop", alt: "Support group gathering" },
            { url: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop", alt: "Rural home visit" },
            { url: "https://images.unsplash.com/photo-1613506148384-9ba4477cfdee?q=80&w=1964&auto=format&fit=crop", alt: "Craftsmanship" },
            { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop", alt: "Happy village family" },
            { url: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=2070&auto=format&fit=crop", alt: "Women discussion" }
        ]
    },
    "helping-hands": {
        title: "Helping Hands",
        tagline: "A compassionate reach for the most vulnerable and neglected.",
        heroImage: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop",
        icon: Heart,
        aboutDesc: "The 'Helping Hands' initiative is our immediate response to hunger, homelessness, and medical emergencies. We work at the frontlines to provide relief to elderly people, street dwellers, and victims of natural disasters.",
        quote: "No one has ever become poor by giving.",
        quoteAuthor: "Anne Frank",
        stats: [
            { icon: Heart, value: "25,000+", label: "Meals Distributed" },
            { icon: Users, value: "3,000+", label: "Medical Aid Provided" },
            { icon: Calendar, value: "365", label: "Days of Service" }
        ],
        activities: [
            {
                title: "Food & Ration Distribution",
                description: "Regular food distribution drives and dry ration kit supply to families living in extreme poverty and during seasonal hardships.",
                image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
                points: ["Nutritious cooked meals", "Essential grocery supplies", "Zero wastage approach"]
            },
            {
                title: "Emergency Medical Relief",
                description: "Connecting poor patients with critical medical treatments, surgeries, and providing lifesaving medicines for free.",
                image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=1983&auto=format&fit=crop",
                points: ["Surgery sponsorship", "Diagnostic support", "Emergency transport help"]
            }
        ],
        gallery: [
            { url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop", alt: "Supporting the elderly" },
            { url: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop", alt: "Medical checkup" },
            { url: "https://images.unsplash.com/photo-1b488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop", alt: "Helping the poor" },
            { url: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=2026&auto=format&fit=crop", alt: "Resource donation" },
            { url: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop", alt: "Smiling volunteer" },
            { url: "https://images.unsplash.com/photo-1454165833772-d996d4951ee1?q=80&w=2070&auto=format&fit=crop", alt: "Counseling support" }
        ]
    },
    "human-rights": {
        title: "Human Rights",
        tagline: "Advocating for justice, equality, and the inherent dignity of every individual.",
        heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
        icon: ShieldCheck,
        aboutDesc: "Our Trust acts as a voice for the voiceless. We provide legal awareness, fight against discrimination, and ensure that marginalized communities can access their fundamental constitutional rights and government entitlements.",
        quote: "To deny people their human rights is to challenge their very humanity.",
        quoteAuthor: "Nelson Mandela",
        stats: [
            { icon: Scale, value: "500+", label: "Legal Cases Handled" },
            { icon: Users, value: "10,000+", label: "Awareness Reached" },
            { icon: ShieldCheck, value: "100%", label: "Total Commitment" }
        ],
        activities: [
            {
                title: "Rights Awareness Campaigns",
                description: "Organizing street plays, rallies, and seminars to educate rural populations about their labor rights, land rights, and gender equality.",
                image: "https://images.unsplash.com/photo-1550524514-9669533904d9?q=80&w=1932&auto=format&fit=crop",
                points: ["Community legal lectures", "Equality workshops", "Rights documentation"]
            },
            {
                title: "Legal Aid Helpline",
                description: "Offering free legal consultation and representation for underprivileged individuals facing harassment or denial of fundamental services.",
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
                points: ["Pro-bono legal support", "Mediation services", "Civil rights advocacy"]
            }
        ],
        gallery: [
            { url: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=2070&auto=format&fit=crop", alt: "Human rights rally" },
            { url: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=1974&auto=format&fit=crop", alt: "Group discussion on justice" },
            { url: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=2070&auto=format&fit=crop", alt: "Public speech" },
            { url: "https://images.unsplash.com/photo-1510531704581-5b28709ec685?q=80&w=2070&auto=format&fit=crop", alt: "Community meeting" },
            { url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop", alt: "Team unity" },
            { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop", alt: "Advocacy planning" }
        ]
    }
};
