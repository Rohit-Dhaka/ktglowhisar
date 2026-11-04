import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";



const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const cardIn = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

const AboutCTA = () => {
  const reduce = useReducedMotion();

  return (
    <section className="w-full bg-[#F5F7FA] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative  overflow-hidden rounded-3xl bg-[#06182E]"
      >
        
        <motion.div
          aria-hidden="true"
          animate={reduce ? undefined : { scale: [1, 1.06, 1], rotate: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
        />
        <motion.div
          aria-hidden="true"
          animate={reduce ? undefined : { scale: [1, 1.08, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid grid-cols-1 items-center gap-10 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-20"
        >
          
          <div>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white sm:text-sm"
            >
              <motion.span
                animate={reduce ? undefined : { scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="h-2 w-2 rounded-full bg-white"
              />
              Let&apos;s Work Together
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              Ready to Find the
              <span className="mt-2 block text-[#C9972B] font-serif">
                Right Industrial Solution?
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8"
            >
              We are committed to helping businesses with reliable
              industrial abrasive and polishing solutions. Connect
              with our team to discuss your requirements.
            </motion.p>

            
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <motion.div
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#06182E] transition-colors hover:bg-[#CBD5E1] sm:px-7"
                >
                  Contact Us
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Link
                  to="/products"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#06182E] sm:px-7"
                >
                  Explore Products
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          
          <motion.div
            variants={cardIn}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-white/15 bg-white/5 p-6 transition-colors duration-300 hover:border-white/30 sm:p-8"
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, rotate: 8 }}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#06182E]"
            >
              <MessageCircle size={24} />
            </motion.div>

            <h3 className="mt-6 text-xl font-bold text-white sm:text-2xl">
              Have a Project in Mind?
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">
              Our team is ready to understand your requirements
              and help you explore suitable product solutions.
            </p>

            <div className="mt-6 border-t border-white/15 pt-5">
              <Link
                to="/request-quote"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#CBD5E1] transition-colors hover:text-white"
              >
                Get in Touch
                <motion.span
                  animate={reduce ? undefined : { x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="flex"
                >
                  <ArrowRight size={17} />
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutCTA;