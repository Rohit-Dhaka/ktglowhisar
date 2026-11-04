import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import One from "../assets/images/1.png"
import Two from "../assets/images/2.png"
import Three from "../assets/images/3.png"
import Four from "../assets/images/4.png"
import Five from "../assets/images/5.png"
import Six from "../assets/images/6.png"


// Replace the image URLs with your own product photos.
const products = [
  {
    id: "01",
    name: "Cutting & Grinding Wheels",
    description: "Wheels for cutting and grinding work on steel.",
    path: "/products/cutting-grinding-wheels",
    image:One
      
  },
  {
    id: "02",
    name: "Flap Discs",
    description: "Discs for blending, grinding and surface finishing.",
    path: "/products/flap-discs",
    image: Two
      
  },
  {
    id: "03",
    name: "Fiber Discs",
    description: "Abrasive fiber discs for steel surface preparation.",
    path: "/products/fiber-discs",
    image:Three
      
  },
  {
    id: "04",
    name: "Non-Woven Polishing Wheels",
    description: "Polishing wheels for a clean, consistent finish.",
    path: "/products/non-woven-polishing-wheels",
    image: Four 
      
  },
  {
    id: "05",
    name: "Polishing & Buffing Wheels",
    description: "Buffing wheels to bring out a bright steel shine.",
    path: "/products/polishing-buffing-wheels",
    image: Five
      
  },
 {
  id: "06",
  name: "Polishing Wax",
  description:
    "Specialized polishing wax for buffing wheels to enhance shine and achieve a smooth, bright finish on steel and metal surfaces.",
  path: "/products/polishing-wax",
  image: Six
    
},
];

const ProductsSection = () => {
  const swiperRef = useRef(null);

  return (
    <section className="overflow-hidden bg-[#F5F6F8] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading + arrows */}
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-black">
              Our Products
            </p>
            <h2 className="text-2xl font-bold leading-tight text-[#06182E] sm:text-3xl lg:text-4xl">
              Abrasive &amp; Polishing Range
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-black sm:text-base">
              Cutting, grinding and polishing products by KT Glow, made for a
              clean and consistent steel finish.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous product"
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#06182E] transition-colors hover:bg-[#06182E] hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next product"
              onClick={() => swiperRef.current?.slideNext()}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#06182E] transition-colors hover:bg-[#06182E] hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Auto-playing slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop
          speed={800}
          autoplay={{
            delay: 2500,
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
          className="products-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="!h-auto">
              <Link
                to={product.path}
                className="group flex h-full flex-col overflow-hidden rounded border border-[#E5E7EB] bg-white"
              >
                <div className="relative h-56 shrink-0 overflow-hidden bg-[#F5F6F8] sm:h-64 lg:h-70">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
          
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-[#06182E] sm:text-xl">
                    {product.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-black">
                    {product.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#06182E]">
                    View Details
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="products-pagination mt-8 flex justify-center" />
      </div>

      <style>{`
        .products-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #E5E7EB;
          opacity: 1;
          border-radius: 999px;
          transition: all 0.3s ease;
        }

        .products-pagination .swiper-pagination-bullet-active {
          width: 24px;
          background: #06182E;
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;