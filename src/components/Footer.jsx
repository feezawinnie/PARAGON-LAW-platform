import { Link } from "react-router-dom";

const practiceAreas = [
  "Corporate & Commercial",
  "Banking & Finance",
  "Telecom, Media and Technologies (TMT)",
  "Legal Due Diligence",
  "Labour/Employment",
  "Commercial Litigation & Arbitration",
  "Taxation",
];
const companyLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/practice-areas", label: "Our Expertise" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0e2d40] border-t border-white/10 px-10 pt-14 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10 mb-6">
        <div>
          <div className="mb-4">
            <img
              src="/src/assets/PL LOGO MAIN-dark.svg"
              alt="Paragon Law"
              className="h-18 md:h-22 w-auto"
            />
          </div>
          <p className="text-xs text-[#717273] leading-relaxed max-w-50">
            Law firm based in Kigali, providing specialized legal services
            across Rwanda and globally.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] tracking-widest text-[#5e6162] uppercase mb-4">
            Practice Areas
          </h4>
          <ul className="space-y-2.5">
            {practiceAreas.map((area) => (
              <li key={area}>
                <Link
                  to="/practice-areas"
                  className="text-xs text-white/60 hover:text-[#D1704D] transition-colors"
                >
                  {area}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] tracking-widest text-[#5e6162] uppercase mb-4">
            Company
          </h4>
          <ul className="space-y-2.5">
            {companyLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-xs text-white/60 hover:text-[#D1704D] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] tracking-widest text-[#5e6162] uppercase mb-4">
            CONTACT
          </h4>
          <p className="text-[10px] tracking-widest text-[#5e6162] uppercase mb-1">
            Email
          </p>
          <p className="text-xs text-white/60 mb-4">info@paragonlaw.rw</p>
          <p className="text-[10px] tracking-widest text-[#5e6162] uppercase mb-1">
            Phone
          </p>
          <p className="text-xs text-white/60">+250 730 303 607</p>
        </div>
      </div>
      <div className="flex items-center justify-between text-[11px] text-white/30">
        <span>© 2026 Paragon Law. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#D1704D] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#D1704D] transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
