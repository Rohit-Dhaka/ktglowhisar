import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Package,  
  Cog,
  Disc3,
  Sparkles,
} from "lucide-react";

import EngineeredImg from "../../assets/images/EngineeredImg.png";
import FlapDiscs from "../../assets/images/FlapDiscs.png";
import BuffingWheels from "../../assets/images/BuffingWheels.png";

const featuredProducts = [
  {
    id: "01",
    name: "Abrasive Grinding & Cutting Discs",
    category: "Metal Grinding Solutions",
    description:
      "High-performance abrasive discs designed for steel cutting, grinding, weld removal, and precise metal surface preparation.",
    image: EngineeredImg,
    icon: Disc3,
    featured: true,
  },
  {
    id: "02",
    name: "Flap Discs & Surface Conditioning Wheels",
    category: "Steel Surface Finishing",
    description:
      "Reliable abrasive finishing products for removing surface imperfections, blending welds, and achieving smooth, consistent steel finishes.",
    image: FlapDiscs,

    icon: Cog,
  },
  {
    id: "03",
    name: "Buffing Wheels & Polishing Wax",
    category: "Metal Polishing Solutions",
    description:
      "Professional buffing wheels, polishing compounds, and steel polishing wax developed to enhance surface smoothness and achieve a refined metallic shine.",
    image: BuffingWheels,

    icon: Sparkles,
  },
];



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


const lineReveal = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
  },
};

const mainIn = {
  hidden: { opacity: 0, x: -60, scale: 0.97 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

const sideContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.15 },
  },
};

const sideIn = {
  hidden: { opacity: 0, x: 60, scale: 0.97 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: EASE },
  },
};


const Shine = () => (
  <span
    aria-hidden="true"
    className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-[900ms] ease-out group-hover:translate-x-[330%]"
  />
);

