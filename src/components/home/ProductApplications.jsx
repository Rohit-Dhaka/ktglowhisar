import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  Sparkles,
  CircleDot,
  ShieldCheck,
  Wrench,
  Settings,
  X,
  CheckCircle2,
  Eye,
  Package,
  Hammer,
} from "lucide-react";

import A from '../../assets/images/a.png'
import B from '../../assets/images/b.png'
import C from '../../assets/images/c.png'
import D from '../../assets/images/d.png'
import E from '../../assets/images/e.png'
import F from '../../assets/images/f.png'

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

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
   APPLICATIONS DATA

   NOTE: overview, benefits, recommended and suitableFor below are
   placeholder copy. Replace them with your real product information.
========================================================= */

const applications = [
  {
    id: "01",
    icon: Layers,
    title: "Metal Grinding",
    description:
      "High-efficiency abrasive grinding engineered for rapid shaping and surface preparation.",
    image: A,
    overview:
      "Grinding is the first step in most metal finishing jobs. The right abrasive removes material quickly and evenly, shapes the part, and prepares the surface for the finishing stages that follow.",
    benefits: [
      "Fast and controlled stock removal",
      "Even surface preparation",
      "Stable performance over long runs",
      "Good control on stainless steel and mild steel",
    ],
    recommended: [
      "Cutting & Grinding Wheels",
      "Flap Discs",
      "Fiber Discs",
    ],
    suitableFor: ["Stainless steel", "Mild steel", "Fabricated parts", "Castings"],
  },
  {
    id: "02",
    icon: Sparkles,
    title: "Surface Polishing",
    description:
      "Achieve ultra-smooth, uniform, and mirror-refined finishes across diverse stainless alloys.",
    image: B,
    overview:
      "Polishing refines the surface after grinding to give a smooth, uniform and attractive finish, from a clean satin look up to a mirror-like shine.",
    benefits: [
      "Smooth and uniform surface finish",
      "Works for satin and mirror finishes",
      "Reduces visible scratch marks",
      "Consistent results across batches",
    ],
    recommended: [
      "Non-Woven Polishing Wheels",
      "Polishing & Buffing Wheels",
    ],
    suitableFor: ["Stainless steel sheets", "Pipes & tubes", "Utensils", "Architectural steel"],
  },
  {
    id: "03",
    icon: CircleDot,
    title: "Edge Deburring",
    description:
      "Cleanly eliminate cut edges, thermal slag, and sharp micro-burrs for safer fabrication.",
    image: C,
    overview:
      "After cutting or machining, sharp edges and burrs need to be removed for safe handling and better fit. Deburring leaves clean, safe and consistent edges.",
    benefits: [
      "Removes sharp edges and burrs",
      "Safer handling of finished parts",
      "Clean, consistent edge quality",
      "Prepares parts for coating or polishing",
    ],
    recommended: [
      "Flap Discs",
      "Non-Woven Polishing Wheels",
    ],
    suitableFor: ["Laser-cut parts", "Sheet metal", "Machined components", "Fabrication shops"],
  },
  {
    id: "04",
    icon: ShieldCheck,
    title: "Rust & Scale Removal",
    description:
      "Thoroughly strip oxide scales, deep oxidation, and mill impurities without gouging base steel.",
    image: D,
    overview:
      "Rust, oxide scale and heat marks must be cleaned before welding, coating or polishing. The right abrasive removes them while protecting the base metal underneath.",
    benefits: [
      "Removes rust, scale and oxidation",
      "Helps protect the base metal",
      "Prepares surfaces for welding or coating",
      "Efficient on large surface areas",
    ],
    recommended: [
      "Fiber Discs",
      "Flap Discs",
    ],
    suitableFor: ["Structural steel", "Welded assemblies", "Plates & sheets", "Maintenance work"],
  },
  {
    id: "05",
    icon: Wrench,
    title: "Weld Seam Finishing",
    description:
      "Blend and level welded seams cleanly to achieve consistent structural aesthetics.",
    image: E,
    overview:
      "Weld seams are blended into the surrounding metal so the joint looks clean and uniform and the part is ready for polishing or finishing.",
    benefits: [
      "Blends welds smoothly into the surface",
      "Clean and uniform appearance",
      "Ready for further finishing",
      "Good control on visible joints",
    ],
    recommended: [
      "Flap Discs",
      "Fiber Discs",
      "Cutting & Grinding Wheels",
    ],
    suitableFor: ["Stainless steel fabrication", "Pipes & tanks", "Railings & frames", "Kitchen equipment"],
  },
  {
    id: "06",
    icon: Settings,
    title: "Buffing & Final Gloss",
    description:
      "Premium compounding buffs that bring metal components to an immaculate showroom shine.",
    image: F,
    overview:
      "Buffing is the final step that brings out a bright, glossy finish. With the right wheel and compound it gives metal parts a clean, showroom-quality look.",
    benefits: [
      "Bright, high-gloss final finish",
      "Easy to use with common buffing setups",
      "Clean look with minimal residue",
      "Ideal as the last finishing stage",
    ],
    recommended: [
      "Polishing & Buffing Wheels",
    ],
    suitableFor: ["Decorative steel", "Kitchenware", "Fittings & handles", "Showpiece items"],
  },
];

/* =========================================================
   APPLICATION MODAL
========================================================= */

const ApplicationModal = ({ application, onClose, reduce }) => {
  const closeRef = useRef(null);
  const Icon = application.icon;

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#06182E]/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="application-modal-title"
        initial={{ opacity: 0, y: reduce ? 0 : 60, scale: reduce ? 1 : 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: reduce ? 0 : 40, scale: reduce ? 1 : 0.97 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-[0_30px_80px_rgba(6,24,46,0.45)] sm:rounded-3xl md:flex-row"
      >
        {/* Close button */}
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close application details"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#06182E]/80 text-white transition-colors hover:border-[#E0B04A] hover:text-[#E0B04A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0B04A]"
        >
          <X size={18} />
        </button>

        {/* Image side */}
        <div className="relative h-52 shrink-0 overflow-hidden bg-[#E2E8F0] sm:h-64 md:h-auto md:w-[42%]">
          <img
            src={application.image}
            alt={application.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/70 via-transparent to-transparent" />

          <span className="absolute left-4 top-4 rounded-md border border-white/20 bg-[#06182E]/85 px-2.5 py-1 text-[11px] font-extrabold tracking-widest text-[#E0B04A]">
            {application.id}
          </span>

          <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#E0B04A]/60 bg-[#06182E]/75 text-[#E0B04A]">
            <Icon size={20} strokeWidth={1.8} />
          </div>
        </div>

        {/* Details side */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A6212]">
            Application Details
          </span>

          <h3
            id="application-modal-title"
            className="mt-2 text-2xl font-extrabold text-[#06182E] sm:text-3xl"
          >
            {application.title}
          </h3>

          <p className="mt-1 font-serif text-sm font-semibold italic text-[#B8862B] sm:text-base">
            {application.description}
          </p>

          <p className="mt-4 text-sm leading-7 text-[#06182E]/80 sm:text-base">
            {application.overview}
          </p>

          {/* Benefits */}
          <div className="mt-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-[#06182E]">
              Key Benefits
            </h4>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {application.benefits.map((benefit, i) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: reduce ? 0 : -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                  className="flex items-start gap-2 text-sm text-[#06182E]/80"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[#B8862B]"
                  />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Recommended products */}
          <div className="mt-6">
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#06182E]">
              <Package size={15} className="text-[#B8862B]" />
              Recommended Products
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {application.recommended.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#B8862B]/40 bg-[#FFF9EA] px-3 py-1.5 text-xs font-semibold text-[#6B4A0B]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Suitable for */}
          <div className="mt-6">
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#06182E]">
              <Hammer size={15} className="text-[#B8862B]" />
              Suitable For
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {application.suitableFor.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#E5E7EB] bg-[#F5F6F8] px-3 py-1.5 text-xs font-medium text-[#06182E]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href={`/contact?application=${encodeURIComponent(application.title)}`}
              whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D49A2A] to-[#F0C968] px-6 py-3.5 text-sm font-semibold text-[#06182E] shadow-[0_10px_30px_-8px_rgba(224,176,74,0.6)]"
            >
              Enquire for This Application
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-[#E5E7EB] px-6 py-3.5 text-sm font-semibold text-[#06182E] transition-colors hover:border-[#06182E] hover:bg-[#F5F6F8]"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* =========================================================
   PRODUCT APPLICATIONS COMPONENT
========================================================= */

const ProductApplications = () => {
  const reduce = useReducedMotion();
  const [selected, setSelected] = useState(null);

  /* lock body scroll + close on Escape while modal is open */
  useEffect(() => {
    if (!selected) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <section className="relative w-full overflow-hidden bg-[#F5F6F8] py-8 sm:py-10">
      {/* Google font for cursive typography */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
      />

      {/* Ambient Floating Glow & Orbital Ring */}
      <motion.div
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.6, 0.3],
              }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 top-1/4 z-0 h-[280px] w-[280px] rounded-full bg-[#E0B04A]/20 blur-[90px] lg:h-[420px] lg:w-[420px]"
      />

      <motion.div
        aria-hidden="true"
        animate={reduce ? undefined : { rotate: [0, 360] }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -left-28 top-6 z-0 h-[360px] w-[360px] rounded-full border border-[#B8862B]/15"
      />

      {/* Main Container */}
      <div className="relative z-10  px-5 sm:px-8 lg:px-12">
        {/* ===================================================
            SECTION HEADER
        =================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
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
                Product Applications
              </p>
            </motion.div>

            {/* EXPANDED HEADING WITH CURSIVE ACCENT */}
            <h2 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#06182E] sm:text-[44px] lg:text-[52px]">
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineReveal} className="block">
                  Designed for
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
                    Industrial Performance
                  </motion.span>
                </motion.span>
              </span>
            </h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="max-w-md text-[14px] leading-[1.7] text-[#06182E]/75 sm:text-[15.5px]"
          >
            Explore the specialized versatility of KT Glow abrasives across
            precision cutting, structural blending, and final high-gloss metal polishing.
          </motion.p>
        </motion.div>

        {/* ===================================================
            APPLICATIONS GRID (6 Cards)
        =================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {applications.map((application) => {
            const Icon = application.icon;

            return (
              <motion.div
                key={application.id}
                variants={cardItem}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                aria-label={`View details of ${application.title}`}
                onClick={() => setSelected(application)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(application);
                  }
                }}
                className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_6px_20px_rgba(6,24,46,0.04)] transition-all duration-300 hover:border-[#B8862B]/60 hover:shadow-[0_16px_36px_rgba(6,24,46,0.1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0B04A] focus-visible:ring-offset-2"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-[#06182E]/5">
                  <img
                    src={application.image}
                    alt={application.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06182E]/55 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

                  {/* Hover "View details" hint */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#06182E]/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#06182E]">
                      <Eye size={15} className="text-[#B8862B]" />
                      View Details
                    </span>
                  </div>

                  {/* Top-Left: Frosted Icon Badge */}
                  <div className="absolute left-3.5 top-3.5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/30 bg-white/90 text-[#06182E] shadow-sm backdrop-blur-md transition-colors duration-300 group-hover:bg-[#06182E] group-hover:text-[#E0B04A]">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>

                  {/* Top-Right: Number ID Tag */}
                  <div className="absolute right-3.5 top-3.5 rounded-md border border-white/20 bg-[#06182E]/85 px-2.5 py-0.5 text-[11px] font-extrabold tracking-widest text-[#E0B04A] shadow-sm backdrop-blur-md">
                    {application.id}
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-[16.5px] font-bold text-[#06182E] transition-colors duration-300 group-hover:text-[#9A6B12] sm:text-[18px]">
                        {application.title}
                      </h3>

                      <ArrowUpRight
                        size={18}
                        strokeWidth={2}
                        className="shrink-0 text-[#B8862B] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>

                    <p className="mt-2 text-[12.5px] leading-[1.65] text-[#06182E]/75 sm:text-[13.5px]">
                      {application.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="mt-4 h-[2px] w-8 rounded-full bg-[#E5E7EB] transition-all duration-300 group-hover:w-14 group-hover:bg-[linear-gradient(90deg,#9A6B12,#E0B04A)]" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ===================================================
          APPLICATION DETAILS MODAL
      =================================================== */}
      <AnimatePresence>
        {selected && (
          <ApplicationModal
            key={selected.id}
            application={selected}
            reduce={reduce}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductApplications;