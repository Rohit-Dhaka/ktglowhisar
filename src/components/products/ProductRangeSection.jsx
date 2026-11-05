// import { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
// import {
//   ArrowUpRight,
//   ArrowRight,
//   Layers3,
//   Disc3,
//   CircleDot,
//   Settings2,
//   Sparkles,
//   Wrench,
//   X,
//   CheckCircle2,
//   Factory,
//   Eye,
// } from "lucide-react";

// import A from "../../assets/images/a.png";
// // import B from "../../assets/images/b.png";
// // import C from "../../assets/images/c.png";
// import D from "../../assets/images/d.png";
// import E from "../../assets/images/e.png";
// import F from "../../assets/images/f.png";

// /* NOTE: details below (overview, features, applications, available) are
//    placeholder copy. Replace with your real product information. */
// const productRanges = [
//   {
//     id: "01",
//     title: "Polishing Wheels",
//     description: "Achieve smooth surfaces and a refined steel finish.",
//     image: F,
//     icon: Disc3,
//     overview:
//       "Our polishing wheels are built to deliver a smooth, uniform and refined finish on stainless steel and other metal surfaces, with consistent performance across long production runs.",
//     features: [
//       "Smooth, scratch-free finishing",
//       "Consistent performance over long runs",
//       "Suitable for stainless steel and other metals",
//       "Durable construction with less wear",
//     ],
//     applications: ["Stainless steel sheets", "Pipes & tubes", "Utensils & cookware", "Architectural steel"],
//     available: "Multiple sizes and grades available on request",
//   },
//   {
//     id: "02",
//     title: "Grinding Discs",
//     description: "Reliable grinding solutions for steel surface preparation.",
//     image: A,
//     icon: CircleDot,
//     overview:
//       "Grinding discs designed for dependable stock removal and surface preparation on steel, helping you get the surface ready for the next finishing stage.",
//     features: [
//       "Fast and controlled stock removal",
//       "Stable cutting performance",
//       "Long working life",
//       "Good surface consistency",
//     ],
//     applications: ["Weld seam blending", "Surface preparation", "Deburring", "Fabrication workshops"],
//     available: "Multiple sizes and grits available on request",
//   },
//   {
//     id: "03",
//     title: "Abrasive Products",
//     description: "Precision abrasives for professional metal finishing.",
//     image: D,
//     icon: Layers3,
//     overview:
//       "A range of precision abrasives for professional metal finishing, suited to both fine surface work and heavier finishing operations.",
//     features: [
//       "Precise and even abrasion",
//       "Wide range of grades",
//       "Reliable batch-to-batch quality",
//       "Suitable for industrial use",
//     ],
//     applications: ["Metal fabrication", "Industrial finishing", "Surface refinishing", "Tool & die work"],
//     available: "Multiple grades and formats available on request",
//   },
//   {
//     id: "04",
//     title: "Buffing Solutions",
//     description: "Enhance steel surfaces with a clean, polished appearance.",
//     image: D,
//     icon: Sparkles,
//     overview:
//       "Buffing solutions that bring out a clean, bright and polished appearance on steel surfaces, ideal as the final step of the finishing process.",
//     features: [
//       "Bright, mirror-like results",
//       "Easy and even application",
//       "Works with common buffing setups",
//       "Clean finish with minimal residue",
//     ],
//     applications: ["Mirror finishing", "Decorative steel", "Kitchenware", "Final-stage polishing"],
//     available: "Different compounds and formats available on request",
//   },
//   {
//     id: "05",
//     title: "Finishing Tools",
//     description: "Essential tools for smooth and consistent finishing.",
//     image: F,
//     icon: Settings2,
//     overview:
//       "Essential finishing tools that help you achieve smooth, consistent results across a wide range of steel finishing jobs.",
//     features: [
//       "Consistent finishing quality",
//       "Comfortable and efficient to use",
//       "Built for repeated industrial use",
//       "Compatible with common equipment",
//     ],
//     applications: ["Satin finishing", "Edge finishing", "Surface blending", "Production lines"],
//     available: "Multiple types and sizes available on request",
//   },
//   {
//     id: "06",
//     title: "Polishing Accessories",
//     description: "Supporting accessories for steel polishing applications.",
//     image: E,
//     icon: Wrench,
//     overview:
//       "Supporting accessories that complete your steel polishing setup and help you get the best out of your wheels, discs and compounds.",
//     features: [
//       "Complements the full polishing range",
//       "Practical and durable",
//       "Helps improve workflow",
//       "Easy to source and replace",
//     ],
//     applications: ["Polishing setups", "Workshop supplies", "Maintenance", "Production support"],
//     available: "Contact us for the full accessory list",
//   },
// ];

