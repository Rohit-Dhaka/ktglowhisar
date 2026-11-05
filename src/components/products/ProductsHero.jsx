
import { useRef } from "react";
import {
  motion,
  MotionConfig,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Check,
  Layers,
  Settings2,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";
import ProductImg from "../../assets/images/productHero.png";

/* =========================================================
   CONTENT
========================================================= */

const processes = [
  {
    no: "01",
    label: "Cutting",
    description: "Precision material preparation",
  },
  {
    no: "02",
    label: "Grinding",
    description: "Controlled surface refinement",
  },
  {
    no: "03",
    label: "Polishing",
    description: "Smooth and consistent finish",
  },
  {
    no: "04",
    label: "Finishing",
    description: "Professional surface quality",
  },
];

const marqueeWords = [
  "Steel Polishing",
  "Precision Abrasives",
  "Industrial Grinding",
  "Surface Finishing",
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

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
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: EASE,
    },
  },
};

const fadeLeftVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: EASE,
    },
  },
};

const fadeRightVariants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: EASE,
    },
  },
};

/* =========================================================
   PRODUCTS HERO
========================================================= */

const ProductsHero = () => {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();

  /* Scroll animation */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.5,
  });

  const imageY = useTransform(smoothProgress, [0, 1], [0, 70]);
  const imageScale = useTransform(smoothProgress, [0, 1], [1, 1.08]);

  return (
    <MotionConfig reducedMotion="never">
      <section
        ref={sectionRef}
        className="relative isolate w-full overflow-hidden bg-[#06182E] text-white"
      >
        {/* =================================================
            BACKGROUND
        ================================================== */}

        <div className="pointer-events-none absolute inset-0">
      

          <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full border border-[#C9972B]/10" />

          <div className="absolute -right-20 top-20 h-[350px] w-[350px] rounded-full border border-[#C9972B]/10" />

          <motion.div
            animate={
              reduce
                ? undefined
                : {
                    scale: [1, 1.15, 1],
                    opacity: [0.15, 0.3, 0.15],
                  }
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-32 left-0 h-[400px] w-[400px] rounded-full bg-[#C9972B]/10 blur-3xl"
          />
        </div>

        {/* =================================================
            MAIN HERO CONTENT
        ================================================== */}

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-32 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-32">
          {/* Breadcrumb */}

      

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative z-10 lg:col-span-6"
            >
              {/* Label */}

              {/* <motion.div
                variants={fadeUpVariants}
                className="inline-flex max-sm:hidden items-center gap-3 rounded-full border border-[#C9972B]/30 bg-[#C9972B]/10 px-4 py-2"
              >
                <Sparkles
                  size={15}
                  className="text-[#E0B04A]"
                />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E0B04A] sm:text-xs">
                  Industrial Product Collection
                </span>
              </motion.div> */}

              {/* Heading */}

              <motion.h1
                variants={fadeUpVariants}
                className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[68px]"
              >
                Engineered
                <span className="block text-white">
                  for Precision.
                </span>

                <span className="mt-2 block font-serif italic text-[#E0B04A]">
                  Designed for Shine.
                </span>
              </motion.h1>

              {/* Description */}

              <motion.p
                variants={fadeUpVariants}
                className="mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
              >
                Discover our range of industrial abrasive, steel
                polishing, grinding and finishing products built
                to support precision, consistency and professional
                surface quality.
              </motion.p>

              {/* Features */}

              <motion.div
                variants={fadeUpVariants}
                className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                {[
                  "Precision-focused solutions",
                  "Reliable product performance",
                  "Industrial applications",
                  "Quality-driven finishing",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#C9972B]/40 bg-[#C9972B]/10">
                      <Check
                        size={11}
                        className="text-[#E0B04A]"
                      />
                    </span>

                    <span className="text-xs font-medium text-white/75 sm:text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}

              <motion.div
                variants={fadeUpVariants}
                className="mt-9 flex flex-wrap gap-3"
              >
                <motion.a
                  href="#product-categories"
                  whileHover={reduce ? undefined : { y: -4 }}
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#E0B04A] px-6 py-3.5 text-sm font-bold text-[#06182E] transition-colors hover:bg-[#F0CA6A] sm:px-8"
                >
                  Explore Products

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.a>

                <motion.div
                  whileHover={reduce ? undefined : { y: -4 }}
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                >
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#E0B04A]/60 hover:bg-white/[0.08] sm:px-8"
                  >
                    Request a Quote

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Bottom Text */}

              {/* <motion.div
                variants={fadeUpVariants}
                className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9972B]/30 bg-[#C9972B]/10">
                  <Settings2
                    size={19}
                    className="text-[#E0B04A]"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Industrial Surface Solutions
                  </p>

                  <p className="mt-1 text-[10px] text-white/40 sm:text-xs">
                    Cutting · Grinding · Polishing · Finishing
                  </p>
                </div>
              </motion.div> */}
            </motion.div>

            {/* =================================================
                RIGHT PRODUCT SHOWCASE
            ================================================== */}

            <motion.div
              variants={fadeRightVariants}
              initial="hidden"
              animate="visible"
              className="relative lg:col-span-6"
            >
              {/* Main Image Frame */}

              <div className="relative mx-auto max-w-[600px]">
                {/* Image Background Frame */}

                <div className="absolute -inset-3 rounded-[2rem] border border-[#C9972B]/20 sm:-inset-5" />

                {/* Main Image */}

                <motion.div
                  style={{
                    y: reduce ? 0 : imageY,
                    scale: reduce ? 1 : imageScale,
                  }}
                  className="relative aspect-[4/4.5] overflow-hidden rounded-[1.5rem] bg-[#102B46] sm:rounded-[2rem]"
                >
                  <motion.img
                    src={ProductImg}
                    alt="Industrial steel polishing and abrasive products"
                    initial={{ opacity: 0, scale: 1.12 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 1.4,
                      ease: EASE,
                    }}
                    className="h-full w-full object-cover object-center"
                  />

                  {/* Image Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/95 via-[#06182E]/10 to-[#06182E]/20" />

                  {/* Top Image Label */}

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-[#06182E]/60 px-3 py-2 backdrop-blur-md sm:left-6 sm:top-6">
                    <span className="h-2 w-2 rounded-full bg-[#E0B04A]" />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white sm:text-xs">
                      Product Excellence
                    </span>
                  </div>

                  {/* Image Bottom Text */}

                  <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.6,
                        duration: 0.7,
                        ease: EASE,
                      }}
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E0B04A] sm:text-xs">
                        Built for Industrial Performance
                      </p>

                      <h2 className="mt-3 font-serif text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                        Precision in
                        <span className="block italic text-[#E0B04A]">
                          Every Process.
                        </span>
                      </h2>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Floating Product Badge */}

                <motion.div
                  animate={
                    reduce
                      ? undefined
                      : {
                          y: [0, -8, 0],
                        }
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-2 top-1/3 rounded-2xl border border-white/15 bg-[#0C2945]/90 p-4 backdrop-blur-md sm:-left-8 sm:p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9972B]/15 text-[#E0B04A]">
                      <Layers size={20} />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-white sm:text-sm">
                        Abrasive Solutions
                      </p>

                      <p className="mt-1 text-[10px] text-white/45">
                        Industrial Applications
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Precision Badge */}

                <motion.div
                  animate={
                    reduce
                      ? undefined
                      : {
                          y: [0, 8, 0],
                        }
                  }
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-2 bottom-1/4 rounded-2xl border border-[#C9972B]/25 bg-[#0C2945]/90 p-4 backdrop-blur-md sm:-right-8 sm:p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9972B]/15 text-[#E0B04A]">
                      <Sparkles size={20} />
                    </div>

                    <div>
                      <p className="text-xs font-bold text-white sm:text-sm">
                        Surface Finishing
                      </p>

                      <p className="mt-1 text-[10px] text-white/45">
                        Precision & Consistency
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Image Corner Accent */}

                <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-bl-[2rem] border-b-2 border-l-2 border-[#E0B04A]/70 sm:-bottom-5 sm:-left-5 sm:h-20 sm:w-20" />

                <div className="absolute -right-3 -top-3 h-16 w-16 rounded-tr-[2rem] border-r-2 border-t-2 border-[#E0B04A]/70 sm:-right-5 sm:-top-5 sm:h-20 sm:w-20" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* =================================================
            PROCESS TIMELINE
        ================================================== */}

        <div className="relative z-10 border-t border-white/10 bg-[#081D35]/80">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-6"
            >
              {processes.map((process, index) => (
                <motion.div
                  key={process.no}
                  variants={fadeUpVariants}
                  whileHover={reduce ? undefined : { y: -4 }}
                  className="relative"
                >
                  {/* Connector */}

                  {index !== processes.length - 1 && (
                    <div className="absolute left-10 top-5 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-[#C9972B]/50 to-transparent sm:block" />
                  )}

                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C9972B]/30 bg-[#C9972B]/10 font-serif text-sm font-bold text-[#E0B04A]">
                      {process.no}
                    </span>

                    <div className="min-w-0 pt-1">
                      <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white sm:text-sm">
                        {process.label}
                      </h3>

                      <p className="mt-2 text-[10px] leading-5 text-white/40 sm:text-xs">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* =================================================
            BOTTOM MARQUEE
        ================================================== */}

        <div className="relative z-10 overflow-hidden border-t border-white/10 bg-[#06182E] py-4">
          <motion.div
            animate={
              reduce
                ? undefined
                : {
                    x: ["0%", "-50%"],
                  }
            }
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max items-center"
          >
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-center"
              >
                {marqueeWords.map((word) => (
                  <div
                    key={`${copy}-${word}`}
                    className="flex items-center"
                  >
                    <span className="px-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 sm:px-8 sm:text-xs">
                      {word}
                    </span>

                    <span className="text-[#E0B04A]">
                      ✦
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default ProductsHero;