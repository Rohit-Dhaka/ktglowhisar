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
  Sparkles,
  Layers,
  ShieldCheck,
  Award,
  Truck,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import ProductImg from "../../assets/images/productHero.png";

const marqueeWords = [
  "Steel Polishing",
  "Precision Abrasives",
  "Industrial Grinding",
  "Surface Finishing",
  "Flap & Fiber Discs",
  "Mirror Buffing",
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const EASE = [0.22, 1, 0.36, 1];

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
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

const fadeRightVariants = {
  hidden: { opacity: 0, x: 35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: EASE },
  },
};

/* =========================================================
   PRODUCTS HERO COMPONENT
========================================================= */

const ProductsHero = () => {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();

  /* Parallax Scroll Animation */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.5,
  });

  const imageY = useTransform(smoothProgress, [0, 1], [0, 45]);
  const imageScale = useTransform(smoothProgress, [0, 1], [1, 1.04]);

  return (
    <MotionConfig reducedMotion="never">
      <section
        ref={sectionRef}
        className="relative isolate w-full overflow-hidden bg-[#151C22] text-white"
      >
        {/* Google Cursive Font 'Great Vibes' */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
        />

        {/* Top Breadcrumb Navigation */}
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
            <span className="text-[#E0B04A]">Products</span>
          </div>
        </motion.div>

        {/* =================================================
            1. FULL BACKGROUND IMAGE + BRAND TONED OVERLAY
        ================================================== */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          {/* Background Image */}
          <img
            src={ProductImg}
            alt="KT Glow Industrial Workshop Background"
            className="h-full w-full object-cover object-center scale-105 filter blur-[2px]"
          />

          {/* Deep Brand Dark Overlay */}
          <div className="absolute inset-0 bg-[#151C22]/85 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#13191F]/95 via-[#151C22]/85 to-[#171F26]/75" />

          {/* Subtle Ambient Gold Radial Glow */}
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#E0B04A]/[0.08] blur-[130px]" />
          <div className="absolute -bottom-20 left-0 h-[400px] w-[400px] rounded-full bg-[#E0B04A]/[0.05] blur-[110px]" />

          {/* Geometric Circles */}
          <div className="absolute -right-32 top-10 h-[420px] w-[420px] rounded-full border border-white/[0.05]" />
          <div className="absolute -right-16 top-24 h-[300px] w-[300px] rounded-full border border-[#E0B04A]/10" />
        </div>

        {/* =================================================
            2. MAIN HERO CONTENT
        ================================================== */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8 lg:pb-16 lg:pt-36">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
            
            {/* =================================================
                LEFT CONTENT (Headings + Great Vibes Cursive)
            ================================================== */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative z-10 lg:col-span-7"
            >
              {/* Circular Icon Badge */}
              <motion.div
                variants={fadeUpVariants}
                className="flex items-center gap-3.5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E0B04A]/70 bg-[#E0B04A]/10 text-[#E0B04A] shadow-[0_0_15px_rgba(224,176,74,0.15)]">
                  <Sparkles size={20} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#E0B04A] sm:text-xs">
                  ✦ INDUSTRIAL COLLECTION ✦
                </span>
              </motion.div>

              {/* Main Headline with 'Great Vibes' */}
              <motion.h1
                variants={fadeUpVariants}
                className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[62px]"
              >
                Engineered for{" "}
                <span className="block font-['Great_Vibes',cursive] text-[50px] font-normal leading-[1.1] text-[#E0B04A] sm:text-[68px] lg:text-[80px]">
                  Flawless Shine
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={fadeUpVariants}
                className="mt-4 max-w-xl text-[14.5px] leading-[1.8] text-slate-300 sm:text-[16px]"
              >
                Discover precision cutting, grinding, and steel polishing abrasives
                engineered by KT Glow for demanding industrial fabrication and
                flawless mirror consistency.
              </motion.p>

              {/* 4 Feature Points */}
              <motion.div
                variants={fadeUpVariants}
                className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2"
              >
                {[
                  "Precision-focused solutions",
                  "Reliable industrial performance",
                  "Heavy-duty resinoid bonds",
                  "Quality-driven mirror finish",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="shrink-0 text-[#E0B04A]" />
                    <span className="text-xs font-medium text-white/80 sm:text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons (Full width on mobile) */}
              <motion.div
                variants={fadeUpVariants}
                className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:flex-wrap"
              >
                <a
                  href="#product-categories"
                  className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-[#E0B04A] px-7 py-3.5 text-sm font-bold text-[#151C22] shadow-md shadow-[#E0B04A]/20 transition-all hover:bg-[#F0CA6A] hover:shadow-lg sm:w-auto sm:inline-flex"
                >
                  Explore Products
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <Link
                  to="/contact"
                  className="group flex w-full items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-[#E0B04A]/60 hover:bg-white/[0.08] sm:w-auto sm:inline-flex"
                >
                  Request a Quote
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </motion.div>
            </motion.div>

        
            <motion.div
              variants={fadeRightVariants}
              initial="hidden"
              animate="visible"
              className="relative flex justify-center lg:col-span-5"
            >
              <div className="relative w-full max-w-[420px]">
                
                <div className="absolute -inset-2.5 rounded-3xl border border-[#E0B04A]/25 sm:-inset-3.5" />

                {/* Main Compact Image Container */}
                <motion.div
                  style={{
                    y: reduce ? 0 : imageY,
                    scale: reduce ? 1 : imageScale,
                  }}
                  className="relative aspect-[4/3.4] overflow-hidden rounded-2xl bg-[#1D252E] shadow-2xl ring-1 ring-white/10"
                >
                  <img
                    src={ProductImg}
                    alt="Industrial steel polishing and abrasive products"
                    loading="eager"
                    className="h-full w-full object-cover object-center"
                  />

                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151C22]/95 via-transparent to-[#151C22]/20" />

                  
                  <div className="absolute left-3.5 top-3.5 flex items-center gap-1.5 rounded-full border border-white/20 bg-[#151C22]/80 px-3 py-1.5 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E0B04A]" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                      Product Excellence
                    </span>
                  </div>

                  {/* Bottom Text Over Foreground Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E0B04A]">
                      Built for Industrial Performance
                    </p>
                    <h3 className="mt-1 font-serif text-lg font-bold leading-tight text-white sm:text-xl">
                      Precision in{" "}
                      <span className="font-['Great_Vibes',cursive] text-2xl text-[#E0B04A]">
                        Every Process
                      </span>
                    </h3>
                  </div>
                </motion.div>

                
                <div className="absolute -left-3 top-1/4 rounded-xl border border-white/10 bg-[#1A232C]/90 p-2.5 shadow-xl backdrop-blur-md sm:-left-6">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E0B04A]/15 text-[#E0B04A]">
                      <Layers size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-white">Abrasives</p>
                      <p className="text-[9px] text-white/50">Industrial Series</p>
                    </div>
                  </div>
                </div>

                
                <div className="absolute -right-3 bottom-1/4 rounded-xl border border-[#E0B04A]/25 bg-[#1A232C]/90 p-2.5 shadow-xl backdrop-blur-md sm:-right-6">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E0B04A]/15 text-[#E0B04A]">
                      <Award size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-white">Mirror Polish</p>
                      <p className="text-[9px] text-white/50">Top Consistency</p>
                    </div>
                  </div>
                </div>

                
                <div className="absolute -bottom-2 -left-2 h-8 w-8 rounded-bl-xl border-b-2 border-l-2 border-[#E0B04A]/70" />
                <div className="absolute -right-2 -top-2 h-8 w-8 rounded-tr-xl border-r-2 border-t-2 border-[#E0B04A]/70" />
              </div>
            </motion.div>

          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4 sm:gap-4">
            {[
              { icon: ShieldCheck, value: "ISO 9001:2015", label: "Certified Production" },
              { icon: Award, value: "100%", label: "Mirror Finish Guarantee" },
              { icon: Layers, value: "6+ Categories", label: "Industrial Variants" },
              { icon: Truck, value: "Pan India", label: "Direct Factory Supply" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-black/20 p-3 backdrop-blur-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E0B04A]/40 bg-[#E0B04A]/10 text-[#E0B04A]">
                  <stat.icon size={18} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-white sm:text-base">{stat.value}</p>
                  <p className="text-[11px] text-white/60">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      
        <div className="relative z-10 overflow-hidden border-t border-white/10 bg-[#11171D] py-3.5">
          <motion.div
            animate={
              reduce
                ? undefined
                : {
                    x: ["0%", "-50%"],
                  }
            }
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max items-center"
          >
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center">
                {marqueeWords.map((word) => (
                  <div key={`${copy}-${word}`} className="flex items-center">
                    <span className="px-6 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/50 sm:px-8 sm:text-xs">
                      {word}
                    </span>
                    <span className="text-[#E0B04A]">✦</span>
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