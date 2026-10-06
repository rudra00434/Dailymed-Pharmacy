import {
    ArrowRight,
    Calendar,
    Clock,
    HeartPulse,
    BookOpen,
    Stethoscope,
    Activity,
    Apple,
    Brain,
    ShieldCheck,
} from "lucide-react";

const HEALTH_BLOGS = [
    {
        id: 1,
        title: "10 Simple Ways to Boost Your Immune System Naturally",
        excerpt:
            "Discover practical daily habits, nutrition tips, and lifestyle changes that can help support a healthy immune system.",
        category: "Immunity",
        author: "Dr. Sarah Wilson",
        date: "Oct 05, 2026",
        readTime: "5 min read",
        image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
        icon: ShieldCheck,
    },
    {
        id: 2,
        title: "Understanding Blood Pressure: What Your Numbers Mean",
        excerpt:
            "Learn how to understand your blood pressure readings and discover simple ways to maintain a healthy cardiovascular system.",
        category: "Heart Health",
        author: "Dr. Michael Carter",
        date: "Oct 02, 2026",
        readTime: "6 min read",
        image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
        icon: HeartPulse,
    },
    {
        id: 3,
        title: "The Complete Guide to Vitamins and Supplements",
        excerpt:
            "Understand essential vitamins, their benefits, food sources, and when supplements may be useful for your health.",
        category: "Nutrition",
        author: "Dr. Emily Brown",
        date: "Sep 29, 2026",
        readTime: "8 min read",
        image:
            "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=900&q=80",
        icon: Apple,
    },
    {
        id: 4,
        title: "Daily Habits for Better Mental Health",
        excerpt:
            "Small changes in your daily routine can make a meaningful difference to your mental wellbeing and overall quality of life.",
        category: "Mental Wellness",
        author: "Dr. James Anderson",
        date: "Sep 25, 2026",
        readTime: "5 min read",
        image:
            "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
        icon: Brain,
    },
    {
        id: 5,
        title: "Why Regular Exercise Is Essential for Your Health",
        excerpt:
            "Explore the physical and mental benefits of regular exercise and how you can create a sustainable fitness routine.",
        category: "Fitness",
        author: "Dr. Olivia Martin",
        date: "Sep 21, 2026",
        readTime: "4 min read",
        image:
            "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
        icon: Activity,
    },
    {
        id: 6,
        title: "When Should You Visit a Doctor?",
        excerpt:
            "Learn about common warning signs and symptoms that should not be ignored and when professional medical advice is important.",
        category: "Healthcare",
        author: "Dr. Daniel Smith",
        date: "Sep 18, 2026",
        readTime: "7 min read",
        image:
            "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80",
        icon: Stethoscope,
    },
];

const CATEGORIES = [
    "All",
    "Immunity",
    "Nutrition",
    "Heart Health",
    "Mental Wellness",
    "Fitness",
    "Healthcare",
];

