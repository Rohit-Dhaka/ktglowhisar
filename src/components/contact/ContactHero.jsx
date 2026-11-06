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
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute left-0 top-0 z-20 w-full px-4 pt-6 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/70 sm:text-sm">
          <Link to="/" className="transition-colors hover:text-[#E0B04A]">
            Home
          </Link>
          <ChevronRight size={15} />
          <span className="text-[#E0B04A]">Contact Us</span>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={
          reduce ? undefined : { opacity: [0.3, 0.55, 0.3], scale: [1, 1.1, 1] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full bg-[#E0B04A]/20 blur-3xl"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 -bottom-6 select-none whitespace-nowrap text-center font-serif text-[18vw] font-bold leading-none text-transparent lg:inset-x-10 lg:-bottom-12 lg:text-[18vw]"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.07)" }}
      >
        CONTACT
      </span>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div
              variants={fadeUp}
              className="mb-5 flex items-center gap-3.5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E0B04A]/70 bg-[#E0B04A]/10 text-[#E0B04A] shadow-[0_0_15px_rgba(224,176,74,0.15)] sm:h-13 sm:w-13">
                <PhoneCall size={20} strokeWidth={1.8} />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E0B04A] sm:text-xs md:text-sm">
                ✦ LET&apos;S CONNECT ✦
              </span>
            </motion.div>

            <h1 className="text-3xl font-extrabold leading-[1.14] tracking-tight text-white sm:text-5xl md:text-5xl lg:text-[54px] xl:text-[58px]">
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineReveal} className="block">
                  Let&apos;s Start
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span
                  variants={lineReveal}
                  className="block font-serif italic text-[#E0B04A]"
                >
                  a Conversation.
                </motion.span>
              </span>
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-7"
            >
              Have a question about our products or services? Our team is ready
              to help you find the right solutions for your business — from
              product enquiries and technical support to business opportunities.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <motion.a
                href="#contact-form"
                whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D49A2A] to-[#F0C968] px-7 py-3.5 text-sm font-bold text-[#06182E] shadow-[0_10px_30px_-8px_rgba(224,176,74,0.6)] sm:w-auto sm:inline-flex"
              >
                Send an Enquiry
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              <motion.a
                href="#contact-information"
                whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group flex w-full items-center justify-center gap-3 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-[#E0B04A]/60 hover:bg-white/10 sm:w-auto sm:inline-flex"
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

          <div className="relative mx-auto w-full max-w-[340px] sm:max-w-sm lg:col-span-5 lg:max-w-md">
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
              className="absolute -inset-3 rounded-t-[999px] rounded-b-[2rem] border border-dashed border-[#E0B04A]/40"
            />

            <motion.div
              initial={{
                clipPath: reduce ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)",
              }}
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

            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
              className="absolute -right-1 top-6 sm:-right-8 sm:top-10"
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#E0B04A]/40 bg-[#06182E] sm:h-28 sm:w-28">
                <motion.svg
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                  animate={reduce ? undefined : { rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
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

                <ArrowUpRight
                  size={20}
                  className="text-[#E0B04A] sm:h-[26px] sm:w-[26px]"
                />
              </div>
            </motion.div>

            <motion.a
              href={`tel:${CONTACT.phone}`}
              initial={{ opacity: 0, y: reduce ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
              className="absolute -bottom-6 left-2 sm:-left-10"
            >
              <motion.div
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center gap-3 rounded-2xl border border-white/15 bg-[#06182E]/80 px-4 py-3 shadow-2xl backdrop-blur-md transition-colors hover:border-[#E0B04A]/60"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#D49A2A] to-[#F0C968] text-[#06182E]">
                  <Phone size={18} />
                </span>
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                    Prefer a call?
                  </span>
                  <span className="block italic text-base font-bold text-[#E0B04A]">
                    {CONTACT.phoneDisplay}
                  </span>
                </span>
              </motion.div>
            </motion.a>
          </div>
        </div>

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

      <div className="absolute bottom-0 left-0 h-px w-full bg-white/15" />
    </section>
  );
};

export default ContactHero;
