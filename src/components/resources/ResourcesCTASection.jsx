import { ArrowUpRight, Headset, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const ResourcesCTASection = () => {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : 32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  return (
    <section className="bg-white px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 40, scale: reduceMotion ? 1 : 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative overflow-hidden rounded-3xl bg-[#06182E] px-6 py-12 sm:px-10 sm:py-16 lg:px-16"
        >
          {/* Background Decoration */}
          <motion.div
            aria-hidden="true"
            animate={reduceMotion ? undefined : { scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80"
          />

          <motion.div
            aria-hidden="true"
            animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full border border-white/10 sm:h-60 sm:w-60"
          />

          {/* Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="max-w-2xl">
              {/* Badge */}
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 sm:text-sm"
              >
                <Headset size={15} />
                Need Assistance?
              </motion.span>

              {/* Heading */}
              <motion.h2
                variants={fadeUp}
                className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Looking for More
                <span className="block text-[#F0CA6A] font-serif">
                  Product Information?
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
              >
                Our team is here to help you find the right industrial
                abrasive and polishing solutions. Get in touch for
                product details, technical specifications, or business enquiries.
              </motion.p>
            </div>

            {/* Actions */}
            <motion.div
              variants={fadeLeft}
              className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col"
            >
              <motion.a
                href="/contact"
                whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#06182E] transition-colors hover:bg-slate-200"
              >
                Contact Our Team
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>

              <motion.a
                href="/contact#contact-form"
                whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle size={18} />
                Send An Enquiry
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesCTASection;