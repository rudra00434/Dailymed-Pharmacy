import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Truck,
  Clock,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-teal-50 via-white to-emerald-50">

      {/* ================= BACKGROUND DECORATION ================= */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* ================= CONTENT ================= */}
          <div className="flex-1 text-center lg:text-left w-full">

            {/* Delivery Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">

              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>

              24/7 Delivery Available in Your Area
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-foreground">

              Your Health,{" "}

              <br className="hidden md:block" />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Delivered With Care.
              </span>

            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Get your medicines, health supplements, and wellness products
              delivered to your doorstep in minutes. Trusted by millions of
              families.
            </p>

            {/* ================= CTA BUTTONS ================= */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">

              {/* Order Medicines */}
              <Link
                to="/medicines"
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-medium text-lg transition-all shadow-[0_8px_30px_rgb(38,187,143,0.3)] hover:shadow-[0_8px_30px_rgb(38,187,143,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Order Medicines
                <ArrowRight size={20} />
              </Link>

              {/* Upload Prescription */}
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white border border-border hover:bg-gray-50 text-foreground rounded-full font-medium text-lg transition-all shadow-sm flex items-center justify-center gap-2"
              >
                Upload Prescription
              </Link>

            </div>

            {/* ================= TRUST MARKERS ================= */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 md:gap-10">

              {/* Genuine */}
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <ShieldCheck size={20} />
                </div>

                <span className="font-medium text-sm md:text-base">
                  100% Genuine
                </span>
              </div>

              {/* Delivery */}
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <Truck size={20} />
                </div>

                <span className="font-medium text-sm md:text-base">
                  Free Delivery
                </span>
              </div>

              {/* Superfast */}
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <Clock size={20} />
                </div>

                <span className="font-medium text-sm md:text-base">
                  Superfast
                </span>
              </div>

            </div>

          </div>

          {/* ================= HERO VISUAL ================= */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto">

            {/* Decorative Shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[3rem] transform rotate-3 scale-105 -z-10" />

            {/* Main Card */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white bg-white animate-float">

              {/* Visual Area */}
              <div className="aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5] bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center relative overflow-hidden">

                {/* Background Pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, black 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Floating Information Cards */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-4 w-full px-4">

                  {/* Health Status */}
                  <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-xl flex items-center gap-4 mb-8 translate-x-4 sm:translate-x-8 max-w-[90%]">

                    <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0">

                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                      </svg>

                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Health Status
                      </p>

                      <p className="font-bold text-gray-900">
                        Excellent
                      </p>
                    </div>

                  </div>

                  {/* Incoming Delivery */}
                  <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-xl flex flex-col gap-2 -translate-x-4 sm:-translate-x-8 max-w-[95%]">

                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      Incoming Delivery
                    </p>

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white shrink-0">
                        <Truck size={20} />
                      </div>

                      <div>
                        <p className="font-bold text-gray-900 text-sm">
                          Vitamins & Supplements
                        </p>

                        <p className="text-xs text-primary font-medium">
                          Arriving in 15 mins
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* ================= FLOATING REVIEW BADGE ================= */}
            <div className="absolute -bottom-4 left-2 sm:left-4 md:left-auto md:-right-6 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 sm:gap-4 z-10 max-w-[calc(100%-1rem)]">

              {/* Avatars */}
              <div className="flex -space-x-2 shrink-0">

                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="DailyMed customer"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}

              </div>

              {/* Rating */}
              <div className="min-w-0">

                <div className="flex items-center gap-1 text-accent">

                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}

                </div>

                <p className="text-[11px] sm:text-xs font-bold mt-1 whitespace-nowrap">
                  4.9/5 from 10k+ reviews
                </p>

              </div>

            </div>

            {/* =====================================================
                FLOATING CONTACT ACTIONS
                Added without changing existing Hero UI
            ====================================================== */}
            <div className="absolute bottom-24 right-2 sm:right-4 md:right-6 lg:-right-2 z-20">

              <div className="flex flex-col items-end gap-3">

                {/* Call Us */}
                <a
                  href="tel:+917908850240"
                  aria-label="Call DailyMed Pharmacy"
                  className="group flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 sm:px-5 sm:py-3 rounded-full shadow-lg border border-gray-100 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <Phone size={18} />
                  </span>

                  <span className="hidden sm:block text-sm font-semibold">
                    Call Us
                  </span>

                  <ArrowRight
                    size={16}
                    className="hidden sm:block transition-transform group-hover:translate-x-1"
                  />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/917908850240"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with DailyMed Pharmacy on WhatsApp"
                  className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20">
                    <MessageCircle size={19} />
                  </span>

                  <span className="hidden sm:block text-sm font-semibold">
                    WhatsApp Us
                  </span>

                  <ArrowRight
                    size={16}
                    className="hidden sm:block transition-transform group-hover:translate-x-1"
                  />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}