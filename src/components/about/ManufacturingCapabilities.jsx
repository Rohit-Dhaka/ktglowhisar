import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Settings,
  Layers,
  Gauge,
  ShieldCheck,
  Cog,
  Factory,
} from "lucide-react";

const capabilities = [
  {
    id: "01",
    title: "Advanced Manufacturing",
    description:
      "Modern manufacturing processes designed to deliver reliable and consistent industrial abrasive solutions.",
    icon: Factory,
  },
  {
    id: "02",
    title: "Product Customization",
    description:
      "Flexible product solutions tailored to specific applications, operational requirements, and customer needs.",
    icon: Settings,
  },
  {
    id: "03",
    title: "Material Expertise",
    description:
      "Careful material selection to support product performance, durability, and application efficiency.",
    icon: Layers,
  },
  {
    id: "04",
    title: "Precision Engineering",
    description:
      "Focused production practices to maintain product consistency and meet defined manufacturing specifications.",
    icon: Cog,
  },
  {
    id: "05",
    title: "Performance Focus",
    description:
      "Manufacturing solutions developed with attention to efficiency, usability, and dependable performance.",
    icon: Gauge,
  },
  {
    id: "06",
    title: "Quality Control",
    description:
      "Quality-focused manufacturing practices with inspection at relevant stages of the production process.",
    icon: ShieldCheck,
  },
];

const AUTO_DELAY = 4000;
const EASE = [0.22, 1, 0.36, 1];

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE,
    },
  },
};

const ManufacturingCapabilities = () => {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  // Automatically cycle through all capabilities, then repeat infinitely.
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % capabilities.length);
    }, AUTO_DELAY);

    return () => clearInterval(timer);
  }, []);

  const current = capabilities[active];
  const CurrentIcon = current.icon;

  return (
    <MotionConfig reducedMotion="user">
      <section className="w-full overflow-hidden bg-[#F8FAFC] py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-full px-4 sm:px-8 lg:px-12">
          {/* SECTION INTRO */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mb-10 grid grid-cols-1 gap-6 sm:mb-14 lg:grid-cols-2 lg:items-end lg:gap-16"
          >
            <motion.div variants={itemVariants}>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-0.5 w-10 rounded-full bg-[#06182E]" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#06182E] sm:text-sm">
                  Our Capabilities
                </p>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
                Manufacturing Excellence{" "}
                <span className="font-serif italic text-[#C9972B]">
                  Built on Precision
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="lg:justify-self-end lg:max-w-xl"
            >
              <p className="text-sm leading-7 text-[#1F2937] sm:text-base sm:leading-8 lg:text-[17px]">
                Our manufacturing capabilities combine technical expertise,
                quality-focused processes, and flexible solutions to support
                diverse industrial requirements. With a strong focus on precision,
                consistency, and performance, we aim to deliver reliable steel
                polishing and abrasive solutions that meet the evolving needs of
                our customers and industrial applications.
              </p>
            </motion.div>
          </motion.div>

          {/* CAPABILITIES SELECTOR AND DETAIL PANEL */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10"
          >
            {/* SELECTOR */}
            <motion.div
              variants={itemVariants}
              role="tablist"
              aria-label="Manufacturing capabilities"
              className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:col-span-5 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0"
            >
              {capabilities.map(({ id, title }, i) => {
                const isActive = i === active;

                return (
                  <motion.button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="capability-panel"
                    onClick={() => setActive(i)}
                    whileHover={reduce ? undefined : { x: 3 }}
                    whileTap={reduce ? undefined : { scale: 0.99 }}
                    className={`group flex shrink-0 items-center gap-4 border-b border-[#E2E8F0] px-3 py-4 text-left transition-colors duration-300 lg:w-full lg:rounded-none lg:px-2 lg:py-6 ${
                      isActive
                        ? "text-[#06182E]"
                        : "text-[#64748B] hover:text-[#06182E]"
                    }`}
                  >
                    <span
                      className={`text-xs font-bold tracking-wider sm:text-sm ${
                        isActive ? "text-[#06182E]" : "text-[#64748B]"
                      }`}
                    >
                      {id}
                    </span>

                    <span className="whitespace-nowrap text-sm font-semibold sm:text-base lg:text-lg">
                      {title}
                    </span>

                    {/* Active right-side line */}
                    <span className="ml-auto flex w-12 shrink-0 items-center justify-end">
                      <motion.span
                        animate={{ width: isActive ? 50 : 0 }}
                        transition={{
                          duration: reduce ? 0 : 0.45,
                          ease: EASE,
                        }}
                        className="h-[3px] rounded-full bg-[#06182E]"
                      />
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* DETAIL PANEL */}
            <motion.div
              variants={itemVariants}
              id="capability-panel"
              role="tabpanel"
              aria-label={current.title}
              className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:min-h-[360px] sm:p-10 lg:col-span-7"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-4 select-none font-serif text-[9rem] font-bold leading-none text-[#F5F6F8] sm:text-[13rem]"
              >
                {current.id}
              </span>

              <motion.div
                key={current.id}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduce ? 0 : 0.45,
                  ease: EASE,
                }}
                className="relative"
              >
                <motion.span
                  whileHover={reduce ? undefined : { rotate: 5, scale: 1.05 }}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-[#06182E] text-white"
                >
                  <CurrentIcon size={24} strokeWidth={1.8} />
                </motion.span>

                <h3 className="mt-8 font-serif text-2xl font-bold text-[#06182E] sm:text-3xl">
                  {current.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-[#1F2937] sm:text-base sm:leading-8">
                  {current.description}
                </p>
              </motion.div>

              {/* PROGRESS INDICATORS */}
              <div
                className="relative mt-8 flex items-center gap-1.5"
                aria-label={`Capability ${active + 1} of ${capabilities.length}`}
              >
                {capabilities.map(({ id }, i) => (
                  <motion.span
                    key={id}
                    animate={{ width: i === active ? 32 : 12 }}
                    transition={{
                      duration: reduce ? 0 : 0.3,
                      ease: EASE,
                    }}
                    className={`h-1 rounded-full ${
                      i === active ? "bg-[#06182E]" : "bg-[#E5E7EB]"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* BOTTOM CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-[#E5E7EB] pt-8 sm:flex-row sm:items-center"
          >
            <motion.div variants={itemVariants} className="max-w-2xl">
              <h3 className="font-serif text-xl font-bold text-[#06182E] sm:text-2xl">
                Looking for{" "}
                <span className="italic">Custom Manufacturing Solutions?</span>
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#1F2937] sm:text-base">
                Connect with our team to discuss your industrial product
                requirements and explore suitable solutions.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={reduce ? undefined : { y: -3 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
            >
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#06182E] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Contact Our Team
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default ManufacturingCapabilities;
