import { Link } from "react-router-dom";
import { practiceAreaNames, siteContact } from "../../data/site";
import logoDark from "../../assets/PL LOGO MAIN-dark.svg";

export function SiteFooter() {
  return (
    <footer className="bg-[#0e2d40] border-t border-white/10 px-10 pt-14 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10 mb-6">
        <div>
          <div className="mb-4">
            <img
              src={logoDark}
              alt="Paragon Law"
              className="h-20 md:h-24 w-auto"
            />
          </div>
          <p className="text-xs text-[#717273] leading-relaxed max-w-50">
            Law firm based in Kigali, providing specialized legal services across
            Rwanda and globally.
          </p>
        </div>

        <div>
          <h4 className="text-[10px] tracking-widest text-[#5e6162] uppercase mb-4">
            Practice Areas
          </h4>
          <ul className="space-y-2.5">
            {practiceAreaNames.map((name) => (
              <li key={name}>
                <Link
                  to="/practice-areas"
                  className="text-xs text-white/60 hover:text-[#D1704D] transition-colors"
                >
                  {name}
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
            <li>
              <Link
                to="/"
                className="text-xs text-white/60 hover:text-[#D1704D] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-xs text-white/60 hover:text-[#D1704D] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/practice-areas"
                className="text-xs text-white/60 hover:text-[#D1704D] transition-colors"
              >
                Our Expertise
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-xs text-white/60 hover:text-[#D1704D] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] tracking-widest text-[#5e6162] uppercase mb-4">
            CONTACT
          </h4>
          <p className="text-[10px] tracking-widest text-[#5e6162] uppercase mb-1">
            Email
          </p>
          <p className="text-xs text-white/60 mb-4">{siteContact.email}</p>
          <p className="text-[10px] tracking-widest text-[#5e6162] uppercase mb-1">
            Phone
          </p>
          <p className="text-xs text-white/60">{siteContact.phone}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[11px] text-white/30">
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
