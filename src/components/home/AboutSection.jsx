import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  Award,
  ShieldCheck,
  ArrowRight,
  Tag,
  Building2,
  MapPin,
  Package,
  Sparkles,
} from "lucide-react";

import ABOUT_IMAGE from "../../assets/images/all.png";

/* =========================================================
   ANIMATION VARIANTS (Identical to Hero.jsx)
========================================================= */

const EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

/* Each heading line slides up from behind an overflow-hidden mask */
const lineReveal = {
  hidden: { y: "115%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 22, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

/* =========================================================
   DATA
========================================================= */

const facts = [
  { icon: Tag, label: "Brand", value: "KT Glow" },
  { icon: Building2, label: "Firm", value: "Thalor Manufacturer" },
  { icon: MapPin, label: "Location", value: "Hisar, Haryana" },
  { icon: Package, label: "Specialty", value: "Steel Polish & Abrasives" },
];

const features = [
  {
    icon: Award,
    title: "Quality Driven",
    description: "Consistent grain sizing & compounding in every product.",
  },
  {
    icon: ShieldCheck,
    title: "Dependable Finish",
    description: "Formulated for clean, mirror-grade steel finishing.",
  },
];

/* =========================================================
   ABOUT SECTION COMPONENT
========================================================= */

const AboutSection = () => {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();

  /* Scroll parallax & spring physics */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.5,
  });

  const imageY = useTransform(smooth, [0, 1], [-25, 25]);
  const imageScale = useTransform(smooth, [0, 1], [1, 1.06]);
  const circleY = useTransform(smooth, [0, 1], [-40, 60]);
  const circleRotate = useTransform(smooth, [0, 1], [0, 90]);
  const badgeY = useTransform(smooth, [0, 1], [-15, 15]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#FBF8F2] py-8 sm:py-10"
    >
      {/* Google font for cursive typography */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
      />

      {/* Floating Gold Glow */}
      <motion.div
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : {
                y: [0, -20, 0],
                scale: [1, 1.12, 1],
                opacity: [0.35, 0.65, 0.35],
              }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 top-1/4 z-0 h-[280px] w-[280px] rounded-full bg-[#E0B04A]/25 blur-3xl md:h-[420px] md:w-[420px]"
      />

      {/* Decorative Parallax Circle */}
      <motion.div
        aria-hidden="true"
        style={{
          y: reduce ? 0 : circleY,
          rotate: reduce ? 0 : circleRotate,
        }}
        animate={reduce ? undefined : { scale: [1, 1.04, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-[100px] top-[10px] z-0 h-[260px] w-[260px] rounded-full border border-[#B8862B]/20 md:h-[440px] md:w-[440px]"
      />

      {/* Main Container */}
      <div className="relative z-10  px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          
          {/* ===================================================
              LEFT: PARALLAX IMAGE SHOWCASE (5 Columns)
          =================================================== */}
          <div className="relative lg:col-span-5">
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 border-[#B8862B]/35 sm:-bottom-4 sm:-right-4"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.85, ease: EASE }}
              className="group relative overflow-hidden rounded-2xl border border-[#B8862B]/20 bg-white/90 p-2.5 shadow-[0_16px_40px_rgba(6,24,46,0.1)] backdrop-blur-sm sm:p-3"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#06182E]/5 sm:aspect-[4/3.6]">
                <motion.div
                  style={{
                    y: reduce ? 0 : imageY,
                    scale: reduce ? 1 : imageScale,
                  }}
                  className="h-full w-full origin-center"
                >
                  <motion.img
                    src={ABOUT_IMAGE}
                    alt="KT Glow Thalor steel manufacturing and abrasive products"
                    loading="lazy"
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: EASE }}
                    className="h-full w-full object-cover object-center"
                  />
                </motion.div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06182E]/80 via-[#06182E]/10 to-transparent" />

                {/* Floating Micro-Badge */}
                <motion.div
                  style={{ y: reduce ? 0 : badgeY }}
                  animate={
                    reduce
                      ? undefined
                      : { y: [0, -4, 0] }
                  }
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full border border-white/20 bg-white/85 px-3 py-1 shadow-md backdrop-blur-md"
                >
                  <Sparkles size={13} className="text-[#9A6B12]" />
                  <span className="text-[11px] font-bold tracking-wide text-[#06182E]">
                    100% Industrial Grade
                  </span>
                </motion.div>
              </div>

              {/* Bottom Caption Card */}
              <div className="mt-2.5 rounded-xl bg-gradient-to-r from-[#06182E] to-[#0D2A4A] p-3.5 text-white sm:p-4">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E0B04A]" />
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#E0B04A] sm:text-xs">
                    Thalor Manufacturer
                  </p>
                </div>

                <h3 className="mt-1 text-sm font-bold leading-snug text-white sm:text-base">
                  Built on Quality. Driven by Precision.
                </h3>
              </div>
            </motion.div>
          </div>

          {/* ===================================================
              RIGHT: CONTENT (7 Columns)
          =================================================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7"
          >
            {/* Top Subtitle with Gold Dash */}
            <motion.div variants={fadeUp} className="mb-2.5 flex items-center gap-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 36 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="h-0.5 shrink-0 bg-[#B8862B]"
              />
              <p className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#8A6212] sm:text-[13px]">
                About KT Glow
              </p>
            </motion.div>

            {/* 👇 INCREASED HEADING SIZE: text-[32px] sm:text-[44px] lg:text-[52px] */}
            <h2 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#06182E] sm:text-[44px] lg:text-[52px]">
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineReveal} className="block">
                  Built for a
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-2">
                <motion.span variants={lineReveal} className="inline-block">
                  {/* Shimmering Cursive Font */}
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
                    Brighter Steel Finish
                  </motion.span>
                </motion.span>
              </span>
            </h2>

            {/* Paragraphs */}
            <motion.div
              variants={fadeUp}
              className="mt-3.5 space-y-2 text-[14.5px] leading-[1.75] text-[#06182E]/80 sm:text-[16px]"
            >
              <p>
                Thalor Manufacturer, based in the <strong className="font-bold text-[#06182E]">Industrial Area of Hisar,
                Haryana</strong> produces high-performance steel polishing compounds and
                abrasive products under the trusted <strong className="font-bold text-[#06182E]">KT Glow</strong> brand.
              </p>
              <p>
                Our mission is simple: craft dependable, industrial-grade
                solutions that help metal fabricators achieve a
                clean, mirror-consistent finish on steel surfaces.
              </p>
            </motion.div>

            {/* Facts Grid */}
            <motion.div
              variants={cardContainer}
              className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2"
            >
              {facts.map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  variants={cardItem}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  className="flex items-center gap-3 rounded-xl border border-[#B8862B]/20 bg-white/70 p-2.5 shadow-sm backdrop-blur-sm transition-colors hover:border-[#B8862B]/40 hover:bg-white"
                >
                  <motion.span
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#B8862B]/15 text-[#8A6212]"
                  >
                    <Icon size={16} strokeWidth={2} />
                  </motion.span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#8A6212]">
                      {label}
                    </p>
                    <p className="truncate text-xs font-bold text-[#06182E] sm:text-[13px]">
                      {value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              variants={cardContainer}
              className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {features.map(({ icon: Icon, title, description }, idx) => (
                <motion.div
                  key={title}
                  variants={cardItem}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  className="group relative flex flex-col justify-between rounded-xl border border-[#06182E]/10 bg-white p-3.5 shadow-sm transition-all duration-300 hover:border-[#B8862B]/40 hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <motion.span
                      animate={reduce ? undefined : { y: [0, -3, 0] }}
                      transition={{
                        duration: 3,
                        delay: idx * 0.25,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{ scale: 1.18, rotate: 8 }}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B8862B]/15 text-[#8A6212] transition-colors group-hover:bg-[#06182E] group-hover:text-[#E0B04A]"
                    >
                      <Icon size={18} strokeWidth={1.8} />
                    </motion.span>
                    <div>
                      <h4 className="text-xs font-bold text-[#06182E] sm:text-[14px]">
                        {title}
                      </h4>
                      <p className="mt-0.5 text-[11.5px] leading-[1.6] text-[#06182E]/75 sm:text-[12.5px]">
                        {description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeUp} className="mt-6">
              <motion.div
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="inline-block"
              >
                <Link
                  to="/about"
                  aria-label="Discover Our Company"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#06182E] px-6 py-3 text-[14px] font-bold text-white shadow-[0_10px_24px_rgba(6,24,46,0.22)] transition-all duration-300 hover:bg-[#0D2A4A] hover:shadow-[0_14px_30px_rgba(6,24,46,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06182E]"
                >
                  <span>Discover Our Company</span>
                  <motion.span
                    animate={reduce ? undefined : { x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex text-[#E0B04A]"
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;