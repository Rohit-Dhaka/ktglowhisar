

import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  LayoutGrid,
  SlidersHorizontal,
  Zap,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";




import Cutting1 from "../../assets/productimg/Cutting & Grinding Wheels1.png";
import Cutting2 from "../../assets/productimg/Cutting & Grinding Wheels2.png";
import Cutting3 from "../../assets/productimg/Cutting & Grinding Wheels3.png";


import Two from "../../assets/images/2.png";


import Fiber1 from "../../assets/productimg/Fiber Discs1.png";
import Fiber2 from "../../assets/productimg/Fiber Discs2.png";
import Fiber3 from "../../assets/productimg/Fiber Discs3.png";


import NonWoven1 from "../../assets/productimg/Non-Woven Polishing Wheels1.png";
import NonWoven2 from "../../assets/productimg/Non-Woven Polishing Wheels2.png";
import NonWoven3 from "../../assets/productimg/Non-Woven Polishing Wheels3.png";


import Buffing1 from "../../assets/productimg/Polishing & Buffing Wheels1.png";
import Buffing2 from "../../assets/productimg/Polishing & Buffing Wheels2.png";
import Buffing3 from "../../assets/productimg/Polishing & Buffing Wheels3.png";


import Wax1 from "../../assets/productimg/Polishing Wax1.png";
import Wax2 from "../../assets/productimg/Polishing Wax2.png";
import Wax3 from "../../assets/productimg/Polishing Wax3.png";


import Ruberroll1 from "../../assets/productimg/Ruberroll1.png";
import Ruberroll2 from "../../assets/productimg/Ruberroll2.png";
import Ruberroll3 from "../../assets/productimg/Ruberroll3.png";



export const products = [
  {
    id: "01",
    category: "cutting",
    name: "Cutting & Grinding Wheels",
    tagline: "Heavy Stock Removal",
    description:
      "High-speed abrasive wheels built for rigorous cutting and grinding work on steel.",
    path: "/products/cutting-grinding-wheels",
    image: Cutting1,
    images: [Cutting1, Cutting2, Cutting3],
    badge: "Heavy Duty",
    specs: ["Resinoid Bond", "High RPM", "Burr-Free"],
  },
  {
    id: "02",
    category: "discs",
    name: "Flap Discs",
    tagline: "Weld Blending & Prep",
    description:
      "Premium abrasive discs engineered for seamless blending, grinding, and surface prep.",
    path: "/products/flap-discs",
    image: Two,
    images: [Two, Two, Two],
    badge: "Versatile",
    specs: ["Zirconia Grain", "Smooth Blend", "All Steels"],
  },
  {
    id: "03",
    category: "discs",
    name: "Fiber Discs",
    tagline: "Fast Weld Dressing",
    description:
      "Resin-bonded abrasive fiber discs designed for high-stock removal on metal weldments.",
    path: "/products/fiber-discs",
    image: Fiber1,
    images: [Fiber1, Fiber2, Fiber3],
    badge: "High Precision",
    specs: ["Heavy Stock", "Weld Blending", "Tear Resistant"],
  },
  {
    id: "04",
    category: "polishing",
    name: "Non-Woven Polishing Wheels",
    tagline: "Uniform Satin Finish",
    description:
      "Non-woven surface conditioning wheels delivering an ultra-clean, uniform matte finish.",
    path: "/products/non-woven-polishing-wheels",
    image: NonWoven1,
    images: [NonWoven1, NonWoven2, NonWoven3],
    badge: "Satin Finish",
    specs: ["Non-Gouging", "Satin Matte", "Long Life"],
  },
  {
    id: "05",
    category: "polishing",
    name: "Polishing & Buffing Wheels",
    tagline: "Crystal Mirror Shine",
    description:
      "High-density layered buffing wheels to bring out a high-clarity, mirror steel shine.",
    path: "/products/polishing-buffing-wheels",
    image: Buffing1,
    images: [Buffing1, Buffing2, Buffing3],
    badge: "Mirror Polish",
    specs: ["High Clarity", "Cotton Ply", "Showroom Gloss"],
  },
  {
    id: "06",
    category: "polishing",
    name: "Polishing Wax",
    tagline: "Mirror Compounding",
    description:
      "Specialized compounding wax formulated for buffing wheels to achieve a smooth, bright luster.",
    path: "/products/polishing-wax",
    image: Wax1,
    images: [Wax1, Wax2, Wax3],
    badge: "High Gloss",
    specs: ["Clean Luster", "Fast Shine", "Minimal Residue"],
  },
  {
    id: "07",
    category: "polishing",
    name: "Rubber Roll",
    tagline: "Belt Grinding & Finishing",
    description:
      "Heavy-duty rubber contact rolls and expander wheels engineered for uniform belt grinding and precision finishing.",
    path: "/products/rubber-roll",
    image: Ruberroll1,
    images: [Ruberroll1, Ruberroll2, Ruberroll3],
    badge: "High Resilience",
    specs: ["Dynamic Balance", "Shore A 35-90", "Vibration-Free"],
  },
];

