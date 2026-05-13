import { Compass, Target, ShieldCheck, Award, Users, Briefcase, Zap } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { Reveal } from "../components/ui/Reveal";
import { motion } from "framer-motion";
import gravelImg from "../assets/gravel.jpeg";

export function AboutPage() {
  const { isDark } = useTheme();

  const bg = isDark ? "bg-[#0a1f2e]" : "bg-white";
  const headingColor = isDark ? "text-white" : "text-[#0a1f2e]";
  const bodyColor = isDark ? "text-[#9ca3af]" : "text-[#4b5563]";

  const coreValues = [
    {
      title: "Integrity",
      icon: ShieldCheck,
      desc: "Upholding the highest standards of honesty, ethics, and professionalism in every aspect of our practice.",
    },
    {
      title: "Excellence",
      icon: Award,
      desc: "Delivering precise, diligent, and consistently high-quality legal services.",
    },
    {
      title: "Client Commitment",
      icon: Users,
      desc: "Placing clients at the center of all we do through responsive, practical, and solution-oriented support.",
    },
    {
      title: "Professionalism",
      icon: Briefcase,
      desc: "Conducting every engagement with competence, accountability, respect, and discretion.",
    },
    {
      title: "Innovation",
      icon: Zap,
      desc: "Embracing forward-thinking strategies to meet evolving legal and business challenges.",
    },
  ];

  return (
    <div className={bg}>
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "calc(100vh - 100px)" }}
      >
        <div className={`absolute inset-0 ${bg}`} />
        <div className="absolute inset-0 lg:left-1/2 lg:w-1/2 w-full h-full overflow-hidden">
          <img
            src={gravelImg}
            alt="Gavel on desk"
            className="w-full h-full object-cover object-center"
            style={{ opacity: isDark ? 0.24 : 0.95 }}
          />
          <div
            className={`absolute inset-0 ${isDark
              ? "bg-gradient-to-r from-[#0a1f2e] via-[#0a1f2e]/55 to-transparent"
              : "bg-gradient-to-r from-white via-white/80 to-transparent lg:from-white lg:via-white/55"
              }`}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 py-28">
          <Reveal delay={0}>
            <p className="text-[#d1704d] text-[11px] tracking-[2.4px] uppercase font-semibold mb-16">
              About Paragon Law
            </p>
          </Reveal>

          <div className="flex flex-col gap-14 max-w-[840px]">
            <Reveal direction="up" delay={0.1}>
              <h1
                className={`font-display font-bold leading-[1.05] tracking-[-2px] mb-8 ${headingColor}`}
                style={{ fontSize: "clamp(44px, 7vw, 88px)" }}
              >
                Who we are
              </h1>
              <motion.div
                className="w-24 h-[4px] bg-[#d1704d]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                style={{ transformOrigin: "left center" }}
              />
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <div className="flex flex-col gap-8">
                <p className={`text-[18px] md:text-[20px] leading-[1.8] font-medium ${isDark ? "text-white/90" : "text-[#0a1f2e]/90"}`}>
                  Paragon Law is a boutique law firm providing top quality and
                  specialized legal services to clients across all sectors of the
                  economy.
                </p>
                <p className={`text-[18px] leading-[1.85] font-medium ${isDark ? "text-white/90" : "text-[#0a1f2e]/90"}`}>
                  We are a team of experienced and dynamic legal professionals
                  and we offer our clients personalized solutions tailored to
                  their needs.
                </p>
                <p className={`text-[18px] leading-[1.85] font-medium ${isDark ? "text-white/90" : "text-[#0a1f2e]/90"}`}>
                  Our expertise covers various areas, including Corporate and
                  Commercial matters, Banking and Finance, Labour/Employment,
                  Telecommunications, Media and Technologies (TMT), Data
                  Protection, commercial litigation and commercial arbitration.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-8">
        <div className={`h-px ${isDark ? "bg-white/5" : "bg-gray-100"}`} />
      </div>

      <section className={isDark ? "bg-[#0a1f2e]" : "bg-[#f8f7f5]"}>
        <div className="max-w-[1280px] mx-auto px-8 pt-24 pb-28">
          <Reveal delay={0.2}>
            <p className="text-[#d1704d] text-[11px] tracking-[2.4px] uppercase font-semibold mb-14">
              Our Core Values
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-6 mb-24">
            {coreValues.map(({ title, icon: Icon, desc }, i) => (
              <Reveal key={title} delay={0.05 * i} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <div
                  className={`group relative h-full p-8 border transition-all duration-500 ${isDark
                    ? "bg-[#0b2b3d]/40 border-white/5 hover:border-[#d1704d]/40"
                    : "bg-white border-gray-100 hover:border-[#d1704d]/30 hover:shadow-xl hover:shadow-[#d1704d]/5"
                    }`}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] bg-[#d1704d] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                    style={{ transformOrigin: "left" }}
                  />

                  <div className="flex flex-col items-center text-center gap-6">
                    <div className={`p-4 rounded-full transition-all duration-500 ${isDark ? "bg-[#0a1f2e] text-[#d1704d] group-hover:bg-[#d1704d] group-hover:text-white"
                      : "bg-[#f8f7f5] text-[#d1704d] group-hover:bg-[#d1704d] group-hover:text-white"
                      }`}>
                      <Icon size={28} strokeWidth={1.5} />
                    </div>

                    <div className="flex flex-col gap-3">
                      <h3 className={`font-display font-bold text-[20px] tracking-[-0.3px] ${headingColor}`}>
                        {title}
                      </h3>
                      <p className={`text-[15px] leading-[1.7] ${bodyColor}`}>
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0}>
            <p className="text-[#d1704d] text-[11px] tracking-[2.4px] uppercase font-semibold mb-14">
              Our Vision & Mission
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Reveal direction="left" delay={0.08}>
              <div
                className={`relative flex flex-col h-full p-10 overflow-hidden ${isDark
                  ? "bg-[#0b2b3d] border border-[rgba(209,112,77,0.15)]"
                  : "bg-white border border-gray-100 shadow-sm"
                  }`}
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#d1704d]" />
                <div className="flex flex-col gap-6 pl-2">
                  <div className="text-[#d1704d]">
                    <Compass size={32} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className={`font-display font-bold text-[28px] leading-[1.2] tracking-[-0.5px] ${headingColor}`}>
                      Our Vision
                    </h2>
                    <p className={`text-[15px] leading-[1.8] ${bodyColor}`}>
                      Our vision is to be the most preferred law firm for
                      commercially viable solutions to clients both locally and
                      internationally.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.16}>
              <div
                className={`relative flex flex-col h-full p-10 overflow-hidden ${isDark
                  ? "bg-[#0b2b3d] border border-[rgba(209,112,77,0.15)]"
                  : "bg-white border border-gray-100 shadow-sm"
                  }`}
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#d1704d]" />
                <div className="flex flex-col gap-6 pl-2">
                  <div className="text-[#d1704d]">
                    <Target size={32} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className={`font-display font-bold text-[28px] leading-[1.2] tracking-[-0.5px] ${headingColor}`}>
                      Our Mission
                    </h2>
                    <p className={`text-[15px] leading-[1.8] ${bodyColor}`}>
                      Our mission is to provide efficient, timely, and diligent
                      legal solutions to our clients, ensuring that their
                      transactional needs are met promptly and effectively.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
