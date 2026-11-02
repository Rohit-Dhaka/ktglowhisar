
import  { useRef } from "react";
import {  ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    id: "01",
    name: "Steel Pipes & Tubes",
    description:
      "High-quality steel pipes and tubes designed for industrial applications.",
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "02",
    name: "Stainless Steel",
    description:
      "Durable stainless steel products with excellent strength and corrosion resistance.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "03",
    name: "Structural Steel",
    description:
      "Reliable structural steel solutions for construction and infrastructure.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "04",
    name: "Industrial Solutions",
    description:
      "Dependable steel materials for diverse industrial requirements.",
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1000&q=85",
  },
];

const ProductsSection = () => {
  const swiperRef = useRef(null);

  return (
    <section className="overflow-hidden bg-[#F5F7FA] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">        
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#123E74]">
              Our Products
            </p>

            <h2 className="text-2xl font-bold leading-tight text-[#06182e] sm:text-3xl lg:text-4xl">
              Quality Steel Products
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              Explore our range of steel products engineered for strength,
              durability, and industrial performance.
            </p>
          </div>     
        </div>        
        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1.15}
          spaceBetween={16}
          pagination={{
            clickable: true,
            el: ".products-pagination",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="products-swiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white">                
                <div className="relative h-56 overflow-hidden sm:h-64 lg:h-72">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-[#123E74]">
                    {product.id}
                  </span>
                </div>                
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-[#06182e] sm:text-xl">
                      {product.name}
                    </h3>
                
                  </div>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {product.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>        
        <div className="products-pagination mt-8 flex justify-center" />
      </div>      
      <style>{`
        .products-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          border-radius: 999px;
          transition: all 0.3s ease;
        }

        .products-pagination .swiper-pagination-bullet-active {
          width: 24px;
          background: #123E74;
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;