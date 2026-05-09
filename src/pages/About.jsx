import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PageWrapper from "../components/PageWrapper.jsx";

export default function About() {
  return (
    <PageWrapper>
      <Navbar />

      <section className="relative" style={{ minHeight: 260 }}>
        <img
          src="/src/assets/gravel.jpeg"
          alt="gravel"
          className="w-full object-cover opacity-40"
          style={{ height: 260, objectPosition: "50% 60%" }}
        />
        <div
          className="absolute inset-0 dark:hidden"
          style={{
            background:
              "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0.1) 100%)",
          }}
        />
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            background:
              "linear-gradient(to right, #0b2230 0%, rgba(11,34,48,0.6) 30%, rgba(11,34,48,0.1) 100%)",
          }}
        />
      </section>

      <section className="px-12 py-20 flex flex-col md:flex-row gap-20">
        <div className="md:w-[45%] shrink-0">
          <p className="text-[#0b2230]/50 dark:text-[#6b8a99] text-xs tracking-[0.2em] uppercase mb-8">
            ABOUT PARAGON LAW
          </p>
          <h1 className="text-4xl md:text-6xl font-normal leading-tight mb-6">
            Who we are
          </h1>
          <div className="w-14 h-0.5 bg-[#D1704D]" />
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
          <h2 className="text-2xl md:text-3xl font-normal text-[#D1704D] dark:text-white mb-5">
            Our Vision
          </h2>
          <p className="text-[#0b2230]/60 dark:text-[#8a9eaa] text-sm leading-7">
            Our vision is to be the most preferred law firm for commercially
            viable solutions to clients both locally and internationally.
          </p>
        </div>
        <div className="md:w-1/2 border-l-[3px] border-[#D1704D] pl-10 pr-16 py-6 mt-10 md:mt-0">
          <h2 className="text-2xl md:text-3xl font-normal text-[#D1704D] dark:text-white mb-5">
            Our Mission
          </h2>
          <p className="text-[#0b2230]/60 dark:text-[#8a9eaa] text-sm leading-7">
            Our mission is to provide efficient, timely, and diligent legal
            solutions to our clients, ensuring that their transactional needs
            are met promptly and effectively.
          </p>
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
}
