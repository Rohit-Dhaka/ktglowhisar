import { useState } from "react";
import {  
  CheckCircle2,
  AlertCircle,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Loader2,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];


const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "Product Enquiry",
  message: "",
};

const subjectOptions = [
  "Product Enquiry",
  "Bulk Order",
  "Request a Quote",
  "Distributor Partnership",
  "Technical Support",
  "Other Query",
];


const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
  "5866f7a4-4088-4ea3-9265-f435d4fabf20";

const ContactForm = () => {
  const reduce = useReducedMotion();

  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `[KT Glow Enquiry] ${formData.subject || "Product Requirement"}`,
          message: formData.message,
          from_name: "KT Glow Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your enquiry has been received successfully. Our engineering team will get in touch with you shortly.",
        });
        setFormData(initialForm);
      } else {
        throw new Error(result.message || "Failed to submit enquiry. Please try again.");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Unable to send message at the moment. Please call us directly at +91 97283 03738.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#0B2340] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#E0B04A] focus:shadow-[0_0_0_3px_rgba(224,176,74,0.15)]";

  const labelClass =
    "mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-300";

  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <section
      id="contact-form"
      className="relative w-full overflow-hidden bg-[#06182E] py-8 sm:py-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#C9972B]/10 blur-3xl"
      />

      <div className="relative mx-auto px-4 sm:px-8 lg:px-12">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mb-12 grid grid-cols-1 items-center gap-6 sm:mb-16 lg:grid-cols-2 lg:gap-16"
        >
          
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-0.5 w-10 rounded-full bg-[#E0B04A]" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E0B04A] sm:text-sm">
                Send an Enquiry
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s Discuss Your
              <span className="mt-1 block font-serif italic text-[#E0B04A]">
                Requirements.
              </span>
            </h2>
          </div>

      
          <div className="lg:justify-self-end lg:max-w-2xl">
            <p className="text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 lg:text-lg">
              Tell us about your industrial requirements, product specifications,
              and application needs. Our team will carefully review your enquiry
              and help you identify suitable steel polishing and abrasive
              solutions with a focus on quality, precision, and performance.
            </p>
          </div>
        </motion.div>

  
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid overflow-hidden rounded-2xl border border-white/10 lg:grid-cols-12"
        >
      
          <motion.div
            variants={fadeUp}
            className="relative flex flex-col justify-between bg-[#0B2340] p-6 sm:p-8 lg:col-span-4 lg:p-10"
          >
            <div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#E0B04A]/30 text-[#E0B04A]">
                <MessageSquare size={22} />
              </span>

              <h3 className="mt-6 font-serif text-2xl font-bold text-white sm:text-3xl">
                We&apos;re Here
                <span className="block italic text-[#E0B04A]">
                  To Help You.
                </span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Whether you need product information, pricing, or technical
                assistance, share your requirements with us.
              </p>
            </div>

            <div className="mt-10 space-y-5">
              <a
                href="tel:+919728303738"
                className="group flex items-center gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#E0B04A] transition-colors group-hover:bg-[#E0B04A] group-hover:text-[#06182E]">
                  <Phone size={17} />
                </span>

                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Call Us
                  </p>
                  <p className="mt-1 break-words text-sm font-semibold text-white">
                    +91 97283 03738
                  </p>
                </div>
              </a>

              <a
                href="mailto:vikash61289@gmail.com"
                className="group flex items-center gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#E0B04A] transition-colors group-hover:bg-[#E0B04A] group-hover:text-[#06182E]">
                  <Mail size={17} />
                </span>

                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                    Email Us
                  </p>
                  <p className="mt-1 break-words text-sm font-semibold text-white">
                    vikash61289@gmail.com
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E0B04A]">
                KT Glow
              </p>

              <p className="mt-2 text-xs leading-6 text-slate-400">
                Industrial solutions built around quality, precision, and
                reliability.
              </p>
            </div>
          </motion.div>

          
          <motion.div
            variants={fadeUp}
            className="bg-[#06182E] p-5 sm:p-8 lg:col-span-8 lg:p-10"
          >
            
            {status.message && (
              <div
                role="status"
                className={`mb-6 flex items-start gap-3 rounded-xl border p-4 ${
                  status.type === "success"
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                    : "border-red-400/30 bg-red-400/10 text-red-300"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-400" />
                ) : (
                  <AlertCircle size={20} className="mt-0.5 shrink-0 text-red-400" />
                )}
                <div>
                  <p className="text-sm font-semibold">
                    {status.type === "success" ? "Enquiry Sent Successfully!" : "Submission Error"}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">
                    {status.message}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name <span className="text-[#E0B04A]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address <span className="text-[#E0B04A]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number <span className="text-[#E0B04A]">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className={labelClass}>
                    Requirement Subject <span className="text-[#E0B04A]">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  >
                    {subjectOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#0B2340] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              
              <div>
                <label htmlFor="message" className={labelClass}>
                  Message &amp; Specifications <span className="text-[#E0B04A]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describe your product requirements, dimensions, quantities, or metal application details..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} min-h-[140px] resize-y`}
                  required
                />
              </div>

              
              <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-xs leading-5 text-slate-500">
                  Fields marked with * are required. Your enquiry will be sent directly to our team.
                </p>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={loading ? {} : { y: -2 }}
                  whileTap={loading ? {} : { scale: 0.98 }}
                  className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#E0B04A] px-7 py-3.5 text-sm font-bold text-[#06182E] transition-colors hover:bg-[#F0C968] disabled:cursor-not-allowed disabled:opacity-60 shadow-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 size={17} className="animate-spin text-[#06182E]" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <Send
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;