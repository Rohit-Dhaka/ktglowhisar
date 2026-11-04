import { motion, useReducedMotion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Settings,
  Truck,
  Handshake,
  Factory,
} from "lucide-react";

import whyImage from "../../assets/images/Hero4.png";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Strict quality standards ensure durable and dependable products.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Professional knowledge and experience in industrial solutions.",
  },
  {
    icon: Settings,
    title: "Precision Engineering",
    description: "Advanced processes focused on accuracy and consistency.",
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Efficient supply and timely delivery for your business.",
  },
  {
    icon: Factory,
    title: "Advanced Manufacturing",
    description: "Modern manufacturing processes for consistent product performance.",
  },
  {
    icon: Handshake,
    title: "Customer Satisfaction",
    description: "Dedicated support and reliable solutions to meet customer needs.",
  },
];

const badge = {
  value: "100%",
  line1: "Satisfaction",
  line2: "Guarantee",
};

const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const featureItem = {
  hidden: { opacity: 0, y: 18, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.06 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: EASE },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -10 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.7, delay: 0.25, ease: EASE },
  },
};

const WhyChooseUs = () => {
  const shouldReduceMotion = useReducedMotion();

  const viewport = {
    once: true,
    amount: 0.15,
  };

  return (
    <section className="relative isolate flex flex-col overflow-hidden bg-[#06182E] lg:block">
      {/* Google font for cursive typography */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
      />

      {/* LEFT: CONTENT (Compact py-8 sm:py-10) */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="lg:max-w-[620px]"
        >
          {/* Small Label */}
          <motion.div
            variants={fadeUp}
            className="mb-2 flex items-center gap-2.5 text-[#E0B04A]"
          >
            <span aria-hidden="true" className="text-xs">✦</span>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] sm:text-xs">
              Why Choose Us
            </p>
            <span aria-hidden="true" className="text-xs">✦</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-[28px] font-extrabold leading-[1.12] tracking-tight text-white sm:text-[38px] lg:text-[44px]"
          >
            Your Trusted Partner
            <motion.span
              animate={
                shouldReduceMotion
                  ? undefined
                  : { backgroundPosition: ["0% 50%", "200% 50%"] }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="mt-0.5 block bg-[linear-gradient(90deg,#C9972B,#F0CA6A,#C9972B)] bg-[length:200%_auto] bg-clip-text pb-1 pr-2 font-['Dancing_Script',cursive] text-[1.12em] font-bold tracking-normal text-transparent"
            >
              in Industrial Solutions
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-2.5 max-w-[500px] text-[13.5px] leading-[1.65] text-white/75 sm:text-[14.5px]"
          >
            We focus on delivering high-grade abrasive products backed by technical
            precision, dependable service, and commitment to surface perfection.
          </motion.p>

          {/* Features Grid (Compact gaps) */}
          <motion.div
            variants={container}
            className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-6"
          >
            {features.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={featureItem}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -4,
                        transition: { duration: 0.2, ease: "easeOut" },
                      }
                }
                className="group flex cursor-default flex-col items-center text-center"
              >
                {/* Feature Icon (48px compact) */}
                <motion.span
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { rotate: 8, scale: 1.12 }
                  }
                  transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E0B04A]/50 text-[#E0B04A] transition-colors duration-300 group-hover:border-[#E0B04A] group-hover:bg-[#E0B04A]/15"
                >
                  <Icon size={20} strokeWidth={1.75} />
                </motion.span>

                {/* Feature Title */}
                <h3 className="mt-2 text-[13.5px] font-bold text-white transition-colors duration-300 group-hover:text-[#E0B04A] sm:text-[14px]">
                  {title}
                </h3>

                {/* Feature Description */}
                <p className="mt-0.5 max-w-[220px] text-[11.5px] leading-[1.55] text-white/65 sm:text-[12px]">
                  {description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* RIGHT: IMAGE (Compact mobile height) */}
      <div className="relative h-[220px] w-full overflow-hidden sm:h-[260px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[48%] lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]">
        <motion.img
          src={whyImage}
          alt="KT Glow precision abrasives for a flawless steel finish"
          loading="lazy"
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="h-full w-full object-cover object-center"
        />

        {/* Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#06182E]/50 via-transparent to-transparent" />

        {/* Compact Floating Round Badge */}
        <motion.div
          variants={badgeVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="absolute right-4 top-4 z-10 sm:right-6 sm:top-6"
        >
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, -4, 0] }
            }
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-[96px] w-[96px] flex-col items-center justify-center rounded-full border-2 border-[#E0B04A] bg-[#FBF8F2] text-center shadow-lg sm:h-[115px] sm:w-[115px]"
          >
            <Award size={18} strokeWidth={1.8} className="text-[#B8862B]" />

            <p className="mt-0.5 text-[20px] font-extrabold leading-none text-[#06182E] sm:text-[24px]">
              {badge.value}
            </p>

            <p className="mt-0.5 text-[8.5px] font-bold uppercase leading-tight tracking-wide text-[#06182E] sm:text-[9.5px]">
              {badge.line1}
              <br />
              {badge.line2}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;