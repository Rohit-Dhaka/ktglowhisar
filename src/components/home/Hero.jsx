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
   CONTENT
========================================================= */

const content = {
  subtitle: "KT GLOW — THALOR MANUFACTURER",
  title: "Precision Abrasives",
  highlight: "For a Flawless Steel Finish",
  description:
    "High-performance cutting, grinding and polishing solutions engineered for superior finishing.",
  button: "Explore Products",
  link: "/products",
};

/* Edit these to match your real selling points */
const features = [
  { icon: Cog, label: "Precision Engineered" },
  { icon: ShieldCheck, label: "Strong & Durable" },
  { icon: Award, label: "Premium Quality" },
  { icon: Factory, label: "Industrial Grade" },
];

/* Edit these to match your real numbers (used by the stats bar below) */
const stats = [
  { icon: BadgeCheck, value: "10+", label: "Years of Experience" },
  { icon: Users, value: "5000+", label: "Happy Customers" },
  { icon: Award, value: "100+", label: "Product Variants" },
  { icon: Truck, value: "Pan India", label: "Delivery Available" },
];

/* =========================================================
   ANIMATION VARIANTS (framer-motion)
========================================================= */

const EASE = [0.22, 1, 0.36, 1];

const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

/* each heading line slides up from behind a mask */
const lineReveal = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
  },
};

const featureContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.7,
    },
  },
};

const featureItem = {
  hidden: { opacity: 0, y: 25, scale: 0.85 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

const statsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 35, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};

/* =========================================================
   HERO SECTION
========================================================= */

const Hero = () => {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();

  useSEO({
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    keywords: SEO_KEYWORDS,
  });

  /* scroll parallax */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.5,
  });

  const imageY = useTransform(smooth, [0, 1], [0, 100]);
  const imageScale = useTransform(smooth, [0, 1], [1.02, 1.12]);
  const circleY = useTransform(smooth, [0, 1], [0, 180]);
  const circleRotate = useTransform(smooth, [0, 1], [0, 20]);

  return (
    <section
      ref={sectionRef}
      className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex min-h-[100svh] w-screen flex-col overflow-hidden bg-[#FBF8F2] md:h-screen md:min-h-0"
    >
      {/* Google font (you can also put this <link> in index.html) */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
      />

   
      <motion.div
        style={{
          y: reduce ? 0 : imageY,
          scale: reduce ? 1 : imageScale,
        }}
        className="absolute inset-x-0 -bottom-[10%] -top-[5%] z-0 origin-center"
      >
        <motion.img
          src={heroImage}
          alt={`${content.title} ${content.highlight} — KT Glow abrasives`}
          loading="eager"
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: EASE }}
          className="block h-full w-full object-cover object-center md:object-contain md:object-right"
        />
      </motion.div>

      {/* =====================================================
          LEFT FADE / GRADIENT
      ====================================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,#FBF8F2_0%,rgba(251,248,242,0.95)_48%,rgba(251,248,242,0.78)_100%)] md:bg-[linear-gradient(90deg,#FBF8F2_0%,#FBF8F2_27%,rgba(251,248,242,0.92)_43%,rgba(251,248,242,0.55)_53%,rgba(251,248,242,0)_70%)]"
      />

      {/* =====================================================
          SOFT GOLD GLOW (floats slowly)
      ====================================================== */}
      <motion.div
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : { y: [0, -24, 0], scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[8%] top-[18%] z-[1] h-[180px] w-[180px] rounded-full bg-[#E0B04A]/25 blur-3xl md:h-[300px] md:w-[300px]"
      />

      {/* =====================================================
          DECORATIVE CIRCLE
      ====================================================== */}
      <motion.div
        aria-hidden="true"
        style={{
          y: reduce ? 0 : circleY,
          rotate: reduce ? 0 : circleRotate,
        }}
        animate={reduce ? undefined : { scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-[100px] top-[70px] z-[1] h-[220px] w-[220px] rounded-full border border-[#B8862B]/25 md:-right-[170px] md:top-[100px] md:h-[500px] md:w-[500px]"
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="relative z-[2] mx-auto flex w-full max-w-[1800px] flex-1 items-end px-6 pb-[80px] sm:px-10 sm:pt-20 md:px-[72px] md:pb-8 md:pt-[10vh] lg:px-24 xl:px-32">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="w-full max-w-[900px]"
        >
          {/* SMALL LABEL */}
          <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3 max-md:pt-30">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 38 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="h-0.5 shrink-0 bg-[#B8862B]"
            />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8A6212] md:text-[13px]">
              {content.subtitle}
            </p>
          </motion.div>

          {/* HEADING (single H1 for the page) */}
          <h1 className="text-[40px] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#06182E] sm:text-[54px] md:text-[clamp(44px,min(5.6vw,8.4vh),84px)]">
            <span className="block overflow-hidden pb-1 pt-3">
              <motion.span variants={lineReveal} className="block">
                {content.title}
              </motion.span>
            </span>

            <span className="block overflow-hidden pb-3">
              <motion.span
                variants={lineReveal}
                className="inline-block"
              >
                {/* gold gradient text with a slow shimmer */}
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
                  className="inline-block bg-[linear-gradient(90deg,#9A6B12,#E0B04A,#9A6B12)] bg-[length:200%_auto] bg-clip-text pr-2 font-['Dancing_Script',cursive] font-bold tracking-normal text-transparent"
                >
                  {content.highlight}
                </motion.span>
              </motion.span>
            </span>
          </h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-[520px] text-[15px] leading-[1.8] text-[#06182E]/80 md:mt-[2vh] md:text-[16.5px]"
          >
            {content.description}
          </motion.p>

          {/* BUTTON */}
          <motion.div
            variants={fadeUp}
            className="mt-8 pb-10 md:mt-[3.5vh]"
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="inline-block"
            >
              <Link
                to={content.link}
                aria-label={content.button}
                className="inline-flex items-center gap-2 rounded-full bg-[#06182E] px-7 py-4 text-[15px] font-bold text-white shadow-[0_12px_30px_rgba(6,24,46,0.28)] transition-[background-color,box-shadow] duration-300 hover:bg-[#0D2A4A] hover:shadow-[0_18px_38px_rgba(6,24,46,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06182E]"
              >
                {content.button}
                <motion.span
                  animate={reduce ? undefined : { x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex text-[#E0B04A]"
                >
                  <ArrowRight size={18} />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* FEATURES */}
          <motion.div
            variants={featureContainer}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap gap-6 pb-4 sm:gap-8 md:mt-[3.5vh] md:gap-9"
          >
            {features.map(({ icon: Icon, label }, index) => (
              <motion.div
                key={label}
                variants={featureItem}
                whileHover={{ y: -7 }}
                transition={{ type: "spring", stiffness: 250, damping: 15 }}
                className="flex max-w-[125px] cursor-default flex-col items-start gap-2"
              >
                <motion.span
                  animate={reduce ? undefined : { y: [0, -4, 0] }}
                  transition={{
                    duration: 3,
                    delay: index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  className="flex rounded-full bg-[#B8862B]/15 p-[6px] text-[#8A6212]"
                >
                  <Icon size={28} strokeWidth={1.75} />
                </motion.span>

                <span className="text-[13px] font-bold leading-[1.35] text-[#06182E]">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM STATS (hidden for now — remove the comment
          markers to show it again)
      ====================================================== */}
      
      <div className="relative z-[3] w-full">
        <motion.div
          variants={statsContainer}
          initial="hidden"
          animate="show"
          className="grid w-full grid-cols-2 gap-y-6 bg-[rgba(117,141,107,0.94)] px-4 py-6 backdrop-blur-[10px] sm:px-8 md:grid-cols-4 md:gap-y-0 md:px-16 md:py-5 lg:px-24"
        >
          {stats.map(({ icon: Icon, value, label }, index) => (
            <motion.div
              key={label}
              variants={statItem}
              whileHover={{ y: -5 }}
              className={`flex cursor-default items-center gap-[10px] px-2 sm:px-4 md:gap-[14px] md:px-6 ${
                index !== stats.length - 1
                  ? "md:border-r md:border-white/[0.22]"
                  : ""
              }`}
            >
              <motion.span
                animate={reduce ? undefined : { y: [0, -4, 0] }}
                transition={{
                  duration: 3,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="flex shrink-0 text-white"
              >
                <Icon
                  strokeWidth={1.75}
                  className="h-[26px] w-[26px] md:h-[31px] md:w-[31px]"
                />
              </motion.span>

              <div>
                <p className="text-[19px] font-extrabold leading-none text-white md:text-[25px]">
                  {value}
                </p>
                <p className="mt-[5px] text-[10.5px] text-white/[0.86] md:text-[12.5px]">
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