import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import logoLight from "../../assets/PL LOGO MAIN.svg";
import logoDark from "../../assets/PL LOGO MAIN-dark.svg";

const practiceAreas = [
  "Corporate & Commercial",
  "Banking & Finance",
  "Telecom, Media & Technologies (TMT)",
  "Data Protection",
  "Labour/Employment",
  "Commercial Litigation & Arbitration",
];

const companyLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Expertise", to: "/practice-areas" },
  { label: "Contact", to: "/contact" },
];

export function SiteFooter() {
  const { isDark } = useTheme();

  const footerBg = isDark ? "bg-[#0b2b3d]" : "bg-[#f8f7f5]";
  const textColor = isDark ? "text-[#d1d5dc]" : "text-[#4b5563]";
  const headingColor = isDark ? "text-[#6a7282]" : "text-[#6a7282]"; // Sub-labels stay muted
  const linkHoverColor = "hover:text-[#d1704d]";
  const logo = isDark ? logoDark : logoLight;
  const bottomBorder = isDark ? "border-[#4a5565]/40" : "border-gray-200";
  const watermarkColor = isDark ? "text-white" : "text-[#0a1f2e]";

  return (
    <footer className={`${footerBg} relative overflow-hidden transition-colors duration-300`}>

      <div className="max-w-[1280px] mx-auto px-8 pt-24 pb-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-20">
          <div className="flex flex-col gap-4">
            <img
              src={logo}
              alt="Paragon Law"
              className="h-[120px] w-auto object-contain object-left"
            />
            <p className={`${textColor} text-[15px] leading-[1.7] max-w-[240px]`}>
              A Law Firm based in Kigali, providing specialized legal services across
              Rwanda and globally.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <span className={`${headingColor} text-[12px] tracking-[2px] uppercase font-bold`}>
              Practice Areas
            </span>
            <ul className="flex flex-col gap-4">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <Link
                    to="/practice-areas"
                    className={`${textColor} text-[15px] leading-[1.4] ${linkHoverColor} transition-colors duration-200`}
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <span className={`${headingColor} text-[12px] tracking-[2px] uppercase font-bold`}>
              Company
            </span>
            <ul className="flex flex-col gap-4">
              {companyLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className={`${textColor} text-[15px] leading-[1.4] ${linkHoverColor} transition-colors duration-200`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <span className={`${headingColor} text-[12px] tracking-[2px] uppercase font-bold`}>
              Contact
            </span>
            <div className="flex flex-col gap-6">
              <div>
                <p className={`${headingColor} text-[11px] tracking-[1.5px] uppercase font-semibold mb-3`}>
                  Email
                </p>
                <a
                  href="mailto:info@paragonlaw.rw"
                  className={`${textColor} text-[15px] ${linkHoverColor} transition-colors duration-200`}
                >
                  info@paragonlaw.rw
                </a>
              </div>
              <div>
                <p className={`${headingColor} text-[11px] tracking-[1.5px] uppercase font-semibold mb-3`}>
                  Phone
                </p>
                <a
                  href="tel:+250730303607"
                  className={`${textColor} text-[15px] ${linkHoverColor} transition-colors duration-200`}
                >
                  +250 730 303 607
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="relative z-0 w-full overflow-hidden pointer-events-none select-none flex items-end justify-center"
        style={{ height: "clamp(60px, 12vw, 160px)" }}
      >
        <p
          className={`font-display font-extrabold ${watermarkColor} leading-none whitespace-nowrap`}
          style={{
            fontSize: "clamp(24px, 12vw, 180px)",
            letterSpacing: "-0.04em",
            opacity: isDark ? 0.05 : 0.1,
          }}
        >
          PARAGON LAW
        </p>
      </div>

      <div className={`relative z-10 border-t ${bottomBorder}`}>
        <div className="max-w-[1280px] mx-auto px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className={`${headingColor} text-[13px] tracking-[0.5px]`}>
            © 2026 Paragon Law. All rights reserved.
          </p>
          {/* <div className="flex items-center gap-8">
            <a
              href="#"
              className={`${headingColor} text-[13px] tracking-[0.5px] ${linkHoverColor} transition-colors duration-200`}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className={`${headingColor} text-[13px] tracking-[0.5px] ${linkHoverColor} transition-colors duration-200`}
            >
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