// /* =========================================================
//    ANIMATION VARIANTS
// ========================================================= */

// const EASE = [0.22, 1, 0.36, 1];

// const headerContainer = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.12, delayChildren: 0.1 },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
// };

// /* each heading line slides up from behind a mask */
// const lineReveal = {
//   hidden: { y: "110%", opacity: 0 },
//   show: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
//   },
// };

// const gridContainer = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.12 },
//   },
// };

// const cardIn = {
//   hidden: { opacity: 0, y: 45, scale: 0.95 },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.7, ease: EASE },
//   },
// };

// /* =========================================================
//    PRODUCT MODAL
// ========================================================= */

// const ProductModal = ({ product, onClose, reduce }) => {
//   const closeRef = useRef(null);
//   const Icon = product.icon;

//   useEffect(() => {
//     closeRef.current?.focus();
//   }, []);

//   return (
//     <motion.div
//       className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.25 }}
//     >
//       {/* Backdrop */}
//       <div
//         className="absolute inset-0 bg-[#06182E]/80 backdrop-blur-sm"
//         onClick={onClose}
//         aria-hidden="true"
//       />

//       {/* Panel */}
//       <motion.div
//         role="dialog"
//         aria-modal="true"
//         aria-labelledby="product-modal-title"
//         initial={{ opacity: 0, y: reduce ? 0 : 60, scale: reduce ? 1 : 0.96 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         exit={{ opacity: 0, y: reduce ? 0 : 40, scale: reduce ? 1 : 0.97 }}
//         transition={{ duration: 0.4, ease: EASE }}
//         className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-[0_30px_80px_rgba(6,24,46,0.45)] sm:rounded-3xl md:flex-row"
//       >
//         {/* Close button */}
//         <button
//           ref={closeRef}
//           type="button"
//           onClick={onClose}
//           aria-label="Close product details"
//           className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#06182E]/80 text-white transition-colors hover:border-[#E0B04A] hover:text-[#E0B04A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0B04A]"
//         >
//           <X size={18} />
//         </button>

//         {/* Image side */}
//         <div className="relative h-52 shrink-0 overflow-hidden bg-[#E2E8F0] sm:h-64 md:h-auto md:w-[42%]">
//           <img
//             src={product.image}
//             alt={product.title}
//             className="h-full w-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/70 via-transparent to-transparent" />

//           <span className="absolute left-4 top-4 rounded-full border border-[#E0B04A]/50 bg-[#06182E]/70 px-3 py-1.5 text-xs font-semibold tracking-wider text-[#F0CA6A]">
//             {product.id}
//           </span>

//           <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#E0B04A]/60 bg-[#06182E]/75 text-[#E0B04A]">
//             <Icon size={20} strokeWidth={1.8} />
//           </div>
//         </div>

//         {/* Details side */}
//         <div className="flex-1 overflow-y-auto p-6 sm:p-8">
//           <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B8862B]">
//             Product Details
//           </span>

//           <h3
//             id="product-modal-title"
//             className="mt-2 font-serif text-2xl font-bold text-[#06182E] sm:text-3xl"
//           >
//             {product.title}
//           </h3>

//           <p className="mt-3 text-sm leading-7 text-[#334155] sm:text-base">
//             {product.overview}
//           </p>

//           {/* Features */}
//           <div className="mt-6">
//             <h4 className="text-sm font-bold uppercase tracking-[0.12em] text-[#06182E]">
//               Key Features
//             </h4>
//             <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
//               {product.features.map((feature, i) => (
//                 <motion.li
//                   key={feature}
//                   initial={{ opacity: 0, x: reduce ? 0 : -12 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
//                   className="flex items-start gap-2 text-sm text-[#334155]"
//                 >
//                   <CheckCircle2
//                     size={17}
//                     className="mt-0.5 shrink-0 text-[#D49A2A]"
//                   />
//                   <span>{feature}</span>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>

//           {/* Applications */}
//           <div className="mt-6">
//             <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#06182E]">
//               <Factory size={15} className="text-[#B8862B]" />
//               Applications
//             </h4>
//             <div className="mt-3 flex flex-wrap gap-2">
//               {product.applications.map((app) => (
//                 <span
//                   key={app}
//                   className="rounded-full border border-[#DCE3EC] bg-[#F5F7FA] px-3 py-1.5 text-xs font-medium text-[#0F2B46]"
//                 >
//                   {app}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Availability */}
//           <p className="mt-6 rounded-xl border border-[#E0B04A]/40 bg-[#FFF9EA] px-4 py-3 text-sm text-[#6B4A0B]">
//             {product.available}
//           </p>

//           {/* Actions */}
//           <div className="mt-7 flex flex-col gap-3 sm:flex-row">
//             <motion.a
//               href={`/contact?product=${encodeURIComponent(product.title)}`}
//               whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
//               whileTap={reduce ? undefined : { scale: 0.97 }}
//               transition={{ type: "spring", stiffness: 400, damping: 20 }}
//               className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D49A2A] to-[#F0C968] px-6 py-3.5 text-sm font-semibold text-[#06182E] shadow-[0_10px_30px_-8px_rgba(224,176,74,0.6)]"
//             >
//               Enquire About This Product
//               <ArrowRight
//                 size={18}
//                 className="transition-transform duration-300 group-hover:translate-x-1"
//               />
//             </motion.a>

//             <button
//               type="button"
//               onClick={onClose}
//               className="inline-flex items-center justify-center rounded-full border border-[#DCE3EC] px-6 py-3.5 text-sm font-semibold text-[#0F2B46] transition-colors hover:border-[#06182E] hover:bg-[#F5F7FA]"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// /* =========================================================
//    SECTION
// ========================================================= */

// const ProductRangeSection = () => {
//   const reduce = useReducedMotion();
//   const [selected, setSelected] = useState(null);

//   /* lock body scroll + close on Escape while modal is open */
//   useEffect(() => {
//     if (!selected) return undefined;

//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     const onKeyDown = (e) => {
//       if (e.key === "Escape") setSelected(null);
//     };
//     window.addEventListener("keydown", onKeyDown);

//     return () => {
//       document.body.style.overflow = previousOverflow;
//       window.removeEventListener("keydown", onKeyDown);
//     };
//   }, [selected]);

//   return (
//     <section
//       id="product-categories"
//       className="relative overflow-hidden bg-[#F5F7FA] py-8 sm:py-10"
//     >
//       <link
//         rel="stylesheet"
//         href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
//       />

//       {/* =====================================================
//           BACKGROUND GRAPHICS
//       ====================================================== */}
//       <motion.div
//         aria-hidden="true"
//         animate={reduce ? undefined : { rotate: 360 }}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//         className="pointer-events-none absolute -right-32 -top-32 h-[380px] w-[380px] rounded-full border border-dashed border-[#B8862B]/30"
//       />
//       <motion.div
//         aria-hidden="true"
//         animate={reduce ? undefined : { rotate: -360 }}
//         transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
//         className="pointer-events-none absolute -right-16 -top-16 h-[250px] w-[250px] rounded-full border border-[#06182E]/10"
//       />
//       <motion.div
//         aria-hidden="true"
//         animate={
//           reduce
//             ? undefined
//             : { y: [0, -25, 0], scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }
//         }
//         transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         className="pointer-events-none absolute -left-20 top-40 h-[240px] w-[240px] rounded-full bg-[#E0B04A]/25 blur-3xl"
//       />

