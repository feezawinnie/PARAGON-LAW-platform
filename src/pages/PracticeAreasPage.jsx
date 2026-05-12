import { Link } from "react-router-dom";
import { Shield, Briefcase, Landmark, Wifi, Users, Scale } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { Reveal } from "../components/ui/Reveal";

const areas = [
  {
    num: "01",
    icon: Briefcase,
    title: "Corporate and Commercial",
    desc: "We provide comprehensive legal support on business transactions, contract drafting and negotiation, corporate governance, legal due diligence and regulatory compliance.",
  },
  {
    num: "02",
    icon: Landmark,
    title: "Banking and Finance",
    desc: "We provide expert legal guidance on financial transactions, ensuring compliance within regulatory frameworks.",
  },
  {
    num: "03",
    icon: Wifi,
    title: "Telecom, Media and Technologies (TMT)",
    desc: "We deliver tailored legal solutions for clients in the technology, media, and telecommunications sectors.",
  },
  {
    num: "04",
    icon: Shield,
    title: "Data Protection",
    desc: "We advise and assist on all legal and regulatory matters relating to data protection.",
  },
  {
    num: "05",
    icon: Users,
    title: "Labour/Employment",
    desc: "We provide specialized legal advice across all aspects of employment law, including drafting and reviewing employment contracts and HR policies, advising on organizational restructuring, and labour disputes resolution.",
  },
  {
    num: "06",
    icon: Scale,
    title: "Commercial Litigation and Commercial Arbitration",
    desc: "We assist clients in resolving commercial disputes through expert legal counsel and strategic negotiation as well as representation in litigation and arbitration proceedings.",
  },
];

export function PracticeAreasPage() {
  const { isDark } = useTheme();

  const cardBg = isDark ? "#0d2f42" : "#f4f3f1";
  const pageBg = isDark ? "#0a1f2e" : "#ffffff";
  const headingCl = isDark ? "text-white" : "text-[#0a1f2e]";
  const bodyCl = isDark ? "text-[#8a95a3]" : "text-[#5a6370]";
  const iconCl = isDark ? "text-[#c0c8d0]" : "text-[#374151]";

  return (
    <div style={{ backgroundColor: pageBg }}>
      <div className="max-w-[1280px] mx-auto px-8 pt-20 pb-14">
        <Reveal delay={0}>
          <p className="text-[#d1704d] text-[11px] tracking-[2.4px] uppercase font-semibold mb-6">
            Our Expertise
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1
            className={`font-display font-bold tracking-[-1px] mb-4 ${headingCl}`}
            style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.05 }}
          >
            Practice Areas
          </h1>
        </Reveal>
      </div>

      <div
        className={`border-t ${isDark ? "border-white/5" : "border-gray-100"}`}
        style={{ backgroundColor: isDark ? pageBg : "#f8f7f5" }}
      >
        <div className="max-w-[1280px] mx-auto px-8 pt-2 pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {areas.map(({ num, icon: Icon, title, desc }, index) => (
              <Reveal key={num} delay={0.06 * (index % 3)}>
                <div
                  className={`group flex flex-col gap-6 p-10 h-full transition-all duration-300
                    border-b ${isDark ? "border-white/5" : "border-gray-100"}
                    ${index % 3 !== 2 ? (isDark ? "lg:border-r border-white/5" : "lg:border-r border-gray-100") : ""}
                    hover:z-10
                  `}
                  style={{ backgroundColor: "transparent" }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = isDark ? "rgba(13,47,66,0.5)" : "rgba(244,243,241,0.8)"}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
                >
                  <div className="flex flex-col gap-4">
                    <div className={`${iconCl} transition-colors duration-200 group-hover:text-[#d1704d]`}>
                      <Icon size={24} strokeWidth={1.4} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 flex-1">
                    <h2
                      className={`font-display font-bold text-[17px] leading-[1.35] tracking-[-0.2px] transition-colors duration-200 ${headingCl}`}
                    >
                      {title}
                    </h2>
                    <p className={`text-[13px] leading-[1.75] ${bodyCl}`}>
                      {desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <section className={isDark ? "bg-[#0a1f2e]" : "bg-white"}>
        <div className="max-w-[1280px] mx-auto px-8 py-24 flex flex-col items-center text-center gap-6">
          <Reveal delay={0}>
            <p className="text-[#d1704d] text-[11px] tracking-[2.4px] uppercase font-semibold">
              Ready to discuss your legal needs?
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className={`font-display font-bold text-[36px] md:text-[44px] tracking-[-1px] leading-[1.1] ${isDark ? "text-white" : "text-[#0a1f2e]"}`}>
              Get in touch with our team
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-4">
              <Link
                to="/contact"
                className={`inline-flex items-center border-2 px-10 py-4 text-[13px] tracking-[1.4px] uppercase font-bold transition-all duration-300 ${isDark
                  ? "border-white text-white hover:bg-white/10"
                  : "border-[#0a1f2e] text-[#0a1f2e] hover:bg-[#0a1f2e]/5"
                  }`}
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
