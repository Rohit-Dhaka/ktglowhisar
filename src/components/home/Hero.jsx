import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  Cog,
  ShieldCheck,
  Award,
  Factory,
  BadgeCheck,
  Users,
  Truck,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";

import heroImage from "../../assets/images/hero1.png";

/* =========================================================
   SEO — PAGE <head> METADATA
========================================================= */

const SEO_TITLE =
  "KT Glow — Precision Abrasives for a Flawless Steel Finish";

const SEO_DESCRIPTION =
  "KT Glow, Thalor manufacturer of precision abrasives. High-performance cutting, grinding and polishing solutions engineered for superior finishing and demanding industrial applications.";

const SEO_KEYWORDS =
  "abrasives manufacturer, industrial abrasives, cutting abrasives, grinding abrasives, polishing abrasives, steel finishing, KT Glow, Thalor manufacturer";

function useSEO({ title, description, keywords }) {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (name, content, attr = "name") => {
      if (!content) return;
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("twitter:card", "summary_large_image", "name");
    setMeta("twitter:title", title, "name");
    setMeta("twitter:description", description, "name");
  }, [title, description, keywords]);
}

/* =========================================================
   CONTENT & TAGS
========================================================= */

const content = {
  subtitle: "KT GLOW — THALOR MANUFACTURER",
  title: "Precision Abrasives",
  highlight: "For a Flawless Steel Finish",
  description:
    "Engineered for demanding industrial applications, KT Glow manufactures premium cutting, grinding, and polishing solutions.",
  button: "Explore Products",
  link: "/products",
};

/* 2-3 Selling Tags */
const trustTags = [
  { icon: CheckCircle2, label: "ISO 9001:2015 Certified" },
  { icon: Sparkles, label: "Mirror Finish Guarantee" },
  { icon: Zap, label: "Heavy-Duty Performance" },
];

/* 4 Feature Items */
const features = [
  { icon: Cog, label: "Precision Engineered" },
  { icon: ShieldCheck, label: "Strong & Durable" },
  { icon: Award, label: "Premium Quality" },
  { icon: Factory, label: "Industrial Grade" },
];

/* Real numbers for bottom stats bar */
const stats = [
  { icon: BadgeCheck, value: "10+", label: "Years of Experience" },
  { icon: Users, value: "5000+", label: "Happy Customers" },
  { icon: Award, value: "100+", label: "Product Variants" },
  { icon: Truck, value: "Pan India", label: "Delivery Available" },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const EASE = [0.22, 1, 0.36, 1];

const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

const lineReveal = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

const featureContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.35,
    },
  },
};