//       <div className="relative  px-4 sm:px-8 lg:px-12">
//         {/* =====================================================
//             SECTION HEADER
//         ====================================================== */}
//         <motion.div
//           variants={headerContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           className="mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between"
//         >
//           {/* Left Side - Tag & Heading */}
//           <div className="w-full lg:max-w-[55%]">
//             <motion.span
//               variants={fadeUp}
//               className="inline-flex items-center gap-2 rounded-full border border-[#B8862B]/40 bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F2B46]"
//             >
//               <motion.span
//                 animate={reduce ? undefined : { rotate: 360 }}
//                 transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
//                 className="flex text-[#B8862B]"
//               >
//                 <Layers3 size={15} />
//               </motion.span>
//               Steel Polishing Products
//             </motion.span>

//             {/* Main heading */}
//             <h2 className="mt-5 text-[34px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#06182E] sm:text-[44px] lg:text-[56px]">
//               <span className="block overflow-hidden pb-1 pt-2">
//                 <motion.span variants={lineReveal} className="block">
//                   Products for a
//                 </motion.span>
//               </span>

//               <span className="block overflow-hidden pb-3">
//                 <motion.span variants={lineReveal} className="inline-block">
//                   {/* gold gradient text with a slow shimmer */}
//                   <motion.span
//                     animate={
//                       reduce
//                         ? undefined
//                         : { backgroundPosition: ["0% 50%", "200% 50%"] }
//                     }
//                     transition={{
//                       duration: 6,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                     className="inline-block bg-[linear-gradient(90deg,#9A6B12,#D4A031,#9A6B12)] bg-[length:200%_auto] bg-clip-text pr-2 font-['Dancing_Script',cursive] text-[1.1em] font-bold tracking-normal text-transparent"
//                   >
//                     Perfect Steel Finish.
//                   </motion.span>
//                 </motion.span>
//               </span>
//             </h2>

//             {/* underline that draws itself, with a travelling spark */}
//             <motion.div
//               variants={fadeUp}
//               className="relative mt-1 h-[3px] w-[110px] overflow-hidden rounded-full bg-[#06182E]/10"
//             >
//               <motion.span
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1, delay: 0.6, ease: EASE }}
//                 className="absolute inset-0 origin-left bg-gradient-to-r from-[#B8862B] to-[#F0CA6A]"
//               />
//               {!reduce && (
//                 <motion.span
//                   animate={{ x: ["-100%", "400%"] }}
//                   transition={{
//                     duration: 2.2,
//                     repeat: Infinity,
//                     repeatDelay: 1.5,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute inset-y-0 left-0 w-6 bg-white/70 blur-[2px]"
//                 />
//               )}
//             </motion.div>
//           </div>

//           {/* Right Side - Description */}
//           <motion.div variants={fadeUp} className="w-full lg:max-w-[42%]">
//             <p className="text-sm leading-7 text-black sm:text-base sm:leading-8">
//               Discover our range of polishing and abrasive solutions for
//               smooth, precise, and professional steel finishing. From grinding
//               and surface preparation to buffing.
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* =====================================================
//             PRODUCT GRID
//         ====================================================== */}
//         <motion.div
//           variants={gridContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.1 }}
//           className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
//         >
//           {productRanges.map((range, index) => {
//             const Icon = range.icon;

//             return (
//               <motion.article
//                 key={range.id}
//                 variants={cardIn}
//                 whileHover={{ y: -8 }}
//                 transition={{ type: "spring", stiffness: 250, damping: 18 }}
//                 role="button"
//                 tabIndex={0}
//                 aria-haspopup="dialog"
//                 aria-label={`View details of ${range.title}`}
//                 onClick={() => setSelected(range)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter" || e.key === " ") {
//                     e.preventDefault();
//                     setSelected(range);
//                   }
//                 }}
//                 className="group cursor-pointer overflow-hidden rounded-2xl border border-[#DCE3EC] bg-white transition-[border-color,box-shadow] duration-300 hover:border-[#B8862B] hover:shadow-[0_18px_40px_rgba(6,24,46,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E0B04A] focus-visible:ring-offset-2"
//               >
//                 {/* Image */}
//                 <div className="relative aspect-[16/10] overflow-hidden bg-[#E2E8F0]">
//                   <img
//                     src={range.image}
//                     alt={range.title}
//                     loading="lazy"
//                     className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/60 via-transparent to-transparent" />

