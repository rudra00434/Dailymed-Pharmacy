import { useEffect, useState } from 'react';
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Clock3,
    HeartPulse,
    Pill,
    ShieldCheck,
    ShoppingBag,
    Truck,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDES = [
    {
        id: 1,
        eyebrow: 'DAILYMED SAVINGS',
        title: 'Your Health.',
        highlight: 'Your Savings.',
        description:
            'Save more on everyday medicines and healthcare essentials without compromising on care.',
        offer: '15% OFF',
        offerLabel: 'SELECTED MEDICINES',
        button: 'Shop Medicines',
        link: '/medicines',
        icon: Pill,
        theme: 'from-emerald-700 via-teal-600 to-cyan-500',
        accent: 'text-yellow-300',
    },
    {
        id: 2,
        eyebrow: 'WELLNESS ESSENTIALS',
        title: 'Feel Better.',
        highlight: 'Live Better.',
        description:
            'Explore vitamins, supplements and wellness products selected for your everyday needs.',
        offer: '25% OFF',
        offerLabel: 'WELLNESS PRODUCTS',
        button: 'Explore Wellness',
        link: '/health-wellness',
        icon: HeartPulse,
        theme: 'from-teal-700 via-emerald-600 to-green-500',
        accent: 'text-yellow-300',
    },
    {
        id: 3,
        eyebrow: 'SPECIAL OFFERS',
        title: 'Better Care.',
        highlight: 'Better Value.',
        description:
            'Discover exciting deals across healthcare, personal care and wellness products.',
        offer: '30% OFF',
        offerLabel: 'SELECTED PRODUCTS',
        button: 'View Offers',
        link: '/offers',
        icon: ShoppingBag,
        theme: 'from-cyan-700 via-teal-600 to-emerald-500',
        accent: 'text-yellow-300',
    },
    {
        id: 4,
        eyebrow: 'DAILYMED DELIVERY',
        title: 'Healthcare.',
        highlight: 'Delivered With Care.',
        description:
            'Order your healthcare essentials and enjoy a simple, convenient shopping experience.',
        offer: 'FAST',
        offerLabel: 'DELIVERY',
        button: 'Order Now',
        link: '/medicines',
        icon: Truck,
        theme: 'from-green-700 via-teal-600 to-cyan-500',
        accent: 'text-yellow-300',
    },
];

