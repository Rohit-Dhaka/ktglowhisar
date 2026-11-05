
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
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
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
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

const faqs = [
  {
    question: "What types of industrial abrasive products do you offer?",
    answer:
      "We offer a range of industrial abrasive and polishing products, including cutting and grinding wheels, flap discs, fiber discs, non-woven polishing wheels, and polishing and buffing wheels.",
  },
  {
    question: "How can I choose the right product for my application?",
    answer:
      "The right product depends on your material, application, finishing requirements, and operating conditions. Contact our team with your requirements, and we will help you identify a suitable solution.",
  },
  {
    question: "Do you provide customized product solutions?",
    answer:
      "We understand that industrial applications may require specific product requirements. Contact our team to discuss your application, specifications, and customization possibilities.",
  },
  {
    question: "How can I request a product quotation?",
    answer:
      "You can submit your requirements through our Request a Quote page or contact our team directly. Please include product type, quantity, and application details for a more accurate quotation.",
  },
  {
    question: "Are your products suitable for industrial applications?",
    answer:
      "Our products are designed for industrial abrasive, grinding, and polishing applications. Product suitability depends on the material and working conditions, so please share your requirements with our team.",
  },
  {
    question: "How can I contact your team?",
    answer:
      "You can reach us through our Contact Us page, request a quotation online, or contact us directly by phone or email. Our team will help you with your product inquiries.",
  },
];

const AboutCTA = () => {
  const reduce = useReducedMotion();
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="w-full bg-[#F5F7FA] px-4 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-24">
      {/* CTA SECTION */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: reduce ? 0 : 0.9, ease: EASE }}
        className="relative overflow-hidden rounded-3xl bg-[#06182E]"
      >
        {/* Decorative Circles */}
        <motion.div
          aria-hidden="true"
          animate={
            reduce
              ? undefined
              : { scale: [1, 1.06, 1], rotate: [0, 8, 0] }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
        />

        <motion.div
          aria-hidden="true"
          animate={
            reduce
              ? undefined
              : { scale: [1, 1.08, 1], rotate: [0, -10, 0] }
          }
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid grid-cols-1 items-center gap-10 px-5 py-10 sm:px-10 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-20"
        >
          {/* LEFT CONTENT */}
          <div>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white sm:text-sm"
            >
              <motion.span
                animate={
                  reduce
                    ? undefined
                    : { scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }
                }
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 rounded-full bg-white"
              />
              Let's Work Together
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              Ready to Find the
              <span className="mt-2 block font-serif text-[#C9972B]">
                Right Industrial Solution?
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8"
            >
              We are committed to helping businesses with reliable industrial
              abrasive and polishing solutions. Connect with our team to discuss
              your requirements.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-3"
            >
              <motion.div
                whileHover={reduce ? undefined : { y: -4, scale: 1.04 }}
                whileTap={reduce ? undefined : { scale: 0.96 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
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
                whileHover={reduce ? undefined : { y: -4, scale: 1.04 }}
                whileTap={reduce ? undefined : { scale: 0.96 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
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

          {/* RIGHT CARD */}
          <motion.div
            variants={cardIn}
            whileHover={reduce ? undefined : { y: -6 }}
            className="rounded-2xl border border-white/15 bg-white/5 p-5 transition-colors duration-300 hover:border-white/30 sm:p-8"
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={reduce ? undefined : { scale: 1.1, rotate: 8 }}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#06182E]"
            >
              <MessageCircle size={24} />
            </motion.div>

            <h3 className="mt-6 text-xl font-bold text-white sm:text-2xl">
              Have a Project in Mind?
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">
              Our team is ready to understand your requirements and help you
              explore suitable product solutions.
            </p>

            <div className="mt-6 border-t border-white/15 pt-5">
              <Link
                to="/request-quote"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#CBD5E1] transition-colors hover:text-white"
              >
                Get in Touch
                <motion.span
                  animate={reduce ? undefined : { x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex"
                >
                  <ArrowRight size={17} />
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* FAQ SECTION */}
      <div className="mx-auto mt-16 l sm:mt-20 lg:mt-24">
      <motion.div
  initial={reduce ? false : { opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: reduce ? 0 : 0.7, ease: EASE }}
  className="mb-10 grid grid-cols-1 items-center gap-6 sm:mb-14 lg:grid-cols-2 lg:gap-12"
>
  {/* LEFT CONTENT */}
  <div>
    <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#06182E] sm:text-sm">
      <span className="h-[2px] w-10 rounded-full bg-[#06182E]" />
      Frequently Asked Questions
    </span>

    <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
      Got Questions?
      <span className="mt-1 block font-serif italic text-[#C9972B]">
        We Have Answers.
      </span>
    </h2>
  </div>

  {/* RIGHT CONTENT */}
  <div>
    <p className="max-w-2xl text-sm leading-7 text-[#334155] sm:text-base sm:leading-8 lg:text-[17px] lg:leading-10">
      Explore answers to common questions about our industrial abrasive
      and polishing products, manufacturing capabilities, product
      applications, and quotation process. Our team is committed to
      providing reliable .
    </p>
  </div>
</motion.div>

        {/* FAQ ACCORDION */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <motion.div
                key={faq.question}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: reduce ? 0 : 0.5,
                  delay: reduce ? 0 : index * 0.05,
                  ease: EASE,
                }}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-[#06182E]/20 bg-white"
                    : "border-[#E2E8F0] bg-white hover:border-[#06182E]/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left sm:px-6 sm:py-6"
                >
                  <span
                    className={`text-sm font-semibold leading-6 sm:text-base ${
                      isOpen ? "text-[#06182E]" : "text-[#334155]"
                    }`}
                  >
                    <span className="mr-3 font-serif text-[#C9972B]">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isOpen
                        ? "border-[#06182E] bg-[#06182E] text-white"
                        : "border-[#E2E8F0] bg-[#F8FAFC] text-[#06182E]"
                    }`}
                  >
                    <ChevronDown
                      size={17}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={
                    reduce
                      ? { height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }
                      : {
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }
                  }
                  transition={{
                    duration: reduce ? 0 : 0.3,
                    ease: EASE,
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <div className="border-t border-[#E2E8F0] pt-4">
                      <p className="pl-8 text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ BOTTOM CTA */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduce ? 0 : 0.6, ease: EASE }}
          className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#E2E8F0] bg-white px-5 py-6 sm:flex-row sm:px-8"
        >
          <div>
            <h3 className="text-base font-bold text-[#06182E] sm:text-lg">
              Still have questions?
            </h3>
            <p className="mt-1 text-sm leading-6 text-[#64748B]">
              Our team is here to help you find the right solution.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#06182E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#102C4D]"
          >
            Contact Our Team
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