//                   {/* Hover "View details" hint */}
//                   <div className="absolute inset-0 flex items-center justify-center bg-[#06182E]/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                     <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#06182E]">
//                       <Eye size={15} className="text-[#B8862B]" />
//                       View Details
//                     </span>
//                   </div>

//                   {/* Shine sweep on hover */}
//                   <span
//                     aria-hidden="true"
//                     className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-[900ms] ease-out group-hover:translate-x-[330%]"
//                   />

//                   {/* Number */}
//                   <motion.span
//                     initial={{ opacity: 0, x: -15 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
//                     className="absolute left-4 top-4 rounded-full border border-[#E0B04A]/50 bg-[#06182E]/70 px-3 py-1.5 text-xs font-semibold tracking-wider text-[#F0CA6A]"
//                   >
//                     {range.id}
//                   </motion.span>

//                   {/* Icon */}
//                   <motion.div
//                     animate={reduce ? undefined : { y: [0, -4, 0] }}
//                     transition={{
//                       duration: 3,
//                       delay: index * 0.25,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                     className="absolute bottom-4 right-4"
//                   >
//                     <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-[#06182E]/70 text-white transition-all duration-300 group-hover:rotate-[10deg] group-hover:scale-110 group-hover:border-[#E0B04A] group-hover:text-[#E0B04A]">
//                       <Icon size={19} strokeWidth={1.8} />
//                     </div>
//                   </motion.div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-5 sm:p-6">
//                   <h3 className="text-lg font-bold text-[#06182E] sm:text-xl">
//                     {range.title}
//                   </h3>

//                   <p className="mt-2 text-sm leading-6 text-black">
//                     {range.description}
//                   </p>

//                   <span className="mt-5 inline-flex w-full items-center gap-2 border-t border-[#E2E8F0] pt-4 text-sm font-semibold text-[#0F2B46] transition-colors group-hover:text-[#9A6B12]">
//                     View Details
//                     <ArrowRight
//                       size={17}
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     />
//                   </span>
//                 </div>
//               </motion.article>
//             );
//           })}
//         </motion.div>

//         {/* =====================================================
//             BOTTOM CTA
//         ====================================================== */}
//         <motion.div
//           initial={{ opacity: 0, y: 40, scale: 0.97 }}
//           whileInView={{ opacity: 1, y: 0, scale: 1 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.9, ease: EASE }}
//           className="relative mt-8 flex flex-col gap-5 overflow-hidden rounded-2xl bg-[#06182E] p-6 sm:mt-12 sm:p-8 lg:flex-row lg:items-center lg:justify-between"
//         >
//           {/* graphics */}
//           <motion.div
//             aria-hidden="true"
//             animate={reduce ? undefined : { rotate: 360 }}
//             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//             className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full border border-dashed border-[#E0B04A]/30"
//           />
//           <motion.div
//             aria-hidden="true"
//             animate={reduce ? undefined : { scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
//             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//             className="pointer-events-none absolute -bottom-16 left-1/3 h-40 w-40 rounded-full bg-[#E0B04A]/20 blur-3xl"
//           />

//           <div className="relative">
//             <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E0B04A]">
//               Custom Requirements
//             </p>

//             <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
//               Looking for the Right Finish?
//             </h3>

//             <p className="mt-2 text-sm leading-6 text-slate-300">
//               Connect with our team for product enquiries.
//             </p>
//           </div>

//           <motion.div
//             whileHover={{ y: -5, scale: 1.04 }}
//             whileTap={{ scale: 0.96 }}
//             transition={{ type: "spring", stiffness: 300, damping: 15 }}
//             className="relative shrink-0"
//           >
//             <a
//               href="/contact"
//               className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#06182E] transition-colors hover:bg-[#F0CA6A] sm:w-auto"
//             >
//               Contact Us
//               <motion.span
//                 animate={reduce ? undefined : { x: [0, 3, 0], y: [0, -3, 0] }}
//                 transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//                 className="flex"
//               >
//                 <ArrowUpRight size={18} />
//               </motion.span>
//             </a>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* =====================================================
//           PRODUCT DETAILS MODAL
//       ====================================================== */}
//       <AnimatePresence>
//         {selected && (
//           <ProductModal
//             key={selected.id}
//             product={selected}
//             reduce={reduce}
//             onClose={() => setSelected(null)}
//           />
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default ProductRangeSection;




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
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

