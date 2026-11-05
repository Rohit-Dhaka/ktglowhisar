import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Factory,
  Building2,
  Settings2,
  Truck,
  Cog,
  HardHat,
  Layers3,
} from "lucide-react";
import IndustryImg from "../../assets/images/IndustryImg.png";

const industries = [
  {
    id: "01",
    title: "Construction",
    description:
      "Reliable industrial products for construction projects, infrastructure development, and building applications.",
    icon: Building2,
  },
  {
    id: "02",
    title: "Manufacturing",
    description:
      "Product solutions designed to support manufacturing operations, production systems, and industrial processes.",
    icon: Factory,
  },
  {
    id: "03",
    title: "Engineering",
    description:
      "Precision-focused products for engineering applications, technical projects, and equipment requirements.",
    icon: Settings2,
  },
  {
    id: "04",
    title: "Automotive",
    description:
      "Industrial components and product solutions for automotive production and related applications.",
    icon: Truck,
  },
  {
    id: "05",
    title: "Heavy Industries",
    description:
      "Dependable products for demanding industrial environments and heavy-duty operational requirements.",
    icon: Cog,
  },
  {
    id: "06",
    title: "Infrastructure",
    description:
      "Products supporting infrastructure projects, industrial facilities, and large-scale developments.",
    icon: HardHat,
  },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const EASE = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const headerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

/* letters blur-in one after another */
const headingContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.025 } },
};

const letter = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
};

const AnimatedText = ({ text }) =>
  text.split(" ").map((word, wi) => (
    <span key={`${word}-${wi}`} className="mr-[0.25em] inline-block whitespace-nowrap">
      {word.split("").map((ch, ci) => (
        <motion.span key={ci} variants={letter} className="inline-block">
          {ch}
        </motion.span>
      ))}
    </span>
  ));

