
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
    description:
      "Focused on polishing solutions designed for steel surface finishing applications.",
  },
  {
    icon: Settings,
    title: "Precision Finishing Solutions",
    description:
      "Products developed to support smooth surfaces, consistent finishes, and reliable polishing performance.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Focused Products",
    description:
      "Committed to product quality, dependable performance, and customer requirements.",
  },
];

const imageFeatures = [
  {
    icon: Factory,
    title: "Industrial",
    subtitle: "Applications",
  },
  {
    icon: Settings,
    title: "Precision",
    subtitle: "Finishing",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    subtitle: "Focused",
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
    <section className="w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">

      <div className="px-4 sm:px-8 lg:px-12">

   

        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">

          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="w-full lg:max-w-[50%]"
          >

            
            <motion.span
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 rounded-full border border-[#DCE3EC] bg-[#F5F7FA] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F2B46] sm:text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#06182E]" />
              Who We Are
            </motion.span>

            



               <motion.h1
                          variants={fadeUpVariants}
                          className="max-w-4xl  text-xl font-medium italic leading-[1.12] tracking-tight text-black sm:text-3xl md:text-4xl xl:text-5xl"
                        >
                          Enhancing Steel
            
                          <span className="mt-1 font-serif block text-[#D9A441]">
                            Through Precision Polishing
                          </span>
                        </motion.h1>


          

          </motion.div>

          
          <motion.div
            variants={fadeRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="w-full lg:max-w-[45%]"
          >
            <p className="text-sm leading-7 text-black sm:text-base sm:leading-8">
              KT GLOW specializes in steel polishing and industrial abrasive
              products designed to support high-quality metal surface finishing.
              We focus on precision, performance, and reliability to deliver
              professional finishing solutions for industrial applications.
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
              className="relative min-h-[260px] flex-1 overflow-hidden rounded-3xl border border-[#DCE3EC] sm:min-h-[320px] lg:min-h-[260px]"
            >

              <motion.img
                src={EnhancingImg}
                alt="Steel polishing and industrial metal finishing process"
                loading="lazy"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: 1.04,
                      }
                }
                transition={{
                  duration: 0.6,
                  ease: EASE,
                }}
                className="absolute inset-0 h-full w-full object-fit"
              />

              
              <motion.div
                variants={fadeUpVariants}
                className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-[#06182E]/90 p-4 sm:bottom-6 sm:left-6 sm:right-6 sm:p-5"
              >

                <div className="flex items-center gap-4">

                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            rotate: 10,
                            scale: 1.08,
                          }
                    }
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#06182E]"
                  >
                    <Sparkles size={24} />
                  </motion.div>

                  <div className="min-w-0">

                    <h3 className="text-base font-bold italic text-white sm:text-lg">
                      Steel Polishing Solutions
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-white/75 sm:text-sm">
                      Precision, surface quality, and superior finishing.
                    </p>

                  </div>

                </div>

              </motion.div>

            </motion.div>

            
            <motion.div
              variants={containerVariants}
              className="mt-4 grid grid-cols-3 gap-3"
            >

              {imageFeatures.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={cardVariants}
                    whileHover={hoverLift}
                    className="rounded-2xl border border-[#DCE3EC] bg-[#F8FAFC] p-3 sm:p-4"
                  >

                    <motion.div
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              rotate: 8,
                              scale: 1.1,
                            }
                      }
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.8}
                        className="text-[#06182E]"
                      />
                    </motion.div>

                    <h4 className="mt-3 text-xs font-bold italic text-[#06182E] sm:text-sm">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-[10px] leading-4 text-black sm:text-xs">
                      {item.subtitle}
                    </p>

                  </motion.div>
                );
              })}

            </motion.div>

            
            <motion.div
              variants={fadeUpVariants}
              whileHover={hoverLift}
              className="mt-4 flex items-center gap-3 rounded-2xl border border-[#DCE3EC] bg-white p-4"
            >

              <CheckCircle2
                size={21}
                className="shrink-0 text-[#06182E]"
              />

              <p className="text-xs font-semibold italic leading-5 text-[#06182E] sm:text-sm">
                Designed for Industrial Steel Surface Finishing
              </p>

            </motion.div>

          </motion.div>


          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex min-w-0 flex-col rounded-3xl border border-[#DCE3EC] bg-[#F8FAFC] p-5 sm:p-7 lg:p-8"
          >

            
            <motion.span
              variants={fadeUpVariants}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[#DCE3EC] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#0F2B46] sm:text-sm"
            >
              <Factory size={15} />
              Our Expertise
            </motion.span>

            
            <motion.h3
              variants={fadeUpVariants}
              className="mt-5 text-2xl font-bold italic leading-tight tracking-tight text-[#06182E] sm:text-3xl"
            >
              Reliable Products for

              <span className="mt-1 block font-serif font-medium text-[#C9972B]">
                Superior Steel Finishing
              </span>
            </motion.h3>

            
            <motion.p
              variants={fadeUpVariants}
              className="mt-5 text-sm leading-7 text-black sm:text-base sm:leading-7"
            >
              KT GLOW focuses on steel polishing and industrial abrasive
              products designed to support metal surface finishing.
              Our solutions help businesses achieve smoother surfaces,
              refined finishes, and professional results across
              various steel polishing applications.
            </motion.p>

            <motion.p
              variants={fadeUpVariants}
              className="mt-4 text-sm leading-7 text-black sm:text-base sm:leading-7"
            >
              We are committed to delivering quality-oriented products
              with a focus on performance, reliability, and customer
              requirements. Our goal is to support industrial
              metalworking with dependable polishing solutions.
            </motion.p>

            
            <motion.div
              variants={containerVariants}
              className="mt-7 space-y-4"
            >

              {companyHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={cardVariants}
                    whileHover={hoverLift}
                    className="group flex items-start gap-4 rounded-2xl border border-[#DCE3EC] bg-white p-4"
                  >

                    
                    <motion.div
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              rotate: 8,
                              scale: 1.08,
                            }
                      }
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#06182E] text-white transition-colors duration-300 group-hover:bg-[#C9972B]"
                    >
                      <Icon size={21} strokeWidth={1.8} />
                    </motion.div>

                    
                    <div className="min-w-0">

                      <h4 className="text-sm font-bold italic text-[#06182E] sm:text-base">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-xs leading-6 text-black sm:text-sm">
                        {item.description}
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </motion.div>

            
            <motion.div
              variants={fadeUpVariants}
              className="mt-auto pt-7"
            >

              <div className="flex flex-wrap items-center gap-3">

                
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 1.04,
                        }
                  }
                  whileTap={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 0.97,
                        }
                  }
                >
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06182E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0F2B46]"
                  >
                    About KT GLOW
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>

                
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 1.04,
                        }
                  }
                  whileTap={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: 0.97,
                        }
                  }
                >
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#DCE3EC] bg-white px-6 py-3 text-sm font-semibold text-[#06182E] transition-colors hover:border-[#06182E] hover:bg-[#F5F7FA]"
                  >
                    Explore Products
                  </Link>
                </motion.div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default WhoWeAre;
