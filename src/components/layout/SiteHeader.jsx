import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Moon, Sun, Menu, X, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import logoDark from "../../assets/PL LOGO MAIN-dark.svg";
import logoLight from "../../assets/PL LOGO MAIN.svg";

export function SiteHeader() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinkClass = ({ isActive }) =>
    `relative text-[11px] tracking-[1.44px] uppercase transition-colors duration-300 whitespace-nowrap py-1 ${isActive
      ? "text-[#d1704d] font-bold"
      : isDark
        ? "text-[#9ca3af] hover:text-white font-medium"
        : "text-[#4b5563] hover:text-[#d1704d] font-medium"
    }`;

  const navLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/practice-areas", label: "Practice Areas" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[100px] transition-all duration-300 ${isDark
          ? scrolled
            ? "bg-[#0a1f2e]/95 backdrop-blur-md border-b border-[#d1704d]/20"
            : "bg-[#0a1f2e] border-b border-[#d1704d]/20"
          : scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
            : "bg-white border-b border-gray-100"
          }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          <NavLink to="/" className="flex-shrink-0 flex items-center py-[6px]">
            <img
              src={isDark ? logoDark : logoLight}
              alt="Paragon Law"
              className="h-[140px] w-auto object-contain mt-2"
            />
          </NavLink>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={navLinkClass}>
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="navUnderline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#d1704d]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-5">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-full transition-colors duration-200 ${isDark ? "text-[#9ca3af] hover:text-[#d1704d]" : "text-[#6b7280] hover:text-[#d1704d]"
                }`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <NavLink
              to="/contact"
              className={`md:hidden p-2 transition-colors duration-200 ${isDark ? "text-[#9ca3af] hover:text-[#d1704d]" : "text-[#6b7280] hover:text-[#d1704d]"
                }`}
              aria-label="Contact Us"
            >
              <Phone size={18} />
            </NavLink>

            <NavLink
              to="/contact"
              className={`hidden md:flex items-center gap-2 border px-6 py-[13px] text-[12px] tracking-[0.65px] uppercase font-medium transition-all duration-300 ${isDark
                ? "border-[#d1704d] text-[#d1704d] hover:bg-[#d1704d]/10"
                : "border-[#d1704d] text-[#d1704d] hover:bg-[#d1704d]/10"
                }`}
            >
              Get in Touch
              <span className="text-[16px] leading-none">→</span>
            </NavLink>

            <button
              className={`md:hidden p-2 transition-colors duration-200 ${isDark ? "text-[#d1d5dc]" : "text-[#1a2332]"
                }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          className={`fixed inset-0 z-40 pt-[100px] flex flex-col ${isDark ? "bg-[#0a1f2e]" : "bg-white"
            }`}
        >
          <nav className="flex flex-col px-8 pt-10 gap-8">
            {[
              { to: "/", label: "Home", end: true },
              { to: "/about", label: "About" },
              { to: "/practice-areas", label: "Practice Areas" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `text-[13px] tracking-[1.8px] uppercase font-medium border-b pb-6 transition-colors duration-200 ${isDark ? "border-white/10" : "border-gray-100"
                  } ${isActive
                    ? "text-[#d1704d]"
                    : isDark
                      ? "text-[#d1d5dc]"
                      : "text-[#1a2332]"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
