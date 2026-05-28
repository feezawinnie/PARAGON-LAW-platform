import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { Reveal } from "../components/ui/Reveal";
import heroImg from "../assets/hero-section.jpeg";

const practiceAreas = [
  { name: "Corporate & Commercial" },
  { name: "Banking & Finance" },
  { name: "Telecom, Media and Technologies (TMT)" },
  { name: "Data Protection" },
  { name: "Labour/Employment" },
  { name: "Commercial Litigation & Arbitration" },
];

export function HomePage() {
  const { isDark } = useTheme();

  return (
    <div>
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "calc(100vh - 100px)" }}
      >
        <div className={`absolute inset-0 ${isDark ? "bg-[#0a1f2e]" : "bg-white"}`} />

        <div className="absolute inset-0 lg:left-1/2 lg:w-1/2 w-full h-full overflow-hidden">
          <img
            src={heroImg}
            alt="Lady Justice"
            className="w-full h-full object-cover object-center"
            style={{ opacity: isDark ? 0.18 : 0.85 }}
          />
          <div
            className={`absolute inset-0 ${isDark
              ? "bg-gradient-to-r from-[#0a1f2e] via-[#0a1f2e]/60 to-transparent"
              : "bg-gradient-to-r from-white via-white/80 to-transparent lg:from-white lg:via-white/20"
              }`}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 py-24">
          <div className="max-w-[700px]">
            <Reveal delay={0}>
              <p className="text-[#d1704d] text-[11px] tracking-[2.4px] uppercase font-semibold mb-10">
                Paragon Law — Kigali, Rwanda
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="flex flex-col" style={{ lineHeight: 1.0 }}>
                <span
                  className={`font-hero font-semibold whitespace-nowrap ${isDark ? "text-white" : "text-[#0a1f2e]"
                    }`}
                  style={{ fontSize: "clamp(32px, 7vw, 76px)", letterSpacing: "-1px" }}
                >
                  Welcome to
                </span>
                <span
                  className="font-hero font-bold whitespace-nowrap text-[#d1704d]"
                  style={{ fontSize: "clamp(40px, 9vw, 90px)", letterSpacing: "-2px" }}
                >
                  PARAGON LAW
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <p
                className={`mt-8 text-[17px] md:text-[18px] leading-[1.75] max-w-[620px] ${isDark ? "text-[#9ca3af]" : "text-[#4b5563]"
                  }`}
              >
                We are a Kigali-based legal practice that provides practical, reliable,
                and client-focused support for personal and commercial matters. Our work
                is grounded in professionalism, strict confidentiality, and a commitment
                to helping clients make informed decisions. Whether you are an individual,
                SME, NGO, or international investor, we combine local knowledge with
                commercial sense to protect your interests and reduce legal risk.
              </p>
            </Reveal>

            <Reveal delay={0.38}>
              <div className="mt-9">
                <Link
                  to="/about"
                  className={`inline-flex items-center border-2 px-9 py-[18px] text-[13px] tracking-[1.4px] uppercase font-bold transition-all duration-300 ${isDark
                    ? "border-white text-white hover:bg-white/10"
                    : "border-[#0a1f2e] text-[#0a1f2e] hover:bg-[#0a1f2e]/5"
                    }`}
                >
                  Learn More
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className={`relative border-t border-[#d1704d] ${isDark ? "bg-[#0a1f2e]" : "bg-[#f8f7f5]"
          }`}
      >
        <div className="max-w-[1280px] mx-auto px-8 pt-24 pb-28">
          <Reveal delay={0}>
            <p className="text-[#d1704d] text-[11px] tracking-[2.4px] uppercase font-semibold mb-5">
              Our Expertise
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className={`font-display font-bold tracking-[-1.2px] mb-4 ${isDark ? "text-white" : "text-[#0a1f2e]"
                }`}
              style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1 }}
            >
              Practice Areas
            </h2>
            <div className="w-24 h-[4px] bg-[#d1704d] mb-16" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px]">
            {practiceAreas.map(({ name }, i) => (
              <Reveal key={name} delay={0.05 * i}>
                <Link
                  to="/practice-areas"
                  className={`group flex items-center gap-4 px-8 py-8 border transition-all duration-200 ${isDark
                    ? "bg-[#0b2b3d] border-[rgba(209,112,77,0.2)] hover:border-[#d1704d] hover:bg-[#0d3347]"
                    : "bg-white border-gray-200 hover:border-[#d1704d] hover:shadow-sm"
                    }`}
                >
                  <span
                    className={`text-[13px] font-medium tracking-[0.26px] transition-colors duration-200 ${isDark
                      ? "text-[#d1d5dc] group-hover:text-white"
                      : "text-[#374151] group-hover:text-[#d1704d]"
                      }`}
                  >
                    {name}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="flex justify-center mt-16">
              <Link
                to="/practice-areas"
                className="inline-flex items-center border-2 border-[#d1704d] text-[#d1704d] px-14 py-4 text-[13px] tracking-[1.4px] uppercase font-bold hover:bg-[#d1704d] hover:text-white transition-all duration-200"
              >
                View Practice Areas
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
