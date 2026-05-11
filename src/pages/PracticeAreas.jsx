import { Link } from "react-router-dom";
import {
  Briefcase,
  Landmark,
  Radio,
  Search,
  Users,
  Scale,
  Calculator,
} from "lucide-react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PageWrapper from "../components/PageWrapper.jsx";

const areas = [
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
];

function Card({ num, icon: Icon, title, desc }) {
  return (
    <div className="border border-[#0b2230]/20 dark:border-white/10 bg-white dark:bg-[#0d2438] rounded-sm p-8 hover:border-[#D1704D] dark:hover:border-[#D1704D] transition-colors duration-300">
      <span className="text-[#D1704D] border border-[#D1704D] text-xs tracking-widest px-2.5 py-2 bg-[#383e44]/10 dark:bg-[#383e44] mb-8 inline-block">
        {num}
      </span>
      <div className="mb-5">
        <Icon className="w-10 h-10 text-[#D1704D]" />
      </div>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="text-[#0b2230]/60 dark:text-[#8fa3b1] text-sm tracking-wider leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

export default function PracticeAreas() {
  return (
    <PageWrapper>
      <Navbar />

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
          {areas.slice(0, 3).map((a) => (
            <Card key={a.num} {...a} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="md:col-span-2">
            <Card {...areas[3]} />
          </div>
          <Card {...areas[4]} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <Card {...areas[5]} />
          </div>
          <Card {...areas[6]} />
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

      <Footer />
    </PageWrapper>
  );
}
