import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
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
    `text-[11px] tracking-[1.44px] uppercase transition-colors duration-200 whitespace-nowrap ${isActive
      ? "text-[#d1704d] font-bold"
      : isDark
        ? "text-[#9ca3af] hover:text-white font-medium"
        : "text-[#4b5563] hover:text-[#d1704d] font-medium"
    }`;

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
        <div className="max-w-[1280px] mx-auto px-8 h-full flex items-center justify-between">
          <NavLink to="/" className="flex-shrink-0 flex items-center py-[6px]">
            <img
              src={isDark ? logoDark : logoLight}
              alt="Paragon Law"
              className="h-[140px] w-auto object-contain mt-2"
            />
          </NavLink>

          <nav className="hidden md:flex items-center gap-10">
            <NavLink to="/" end className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/practice-areas" className={navLinkClass}>Practice Areas</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-full transition-colors duration-200 ${isDark ? "text-[#9ca3af] hover:text-[#d1704d]" : "text-[#6b7280] hover:text-[#d1704d]"
                }`}
            >
              {isDark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <NavLink
              to="/contact"
              className={`flex items-center gap-2 border px-6 py-[13px] text-[12px] tracking-[0.65px] uppercase font-medium transition-all duration-300 ${isDark
                  ? "border-[#d1704d] text-[#d1704d] hover:bg-[#d1704d]/10"
                  : "border-[#d1704d] text-[#d1704d] hover:bg-[#d1704d]/10"
                }`}
            >
              Get in Touch
              <span className="text-[16px] leading-none">→</span>
            </NavLink>
          </div>

          <button
            className={`md:hidden p-2 transition-colors duration-200 ${isDark ? "text-[#d1d5dc]" : "text-[#1a2332]"
              }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
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
          <div className="px-8 pt-10 flex items-center gap-4">
            <button
              onClick={() => { toggleTheme(); setMobileOpen(false); }}
              className={`p-2 ${isDark ? "text-[#9ca3af]" : "text-[#6b7280]"}`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
