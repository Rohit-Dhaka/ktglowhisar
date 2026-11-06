import {
  CheckCircle2,
  Microscope,
  Settings,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, MotionConfig } from "framer-motion";
import QualityImg from "../../assets/images/qualityimg.png";

const qualityFeatures = [
  {
    id: "01",
    title: "Material & Product Inspection",
    description:
      "Abrasive discs, buffing wheels, and polishing compounds are evaluated against relevant product requirements to support reliable performance.",
    icon: Microscope,
  },
  {
    id: "02",
    title: "Process & Performance Monitoring",
    description:
      "Grinding, surface preparation, and polishing performance are monitored to support consistent finishing results and product reliability.",
    icon: Settings,
  },
  {
    id: "03",
    title: "Quality & Finish Consistency",
    description:
      "Finished products are checked against defined specifications to help maintain dependable quality, smooth surfaces, and consistent steel polishing results.",
    icon: CheckCircle2,
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeftVariants = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const QualityAssurance = () => {
  return (
    <MotionConfig reducedMotion="never">
      <section className="w-full overflow-hidden bg-[#eff0f0] py-8 sm:py-10">
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            
            <motion.div
              variants={fadeLeftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="lg:sticky lg:top-36">
                
                <motion.div
                  variants={fadeUpVariants}
                  className="mb-4 flex items-center gap-3"
                >
                  <span className="h-0.5 w-8 rounded-full bg-[#06182E]" />

                  <p className="text-xs font-semibold uppercase tracking-widest text-black sm:text-sm">
                    Quality Assurance
                  </p>
                </motion.div>

                <motion.h2
                  variants={fadeUpVariants}
                  className="font-serif text-3xl font-bold leading-tight sm:text-4xl"
                >
                  Quality Is at the{" "}
                  <span className="font-serif text-[#C9972B]">
                    Core of Everything We Do
                  </span>
                </motion.h2>

                <motion.p
                  variants={fadeUpVariants}
                  className="mt-5 text-sm leading-7 text-black sm:text-base sm:leading-8"
                >
                  We focus on quality-oriented manufacturing practices, product
                  inspection, and process consistency to support reliable
                  industrial abrasive and polishing solutions.
                </motion.p>

                <motion.div
                  variants={fadeUpVariants}
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.4 }}
                  className="relative mt-8 overflow-hidden rounded border border-[#E5E7EB] bg-[#F5F6F8]"
                >
                  <motion.img
                    src={QualityImg}
                    alt="Industrial quality inspection and manufacturing"
                    initial={{ opacity: 0, scale: 1.04 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="h-[240px] w-full object-cover sm:h-[300px]"
                    loading="lazy"
                  />

                  <span className="absolute left-3 top-3 rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-xs font-semibold text-[#06182E]">
                    Quality-Focused Manufacturing
                  </span>
                </motion.div>

                
                <motion.div
                  variants={fadeUpVariants}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-8 w-full sm:w-fit"
                >
                  <Link
                    to="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#06182E] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:inline-flex sm:w-auto"
                  >
                    Discuss Quality Requirements
                    <ArrowRight size={18} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="lg:col-span-7"
            >
              <motion.p
                variants={fadeUpVariants}
                className="text-xs font-semibold uppercase tracking-widest text-black sm:text-sm"
              >
                Our Quality Process
              </motion.p>

              <motion.h3
                variants={fadeUpVariants}
                className="mt-3 text-2xl font-bold leading-tight text-[#06182E] sm:text-3xl"
              >
                Maintaining Standards Through Every Stage
              </motion.h3>

              <motion.p
                variants={fadeUpVariants}
                className="mt-4 max-w-2xl text-sm leading-7 text-black sm:text-base sm:leading-8"
              >
                From material selection to finished product inspection, we aim
                to meet defined specifications and customer expectations.
              </motion.p>

              <ol className="relative mt-10">
                <motion.span
                  aria-hidden="true"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ transformOrigin: "top" }}
                  className="absolute bottom-6 left-5 top-6 w-px bg-[#E5E7EB]"
                />

                {qualityFeatures.map(
                  ({ id, title, description, icon: Icon }) => (
                    <motion.li
                      key={id}
                      variants={fadeUpVariants}
                      className="group relative pb-10 pl-16 last:pb-0"
                    >
                      <motion.span
                        whileHover={{
                          scale: 1.08,
                          rotate: 5,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#06182E] transition-colors duration-300 group-hover:border-[#06182E] group-hover:bg-[#06182E] group-hover:text-white"
                      >
                        <Icon size={18} strokeWidth={1.8} />
                      </motion.span>

                      <p className="text-xs font-bold uppercase tracking-widest text-black">
                        Stage {id}
                      </p>

                      <h4 className="mt-1 text-lg font-bold text-[#06182E] sm:text-xl">
                        {title}
                      </h4>

                      <p className="mt-2 max-w-xl text-sm leading-7 text-black">
                        {description}
                      </p>
                    </motion.li>
                  )
                )}
              </ol>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default QualityAssurance;