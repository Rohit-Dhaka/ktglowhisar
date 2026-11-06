
import {
  ArrowRight,
  Factory,
  Settings,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import EnhancingImg from "../../assets/images/enhancingImg.png";

const companyHighlights = [
  {
    icon: Factory,
    title: "Steel Polishing Expertise",
    highlightWord: "Steel Polishing",
    description: (
      <>
        Focused on engineered solutions designed for{" "}
        <strong className="font-semibold text-[#06182E]">superior steel surface finishing</strong> and{" "}
        <span className="font-semibold text-[#8A6212]">mirror consistency</span>.
      </>
    ),
  },
  {
    icon: Settings,
    title: "Precision Finishing Solutions",
    highlightWord: "Precision Finishing",
    description: (
      <>
        Products developed to support{" "}
        <strong className="font-semibold text-[#06182E]">smooth surfaces</strong>,{" "}
        <span className="font-semibold text-[#718865]">scratch-free blending</span>, and{" "}
        <strong className="font-semibold text-[#06182E]">reliable stock removal</strong>.
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Quality-Focused Products",
    highlightWord: "Quality-Focused",
    description: (
      <>
        Committed to{" "}
        <strong className="font-semibold text-[#06182E]">dependable durability</strong>,{" "}
        <span className="font-semibold text-[#8A6212]">ISO 9001 standards</span>, and exact customer requirements.
      </>
    ),
  },
];

const imageFeatures = [
  {
    icon: Factory,
    title: "Industrial",
    subtitle: "Heavy Fabrication",
    highlightColor: "text-[#8A6212]",
  },
  {
    icon: Settings,
    title: "Precision",
    subtitle: "Surface Treatment",
    highlightColor: "text-[#718865]",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    subtitle: "ISO Certified",
    highlightColor: "text-[#8A6212]",
  },
];

const EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: EASE,
    },
  },
};

const fadeRightVariants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASE,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: EASE,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 1.08,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.3,
      ease: EASE,
    },
  },
};