/* number that counts up when it scrolls into view */
const CountUp = ({ to, reduce }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    if (reduce) {
      setValue(to);
      return undefined;
    }
    const controls = animate(0, to, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return <span ref={ref}>{String(value).padStart(2, "0")}</span>;
};

/* =========================================================
   SECTION
========================================================= */

const IndustryApplicationsSection = () => {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState(null);

  /* image parallax inside its frame */
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const ORBIT_RADIUS = 100;

  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] py-16 sm:py-20 lg:py-24">
      {/* =====================================================
          BACKGROUND GEARS
      ====================================================== */}
      <motion.div
        aria-hidden="true"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-24 -top-24 text-[#B8862B]/15"
      >
        <Cog size={360} strokeWidth={0.8} />
      </motion.div>
      <motion.div
        aria-hidden="true"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -left-16 bottom-24 text-[#06182E]/[0.07]"
      >
        <Cog size={260} strokeWidth={0.9} />
      </motion.div>
      <motion.div
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : { y: [0, -25, 0], scale: [1, 1.12, 1], opacity: [0.25, 0.5, 0.25] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-10 top-1/2 h-[240px] w-[240px] rounded-full bg-[#E0B04A]/25 blur-3xl"
      />

      <div className="relative px-4 sm:px-8 lg:px-12">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 max-w-3xl sm:mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#B8862B]/40 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F2B46] sm:text-sm"
          >
            <motion.span
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="flex text-[#B8862B]"
            >
              <Layers3 size={15} />
            </motion.span>
            Industry Applications
          </motion.span>

          {/* Heading — letters blur in one by one */}
          <motion.h2
            variants={headingContainer}
            className="mt-5 text-[34px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#06182E] sm:text-[44px] lg:text-[54px]"
          >
            <span className="block">
              <AnimatedText text="Supporting Industries" />
            </span>
            <span className="block text-[#B8862B]">
              <AnimatedText text="Through Reliable Products." />
            </span>
          </motion.h2>

          {/* underline draws itself */}
          <motion.div
            variants={fadeUp}
            className="relative mt-3 h-[3px] w-[110px] overflow-hidden rounded-full bg-[#06182E]/10"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.2, ease: EASE }}
              className="absolute inset-0 origin-left bg-gradient-to-r from-[#B8862B] to-[#F0CA6A]"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-sm leading-7 text-black sm:text-base sm:leading-8"
          >
            Our product range serves a wide variety of industrial
            applications. Explore the industries where our product
            solutions can support your operational requirements.
          </motion.p>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-10">
          {/* ---------------- Left: sticky image with orbit ---------------- */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative lg:sticky lg:top-24 lg:col-span-5"
          >
            <div className="relative h-[440px] overflow-hidden rounded-3xl bg-[#06182E] sm:h-[540px] lg:h-[640px]">
              <motion.img
                src={IndustryImg}
                alt="Industrial manufacturing and engineering applications"
                loading="lazy"
                style={reduce ? undefined : { y: imgY, scale: 1.15 }}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/95 via-[#06182E]/30 to-[#06182E]/10" />

              {/* Orbiting industry icons */}
              <div
                aria-hidden="true"
                className="absolute right-5 top-16 hidden h-[230px] w-[230px] sm:block lg:right-8 lg:top-20"
              >
                {/* orbit track */}
                <div className="absolute inset-[15px] rounded-full border border-dashed border-[#E0B04A]/40" />

                {/* rotating ring */}
                <motion.div
                  animate={reduce ? undefined : { rotate: 360 }}
                  transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {industries.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.id}
                        className="absolute left-1/2 top-1/2"
                        style={{
                          transform: `rotate(${i * 60}deg) translateY(-${ORBIT_RADIUS}px)`,
                        }}
                      >
                        <div style={{ transform: `rotate(${-i * 60}deg)` }}>
                          {/* counter-rotate so icons stay upright */}
                          <motion.div
                            animate={reduce ? undefined : { rotate: -360 }}
                            transition={{
                              duration: 36,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="-ml-[19px] -mt-[19px] flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#E0B04A]/60 bg-[#06182E]/80 text-[#F0CA6A] backdrop-blur-sm"
                          >
                            <Icon size={17} strokeWidth={1.8} />
                          </motion.div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>

                {/* centre */}
                <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#B8862B] to-[#F0CA6A] text-[#06182E] shadow-[0_0_30px_rgba(224,176,74,0.5)]">
                  <Factory size={24} />
                </div>
              </div>

              {/* Top Label */}
              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                <motion.span
                  animate={reduce ? undefined : { y: [0, -5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E0B04A]/50 bg-[#06182E]/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F0CA6A]"
                >
                  <Factory size={15} />
                  Industrial Applications
                </motion.span>
              </div>

              {/* Image Content */}
              <motion.div
                variants={headerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="absolute bottom-0 left-0 right-0 p-5 sm:p-8"
              >
                <motion.p
                  variants={fadeUp}
                  className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F0CA6A]"
                >
                  Across Multiple Sectors
                </motion.p>

                <motion.h3
                  variants={fadeUp}
                  className="mt-3 max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl"
                >
                  Products That Support
                  <span className="block text-slate-300">
                    Industrial Progress.
                  </span>
                </motion.h3>

                <motion.p
                  variants={fadeUp}
                  className="mt-4 max-w-md text-sm leading-6 text-slate-300"
                >
                  Explore applications across diverse industries
                  with product solutions tailored to different
                  operational needs.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="mt-6 inline-block"
                >
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-full border border-[#E0B04A]/60 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#E0B04A] hover:text-[#06182E]"
                  >
                    Discuss Your Industry
                    <motion.span
                      animate={
                        reduce ? undefined : { x: [0, 3, 0], y: [0, -3, 0] }
                      }
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex"
                    >
                      <ArrowUpRight size={17} />
                    </motion.span>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* ---------------- Right: industry list ---------------- */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              className="mb-4 flex items-center justify-between border-b border-[#DCE3EC] pb-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black">
                Industries We Serve
              </p>

              <span className="rounded-full border border-[#B8862B]/40 bg-white px-3 py-1.5 text-xs font-semibold text-[#0F2B46]">
                <CountUp to={industries.length} reduce={reduce} /> Sectors
              </span>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
              onMouseLeave={() => setHovered(null)}
              className="space-y-1"
            >
              {industries.map((industry) => {
                const Icon = industry.icon;
                const active = hovered === industry.id;

                return (
                  <motion.a
                    href="/contact"
                    key={industry.id}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      show: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.7, ease: EASE },
                      },
                    }}
                    onMouseEnter={() => setHovered(industry.id)}
                    onFocus={() => setHovered(industry.id)}
                    onBlur={() => setHovered(null)}
                    className="group relative flex items-start gap-4 rounded-2xl px-3 py-5 sm:gap-5 sm:px-4 sm:py-6"
                  >
                    {/* sliding highlight shared between rows */}
                    {active && (
                      <motion.span
                        layoutId="industry-hover"
                        transition={{ type: "spring", stiffness: 350, damping: 32 }}
                        className="absolute inset-0 rounded-2xl border border-[#E0B04A]/50 bg-white shadow-[0_14px_35px_rgba(6,24,46,0.10)]"
                      >
                        <span className="absolute bottom-4 left-0 top-4 w-[3px] rounded-full bg-gradient-to-b from-[#B8862B] to-[#F0CA6A]" />
                      </motion.span>
                    )}

                    {/* Number */}
                    <span
                      className={`relative z-10 pt-0.5 font-['Dancing_Script',cursive] text-2xl font-bold leading-none transition-colors duration-300 ${
                        active ? "text-[#B8862B]" : "text-[#94A3B8]"
                      }`}
                    >
                      {industry.id}
                    </span>

                    {/* Icon */}
                    <div
                      className={`relative  max-sm:hidden z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                        active
                          ? "rotate-[8deg] scale-110 border-[#06182E] bg-[#06182E] text-[#F0CA6A]"
                          : "border-[#DCE3EC] bg-white text-[#0F2B46]"
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    {/* Details */}
                    <div className="relative z-10 min-w-0 flex-1">
                      <h3 className="text-base font-bold text-[#06182E] sm:text-lg">
                        {industry.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-black">
                        {industry.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div
                      className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        active
                          ? "border-[#E0B04A] bg-[#E0B04A] text-[#06182E]"
                          : "border-[#DCE3EC] bg-white text-[#0F2B46]"
                      }`}
                    >
                      <ArrowUpRight
                        size={17}
                        className={`transition-transform duration-300 ${
                          active ? "-translate-y-0.5 translate-x-0.5" : ""
                        }`}
                      />
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA (animated gold border)
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative mt-10 overflow-hidden rounded-2xl bg-[#DCE3EC] p-[1.5px] sm:mt-14"
        >
          {/* travelling gold light on the border */}
          {!reduce && (
            <motion.div
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,#E0B04A_70deg,transparent_140deg)]"
            />
          )}

          <div className="relative flex flex-col gap-5 rounded-[14px] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <h3 className="text-lg font-bold text-[#06182E] sm:text-xl">
                Your Industry. Your Requirements.
              </h3>

              <p className="mt-2 text-sm leading-6 text-black">
                Contact our team to explore suitable product solutions
                for your business.
              </p>
            </div>

            <motion.div
              whileHover={{ y: -5, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="shrink-0"
            >
              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#06182E] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0F2B46] sm:w-auto"
              >
                Contact Our Team
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
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryApplicationsSection;