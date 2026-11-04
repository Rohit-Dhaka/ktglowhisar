import {
  ArrowUpRight,
  ArrowRight,
  Headset,
  Globe,
  MessageCircle,
  BriefcaseBusiness,
  Mail,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const departments = [
  {
    id: "01",
    title: "Sales",
    subtitle: "Products & Quotations",
    icon: BriefcaseBusiness,
  },
  {
    id: "02",
    title: "Technical",
    subtitle: "Expert Assistance",
    icon: Headset,
  },
  {
    id: "03",
    title: "Export",
    subtitle: "Global Partnerships",
    icon: Globe,
  },
  {
    id: "04",
    title: "Support",
    subtitle: "Customer Assistance",
    icon: MessageCircle,
  },
];

const CONTACT_EMAIL = "vikash61289@gmail.com";
const EASE = [0.22, 1, 0.36, 1];

const DepartmentContactSection = () => {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };

  const cardItem = {
    hidden: { opacity: 0, y: reduce ? 0 : 30, scale: reduce ? 1 : 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <section className="overflow-hidden bg-[#F5F7FA] py-14 sm:py-20 lg:py-24">
      <div className=" px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:items-end"
        >
          {/* Left Side - Tag & Heading */}
          <div>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-[#DCE3EC] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F2B46] sm:text-sm"
            >
              <motion.span
                animate={reduce ? undefined : { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-[#E0B04A]"
              />
              Contact KT Glow
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#06182E] sm:text-4xl lg:text-5xl"
            >
              Let&apos;s Make
              <span className="block font-serif font-bold text-[#E0B04A]">
                Things Happen.
              </span>
            </motion.h2>
          </div>

          {/* Right Side - Description */}
          <motion.div variants={fadeUp} className="lg:max-w-xl lg:justify-self-end">
            <p className="text-sm leading-7 text-[#334155] sm:text-base sm:leading-8">
              Have a requirement or a new opportunity? We are just one message
              away. Our team is ready to understand your needs and provide the
              right steel polishing solutions. Whether you are looking for
              product information.
            </p>
          </motion.div>
        </motion.div>

        {/* Department Selector */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4"
        >
          {departments.map((department) => {
            const Icon = department.icon;

            return (
              <motion.a
                key={department.id}
                variants={cardItem}
                whileHover={reduce ? undefined : { y: -6 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                  department.title + " Enquiry"
                )}`}
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-[#DCE3EC] bg-white p-4 transition-all duration-300 hover:border-[#E0B04A] hover:shadow-[0_18px_40px_-18px_rgba(6,24,46,0.35)] sm:p-5"
              >
                {/* Gold accent line */}
                <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#D49A2A] to-[#F0C968] transition-transform duration-500 group-hover:scale-x-100" />

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1F5F9] text-[#06182E] transition-colors duration-300 group-hover:bg-[#06182E] group-hover:text-[#E0B04A]">
                  <Icon size={20} strokeWidth={1.7} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-sm italic text-[#E0B04A]">
                      {department.id}
                    </span>
                    <h3 className="text-base font-bold text-[#06182E]">
                      {department.title}
                    </h3>
                  </div>

                  <p className="mt-1 text-xs text-[#475569]">
                    {department.subtitle}
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-[#94A3B8] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E0B04A]"
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Main Contact Banner */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative mt-6 overflow-hidden rounded-3xl bg-[#06182E] p-6 sm:p-8 lg:p-10"
        >
          {/* Gold glow */}
          <motion.div
            aria-hidden="true"
            animate={reduce ? undefined : { opacity: [0.3, 0.55, 0.3], scale: [1, 1.1, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#E0B04A]/20 blur-3xl"
          />

          {/* Decorative Lines */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-10">
            <div className="absolute right-10 top-0 h-full w-px bg-white" />
            <div className="absolute right-20 top-0 h-full w-px bg-white" />
            <div className="absolute right-32 top-0 h-full w-px bg-white" />
          </div>

          {/* Decorative rings */}
          <motion.div
            aria-hidden="true"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute -right-16 -top-16 hidden h-56 w-56 rounded-full border border-dashed border-white/15 sm:block"
          />

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                <Mail size={15} className="text-[#E0B04A]" />
                One Point of Contact
              </div>

              <h3 className="mt-4 font-serif text-2xl font-bold text-white sm:text-4xl">
                Every Enquiry{" "}
                <span className="text-[#E0B04A]">Starts Here.</span>
              </h3>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-3 inline-block break-all text-sm font-medium text-slate-300 transition-colors hover:text-[#E0B04A] sm:text-base"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <motion.a
              href={`mailto:${CONTACT_EMAIL}`}
              whileHover={reduce ? undefined : { scale: 1.05, y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D49A2A] to-[#F0C968] px-6 py-3.5 text-sm font-bold text-[#06182E] shadow-[0_10px_30px_-8px_rgba(224,176,74,0.6)]"
            >
              Get In Touch
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DepartmentContactSection;