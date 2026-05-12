import { useEffect } from "react";
import gravelUrl from "../assets/gravel.jpeg";

export function AboutPage() {
  useEffect(() => {
    document.title = "About — Paragon Law";
  }, []);

  return (
    <>
      {/* Who we are — text column + half-bleed gravel. */}
      <section className="relative mb-0 flex min-h-0 flex-col overflow-hidden bg-[#f0ede6] dark:bg-transparent md:min-h-[min(78vh,820px)] md:flex-row">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 `z-1` hidden w-1/2 bg-[#f0ede6] dark:bg-[#0b2230] md:block"
          aria-hidden
        />

        <div className="absolute inset-y-0 right-0 z-0 hidden w-1/2 isolate overflow-hidden md:block">
          <img
            src={gravelUrl}
            alt=""
            className="absolute inset-0 h-[108%] w-full max-w-none top-[-4%] object-cover object-[center_62%] scale-[1.15] sm:scale-110 md:scale-105"
          />
          <div
            className="pointer-events-none absolute inset-0 dark:hidden"
            style={{
              background: `
                linear-gradient(
                  100deg,
                  rgba(240, 237, 230, 0.55) 0%,
                  rgba(240, 237, 230, 0.12) 18%,
                  transparent 36%
                ),
                linear-gradient(
                  to bottom,
                  transparent 55%,
                  rgba(11, 34, 48, 0.12) 100%
                )
              `,
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 hidden dark:block"
            style={{
              background: `
                linear-gradient(
                  100deg,
                  rgba(11, 34, 48, 0.5) 0%,
                  rgba(11, 34, 48, 0.12) 20%,
                  transparent 38%
                ),
                linear-gradient(
                  to bottom,
                  transparent 50%,
                  rgba(11, 34, 48, 0.55) 100%
                )
              `,
            }}
            aria-hidden
          />
        </div>

        <div className="relative z-10 flex min-h-0 w-full flex-col justify-start bg-[#f0ede6] px-6 py-14 dark:bg-[#0b2230] max-sm:px-4 sm:px-10 md:min-h-[min(78vh,820px)] md:w-[58%] md:max-w-none md:self-stretch md:bg-transparent md:dark:bg-transparent md:px-10 md:py-20 md:pr-6 lg:pr-10">
          <p className="text-[#D1704D] dark:text-[#D1704D] text-xs tracking-[0.2em] uppercase mb-8">
            ABOUT PARAGON LAW
          </p>
          <h1 className="font-display mb-6 text-4xl font-medium leading-[1.12] tracking-tight text-[#0b2230] drop-shadow-sm dark:text-white dark:drop-shadow-md md:text-7xl">
            Who we are
          </h1>
          <div
            className="w-14 h-0.5 bg-[#D1704D] block animate-line-reveal animate-line-reveal-delay-300"
            aria-hidden
          />
          <div className="mt-8 flex flex-col gap-6 text-[#0b2230]/80 dark:text-[#8a9eaa] text-sm leading-7 md:max-w-none">
            <p className="text-pretty drop-shadow-sm dark:drop-shadow-md md:text-base md:leading-relaxed">
              Paragon Law is a boutique law firm providing top quality and
              specialized legal services to clients across all sectors of the
              economy.
            </p>
            <p className="text-pretty drop-shadow-sm dark:drop-shadow-md md:text-base md:leading-relaxed">
              We are a team of experienced and dynamic legal professionals and
              we offer our clients personalized solutions tailored to their
              needs.
            </p>
            <p className="text-pretty drop-shadow-sm dark:drop-shadow-md md:text-base md:leading-relaxed">
              Our expertise covers various areas, including Corporate and
              Commercial matters, Banking and Finance, Labour/Employment,
              Telecommunications, Media and Technologies (TMT), Data Protection,
              commercial litigation and commercial arbitration.
            </p>
          </div>
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
            solutions to our clients, ensuring that their transactional needs
            are met promptly and effectively.
          </p>
        </div>
      </section>
    </>
  );
}
