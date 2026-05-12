import { useEffect } from "react";
import gravelUrl from "../assets/gravel.jpeg";

export function AboutPage() {
  useEffect(() => {
    document.title = "About — Paragon Law";
  }, []);

  return (
    <>
      {/* Hero: gravel image — taller band; same crop, overlays, and scales as before */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[30rem]">
          <img
            src={gravelUrl}
            alt=""
            className="absolute inset-0 h-[108%] w-full max-w-none -top-[4%] object-cover object-[center_62%] scale-[1.15] sm:scale-110 md:scale-105"
          />
          {/* Light: lift shadows, fade content edge, hint of brand warmth */}
          <div
            className="pointer-events-none absolute inset-0 dark:hidden"
            style={{
              background: `
                linear-gradient(
                  90deg,
                  rgba(255, 255, 255, 0.92) 0%,
                  rgba(255, 255, 255, 0.45) 28%,
                  rgba(255, 255, 255, 0.12) 55%,
                  transparent 72%
                ),
                linear-gradient(
                  to bottom,
                  rgba(255, 255, 255, 0.35) 0%,
                  transparent 45%,
                  rgba(232, 238, 242, 0.55) 100%
                ),
                linear-gradient(
                  120deg,
                  rgba(209, 112, 77, 0.18) 0%,
                  transparent 50%
                )
              `,
            }}
            aria-hidden
          />
          {/* Dark: slate wash + terracotta glint + bottom weight */}
          <div
            className="pointer-events-none absolute inset-0 hidden dark:block"
            style={{
              background: `
                linear-gradient(
                  90deg,
                  rgba(11, 34, 48, 0.88) 0%,
                  rgba(11, 34, 48, 0.4) 38%,
                  rgba(11, 34, 48, 0.12) 62%,
                  transparent 78%
                ),
                linear-gradient(
                  to bottom,
                  rgba(11, 34, 48, 0.5) 0%,
                  transparent 42%,
                  rgba(11, 34, 48, 0.82) 100%
                ),
                linear-gradient(
                  125deg,
                  rgba(209, 112, 77, 0.22) 0%,
                  transparent 45%
                )
              `,
            }}
            aria-hidden
          />
        </div>
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-px bg-[#D1704D]/40 dark:bg-[#D1704D]/35 animate-line-reveal"
          aria-hidden
        />
      </section>

      <section className="px-12 py-20 flex flex-col md:flex-row gap-20">
        <div className="md:w-[45%] shrink-0">
          <p className="text-[#0b2230]/50 dark:text-[#6b8a99] text-xs tracking-[0.2em] uppercase mb-8">
            ABOUT PARAGON LAW
          </p>
          <h1 className="font-display mb-6 text-4xl font-medium leading-[1.12] tracking-tight text-[#0b2230] dark:text-white md:text-6xl">
            Who we are
          </h1>
          <div
            className="w-14 h-0.5 bg-[#D1704D] block animate-line-reveal animate-line-reveal-delay-300"
            aria-hidden
          />
        </div>

        <div className="md:w-[55%] flex flex-col justify-center gap-6 text-[#0b2230]/80 dark:text-[#8a9eaa] text-sm leading-7">
          <p>
            Paragon Law is a boutique law firm providing top quality and
            specialized legal services to clients across all sectors of the
            economy.
          </p>
          <p>
            Our expertise covers Corporate and Commercial matters, Banking and
            Finance, Legal Due Diligence, Taxation, Labour/Employment,
            Telecommunications, Media and Technologies (TMT), commercial
            litigations and commercial arbitration.
          </p>
        </div>
      </section>

      <section className="px-12 pb-24 flex flex-col md:flex-row gap-0">
        <div className="md:w-1/2 border-l-[3px] border-[#D1704D] pl-10 pr-16 py-6">
          <h2 className="font-display text-2xl font-medium tracking-tight text-[#D1704D] dark:text-white md:text-3xl mb-5">
            Our Vision
          </h2>
          <p className="text-[#0b2230]/60 dark:text-[#8a9eaa] text-sm leading-7">
            Our vision is to be the most preferred law firm for commercially
            viable solutions to clients both locally and internationally.
          </p>
        </div>

        <div className="md:w-1/2 border-l-[3px] border-[#D1704D] pl-10 pr-16 py-6 mt-10 md:mt-0">
          <h2 className="font-display text-2xl font-medium tracking-tight text-[#D1704D] dark:text-white md:text-3xl mb-5">
            Our Mission
          </h2>
          <p className="text-[#0b2230]/60 dark:text-[#8a9eaa] text-sm leading-7">
            Our mission is to provide efficient, timely, and diligent legal
            solutions to our clients, ensuring that their transactional needs are
            met promptly and effectively.
          </p>
        </div>
      </section>
    </>
  );
}
