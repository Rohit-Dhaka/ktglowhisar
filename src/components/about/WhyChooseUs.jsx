
import { Link } from "react-router-dom";
import { motion, MotionConfig } from "framer-motion";
import {
  ShieldCheck,
  Settings,
  Users,
  Award,
  PackageCheck,
  Headset,
  ArrowUpRight,
} from "lucide-react";

const advantages = [
  {
    id: "01",
    title: "Quality-Focused Products",
    description:
      "We emphasize product quality and consistency to support dependable industrial applications.",
    icon: ShieldCheck,
  },
  {
    id: "02",
    title: "Manufacturing Expertise",
    description:
      "Our manufacturing-focused approach helps us understand industrial product requirements.",
    icon: Settings,
  },
  {
    id: "03",
    title: "Customer-Centric Approach",
    description:
      "We prioritize customer requirements and work toward providing suitable product solutions.",
    icon: Users,
  },
  {
    id: "04",
    title: "Reliable Solutions",
    description:
      "We aim to deliver dependable products that align with customer expectations and applications.",
    icon: PackageCheck,
  },
  {
    id: "05",
    title: "Commitment to Excellence",
    description:
      "Continuous improvement and attention to detail remain important in our working approach.",
    icon: Award,
  },
  {
    id: "06",
    title: "Responsive Support",
    description:
      "We value clear communication and support throughout the customer inquiry process.",
    icon: Headset,
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const WhyChooseUs = () => {
  return (
    <MotionConfig reducedMotion="never">
      <section className="w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className=" px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between"
          >
            <motion.div
              variants={fadeUpVariants}
              className="max-w-3xl"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-0.5 w-8 rounded-full bg-[#06182E]" />

                <p className="text-xs font-semibold uppercase tracking-widest text-black sm:text-sm">
                  Why Choose Us
                </p>
              </div>

              {/* Main Heading: Serif Font + Gold Color */}
              <h2 className=" text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl">
                Your Trusted Partner for {" "}
                <span className="font-serif text-[#C9972B]" >
                 Industrial Solutions

                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-black sm:text-base sm:leading-8">
                We focus on quality, reliability, and customer satisfaction to
                provide industrial abrasive and polishing solutions aligned
                with your business requirements.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUpVariants}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#06182E] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 lg:self-auto"
              >
                Contact Us
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Advantages Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 overflow-hidden rounded border-l border-t border-[#E5E7EB] sm:grid-cols-2 lg:grid-cols-3"
          >
            {advantages.map(({ id, title, description, icon: Icon }) => (
              <motion.div
                key={id}
                variants={cardVariants}
                whileHover={{ y: -3 }}
                className="group flex min-h-[260px] flex-col justify-between border-b border-r border-[#E5E7EB] p-6 transition-colors duration-300 hover:bg-[#06182E] sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon
                      size={30}
                      strokeWidth={1.5}
                      className="text-[#06182E] transition-colors duration-300 group-hover:text-white"
                    />
                  </motion.div>

                  <span className="text-sm font-bold tracking-wider text-black transition-colors duration-300 group-hover:text-white/60">
                    {id}
                  </span>
                </div>

                <div className="mt-10">
                  <h3 className="text-lg font-bold text-[#06182E] transition-colors duration-300 group-hover:text-white sm:text-xl">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black transition-colors duration-300 group-hover:text-white/75">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default WhyChooseUs;
