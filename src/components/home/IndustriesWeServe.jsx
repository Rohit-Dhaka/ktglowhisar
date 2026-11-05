import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Factory,
  Building2,
  CarFront,
  Wrench,
  HardHat,
  Cog,
  ArrowUpRight,
} from "lucide-react";


import bgImage from "../../assets/images/hero1.png";



const EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

const lineReveal = {
  hidden: { y: "115%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 22, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

/* =========================================================
   INDUSTRIES DATA
========================================================= */

const industries = [
  {
    id: "01",
    icon: Factory,
    title: "Manufacturing",
    description:
      "Reliable abrasive solutions for high-volume industrial production and fabrication plants.",
  },
  {
    id: "02",
    icon: Building2,
    title: "Construction",
    description:
      "Heavy-duty grinding and weld-prep products tailored for architectural steel structures.",
  },
  {
    id: "03",
    icon: CarFront,
    title: "Automotive",
    description:
      "Precision surface conditioning and polishing compounds for automotive sheet & chassis.",
  },
  {
    id: "04",
    icon: Wrench,
    title: "Metal Fabrication",
    description:
      "Versatile grinding, deburring, and seamless blending discs for custom sheet metal fabricators.",
  },
  {
    id: "05",
    icon: HardHat,
    title: "Heavy Engineering",
    description:
      "Industrial abrasive wheels designed for extreme pressure and high-stock removal jobs.",
  },
  {
    id: "06",
    icon: Cog,
    title: "Industrial Workshops",
    description:
      "General-purpose finishing abrasives for maintenance, tool rooms, and repair facilities.",
  },
];

/* =========================================================
   INDUSTRIES WE SERVE COMPONENT
========================================================= */

const IndustriesWeServe = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#F5F6F8] py-8 sm:py-10">
      {/* Google font for cursive typography */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
      />

      {/* =====================================================
          BACKGROUND IMAGE + LUXURY FROSTED OVERLAY
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImage}
          alt="Industrial steel manufacturing background"
          className="h-full w-full object-cover object-center opacity-15"
          loading="lazy"
        />
        {/* Soft gradient wash preserving sharp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F6F8]/95 via-[#F5F6F8]/85 to-[#F5F6F8]/98 backdrop-blur-[2px]" />
      </div>

      {/* Ambient Floating Glow Orb */}
      <motion.div
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.12, 1],
                opacity: [0.3, 0.6, 0.3],
              }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 top-1/3 z-0 h-[300px] w-[300px] rounded-full bg-[#E0B04A]/20 blur-[100px] lg:h-[450px] lg:w-[450px]"
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}
      <div className="relative z-10  px-4 sm:px-8 lg:px-12">
        {/* ===================================================
            SECTION HEADER
        =================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mb-8 grid grid-cols-1 gap-5 lg:mb-10 lg:grid-cols-[1fr_0.68fr] lg:items-end"
        >
          <div>
            {/* Top Subtitle with Gold Dash */}
            <motion.div variants={fadeUp} className="mb-2 flex items-center gap-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 34 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="h-0.5 shrink-0 bg-[#B8862B]"
              />
              <p className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#8A6212] sm:text-[13px]">
                Industries We Serve
              </p>
            </motion.div>

            {/* EXPANDED MAIN HEADING WITH CURSIVE HIGHLIGHT */}
            <h2 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#06182E] sm:text-[44px] lg:text-[52px]">
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineReveal} className="block">
                  Solutions for Every
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-2">
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
                    className="inline-block bg-[linear-gradient(90deg,#9A6B12,#E0B04A,#9A6B12)] bg-[length:200%_auto] bg-clip-text pr-2 font-['Dancing_Script',cursive] font-bold tracking-normal text-transparent"
                  >
                    Industrial Sector
                  </motion.span>
                </motion.span>
              </span>
            </h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="max-w-lg text-[14px] leading-[1.75] text-[#06182E]/75 sm:text-[15.5px] lg:justify-self-end"
          >
            Our abrasive and polishing systems empower critical engineering sectors
            with high material removal rates, safety compliance, and mirror-grade finishing.
          </motion.p>
        </motion.div>

        {/* ===================================================
            INDUSTRY CARDS GRID
        =================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.id}
                variants={cardItem}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#E5E7EB] bg-white/90 p-4 shadow-[0_6px_20px_rgba(6,24,46,0.04)] backdrop-blur-md transition-all duration-300 hover:border-[#B8862B]/50 hover:bg-white hover:shadow-[0_14px_34px_rgba(6,24,46,0.09)] sm:p-5"
              >
                <div>
                  {/* Card Header: Icon Box + ID Badge */}
                  <div className="mb-4 flex items-center justify-between">
                    <motion.div
                      whileHover={{ scale: 1.12, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#06182E] text-[#E0B04A] shadow-sm transition-colors duration-300 group-hover:bg-[#0D2A4A]"
                    >
                      <Icon size={20} strokeWidth={1.75} />
                    </motion.div>

                    <span className="rounded-md border border-[#B8862B]/20 bg-[#FBF8F2] px-2 py-0.5 text-[11px] font-extrabold tracking-widest text-[#8A6212]">
                      {industry.id}
                    </span>
                  </div>

                  {/* Card Content & Hover Arrow */}
                  <div className="flex items-start justify-between gap-2.5">
                    <div>
                      <h3 className="text-[16.5px] font-bold text-[#06182E] transition-colors duration-300 group-hover:text-[#9A6B12] sm:text-[17.5px]">
                        {industry.title}
                      </h3>

                      <p className="mt-1.5 text-[12.5px] leading-[1.65] text-[#06182E]/75 sm:text-[13px]">
                        {industry.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={2}
                      className="mt-0.5 shrink-0 text-[#B8862B] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>

                {/* Animated Bottom Accent Line */}
                <div className="mt-4 h-[2px] w-8 rounded-full bg-[#E5E7EB] transition-all duration-400 group-hover:w-16 group-hover:bg-[linear-gradient(90deg,#9A6B12,#E0B04A)]" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;