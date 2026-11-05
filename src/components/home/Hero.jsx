import { useState, useEffect, useRef } from "react";
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
   CONTENT & TAGS
========================================================= */

const content = {
  subtitle: "KT GLOW — THALOR MANUFACTURER",
  title: "Better Abrasives.",
  description:
    "Engineered for demanding industrial applications, KT Glow manufactures premium cutting, grinding, and polishing solutions for steel perfection.",
  button: "Explore Products",
  link: "/products",
};

/* Typewriter Words (Aap yahan naye words bhi add kar sakte hain) */
const typewriterWords = [
  "Brighter Steel Finish.",
  "Flawless Mirror Shine.",
  "Precision Polishing.",
  "Industrial Perfection.",
];

/* 4 Feature Highlights (About Page Style) */
const heroHighlights = [
  {
    icon: Cog,
    tag: "Core Engineering",
    title: "Precision Engineered",
  },
  {
    icon: ShieldCheck,
    tag: "Proven Strength",
    title: "Strong & Durable",
  },
  {
    icon: Award,
    tag: "Certified Standard",
    title: "Premium ISO Quality",
  },
  {
    icon: Factory,
    tag: "Manufacturing Grade",
    title: "Industrial Abrasives",
  },
];

/* Real numbers for bottom stats bar */
const stats = [
  { icon: BadgeCheck, value: "10+", label: "Years of Experience" },
  { icon: Users, value: "5000+", label: "Happy Customers" },
  { icon: Award, value: "100+", label: "Product Variants" },
  { icon: Truck, value: "Pan India", label: "Delivery Available" },
];

/* =========================================================
   TYPEWRITER HOOK
========================================================= */

function useTypewriter(words, typingSpeed = 90, deletingSpeed = 45, pauseTime = 1800) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;
    const currentWord = words[index % words.length];

    if (!isDeleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (isDeleting ? -1 : 1)),
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  return words[index % words.length]?.substring(0, subIndex) || "";
}

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
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
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
  const typedText = useTypewriter(typewriterWords, 90, 45, 1800);

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
      
      {/* Luxury Editorial Font Import */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,600;1,700;1,800&family=Plus+Jakarta+Sans:wght@700;800&display=swap"
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
            alt="KT Glow abrasives steel finishing"
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
        <div className="relative z-[2] mx-auto pt-12 w-full max-w-[1600px]">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="w-full max-w-2xl lg:max-w-3xl"
          >
            {/* Subtitle / Brand Tag */}
            <motion.div variants={fadeUp} className="mb-2.5 flex items-center gap-2.5 sm:mb-3.5 sm:gap-3">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-0.5 shrink-0 bg-[#B8862B]"
              />
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#8A6212] sm:text-xs md:text-sm">
                {content.subtitle}
              </p>
            </motion.div>

            {/* Main Heading with Typewriter Effect */}
            <h1 className="text-[30px] font-extrabold leading-[1.12] tracking-tight text-[#06182E] xs:text-4xl sm:text-5xl md:text-6xl lg:text-[68px]">
              {/* Line 1: Solid & Bold */}
              <span className="block overflow-hidden pb-1 pt-0.5">
                <motion.span variants={lineReveal} className="block font-['Plus_Jakarta_Sans',sans-serif] tracking-tight">
                  {content.title}
                </motion.span>
              </span>

              {/* Line 2: Editorial Serif Italic with Typewriter Effect & Blinking Cursor */}
              <span className="block min-h-[1.25em] pb-2 pt-0.5">
                <span className="inline-block bg-gradient-to-r from-[#9A6B12] via-[#E0B04A] to-[#9A6B12] bg-[length:200%_auto] bg-clip-text pr-1 font-['Playfair_Display',serif] italic font-semibold text-transparent text-[30px] xs:text-[36px] sm:text-[50px] md:text-[60px] lg:text-[68px]">
                  {reduce ? typewriterWords[0] : typedText}
                </span>

                {/* Blinking Cursor Bar */}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 0.75,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block align-baseline font-light text-[#B8862B] text-[28px] xs:text-[34px] sm:text-[46px] md:text-[56px] lg:text-[64px]"
                >
                  |
                </motion.span>
              </span>
            </h1>

            {/* Description Paragraph */}
            <motion.p
              variants={fadeUp}
              className="mt-3.5 max-w-2xl text-[13.5px] leading-relaxed text-[#06182E]/85 sm:mt-4 sm:text-[15.5px] sm:leading-7"
            >
              {content.description}
            </motion.p>

            {/* CTA Buttons (Both full width on mobile) */}
            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center"
            >
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to={content.link}
                  aria-label={content.button}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#06182E] px-6 py-3.5 text-xs font-bold text-white shadow-md shadow-[#06182E]/20 transition-all duration-300 hover:bg-[#0D2A4A] sm:w-auto sm:inline-flex sm:px-7 sm:text-sm"
                >
                  {content.button}
                  <ArrowRight size={16} className="text-[#E0B04A]" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-[#06182E]/30 bg-white/70 px-6 py-3.5 text-xs font-bold text-[#06182E] backdrop-blur-sm transition-all duration-300 hover:border-[#06182E] hover:bg-white sm:w-auto sm:inline-flex sm:px-7 sm:text-sm"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>

            {/* =====================================================
                4 FEATURE HIGHLIGHTS (Bade-Bade Dividers & Big Text)
            ====================================================== */}
            <motion.div
              variants={featureContainer}
              initial="hidden"
              animate="show"
              className="mt-8 border-t border-[#06182E]/12 pt-2 sm:mt-10"
            >
              <div className="divide-y divide-[#06182E]/12 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3 sm:divide-y-0">
                {heroHighlights.map(({ icon: Icon, tag, title }) => (
                  <motion.div
                    key={title}
                    variants={featureItem}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-4 py-3.5 sm:py-3"
                  >
                    {/* Circular Gold Icon Badge */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#B8862B]/50 bg-white/80 text-[#8A6212] shadow-sm backdrop-blur-sm transition-colors duration-300 group-hover:border-[#06182E] group-hover:bg-[#06182E] group-hover:text-[#E0B04A] sm:h-13 sm:w-13">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    {/* Text Details (Tag + Bold Title) */}
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#8A6212] sm:text-xs">
                        {tag}
                      </p>
                      <h3 className="mt-0.5 text-sm font-extrabold leading-snug text-[#06182E] transition-colors group-hover:text-[#8A6212] sm:text-base">
                        {title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* =====================================================
          PART 2: STATS BAR
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