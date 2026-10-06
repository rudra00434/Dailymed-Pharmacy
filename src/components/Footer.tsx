import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Plus } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 md:pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6">

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-12 md:mb-16">

          {/* ================= BRAND INFO ================= */}
          <div className="sm:col-span-2 lg:col-span-2">

            <Link to="/" className="flex items-center gap-2 mb-6 w-fit">

              <div className="bg-primary text-white p-2 rounded-lg flex items-center justify-center">
                <Plus size={24} strokeWidth={3} />
              </div>

              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-tight text-white">
                  DailyMed
                </span>

                <span className="text-[10px] tracking-widest text-primary font-bold uppercase leading-none">
                  Pharmacy
                </span>
              </div>

            </Link>

            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              "Your trusted digital pharmacy for everyday healthcare."
              Delivering wellness and peace of mind directly to your doorstep.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                  />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-display">
              Quick Links
            </h3>

            <ul className="space-y-3 md:space-y-4">

              <li>
                <Link
                  to="/"
                  className="hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/medicines"
                  className="hover:text-primary transition-colors"
                >
                  Medicines
                </Link>
              </li>

              <li>
                <Link
                  to="/categories"
                  className="hover:text-primary transition-colors"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  to="/health-wellness"
                  className="hover:text-primary transition-colors"
                >
                  Health & Wellness
                </Link>
              </li>

              <li>
                <Link
                  to="/health-blogs"
                  className="hover:text-primary transition-colors"
                >
                  Health Blogs
                </Link>
              </li>

              <li>
                <Link
                  to="/offers"
                  className="text-accent hover:text-orange-400 transition-colors"
                >
                  Offers
                </Link>
              </li>

            </ul>
          </div>

          {/* ================= CUSTOMER SUPPORT ================= */}
          <div>

            <h3 className="text-white font-bold text-lg mb-6 font-display">
              Customer Support
            </h3>

            <ul className="space-y-3 md:space-y-4">

              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Shipping & Delivery
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Returns & Refunds
                </a>
              </li>

            </ul>

          </div>

          {/* ================= LEGAL ================= */}
          <div>

            <h3 className="text-white font-bold text-lg mb-6 font-display">
              Legal
            </h3>

            <ul className="space-y-3 md:space-y-4">

              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-primary transition-colors"
                >
                  Prescription Policy
                </a>
              </li>

            </ul>

          </div>

        </div>

        {/* ================= CONTACT INFORMATION ================= */}
        <div className="bg-slate-800 rounded-2xl p-5 md:p-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-8 mb-10 md:mb-12">

          {/* Phone */}
          <div className="flex items-center gap-4 text-white min-w-0">

            <div className="bg-primary/20 p-3 rounded-full text-primary shrink-0">
              <Phone size={22} />
            </div>

            <div className="min-w-0">
              <p className="text-sm text-slate-400">
                24/7 Support
              </p>

              <p className="font-bold text-base md:text-lg break-words">
                +91 79088 50240
              </p>
            </div>

          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-12 bg-slate-700" />

          {/* Email */}
          <div className="flex items-center gap-4 text-white min-w-0">

            <div className="bg-primary/20 p-3 rounded-full text-primary shrink-0">
              <Mail size={22} />
            </div>

            <div className="min-w-0">
              <p className="text-sm text-slate-400">
                Email Us
              </p>

              <p className="font-bold text-base md:text-lg break-all">
                support@dailymed.com
              </p>
            </div>

          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-12 bg-slate-700" />

          {/* Address */}
          <div className="flex items-center gap-4 text-white min-w-0">

            <div className="bg-primary/20 p-3 rounded-full text-primary shrink-0">
              <MapPin size={22} />
            </div>

            <div className="min-w-0">
              <p className="text-sm text-slate-400">
                Main Office
              </p>

              <p className="font-bold text-base md:text-lg break-words">
                Burnpur Rd, Asansol Court Area
              </p>
            </div>

          </div>

        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="border-t border-slate-800 pt-7 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-slate-400 text-sm text-center md:text-left">
            © 2026 DailyMed Pharmacy. All rights reserved.
          </p>

          {/* Payment Methods */}
          <div className="flex items-center gap-2 sm:gap-3">

            <div className="h-8 w-11 sm:w-12 bg-white/10 rounded flex items-center justify-center">
              <span className="text-[11px] font-bold">
                VISA
              </span>
            </div>

            <div className="h-8 w-11 sm:w-12 bg-white/10 rounded flex items-center justify-center">
              <span className="text-[11px] font-bold">
                MC
              </span>
            </div>

            <div className="h-8 w-11 sm:w-12 bg-white/10 rounded flex items-center justify-center">
              <span className="text-[11px] font-bold">
                AMEX
              </span>
            </div>

            <div className="h-8 w-11 sm:w-12 bg-white/10 rounded flex items-center justify-center">
              <span className="text-[11px] font-bold">
                PP
              </span>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}