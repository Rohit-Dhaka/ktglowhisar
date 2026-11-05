import { ArrowRight, MessageCircle, MoveUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const ContactCTA = () => {
  const reduce = useReducedMotion();

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: reduce ? 0 : 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
  };

  return (
    <section className="bg-white px-4 sm:px-8 lg:px-12 py-16  sm:py-20  lg:py-24">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 40, scale: reduce ? 1 : 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative overflow-hidden rounded-3xl bg-[#06182E] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >
          
          <motion.div
            aria-hidden="true"
            animate={reduce ? undefined : { scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80"
          />

          <motion.div
            aria-hidden="true"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full border border-dashed border-[#E0B04A]/30 sm:h-64 sm:w-64"
          />

          <motion.div
            aria-hidden="true"
            animate={reduce ? undefined : { opacity: [0.3, 0.6, 0.3], scale: [1, 1.12, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-[#E0B04A]/20 blur-3xl"
          />

          <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#0F2B46]/70 blur-3xl" />

          
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            
            <div>
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 backdrop-blur-sm sm:text-sm"
              >
                <motion.span
                  animate={reduce ? undefined : { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-2 w-2 rounded-full bg-[#E0B04A]"
                />
                Let&apos;s Work Together
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Have a Project
                <span className="block font-serif font-bold text-[#E0B04A]">
                  in Mind?
                  <motion.span
                    aria-hidden="true"
                    animate={reduce ? undefined : { opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-1 inline-block h-[0.8em] w-[3px] translate-y-[0.1em] bg-[#E0B04A]"
                  />
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8"
              >
                Whether you need product information, a custom solution,
                or a business partnership, our team is ready to help.
                Let&apos;s discuss your requirements and find the right solution.
              </motion.p>
            </div>

            
            <motion.div
              variants={fadeLeft}
              className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm sm:p-7"
            >
              <h3 className="font-serif text-xl font-bold text-white sm:text-2xl">
                Let&apos;s Start a{" "}
                <span className="text-[#E0B04A]">Conversation</span>
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Get in touch with our team today. We will help you with
                your enquiries and business requirements.
              </p>

              <div className="mt-7 flex flex-col gap-3">
                <motion.a
                  href="#contact-form"
                  whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#D49A2A] to-[#F0C968] px-6 py-3.5 text-sm font-semibold text-[#06182E] shadow-[0_10px_30px_-8px_rgba(224,176,74,0.6)]"
                >
                  Send an Enquiry
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.a>

                <motion.a
                  href="#contact-information"
                  whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#E0B04A]/60 hover:bg-white/10"
                >
                  Contact Our Team
                  <MoveUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </motion.a>
              </div>

              <div className="mt-6 border-t border-white/15 pt-5">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <MessageCircle size={18} className="shrink-0 text-[#E0B04A]" />
                  <span>We are ready to assist your business.</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;