const featureItem = {
  hidden: { opacity: 0, y: 15, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
};

const statsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

/* =========================================================
   HERO COMPONENT
========================================================= */

const Hero = () => {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();

  useSEO({
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    keywords: SEO_KEYWORDS,
  });

  /* Scroll parallax */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.5,
  });

  const imageY = useTransform(smooth, [0, 1], [0, 80]);
  const imageScale = useTransform(smooth, [0, 1], [1.02, 1.1]);
  const circleY = useTransform(smooth, [0, 1], [0, 140]);
  const circleRotate = useTransform(smooth, [0, 1], [0, 20]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#FBF8F2]">
      {/* Google font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
      />

      {/* =====================================================
          PART 1: HERO VIEWPORT (RESPONSIVE FULL SCREEN)
      ====================================================== */}
      <div className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden px-4 pt-24 pb-10 sm:px-8 sm:pt-28 sm:pb-14 md:px-12 lg:px-20 xl:px-28">
        
        {/* Background Image (Parallax + Zoom-in) */}
        <motion.div
          style={{
            y: reduce ? 0 : imageY,
            scale: reduce ? 1 : imageScale,
          }}
          className="absolute inset-0 z-0 origin-center"
        >
          <motion.img
            src={heroImage}
            alt={`${content.title} ${content.highlight} — KT Glow abrasives`}
            loading="eager"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: EASE }}
            className="h-full w-full object-cover object-right sm:object-right md:object-right"
          />
        </motion.div>

        {/* Gradient Overlay for Text Readability */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute inset-0 z-[1] bg-gradient-to-b from-[#FBF8F2]/95 via-[#FBF8F2]/90 to-[#FBF8F2]/80 md:bg-gradient-to-r md:from-[#FBF8F2] md:via-[#FBF8F2]/92 md:to-transparent md:w-[70%]"
        />

        {/* Soft Gold Decorative Glow */}
        <motion.div
          aria-hidden="true"
          animate={
            reduce
              ? undefined
              : { y: [0, -20, 0], scale: [1, 1.1, 1], opacity: [0.4, 0.75, 0.4] }
          }
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute right-[10%] top-[18%] z-[1] h-40 w-40 rounded-full bg-[#E0B04A]/20 blur-3xl md:h-72 md:w-72"
        />

        {/* Decorative Circle */}
        <motion.div
          aria-hidden="true"
          style={{
            y: reduce ? 0 : circleY,
            rotate: reduce ? 0 : circleRotate,
          }}
          animate={reduce ? undefined : { scale: [1, 1.04, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-20 top-16 z-[1] h-60 w-60 rounded-full border border-[#B8862B]/20 sm:-right-24 sm:top-24 sm:h-96 sm:w-96 lg:h-[460px] lg:w-[460px]"
        />

        {/* Main Content Area */}
        <div className="relative z-[2] mx-auto w-full max-w-[1600px]">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="w-full max-w-2xl lg:max-w-3xl"
          >
            {/* Subtitle / Brand Tag (Now properly visible below navbar) */}
            <motion.div variants={fadeUp} className="mb-2.5 flex items-center gap-2.5 sm:mb-3.5 sm:gap-3">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-0.5 shrink-0 bg-[#B8862B]"
              />
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8A6212] sm:text-xs md:text-sm">
                {content.subtitle}
              </p>
            </motion.div>

            {/* Main Heading (Properly scaled for small screens) */}
            <h1 className="text-[28px] font-extrabold leading-[1.14] tracking-tight text-[#06182E] xs:text-3xl sm:text-5xl md:text-6xl lg:text-[68px]">
              <span className="block overflow-hidden pb-1 pt-0.5">
                <motion.span variants={lineReveal} className="block">
                  {content.title}
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-1.5 pt-0.5">
                <motion.span variants={lineReveal} className="inline-block">
                  <motion.span
                    animate={
                      reduce
                        ? undefined
                        : { backgroundPosition: ["0% 50%", "200% 50%"] }
                    }
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="inline-block bg-gradient-to-r from-[#9A6B12] via-[#E0B04A] to-[#9A6B12] bg-[length:200%_auto] bg-clip-text pr-2 font-['Dancing_Script',cursive] font-bold text-transparent text-[30px] xs:text-[34px] sm:text-5xl md:text-6xl lg:text-[70px]"
                  >
                    {content.highlight}
                  </motion.span>
                </motion.span>
              </span>
            </h1>

            {/* Tags (Compact & responsive pills) */}
            <motion.div
              variants={fadeUp}
              className="mt-3 flex flex-wrap items-center gap-1.5 sm:mt-4 sm:gap-2.5"
            >
              {trustTags.map((tag, idx) => {
                const TagIcon = tag.icon;
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#B8862B]/25 bg-[#F5EEDB] px-2.5 py-0.5 text-[10px] font-semibold text-[#8A6212] shadow-sm sm:px-3 sm:py-1 sm:text-xs"
                  >
                    <TagIcon size={12} className="shrink-0 text-[#B8862B]" />
                    {tag.label}
                  </span>
                );
              })}
            </motion.div>

            {/* Description Paragraph */}
            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-2xl text-[13px] leading-relaxed text-[#06182E]/85 sm:mt-4 sm:text-[15px] sm:leading-7"
            >
              {content.description}
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={fadeUp} className="mt-5 sm:mt-7">
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Link
                  to={content.link}
                  aria-label={content.button}
                  className="inline-flex items-center gap-2 rounded-full bg-[#06182E] px-5 py-3 text-xs font-bold text-white shadow-md shadow-[#06182E]/20 transition-all duration-300 hover:bg-[#0D2A4A] sm:px-7 sm:py-3.5 sm:text-sm md:text-base"
                >
                  {content.button}
                  <motion.span
                    animate={reduce ? undefined : { x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-[#E0B04A]"
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            {/* =====================================================
                4 FEATURE ITEMS (PERFECTLY SCALED FOR SMALL SCREENS)
            ====================================================== */}
            <motion.div
              variants={featureContainer}
              initial="hidden"
              animate="show"
              className="mt-7 grid w-full grid-cols-2 justify-items-center gap-x-3 gap-y-5 sm:mt-10 sm:grid-cols-4 sm:gap-6 md:mt-12 lg:gap-8 max-w-lg mx-auto md:mx-0"
            >
              {features.map(({ icon: Icon, label }, index) => (
                <motion.div
                  key={label}
                  variants={featureItem}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex w-full max-w-[130px] cursor-default flex-col items-center justify-center text-center gap-2"
                >
                  {/* Circular Gold Badge (Responsive size: 48px on mobile, 60px on desktop) */}
                  <motion.div
                    animate={reduce ? undefined : { y: [0, -3, 0] }}
                    transition={{
                      duration: 3,
                      delay: index * 0.25,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.08, rotate: 5 }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#B8862B]/20 bg-[#EFE5D2]/85 text-[#8A6212] shadow-sm transition-colors duration-300 hover:bg-[#EAE0CB] sm:h-14 sm:w-14 md:h-15 md:w-15"
                  >
                    <Icon size={20} strokeWidth={1.8} className="sm:h-6 sm:w-6" />
                  </motion.div>

                  {/* Centered Label with Fixed Height so both columns stay strictly aligned */}
                  <div className="flex h-8 items-center justify-center">
                    <span className="text-[11px] font-bold leading-tight text-[#06182E] sm:text-xs md:text-[13px]">
                      {label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* =====================================================
          PART 2: STATS BAR (SHOWS BELOW THE FULL SCREEN HEIGHT)
      ====================================================== */}
      <div className="relative z-[3] w-full bg-[#718865] shadow-inner">
        <motion.div
          variants={statsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto grid w-full max-w-[1600px] grid-cols-2 gap-y-5 px-3 py-5 sm:px-8 md:grid-cols-4 md:gap-y-0 md:px-12 md:py-6 lg:px-20"
        >
          {stats.map(({ icon: Icon, value, label }, index) => (
            <motion.div
              key={label}
              variants={statItem}
              whileHover={{ y: -3 }}
              className={`flex items-center gap-2.5 px-2 sm:gap-4 sm:px-4 md:px-6 ${
                index !== stats.length - 1
                  ? "md:border-r md:border-white/20"
                  : ""
              }`}
            >
              {/* Icon Container */}
              <motion.span
                animate={reduce ? undefined : { y: [0, -3, 0] }}
                transition={{
                  duration: 3,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex shrink-0 rounded-lg bg-white/10 p-1.5 text-white sm:rounded-xl sm:p-2.5"
              >
                <Icon
                  strokeWidth={1.75}
                  className="h-5 w-5 sm:h-7 sm:w-7 md:h-8 md:w-8"
                />
              </motion.span>

              {/* Text: Value & Label */}
              <div className="min-w-0">
                <p className="font-extrabold leading-none text-white text-base sm:text-xl md:text-2xl lg:text-3xl">
                  {value}
                </p>
                <p className="mt-0.5 truncate text-[10px] font-medium text-white/90 sm:text-xs md:text-[13px]">
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;