import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PageWrapper from "../components/PageWrapper.jsx";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border-0 border-b border-[#0b2230]/30 dark:border-white/50 text-[#0b2230]/60 dark:text-[#f0ece4] font-light text-[15px] pb-2 pt-1 outline-none focus:border-orange-600 transition-colors duration-200 caret-orange-600";
  const labelClass =
    "block text-[10px] font-light tracking-wide uppercase text-[#0b2230]/60 dark:text-[#8fa3b1] mb-2";

  return (
    <PageWrapper>
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 pt-24 pb-14">
        <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#D1704D] mb-12">
          GET IN TOUCH
        </p>
        <h1 className="font-semibold text-5xl md:text-7xl tracking-wide leading-none mb-5 text-[#0b2230] dark:text-white">
          Contact Us
        </h1>
        <div className="w-22 h-0.5 bg-[#D1704D] mb-10 mt-8" />
        <p className="text-[20px] md:text-[30px] font-light mb-10 tracking-wide text-[#0b2230]/60 dark:text-[#8fa3b1]">
          We're here to help. Reach out to discuss your legal needs and discover
          how we can support your business.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 pb-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-[40px] font-semibold tracking-tight text-[#0b2230]/80 dark:text-[#f0ece4] mb-9">
            Contact us at
          </h2>
          <ul className="mb-12">
            {[
              { label: "Email", value: "info@paragonlaw.rw" },
              { label: "Phone", value: "+250 730 303 607" },
              { label: "Address", value: "Kigali, Rwanda" },
            ].map(({ label, value }) => (
              <li
                key={label}
                className="border-l-2 border-[#D1704D] pl-5 py-4 mb-8"
              >
                <p className="text-[15px] font-semibold tracking-[0.2em] uppercase text-[#D1704D] mb-2">
                  {label}
                </p>
                <p className="text-base md:text-[20px] font-normal text-[#0b2230]/60 dark:text-[#f0ece4]">
                  {value}
                </p>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="text-2xl md:text-[34px] tracking-wide font-semibold text-[#0b2230]/80 dark:text-[#f0ece4] mb-4">
              Office Hours
            </h3>
            <ul className="space-y-2 tracking-wide">
              <li className="text-[17px] font-light text-[#8fa3b1]">
                Monday – Friday: 9:00 AM – 6:00 PM
              </li>
              <li className="text-[17px] font-light text-[#8fa3b1]">
                Saturday: 9:00 AM – 1:00 PM
              </li>
              <li className="text-[17px] font-light text-[#8fa3b1]">
                Sunday: Closed
              </li>
            </ul>
          </div>
        </div>

        <div className="border border-[#0b2230]/20 dark:border-white/8 rounded-sm p-8">
          <h2 className="text-xl md:text-[26px] font-normal tracking-tight text-[#0b2230]/90 dark:text-[#f0ece4] mb-9">
            Send us a message
          </h2>
          {submitted ? (
            <div className="text-center py-10">
              <p className="text-[#D1704D] font-semibold text-[14px] tracking-wide">
                ✓ Message sent! We'll be in touch soon.
              </p>
            </div>
          ) : (
            <div className="space-y-7">
              <div>
                <label className={labelClass}>Your Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
                {errors.name && (
                  <span className="text-[11px] text-red-500 mt-1 block">
                    {errors.name}
                  </span>
                )}
              </div>
              <div>
                <label className={labelClass}>Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
                {errors.email && (
                  <span className="text-[11px] text-red-500 mt-1 block">
                    {errors.email}
                  </span>
                )}
              </div>
              <div>
                <label className={labelClass}>Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  className={inputClass}
                />
                {errors.subject && (
                  <span className="text-[11px] text-red-500 mt-1 block">
                    {errors.subject}
                  </span>
                )}
              </div>
              <div>
                <label className={labelClass}>Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className={`${inputClass} resize-none`}
                />
                {errors.message && (
                  <span className="text-[11px] text-red-500 mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>
              <button
                onClick={handleSubmit}
                className="w-full mt-2 bg-[#D1704D] hover:bg-orange-500 text-[#f0ece4] text-[12px] font-semibold tracking-[0.25em] uppercase py-4 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </PageWrapper>
  );
}
