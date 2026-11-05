import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  MessageCircle,
  Package,
  MoveUpRight,
} from "lucide-react";



const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};


const wipe = {
  hidden: {
    opacity: 0,
    x: -24,
    clipPath: "inset(-20% 100% -20% -5%)",
  },
  show: {
    opacity: 1,
    x: 0,
    clipPath: "inset(-20% -5% -20% -5%)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};


const particles = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37 + 8) % 100}%`,
  size: 3 + (i % 3) * 2,
  duration: 9 + (i % 5) * 2,
  delay: (i * 0.8) % 7,
  rise: 280 + (i % 4) * 70,
}));



const Magnetic = ({ children, className = "" }) => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 14, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 220, damping: 14, mass: 0.3 });

  const onMove = (e) => {
    if (reduce) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};



const ProductContactSection = () => {
  const reduce = useReducedMotion();

  
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [9, -9]), {
    stiffness: 180,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-9, 9]), {
    stiffness: 180,
    damping: 18,
  });
  const gx = useTransform(px, [0, 1], [0, 100]);
  const gy = useTransform(py, [0, 1], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(260px circle at ${gx}% ${gy}%, rgba(240,202,106,0.18), transparent 65%)`;

  const onCardMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };

  const onCardLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <section className="relative overflow-hidden bg-[#06182E] py-8 sm:py-10 text-white">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
      />

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-dashed border-[#E0B04A]/25"
        />

        <motion.div
          animate={reduce ? undefined : { rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10"
        />

        <motion.div
          animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-white/10"
        />

        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#0F2B46]/60 to-transparent" />

        
        <motion.div
          animate={
            reduce
              ? undefined
              : { y: [0, -30, 0], scale: [1, 1.15, 1], opacity: [0.35, 0.6, 0.35] }
          }
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-10 right-[15%] h-[280px] w-[280px] rounded-full bg-[#E0B04A]/20 blur-3xl"
        />

        
        {!reduce &&
          particles.map((p, i) => (
            <motion.span
              key={i}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -p.rise, opacity: [0, 0.9, 0] }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeOut",
              }}
              style={{ left: p.left, width: p.size, height: p.size }}
              className="absolute bottom-0 rounded-full bg-[#F0CA6A] shadow-[0_0_10px_2px_rgba(240,202,106,0.6)]"
            />
          ))}
      </div>

      <div className="relative px-4 sm:px-8 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0F2B46]/50 p-6 backdrop-blur-sm sm:p-10 lg:p-14"
        >
          
          {!reduce && (
            <motion.span
              aria-hidden="true"
              animate={{ x: ["-100%", "300%"] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-[#F0CA6A] to-transparent"
            />
          )}

          
          <motion.div
            aria-hidden="true"
            animate={reduce ? undefined : { y: [0, -12, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-5 top-5 hidden text-[#E0B04A]/10 sm:right-10 sm:top-10 sm:block"
          >
            <Package size={150} strokeWidth={0.8} />
          </motion.div>

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-8"
            >
              
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-[#E0B04A]/40 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 sm:text-sm"
              >
                <motion.span
                  animate={reduce ? undefined : { scale: [1, 1.25, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex text-[#E0B04A]"
                >
                  <MessageCircle size={15} />
                </motion.span>
                Product Enquiry
              </motion.span>

              
              <h2 className="mt-6 max-w-3xl text-[34px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[46px] lg:text-[56px] xl:text-[64px]">
                <motion.span variants={wipe} className="block">
                  Looking For The
                </motion.span>

                <motion.span variants={wipe} className="mt-1 block pb-2">
                  <span className="inline-block bg-[linear-gradient(90deg,#C9972B,#F0CA6A,#C9972B)] bg-clip-text pr-2 font-['Dancing_Script',cursive] text-[1.15em] font-bold tracking-normal text-transparent">
                    Right Product?
                  </span>
                </motion.span>
              </h2>

              
              <motion.svg
                variants={fadeUp}
                viewBox="0 0 300 20"
                aria-hidden="true"
                className="-mt-1 h-5 w-[200px] sm:w-[260px]"
              >
                <defs>
                  <linearGradient id="contact-scribble" x1="0" x2="1">
                    <stop offset="0%" stopColor="#C9972B" />
                    <stop offset="100%" stopColor="#F0CA6A" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M5 12 C 60 2, 120 20, 180 8 S 270 6, 295 12"
                  fill="none"
                  stroke="url(#contact-scribble)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, delay: 0.9, ease: "easeInOut" }}
                />
              </motion.svg>

              
              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
              >
                Have a specific requirement or need help choosing the
                right industrial solution? Connect with our team to
                discuss your product needs and request a quotation.
              </motion.p>

              
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              >
                <Magnetic>
                  <a
                    href="/contact#contact-form"
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(90deg,#D4A031,#F0CA6A)] px-7 py-3.5 text-sm font-bold text-[#06182E] shadow-[0_12px_30px_rgba(224,176,74,0.3)] sm:w-auto"
                  >
                    Request A Quote
                    <motion.span
                      animate={
                        reduce ? undefined : { x: [0, 3, 0], y: [0, -3, 0] }
                      }
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex"
                    >
                      <ArrowUpRight size={18} />
                    </motion.span>
                  </a>
                </Magnetic>

                <Magnetic>
                  <a
                    href="/contact"
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#E0B04A] hover:bg-white/10 sm:w-auto"
                  >
                    Contact Our Team
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </Magnetic>
              </motion.div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
              className="lg:col-span-4"
              style={{ perspective: 900 }}
            >
              <motion.div
                onMouseMove={onCardMove}
                onMouseLeave={onCardLeave}
                style={
                  reduce
                    ? undefined
                    : { rotateX, rotateY, transformStyle: "preserve-3d" }
                }
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#06182E]/60 p-5 transition-colors duration-300 hover:border-[#E0B04A]/50 sm:p-6"
              >
                
                {!reduce && (
                  <motion.div
                    aria-hidden="true"
                    style={{ background: glare }}
                    className="pointer-events-none absolute inset-0"
                  />
                )}

           
                <div className="relative h-12 w-12">
                  {!reduce &&
                    [0, 1].map((i) => (
                      <motion.span
                        key={i}
                        aria-hidden="true"
                        animate={{ scale: [1, 1.9], opacity: [0.6, 0] }}
                        transition={{
                          duration: 2.4,
                          delay: i * 1.2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                        className="absolute inset-0 rounded-xl border border-[#E0B04A]"
                      />
                    ))}

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-[#E0B04A]/40 bg-white/5 text-[#E0B04A]">
                    <Package size={23} strokeWidth={1.8} />
                  </div>
                </div>

                <h3 className="relative mt-5 text-xl font-bold text-white sm:text-2xl">
                  Your Requirements.
                  <span className="block text-[#F0CA6A]">
                    Our Solutions.
                  </span>
                </h3>

                <p className="relative mt-3 text-sm leading-6 text-slate-300">
                  Share your specifications, project details, or
                  product requirements with our team.
                </p>

            
                <div className="relative my-5 h-px overflow-hidden bg-white/10">
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8, ease: EASE }}
                    className="absolute inset-0 origin-left bg-gradient-to-r from-[#E0B04A] to-transparent"
                  />
                </div>

                <a
                  href="/contact"
                  className="group relative flex items-center justify-between gap-3 text-sm font-semibold text-white"
                >
                  <span>Start Your Enquiry</span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:rotate-45 group-hover:border-[#E0B04A] group-hover:bg-[#E0B04A] group-hover:text-[#06182E]">
                    <MoveUpRight size={17} />
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            className="relative z-10 mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-xs leading-6 text-slate-400 sm:text-sm">
              Let&apos;s build the right solution for your business.
            </p>

            <a
              href="/products"
              className="group inline-flex items-center gap-2 text-xs font-semibold text-slate-300 transition-colors hover:text-[#F0CA6A] sm:text-sm"
            >
              Explore Product Range
              <motion.span
                animate={reduce ? undefined : { x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex"
              >
                <ArrowRight size={16} />
              </motion.span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductContactSection;