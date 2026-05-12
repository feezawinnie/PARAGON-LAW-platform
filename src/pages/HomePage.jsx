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
      <section className="relative mb-14 flex min-h-[85vh] items-stretch overflow-hidden bg-[#f0ede6] px-10 pb-0 pt-0 dark:bg-transparent">
        {/* Full-height left fill: section has no bottom padding so abs layers reach true bottom (pb used to leave an unfilled strip) */}
        <div
          className="pointer-events-none absolute -top-px bottom-0 left-0 z-[1] hidden w-[48%] bg-[#f0ede6] dark:bg-[#0b2230] md:block"
          aria-hidden
        />
        {/* Right: letterboxing behind cover image matches page / dark shell */}
        <div className="hidden md:block absolute -top-px bottom-0 right-0 left-[43%] z-[2] isolate bg-[#f0ede6] dark:bg-[#0b2230]">
          <img
            src={homePicUrl}
            alt="Paragon Law"
            className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
          />
          {/* Light: layered linear grads on home-pic — cream join, soft depth, hint of brand warmth */}
          <div
            className="pointer-events-none absolute inset-0 dark:hidden"
            style={{
              background: `
                linear-gradient(180deg, rgba(240, 237, 230, 0.5) 0%, rgba(240, 237, 230, 0.12) 14%, transparent 30%),
                linear-gradient(100deg, rgba(240, 237, 230, 0.7) 0%, rgba(240, 237, 230, 0.28) 16%, rgba(240, 237, 230, 0.06) 32%, transparent 46%),
                linear-gradient(200deg, rgba(209, 112, 77, 0.2) 0%, rgba(209, 112, 77, 0.05) 38%, transparent 58%),
                linear-gradient(to bottom, transparent 52%, rgba(11, 34, 48, 0.07) 100%)
              `,
            }}
            aria-hidden
          />
          {/* Dark: navy veil + join + warm accent + gentle floor */}
          <div
            className="pointer-events-none absolute inset-0 hidden dark:block"
            style={{
              background: `
                linear-gradient(180deg, rgba(11, 34, 48, 0.65) 0%, rgba(11, 34, 48, 0.2) 16%, transparent 34%),
                linear-gradient(100deg, rgba(11, 34, 48, 0.9) 0%, rgba(11, 34, 48, 0.5) 18%, rgba(11, 34, 48, 0.12) 36%, transparent 50%),
                linear-gradient(210deg, rgba(209, 112, 77, 0.28) 0%, rgba(209, 112, 77, 0.06) 40%, transparent 62%),
                linear-gradient(to bottom, transparent 48%, rgba(11, 34, 48, 0.65) 100%)
              `,
            }}
            aria-hidden
          />
        </div>

        <div className="relative z-10 flex w-full max-w-3xl flex-col justify-center bg-[#f0ede6] pt-20 dark:bg-[#0b2230] md:max-w-none md:w-[46%] md:shrink-0 md:justify-end md:self-stretch md:bg-transparent md:pr-4">
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

      <section className="relative border-x border-t border-[#D1704D] px-10 pb-20 pt-8">
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
