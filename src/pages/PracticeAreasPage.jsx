import {
  Briefcase,
  Calculator,
  Landmark,
  Radio,
  Scale,
  Search,
  Users,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const cardBase =
  "border border-[#0b2230]/20 dark:border-white/10 bg-white dark:bg-[#0d2438] rounded-sm p-8 hover:border-[#D1704D] dark:hover:border-[#D1704D] transition-colors duration-300";

const numBadge =
  "text-[#D1704D] border border-[#D1704D] text-xs tracking-widest px-2.5 py-2 bg-[#383e44]/10 dark:bg-[#383e44] mb-8 inline-block";

const bodyClass =
  "text-[#0b2230]/60 dark:text-[#8fa3b1] text-sm tracking-wider leading-relaxed";

export function PracticeAreasPage() {
  useEffect(() => {
    document.title = "Practice Areas — Paragon Law";
  }, []);

  return (
    <>
      <div className="px-10 mt-16 mb-12">
        <h1 className="text-4xl md:text-6xl text-[#0b2230] dark:text-white mb-6 font-bold">
          Practice Areas
        </h1>
        <p className="text-[#0b2230]/60 dark:text-[#aea9a9] text-base md:text-lg tracking-wide max-w-xl">
          Comprehensive legal expertise across multiple domains, delivering
          precision and results for your business.
        </p>
      </div>

      <section className="px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className={cardBase}>
            <span className={numBadge}>01</span>
            <div className="mb-5">
              <Briefcase className="w-10 h-10 text-[#D1704D]" strokeWidth={1.25} />
            </div>
            <h3 className="text-lg font-bold mb-3">Corporate and Commercial</h3>
            <p className={bodyClass}>
              We provide comprehensive legal support on business transactions,
              contract drafting and negotiation, and corporate governance matters.
            </p>
          </div>

          <div className={cardBase}>
            <span className={numBadge}>02</span>
            <div className="mb-5">
              <Landmark className="w-10 h-10 text-[#D1704D]" strokeWidth={1.25} />
            </div>
            <h3 className="text-lg font-bold mb-3">Banking and Finance</h3>
            <p className={bodyClass}>
              We provide expert legal guidance on financial transactions, ensuring
              compliance within regulatory frameworks.
            </p>
          </div>

          <div className={cardBase}>
            <span className={numBadge}>03</span>
            <div className="mb-5">
              <Radio className="w-10 h-10 text-[#D1704D]" strokeWidth={1.25} />
            </div>
            <h3 className="text-lg font-bold mb-3">
              Telecom, Media and Technologies (TMT)
            </h3>
            <p className={bodyClass}>
              We deliver tailored legal solutions for clients in the technology,
              media, and telecommunications sectors.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className={`md:col-span-2 ${cardBase}`}>
            <span className={numBadge}>04</span>
            <div className="mb-5">
              <Search className="w-10 h-10 text-[#D1704D]" strokeWidth={1.25} />
            </div>
            <h3 className="text-lg font-bold mb-3">Legal Due Diligence</h3>
            <p className={bodyClass}>
              We conduct comprehensive legal due diligence in support of mergers,
              acquisitions, investments, and regulatory compliance. Our meticulous
              approach enables clients to identify and manage risks effectively, and
              to make well-informed decisions.
            </p>
          </div>

          <div className={cardBase}>
            <span className={numBadge}>05</span>
            <div className="mb-5">
              <Users className="w-10 h-10 text-[#D1704D]" strokeWidth={1.25} />
            </div>
            <h3 className="text-lg font-bold mb-3">Labour/Employment</h3>
            <p className={bodyClass}>
              We provide specialized legal advice across all aspects of employment
              law, including drafting and reviewing employment contracts and HR
              policies, advising on organizational restructuring, and labour
              disputes resolution.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`md:col-span-2 ${cardBase}`}>
            <span className={numBadge}>06</span>
            <div className="mb-5">
              <Scale className="w-10 h-10 text-[#D1704D]" strokeWidth={1.25} />
            </div>
            <h3 className="text-lg font-bold mb-3">
              Commercial Litigation and Commercial Arbitration
            </h3>
            <p className={bodyClass}>
              We assist clients in resolving commercial disputes through expert legal
              counsel and strategic negotiation as well as representation in
              litigation and arbitration proceedings.
            </p>
          </div>

          <div className={cardBase}>
            <span className={numBadge}>07</span>
            <div className="mb-5">
              <Calculator className="w-10 h-10 text-[#D1704D]" strokeWidth={1.25} />
            </div>
            <h3 className="text-lg font-bold mb-3">Taxation</h3>
            <p className={bodyClass}>
              We provide legal guidance for tax compliance and optimization.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center py-24 px-6 border-t border-black/10 dark:border-white/10">
        <p className="text-[#8fa3b1] text-sm tracking-widest uppercase mb-4">
          Ready to discuss your legal needs?
        </p>
        <h2 className="text-2xl md:text-4xl font-bold mb-10">
          Get in touch with our team
        </h2>
        <Link
          to="/contact"
          className="inline-block bg-[#D1704D] hover:bg-[#b85c3b] text-white text-sm font-medium px-10 py-4 transition-colors duration-300"
        >
          Contact Us
        </Link>
      </section>
    </>
  );
}
