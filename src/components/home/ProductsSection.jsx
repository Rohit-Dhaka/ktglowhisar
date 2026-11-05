import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  X,
  CheckCircle2,
  Factory,
  Eye,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import One from "../../assets/images/1.png";
import Two from "../../assets/images/2.png";
import Three from "../../assets/images/3.png";
import Four from "../../assets/images/4.png";
import Five from "../../assets/images/5.png";
import Six from "../../assets/images/6.png";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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

/* =========================================================
   PRODUCTS DATA

   NOTE: overview, features, applications and available below are
   placeholder copy. Replace them with your real product information.
========================================================= */

const products = [
  {
    id: "01",
    name: "Cutting & Grinding Wheels",
    description: "High-speed abrasive wheels built for rigorous cutting and grinding work on steel.",
    path: "/products/cutting-grinding-wheels",
    image: One,
    badge: "Heavy Duty",
    overview:
      "Cutting and grinding wheels designed for dependable performance on steel and other metals, from clean cutting to heavy stock removal in demanding fabrication work.",
    features: [
      "Fast and controlled cutting and grinding",
      "Stable performance during long use",
      "Suitable for steel and stainless steel",
      "Built for rigorous workshop conditions",
    ],
    applications: ["Metal cutting", "Weld preparation", "Stock removal", "Fabrication shops"],
    available: "Multiple sizes and grades available on request",
  },
  {
    id: "02",
    name: "Flap Discs",
    description: "Premium abrasive discs engineered for seamless blending, grinding, and surface prep.",
    path: "/products/flap-discs",
    image: Two,
    badge: "Versatile",
    overview:
      "Flap discs combine grinding and finishing in one tool, helping you remove material and blend surfaces smoothly in a single step.",
    features: [
      "Grinding and blending in one disc",
      "Smooth, even surface results",
      "Comfortable control during use",
      "Works on stainless steel, mild steel and more",
    ],
    applications: ["Weld blending", "Surface preparation", "Deburring", "Edge finishing"],
    available: "Multiple sizes and grits available on request",
  },
  {
    id: "03",
    name: "Fiber Discs",
    description: "Resin-bonded abrasive fiber discs designed for high-stock removal on metal weldments.",
    path: "/products/fiber-discs",
    image: Three,
    badge: "High Precision",
    overview:
      "Resin-bonded fiber discs made for efficient stock removal and surface conditioning on metal parts and weldments.",
    features: [
      "Efficient stock removal",
      "Resin-bonded for durability",
      "Good control on weld areas",
      "Suitable for a range of metals",
    ],
    applications: ["Weldment grinding", "Rust and scale removal", "Surface conditioning", "Metal fabrication"],
    available: "Multiple sizes and grits available on request",
  },
  {
    id: "04",
    name: "Non-Woven Polishing Wheels",
    description: "Non-woven surface conditioning wheels delivering an ultra-clean, uniform matte finish.",
    path: "/products/non-woven-polishing-wheels",
    image: Four,
    badge: "Satin Finish",
    overview:
      "Non-woven wheels condition and blend metal surfaces to give a clean, uniform satin or matte finish without aggressive material removal.",
    features: [
      "Uniform satin and matte finish",
      "Gentle on the base surface",
      "Clean and consistent results",
      "Good for finishing and blending",
    ],
    applications: ["Satin finishing", "Surface blending", "Light deburring", "Stainless steel finishing"],
    available: "Multiple sizes and grades available on request",
  },
  {
    id: "05",
    name: "Polishing & Buffing Wheels",
    description: "High-density layered buffing wheels to bring out a high-clarity, mirror steel shine.",
    path: "/products/polishing-buffing-wheels",
    image: Five,
    badge: "Mirror Polish",
    overview:
      "Layered polishing and buffing wheels built to bring out a bright, high-clarity shine on steel and other metals when used with the right compound.",
    features: [
      "Bright, mirror-like finish",
      "Dense layered construction",
      "Works with common buffing compounds",
      "Consistent results across batches",
    ],
    applications: ["Mirror polishing", "Final buffing", "Decorative steel", "Kitchenware & fittings"],
    available: "Multiple sizes and types available on request",
  },
  {
    id: "06",
    name: "Polishing Wax",
    description: "Specialized compounding wax formulated for buffing wheels to achieve a smooth, bright luster.",
    path: "/products/polishing-wax",
    image: Six,
    badge: "High Gloss",
    overview:
      "Compounding wax made for use with buffing wheels, helping you reach a smooth, bright luster as the final step of the polishing process.",
    features: [
      "Smooth, bright luster",
      "Easy application on buffing wheels",
      "Clean finish with minimal residue",
      "Works well as a final-stage compound",
    ],
    applications: ["Final polishing", "Mirror finishing", "Stainless steel", "Decorative items"],
    available: "Available in different formats on request",
  },
];

