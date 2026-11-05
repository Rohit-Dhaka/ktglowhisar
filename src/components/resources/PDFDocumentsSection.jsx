import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  FileText,
  Eye,
  Download,  
  Layers3,
  Check,
  Loader2,
} from "lucide-react";

import PDF1 from "../../assets/documents/FINAL TM-A OF KT GLOW.pdf";
import PDF2 from "../../assets/documents/RECEIPT-17-06-26.pdf";
import PDF3 from "../../assets/documents/STATUS-KT GLOW.pdf";

const pdfDocuments = [
  {
    id: "01",
    title: "Product Catalogue",
    category: "Product Information",
    description:
      "Explore our complete range of industrial abrasive and steel polishing products.",
    file: PDF1,
    size: "PDF Document",
  },
  {
    id: "02",
    title: "Technical Documentation",
    category: "Technical Resources",
    description:
      "Discover technical details, specifications, and information about our product solutions.",
    file: PDF2,
    size: "PDF Document",
  },
  {
    id: "03",
    title: "Company Profile",
    category: "Company Information",
    description:
      "Learn about our company, manufacturing capabilities, expertise, and commitment to quality.",
    file: PDF3,
    size: "PDF Document",
  },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const EASE = [0.22, 1, 0.36, 1];

const headerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
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

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

/* cards "land" like sheets of paper */
const cardIn = {
  hidden: { opacity: 0, y: 60, rotate: -3 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

/* =========================================================
   DOWNLOAD BUTTON — shows progress, then a "done" state
   (the file still downloads normally via the link)
========================================================= */

const DownloadButton = ({ file }) => {
  const [status, setStatus] = useState("idle"); // idle | loading | done
  const timers = useRef([]);

  useEffect(
    () => () => {
      timers.current.forEach(clearTimeout);
    },
    []
  );

  const handleClick = () => {
    if (status !== "idle") return;
    setStatus("loading");
    timers.current.push(setTimeout(() => setStatus("done"), 1400));
    timers.current.push(setTimeout(() => setStatus("idle"), 3600));
  };

  return (
    <motion.a
      href={file}
      download
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
      className={`relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-3 py-3 text-sm font-semibold transition-colors duration-300 ${
        status === "done"
          ? "bg-[#E0B04A] text-[#06182E]"
          : "bg-[#06182E] text-white hover:bg-[#0F2B46]"
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={status}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.18 }}
          className="inline-flex items-center gap-2"
        >
          {status === "idle" && (
            <>
              <motion.span
                animate={{ y: [0, 2.5, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                className="flex text-[#F0CA6A]"
              >
                <Download size={17} />
              </motion.span>
              Download
            </>
          )}

          {status === "loading" && (
            <>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
                className="flex"
              >
                <Loader2 size={17} />
              </motion.span>
              Downloading
            </>
          )}

          {status === "done" && (
            <>
              <Check size={17} strokeWidth={3} />
              Downloaded
            </>
          )}
        </motion.span>
      </AnimatePresence>

      {/* progress bar */}
      {status === "loading" && (
        <motion.span
          aria-hidden="true"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 h-1 bg-[#F0CA6A]"
        />
      )}
    </motion.a>
  );
};

/* =========================================================
   SECTION
========================================================= */

const PDFDocumentsSection = () => {
  const reduce = useReducedMotion();

  return (
    <section
      id="pdf-documents"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
      />

      {/* =====================================================
          BACKGROUND GRAPHICS
      ====================================================== */}
      {/* dotted paper pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(6,24,46,0.08)_1px,transparent_1px)] bg-[size:22px_22px] [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_70%)]"
      />
      <motion.div
        aria-hidden="true"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full border border-dashed border-[#B8862B]/30"
      />
      <motion.div
        aria-hidden="true"
        animate={reduce ? undefined : { y: [0, -14, 0], rotate: [-8, -2, -8] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-10 bottom-32 text-[#B8862B]/15"
      >
        <FileText size={200} strokeWidth={0.8} />
      </motion.div>
      <motion.div
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : { y: [0, -25, 0], scale: [1, 1.12, 1], opacity: [0.25, 0.5, 0.25] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-10 top-1/2 h-[240px] w-[240px] rounded-full bg-[#E0B04A]/25 blur-3xl"
      />

      <div className="relative px-4 sm:px-8 lg:px-12">
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
          <div className="w-full lg:max-w-[50%]">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-[#B8862B]/40 bg-[#F5F7FA] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F2B46] sm:text-sm"
            >
              <motion.span
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="flex text-[#B8862B]"
              >
                <Layers3 size={15} />
              </motion.span>
              Document Library
            </motion.span>

            {/* Heading — gold highlighter marker is drawn behind "Documents." */}
            <h2 className="mt-5 text-[34px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#06182E] sm:text-[44px] lg:text-[54px]">
              <span className="block overflow-hidden pb-1 pt-2">
                <motion.span variants={lineReveal} className="block">
                  Explore Our
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-2 font-serif italic text-[#E0B04A]">
                <motion.span variants={lineReveal} className="inline-block">
                  Resources &amp;{" "}
                  <span className="relative inline-block">
                 
                    <span className="relative">Documents.</span>
                  </span>
                </motion.span>
              </span>
            </h2>
          </div>

          {/* Right Side - Description */}
          <motion.div variants={fadeUp} className="w-full lg:max-w-[45%]">
            <p className="text-sm leading-7 text-black sm:text-base sm:leading-8">
              Browse our documentation to learn more about our steel polishing
              products, technical specifications, and company capabilities.
              Access detailed product information, guidelines, and resources
              to better understand our solutions.
            </p>
          </motion.div>

          {/* Document Count */}
          {/* 
          <div className="flex w-fit items-center gap-3 rounded-2xl border border-[#DCE3EC] bg-[#F5F7FA] px-5 py-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0F2B46]">
              <FileText size={22} />
            </div>

            <div>
              <p className="text-2xl font-bold text-[#06182E]">
                03
              </p>
              <p className="text-xs font-medium text-black">
                Available Documents
              </p>
            </div>
          </div>
          */}
        </motion.div>

        {/* =====================================================
            PDF CARDS
        ====================================================== */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {pdfDocuments.map((document, index) => (
            <motion.div
              key={document.id}
              variants={cardIn}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="group relative"
            >
              {/* sheets of paper peeking out from behind the card */}
              <span
                aria-hidden="true"
                className="absolute inset-x-4 top-0 z-0 h-full rounded-3xl border border-[#E0B04A]/40 bg-[#FBF3DF] transition-transform duration-500 ease-out group-hover:-translate-y-3 group-hover:-rotate-[2deg]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-2 top-0 z-0 h-full rounded-3xl border border-[#E0B04A]/30 bg-[#FDF8EC] transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:rotate-[1.5deg]"
              />

              <article className="relative z-10 flex h-full flex-col overflow-hidden rounded-3xl border border-[#DCE3EC] bg-[#F8FAFC] p-5 transition-[border-color,box-shadow] duration-300 group-hover:border-[#B8862B] group-hover:shadow-[0_22px_50px_rgba(6,24,46,0.14)] sm:p-6">
                {/* shine sweep on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-[1000ms] ease-out group-hover:translate-x-[350%]"
                />

                {/* Card Top */}
                <div className="relative flex items-start justify-between gap-4">
                  <motion.div
                    animate={reduce ? undefined : { y: [0, -5, 0] }}
                    transition={{
                      duration: 3.2,
                      delay: index * 0.35,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06182E] text-[#F0CA6A] shadow-[0_10px_24px_rgba(6,24,46,0.25)] transition-transform duration-300 group-hover:rotate-[8deg] group-hover:scale-110">
                      <FileText size={27} />
                    </div>
                  </motion.div>

                  <span className="font-['Dancing_Script',cursive] text-4xl font-bold leading-none text-[#B8862B]">
                    {document.id}
                  </span>
                </div>

                {/* Card Content */}
                <div className="relative mt-6 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6212]">
                    {document.category}
                  </p>

                  <h3 className="mt-3 text-xl font-bold leading-tight text-[#06182E] sm:text-2xl">
                    {document.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black">
                    {document.description}
                  </p>
                </div>

                {/* PDF Info */}
                <div className="relative mt-6 flex items-center justify-between border-t border-[#DCE3EC] pt-5">
                  <span className="text-xs font-medium text-[#94A3B8]">
                    {document.size}
                  </span>

                  <span className="rounded-md bg-[#E0B04A]/20 px-2 py-0.5 text-[11px] font-extrabold tracking-wider text-[#8A6212]">
                    PDF
                  </span>
                </div>

                {/* Buttons */}
                <div className="relative mt-5 grid grid-cols-2 gap-3">
                  {/* View PDF */}
                  <motion.a
                    href={document.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#DCE3EC] bg-white px-3 py-3 text-sm font-semibold text-[#06182E] transition-colors hover:border-[#06182E] hover:bg-[#06182E] hover:text-white"
                  >
                    <Eye size={17} />
                    View PDF
                  </motion.a>

                  {/* Download PDF (progress → done) */}
                  <DownloadButton file={document.file} />
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>

   
      </div>
    </section>
  );
};

export default PDFDocumentsSection;