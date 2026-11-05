import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import ContactImg from "../../assets/images/contactHero.png";

const EASE = [0.22, 1, 0.36, 1];

/* NOTE: update these with your real contact details */
const CONTACT = {
  phone: "+919728303738",
  phoneDisplay: "+91 97283 03738",
  email: "vikash61289@gmail.com",
  location: "Industrial Area, Hisar, Haryana",
};

const infoItems = [
  {
    label: "Call Us",
    value: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phone}`,
    icon: Phone,
  },
  {
    label: "Email Us",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: Mail,
  },
  {
    label: "Visit Us",
    value: CONTACT.location,
    href: "#contact-information",
    icon: MapPin,
  },
];

const ContactHero = () => {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  const lineReveal = {
    hidden: { y: reduce ? 0 : "115%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative isolate flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-[#06182E]">
      {/* ---------- Background decoration ---------- */}
  

      <motion.div
        aria-hidden="true"
        animate={reduce ? undefined : { opacity: [0.3, 0.55, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full bg-[#E0B04A]/20 blur-3xl"
      />

      {/* Giant outline watermark */}
 <span
  aria-hidden="true"
  className="pointer-events-none absolute inset-x-4 -bottom-6 select-none whitespace-nowrap text-center font-serif text-[18vw] font-bold leading-none text-transparent lg:inset-x-10 lg:-bottom-12 lg:text-[18vw]"
  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.07)" }}
>
  CONTACT
</span>

      {/* ---------- Content ---------- */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-38 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* ===== LEFT: TEXT ===== */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
  

            {/* Eyebrow with gold dash */}
            <motion.div variants={fadeUp} className="mb-5 flex items-center gap-3">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="h-0.5 shrink-0 bg-[#E0B04A]"
              />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E0B04A] sm:text-sm">
                Let&apos;s Connect
              </span>
            </motion.div>

            {/* Heading - line reveal */}
            <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[72px]">
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineReveal} className="block">
                  Let&apos;s Start
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-3">
                <motion.span
                  variants={lineReveal}
                  className="block font-serif font-bold italic text-[#E0B04A]"
                >
                  a Conversation.
                </motion.span>
              </span>
            </h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
            >
              Have a question about our products or services? Our team is ready
              to help you find the right solutions for your business — from
              product enquiries and technical support to business opportunities.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <motion.a
                href="#contact-form"
                whileHover={reduce ? undefined : { scale: 1.05, y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D49A2A] to-[#F0C968] px-7 py-3.5 text-sm font-semibold text-[#06182E] shadow-[0_10px_30px_-8px_rgba(224,176,74,0.6)]"
              >
                Send an Enquiry
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              <motion.a
                href="#contact-information"
                whileHover={reduce ? undefined : { scale: 1.05, y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-[#E0B04A]/60 hover:bg-white/10"
              >
                <PhoneCall size={18} className="text-[#E0B04A]" />
                Contact Information
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ===== RIGHT: ARCH IMAGE ===== */}
          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-sm lg:col-span-5 lg:max-w-md">
            {/* Dashed arch outline */}
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
              className="absolute -inset-3 rounded-t-[999px] rounded-b-[2rem] border border-dashed border-[#E0B04A]/40"
            />

            {/* Image with reveal */}
            <motion.div
              initial={{ clipPath: reduce ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1.2, delay: 0.25, ease: EASE }}
              className="relative h-[400px] overflow-hidden rounded-t-[999px] rounded-b-[2rem] border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] sm:h-[500px]"
            >
              <motion.img
                src={ContactImg}
                alt="Industrial manufacturing facility"
                initial={{ scale: reduce ? 1 : 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: EASE }}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/70 via-transparent to-[#06182E]/10" />
            </motion.div>

            {/* Rotating circular text badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
              className="absolute -right-2 top-10 sm:-right-8"
            >
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#E0B04A]/40 bg-[#06182E] shadow-xl">
                <motion.svg
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                  animate={reduce ? undefined : { rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 h-full w-full"
                >
                  <defs>
                    <path
                      id="contact-badge-circle"
                      d="M 100,100 m -76,0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0"
                    />
                  </defs>
                  <text
                    fill="#E0B04A"
                    fontSize="17"
                    fontWeight="700"
                    letterSpacing="4"
                  >
                    <textPath href="#contact-badge-circle">
                      GET IN TOUCH • KT GLOW • GET IN TOUCH •
                    </textPath>
                  </text>
                </motion.svg>
                <ArrowUpRight size={26} className="text-[#E0B04A]" />
              </div>
            </motion.div>

            {/* Floating call card */}
            <motion.a
              href={`tel:${CONTACT.phone}`}
              initial={{ opacity: 0, y: reduce ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
              className="absolute -bottom-6 left-2 sm:-left-10"
            >
              <motion.div
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-3 rounded-2xl border border-white/15 bg-[#06182E]/80 px-4 py-3 shadow-2xl backdrop-blur-md transition-colors hover:border-[#E0B04A]/60"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#D49A2A] to-[#F0C968] text-[#06182E]">
                  <Phone size={18} />
                </span>
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                    Prefer a call?
                  </span>
                  <span className="block font-serif text-base font-bold italic text-[#E0B04A]">
                    {CONTACT.phoneDisplay}
                  </span>
                </span>
              </motion.div>
            </motion.a>
          </div>
        </div>

        {/* ===== BOTTOM INFO STRIP ===== */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
          className="mt-16 grid grid-cols-1 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {infoItems.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="group flex items-center gap-4 p-5 transition-colors hover:bg-white/5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E0B04A]/40 text-[#E0B04A] transition-colors duration-300 group-hover:bg-[#E0B04A] group-hover:text-[#06182E]">
                <Icon size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {label}
                </span>
                <span className="mt-1 block break-words text-sm font-semibold text-white">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-white/15" />
    </section>
  );
};

export default ContactHero;