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
      <section className="relative mb-14 flex min-h-0 flex-col overflow-hidden bg-[#f0ede6] dark:bg-transparent md:min-h-[85vh] md:flex-row">
        {/* Left reading strip — cream (light) / navy (dark). Same width & overlap as light so copy floats onto the photo the same way. */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 `Z-1` hidden w-1/2 bg-[#f0ede6] dark:bg-[#0b2230] md:block"
          aria-hidden
        />

        <div className="hidden md:block absolute inset-y-0 right-0 z-0 w-1/2 isolate overflow-hidden">
          <img
            src={homePicUrl}
            alt="Paragon Law"
            className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
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

        <div className="relative z-10 flex min-h-0 w-full flex-col justify-start bg-[#f0ede6] px-6 pb-10 pt-5 dark:bg-[#0b2230] max-sm:px-4 max-sm:pb-8 max-sm:pt-4 sm:px-10 sm:pt-6 md:min-h-[85vh] md:w-[58%] md:max-w-none md:justify-start md:self-stretch md:bg-transparent md:dark:bg-transparent md:px-10 md:pb-14 md:pt-12 md:pr-6 lg:pr-10">
          <p className="text-[#D1704D] tracking-widest text-xs sm:text-sm mb-2 sm:mb-3 md:-mt-1">
            PARAGON LAW — KIGALI, RWANDA
          </p>

          <h1 className=" md:mt-4  mt-12  font-display hyphens-none font-semibold leading-[0.98] tracking-wide text-[#0b2230] drop-shadow-sm dark:text-white dark:drop-shadow-md max-md:text-[clamp(2rem,6vw+0.5rem,3rem)] md:text-[clamp(3rem,6.5vw+1.1rem,8rem)]">
            <span className="block max-md:whitespace-normal md:inline-block md:whitespace-nowrap">
              WELCOME TO{" "}
            </span>
            <span className="block max-md:whitespace-normal text-[#D1704D] md:inline-block md:whitespace-nowrap">
              PARAGON LAW
            </span>
          </h1>

          <p className="mt-8 max-w-none text-pretty text-base leading-snug text-[#4a6070] drop-shadow-sm dark:text-[#C2C7CB] dark:drop-shadow-md sm:mt-6 sm:text-lg md:mt-8 md:text-2xl md:leading-relaxed">
            We deliver tailored legal solutions to meet your legal needs and
            support your business success.
          </p>

          <Link
            to="/about"
            className="mt-10 w-fit border-2 border-[#D1704D] bg-[#f0ede6]/80 px-6 py-3 text-center text-[#D1704D] backdrop-blur-[2px] transition-colors hover:bg-[#0b2230] hover:text-white dark:border-white dark:bg-transparent dark:text-white dark:backdrop-blur-none dark:hover:bg-white/10 dark:hover:text-white"
          >
            LEARN MORE
          </Link>
        </div>
      </section>

      <section className="relative border-x border-t border-[#D1704D] px-10 pb-20 pt-8 max-sm:px-4">
        <p className="text-[#D1704D] tracking-widest text-xs mb-2">
          OUR EXPERTISE
        </p>
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-[#0b2230] dark:text-white md:text-4xl">
          Practice Areas
        </h2>
        <div
          className="w-15 h-0.75 bg-[#D1704D] mt-3 mb-12 block animate-line-reveal animate-line-reveal-delay-150"
          aria-hidden
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
          {practiceAreasHome.map((a) => (
            <Link key={a.num} to="/practice-areas" className={cardClass}>
              <span className="text-[#D1704D] text-xs font-bold">{a.num}</span>
              {a.title}
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/practice-areas"
            className="border border-[#D1704D] text-[#D1704D] px-10 py-4 text-xs tracking-widest font-bold hover:bg-[#D1704D] hover:text-white transition-colors inline-block max-sm:max-w-full max-sm:px-6"
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