const FeaturedProductsSection = () => {
  const reduce = useReducedMotion();

  const mainProduct = featuredProducts[0];
  const otherProducts = featuredProducts.slice(1);

  const MainIcon = mainProduct.icon;

  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
      />

  
      <motion.div
        aria-hidden="true"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -left-32 -top-32 h-[380px] w-[380px] rounded-full border border-dashed border-[#B8862B]/30"
      />
      <motion.div
        aria-hidden="true"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -left-16 -top-16 h-[250px] w-[250px] rounded-full border border-[#06182E]/10"
      />
      <motion.div
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : { y: [0, -25, 0], scale: [1, 1.12, 1], opacity: [0.3, 0.55, 0.3] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 top-48 h-[240px] w-[240px] rounded-full bg-[#E0B04A]/25 blur-3xl"
      />

      <div className="relative  px-4 sm:px-8 lg:px-12">
     
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between"
        >
          
          <div className="w-full lg:max-w-[50%]">
            
           
           

            
            <h2 className="mt-5 text-[34px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#06182E] sm:text-[44px] lg:text-[56px]">
              <span className="block overflow-hidden pb-1 pt-2">
                <motion.span variants={lineReveal} className="block">
                  Advanced Steel
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-3">
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
                    className="inline-block bg-[linear-gradient(90deg,#9A6B12,#D4A031,#9A6B12)] bg-[length:200%_auto] bg-clip-text pr-2 font-['Dancing_Script',cursive] text-[1.1em] font-bold tracking-normal text-transparent"
                  >
                    Polishing Solutions.
                  </motion.span>
                </motion.span>
              </span>
            </h2>

            
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

          
          <motion.div variants={fadeUp} className="w-full lg:max-w-[45%]">
            <p className="text-sm leading-7 text-black sm:text-base sm:leading-8">
              Explore our comprehensive range of abrasive products, polishing
              wheels, and finishing compounds designed for high-quality steel
              finishing. From grinding and surface preparation to buffing and
              precision polishing.
            </p>
          </motion.div>
        </motion.div>

    
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          
          <motion.article
            variants={mainIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-3xl border border-[#DCE3EC] bg-[#F5F7FA] transition-[border-color,box-shadow] duration-300 hover:border-[#B8862B] hover:shadow-[0_20px_45px_rgba(6,24,46,0.12)] lg:col-span-7"
          >
            
            <div className="relative aspect-[4/3] overflow-hidden bg-[#E2E8F0] sm:aspect-[16/10]">
              <img
                src={mainProduct.image}
                alt={mainProduct.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/80 via-transparent to-transparent" />

              <Shine />

          
              <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                <motion.span
                  animate={reduce ? undefined : { y: [0, -5, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E0B04A]/50 bg-[#06182E]/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F0CA6A]"
                >
                  <Package size={15} />
                  Featured
                </motion.span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F0CA6A]"
                >
                  {mainProduct.category}
                </motion.p>

                <motion.h3
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
                  className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
                >
                  {mainProduct.name}
                </motion.h3>
              </div>
            </div>

       
            <div className="p-5 sm:p-7">
              <p className="max-w-xl text-sm leading-7 text-black sm:text-base">
                {mainProduct.description}
              </p>

              <div className="mt-6 flex flex-col gap-4 border-t border-[#DCE3EC] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={reduce ? undefined : { y: [0, -4, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#B8862B] shadow-sm"
                  >
                    <MainIcon size={21} />
                  </motion.div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                      Product Category
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#06182E]">
                      {mainProduct.category}
                    </p>
                  </div>
                </div>

                <motion.div
                  whileHover={{ y: -4, scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <a
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#06182E] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0F2B46] sm:w-auto"
                  >
                    Enquire Now
                    <motion.span
                      animate={
                        reduce ? undefined : { x: [0, 3, 0], y: [0, -3, 0] }
                      }
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex text-[#E0B04A]"
                    >
                      <ArrowUpRight size={17} />
                    </motion.span>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.article>

          
          <motion.div
            variants={sideContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col gap-5 lg:col-span-5"
          >
            {otherProducts.map((product, index) => {
              const Icon = product.icon;

              return (
                <motion.article
                  key={product.id}
                  variants={sideIn}
                  whileHover={{ y: -6 }}
                  className="group grid flex-1 grid-cols-1 overflow-hidden rounded-3xl border border-[#DCE3EC] bg-[#F5F7FA] transition-[border-color,box-shadow] duration-300 hover:border-[#B8862B] hover:shadow-[0_20px_45px_rgba(6,24,46,0.12)] sm:grid-cols-[42%_1fr]"
                >
                  
                  <div className="relative min-h-[200px] overflow-hidden bg-[#E2E8F0] sm:min-h-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/60 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[#06182E]/10" />

                    <Shine />

                    <motion.span
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                      className="absolute left-4 top-4 rounded-full border border-[#E0B04A]/50 bg-[#06182E]/70 px-3 py-1.5 text-xs font-semibold text-[#F0CA6A]"
                    >
                      {product.id}
                    </motion.span>
                  </div>

                  
                  <div className="flex flex-col justify-between p-5 sm:p-6">
                    <div>
                      <motion.div
                        animate={reduce ? undefined : { y: [0, -4, 0] }}
                        transition={{
                          duration: 3,
                          delay: index * 0.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-fit"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#B8862B] shadow-sm transition-transform duration-300 group-hover:rotate-[10deg] group-hover:scale-110">
                          <Icon size={20} />
                        </div>
                      </motion.div>

                      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                        {product.category}
                      </p>

                      <h3 className="mt-2 text-xl font-bold leading-tight text-[#06182E]">
                        {product.name}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-black">
                        {product.description}
                      </p>
                    </div>

                    <a
                      href="/contact"
                      className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#0F2B46] transition-colors hover:text-[#9A6B12]"
                    >
                      Product Enquiry
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

      
      </div>
    </section>
  );
};

export default FeaturedProductsSection;