/* =========================================================
   PRODUCT MODAL
========================================================= */

const ProductModal = ({ product, onClose, reduce }) => {
  const closeRef = useRef(null);

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
        aria-labelledby="products-modal-title"
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
        <div className="relative h-52 shrink-0 overflow-hidden bg-[#F0F2F5] sm:h-64 md:h-auto md:w-[42%]">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/60 via-transparent to-transparent" />

          <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full border border-white/40 bg-white/90 px-2.5 py-0.5 text-[10.5px] font-extrabold tracking-wider text-[#06182E] shadow-sm">
            {product.id}
          </div>

          <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full border border-[#B8862B]/40 bg-[#06182E]/90 px-3 py-1 text-[11px] font-bold text-[#E0B04A]">
            <Sparkles size={12} />
            {product.badge}
          </div>
        </div>

        {/* Details side */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A6212]">
            Product Details
          </span>

          <h3
            id="products-modal-title"
            className="mt-2 text-2xl font-extrabold text-[#06182E] sm:text-3xl"
          >
            {product.name}
          </h3>

          <p className="mt-1 font-serif text-sm font-semibold italic text-[#B8862B] sm:text-base">
            {product.description}
          </p>

          <p className="mt-4 text-sm leading-7 text-[#06182E]/80 sm:text-base">
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
                  className="flex items-start gap-2 text-sm text-[#06182E]/80"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[#B8862B]"
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
                  className="rounded-full border border-[#E5E7EB] bg-[#F5F6F8] px-3 py-1.5 text-xs font-medium text-[#06182E]"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Availability */}
          <p className="mt-6 rounded-xl border border-[#B8862B]/40 bg-[#FFF9EA] px-4 py-3 text-sm text-[#6B4A0B]">
            {product.available}
          </p>

          {/* Actions */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <motion.a
              href={`/contact?product=${encodeURIComponent(product.name)}`}
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

            <Link
              to={product.path}
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-[#06182E] px-6 py-3.5 text-sm font-semibold text-[#06182E] transition-colors hover:bg-[#06182E] hover:text-[#E0B04A]"
            >
              View Full Page
            </Link>

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
   PRODUCTS SECTION COMPONENT
========================================================= */

const ProductsSection = () => {
  const swiperRef = useRef(null);
  const reduce = useReducedMotion();
  const [selected, setSelected] = useState(null);

  /* lock body scroll, pause autoplay + close on Escape while modal is open */
  useEffect(() => {
    if (!selected) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    swiperRef.current?.autoplay?.stop();

    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      swiperRef.current?.autoplay?.start();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    /* 👇 Background: Clean Light Gray (#F5F6F8) + Compact Padding (py-8 sm:py-10) */
    <section className="relative w-full overflow-hidden bg-[#F5F6F8] py-8 sm:py-10">
      {/* Google font for cursive typography */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
      />

      {/* Ambient Gold Glow & Subtle Ring */}
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
        className="pointer-events-none absolute -right-20 top-1/4 z-0 h-[300px] w-[300px] rounded-full bg-[#E0B04A]/20 blur-[100px] lg:h-[450px] lg:w-[450px]"
      />

      <motion.div
        aria-hidden="true"
        animate={reduce ? undefined : { rotate: [0, 360] }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-28 top-8 z-0 h-[380px] w-[380px] rounded-full border border-[#B8862B]/15"
      />

      {/* Main Container */}
      <div className="relative z-10  px-4 sm:px-8 lg:px-12">
        {/* ===================================================
            HEADER WITH EXPANDED TYPOGRAPHY
        =================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
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
                Our Products
              </p>
            </motion.div>

            {/* 👇 INCREASED FONT SIZE: text-[32px] sm:text-[44px] lg:text-[52px] */}
            <h2 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#06182E] sm:text-[44px] lg:text-[52px]">
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineReveal} className="block">
                  Abrasive &amp;{" "}
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
                    Polishing Range
                  </motion.span>
                </motion.span>
              </span>
            </h2>

            <motion.p
              variants={fadeUp}
              className="mt-3 max-w-xl text-[14.5px] leading-[1.75] text-[#06182E]/75 sm:text-[16px]"
            >
              Cutting, grinding, and polishing solutions engineered by KT Glow for
              demanding fabrication and a clean, mirror-consistent steel finish.
            </motion.p>
          </div>

          {/* Navigation Controls */}
          <motion.div variants={fadeUp} className="flex items-center gap-2.5 self-start sm:self-end">
            <motion.button
              type="button"
              aria-label="Previous product"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B8862B]/30 bg-white text-[#06182E] shadow-sm transition-colors hover:border-[#06182E] hover:bg-[#06182E] hover:text-[#E0B04A]"
            >
              <ChevronLeft size={20} />
            </motion.button>

            <motion.button
              type="button"
              aria-label="Next product"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B8862B]/30 bg-white text-[#06182E] shadow-sm transition-colors hover:border-[#06182E] hover:bg-[#06182E] hover:text-[#E0B04A]"
            >
              <ChevronRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ===================================================
            SWIPER CAROUSEL (White cards with crisp borders on light gray bg)
        =================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={1.15}
            spaceBetween={16}
            pagination={{
              clickable: true,
              el: ".products-pagination",
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="products-swiper !pb-2"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="!h-auto pb-3">
                <div
                  role="button"
                  tabIndex={0}
                  aria-haspopup="dialog"
                  aria-label={`View details of ${product.name}`}
                  onClick={() => setSelected(product)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelected(product);
                    }
                  }}
                  className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-3.5 shadow-[0_6px_20px_rgba(6,24,46,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B8862B]/60 hover:shadow-[0_16px_36px_rgba(6,24,46,0.1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0B04A] focus-visible:ring-offset-2"
                >
                  {/* Image Container with Floating ID & Badge */}
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl bg-[#F0F2F5]">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Gradient overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06182E]/40 via-transparent to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-85" />

                    {/* Hover "View details" hint */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#06182E]/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#06182E]">
                        <Eye size={15} className="text-[#B8862B]" />
                        View Details
                      </span>
                    </div>

                    {/* Left: Product Number ID */}
                    <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-white/40 bg-white/90 px-2.5 py-0.5 text-[10.5px] font-extrabold tracking-wider text-[#06182E] shadow-sm backdrop-blur-md">
                      <span>{product.id}</span>
                    </div>

                    {/* Right: Specialty Feature Tag */}
                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-[#B8862B]/30 bg-[#06182E]/90 px-2.5 py-0.5 text-[10.5px] font-bold text-[#E0B04A] shadow-sm backdrop-blur-md">
                      <Sparkles size={11} />
                      <span>{product.badge}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-3 sm:p-4">
                    <h3 className="text-[17px] font-bold text-[#06182E] transition-colors duration-300 group-hover:text-[#9A6B12] sm:text-[18.5px]">
                      {product.name}
                    </h3>

                    <p className="mt-2 flex-1 text-[13px] leading-[1.65] text-[#06182E]/70 sm:text-[13.5px]">
                      {product.description}
                    </p>

                    {/* View Details CTA */}
                    <div className="mt-4 flex items-center justify-between border-t border-[#06182E]/5 pt-3">
                      <span className="inline-flex items-center gap-2 text-[13px] font-bold text-[#06182E] transition-colors duration-300 group-hover:text-[#8A6212] sm:text-[13.5px]">
                        View Details
                        <ArrowRight
                          size={15}
                          className="text-[#B8862B] transition-transform duration-300 group-hover:translate-x-1.5"
                        />
                      </span>

                      <span className="text-[11px] font-semibold text-[#8A6212] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Explore →
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Custom Pagination Bullet Container */}
        <div className="products-pagination mt-6 flex justify-center" />
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

      {/* =====================================================
          CUSTOM SWIPER PAGINATION STYLES
      ====================================================== */}
      <style>{`
        .products-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #B8862B;
          opacity: 0.28;
          border-radius: 999px;
          margin: 0 4px !important;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .products-pagination .swiper-pagination-bullet-active {
          width: 28px;
          background: linear-gradient(90deg, #9A6B12, #E0B04A);
          opacity: 1;
          box-shadow: 0 2px 8px rgba(184, 134, 43, 0.35);
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;