import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Layers3,
  Disc3,
  CircleDot,
  Settings2,
  Sparkles,
  Wrench,
  X,
  CheckCircle2,
  Factory,
  Eye,
} from "lucide-react";

import A from "../../assets/images/a.png";
import B from "../../assets/images/b.png";
import C from "../../assets/images/c.png";
import D from "../../assets/images/d.png";
import E from "../../assets/images/e.png";
import F from "../../assets/images/f.png";

/* NOTE: details below (overview, features, applications, available) are
   placeholder copy. Replace with your real product information. */
const productRanges = [
  {
    id: "01",
    title: "Polishing Wheels",
    description: "Achieve smooth surfaces and a refined steel finish.",
    image: F,
    icon: Disc3,
    overview:
      "Our polishing wheels are built to deliver a smooth, uniform and refined finish on stainless steel and other metal surfaces, with consistent performance across long production runs.",
    features: [
      "Smooth, scratch-free finishing",
      "Consistent performance over long runs",
      "Suitable for stainless steel and other metals",
      "Durable construction with less wear",
    ],
    applications: ["Stainless steel sheets", "Pipes & tubes", "Utensils & cookware", "Architectural steel"],
    available: "Multiple sizes and grades available on request",
  },
  {
    id: "02",
    title: "Grinding Discs",
    description: "Reliable grinding solutions for steel surface preparation.",
    image: A,
    icon: CircleDot,
    overview:
      "Grinding discs designed for dependable stock removal and surface preparation on steel, helping you get the surface ready for the next finishing stage.",
    features: [
      "Fast and controlled stock removal",
      "Stable cutting performance",
      "Long working life",
      "Good surface consistency",
    ],
    applications: ["Weld seam blending", "Surface preparation", "Deburring", "Fabrication workshops"],
    available: "Multiple sizes and grits available on request",
  },
  {
    id: "03",
    title: "Abrasive Products",
    description: "Precision abrasives for professional metal finishing.",
    image: D,
    icon: Layers3,
    overview:
      "A range of precision abrasives for professional metal finishing, suited to both fine surface work and heavier finishing operations.",
    features: [
      "Precise and even abrasion",
      "Wide range of grades",
      "Reliable batch-to-batch quality",
      "Suitable for industrial use",
    ],
    applications: ["Metal fabrication", "Industrial finishing", "Surface refinishing", "Tool & die work"],
    available: "Multiple grades and formats available on request",
  },
  {
    id: "04",
    title: "Buffing Solutions",
    description: "Enhance steel surfaces with a clean, polished appearance.",
    image: D,
    icon: Sparkles,
    overview:
      "Buffing solutions that bring out a clean, bright and polished appearance on steel surfaces, ideal as the final step of the finishing process.",
    features: [
      "Bright, mirror-like results",
      "Easy and even application",
      "Works with common buffing setups",
      "Clean finish with minimal residue",
    ],
    applications: ["Mirror finishing", "Decorative steel", "Kitchenware", "Final-stage polishing"],
    available: "Different compounds and formats available on request",
  },
  {
    id: "05",
    title: "Finishing Tools",
    description: "Essential tools for smooth and consistent finishing.",
    image: F,
    icon: Settings2,
    overview:
      "Essential finishing tools that help you achieve smooth, consistent results across a wide range of steel finishing jobs.",
    features: [
      "Consistent finishing quality",
      "Comfortable and efficient to use",
      "Built for repeated industrial use",
      "Compatible with common equipment",
    ],
    applications: ["Satin finishing", "Edge finishing", "Surface blending", "Production lines"],
    available: "Multiple types and sizes available on request",
  },
  {
    id: "06",
    title: "Polishing Accessories",
    description: "Supporting accessories for steel polishing applications.",
    image: E,
    icon: Wrench,
    overview:
      "Supporting accessories that complete your steel polishing setup and help you get the best out of your wheels, discs and compounds.",
    features: [
      "Complements the full polishing range",
      "Practical and durable",
      "Helps improve workflow",
      "Easy to source and replace",
    ],
    applications: ["Polishing setups", "Workshop supplies", "Maintenance", "Production support"],
    available: "Contact us for the full accessory list",
  },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const EASE = [0.22, 1, 0.36, 1];

const headerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
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

const gridContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardIn = {
  hidden: { opacity: 0, y: 45, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};

/* =========================================================
   PRODUCT MODAL
========================================================= */

const ProductModal = ({ product, onClose, reduce }) => {
  const closeRef = useRef(null);
  const Icon = product.icon;

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
        aria-labelledby="product-modal-title"
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
          aria-label="Close product details"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#06182E]/80 text-white transition-colors hover:border-[#E0B04A] hover:text-[#E0B04A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0B04A]"
        >
          <X size={18} />
        </button>

        {/* Image side */}
        <div className="relative h-52 shrink-0 overflow-hidden bg-[#E2E8F0] sm:h-64 md:h-auto md:w-[42%]">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/70 via-transparent to-transparent" />

          <span className="absolute left-4 top-4 rounded-full border border-[#E0B04A]/50 bg-[#06182E]/70 px-3 py-1.5 text-xs font-semibold tracking-wider text-[#F0CA6A]">
            {product.id}
          </span>

          <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#E0B04A]/60 bg-[#06182E]/75 text-[#E0B04A]">
            <Icon size={20} strokeWidth={1.8} />
          </div>
        </div>

        {/* Details side */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B8862B]">
            Product Details
          </span>

          <h3
            id="product-modal-title"
            className="mt-2 font-serif text-2xl font-bold text-[#06182E] sm:text-3xl"
          >
            {product.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-[#334155] sm:text-base">
            {product.overview}
          </p>

          {/* Features */}
          <div className="mt-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-[#06182E]">
              Key Features
            </h4>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {product.features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: reduce ? 0 : -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                  className="flex items-start gap-2 text-sm text-[#334155]"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[#D49A2A]"
                  />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div className="mt-6">
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#06182E]">
              <Factory size={15} className="text-[#B8862B]" />
              Applications
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.applications.map((app) => (
                <span
                  key={app}
                  className="rounded-full border border-[#DCE3EC] bg-[#F5F7FA] px-3 py-1.5 text-xs font-medium text-[#0F2B46]"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Availability */}
          <p className="mt-6 rounded-xl border border-[#E0B04A]/40 bg-[#FFF9EA] px-4 py-3 text-sm text-[#6B4A0B]">
            {product.available}
          </p>

          {/* Actions */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href={`/contact?product=${encodeURIComponent(product.title)}`}
              whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D49A2A] to-[#F0C968] px-6 py-3.5 text-sm font-semibold text-[#06182E] shadow-[0_10px_30px_-8px_rgba(224,176,74,0.6)]"
            >
              Enquire About This Product
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-[#DCE3EC] px-6 py-3.5 text-sm font-semibold text-[#0F2B46] transition-colors hover:border-[#06182E] hover:bg-[#F5F7FA]"
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
   SECTION
========================================================= */

const ProductRangeSection = () => {
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
    <section
      id="product-categories"
      className="relative overflow-hidden bg-[#F5F7FA] py-14 sm:py-20 lg:py-24"
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
      />

      {/* =====================================================
          BACKGROUND GRAPHICS
      ====================================================== */}
      <motion.div
        aria-hidden="true"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full border border-dashed border-[#B8862B]/30"
      />
      <motion.div
        aria-hidden="true"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-16 -top-16 h-[250px] w-[250px] rounded-full border border-[#06182E]/10"
      />
      <motion.div
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : { y: [0, -25, 0], scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 top-40 h-[240px] w-[240px] rounded-full bg-[#E0B04A]/25 blur-3xl"
      />

      <div className="relative  px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between"
        >
          {/* Left Side - Tag & Heading */}
          <div className="w-full lg:max-w-[55%]">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-[#B8862B]/40 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F2B46]"
            >
              <motion.span
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="flex text-[#B8862B]"
              >
                <Layers3 size={15} />
              </motion.span>
              Steel Polishing Products
            </motion.span>

            {/* Main heading */}
            <h2 className="mt-5 text-[34px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#06182E] sm:text-[44px] lg:text-[56px]">
              <span className="block overflow-hidden pb-1 pt-2">
                <motion.span variants={lineReveal} className="block">
                  Products for a
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-3">
                <motion.span variants={lineReveal} className="inline-block">
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
                    className="inline-block bg-[linear-gradient(90deg,#9A6B12,#D4A031,#9A6B12)] bg-[length:200%_auto] bg-clip-text pr-2 font-['Dancing_Script',cursive] text-[1.1em] font-bold tracking-normal text-transparent"
                  >
                    Perfect Steel Finish.
                  </motion.span>
                </motion.span>
              </span>
            </h2>

            {/* underline that draws itself, with a travelling spark */}
            <motion.div
              variants={fadeUp}
              className="relative mt-1 h-[3px] w-[110px] overflow-hidden rounded-full bg-[#06182E]/10"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6, ease: EASE }}
                className="absolute inset-0 origin-left bg-gradient-to-r from-[#B8862B] to-[#F0CA6A]"
              />
              {!reduce && (
                <motion.span
                  animate={{ x: ["-100%", "400%"] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 left-0 w-6 bg-white/70 blur-[2px]"
                />
              )}
            </motion.div>
          </div>

          {/* Right Side - Description */}
          <motion.div variants={fadeUp} className="w-full lg:max-w-[42%]">
            <p className="text-sm leading-7 text-black sm:text-base sm:leading-8">
              Discover our range of polishing and abrasive solutions for
              smooth, precise, and professional steel finishing. From grinding
              and surface preparation to buffing.
            </p>
          </motion.div>
        </motion.div>

        {/* =====================================================
            PRODUCT GRID
        ====================================================== */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {productRanges.map((range, index) => {
            const Icon = range.icon;

            return (
              <motion.article
                key={range.id}
                variants={cardIn}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                aria-label={`View details of ${range.title}`}
                onClick={() => setSelected(range)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(range);
                  }
                }}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-[#DCE3EC] bg-white transition-[border-color,box-shadow] duration-300 hover:border-[#B8862B] hover:shadow-[0_18px_40px_rgba(6,24,46,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0B04A] focus-visible:ring-offset-2"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E2E8F0]">
                  <img
                    src={range.image}
                    alt={range.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/60 via-transparent to-transparent" />

                  {/* Hover "View details" hint */}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#06182E]/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#06182E]">
                      <Eye size={15} className="text-[#B8862B]" />
                      View Details
                    </span>
                  </div>

                  {/* Shine sweep on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-[900ms] ease-out group-hover:translate-x-[330%]"
                  />

                  {/* Number */}
                  <motion.span
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                    className="absolute left-4 top-4 rounded-full border border-[#E0B04A]/50 bg-[#06182E]/70 px-3 py-1.5 text-xs font-semibold tracking-wider text-[#F0CA6A]"
                  >
                    {range.id}
                  </motion.span>

                  {/* Icon */}
                  <motion.div
                    animate={reduce ? undefined : { y: [0, -4, 0] }}
                    transition={{
                      duration: 3,
                      delay: index * 0.25,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-4 right-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-[#06182E]/70 text-white transition-all duration-300 group-hover:rotate-[10deg] group-hover:scale-110 group-hover:border-[#E0B04A] group-hover:text-[#E0B04A]">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-[#06182E] sm:text-xl">
                    {range.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-black">
                    {range.description}
                  </p>

                  <span className="mt-5 inline-flex w-full items-center gap-2 border-t border-[#E2E8F0] pt-4 text-sm font-semibold text-[#0F2B46] transition-colors group-hover:text-[#9A6B12]">
                    View Details
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative mt-8 flex flex-col gap-5 overflow-hidden rounded-2xl bg-[#06182E] p-6 sm:mt-12 sm:p-8 lg:flex-row lg:items-center lg:justify-between"
        >
          {/* graphics */}
          <motion.div
            aria-hidden="true"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full border border-dashed border-[#E0B04A]/30"
          />
          <motion.div
            aria-hidden="true"
            animate={reduce ? undefined : { scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-16 left-1/3 h-40 w-40 rounded-full bg-[#E0B04A]/20 blur-3xl"
          />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E0B04A]">
              Custom Requirements
            </p>

            <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
              Looking for the Right Finish?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Connect with our team for product enquiries.
            </p>
          </div>

          <motion.div
            whileHover={{ y: -5, scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="relative shrink-0"
          >
            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#06182E] transition-colors hover:bg-[#F0CA6A] sm:w-auto"
            >
              Contact Us
              <motion.span
                animate={reduce ? undefined : { x: [0, 3, 0], y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex"
              >
                <ArrowUpRight size={18} />
              </motion.span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          PRODUCT DETAILS MODAL
      ====================================================== */}
      <AnimatePresence>
        {selected && (
          <ProductModal
            key={selected.id}
            product={selected}
            reduce={reduce}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductRangeSection;