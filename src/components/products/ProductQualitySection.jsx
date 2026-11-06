import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Microscope,
  Settings2,
  CheckCircle2,
  ScanLine,
} from "lucide-react";

import AllImg from "../../assets/images/all.png";

const qualityFeatures = [
  {
    id: "01",
    title: "Precision Engineering",
    description:
      "Products developed with attention to detail and precision for consistent industrial performance.",
    icon: Settings2,
  },
  {
    id: "02",
    title: "Quality Inspection",
    description:
      "A quality-focused approach to ensure products meet defined requirements and specifications.",
    icon: Microscope,
  },
  {
    id: "03",
    title: "Reliable Performance",
    description:
      "Designed to support dependable operation across demanding industrial environments.",
    icon: ShieldCheck,
  },
];


const EASE = [0.22, 1, 0.36, 1];

const textContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};


const wordReveal = {
  hidden: { y: "115%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const headingWords = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const bracket = "absolute h-7 w-7 border-[#E0B04A] sm:h-9 sm:w-9";


const ProductQualitySection = () => {
  const reduce = useReducedMotion();

  
  const imageWrapRef = useRef(null);
  const { scrollYProgress: imgProgress } = useScroll({
    target: imageWrapRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(imgProgress, [0, 1], ["-7%", "7%"]);

  
  const listRef = useRef(null);
  const { scrollYProgress: listProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 55%"],
  });
  const lineScale = useSpring(listProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.5,
  });

  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
      />

      <motion.div
        aria-hidden="true"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full border border-dashed border-[#B8862B]/30"
      />
      <motion.div
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : { y: [0, -25, 0], scale: [1, 1.12, 1], opacity: [0.3, 0.55, 0.3] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-24 bottom-10 h-[260px] w-[260px] rounded-full bg-[#E0B04A]/25 blur-3xl"
      />

      <div className="relative px-4 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        
          <motion.div
            ref={imageWrapRef}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl bg-[#06182E]">
              <motion.img
                src={AllImg}
                alt="Industrial product quality inspection"
                loading="lazy"
                style={reduce ? undefined : { y: imgY, scale: 1.18 }}
                className="aspect-[4/5] max-h-[650px] w-full object-cover"
              />

              
              <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/90 via-[#06182E]/20 to-transparent" />

              
              {!reduce && (
                <motion.div
                  aria-hidden="true"
                  animate={{ top: ["6%", "90%", "6%"] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-x-0 z-10"
                >
                  
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#E0B04A]/25 to-transparent" />
                  
                  <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#F0CA6A] to-transparent shadow-[0_0_18px_4px_rgba(240,202,106,0.55)]" />
                </motion.div>
              )}

              
              {[
                "left-4 top-4 rounded-tl-lg border-l-2 border-t-2 sm:left-6 sm:top-6",
                "right-4 top-4 rounded-tr-lg border-r-2 border-t-2 sm:right-6 sm:top-6",
                "bottom-4 left-4 rounded-bl-lg border-b-2 border-l-2 sm:bottom-6 sm:left-6",
                "bottom-4 right-4 rounded-br-lg border-b-2 border-r-2 sm:bottom-6 sm:right-6",
              ].map((pos, i) => (
                <motion.span
                  key={pos}
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 1.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + i * 0.1,
                    ease: EASE,
                  }}
                  className={`${bracket} ${pos} z-10`}
                />
              ))}

              
              <div className="absolute left-8 top-8 z-20 sm:left-12 sm:top-12">
                <motion.span
                  initial={{ opacity: 0, y: -15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E0B04A]/50 bg-[#06182E]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F0CA6A] backdrop-blur-sm"
                >
                  <ScanLine size={15} />
                  Quality Assurance
                </motion.span>
              </div>

              
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-12">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={textContainer}
                  className="max-w-md"
                >
                  <motion.p
                    variants={fadeUp}
                    className="text-xs max-sm:hidden font-semibold uppercase tracking-[0.18em] text-[#F0CA6A]"
                  >
                    Our Commitment
                  </motion.p>

                  <motion.h3
                    variants={fadeUp}
                    className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl"
                  >
                    Quality That Supports
                    <span className="block text-slate-300">
                      Every Application.
                    </span>
                  </motion.h3>

                  <motion.p
                    variants={fadeUp}
                    className="sm:mt-3 mt-1 text-sm leading-6 text-slate-300"
                  >
                    A consistent focus on product quality, precision, and
                    dependable industrial solutions.
                  </motion.p>
                </motion.div>
              </div>
            </div>

            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
              className="absolute -top-5 right-3 z-30 sm:-top-6 sm:right-8"
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#E0B04A]/60 bg-[#06182E] sm:h-[120px] sm:w-[120px]">
                <motion.svg
                  viewBox="0 0 120 120"
                  aria-hidden="true"
                  animate={reduce ? undefined : { rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 h-full w-full"
                >
                  <defs>
                    <path
                      id="quality-seal-circle"
                      d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
                    />
                  </defs>

                  <text
                    fontSize="9"
                    fontWeight="700"
                    fill="#F0CA6A"
                    textLength="280"
                    lengthAdjust="spacing"
                  >
                    <textPath href="#quality-seal-circle">
                      QUALITY • PRECISION • RELIABLE •
                    </textPath>
                  </text>
                </motion.svg>

                <BadgeCheck
                  size={24}
                  strokeWidth={1.6}
                  className="text-[#E0B04A] sm:h-[34px] sm:w-[34px]"
                />
              </div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
              className="absolute sm:-bottom-5 sm:right-3 right-1 -bottom-14 z-30 sm:right-8"
            >
              <motion.div
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl  border border-[#DCE3EC] bg-white p-4 shadow-[0_14px_35px_rgba(6,24,46,0.15)] sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F7FA] text-[#B8862B]">
                    <ShieldCheck size={23} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                      Quality Focus
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#06182E]">
                      Built Around Standards
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

       
          <motion.div
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="pt-5 lg:pt-0"
          >
            
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-[#B8862B]/40 bg-[#F5F7FA] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F2B46] sm:text-sm"
            >
              <motion.span
                animate={reduce ? undefined : { scale: [1, 1.25, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex text-[#B8862B]"
              >
                <BadgeCheck size={15} />
              </motion.span>
              Quality & Excellence
            </motion.span>

            
            <motion.h2
              variants={headingWords}
              className="mt-6 text-[32px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#06182E] sm:text-[42px] lg:text-[50px]"
            >
              {"Quality Is At The Core".split(" ").map((word, i) => (
                <span
                  key={`${word}-${i}`}
                  className="mr-[0.25em] inline-block overflow-hidden pb-1 align-bottom"
                >
                  <motion.span variants={wordReveal} className="inline-block">
                    {word}
                  </motion.span>
                </span>
              ))}

              <span className="block overflow-hidden pb-3">
                <motion.span variants={wordReveal} className="inline-block">
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
                    Of Every Product.
                  </motion.span>
                </motion.span>
              </span>
            </motion.h2>

            
            <motion.p
              variants={fadeUp}
              className="mt-3 text-sm leading-7 text-black sm:text-base sm:leading-8"
            >
              We understand the importance of quality in industrial
              applications. Our product-focused approach emphasizes precision,
              consistency, and reliability to help meet the needs of our
              customers and their industries.
            </motion.p>

            
            <motion.div
              variants={fadeUp}
              ref={listRef}
              className="relative mt-9"
            >
              
              <span
                aria-hidden="true"
                className="absolute bottom-4 left-[22px] top-4 w-px bg-[#DCE3EC]"
              />
              
              <motion.span
                aria-hidden="true"
                style={{ scaleY: reduce ? 1 : lineScale }}
                className="absolute bottom-4 left-[21px] top-4 w-[3px] origin-top rounded-full bg-gradient-to-b from-[#B8862B] to-[#F0CA6A]"
              />

              <div className="space-y-2">
                {qualityFeatures.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={feature.id}
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.1,
                        ease: EASE,
                      }}
                      whileHover={{ x: 6 }}
                      className="group relative flex gap-4 rounded-2xl py-4 pl-0 pr-3 transition-colors duration-300 hover:bg-[#F5F7FA] sm:gap-5"
                    >
              
                      <motion.div
                        initial={{ scale: 0.6, backgroundColor: "#FFFFFF" }}
                        whileInView={{ scale: 1, backgroundColor: "#06182E" }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{
                          type: "spring",
                          stiffness: 220,
                          damping: 14,
                          delay: 0.2 + index * 0.1,
                        }}
                        className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E0B04A]/60 text-[#F0CA6A] transition-transform duration-300 group-hover:rotate-[8deg] group-hover:scale-110"
                      >
                        <Icon size={20} strokeWidth={1.8} />
                      </motion.div>

                      
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-base font-bold text-[#06182E] sm:text-lg">
                            {feature.title}
                          </h3>

                          <span className="font-['Dancing_Script',cursive] text-xl font-bold leading-none text-[#B8862B]">
                            {feature.id}
                          </span>
                        </div>

                        <p className="mt-2 text-sm leading-6 text-black">
                          {feature.description}
                        </p>
                      </div>

                      
                      <motion.span
                        initial={{ scale: 0, rotate: -90 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 12,
                          delay: 0.5 + index * 0.15,
                        }}
                        className="mt-1 flex shrink-0 text-[#B8862B]"
                      >
                        <CheckCircle2 size={20} />
                      </motion.span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductQualitySection;
