
import {
  Headset,
  MessageCircle,
  Settings,
  PackageSearch,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const supportItems = [
  {
    id: "01",
    title: "Product Information",
    description: "Explore product details and specifications.",
    icon: PackageSearch,
  },
  {
    id: "02",
    title: "Technical Assistance",
    description: "Understand applications and technical requirements.",
    icon: Settings,
  },
  {
    id: "03",
    title: "Quality & Reliability",
    description: "Learn about our quality-focused processes.",
    icon: ShieldCheck,
  },
  {
    id: "04",
    title: "Business Enquiries",
    description: "Discuss your industrial business requirements.",
    icon: ClipboardList,
  },
];

const ResourcesCTASection = () => {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.6,
        ease: EASE,
      },
    },
  };

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : 32,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: EASE,
      },
    },
  };

  return (
    <section className="w-full bg-white px-4   sm:px-8 lg:px-12  pb-16  sm:pb-20  lg:pb-24">
      <div className="mx-auto ">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 35,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: EASE,
          }}
          className="relative overflow-hidden rounded-3xl bg-[#06182E]"
        >
          {/* BACKGROUND DECORATION */}
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.08, 1],
                    rotate: [0, 8, 0],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96"
          />

          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full border border-[#E0B04A]/20 sm:h-64 sm:w-64"
          />

          {/* CONTENT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative z-10 grid grid-cols-1 gap-10 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-16 lg:py-20"
          >
            {/* LEFT CONTENT */}
            <motion.div variants={fadeUp}>
              {/* BADGE */}
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  {!reduceMotion && (
                    <motion.span
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.7, 0, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 rounded-full bg-[#E0B04A]"
                    />
                  )}

                  <span className="relative h-2.5 w-2.5 rounded-full bg-[#E0B04A]" />
                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white sm:text-sm">
                  Industrial Support
                </span>
              </div>

              {/* HEADING */}
              <h2 className="mt-7 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Need Expert
                <span className="mt-1 block font-serif italic text-[#E0B04A]">
                  Assistance?
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                Finding the right industrial abrasive and polishing
                solutions requires the right information. Our team
                focuses on understanding your requirements and helping
                you explore suitable products, technical details,
                and application solutions.
              </p>

              {/* CONTACT INFO PANEL */}
              <div className="mt-8 flex items-start gap-4 border-t border-white/15 pt-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E0B04A]/30 bg-[#E0B04A]/10 text-[#E0B04A]">
                  <MessageCircle size={20} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white sm:text-base">
                    Your Requirements Matter
                  </h3>

                  <p className="mt-2 max-w-md text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
                    Every industrial application is different.
                    We aim to understand your specific needs
                    and provide relevant product information.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              variants={fadeLeft}
              className="relative"
            >
              {/* PANEL HEADER */}
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E0B04A]">
                    What We Offer
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    How We Can Help
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#E0B04A]">
                  <Headset size={23} />
                </div>
              </div>

              {/* SUPPORT ITEMS */}
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                {supportItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.id}
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              x: 20,
                            }
                      }
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.5,
                        delay: reduceMotion ? 0 : index * 0.1,
                        ease: EASE,
                      }}
                      className={`group flex items-center gap-4 px-4 py-5 transition-colors duration-300 hover:bg-white/[0.06] sm:px-6 ${
                        index !== supportItems.length - 1
                          ? "border-b border-white/10"
                          : ""
                      }`}
                    >
                      {/* NUMBER */}
                      <span className="w-7 shrink-0 text-xs font-bold tracking-wider text-[#E0B04A]/70">
                        {item.id}
                      </span>

                      {/* ICON */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#E0B04A] transition-colors duration-300 group-hover:border-[#E0B04A]/30 group-hover:bg-[#E0B04A]/10">
                        <Icon size={20} strokeWidth={1.7} />
                      </div>

                      {/* TEXT */}
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm font-semibold text-white sm:text-base">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
                          {item.description}
                        </p>
                      </div>

                      {/* DECORATIVE INDICATOR */}
                      <motion.div
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                rotate: [0, 90, 0],
                              }
                        }
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="hidden h-3 w-3 shrink-0 rounded-sm border border-[#E0B04A]/50 sm:block"
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* BOTTOM DECORATIVE LABEL */}
              <div className="mt-5 flex items-center justify-between gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
                  Quality · Precision · Reliability
                </span>

                <span className="h-px flex-1 bg-white/10" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesCTASection;
