import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Factory,
  Sparkles,
  Phone,
  ArrowLeft,
  ShieldCheck,
  Zap,
} from "lucide-react";

// Data import from productsData.js
// Data import from productsData.js
import { productsData } from "./productsData";

const ProductDetail = () => {
  // :id parameter match (handles both slug 'flap-discs' and numeric id '02')
  const { id, slug } = useParams();
  const param = id || slug;
  const navigate = useNavigate();
  const reduce = useReducedMotion();

  // Find product dynamically
  const product =
    productsData.find((p) => p.slug === param || p.id === param) ||
    productsData[0];

  // Active Main Image state
  const [selectedImg, setSelectedImg] = useState(product.images[0]);

  // Reset to first image and scroll to top on product change
  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedImg(product.images[0]);
  }, [param, product]);

  const otherProducts = productsData.filter((p) => p.slug !== product.slug);

  return (
    <div className="relative w-full overflow-hidden bg-[#F5F6F8] pt-24 pb-12 sm:pt-28 sm:pb-16">
      {/* Google font - Same as ProductsSection */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
      />

      {/* Ambient Gold Glow & Subtle Ring (Same as ProductsSection) */}
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
        className="pointer-events-none absolute -right-20 top-24 z-0 h-[300px] w-[300px] rounded-full bg-[#E0B04A]/15 blur-[100px] lg:h-[450px] lg:w-[450px]"
      />

      <motion.div
        aria-hidden="true"
        animate={reduce ? undefined : { rotate: [0, 360] }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-28 top-16 z-0 h-[380px] w-[380px] rounded-full border border-[#B8862B]/15"
      />

      {/* Main Container - Exact Same Padding as ProductsSection */}
      <div className="relative z-10 px-4 py-8 sm:px-8 lg:px-12">
        
        {/* ===================================================
            1. EDITORIAL HEADER (With Big Headings)
        =================================================== */}
        <section className="mb-8 sm:mb-10">
          {/* Top Series Meta Bar */}
          <div className="flex items-center justify-between border-b border-[#06182E]/10 pb-3 text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#06182E]/70 sm:text-[13px]">
            <div className="flex items-center gap-2 text-[#718865]">
              <span className="text-sm">◆</span>
              <span className="font-extrabold text-[#06182E] tracking-[0.22em]">
                INDUSTRIAL SERIES
              </span>
            </div>
            <div className="tracking-[0.22em] text-[#06182E]/60">
              KT GLOW <span className="mx-1 text-[#06182E]/30">/</span> {product.name.toUpperCase()}
            </div>
          </div>

          {/* Main Hero Heading & Summary Grid */}
          <div className="relative mt-6 grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-10">
            
            {/* Giant Faint Ghost Watermark */}
            <div className="pointer-events-none absolute -left-2 -top-6 select-none text-7xl font-black tracking-tighter text-[#06182E]/[0.035] sm:text-8xl md:text-9xl">
              STEEL
            </div>

            {/* Left Column: Badi Badi Headings */}
            <div className="relative z-10 lg:col-span-7">
              {/* Gold Dash + Subtitle */}
              <div className="mb-2 flex items-center gap-3">
                <span className="h-0.5 w-9 shrink-0 bg-[#B8862B]" />
                <p className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#8A6212] sm:text-[13px]">
                  Precision Engineering
                </p>
              </div>

              <h1 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#06182E] sm:text-[44px] lg:text-[54px]">
                Made for{" "}
                <span className="block font-['Dancing_Script',cursive] text-[#718865] sm:inline">
                  flawless steel finishing.
                </span>
              </h1>
            </div>

            {/* Right Column: Accent Border + Paragraph + Tag Pills */}
            <div className="relative z-10 lg:col-span-5">
              <div className="border-l-2 border-[#718865] pl-4 sm:pl-6">
                <p className="text-[14px] leading-[1.75] text-[#06182E]/75 sm:text-[15.5px]">
                  Thoughtfully engineered abrasives, heavy-duty resinoid bonds, and
                  dependable everyday industrial performance — manufactured for workshops
                  and plants where precision and mirror consistency matter.
                </p>

                {/* Spaced Bullet Tags */}
                <div className="mt-3.5 flex flex-wrap items-center gap-2 text-[10.5px] font-black uppercase tracking-[0.2em] text-[#06182E] sm:text-[11.5px]">
                  <span>PRECISION</span>
                  <span className="text-[#718865]">•</span>
                  <span>DURABILITY</span>
                  <span className="text-[#718865]">•</span>
                  <span>MIRROR FINISH</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ===================================================
            2. BREADCRUMB & BACK BUTTON
        =================================================== */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#06182E]/10 pt-4 sm:mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#06182E]/60 sm:text-sm">
            <Link to="/" className="hover:text-[#B8862B] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-[#B8862B] transition-colors">Products</Link>
            <ChevronRight size={14} />
            <span className="font-bold text-[#8A6212]">{product.name}</span>
          </div>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#06182E] transition-colors hover:text-[#B8862B] sm:text-sm"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>

        {/* ===================================================
            3. MAIN PRODUCT DETAILS CARD
        =================================================== */}
        <div className="grid grid-cols-1 gap-8 rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-[0_6px_20px_rgba(6,24,46,0.05)] sm:p-6 lg:grid-cols-12 lg:gap-10">
          
          {/* LEFT: 3 IMAGES GALLERY (5 Columns on Desktop) */}
          <div className="flex flex-col gap-3.5 lg:col-span-5">
            {/* Big Active Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#F0F2F5] shadow-inner">
              <img
                src={selectedImg}
                alt={product.name}
                className="h-full w-full object-cover transition-all duration-500"
              />

              {/* ID Badge */}
              <div className="absolute left-3 top-3 rounded-full border border-white/40 bg-white/90 px-2.5 py-0.5 text-[10.5px] font-extrabold tracking-wider text-[#06182E] shadow-sm backdrop-blur-md">
                {product.id}
              </div>

              {/* Specialty Badge */}
              <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-[#B8862B]/30 bg-[#06182E]/90 px-2.5 py-0.5 text-[10.5px] font-bold text-[#E0B04A] shadow-sm backdrop-blur-md">
                <Sparkles size={11} />
                {product.badge}
              </div>
            </div>

            {/* 3 Clickable Thumbnails Row */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImg(img)}
                  className={`group relative aspect-[4/3] overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                    selectedImg === img
                      ? "border-[#B8862B] shadow-md ring-2 ring-[#B8862B]/20"
                      : "border-[#E5E7EB] opacity-75 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-1 right-1 rounded bg-[#06182E]/80 px-1.5 py-0.5 text-[9px] font-bold text-white">
                    0{idx + 1}
                  </div>
                </button>
              ))}
            </div>

            {/* Trust Info Pills Below Image */}
            <div className="mt-1 grid grid-cols-2 gap-2 text-[11px] font-medium text-[#06182E]/75">
              <div className="flex items-center gap-1.5 rounded-lg border border-[#E5E7EB] bg-[#FAF8F5] p-2">
                <ShieldCheck size={14} className="text-[#718865] shrink-0" />
                <span>ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-[#E5E7EB] bg-[#FAF8F5] p-2">
                <Zap size={14} className="text-[#B8862B] shrink-0" />
                <span>Industrial Grade</span>
              </div>
            </div>
          </div>

          {/* RIGHT: PRODUCT DETAILS & SPECS (7 Columns on Desktop) */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-6 bg-[#B8862B]" />
                <span className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-[#8A6212]">
                  KT Glow Industrial Precision
                </span>
              </div>

              <h2 className="mt-2 text-[26px] font-extrabold leading-[1.15] text-[#06182E] sm:text-[32px] lg:text-[38px]">
                {product.name}
              </h2>

              <p className="mt-1 font-serif text-[14.5px] font-semibold italic text-[#B8862B] sm:text-[16px]">
                {product.description}
              </p>

              <p className="mt-3.5 text-[14px] leading-[1.7] text-[#06182E]/80 sm:text-[15px]">
                {product.overview}
              </p>

              {/* Key Features & Advantages */}
              <div className="mt-5">
                <h3 className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#06182E]">
                  Key Features & Advantages
                </h3>
                <div className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-[12.5px] text-[#06182E]/85 sm:text-[13.5px]">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#718865]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Applications */}
              <div className="mt-5">
                <h3 className="flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#06182E]">
                  <Factory size={14} className="text-[#B8862B]" />
                  Ideal Applications
                </h3>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {product.applications.map((app, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-[#E5E7EB] bg-[#FAF8F5] px-3 py-1 text-[11.5px] font-medium text-[#06182E]"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              {product.specifications && (
                <div className="mt-5">
                  <h3 className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#06182E]">
                    Technical Specifications
                  </h3>
                  <div className="mt-2.5 overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#FAF8F5]/60">
                    <table className="w-full text-left text-xs sm:text-[13px]">
                      <tbody>
                        {product.specifications.map((spec, i) => (
                          <tr key={i} className="border-b border-[#E5E7EB]/80 last:border-b-0">
                            <td className="w-1/3 py-2 px-3.5 font-semibold text-[#06182E]">
                              {spec.label}
                            </td>
                            <td className="py-2 px-3.5 text-[#06182E]/80">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Availability Note */}
              <div className="mt-5 rounded-xl border border-[#B8862B]/30 bg-[#FFF9EA] p-3 text-xs text-[#6B4A0B] sm:text-[13px]">
                <p className="font-semibold">Ordering & Customization:</p>
                <p className="mt-0.5">{product.available}</p>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="mt-6 flex flex-col gap-3 pt-5 border-t border-[#E5E7EB] sm:flex-row sm:items-center">
              <Link
                to={`/contact?product=${encodeURIComponent(product.name)}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#06182E] px-6 py-3 text-[13.5px] font-bold text-white shadow-md shadow-[#06182E]/20 transition-all hover:bg-[#0D2A4A] hover:text-[#E0B04A]"
              >
                Request Quotation
                <ArrowRight size={16} />
              </Link>

              <a
                href="tel:+919728303738"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#B8862B]/50 bg-white px-5 py-3 text-[13.5px] font-semibold text-[#06182E] transition-colors hover:border-[#06182E] hover:bg-[#06182E] hover:text-white"
              >
                <Phone size={15} />
                Call +91 97283 03738
              </a>
            </div>
          </div>
        </div>

        {/* ===================================================
            4. OTHER PRODUCTS SECTION (Matching Card Style)
        =================================================== */}
        <div className="mt-12 sm:mt-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-[#8A6212]">Explore More</p>
              <h2 className="text-[24px] font-extrabold text-[#06182E] sm:text-[30px]">Other Precision Products</h2>
            </div>
            <Link
              to="/products"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#8A6212] hover:text-[#06182E]"
            >
              View Full Range <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherProducts.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                to={`/products/${item.slug}`}
                className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-3.5 shadow-[0_6px_20px_rgba(6,24,46,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B8862B]/60 hover:shadow-[0_16px_36px_rgba(6,24,46,0.1)] focus:outline-none"
              >
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl bg-[#F0F2F5]">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute top-2.5 left-2.5 rounded-full border border-white/40 bg-white/90 px-2 py-0.5 text-[10px] font-bold text-[#06182E]">
                    {item.id}
                  </div>
                  <div className="absolute top-2.5 right-2.5 rounded-full border border-[#B8862B]/30 bg-[#06182E]/90 px-2 py-0.5 text-[10px] font-bold text-[#E0B04A]">
                    {item.badge}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-3">
                  <h3 className="text-[16.5px] font-bold text-[#06182E] transition-colors duration-300 group-hover:text-[#9A6B12]">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-[12.5px] leading-[1.6] text-[#06182E]/70">
                    {item.description}
                  </p>
                  <div className="mt-3.5 flex items-center gap-1.5 text-xs font-bold text-[#8A6212] pt-2 border-t border-[#06182E]/5">
                    View Details <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;