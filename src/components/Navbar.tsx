import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  ShoppingCart,
  Heart,
  Search,
  User,
  Menu,
  X,
  Plus,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Medicines", path: "/medicines" },
    { name: "Categories", path: "/categories" },
    { name: "Health & Wellness", path: "/health-wellness" },
    { name: "Health Blogs", path: "/health-blogs" },
    { name: "Offers", path: "/offers" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
        : "bg-white py-5"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <NavLink
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="bg-primary text-white p-2 rounded-lg flex items-center justify-center">
              <Plus size={24} strokeWidth={3} />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-tight text-foreground">
                DailyMed
              </span>

              <span className="text-[10px] tracking-widest text-primary font-bold uppercase leading-none">
                Pharmacy
              </span>
            </div>
          </NavLink>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-colors whitespace-nowrap ${isActive
                    ? "text-accent font-semibold"
                    : "text-foreground hover:text-primary"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* ================= DESKTOP ACTIONS ================= */}
          <div className="hidden xl:flex items-center gap-5">

            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Search size={22} />
            </button>

            {/* Wishlist */}
            <button
              type="button"
              aria-label="Wishlist"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Heart size={22} />
            </button>

            {/* Cart */}
            <button
              type="button"
              aria-label="Shopping cart"
              className="text-foreground hover:text-primary transition-colors relative"
            >
              <ShoppingCart size={22} />

              <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Account */}
            <button
              type="button"
              className="flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-full font-medium transition-all duration-300"
            >
              <User size={18} />
              <span>Account</span>
            </button>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            aria-label={
              isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            className="xl:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-border">

          <div className="flex flex-col p-4">

            {/* Navigation Links */}
            <div className="flex flex-col">

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `p-3 rounded-lg font-medium transition-colors ${isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground hover:bg-primary/5 hover:text-primary"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

            </div>

            {/* Divider */}
            <div className="h-px bg-border my-3" />

            {/* Mobile Actions */}
            <div className="grid grid-cols-4 gap-2 py-2">

              {/* Search */}
              <button
                type="button"
                className="flex flex-col items-center justify-center gap-1 p-2 rounded-lg text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
              >
                <Search size={20} />
                <span className="text-xs">Search</span>
              </button>

              {/* Wishlist */}
              <button
                type="button"
                className="flex flex-col items-center justify-center gap-1 p-2 rounded-lg text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
              >
                <Heart size={20} />
                <span className="text-xs">Wishlist</span>
              </button>

              {/* Cart */}
              <button
                type="button"
                className="flex flex-col items-center justify-center gap-1 p-2 rounded-lg text-foreground hover:bg-primary/5 hover:text-primary transition-colors relative"
              >
                <div className="relative">
                  <ShoppingCart size={20} />

                  <span className="absolute -top-2 -right-2 bg-accent text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                    3
                  </span>
                </div>

                <span className="text-xs">Cart</span>
              </button>

              {/* Account */}
              <button
                type="button"
                className="flex flex-col items-center justify-center gap-1 p-2 rounded-lg text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
              >
                <User size={20} />
                <span className="text-xs">Account</span>
              </button>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}