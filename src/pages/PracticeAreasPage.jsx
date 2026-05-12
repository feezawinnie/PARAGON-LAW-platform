import {
  Briefcase,
  Calculator,
  Landmark,
  Radio,
  Scale,
  Search,
  Shield,
  Users,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const cardBase =
  "border border-[#0b2230]/20 dark:border-white/10 bg-[#f8f6f2] dark:bg-[#0d2438] rounded-sm p-8 hover:border-[#D1704D] dark:hover:border-[#D1704D] transition-colors duration-300";

const numBadge =
  "mb-8 self-start inline-flex h-8 min-w-8 w-fit shrink-0 items-center justify-center border border-[#D1704D] bg-[#383e44]/10 px-1.5 text-[11px] font-bold tabular-nums leading-none tracking-normal text-[#D1704D] dark:bg-[#383e44]";

const bodyClass =
  "text-[#0b2230]/60 dark:text-[#8fa3b1] text-sm tracking-wider leading-relaxed";

const practiceAreas = [
  {
    num: "01",
    icon: Briefcase,
    title: "Corporate and Commercial",
    desc: "We provide comprehensive legal support on business transactions, contract drafting and negotiation, and corporate governance matters.",
  },
  {
    num: "02",
    icon: Landmark,
    title: "Banking and Finance",
    desc: "We provide expert legal guidance on financial transactions, ensuring compliance within regulatory frameworks.",
  },
  {
    num: "03",
    icon: Radio,
    title: "Telecom, Media and Technologies (TMT)",
    desc: "We deliver tailored legal solutions for clients in the technology, media, and telecommunications sectors.",
  },
  {
    num: "04",
    icon: Search,
    title: "Legal Due Diligence",
    desc: "We conduct comprehensive legal due diligence in support of mergers, acquisitions, investments, and regulatory compliance. Our meticulous approach enables clients to identify and manage risks effectively, and to make well-informed decisions.",
  },
  {
    num: "05",
    icon: Users,
    title: "Labour/Employment",
    desc: "We provide specialized legal advice across all aspects of employment law, including drafting and reviewing employment contracts and HR policies, advising on organizational restructuring, and labour disputes resolution.",
  },
  {
    num: "06",
    icon: Scale,
    title: "Commercial Litigation and Commercial Arbitration",
    desc: "We assist clients in resolving commercial disputes through expert legal counsel and strategic negotiation as well as representation in litigation and arbitration proceedings.",
  },
  {
    num: "07",
    icon: Calculator,
    title: "Taxation",
    desc: "We provide legal guidance for tax compliance and optimization.",
  },
  {
    num: "08",
    icon: Shield,
    title: "Data protection",
    desc: "We advise and assist on all legal and regulatory matters relating to data protection.",
  },
];

function PracticeAreaCard({ num, icon: Icon, title, desc }) {
  return (
    <div className={`${cardBase} flex h-full min-h-0 w-full flex-col`}>
      <span className={numBadge}>{num}</span>
      <div className="mb-5 shrink-0">
        <Icon className="w-10 h-10 text-[#D1704D]" strokeWidth={1.25} />
      </div>
      <h3 className="mb-3 shrink-0 font-display text-xl font-semibold leading-snug tracking-tight text-[#0b2230] dark:text-white md:text-[1.35rem]">
        {title}
      </h3>
      <p className={`${bodyClass} min-h-0 flex-1`}>{desc}</p>
    </div>
  );
}

export function PracticeAreasPage() {
  useEffect(() => {
    document.title = "Practice Areas — Paragon Law";
  }, []);

  return (
    <>
      <div className="px-10 mt-16 mb-12">
        <h1 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-[#0b2230] dark:text-white md:text-6xl mb-6">
          Practice Areas
        </h1>
        <p className="text-[#0b2230]/60 dark:text-[#aea9a9] text-base md:text-lg tracking-wide max-w-xl">
          Comprehensive legal expertise across multiple domains, delivering
          precision and results for your business.
        </p>
      </div>

      <section className="px-10 pb-20">
        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2">
          {practiceAreas.map((area) => (
            <PracticeAreaCard key={area.num} {...area} />
          ))}
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
