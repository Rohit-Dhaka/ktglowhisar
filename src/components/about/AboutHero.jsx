import {
  ArrowRight,
  ChevronRight,
  Factory,
  Award,
  Package,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import AboutImg from "../../assets/images/abouthero.png";

const companyDetails = [
  {
    id: "01",
    icon: Award,
    title: "Our Trademark",
    value: "KT Glow",
  },
  {
    id: "02",
    icon: Package,
    title: "Product Category",
    value: "Steel Polishing & Abrasives",
  },
  {
    id: "03",
    icon: MapPin,
    title: "Our Location",
    value: "Hisar, Haryana",
  },
  {
    id: "04",
    icon: ShieldCheck,
    title: "Our Commitment",
    value: "Quality & Consistency",
  },
];


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 35,
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

const fadeRightVariants = {
  hidden: {
    opacity: 0,
    x: 45,
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

const AboutHero = () => {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#06182E]">

      
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <img
          src={AboutImg}
          alt="Industrial manufacturing facility"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      
      <div className="absolute inset-0 bg-[#101713]/65" />

      
      <div className="absolute inset-0 bg-gradient-to-r from-[#101713]/90 via-[#101713]/70 to-[#101713]/40" />

      
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute left-0 top-0 z-20 w-full px-4 pt-6 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/70 sm:text-sm">

          <Link
            to="/"
            className="transition-colors hover:text-[#D9A441]"
          >
            Home
          </Link>

          <ChevronRight size={15} />

          <span className="text-[#D9A441]">
            About Us
          </span>

        </div>
      </motion.div>

      
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-8">

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_350px] lg:gap-14 xl:grid-cols-[1fr_380px]">

          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="min-w-0"
          >

            
            <motion.div
              variants={fadeUpVariants}
              className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#D9A441]/70 text-[#D9A441] sm:h-16 sm:w-16"
            >
              <Factory size={26} strokeWidth={1.5} />
            </motion.div>

            
            <motion.div
              variants={fadeUpVariants}
              className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D9A441] sm:text-sm"
            >
              <span>✦</span>
              <span>About Our Company</span>
              <span>✦</span>
            </motion.div>

            
            <motion.h1
              variants={fadeUpVariants}
              className="max-w-4xl font-serif text-4xl font-medium italic leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl"
            >
              Delivering Excellence

              <span className="mt-1 block text-[#D9A441]">
                Through Innovation
              </span>
            </motion.h1>

            
            <motion.p
              variants={fadeUpVariants}
              className="mt-6 max-w-2xl text-sm leading-7 text-white/85 sm:mt-7 sm:text-base sm:leading-8"
            >
              We are committed to providing reliable industrial abrasive
              and polishing solutions through quality manufacturing,
              advanced technology, and customer-focused service.
            </motion.p>

            
            <motion.div
              variants={fadeUpVariants}
              className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap"
            >

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D9A441] px-6 py-3.5 text-sm font-semibold text-[#06182E] transition-colors hover:bg-[#E8BC62] sm:px-7"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#D9A441] hover:bg-[#D9A441] hover:text-[#06182E] sm:px-7"
                >
                  Explore Products
                </Link>
              </motion.div>

            </motion.div>

          </motion.div>

          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative border-l border-white/15 pl-5 sm:pl-7 lg:pl-8"
          >

            <div className="divide-y divide-white/15">

              {companyDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    variants={fadeRightVariants}
                    className="group flex items-center gap-4 py-5 first:pt-2 last:pb-2 sm:gap-5 sm:py-6"
                  >

                    
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        borderColor: "#D9A441",
                      }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D9A441]/60 text-[#D9A441] transition-colors sm:h-14 sm:w-14"
                    >
                      <Icon size={22} strokeWidth={1.7} />
                    </motion.div>

                    
                    <div className="min-w-0">

                      <p className="text-xs font-medium uppercase tracking-wider text-white/55 sm:text-sm">
                        {item.title}
                      </p>

                      <h3 className="mt-1 text-base font-semibold leading-6 text-white transition-colors group-hover:text-[#D9A441] sm:text-lg">
                        {item.value}
                      </h3>

                    </div>

                  </motion.div>
                );
              })}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default AboutHero;