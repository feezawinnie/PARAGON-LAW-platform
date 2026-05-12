import { useEffect } from "react";
import { Link } from "react-router-dom";
import { practiceAreasHome } from "../data/site";
import homePicUrl from "../assets/home-pic.jpeg";

const cardClass =
  "border px-5 py-4 flex items-center gap-4 text-sm border-[#D1704D]/60 bg-[#D1704D]/5 hover:bg-[#0b2230]/10 dark:border-white/10 dark:bg-white/3 dark:hover:border-[#D1704D]/60 dark:hover:bg-[#D1704D]/5 transition-all cursor-pointer";

export function HomePage() {
  useEffect(() => {
    document.title = "Paragon Law — Kigali, Rwanda";
  }, []);

  return (
    <>
      <section className="relative min-h-[85vh] flex items-center px-10 py-20 overflow-hidden bg-[#f0ede6] dark:bg-transparent">
        {/* Right: photography + layered grade (light / dark) */}
        <div className="hidden md:block absolute top-0 right-0 w-[55%] h-full isolate">
          <img
            src={homePicUrl}
            alt="Paragon Law"
            className="absolute inset-0 h-full w-full object-cover object-[center_40%] scale-105"
          />
          {/* Light: cool white fade into photo + soft terracotta rim + gentle depth */}
          <div
            className="pointer-events-none absolute inset-0 dark:hidden"
            style={{
              background: `
                linear-gradient(
                  100deg,
                  #f0ede6 0%,
                  rgba(240, 237, 230, 0.82) 18%,
                  rgba(240, 237, 230, 0.32) 38%,
                  rgba(240, 237, 230, 0.05) 52%,
                  transparent 60%
                ),
                linear-gradient(
                  200deg,
                  rgba(209, 112, 77, 0.28) 0%,
                  rgba(209, 112, 77, 0.06) 35%,
                  transparent 55%
                ),
                linear-gradient(
                  to bottom,
                  rgba(11, 34, 48, 0.08) 0%,
                  transparent 40%,
                  rgba(11, 34, 48, 0.18) 100%
                )
              `,
            }}
            aria-hidden
          />
          {/* Dark: rich navy veil + warm accent + vignette so the image stays legible */}
          <div
            className="pointer-events-none absolute inset-0 hidden dark:block"
            style={{
              background: `
                linear-gradient(
                  100deg,
                  rgba(11, 34, 48, 0.92) 0%,
                  rgba(11, 34, 48, 0.55) 28%,
                  rgba(11, 34, 48, 0.2) 48%,
                  rgba(11, 34, 48, 0.05) 58%,
                  transparent 68%
                ),
                linear-gradient(
                  210deg,
                  rgba(209, 112, 77, 0.35) 0%,
                  rgba(209, 112, 77, 0.08) 40%,
                  transparent 60%
                ),
                linear-gradient(
                  to bottom,
                  rgba(11, 34, 48, 0.45) 0%,
                  transparent 45%,
                  rgba(11, 34, 48, 0.75) 100%
                ),
                radial-gradient(
                  120% 80% at 85% 45%,
                  transparent 35%,
                  rgba(11, 34, 48, 0.5) 100%
                )
              `,
            }}
            aria-hidden
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center max-w-3xl">
          <p className="text-[#D1704D] tracking-widest text-sm mb-4">
            PARAGON LAW — KIGALI, RWANDA
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#0b2230] dark:text-white">
            WELCOME TO <br />
            <span className="text-[#D1704D]">PARAGON LAW</span>
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-[#4a6070] dark:text-[#C2C7CB] max-w-md">
            We deliver tailored legal solutions to meet your legal needs and
            support your business success.
          </p>

          <Link
            to="/about"
            className="mt-8 border-2 border-[#D1704D] px-6 py-3 text-[#D1704D] dark:border-[#FFFFFF] dark:text-[#FFFFFF] w-fit hover:bg-[#0b2230] hover:text-white dark:hover:bg-transparent dark:hover:text-[#FFFFFF] transition-colors inline-block text-center"
          >
            LEARN MORE
          </Link>
        </div>
      </section>

      <section className="relative px-10 pt-20 pb-20 border-t border-x border-[#D1704D]">
        <p className="text-[#D1704D] tracking-widest text-xs mb-2">OUR EXPERTISE</p>
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[#0b2230] dark:text-white md:text-4xl">
          Practice Areas
        </h2>
        <div
          className="w-15 h-0.75 bg-[#D1704D] mt-3 mb-12 block animate-line-reveal animate-line-reveal-delay-150"
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
          {practiceAreasHome.map((a) => (
            <Link
              key={a.num}
              to="/practice-areas"
              className={cardClass}
            >
              <span className="text-[#D1704D] text-xs font-bold">{a.num}</span>
              {a.title}
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/practice-areas"
            className="border border-[#D1704D] text-[#D1704D] px-10 py-4 text-xs tracking-widest font-bold hover:bg-[#D1704D] hover:text-white transition-colors inline-block"
          >
            VIEW PRACTICE AREAS
          </Link>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-px bg-[#D1704D] animate-line-reveal animate-line-reveal-delay-300"
          aria-hidden
        />
      </section>
    </>
  );
}
