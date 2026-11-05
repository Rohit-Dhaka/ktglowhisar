import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Download,
  FileText,
  Layers,
} from "lucide-react";

import BG_IMAGE from "../../assets/images/hero3.png";

const EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE,
    },
  },
};



/* =========================================================
   TYPEWRITER
========================================================= */



/* =========================================================
   RESOURCES HERO
========================================================= */

const ResourcesHero = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#06182E] text-white">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
        className="absolute inset-0"
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url('${BG_IMAGE}')`,
          }}
        />
      </motion.div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#06182E]/90" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#06182E] via-[#06182E]/95 to-[#06182E]/65" />

      {/* Blueprint Grid */}

      {/* Gold Decorative Glow */}
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
        className="pointer-events-none absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-[#C9972B]/10 blur-3xl"
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            {/* Breadcrumb */}
            <motion.div
              variants={fadeUpVariants}
              className="mb-8 flex items-center gap-2 text-sm text-white/60"
            >
              <a href="/" className="transition-colors hover:text-[#E0B04A]">
                Home
              </a>

              <ChevronRight size={15} />

              <span className="text-white">Resources</span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              variants={fadeUpVariants}
              className="mt-7 text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-[64px]"
            >
              Everything You
              <span className="mt-2 block text-white">Need to Know</span>
              <span className="mt-2 block font-serif italic text-[#E0B04A]">
                {"Starts Here.".split("").map((letter, index) => (
                  <motion.span
                    key={`${letter}-${index}`}
                    initial={
                      reduce
                        ? false
                        : {
                            opacity: 0,
                            y: 25,
                            filter: "blur(6px)",
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: reduce ? 0 : 0.45,
                      delay: reduce ? 0 : index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUpVariants}
              className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
            >
              Explore our product catalogues, technical documentation, and
              company resources. Find the information you need about our
              industrial abrasive and steel polishing solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-8 flex flex-wrap gap-3 sm:mt-10"
            >
              <motion.a
                href="#pdf-documents"
                whileHover={reduce ? undefined : { y: -4, scale: 1.03 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#E0B04A] px-6 py-3.5 text-sm font-bold text-[#06182E] transition-colors hover:bg-[#F0CA6A] sm:px-8"
              >
                Explore Documents
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={reduce ? undefined : { y: -4, scale: 1.03 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#E0B04A] hover:bg-white/10 sm:px-8"
              >
                Contact Us
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT DOCUMENT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 45, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: EASE,
            }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            {/* Decorative Circle */}
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E0B04A]/15 sm:h-[420px] sm:w-[420px]" />

            <motion.div
              animate={
                reduce
                  ? undefined
                  : {
                      rotate: [0, 2, 0],
                      y: [0, -8, 0],
                    }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative mx-auto h-[380px] w-full max-w-[420px] sm:h-[470px]"
            >
              {/* Back Document */}
              <motion.div
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[280px] w-[210px] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] rounded-2xl border border-white/10 bg-[#102B46]/80 sm:h-[340px] sm:w-[250px]"
              />

              {/* Middle Document */}
              <motion.div
                animate={reduce ? undefined : { y: [0, 10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[290px] w-[220px] -translate-x-1/2 -translate-y-1/2 rotate-[8deg] rounded-2xl border border-[#E0B04A]/25 bg-[#0E2943] p-5 sm:h-[350px] sm:w-[260px]"
              >
                <div className="flex items-center justify-between">
                  <Layers size={22} className="text-[#E0B04A]" />

                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Catalogue
                  </span>
                </div>

                <div className="mt-10 space-y-3">
                  {[85, 65, 95, 55, 80].map((width, index) => (
                    <div
                      key={index}
                      style={{ width: `${width}%` }}
                      className="h-2 rounded-full bg-white/10"
                    />
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div
                      key={item}
                      className="flex h-16 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]"
                    >
                      <FileText size={20} className="text-[#E0B04A]/60" />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Front Document */}
              <motion.div
                animate={
                  reduce
                    ? undefined
                    : {
                        y: [0, -10, 0],
                        rotate: [-2, 1, -2],
                      }
                }
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[300px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#E0B04A]/20 bg-[#F8F6F0] p-5 sm:h-[360px] sm:w-[270px] sm:p-6"
              >
                {/* Document Header */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#06182E] text-[#E0B04A]">
                    <FileText size={22} />
                  </div>

                  <span className="rounded-full bg-[#E0B04A]/20 px-3 py-1 text-[10px] font-bold tracking-widest text-[#8A6212]">
                    PDF
                  </span>
                </div>

                {/* Document Title */}
                <div className="mt-7">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8A6212]">
                    Industrial Solutions
                  </p>

                  <h3 className="mt-2 font-serif text-xl font-bold leading-tight text-[#06182E] sm:text-2xl">
                    Product
                    <span className="block italic text-[#C9972B]">
                      Catalogue
                    </span>
                  </h3>
                </div>

                {/* Document Lines */}
                <div className="mt-6 space-y-2.5">
                  {[100, 85, 95, 70, 90].map((width, index) => (
                    <motion.div
                      key={index}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.7 + index * 0.1,
                        ease: EASE,
                      }}
                      style={{ width: `${width}%` }}
                      className="h-2 origin-left rounded-full bg-[#06182E]/10"
                    />
                  ))}
                </div>

                {/* Footer */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-[#C9972B] text-[9px] font-bold text-[#8A6212]">
                    KT
                  </div>

                  <motion.div
                    animate={reduce ? undefined : { y: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E0B04A] text-[#06182E]"
                  >
                    <Download size={18} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Catalogue Chip */}
            <motion.div
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-8 rounded-full border border-white/15 bg-[#0E2943]/90 px-4 py-3 backdrop-blur-md sm:left-2"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E0B04A]/15 text-[#E0B04A]">
                  <FileText size={17} />
                </div>

                <div>
                  <p className="text-xs font-bold text-white">Catalogues</p>
                  <p className="text-[10px] text-white/50">
                    Product information
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Technical Chip */}
            <motion.div
              animate={reduce ? undefined : { y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 right-0 rounded-full border border-[#E0B04A]/25 bg-[#0E2943]/90 px-4 py-3 backdrop-blur-md sm:right-2"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E0B04A]/15 text-[#E0B04A]">
                  <Download size={17} />
                </div>

                <div>
                  <p className="text-xs font-bold text-white">Technical Docs</p>
                  <p className="text-[10px] text-white/50">
                    Download resources
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Number */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
              Resources / 01
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesHero;