export default function PromoSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const slide = SLIDES[currentSlide];
    const SlideIcon = slide.icon;

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === SLIDES.length - 1 ? 0 : prev + 1
        );
    };

    const previousSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? SLIDES.length - 1 : prev - 1
        );
    };

    /*
     * Automatic slider
     * Changes every 4.5 seconds.
     */
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === SLIDES.length - 1 ? 0 : prev + 1
            );
        }, 4500);

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section className="bg-white py-5 md:py-6">
            <div className="container mx-auto px-4 md:px-6">

                {/* Top announcement */}
                <div className="flex items-center justify-center gap-2 mb-4 md:mb-5">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />

                    <p className="text-xs sm:text-sm md:text-base font-semibold text-foreground text-center">
                        Quality Healthcare Products
                        <span className="mx-2 text-muted-foreground">•</span>
                        Fast & Convenient Delivery
                    </p>
                </div>

                {/* Main Slider */}
                <div
                    className="relative max-w-[1450px] mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div
                        className={`
              relative overflow-hidden
              rounded-2xl md:rounded-3xl
              bg-gradient-to-r ${slide.theme}
              shadow-[0_15px_45px_rgba(15,118,110,0.18)]
              min-h-[300px]
              sm:min-h-[320px]
              md:min-h-[350px]
              lg:min-h-[365px]
            `}
                    >

                        {/* =====================================================
                BACKGROUND DECORATION
            ====================================================== */}

                        <div className="absolute inset-0 overflow-hidden">

                            {/* Large soft circle */}
                            <div className="absolute -right-24 -top-32 w-[420px] h-[420px] rounded-full bg-white/10" />

                            {/* Bottom circle */}
                            <div className="absolute right-[15%] -bottom-[260px] w-[580px] h-[580px] rounded-full bg-white/10" />

                            {/* Small circles */}
                            <div className="absolute left-[42%] top-10 w-4 h-4 rounded-full bg-white/20" />
                            <div className="absolute left-[48%] top-24 w-2 h-2 rounded-full bg-white/30" />
                            <div className="absolute left-[52%] bottom-16 w-3 h-3 rounded-full bg-white/20" />

                            {/* Subtle grid */}
                            <div
                                className="absolute inset-0 opacity-[0.07]"
                                style={{
                                    backgroundImage:
                                        'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                                    backgroundSize: '28px 28px',
                                }}
                            />
                        </div>

                        {/* =====================================================
                CONTENT
            ====================================================== */}

                        <div
                            key={slide.id}
                            className="relative z-10 min-h-[300px] sm:min-h-[320px] md:min-h-[350px] lg:min-h-[365px] flex items-center"
                        >

                            {/* Left Content */}
                            <div className="w-full lg:w-[62%] px-8 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-10">

                                {/* Eyebrow */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-8 h-[2px] bg-yellow-300" />

                                    <span className="text-white/90 text-xs sm:text-sm font-bold tracking-[0.16em]">
                                        {slide.eyebrow}
                                    </span>
                                </div>

                                {/* Heading */}
                                <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] leading-[0.98] tracking-tight max-w-3xl">
                                    {slide.title}
                                    <br />

                                    <span className={slide.accent}>
                                        {slide.highlight}
                                    </span>
                                </h2>

                                {/* Description */}
                                <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl mt-4 mb-6">
                                    {slide.description}
                                </p>

                                {/* Bottom CTA Row */}
                                <div className="flex flex-wrap items-center gap-3">

                                    {/* Offer Card */}
                                    <div className="bg-white rounded-xl px-4 py-2.5 md:px-5 md:py-3 shadow-xl min-w-[130px]">
                                        <p className="text-[9px] md:text-[10px] font-bold tracking-wider text-gray-500 uppercase">
                                            {slide.offerLabel}
                                        </p>

                                        <p className="text-xl md:text-2xl font-black text-gray-900 leading-tight">
                                            {slide.offer}
                                        </p>
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        to={slide.link}
                                        className="group inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-950 px-5 md:px-6 py-3 rounded-xl font-bold text-sm md:text-base shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                                    >
                                        {slide.button}

                                        <ArrowRight
                                            size={18}
                                            className="transition-transform group-hover:translate-x-1"
                                        />
                                    </Link>

                                </div>
                            </div>

                            {/* =====================================================
                  RIGHT SIDE VISUAL
              ====================================================== */}

                            <div className="hidden lg:flex absolute right-8 xl:right-16 top-0 h-full w-[36%] items-center justify-center">

                                {/* Main white circle */}
                                <div className="relative w-[270px] h-[270px] xl:w-[300px] xl:h-[300px] rounded-full bg-white/95 shadow-[0_20px_60px_rgba(0,0,0,0.12)] flex items-center justify-center">

                                    {/* Inner glow */}
                                    <div className="absolute inset-4 rounded-full border border-primary/10" />

                                    {/* Icon */}
                                    <div className="relative text-center">

                                        <div className="w-20 h-20 xl:w-24 xl:h-24 mx-auto rounded-2xl bg-primary text-white flex items-center justify-center shadow-[0_12px_30px_rgba(38,187,143,0.3)]">
                                            <SlideIcon
                                                size={42}
                                                strokeWidth={2}
                                            />
                                        </div>

                                        <p className="mt-4 text-2xl xl:text-3xl font-display font-bold text-gray-900">
                                            DailyMed
                                        </p>

                                        <p className="text-[9px] xl:text-[10px] tracking-[0.35em] font-bold text-primary uppercase">
                                            Pharmacy
                                        </p>

                                    </div>
                                </div>

                                {/* Trusted card */}
                                <div className="absolute left-0 top-[65px] bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3">

                                    <div className="w-9 h-9 rounded-full bg-emerald-50 text-primary flex items-center justify-center">
                                        <ShieldCheck size={19} />
                                    </div>

                                    <div>
                                        <p className="text-[9px] uppercase tracking-wider text-gray-400 font-bold">
                                            Trusted Care
                                        </p>

                                        <p className="text-xs font-bold text-gray-900">
                                            Quality Healthcare
                                        </p>
                                    </div>

                                </div>

                                {/* Delivery card */}
                                <div className="absolute right-0 bottom-[55px] bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3">

                                    <div className="w-9 h-9 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
                                        <Clock3 size={19} />
                                    </div>

                                    <div>
                                        <p className="text-[9px] uppercase tracking-wider text-gray-400 font-bold">
                                            Delivery
                                        </p>

                                        <p className="text-xs font-bold text-gray-900">
                                            Quick & Convenient
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* =====================================================
                NAVIGATION ARROWS
            ====================================================== */}

                        <button
                            type="button"
                            onClick={previousSlide}
                            aria-label="Previous promotion"
                            className="
                absolute left-3 md:left-5
                top-1/2 -translate-y-1/2
                z-30
                w-9 h-9 md:w-10 md:h-10
                rounded-xl
                bg-white/90
                hover:bg-white
                text-primary
                shadow-lg
                flex items-center justify-center
                transition-all duration-300
                hover:scale-105
              "
                        >
                            <ArrowLeft size={19} />
                        </button>

                        <button
                            type="button"
                            onClick={nextSlide}
                            aria-label="Next promotion"
                            className="
                absolute right-3 md:right-5
                top-1/2 -translate-y-1/2
                z-30
                w-9 h-9 md:w-10 md:h-10
                rounded-xl
                bg-white/90
                hover:bg-white
                text-primary
                shadow-lg
                flex items-center justify-center
                transition-all duration-300
                hover:scale-105
              "
                        >
                            <ArrowRight size={19} />
                        </button>

                        {/* =====================================================
                DOT INDICATORS
            ====================================================== */}

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">

                            {SLIDES.map((item, index) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                    className={`
                    h-2 rounded-full
                    transition-all duration-300
                    ${currentSlide === index
                                            ? 'w-8 bg-white'
                                            : 'w-2 bg-white/40 hover:bg-white/70'
                                        }
                  `}
                                />
                            ))}

                        </div>

                        {/* =====================================================
                PROGRESS BAR
            ====================================================== */}

                        {!isPaused && (
                            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
                                <div
                                    key={currentSlide}
                                    className="h-full bg-yellow-300"
                                    style={{
                                        animation: 'promoProgress 4.5s linear',
                                    }}
                                />
                            </div>
                        )}

                    </div>
                </div>

                {/* =====================================================
            TRUST STRIP
        ====================================================== */}

                <div className="hidden sm:flex items-center justify-center gap-6 md:gap-10 lg:gap-14 mt-4">

                    <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                        <ShieldCheck
                            size={16}
                            className="text-primary"
                        />
                        <span>Quality Products</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                        <Truck
                            size={16}
                            className="text-primary"
                        />
                        <span>Fast Delivery</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                        <CheckCircle2
                            size={16}
                            className="text-primary"
                        />
                        <span>Easy Ordering</span>
                    </div>

                </div>

            </div>

            {/* Progress animation */}
            <style>{`
        @keyframes promoProgress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
        </section>
    );
}