const WhoWeAre = () => {
  const shouldReduceMotion = useReducedMotion();

  const viewport = {
    once: true,
    amount: 0.15,
  };

  const hoverLift = shouldReduceMotion
    ? undefined
    : {
        y: -5,
        transition: {
          duration: 0.25,
          ease: "easeOut",
        },
      };

  return (
    <section className="w-full overflow-hidden bg-white py-8 sm:py-12">
      <div className="px-4 sm:px-8 lg:px-12">
   
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="w-full lg:max-w-[52%]"
          >
            
            <motion.span
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 rounded-full border border-[#DCE3EC] bg-[#FAF8F5] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#8A6212]"
            >
              <span className="h-2 w-2 rounded-full bg-[#B8862B]" />
              Who We Are
            </motion.span>

      
            <motion.h2
              variants={fadeUpVariants}
              className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#06182E] sm:text-4xl md:text-5xl"
            >
              Enhancing Steel{" "}
              <span className="block font-serif italic font-normal text-[#B8862B] sm:text-[42px] md:text-[50px]">
                Through Precision Polishing.
              </span>
            </motion.h2>
          </motion.div>

          
          <motion.div
            variants={fadeRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="w-full lg:max-w-[45%]"
          >
            <p className="text-[14.5px] leading-[1.8] text-[#06182E]/80 sm:text-[15.5px]">
              <strong className="font-extrabold text-[#06182E]">KT GLOW</strong> specializes in{" "}
              <span className="font-bold text-[#8A6212]">steel polishing</span> and{" "}
              <strong className="font-semibold text-[#06182E]">industrial abrasive products</strong> engineered to
              support high-performance metal surface finishing. We focus on{" "}
              <span className="font-bold text-[#718865]">precision</span>,{" "}
              <span className="font-bold text-[#718865]">performance</span>, and{" "}
              <span className="font-bold text-[#718865]">consistency</span> to deliver{" "}
              <strong className="font-bold text-[#06182E]">mirror-grade finishing solutions</strong> across heavy fabrication industries.
            </p>
          </motion.div>

        </div>

     
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12">

          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex min-w-0 flex-col"
          >
            
            <motion.div
              variants={imageVariants}
              className="relative min-h-[420px] flex-1  rounded-3xl border border-[#DCE3EC] shadow-sm sm:min-h-[320px] lg:min-h-[270px]"
            >
              <motion.img
                src={EnhancingImg}
                alt="Steel polishing and industrial metal finishing process"
                loading="lazy"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="absolute inset-0 h-full w-full object-fit "
              />

              
              <motion.div
                variants={fadeUpVariants}
                className="absolute max-sm:-bottom-10  left-4 right-4 rounded-2xl border border-white/20 bg-[#06182E]/90 p-4 backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:p-5"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#06182E] shadow-sm">
                    <Sparkles size={22} className="text-[#B8862B]" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-white sm:text-lg">
                      Steel Polishing <span className="font-serif italic text-[#E0B04A]">Solutions</span>
                    </h3>

                    <p className="mt-0.5 text-xs text-white/80 sm:text-[13px]">
                      <span className="font-semibold text-[#E0B04A]">Precision</span>,{" "}
                      <span className="text-white">surface consistency</span>, and{" "}
                      <span className="font-semibold text-[#E0B04A]">superior finish</span>.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            
            <motion.div
              variants={containerVariants}
              className="sm:mt-4 mt-14 grid grid-cols-3 gap-3"
            >
              {imageFeatures.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={cardVariants}
                    whileHover={hoverLift}
                    className="rounded-2xl border border-[#DCE3EC] bg-[#FAF8F5] p-3 text-center sm:p-4 transition-colors hover:border-[#B8862B]/50"
                  >
                    <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm border border-[#E5E7EB]">
                      <Icon size={18} strokeWidth={1.8} className="text-[#B8862B]" />
                    </div>

                    <h4 className="mt-2.5 text-xs font-extrabold text-[#06182E] sm:text-sm">
                      {item.title}
                    </h4>

                    <p className={`mt-0.5 text-[10.5px] font-semibold sm:text-xs ${item.highlightColor}`}>
                      {item.subtitle}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            
            <motion.div
              variants={fadeUpVariants}
              whileHover={hoverLift}
              className="mt-4 flex items-center gap-3 rounded-2xl border border-[#B8862B]/30 bg-[#FFF9EA] p-3.5 sm:p-4"
            >
              <CheckCircle2 size={20} className="shrink-0 text-[#718865]" />
              <p className="text-xs font-bold text-[#06182E] sm:text-[13px]">
                Engineered for <span className="text-[#8A6212]">Industrial Steel</span> &{" "}
                <span className="text-[#718865]">Stainless Surface Finishing</span>
              </p>
            </motion.div>
          </motion.div>

          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex min-w-0 flex-col rounded-3xl border border-[#DCE3EC] bg-[#FBF8F2] p-5 sm:p-7 lg:p-8"
          >
            
            <motion.span
              variants={fadeUpVariants}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[#DCE3EC] bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#8A6212]"
            >
              <Factory size={14} className="text-[#B8862B]" />
              Our Core Expertise
            </motion.span>

            
            <motion.h3
              variants={fadeUpVariants}
              className="mt-4 text-2xl font-extrabold leading-tight tracking-tight text-[#06182E] sm:text-3xl"
            >
              Reliable Products for{" "}
              <span className="block font-serif italic text-[#B8862B]">
                Superior Steel Finishing
              </span>
            </motion.h3>

            
            <motion.p
              variants={fadeUpVariants}
              className="mt-4 text-[13.5px] leading-relaxed text-[#06182E]/80 sm:text-[14.5px]"
            >
              <strong className="font-extrabold text-[#06182E]">KT GLOW</strong> manufactures cutting, grinding, and
              buffing abrasives engineered for modern industrial metalworking. Our products help plants achieve{" "}
              <span className="font-bold text-[#06182E]">smoother surfaces</span>,{" "}
              <span className="font-bold text-[#718865]">refined finishes</span>, and{" "}
              <strong className="font-bold text-[#8A6212]">mirror-clear results</strong> across diverse stainless alloys.
            </motion.p>

            
            <motion.p
              variants={fadeUpVariants}
              className="mt-3 text-[13.5px] leading-relaxed text-[#06182E]/80 sm:text-[14.5px]"
            >
              We are dedicated to <span className="font-bold text-[#06182E]">quality-oriented manufacturing</span> with an
              uncompromising focus on <span className="font-bold text-[#718865]">performance</span>,{" "}
              <span className="font-bold text-[#718865]">operator safety</span>, and{" "}
              <span className="font-bold text-[#8A6212]">extended wheel life</span>.
            </motion.p>

            
            <motion.div
              variants={containerVariants}
              className="mt-6 space-y-3.5"
            >
              {companyHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={cardVariants}
                    whileHover={hoverLift}
                    className="group flex items-start gap-3.5 rounded-2xl border border-[#DCE3EC] bg-white p-3.5 sm:p-4 shadow-sm transition-all duration-300 hover:border-[#B8862B]/50 hover:shadow-md"
                  >
                    
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#06182E] text-white transition-colors duration-300 group-hover:bg-[#B8862B]">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    
                    <div className="min-w-0">
                      <h4 className="text-[14.5px] font-bold text-[#06182E] transition-colors group-hover:text-[#8A6212] sm:text-base">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-xs leading-relaxed text-[#06182E]/75 sm:text-[13px]">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            
            <motion.div
              variants={fadeUpVariants}
              className="mt-6 pt-5 border-t border-[#E5E7EB]"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  to="/about"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#06182E] px-6 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-[#0D2A4A] hover:text-[#E0B04A] sm:w-auto sm:inline-flex sm:text-sm"
                >
                  About KT GLOW
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/products"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-[#B8862B]/50 bg-white px-5 py-3 text-xs font-semibold text-[#06182E] transition-colors hover:border-[#06182E] hover:bg-[#FAF8F5] sm:w-auto sm:inline-flex sm:text-sm"
                >
                  Explore Products
                </Link>
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;