import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ABOUT" },
    { to: "/practice-areas", label: "PRACTICE AREAS" },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <header className="flex items-center justify-between px-10 py-8 border-b border-[#D1704D]">
        <Link to="/" className="flex items-center">
          <img
            src="/src/assets/PL LOGO MAIN.svg"
            alt="Paragon Law"
            className="h-18 md:h-22 w-auto dark:hidden"
          />
          <img
            src="/src/assets/PL LOGO MAIN-dark.svg"
            alt="Paragon Law"
            className="h-18 md:h-22 w-auto hidden dark:block"
          />
        </Link>

        <nav className="space-x-8 hidden md:block font-semibold">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={
                isActive(to)
                  ? "text-[#D1704D]"
                  : "hover:text-[#D1704D] transition-colors"
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="border border-[#D1704D] text-[#D1704D] hover:bg-[#D1704D] hover:text-white transition-colors flex items-center justify-center p-2 sm:px-4 sm:py-2"
          >
            <span className="hidden sm:inline text-xs font-semibold">
              GET IN TOUCH →
            </span>
            <Phone className="w-5 h-5 sm:hidden" />
          </Link>
          <button
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className="text-[#D1704D] hover:opacity-70 transition-opacity"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-[#D1704D]"
          >
            {menuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="flex flex-col bg-white/20 dark:bg-[#0b2230] border-b border-[#D1704D] px-10 py-4 space-y-4 md:hidden">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={
                isActive(to)
                  ? "text-[#D1704D] font-semibold"
                  : "text-[#0b2230]/60 dark:text-white hover:text-[#D1704D] block"
              }
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
