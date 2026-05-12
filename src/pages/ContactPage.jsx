import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Reveal } from "../components/ui/Reveal";

const inputBase =
  "w-full bg-transparent border-0 border-b pb-3 pt-1 text-[14px] outline-none placeholder:text-[#6a7282] placeholder:text-[11px] placeholder:tracking-[0.8px] placeholder:uppercase transition-colors duration-200 focus:border-[#d1704d]";

export function ContactPage() {
  const { isDark } = useTheme();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const inputColor = isDark
    ? "border-[#4a5565] text-[#d1d5dc] focus:border-[#d1704d]"
    : "border-gray-300 text-[#1a2332] focus:border-[#d1704d]";

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className={isDark ? "bg-[#0a1f2e]" : "bg-white"}>
      <section className="max-w-[1280px] mx-auto px-8 pt-20 pb-8">
        <Reveal delay={0}>
          <p className="text-[#d1704d] text-[11px] tracking-[2.4px] uppercase font-semibold mb-8">
            Get in Touch
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1
            className={`font-display font-bold tracking-[-1.5px] mb-4 ${isDark ? "text-white" : "text-[#0a1f2e]"
              }`}
            style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 1.05 }}
          >
            Contact Us
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p
            className={`text-[16px] leading-[1.65] max-w-[520px] ${isDark ? "text-[#9ca3af]" : "text-[#4b5563]"
              }`}
          >
            We're here to help. Reach out to discuss your legal needs and discover
            how we can support your business.
          </p>
        </Reveal>
      </section>

      <section className="max-w-[1280px] mx-auto px-8 pt-10 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          <div className="flex flex-col gap-12">
            <Reveal direction="left" delay={0.05}>
              <h2
                className={`font-display font-bold text-[26px] tracking-[-0.5px] mb-8 ${isDark ? "text-white" : "text-[#0a1f2e]"
                  }`}
              >
                Contact us at
              </h2>

              <div className="flex flex-col gap-0">
                {[
                  { label: "Email", value: "info@paragonlaw.rw", href: "mailto:info@paragonlaw.rw" },
                  { label: "Phone", value: "+250 730 303 607", href: "tel:+250730303607" },
                  { label: "Address", value: "Kigali, Rwanda", href: null },
                ].map(({ label, value, href }) => (
                  <div
                    key={label}
                    className={`border-l-[3px] border-l-[#d1704d] pl-5 py-5 ${isDark ? "border-b border-b-white/5" : "border-b border-b-gray-100"
                      }`}
                  >
                    <p className="text-[#d1704d] text-[10px] tracking-[1.4px] uppercase font-semibold mb-2">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className={`text-[15px] hover:text-[#d1704d] transition-colors duration-200 ${isDark ? "text-[#d1d5dc]" : "text-[#1a2332]"
                          }`}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className={`text-[15px] ${isDark ? "text-[#d1d5dc]" : "text-[#1a2332]"}`}>
                        {value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.15}>
              <h2
                className={`font-display font-bold text-[26px] tracking-[-0.5px] mb-6 ${isDark ? "text-white" : "text-[#0a1f2e]"
                  }`}
              >
                Office Hours
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                  { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className={`text-[14px] ${isDark ? "text-[#9ca3af]" : "text-[#4b5563]"}`}>
                      {day}
                    </span>
                    <span
                      className={`text-[14px] font-medium ${hours === "Closed" ? "text-[#d1704d]" : isDark ? "text-[#d1d5dc]" : "text-[#1a2332]"
                        }`}
                    >
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.1}>
            <div
              className={`p-10 border ${isDark
                ? "bg-[#0b2b3d] border-[rgba(209,112,77,0.15)]"
                : "bg-white border-gray-200 shadow-sm"
                }`}
            >
              <h2
                className={`font-display font-bold text-[24px] tracking-[-0.5px] mb-10 ${isDark ? "text-white" : "text-[#0a1f2e]"
                  }`}
              >
                Send us a message
              </h2>

              {sent && (
                <div className="mb-6 px-5 py-4 bg-[#d1704d]/10 border border-[#d1704d]/30 text-[#d1704d] text-[13px] tracking-[0.3px]">
                  Message sent successfully. We'll be in touch soon.
                </div>
              )}

              <form onSubmit={onSubmit} className="flex flex-col gap-8">
                {[
                  { name: "name", label: "Your Name", type: "text", placeholder: "Full name" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                  { name: "subject", label: "Subject", type: "text", placeholder: "How can we help?" },
                ].map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label
                      className={`block text-[10px] tracking-[0.8px] uppercase font-medium mb-3 ${isDark ? "text-[#6a7282]" : "text-[#9ca3af]"
                        }`}
                    >
                      {label}
                    </label>
                    <input
                      name={name}
                      type={type}
                      value={form[name]}
                      onChange={onChange}
                      required
                      placeholder={placeholder}
                      className={`${inputBase} ${inputColor}`}
                    />
                  </div>
                ))}

                <div>
                  <label
                    className={`block text-[10px] tracking-[0.8px] uppercase font-medium mb-3 ${isDark ? "text-[#6a7282]" : "text-[#9ca3af]"
                      }`}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={5}
                    placeholder="Tell us about your legal needs..."
                    className={`${inputBase} ${inputColor} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-4 text-[12px] tracking-[1.4px] uppercase font-bold transition-all duration-300 border-2 ${isDark
                      ? "border-[#d1704d] text-[#d1704d] hover:bg-[#d1704d]/10"
                      : "border-[#0a1f2e] text-[#0a1f2e] hover:bg-[#0a1f2e]/5"
                    }`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
