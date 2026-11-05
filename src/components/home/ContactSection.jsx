import { useState } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

const lineReveal = {
  hidden: { y: "115%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

/* =========================================================
   CONTACT DETAILS DATA
========================================================= */

const contactDetails = [
  {
    icon: Phone,
    label: "Direct Phone",
    value: "+91 97283 03738",
    href: "tel:+919728303738",
  },
  {
    icon: Mail,
    label: "Official Email",
    value: "vikash61289@gmail.com",
    href: "mailto:vikash61289@gmail.com",
  },
  {
    icon: MapPin,
    label: "Plant & Office Location",
    value: "Plot No. 10, Fees Market, Industrial Area, Hisar, Haryana",
    href: "https://www.google.com/maps/search/?api=1&query=Plot+No+10+Fees+Market+Industrial+Area+Hisar+Haryana",
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

/* =========================================================
   CONTACT SECTION COMPONENT
========================================================= */

const ContactSection = () => {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const reduce = useReducedMotion();

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your message.");
      }

      setStatus({
        type: "success",
        message: "Your message has been sent successfully. Our team will contact you shortly.",
      });

      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm text-[#06182E] outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#B8862B] focus:shadow-[0_0_0_3px_rgba(184,134,43,0.14)]";

  return (
    /* 👇 Background changed to warm luxury #FBF8F2 */
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#FBF8F2] py-8 sm:py-10"
    >
      {/* Google font for cursive typography */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
      />

      {/* Subtle Dot Grid Texture */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#06182E 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Ambient Floating Gold Glow */}
      <motion.div
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.15, 1],
                opacity: [0.35, 0.65, 0.35],
              }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 top-1/4 z-0 h-[300px] w-[300px] rounded-full bg-[#E0B04A]/25 blur-[100px] lg:h-[450px] lg:w-[450px]"
      />

      {/* Main Container */}
      <div className="relative z-10  px-4 sm:px-8 lg:px-12">
        {/* ===================================================
            SECTION HEADER
        =================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mb-8 flex flex-col gap-4 sm:mb-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="w-full lg:max-w-[55%]">
            {/* Top Subtitle with Gold Dash */}
            <motion.div variants={fadeUp} className="mb-2 flex items-center gap-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 34 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="h-0.5 shrink-0 bg-[#B8862B]"
              />
              <p className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#8A6212] sm:text-[13px]">
                Contact Us
              </p>
            </motion.div>

            {/* EXPANDED HEADING WITH CURSIVE ACCENT */}
            <h2 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#06182E] sm:text-[44px] lg:text-[52px]">
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineReveal} className="block">
                  Get in Touch
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-2">
                <motion.span variants={lineReveal} className="inline-block">
                  <motion.span
                    animate={
                      reduce
                        ? undefined
                        : { backgroundPosition: ["0% 50%", "200% 50%"] }
                    }
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="inline-block bg-[linear-gradient(90deg,#9A6B12,#E0B04A,#9A6B12)] bg-[length:200%_auto] bg-clip-text pr-2 font-['Dancing_Script',cursive] font-bold tracking-normal text-transparent"
                  >
                    With Our Team
                  </motion.span>
                </motion.span>
              </span>
            </h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="w-full text-[14px] leading-[1.75] text-[#06182E]/75 sm:text-[15.5px] lg:max-w-[42%]"
          >
            Have a product enquiry or need custom abrasive specifications?
            Share your requirements with our specialists to find dependable,
            mirror-consistent steel finishing solutions.
          </motion.p>
        </motion.div>

        {/* ===================================================
            MAIN CONTACT LAYOUT
        =================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="grid gap-6 rounded-2xl border border-[#B8862B]/20 bg-white/90 p-4 shadow-[0_12px_35px_rgba(6,24,46,0.06)] backdrop-blur-sm sm:p-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8 lg:p-7"
        >
          {/* LEFT: CONTACT INFORMATION (Deep Steel Navy) */}
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#06182E] via-[#092240] to-[#0D2A4A] p-5 text-white sm:p-6 lg:p-7">
            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#E0B04A]/15 blur-2xl" />

            <div className="flex items-center gap-2 text-[#E0B04A]">
              <Sparkles size={16} />
              <span className="text-[11px] font-bold uppercase tracking-widest">Direct Desk</span>
            </div>

            <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
              Contact Information
            </h3>

            <p className="mt-2 text-[13px] leading-relaxed text-white/75 sm:text-[13.5px]">
              Reach our manufacturing headquarters directly for specifications, pricing,
              and pan-India distributor support.
            </p>

            {/* Details List */}
            <div className="mt-6 space-y-3.5">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.icon === MapPin ? "_blank" : undefined}
                    rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-3 transition-colors hover:border-[#E0B04A]/40 hover:bg-white/10"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E0B04A]/15 text-[#E0B04A] transition-colors group-hover:bg-[#E0B04A] group-hover:text-[#06182E]">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[10.5px] font-bold uppercase tracking-wider text-[#E0B04A]">
                        {item.label}
                      </p>
                      <p className="mt-0.5 break-words text-[13px] font-semibold text-white/95 transition-colors group-hover:text-white sm:text-[13.5px]">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="mt-1 shrink-0 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E0B04A]"
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Commercial Enquiries Box */}
            <div className="mt-6 rounded-xl border border-[#B8862B]/30 bg-gradient-to-r from-[#B8862B]/10 to-transparent p-4">
              <h4 className="text-[13.5px] font-bold text-[#E0B04A]">
                Commercial &amp; Bulk Enquiries
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-white/70">
                Custom compounding, volume packaging, and distributor rates available on request.
              </p>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="flex flex-col justify-center py-2 lg:pl-3">
            <div className="mb-5">
              <h3 className="text-xl font-bold text-[#06182E] sm:text-2xl">
                Send an Enquiry
              </h3>
              <p className="mt-1 text-xs text-[#06182E]/65 sm:text-[13px]">
                Please provide your contact info and requirement details below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name and Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-xs font-bold text-[#06182E]"
                  >
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-xs font-bold text-[#06182E]"
                  >
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="e.g. rahul@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              {/* Row 2: Phone and Subject */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-1.5 block text-xs font-bold text-[#06182E]"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="contact-phone"
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
                  <label
                    htmlFor="contact-subject"
                    className="mb-1.5 block text-xs font-bold text-[#06182E]"
                  >
                    Requirement Subject *
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  >
                    <option value="">Select subject</option>
                    <option value="Product Enquiry">Product Enquiry</option>
                    <option value="Bulk Order">Bulk Order</option>
                    <option value="Request a Quote">Request a Quote</option>
                    <option value="Business Partnership">Distributor Enquiry</option>
                    <option value="Other">Other Query</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-xs font-bold text-[#06182E]"
                >
                  Message &amp; Specifications *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Specify product types, dimensions, quantities, or metal application details..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} min-h-[110px] resize-y`}
                  required
                />
              </div>

              {/* Status Banner */}
              {status.message && (
                <div
                  role="status"
                  className={`rounded-xl border px-4 py-3 text-xs font-semibold ${
                    status.type === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                      : "border-red-200 bg-red-50 text-red-800"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center sm:justify-between">
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#06182E] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(6,24,46,0.22)] transition-colors hover:bg-[#0D2A4A] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  <span>{loading ? "Transmitting..." : "Send Message"}</span>
                  {!loading && (
                    <Send size={15} className="text-[#E0B04A]" />
                  )}
                </motion.button>

                <p className="text-[11px] text-slate-500">
                  Your data is protected &amp; used only for responding.
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;