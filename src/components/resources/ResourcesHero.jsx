import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Download,
  FileCheck,
  FileText,
  Layers,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";

import BG_IMAGE from "../../assets/images/productHero.png";

const EASE = [0.22, 1, 0.36, 1];
const TEXT_TO_TYPE = "Starts Here.";

/* Edit these to match your real numbers */
const STATS = [
  {
    icon: BadgeCheck,
    value: "10+",
    label: "Years of Experience",
  },
  {
    icon: Users,
    value: "5000+",
    label: "Happy Customers",
  },
  {
    icon: Award,
    value: "100+",
    label: "Product Variants",
  },
  {
    icon: Truck,
    value: "Pan India",
    label: "Delivery Available",
  },
];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE,
    },
  },
};

const ResourcesHero = () => {
  const reduce = useReducedMotion();

  // Typewriter States
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Normal Real-time Typewriter Loop
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
    <section className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#06182E] pt-24 text-white sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12">
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
            backgroundImage: `url(${BG_IMAGE})`,
          }}
        />
      </motion.div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#06182E]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#06182E] via-[#06182E]/95 to-[#06182E]/65" />

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

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 pt-14 flex-col justify-between gap-8 px-4 sm:px-6 lg:gap-10 lg:px-8">
        
        {/* TOP: 2-COLUMN HERO GRID */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            {/* Heading */}
            <motion.h1
              variants={fadeUpVariants}
              className="text-3xl font-extrabold leading-[1.14] tracking-tight sm:text-5xl md:text-5xl lg:text-[56px] xl:text-[60px]"
            >
              Everything You
              <span className="mt-1.5 block text-white">Need to Know</span>

              {/* Typewriter text */}
              <span className="mt-1.5 block min-h-[1.25em] font-serif italic text-[#E0B04A]">
                {displayText}
                <span className="ml-1 inline-block animate-pulse font-sans font-light not-italic text-[#E0B04A]">
                  |
                </span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUpVariants}
              className="mt-5 max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7"
            >
              Explore our product catalogues, technical documentation, and
              company resources. Find the information you need about our
              industrial abrasive and steel polishing solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-7 flex flex-wrap gap-3 sm:mt-8"
            >
              <motion.a
                href="#pdf-documents"
                whileHover={reduce ? undefined : { y: -3, scale: 1.02 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#E0B04A] px-6 py-3 text-sm font-bold text-[#06182E] transition-colors hover:bg-[#F0CA6A] sm:px-7 sm:py-3.5"
              >
                Explore Documents
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={reduce ? undefined : { y: -3, scale: 1.02 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[#E0B04A] hover:bg-white/10 sm:px-7 sm:py-3.5"
              >
                Contact Us
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT DOCUMENT VISUAL */}
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
            {/* Decorative Circle */}
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
              {/* Back Document */}
              <motion.div
                animate={reduce ? undefined : { y: [0, -6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[250px] w-[190px] -translate-x-1/2 -translate-y-1/2 rotate-[-12deg] rounded-2xl border border-white/10 bg-[#102B46]/80 sm:h-[300px] sm:w-[230px]"
              />

              {/* Middle Document */}
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

              {/* Front Document */}
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
                className="absolute left-1/2 top-1/2 h-[270px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[#E0B04A]/20 bg-[#F8F6F0] p-4 sm:h-[320px] sm:w-[250px] sm:p-5"
              >
                {/* Document Header */}
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#06182E] text-[#E0B04A] sm:h-10 sm:w-10">
                    <FileText size={19} />
                  </div>
                  <span className="rounded-full bg-[#E0B04A]/20 px-2.5 py-0.5 text-[9px] font-bold tracking-widest text-[#8A6212]">
                    PDF
                  </span>
                </div>

                {/* Document Title */}
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

                {/* Document Lines */}
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

                {/* Footer */}
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

            {/* Floating Catalogue Chip */}
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
                  <p className="text-[11px] font-bold text-white sm:text-xs">Catalogues</p>
                  <p className="text-[9px] text-white/50">Product info</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Technical Chip */}
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
                  <p className="text-[11px] font-bold text-white sm:text-xs">Technical Docs</p>
                  <p className="text-[9px] text-white/50">Download resources</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM: 4 STAT CARDS DOCK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
          className="mt-6 w-full pt-4 sm:mt-8 sm:pt-6"
        >
          {/* Subtle Top Divider Line */}
          <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={reduce ? undefined : { y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="group relative flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur-md transition-all duration-300 hover:border-[#E0B04A]/40 hover:bg-[#0E2943]/80 hover:shadow-lg hover:shadow-[#E0B04A]/5 sm:gap-3.5 sm:p-4"
                >
                  {/* Icon Box */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E0B04A]/10 text-[#E0B04A] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#E0B04A] group-hover:text-[#06182E] sm:h-11 sm:w-11">
                    <Icon size={20} />
                  </div>

                  {/* Value & Label */}
                  <div className="min-w-0">
                    <p className="font-serif text-lg font-bold tracking-tight text-white transition-colors group-hover:text-[#E0B04A] sm:text-xl lg:text-2xl">
                      {stat.value}
                    </p>
                    <p className="truncate text-[11px] font-medium text-slate-300 sm:text-xs">
                      {stat.label}
                    </p>
                  </div>

                  {/* Subtle Corner Glow on Hover */}
                  <div className="pointer-events-none absolute -right-2 -top-2 h-8 w-8 rounded-full bg-[#E0B04A]/0 blur-md transition-all duration-300 group-hover:bg-[#E0B04A]/20" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ResourcesHero;