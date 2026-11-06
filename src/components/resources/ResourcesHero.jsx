import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Download,
  FileText,
  Layers,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import BG_IMAGE from "../../assets/images/productHero.png";

const EASE = [0.22, 1, 0.36, 1];
const TEXT_TO_TYPE = "Starts Here.";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: EASE,
    },
  },
};

const ResourcesHero = () => {
  const reduce = useReducedMotion();

  
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  
  useEffect(() => {
    let timer;
    const typingSpeed = 120;
    const deletingSpeed = 60;
    const pauseTime = 2000;

    if (!isDeleting && displayText.length < TEXT_TO_TYPE.length) {
      timer = setTimeout(() => {
        setDisplayText(TEXT_TO_TYPE.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === TEXT_TO_TYPE.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(TEXT_TO_TYPE.slice(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, 400);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#06182E]">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${BG_IMAGE})`,
          }}
        />
      </motion.div>

      <div className="absolute inset-0 z-0 bg-[#06182E]/90" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#06182E] via-[#06182E]/95 to-[#06182E]/65" />

      <motion.div
        animate={
          reduce
            ? undefined
            : {
                y: [0, -25, 0],
                scale: [1, 1.15, 1],
              }
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-20 top-1/4 z-0 h-80 w-80 rounded-full bg-[#C9972B]/15 blur-3xl"
      />

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
          <span className="text-[#E0B04A]">Resources</span>
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="min-w-0"
          >
            <motion.div
              variants={fadeUpVariants}
              className="mb-5 flex items-center gap-3.5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E0B04A]/70 bg-[#E0B04A]/10 text-[#E0B04A] shadow-[0_0_15px_rgba(224,176,74,0.15)] sm:h-13 sm:w-13">
                <Sparkles size={20} strokeWidth={1.8} />
              </div>

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E0B04A] sm:text-xs md:text-sm">
                ✦ KT GLOW KNOWLEDGE BASE ✦
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUpVariants}
              className="text-3xl font-extrabold leading-[1.14] tracking-tight text-white sm:text-5xl md:text-5xl lg:text-[54px] xl:text-[58px]"
            >
              Everything You
              <span className="mt-1 block text-white">Need to Know</span>
              <span className="mt-1.5 block min-h-[1.25em] font-serif italic text-[#E0B04A]">
                {displayText}
                <span className="ml-1 inline-block animate-pulse font-sans font-light not-italic text-[#E0B04A]">
                  |
                </span>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-7"
            >
              Explore our product catalogues, technical documentation, and
              industrial resources. Find accurate grit specifications and
              operating guides for our abrasives and steel polishing solutions.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <a
                  href="#pdf-documents"
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#E0B04A] px-6 py-3.5 text-sm font-bold text-[#06182E] shadow-md transition-all hover:bg-[#F0CA6A] sm:w-auto sm:inline-flex sm:px-7"
                >
                  Explore Documents
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  className="group flex w-full items-center justify-center gap-3 rounded-full border border-white/25 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#E0B04A] hover:bg-white/10 sm:w-auto sm:inline-flex sm:px-7"
                >
                  Contact Engineers
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: EASE,
            }}
            className="relative mx-auto w-full max-w-[460px]"
          >
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E0B04A]/15 sm:h-[380px] sm:w-[380px]" />

            <motion.div
              animate={
                reduce
                  ? undefined
                  : {
                      rotate: [0, 2, 0],
                      y: [0, -6, 0],
                    }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative mx-auto h-[340px] w-full max-w-[380px] sm:h-[400px]"
            >
              <motion.div
                animate={reduce ? undefined : { y: [0, -6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[250px] w-[190px] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] rounded-2xl border border-white/10 bg-[#102B46]/80 sm:h-[300px] sm:w-[230px]"
              />

              <motion.div
                animate={reduce ? undefined : { y: [0, 8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[260px] w-[200px] -translate-x-1/2 -translate-y-1/2 rotate-[8deg] rounded-2xl border border-[#E0B04A]/25 bg-[#0E2943] p-4 sm:h-[310px] sm:w-[240px] sm:p-5"
              >
                <div className="flex items-center justify-between">
                  <Layers size={20} className="text-[#E0B04A]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Catalogue
                  </span>
                </div>

                <div className="mt-7 space-y-2.5">
                  {[85, 65, 95, 55, 80].map((width, index) => (
                    <div
                      key={index}
                      style={{ width: `${width}%` }}
                      className="h-2 rounded-full bg-white/10"
                    />
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="flex h-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] sm:h-14"
                    >
                      <FileText size={17} className="text-[#E0B04A]/60" />
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                animate={
                  reduce
                    ? undefined
                    : {
                        y: [0, -8, 0],
                        rotate: [-2, 1, -2],
                      }
                }
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[270px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#E0B04A]/20 bg-[#F8F6F0] p-4 shadow-2xl sm:h-[320px] sm:w-[250px] sm:p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#06182E] text-[#E0B04A] sm:h-10 sm:w-10">
                    <FileText size={19} />
                  </div>
                  <span className="rounded-full bg-[#E0B04A]/20 px-2.5 py-0.5 text-[9px] font-bold tracking-widest text-[#8A6212]">
                    PDF
                  </span>
                </div>

                <div className="mt-4 sm:mt-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8A6212]">
                    Industrial Solutions
                  </p>
                  <h3 className="mt-1 font-serif text-base font-bold leading-tight text-[#06182E] sm:text-xl">
                    Product
                    <span className="block italic text-[#C9972B]">
                      Catalogue
                    </span>
                  </h3>
                </div>

                <div className="mt-4 space-y-2">
                  {[100, 85, 95, 70, 90].map((width, index) => (
                    <motion.div
                      key={index}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.6 + index * 0.1,
                        ease: EASE,
                      }}
                      style={{ width: `${width}%` }}
                      className="h-1.5 origin-left rounded-full bg-[#06182E]/10"
                    />
                  ))}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-[#C9972B] text-[8px] font-bold text-[#8A6212] sm:h-9 sm:w-9 sm:text-[9px]">
                    KT
                  </div>
                  <motion.div
                    animate={reduce ? undefined : { y: [0, 3, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E0B04A] text-[#06182E] sm:h-9 sm:w-9"
                  >
                    <Download size={15} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-3 rounded-full border border-white/15 bg-[#0E2943]/90 px-3 py-2 backdrop-blur-md sm:left-2 sm:px-3.5 sm:py-2.5"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E0B04A]/15 text-[#E0B04A] sm:h-8 sm:w-8">
                  <FileText size={15} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white sm:text-xs">
                    Catalogues
                  </p>
                  <p className="text-[9px] text-white/50">Product info</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={reduce ? undefined : { y: [0, 6, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-4 right-0 rounded-full border border-[#E0B04A]/25 bg-[#0E2943]/90 px-3 py-2 backdrop-blur-md sm:right-2 sm:px-3.5 sm:py-2.5"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E0B04A]/15 text-[#E0B04A] sm:h-8 sm:w-8">
                  <Download size={15} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white sm:text-xs">
                    Technical Docs
                  </p>
                  <p className="text-[9px] text-white/50">Download resources</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesHero;
