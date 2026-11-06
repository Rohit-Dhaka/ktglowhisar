import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
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
  Maximize2,
} from "lucide-react";

import MetalGrinding from "../../assets/images/MetalGrinding.png";
import SurfacePolishing from "../../assets/images/SurfacePolishing.png";
import EdgeDeburring from "../../assets/images/EdgeDeburring.png";
import RustScaleRemoval from "../../assets/images/Rust&ScaleRemoval.png";
import WeldSeamFinishing from "../../assets/images/WeldSeamFinishing.png";
import BuffingFinalGloss from "../../assets/images/Buffing&FinalGloss.png";

const productRanges = [
  {
    id: "01",
    title: "Polishing Wheels",
    tagline: "Surface Refinement",
    description: "Achieve smooth surfaces and a refined steel finish.",
    image: SurfacePolishing,
    icon: Disc3,
    overview:
      "Our polishing wheels are engineered to deliver a uniform, scratch-free, and refined finish on stainless steel and other industrial alloys across long production runs.",
    features: [
      "Smooth, scratch-free finishing",
      "Consistent performance over long runs",
      "Suitable for stainless steel & alloys",
      "Durable construction with minimal wear",
    ],
    applications: ["Stainless steel sheets", "Pipes & tubes", "Utensils & cookware", "Architectural steel"],
    available: "Multiple sizes, densities, and bore sizes available on request",
  },
  {
    id: "02",
    title: "Grinding Discs",
    tagline: "High-Stock Removal",
    description: "Reliable grinding solutions for steel surface preparation.",
    image: MetalGrinding,
    icon: CircleDot,
    overview:
      "Heavy-duty grinding discs designed for rapid stock removal, slag clearing, and weld seam leveling, preparing steel surfaces for subsequent finishing stages.",
    features: [
      "Fast and controlled stock removal",
      "Stable cutting without chattering",
      "Extended working lifespan",
      "High thermal stability on tough steel",
    ],
    applications: ["Weld seam blending", "Surface preparation", "Deburring", "Fabrication workshops"],
    available: "Multiple sizes (4\", 5\", 7\") and grits available on request",
  },
  {
    id: "03",
    title: "Abrasive Products",
    tagline: "Precision Metal Shaping",
    description: "Precision abrasives for professional metal finishing.",
    image: RustScaleRemoval,
    icon: Layers3,
    overview:
      "A complete range of precision abrasives for professional metal treatment, suited to both rapid surface scale removal and precision dimensional finishing.",
    features: [
      "Precise and even abrasion rate",
      "Wide range of abrasive grain grades",
      "Reliable batch-to-batch quality",
      "Resistant to grain shedding under pressure",
    ],
    applications: ["Metal fabrication", "Industrial finishing", "Surface refinishing", "Tool & die work"],
    available: "Multiple formats, sheets, and discs available on request",
  },
  {
    id: "04",
    title: "Buffing Solutions",
    tagline: "Mirror Showroom Polish",
    description: "Enhance steel surfaces with a clean, polished appearance.",
    image: BuffingFinalGloss,
    icon: Sparkles,
    overview:
      "Premium compounding buffs and finishing wheels that bring out a crystal-clear, mirror-bright luster on stainless steel and decorative metal components.",
    features: [
      "Bright, mirror-like clarity",
      "Clean finish with minimal compound residue",
      "Compatible with automatic & manual lathes",
      "High thermal resistance during buffing",
    ],
    applications: ["Mirror finishing", "Decorative steel", "Kitchenware", "Final-stage showroom gloss"],
    available: "Different cotton ply counts & compounding waxes available",
  },
  {
    id: "05",
    title: "Finishing Tools",
    tagline: "Consistency & Control",
    description: "Essential tools for smooth and consistent finishing.",
    image: WeldSeamFinishing,
    icon: Settings2,
    overview:
      "Precision finishing tools and holders that give operators ergonomic control and repeatable consistency across demanding production lines.",
    features: [
      "Consistent finishing control",
      "Ergonomic & vibration-damped",
      "Engineered for repeated industrial use",
      "Compatible with common grinder spindles",
    ],
    applications: ["Satin finishing", "Edge radiusing", "Surface blending", "Production assembly"],
    available: "Multiple arbor sizes and adapters available on request",
  },
  {
    id: "06",
    title: "Polishing Accessories",
    tagline: "Workshop Enhancements",
    description: "Supporting accessories for steel polishing applications.",
    image: EdgeDeburring,
    icon: Wrench,
    overview:
      "Supporting workshop accessories, backing pads, and compounding aids that maximize the performance and working life of your polishing wheels and discs.",
    features: [
      "Complements the full KT Glow range",
      "Durable, heat-resistant components",
      "Improves operator safety & efficiency",
      "Quick-change mount compatibility",
    ],
    applications: ["Polishing setups", "Workshop supplies", "Maintenance lines", "Production support"],
    available: "Contact our team for full technical accessory catalogue",
  },
];


const EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const lineReveal = {
  hidden: { y: "115%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};


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
      
      <div
        className="absolute inset-0 bg-[#06182E]/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        initial={{ opacity: 0, y: reduce ? 0 : 50, scale: reduce ? 1 : 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: reduce ? 0 : 30, scale: reduce ? 1 : 0.97 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl md:flex-row"
      >
        
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          className="absolute right-3.5 top-3.5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#06182E]/80 text-white transition-colors hover:border-[#E0B04A] hover:text-[#E0B04A]"
        >
          <X size={18} />
        </button>

        
        <div className="relative h-56 shrink-0 overflow-hidden bg-[#E2E8F0] sm:h-64 md:h-auto md:w-[45%]">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/70 via-transparent to-transparent" />

          <span className="absolute left-4 top-4 rounded-full border border-[#E0B04A]/50 bg-[#06182E]/80 px-3 py-1 text-xs font-bold tracking-wider text-[#F0CA6A]">
            {product.id}
          </span>

          <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#E0B04A]/60 bg-[#06182E]/80 text-[#E0B04A]">
            <Icon size={20} strokeWidth={1.8} />
          </div>
        </div>

        
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <span className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-[#8A6212]">
            Category Range
          </span>

          <h3
            id="product-modal-title"
            className="mt-1 text-2xl font-extrabold text-[#06182E] sm:text-3xl"
          >
            {product.title}
          </h3>

          <p className="mt-1 font-serif text-sm font-semibold italic text-[#B8862B]">
            {product.tagline}
          </p>

          <p className="mt-3 text-[14px] leading-relaxed text-[#06182E]/75 sm:text-[15px]">
            {product.overview}
          </p>

          
          <div className="mt-5">
            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[#06182E]">
              Key Features
            </h4>
            <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-xs text-[#06182E]/85 sm:text-sm">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#718865]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="mt-5">
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#06182E]">
              <Factory size={14} className="text-[#B8862B]" />
              Ideal Applications
            </h4>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {product.applications.map((app) => (
                <span
                  key={app}
                  className="rounded-full border border-[#E5E7EB] bg-[#F5F6F8] px-3 py-1 text-xs font-medium text-[#06182E]"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>

          
          <div className="mt-5 rounded-xl border border-[#B8862B]/30 bg-[#FFF9EA] p-3 text-xs text-[#6B4A0B]">
            <p className="font-semibold">Availability:</p>
            <p className="mt-0.5">{product.available}</p>
          </div>

          
          <div className="mt-6 flex flex-col gap-3 pt-4 border-t border-[#E5E7EB] sm:flex-row">
            <a
              href={`/contact?range=${encodeURIComponent(product.title)}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#06182E] px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#0D2A4A] hover:text-[#E0B04A]"
            >
              Enquire About This Range
              <ArrowRight size={16} />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-[#E5E7EB] px-5 py-3 text-sm font-semibold text-[#06182E] transition-colors hover:bg-[#F5F6F8]"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};



const ProductRangeSection = () => {
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalProduct, setModalProduct] = useState(null);

  const activeRange = productRanges[activeIndex];
  const ActiveIcon = activeRange.icon;

  
  useEffect(() => {
    if (!modalProduct) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setModalProduct(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [modalProduct]);

  return (
    <section
      id="product-categories"
      className="relative w-full overflow-hidden bg-[#F5F6F8] py-8 sm:py-12"
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
      />

      
      <motion.div
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.5, 0.3],
              }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 top-1/4 z-0 h-[300px] w-[300px] rounded-full bg-[#E0B04A]/15 blur-[100px] lg:h-[450px] lg:w-[450px]"
      />

      <div className="relative z-10 px-4 sm:px-8 lg:px-12">
      
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            
            <motion.div variants={fadeUp} className="mb-2 flex items-center gap-3">
              <span className="h-0.5 w-9 shrink-0 bg-[#B8862B]" />
              <p className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#8A6212] sm:text-[13px]">
                Product Categories
              </p>
            </motion.div>

            <h2 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#06182E] sm:text-[44px] lg:text-[52px]">
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineReveal} className="block">
                  Explore Our
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-2">
                <motion.span variants={lineReveal} className="inline-block">
                  <span className="font-['Dancing_Script',cursive] text-[#718865]">
                    Comprehensive Range
                  </span>
                </motion.span>
              </span>
            </h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="max-w-md text-[14px] leading-[1.7] text-[#06182E]/75 sm:text-[15.5px]"
          >
            Select any category below to inspect our engineered solutions for grinding,
            polishing, surface blending, and final high-gloss steel treatment.
          </motion.p>
        </motion.div>


        <div className="mb-6 flex gap-2 overflow-x-auto pb-2 scrollbar-none lg:hidden">
          {productRanges.map((range, index) => {
            const Icon = range.icon;
            const isActive = activeIndex === index;
            return (
              <button
                key={range.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold transition-all ${
                  isActive
                    ? "bg-[#06182E] text-white shadow-md"
                    : "border border-[#E5E7EB] bg-white text-[#06182E]/80 hover:bg-[#FAF8F5]"
                }`}
              >
                <Icon size={14} className={isActive ? "text-[#E0B04A]" : "text-[#8A6212]"} />
                <span>{range.title}</span>
              </button>
            );
          })}
        </div>

       
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          
          
          <div className="hidden flex-col gap-3 lg:col-span-5 lg:flex">
            {productRanges.map((range, index) => {
              const Icon = range.icon;
              const isActive = activeIndex === index;

              return (
                <div
                  key={range.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex cursor-pointer items-center justify-between rounded-2xl border p-4 transition-all duration-300 ${
                    isActive
                      ? "border-[#B8862B] bg-white shadow-[0_10px_28px_rgba(6,24,46,0.08)] ring-1 ring-[#B8862B]/30"
                      : "border-[#E5E7EB] bg-white/70 hover:border-[#B8862B]/40 hover:bg-white hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-[#06182E] text-[#E0B04A] shadow-md"
                          : "border border-[#E5E7EB] bg-[#FAF8F5] text-[#06182E] group-hover:text-[#B8862B]"
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.9} />
                    </div>

                    
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold tracking-wider text-[#8A6212]">
                          {range.id}
                        </span>
                        <span className="text-[11px] font-semibold text-[#718865]">
                          • {range.tagline}
                        </span>
                      </div>
                      <h3
                        className={`text-[15.5px] font-bold transition-colors ${
                          isActive ? "text-[#06182E]" : "text-[#06182E]/85 group-hover:text-[#06182E]"
                        }`}
                      >
                        {range.title}
                      </h3>
                    </div>
                  </div>

                  
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                      isActive
                        ? "bg-[#B8862B]/15 text-[#8A6212]"
                        : "text-[#06182E]/30 group-hover:text-[#06182E]"
                    }`}
                  >
                    <ArrowRight
                      size={16}
                      className={`transition-transform duration-300 ${
                        isActive ? "translate-x-0.5" : "group-hover:translate-x-1"
                      }`}
                    />
                  </div>

                  
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute -left-[2px] top-1/2 h-10 w-1.5 -translate-y-1/2 rounded-r-full bg-[#B8862B]"
                    />
                  )}
                </div>
              );
            })}
          </div>

          
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRange.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-[0_6px_20px_rgba(6,24,46,0.05)] sm:p-6"
              >
                
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#06182E]/5 shadow-inner">
                  <img
                    src={activeRange.image}
                    alt={activeRange.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />

                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/70 via-transparent to-transparent" />

                  
                  <div className="absolute left-3.5 top-3.5 rounded-full border border-white/40 bg-white/90 px-2.5 py-0.5 text-[10.5px] font-extrabold text-[#06182E] shadow-sm backdrop-blur-md">
                    RANGE {activeRange.id}
                  </div>

                  
                  <button
                    type="button"
                    onClick={() => setModalProduct(activeRange)}
                    aria-label="Enlarge view"
                    className="absolute right-3.5 top-3.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-[#06182E]/80 text-white shadow-sm backdrop-blur-md transition-colors hover:bg-white hover:text-[#06182E]"
                  >
                    <Maximize2 size={14} />
                  </button>

                  
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E0B04A]">
                        {activeRange.tagline}
                      </span>
                      <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                        {activeRange.title}
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-[#06182E]/80 text-[#E0B04A] backdrop-blur-md">
                      <ActiveIcon size={20} />
                    </div>
                  </div>
                </div>

                
                <div className="mt-5">
                  <p className="text-[14px] leading-relaxed text-[#06182E]/80 sm:text-[15px]">
                    {activeRange.overview}
                  </p>

                  
                  <div className="mt-4">
                    <h4 className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#06182E]">
                      Key Strengths & Features
                    </h4>
                    <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {activeRange.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-[12.5px] text-[#06182E]/85 sm:text-[13.5px]">
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#718865]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  
                  <div className="mt-4">
                    <h4 className="flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#06182E]">
                      <Factory size={13} className="text-[#B8862B]" />
                      Ideal Applications
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {activeRange.applications.map((app, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-[#E5E7EB] bg-[#FAF8F5] px-2.5 py-1 text-[11px] font-medium text-[#06182E]"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#E5E7EB] pt-4">
                    <div className="flex items-center gap-3">
                      <a
                        href={`/contact?range=${encodeURIComponent(activeRange.title)}`}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06182E] px-6 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#0D2A4A] hover:text-[#E0B04A] sm:text-sm"
                      >
                        Enquire About This Range
                        <ArrowRight size={15} />
                      </a>

                      <button
                        type="button"
                        onClick={() => setModalProduct(activeRange)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#B8862B]/40 bg-white px-4 py-2.5 text-xs font-semibold text-[#06182E] transition-colors hover:border-[#06182E] hover:bg-[#06182E] hover:text-white sm:text-sm"
                      >
                        <Eye size={14} className="text-[#8A6212]" />
                        Full Specs
                      </button>
                    </div>

                    
                    <div className="flex items-center gap-1 text-xs font-bold text-[#06182E]/50">
                      <span>0{activeIndex + 1}</span>
                      <span>/</span>
                      <span>0{productRanges.length}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        <div className="relative mt-10 flex flex-col gap-5 overflow-hidden rounded-2xl bg-[#06182E] p-6 sm:mt-14 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative z-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E0B04A]">
              Custom Engineering & Bulk Supply
            </p>
            <h3 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
              Looking for a Custom Grit or Size?
            </h3>
            <p className="mt-1 text-xs text-slate-300 sm:text-sm">
              We manufacture customized abrasive wheels, densities, and compounds for specialized fabrication.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E0B04A] px-6 py-3 text-xs font-bold text-[#06182E] shadow-md transition-colors hover:bg-[#F0CA6A] sm:text-sm"
            >
              Contact Our Engineers
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

      </div>

     
      <AnimatePresence>
        {modalProduct && (
          <ProductModal
            key={modalProduct.id}
            product={modalProduct}
            reduce={reduce}
            onClose={() => setModalProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductRangeSection;