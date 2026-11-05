import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Factory,
  Layers,
  Settings,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";


import processBg from "../../assets/images/Hero4.png";



const EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

const lineReveal = {
  hidden: { y: "115%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const stepItem = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: EASE },
  },
};

/* =========================================================
   PROCESS STEPS DATA
========================================================= */

const processSteps = [
  {
    id: "01",
    icon: Factory,
    title: "Material Selection",
    subtitle: "Purity & Grading",
    description:
      "Carefully selecting high-grade abrasive grains and bonding agents to ensure long-term durability.",
  },
  {
    id: "02",
    icon: Layers,
    title: "Precision Compounding",
    subtitle: "Engineered Bonding",
    description:
      "Formulating consistent grain distribution using automated pressing and resin layering.",
  },
  {
    id: "03",
    icon: Settings,
    title: "Thermal Processing",
    subtitle: "Controlled Curing",
    description:
      "Precision baking and heat-tempering under strict temperature cycles for optimum structural hardness.",
  },
  {
    id: "04",
    icon: CheckCircle2,
    title: "Quality Certification",
    subtitle: "100% Inspected",
    description:
      "Rigorous speed testing, balance check, and finish inspection before dispatch to clients.",
  },
];



const ManufacturingProcess = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#06182E] py-8 sm:py-10">
      {/* Google font for cursive typography */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
      />

     
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={processBg}
          alt="KT Glow manufacturing process and steel workshop"
          className="h-full w-full object-cover object-center opacity-25"
          loading="lazy"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#06182E]/95 via-[#06182E]/88 to-[#06182E]/98 backdrop-blur-[1px]" />
      </div>

      
      <motion.div
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.15, 1],
                opacity: [0.35, 0.65, 0.35],
              }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 top-1/4 z-0 h-[280px] w-[280px] rounded-full bg-[#E0B04A]/20 blur-[100px] lg:h-[420px] lg:w-[420px]"
      />

    
      <div className="relative z-10  px-4 sm:px-8 lg:px-12">
     
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            {/* Top Subtitle with Gold Dash */}
            <motion.div variants={fadeUp} className="mb-2 flex items-center gap-2.5 text-[#E0B04A]">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 34 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="h-0.5 shrink-0 bg-[#E0B04A]"
              />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] sm:text-xs">
                Our Manufacturing Process
              </p>
            </motion.div>

            {/* EXPANDED HEADING WITH CURSIVE ACCENT */}
            <h2 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[44px] lg:text-[52px]">
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineReveal} className="block">
                  From Raw Materials
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-2">
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
                    className="inline-block bg-[linear-gradient(90deg,#C9972B,#F0CA6A,#C9972B)] bg-[length:200%_auto] bg-clip-text pr-2 font-['Dancing_Script',cursive] font-bold tracking-normal text-transparent"
                  >
                    to Reliable Products
                  </motion.span>
                </motion.span>
              </span>
            </h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="max-w-md text-[13.5px] leading-[1.7] text-white/70 sm:text-[15px]"
          >
            Every phase of production is calibrated to ensure exact grain dispersion,
            unyielding bonding strength, and mirror-consistent finishing results.
          </motion.p>
        </motion.div>

        {/* ===================================================
            CONNECTED PROCESS PIPELINE (NO BOX CARDS)
        =================================================== */}
        <div className="relative mt-6 sm:mt-10">
          {/* Continuous Glowing Golden Horizontal Track (Desktop) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[5%] right-[5%] top-[28px] hidden h-[2px] bg-gradient-to-r from-[#E0B04A]/10 via-[#E0B04A]/60 to-[#E0B04A]/10 lg:block"
          >
            {/* Animated shimmer beam traveling down the pipeline */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent"
            />
          </div>

          {/* Process Timeline Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          >
            {processSteps.map((step, idx) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  variants={stepItem}
                  className="group relative flex flex-col items-start lg:items-center lg:text-center"
                >
                  {/* Step Milestone Node on the Track */}
                  <div className="relative mb-4 flex items-center justify-center">
                    {/* Outer glowing pulsing ring */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E0B04A]/40 bg-[#06182E]/90 shadow-[0_0_20px_rgba(224,176,74,0.18)] backdrop-blur-md transition-all duration-300 group-hover:border-[#E0B04A] group-hover:shadow-[0_0_30px_rgba(224,176,74,0.35)]">
                      <motion.span
                        whileHover={reduce ? undefined : { scale: 1.15, rotate: 8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="flex text-[#E0B04A]"
                      >
                        <Icon size={22} strokeWidth={1.75} />
                      </motion.span>
                    </div>

                    {/* Step ID Tag pinned to node */}
                    <span className="absolute -bottom-2 rounded-full border border-[#E0B04A]/30 bg-[#06182E] px-2 py-0.2 text-[9.5px] font-extrabold uppercase tracking-widest text-[#E0B04A]">
                      Step {step.id}
                    </span>
                  </div>

                  {/* Subtitle tag */}
                  <span className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#E0B04A]/80">
                    {step.subtitle}
                  </span>

                  {/* Step Title */}
                  <h3 className="mt-1 text-[17px] font-bold text-white transition-colors duration-300 group-hover:text-[#E0B04A] sm:text-[18px]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 max-w-[270px] text-[13px] leading-[1.65] text-white/65">
                    {step.description}
                  </p>

                  {/* Subtle directional connector for desktop */}
                  {idx !== processSteps.length - 1 && (
                    <div className="absolute -right-3 top-5 hidden text-[#E0B04A]/40 lg:block">
                      <ArrowRight size={16} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcess;