
import { useState } from "react";
import {  
  CheckCircle2,
  Mail,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  enquiryType: "Product Enquiry",
  product: "",
  quantity: "",
  message: "",
};

const enquiryOptions = [
  "Product Enquiry",
  "Bulk Order",
  "Technical Support",
  "Business Partnership",
  "Request a Quote",
  "Other",
];

const ContactForm = () => {
  const reduce = useReducedMotion();

  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();



    setSubmitted(true);
    setFormData(initialForm);
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#0B2340] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-[#E0B04A]";

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
      className="relative w-full overflow-hidden bg-[#06182E] py-16 sm:py-20 lg:py-24"
    >
  
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#C9972B]/10 blur-3xl"
      />

      <div className="relative mx-auto  px-4 sm:px-8 lg:px-12">
     
    <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={fadeUp}
  className="mb-12 grid grid-cols-1 items-center gap-6 sm:mb-16 lg:grid-cols-2 lg:gap-16"
>
  {/* LEFT CONTENT */}
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

  {/* RIGHT CONTENT */}
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
            {submitted && (
              <div
                role="status"
                className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-emerald-400"
                />

                <div>
                  <p className="text-sm font-semibold text-emerald-300">
                    Form submitted successfully!
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-300">
                    This is a frontend confirmation. Connect your backend API
                    to receive and store enquiries.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name <span className="text-[#E0B04A]">*</span>
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={formData.fullName}
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
                  <label htmlFor="company" className={labelClass}>
                    Company Name
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

             
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="enquiryType" className={labelClass}>
                    Enquiry Type <span className="text-[#E0B04A]">*</span>
                  </label>

                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  >
                    {enquiryOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="product" className={labelClass}>
                    Product / Requirement
                  </label>

                  <input
                    id="product"
                    name="product"
                    type="text"
                    placeholder="Enter product or requirement"
                    value={formData.product}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              
              <div>
                <label htmlFor="quantity" className={labelClass}>
                  Estimated Quantity
                </label>

                <input
                  id="quantity"
                  name="quantity"
                  type="text"
                  placeholder="e.g. 500 pieces, 2 tons, or not sure"
                  value={formData.quantity}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

            
              <div>
                <label htmlFor="message" className={labelClass}>
                  Your Message <span className="text-[#E0B04A]">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describe your requirements, specifications, or questions..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} min-h-[140px] resize-y`}
                  required
                />
              </div>

              <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-xs leading-5 text-slate-500">
                  Fields marked with * are required. Please provide accurate
                  information for a faster response.
                </p>

                <motion.button
                  type="submit"
                  whileHover={reduce ? undefined : { y: -2 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                  className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#E0B04A] px-7 py-3.5 text-sm font-bold text-[#06182E] transition-colors hover:bg-[#F0C968]"
                >
                  Submit Enquiry
                  <Send
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
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