const categories = [
  { id: "all", label: "All Products" },
  { id: "cutting", label: "Cutting & Grinding" },
  { id: "discs", label: "Discs & Blending" },
  { id: "polishing", label: "Polishing, Wax & Rolls" },
];



const ProductCard = ({ product }) => {
  const [activeImg, setActiveImg] = useState(product.image);

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-3.5 shadow-[0_6px_20px_rgba(6,24,46,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B8862B]/60 hover:shadow-[0_16px_36px_rgba(6,24,46,0.1)]">
      
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl bg-[#F0F2F5]">
        <img
          src={activeImg}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />

        
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06182E]/50 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

        
        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-white/40 bg-white/90 px-2.5 py-0.5 text-[10.5px] font-extrabold tracking-wider text-[#06182E] shadow-sm backdrop-blur-md">
          {product.id}
        </div>

        
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-[#B8862B]/30 bg-[#06182E]/90 px-2.5 py-0.5 text-[10.5px] font-bold text-[#E0B04A] shadow-sm backdrop-blur-md">
          <Sparkles size={11} />
          {product.badge}
        </div>

        
        {product.images && product.images.length > 1 && (
          <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 rounded-full bg-[#06182E]/80 p-1 backdrop-blur-md">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveImg(img);
                }}
                className={`h-2 rounded-full transition-all ${
                  activeImg === img
                    ? "w-5 bg-[#E0B04A]"
                    : "w-2 bg-white/50 hover:bg-white"
                }`}
                aria-label={`View photo ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#718865]">
          <Zap size={12} className="text-[#B8862B]" />
          <span>{product.tagline}</span>
        </div>

        <h3 className="mt-1 text-[17px] font-bold text-[#06182E] transition-colors duration-300 group-hover:text-[#9A6B12] sm:text-[18px]">
          {product.name}
        </h3>

        <p className="mt-1.5 flex-1 text-[13px] leading-[1.65] text-[#06182E]/70">
          {product.description}
        </p>

        
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.specs?.map((spec, i) => (
            <span
              key={i}
              className="rounded-md border border-[#E5E7EB] bg-[#FAF8F5] px-2 py-0.5 text-[10.5px] font-medium text-[#06182E]/80"
            >
              {spec}
            </span>
          ))}
        </div>

        
        <div className="mt-4 flex items-center justify-between border-t border-[#06182E]/5 pt-3">
          <Link
            to={product.path}
            className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#06182E] transition-colors duration-300 group-hover:text-[#8A6212]"
          >
            Explore Details
            <ArrowRight
              size={15}
              className="text-[#B8862B] transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>

          <Link
            to={`/contact?product=${encodeURIComponent(product.name)}`}
            className="text-[11px] font-semibold text-[#8A6212] transition-colors hover:text-[#06182E]"
          >
            Quote →
          </Link>
        </div>
      </div>
    </div>
  );
};


const OurProducts = () => {
  const swiperRef = useRef(null);
  const reduce = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'carousel'

  
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="relative w-full overflow-hidden bg-[#F5F6F8] py-8 sm:py-12">
      {/* Google font */}
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
                opacity: [0.3, 0.55, 0.3],
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
      <div className="relative z-10 px-4 sm:px-8 lg:px-12">
        {/* ===================================================
            HEADER WITH DUAL VIEW TOGGLE
        =================================================== */}
        <div className="mb-6 flex flex-col gap-5 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {/* Top Subtitle with Gold Dash */}
            <div className="mb-2 flex items-center gap-3">
              <span className="h-0.5 w-9 shrink-0 bg-[#B8862B]" />
              <p className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#8A6212] sm:text-[13px]">
                Product Catalogue
              </p>
            </div>

            <h2 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#06182E] sm:text-[44px] lg:text-[52px]">
              Abrasive &amp;{" "}
              <span className="font-['Dancing_Script',cursive] text-[#718865]">
                Polishing Range
              </span>
            </h2>

            <p className="mt-2.5 max-w-xl text-[14px] leading-[1.7] text-[#06182E]/75 sm:text-[15.5px]">
              Cutting, grinding, and polishing solutions engineered by KT Glow
              for demanding fabrication and a clean, mirror-consistent steel
              finish.
            </p>
          </div>

          {/* View Toggle (Grid ⊞ vs Carousel ⇄) */}
          <div className="flex items-center gap-2 self-start rounded-full border border-[#E5E7EB] bg-white p-1 shadow-sm sm:self-end">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                viewMode === "grid"
                  ? "bg-[#06182E] text-white shadow-sm"
                  : "text-[#06182E]/60 hover:text-[#06182E]"
              }`}
            >
              <LayoutGrid size={14} />
              <span>Grid</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("carousel")}
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                viewMode === "carousel"
                  ? "bg-[#06182E] text-white shadow-sm"
                  : "text-[#06182E]/60 hover:text-[#06182E]"
              }`}
            >
              <SlidersHorizontal size={14} />
              <span>Carousel</span>
            </button>
          </div>
        </div>

        {/* ===================================================
            CATEGORY FILTER PILLS (Interactive Tab Bar)
        =================================================== */}
        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-[#06182E]/10 pb-4">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative rounded-full px-4 py-2 text-xs font-bold tracking-wide transition-all ${
                  isActive
                    ? "bg-[#06182E] text-[#E0B04A] shadow-md shadow-[#06182E]/15"
                    : "border border-[#E5E7EB] bg-white text-[#06182E]/70 hover:border-[#B8862B]/50 hover:bg-[#FAF8F5] hover:text-[#06182E]"
                }`}
              >
                <span>{cat.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeFilterPill"
                    className="absolute inset-0 rounded-full border border-[#B8862B]/40"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ===================================================
            VIEW 1: RESPONSIVE GRID VIEW (Clean & Distinct)
        =================================================== */}
        {viewMode === "grid" && (
          <motion.div
            layout
            className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch lg:grid-cols-3"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-[420px] sm:max-w-none"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* ===================================================
            VIEW 2: SWIPER CAROUSEL VIEW (With Controls)
        =================================================== */}
        {viewMode === "carousel" && (
          <div className="relative">
            {/* Swiper Next / Prev Arrows */}
            <div className="mb-4 flex justify-end gap-2">
              <button
                type="button"
                aria-label="Previous product"
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B8862B]/30 bg-white text-[#06182E] shadow-sm transition-colors hover:bg-[#06182E] hover:text-[#E0B04A]"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next product"
                onClick={() => swiperRef.current?.slideNext()}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B8862B]/30 bg-white text-[#06182E] shadow-sm transition-colors hover:bg-[#06182E] hover:text-[#E0B04A]"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <Swiper
              modules={[Autoplay, Pagination]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              loop
              speed={750}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              slidesPerView={1}
              centeredSlides={true}
              centeredSlidesBounds={false}
              slidesPerGroup={1}
              spaceBetween={0}
              pagination={{
                clickable: true,
                el: ".ourproducts-pagination",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  centeredSlides: false,
                  centeredSlidesBounds: false,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  centeredSlides: false,
                  centeredSlidesBounds: false,
                  spaceBetween: 24,
                },
              }}
              className="ourproducts-swiper !w-full !pb-2"
            >
              {filteredProducts.map((product) => (
                <SwiperSlide
                  key={product.id}
                  className="!h-auto !w-full pb-3"
                >
                  <div className="mx-auto w-[calc(100%-32px)] max-w-[420px] sm:w-full sm:max-w-none">
                    <ProductCard product={product} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination Container */}
            <div className="ourproducts-pagination mt-6 flex justify-center" />
          </div>
        )}
      </div>

      {/* Swiper Pagination Styling */}
      <style>{`
        .ourproducts-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #B8862B;
          opacity: 0.28;
          border-radius: 999px;
          margin: 0 4px !important;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ourproducts-pagination .swiper-pagination-bullet-active {
          width: 28px;
          background: linear-gradient(90deg, #9A6B12, #E0B04A);
          opacity: 1;
          box-shadow: 0 2px 8px rgba(184, 134, 43, 0.35);
        }
      `}</style>
    </section>
  );
};

export default OurProducts;
