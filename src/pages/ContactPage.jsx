import { useEffect, useState } from "react";
import { isValidEmail } from "../lib/validation";
import { siteContact } from "../data/site";

const emptyErrors = {
  name: false,
  email: false,
  subject: false,
  message: false,
};

export function ContactPage() {
  useEffect(() => {
    document.title = "Contact — Paragon Law";
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState(emptyErrors);
  const [success, setSuccess] = useState(false);

  const inputBorder = (bad) =>
    `w-full bg-transparent border-0 border-b ${
      bad
        ? "border-red-400"
        : "border-[#0b2230]/30 dark:border-white/50"
    } text-[#0b2230]/60 dark:text-[#f0ece4] font-light text-[15px] pb-2 pt-1 outline-none focus:border-orange-600 transition-colors duration-200 caret-orange-600`;

  function handleSubmit() {
    setErrors(emptyErrors);
    setSuccess(false);

    const next = { ...emptyErrors };
    let ok = true;

    if (!name.trim()) {
      next.name = true;
      ok = false;
    }
    if (!isValidEmail(email)) {
      next.email = true;
      ok = false;
    }
    if (!subject.trim()) {
      next.subject = true;
      ok = false;
    }
    if (!message.trim()) {
      next.message = true;
      ok = false;
    }

    setErrors(next);
    if (!ok) return;

    setSuccess(true);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 pt-24 pb-14">
        <p className="font-condensed text-[11px] font-medium tracking-[0.25em] uppercase text-[#D1704D] mb-12">
          GET IN TOUCH
        </p>
        <h1 className="font-semibold text-5xl md:text-7xl tracking-wide leading-none mb-5 text-[#0b2230] dark:text-[#FFFFFF]">
          Contact Us
        </h1>
        <div className="w-22 h-0.5 bg-[#D1704D] mb-10 mt-8" />
        <p className="text-[20px] md:text-[30px] font-light mb-10 tracking-wide text-[#0b2230]/60 dark:text-[#8fa3b1]">
          We&apos;re here to help. Reach out to discuss your legal needs and
          discover how we can support your business.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 sm:px-12 md:px-20 pb-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-[40px] font-semibold tracking-tight text-[#0b2230]/80 dark:text-[#f0ece4] mb-9">
            Contact us at
          </h2>

          <ul className="mb-12">
            <li className="border-l-2 border-[#D1704D] pl-5 py-4 mb-8">
              <p className="text-[15px] font-semibold tracking-[0.2em] uppercase text-[#D1704D] mb-2">
                Email
              </p>
              <p className="text-base md:text-[20px] font-normal text-[#0b2230]/60 dark:text-[#f0ece4]">
                {siteContact.email}
              </p>
            </li>
            <li className="border-l-2 border-[#D1704D] pl-5 mb-8 py-4">
              <p className="text-[15px] font-semibold tracking-[0.2em] uppercase text-[#D1704D] mb-2">
                Phone
              </p>
              <p className="text-base md:text-[20px] font-normal text-[#0b2230]/60 dark:text-[#f0ece4]">
                {siteContact.phone}
              </p>
            </li>
            <li className="border-l-2 border-[#D1704D] pl-5 py-4">
              <p className="text-[15px] font-semibold tracking-[0.2em] uppercase text-[#D1704D] mb-2">
                Address
              </p>
              <p className="text-base md:text-[20px] font-normal text-[#0b2230]/60 dark:text-[#f0ece4]">
                {siteContact.address}
              </p>
            </li>
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

        <div className="border border-[#0b2230]/20 dark:border-white/8 rounded-sm p-6 md:p-8">
          <h2 className="text-xl md:text-[26px] font-normal tracking-tight text-[#0b2230]/90 dark:text-[#f0ece4] mb-9">
            Send us a message
          </h2>

          <div className="space-y-7">
            <div>
              <label
                htmlFor="f-name"
                className="block text-[10px] font-light tracking-wide uppercase text-[#0b2230]/60 dark:text-[#8fa3b1] mb-2"
              >
                Your Name
              </label>
              <input
                id="f-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputBorder(errors.name)}
              />
              {errors.name ? (
                <span className="text-[11px] text-red-500 mt-1 block">
                  Name is required
                </span>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="f-email"
                className="block text-[10px] font-light tracking-wide uppercase text-[#0b2230]/60 dark:text-[#8fa3b1] mb-2"
              >
                Email Address
              </label>
              <input
                id="f-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputBorder(errors.email)}
              />
              {errors.email ? (
                <span className="text-[11px] text-red-500 mt-1 block">
                  Enter a valid email
                </span>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="f-subject"
                className="block text-[10px] font-light tracking-wide uppercase text-[#0b2230]/60 dark:text-[#8fa3b1] mb-2"
              >
                Subject
              </label>
              <input
                id="f-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={inputBorder(errors.subject)}
              />
              {errors.subject ? (
                <span className="text-[11px] text-red-500 mt-1 block">
                  Subject is required
                </span>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="f-message"
                className="block text-[10px] font-light tracking-wide uppercase text-[#0b2230]/60 dark:text-[#8fa3b1] mb-2"
              >
                Message
              </label>
              <textarea
                id="f-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputBorder(errors.message)} resize-none`}
              />
              {errors.message ? (
                <span className="text-[11px] text-red-500 mt-1 block">
                  Message is required
                </span>
              ) : null}
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full mt-2 bg-[#D1704D] hover:bg-orange-500 text-[#f0ece4] font-condensed text-[12px] font-semibold tracking-[0.25em] uppercase py-4.5 transition-colors duration-200 hover:-translate-y-px active:translate-y-0 transform"
            >
              Send Message
            </button>

            {success ? (
              <div className="text-center pt-2">
                <p className="text-[#D1704D] font-semibold text-[14px] tracking-wide">
                  ✓ Message sent! We&apos;ll be in touch soon.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