/* =========================================================
   REAL PRODUCT IMAGES (From ProductApplications assets)
========================================================= */
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

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

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
        initial={{ opacity: 0, y: reduce ? 0 : 50, scale: reduce ? 1 : 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: reduce ? 0 : 30, scale: reduce ? 1 : 0.97 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl md:flex-row"
      >
        {/* Close button */}
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          className="absolute right-3.5 top-3.5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-[#06182E]/80 text-white transition-colors hover:border-[#E0B04A] hover:text-[#E0B04A]"
        >
          <X size={18} />
        </button>

        {/* Image side */}
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

        {/* Details side */}
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

          {/* Features */}
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

          {/* Applications */}
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

          {/* Availability */}
          <div className="mt-5 rounded-xl border border-[#B8862B]/30 bg-[#FFF9EA] p-3 text-xs text-[#6B4A0B]">
            <p className="font-semibold">Availability:</p>
            <p className="mt-0.5">{product.available}</p>
          </div>

          {/* Actions */}
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

/* =========================================================
   MAIN COMPONENT: PRODUCT RANGE SECTION (SPLIT EXPLORER)
========================================================= */

const ProductRangeSection = () => {
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalProduct, setModalProduct] = useState(null);

  const activeRange = productRanges[activeIndex];
  const ActiveIcon = activeRange.icon;

  /* Lock body scroll when modal open */
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

      {/* Ambient background blur */}
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
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
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

        {/* =====================================================
            MOBILE CATEGORY PILLS (Quick Swipe / Tab)
        ====================================================== */}
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

        {/* =====================================================
            INTERACTIVE SPLIT EXPLORER (Totally Different View)
        ====================================================== */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          
          {/* LEFT: 6 INTERACTIVE RANGE SELECTORS (5 Columns on Desktop) */}
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
                    {/* Icon container */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-[#06182E] text-[#E0B04A] shadow-md"
                          : "border border-[#E5E7EB] bg-[#FAF8F5] text-[#06182E] group-hover:text-[#B8862B]"
                      }`}
                    >
                      <Icon size={20} strokeWidth={1.9} />
                    </div>

                    {/* Text info */}
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

                  {/* Indicator Arrow */}
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

                  {/* Active Left Indicator Bar */}
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

          {/* RIGHT: FEATURED STAGE FOR ACTIVE RANGE (7 Columns on Desktop) */}
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
                {/* Large Panoramic Product Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#06182E]/5 shadow-inner">
                  <img
                    src={activeRange.image}
                    alt={activeRange.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/70 via-transparent to-transparent" />

                  {/* Number Badge */}
                  <div className="absolute left-3.5 top-3.5 rounded-full border border-white/40 bg-white/90 px-2.5 py-0.5 text-[10.5px] font-extrabold text-[#06182E] shadow-sm backdrop-blur-md">
                    RANGE {activeRange.id}
                  </div>

                  {/* Quick Expand Button */}
                  <button
                    type="button"
                    onClick={() => setModalProduct(activeRange)}
                    aria-label="Enlarge view"
                    className="absolute right-3.5 top-3.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-[#06182E]/80 text-white shadow-sm backdrop-blur-md transition-colors hover:bg-white hover:text-[#06182E]"
                  >
                    <Maximize2 size={14} />
                  </button>

                  {/* Bottom Text Over Image */}
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

                {/* Content Body Below Image */}
                <div className="mt-5">
                  <p className="text-[14px] leading-relaxed text-[#06182E]/80 sm:text-[15px]">
                    {activeRange.overview}
                  </p>

                  {/* Key Features (2x2 Grid) */}
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

                  {/* Applications Pills */}
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

                  {/* Actions Bar */}
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

                    {/* Step indicator */}
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

        {/* =====================================================
            BOTTOM CTA BANNER
        ====================================================== */}
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

      {/* =====================================================
          POPUP MODAL
      ====================================================== */}
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