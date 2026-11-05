import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

/* =========================================================
   PRODUCT IMAGES IMPORTS
========================================================= */

// 1. Cutting & Grinding Wheels
import Cutting1 from "../../assets/productimg/Cutting & Grinding Wheels1.png";
import Cutting2 from "../../assets/productimg/Cutting & Grinding Wheels2.png";
import Cutting3 from "../../assets/productimg/Cutting & Grinding Wheels3.png";

// 2. Flap Discs
import Two from "../../assets/images/2.png";

// 3. Fiber Discs
import Fiber1 from "../../assets/productimg/Fiber Discs1.png";
import Fiber2 from "../../assets/productimg/Fiber Discs2.png";
import Fiber3 from "../../assets/productimg/Fiber Discs3.png";

// 4. Non-Woven Polishing Wheels
import NonWoven1 from "../../assets/productimg/Non-Woven Polishing Wheels1.png";
import NonWoven2 from "../../assets/productimg/Non-Woven Polishing Wheels2.png";
import NonWoven3 from "../../assets/productimg/Non-Woven Polishing Wheels3.png";

// 5. Polishing & Buffing Wheels
import Buffing1 from "../../assets/productimg/Polishing & Buffing Wheels1.png";
import Buffing2 from "../../assets/productimg/Polishing & Buffing Wheels2.png";
import Buffing3 from "../../assets/productimg/Polishing & Buffing Wheels3.png";

// 6. Polishing Wax
import Wax1 from "../../assets/productimg/Polishing Wax1.png";
import Wax2 from "../../assets/productimg/Polishing Wax2.png";
import Wax3 from "../../assets/productimg/Polishing Wax3.png";

// 7. Rubber Roll
import Ruberroll1 from "../../assets/productimg/Ruberroll1.png";
import Ruberroll2 from "../../assets/productimg/Ruberroll2.png";
import Ruberroll3 from "../../assets/productimg/Ruberroll3.png";

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
========================================================= */

export const products = [
  {
    id: "01",
    name: "Cutting & Grinding Wheels",
    description:
      "High-speed abrasive wheels built for rigorous cutting and grinding work on steel.",
    path: "/products/cutting-grinding-wheels",
    image: Cutting1,
    images: [Cutting1, Cutting2, Cutting3],
    badge: "Heavy Duty",
  },
  {
    id: "02",
    name: "Flap Discs",
    description:
      "Premium abrasive discs engineered for seamless blending, grinding, and surface prep.",
    path: "/products/flap-discs",
    image: Two,
    images: [Two, Two, Two],
    badge: "Versatile",
  },
  {
    id: "03",
    name: "Fiber Discs",
    description:
      "Resin-bonded abrasive fiber discs designed for high-stock removal on metal weldments.",
    path: "/products/fiber-discs",
    image: Fiber1,
    images: [Fiber1, Fiber2, Fiber3],
    badge: "High Precision",
  },
  {
    id: "04",
    name: "Non-Woven Polishing Wheels",
    description:
      "Non-woven surface conditioning wheels delivering an ultra-clean, uniform matte finish.",
    path: "/products/non-woven-polishing-wheels",
    image: NonWoven1,
    images: [NonWoven1, NonWoven2, NonWoven3],
    badge: "Satin Finish",
  },
  {
    id: "05",
    name: "Polishing & Buffing Wheels",
    description:
      "High-density layered buffing wheels to bring out a high-clarity, mirror steel shine.",
    path: "/products/polishing-buffing-wheels",
    image: Buffing1,
    images: [Buffing1, Buffing2, Buffing3],
    badge: "Mirror Polish",
  },
  {
    id: "06",
    name: "Polishing Wax",
    description:
      "Specialized compounding wax formulated for buffing wheels to achieve a smooth, bright luster.",
    path: "/products/polishing-wax",
    image: Wax1,
    images: [Wax1, Wax2, Wax3],
    badge: "High Gloss",
  },
  {
    id: "07",
    name: "Rubber Roll",
    description:
      "Heavy-duty rubber contact rolls and expander wheels engineered for uniform belt grinding and finishing.",
    path: "/products/rubber-roll",
    image: Ruberroll1,
    images: [Ruberroll1, Ruberroll2, Ruberroll3],
    badge: "High Resilience",
  },
];

/* =========================================================
   PRODUCTS SECTION COMPONENT
========================================================= */

const ProductsSection = () => {
  const swiperRef = useRef(null);
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#F5F6F8] py-8 sm:py-10">
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
      <div className="relative z-10 px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="mb-2.5 flex items-center gap-3"
            >
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
              Cutting, grinding, and polishing solutions engineered by KT Glow
              for demanding fabrication and a clean, mirror-consistent steel
              finish.
            </motion.p>
          </div>

          {/* Navigation Controls */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2.5 self-start sm:self-end"
          >
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

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="w-full"
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
            slidesPerView="auto"
            centeredSlides={true}
            centeredSlidesBounds={false}
            slidesPerGroup={1}
            spaceBetween={16}
            pagination={{
              clickable: true,
              el: ".products-pagination",
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
            className="products-swiper !w-full !pb-2"
          >
            {products.map((product) => (
              <SwiperSlide
                key={product.id}
                className="!h-auto !w-[calc(100%_-_32px)] pb-3 sm:!w-auto"
              >
                <Link
                  to={product.path}
                  aria-label={`View details of ${product.name}`}
                  className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-3.5 shadow-[0_6px_20px_rgba(6,24,46,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B8862B]/60 hover:shadow-[0_16px_36px_rgba(6,24,46,0.1)] focus:outline-none"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl bg-[#F0F2F5]">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06182E]/40 via-transparent to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-85" />

                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#06182E]/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Product Number */}
                    <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-white/40 bg-white/90 px-2.5 py-0.5 text-[10.5px] font-extrabold tracking-wider text-[#06182E] shadow-sm backdrop-blur-md">
                      <span>{product.id}</span>
                    </div>

                    {/* Specialty Badge */}
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
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Custom Pagination */}
        <div className="products-pagination mt-6 flex justify-center" />
      </div>

      {/* Swiper Pagination Styles */}
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
