import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Download,
  FileText,
  Layers,
} from "lucide-react";

import BG_IMAGE from "../../assets/images/productHero.png";

const EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.18,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

const ResourcesHero = () => {
  const reduce = useReducedMotion();

  const floatTransition = (duration) => ({
    duration,
    repeat: reduce ? 0 : Infinity,
    ease: "easeInOut",
  });

  return (
    <section className="relative isolate flex min-h-[100svh] w-full justify-center items-center overflow-hidden bg-[#06182E] text-white">
      {/* Background image and layered contrast */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${BG_IMAGE}')` }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-[#06182E]/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06182E] via-[#06182E]/95 to-[#06182E]/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/70 via-transparent to-[#06182E]/35" />

      {/* Ambient gold accent */}
      <motion.div
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : {
                y: [0, -20, 0],
                scale: [1, 1.08, 1],
                opacity: [0.45, 0.7, 0.45],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-28 top-1/4 h-80 w-80 rounded-full bg-[#C9972B]/15 blur-3xl sm:h-[26rem] sm:w-[26rem]"
      />

      {/* Main hero content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg ">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <motion.h1
              variants={fadeUpVariants}
              className="max-w-2xl text-[2.65rem] font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl xl:text-[68px]"
            >
              Everything You
              <span className="mt-2 block text-white">Need to Know</span>
              <span className="mt-2 block font-serif font-bold italic text-[#E0B04A]">
                {"Starts Here.".split("").map((letter, index) => (
                  <motion.span
                    key={`${letter}-${index}`}
                    initial={
                      reduce
                        ? false
                        : { opacity: 0, y: 18, filter: "blur(4px)" }
                    }
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: reduce ? 0 : 0.42,
                      delay: reduce ? 0 : 0.65 + index * 0.055,
                      ease: EASE,
                    }}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
            >
              Explore our product catalogues, technical documentation, and
              company resources. Find the information you need about our
              industrial abrasive and steel polishing solutions.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap"
            >
              <motion.a
                href="#pdf-documents"
                whileHover={reduce ? undefined : { y: -3 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#E0B04A] px-7 py-3 text-sm font-bold text-[#06182E] transition-colors hover:bg-[#F0CA6A]"
              >
                Explore Documents
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={reduce ? undefined : { y: -3 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/25 bg-white/[0.04] px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-[#E0B04A]/70 hover:bg-white/[0.08]"
              >
                Contact Us
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Document composition */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 36, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
            className="relative mx-auto w-full max-w-[500px] lg:max-w-[520px]"
          >
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E0B04A]/20 sm:h-[390px] sm:w-[390px]"
            />
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10 sm:h-[460px] sm:w-[460px]"
            />

            <motion.div
              animate={
                reduce ? undefined : { y: [0, -7, 0], rotate: [0, 1, 0] }
              }
              transition={floatTransition(7)}
              className="relative mx-auto h-[360px] w-full max-w-[390px] sm:h-[460px] sm:max-w-[430px]"
            >
              {/* Rear sheet */}
              <div className="absolute left-1/2 top-1/2 h-[250px] w-[185px] -translate-x-1/2 -translate-y-1/2 rotate-[-13deg] rounded-2xl border border-white/10 bg-[#102B46]/90 sm:h-[320px] sm:w-[235px]" />

              {/* Middle sheet */}
              <motion.div
                animate={reduce ? undefined : { y: [0, 8, 0] }}
                transition={floatTransition(6)}
                className="absolute left-1/2 top-1/2 h-[265px] w-[195px] -translate-x-1/2 -translate-y-1/2 rotate-[8deg] rounded-2xl border border-[#E0B04A]/25 bg-[#0E2943] p-4 sm:h-[330px] sm:w-[245px] sm:p-5"
              >
                <div className="flex items-center justify-between">
                  <Layers size={21} className="text-[#E0B04A]" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                    Catalogue
                  </span>
                </div>
                <div className="mt-8 space-y-3">
                  {[85, 65, 95, 55, 80].map((width, index) => (
                    <div
                      key={index}
                      style={{ width: `${width}%` }}
                      className="h-1.5 rounded-full bg-white/10"
                    />
                  ))}
                </div>
                <div className="mt-7 grid grid-cols-2 gap-2.5">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="flex h-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] sm:h-16"
                    >
                      <FileText size={19} className="text-[#E0B04A]/65" />
                    </div>
                  ))}
                </div>
                <div className="mt-5 h-px w-full bg-white/10" />
                <p className="mt-3 text-[9px] uppercase tracking-[0.16em] text-white/35">
                  Technical information
                </p>
              </motion.div>

              {/* Front cover */}
              <motion.div
                animate={
                  reduce
                    ? undefined
                    : { y: [0, -9, 0], rotate: [-1.5, 0.5, -1.5] }
                }
                transition={floatTransition(5.5)}
                className="absolute left-1/2 top-1/2 h-[280px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#E0B04A]/25 bg-[#F8F6F0] p-4 sm:h-[350px] sm:w-[265px] sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#06182E] text-[#E0B04A] sm:h-11 sm:w-11">
                    <FileText size={21} />
                  </div>
                  <span className="rounded-full bg-[#E0B04A]/20 px-3 py-1 text-[9px] font-bold tracking-[0.16em] text-[#8A6212]">
                    PDF
                  </span>
                </div>

                <div className="mt-6 sm:mt-8">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#8A6212] sm:text-[9px]">
                    Industrial Solutions
                  </p>
                  <h2 className="mt-2 font-serif text-xl font-bold leading-tight text-[#06182E] sm:text-2xl">
                    Product
                    <span className="block italic text-[#C9972B]">
                      Catalogue
                    </span>
                  </h2>
                </div>

                <div className="mt-5 space-y-2.5 sm:mt-6">
                  {[100, 85, 95, 70, 90].map((width, index) => (
                    <motion.div
                      key={index}
                      initial={reduce ? false : { scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: reduce ? 0 : 0.7,
                        delay: reduce ? 0 : 0.65 + index * 0.08,
                        ease: EASE,
                      }}
                      style={{ width: `${width}%` }}
                      className="h-1.5 origin-left rounded-full bg-[#06182E]/10"
                    />
                  ))}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-dashed border-[#C9972B] text-[9px] font-bold text-[#8A6212]">
                    KT
                  </div>
                  <motion.div
                    animate={reduce ? undefined : { y: [0, 3, 0] }}
                    transition={floatTransition(1.6)}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E0B04A] text-[#06182E]"
                  >
                    <Download size={17} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating resource labels */}
            <motion.div
              animate={reduce ? undefined : { y: [0, -7, 0] }}
              transition={floatTransition(4.5)}
              className="absolute left-0 top-5 rounded-full border border-white/15 bg-[#0E2943] px-3 py-2.5 sm:left-1 sm:px-4 sm:py-3"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E0B04A]/15 text-[#E0B04A] sm:h-9 sm:w-9">
                  <FileText size={16} />
                </span>
                <span>
                  <span className="block text-[11px] font-bold text-white sm:text-xs">
                    Catalogues
                  </span>
                  <span className="block text-[9px] text-white/50 sm:text-[10px]">
                    Product information
                  </span>
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={reduce ? undefined : { y: [0, 7, 0] }}
              transition={floatTransition(5)}
              className="absolute bottom-5 right-0 rounded-full border border-[#E0B04A]/25 bg-[#0E2943] px-3 py-2.5 sm:right-1 sm:px-4 sm:py-3"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E0B04A]/15 text-[#E0B04A] sm:h-9 sm:w-9">
                  <Download size={16} />
                </span>
                <span>
                  <span className="block text-[11px] font-bold text-white sm:text-xs">
                    Technical Docs
                  </span>
                  <span className="block text-[9px] text-white/50 sm:text-[10px]">
                    Download resources
                  </span>
                </span>
              </div>
            </motion.div>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.28em] text-white/30 sm:text-[10px]">
              Resources / 01
            </div>
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-full bg-white/15"
      />
    </section>
  );
};

export default ResourcesHero;
