import { Menu, Moon, Phone, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import logoDark from "../../assets/PL LOGO MAIN-dark.svg";
import logoLight from "../../assets/PL LOGO MAIN.svg";

const navLinkClass = ({ isActive }) =>
  isActive ? "text-[#D1704D]" : "hover:text-[#D1704D]";

const mobileItem = ({ isActive }) =>
  `block px-10 ${
    isActive
      ? "text-[#D1704D]"
      : "text-[#0b2230]/60 dark:text-white hover:text-[#D1704D]"
  }`;

export function SiteHeader() {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="flex items-center justify-between px-10 py-8 border-b border-[#D1704D]">
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logoLight}
            alt="Paragon Law"
            className="h-24 md:h-28 w-auto dark:hidden"
          />
          <img
            src={logoDark}
            alt="Paragon Law"
            className="h-24 md:h-28 w-auto hidden dark:block"
          />
        </Link>

        <nav className="space-x-8 hidden md:block font-semibold">
          <NavLink to="/" end className={navLinkClass}>
            HOME
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            ABOUT
          </NavLink>
          <NavLink to="/practice-areas" className={navLinkClass}>
            PRACTICE AREAS
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="border border-[#D1704D] text-[#D1704D] hover:bg-[#D1704D] hover:text-white transition-colors flex items-center justify-center p-2 sm:px-4 sm:py-2"
          >
            <span className="hidden sm:inline text-xs font-semibold">
              GET IN TOUCH →
            </span>
            <Phone className="w-5 h-5 sm:hidden" strokeWidth={1.75} />
          </Link>

          <button
            type="button"
            onClick={toggleTheme}
            className="text-[#D1704D] hover:text-white md:hover:text-[#0b2230] dark:hover:text-white transition-colors"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Sun className="w-5 h-5" strokeWidth={1.75} />
            ) : (
              <Moon className="w-5 h-5" strokeWidth={1.75} />
            )}
          </button>

          <button
            type="button"
            className="md:hidden text-[#D1704D]"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-8 h-8" strokeWidth={1.5} />
            ) : (
              <Menu className="w-8 h-8" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      {menuOpen ? (
        <nav
          id="mobile-menu"
          className="flex flex-col bg-[#f0ede6] dark:bg-[#0b2230] border-b border-[#D1704D] py-4 space-y-4 md:hidden transition-colors duration-300"
        >
          <NavLink to="/" end className={mobileItem}>
            HOME
          </NavLink>
          <NavLink to="/about" className={mobileItem}>
            ABOUT
          </NavLink>
          <NavLink to="/practice-areas" className={mobileItem}>
            PRACTICE AREAS
          </NavLink>
        </nav>
      ) : null}
    </>
  );
}