export default function HealthBlogs() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12">

            {/* ==================== HERO BANNER ==================== */}
            <div className="w-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-12 mb-12 text-white shadow-lg relative overflow-hidden">

                {/* Decorative Icon */}
                <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
                    <HeartPulse size={300} />
                </div>

                <div className="relative z-10 max-w-3xl">

                    <div className="flex items-center gap-2 text-orange-100 font-bold uppercase tracking-wider mb-3">
                        <BookOpen size={20} />
                        <span>DailyMed Health & Wellness</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Your Health. Your Knowledge. Your Best Life.
                    </h1>

                    <p className="text-lg opacity-90 mb-8 max-w-2xl">
                        Explore expert-backed health tips, nutrition advice, wellness
                        guides, and practical information to help you make better
                        healthcare decisions every day.
                    </p>

                    <button className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-xl font-bold transition-colors shadow-md inline-flex items-center gap-2">
                        Explore Health Articles
                        <ArrowRight size={18} />
                    </button>

                </div>
            </div>

            {/* ==================== PAGE TITLE ==================== */}
            <div className="flex items-center gap-3 mb-6">

                <div className="w-2 h-8 bg-accent rounded-full" />

                <div>
                    <h2 className="text-3xl font-display font-bold text-foreground">
                        Latest Health Articles
                    </h2>

                    <p className="text-gray-500 mt-1">
                        Trusted information to help you live a healthier life.
                    </p>
                </div>

            </div>

            {/* ==================== CATEGORIES ==================== */}
            <div className="flex gap-3 overflow-x-auto pb-6 mb-6 scrollbar-hide">

                {CATEGORIES.map((category, index) => (
                    <button
                        key={category}
                        className={`whitespace-nowrap px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${index === 0
                            ? "bg-accent text-white shadow-md shadow-accent/30"
                            : "bg-white border border-gray-200 text-gray-600 hover:border-accent hover:text-accent"
                            }`}
                    >
                        {category}
                    </button>
                ))}

            </div>

            {/* ==================== FEATURED ARTICLE ==================== */}
            <div className="mb-12">

                <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300">

                    {/* Featured Image */}
                    <div className="relative min-h-[300px] lg:min-h-[400px] overflow-hidden bg-gray-50">

                        <span className="absolute top-5 left-5 z-10 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-md uppercase shadow-md">
                            Featured Article
                        </span>

                        <img
                            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80"
                            alt="Healthy food and lifestyle"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />

                    </div>

                    {/* Featured Content */}
                    <div className="p-8 md:p-10 flex flex-col justify-center">

                        <span className="text-sm font-bold text-primary mb-3">
                            WELLNESS GUIDE
                        </span>

                        <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                            How to Build a Healthier Lifestyle That Actually Lasts
                        </h3>

                        <p className="text-gray-500 leading-relaxed mb-6">
                            Healthy living doesn't have to be complicated. Discover
                            sustainable habits around nutrition, exercise, sleep, and
                            mental wellbeing that you can incorporate into your everyday
                            routine.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-7">

                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                Oct 06, 2026
                            </div>

                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                8 min read
                            </div>

                        </div>

                        <button className="w-fit bg-accent hover:bg-orange-500 text-white px-6 py-3 rounded-xl font-bold transition-colors duration-300 shadow-md shadow-accent/30 flex items-center gap-2">
                            Read Full Article
                            <ArrowRight size={18} />
                        </button>

                    </div>
                </div>

            </div>

            {/* ==================== LATEST ARTICLES ==================== */}
            <div className="flex items-center gap-3 mb-8">

                <div className="w-2 h-8 bg-accent rounded-full" />

                <h2 className="text-3xl font-display font-bold text-foreground">
                    Latest Health Articles
                </h2>

            </div>

            {/* ==================== BLOG GRID ==================== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                {HEALTH_BLOGS.map((blog) => {
                    const Icon = blog.icon;

                    return (
                        <article
                            key={blog.id}
                            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border-2 border-accent/20 overflow-hidden transition-all duration-300 flex flex-col"
                        >

                            {/* Blog Image */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">

                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/95 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">
                                        {blog.category}
                                    </span>
                                </div>

                            </div>

                            {/* Blog Content */}
                            <div className="p-5 flex flex-col flex-grow">

                                {/* Date + Reading Time */}
                                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">

                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={14} />
                                        {blog.date}
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        <Clock size={14} />
                                        {blog.readTime}
                                    </div>

                                </div>

                                {/* Blog Title */}
                                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
                                    {blog.title}
                                </h3>

                                {/* Blog Description */}
                                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-5">
                                    {blog.excerpt}
                                </p>

                                {/* Author + Read More */}
                                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">

                                    <div className="flex items-center gap-2">

                                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                                            <Icon
                                                size={16}
                                                className="text-accent"
                                            />
                                        </div>

                                        <span className="text-xs font-semibold text-gray-600">
                                            {blog.author}
                                        </span>

                                    </div>

                                    <button className="text-primary hover:text-accent font-bold text-sm flex items-center gap-1 transition-colors">
                                        Read More

                                        <ArrowRight
                                            size={15}
                                            className="group-hover:translate-x-1 transition-transform"
                                        />
                                    </button>

                                </div>

                            </div>

                        </article>
                    );
                })}

            </div>

            {/* ==================== BOTTOM CTA ==================== */}
            <div className="mt-12 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-3xl p-8 md:p-10 border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                        <HeartPulse
                            size={28}
                            className="text-primary"
                        />
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-foreground">
                            Stay Informed About Your Health
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            Get the latest health tips and wellness insights from DailyMed.
                        </p>
                    </div>

                </div>

                <button className="bg-accent hover:bg-orange-500 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-md shadow-accent/30 flex items-center gap-2 whitespace-nowrap">
                    Explore More
                    <ArrowRight size={18} />
                </button>

            </div>

        </div>
    );
}