import { Compass, Target } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { Reveal } from "../components/ui/Reveal";
import { motion } from "framer-motion";
import gravelImg from "../assets/gravel.jpeg";

export function AboutPage() {
  const { isDark } = useTheme();

  const bg = isDark ? "bg-[#0a1f2e]" : "bg-white";
  const headingColor = isDark ? "text-white" : "text-[#0a1f2e]";
  const bodyColor = isDark ? "text-[#9ca3af]" : "text-[#4b5563]";

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
        <div className="max-w-[1280px] mx-auto px-8 pt-20 pb-28">
          <Reveal delay={0}>
            <p className="text-[#d1704d] text-[11px] tracking-[2.4px] uppercase font-semibold mb-14">
              Our Core
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            <Reveal direction="left" delay={0.08}>
              <div
                className={`relative flex flex-col h-full p-10 overflow-hidden ${isDark
                  ? "bg-[#0b2b3d] border border-[rgba(209,112,77,0.15)]"
                  : "bg-[#f8f7f5] border border-gray-100"
                  }`}
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#d1704d]" />
                <div className="flex flex-col gap-6 pl-2">
                  <div className="text-[#d1704d]">
                    <Compass size={32} strokeWidth={1.5} />
                  </div>

                  <div className="flex flex-col gap-4">
                    <h2
                      className={`font-display font-bold text-[28px] leading-[1.2] tracking-[-0.5px] ${headingColor}`}
                    >
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
                  : "bg-[#f8f7f5] border border-gray-100"
                  }`}
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#d1704d]" />

                <div className="flex flex-col gap-6 pl-2">
                  <div className="text-[#d1704d]">
                    <Target size={32} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2
                      className={`font-display font-bold text-[28px] leading-[1.2] tracking-[-0.5px] ${headingColor}`}
                    >
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
