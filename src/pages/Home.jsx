import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PageWrapper from "../components/PageWrapper.jsx";

const practiceAreas = [
  { num: "01", label: "Corporate & Commercial" },
  { num: "02", label: "Banking & Finance" },
  { num: "03", label: "Telecom, Media and Technologies (TMT)" },
  { num: "04", label: "Legal Due Diligence" },
  { num: "05", label: "Labour/Employment" },
  { num: "06", label: "Commercial Litigation and Commercial Arbitration" },
  { num: "07", label: "Taxation" },
];

export default function Home() {
  return (
    <PageWrapper>
      <Navbar />

      <section className="relative min-h-[85vh] flex items-center px-10 py-20 overflow-hidden bg-white dark:bg-transparent">
        <div className="hidden md:block absolute top-0 right-0 w-[55%] h-full">
          <img
            src="/src/assets/paragon-img.jpg"
            className="w-full h-full object-cover opacity-40 dark:opacity-100"
            alt="office"
          />
          <div
            className="absolute inset-0 dark:hidden"
            style={{
              background:
                "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0.1) 100%)",
            }}
          />
          <div
            className="absolute inset-0 hidden dark:block"
            style={{
              background:
                "linear-gradient(to bottom, #0b2230 0%, rgba(11,34,48,0.6) 40%, rgba(11,34,48,0.1) 100%)",
            }}
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
            className="mt-8 border-2 border-[#D1704D] px-6 py-3 text-[#D1704D] dark:border-white dark:text-white w-fit hover:bg-[#0b2230] hover:text-white transition-colors"
          >
            LEARN MORE
          </Link>
        </div>
      </section>

      <section className="px-10 py-20 border border-[#D1704D]">
        <p className="text-[#D1704D] tracking-widest text-xs mb-2">
          OUR EXPERTISE
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Practice Areas</h2>
        <div className="w-15 h-0.75 bg-[#D1704D] mt-3 mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
          {practiceAreas.map(({ num, label }) => (
            <div
              key={num}
              className="border px-5 py-4 flex items-center gap-4 text-sm border-[#D1704D]/60 bg-[#D1704D]/5 hover:bg-[#0b2230]/10 dark:border-white/10 dark:bg-white/3 dark:hover:border-[#D1704D]/60 dark:hover:bg-[#D1704D]/5 transition-all cursor-pointer"
            >
              <span className="text-[#D1704D] text-xs font-bold">{num}</span>{" "}
              {label}
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/practice-areas"
            className="border border-[#D1704D] text-[#D1704D] px-10 py-4 text-xs tracking-widest font-bold hover:bg-[#D1704D] hover:text-white transition-colors"
          >
            VIEW PRACTICE AREAS
          </Link>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
}
