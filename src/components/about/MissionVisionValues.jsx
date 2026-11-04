import { useRef } from "react";
import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Lightbulb,
  Users,
  TrendingUp,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";

import { motion, MotionConfig, useScroll, useSpring } from "framer-motion";


import A from "../../assets/images/a.png";
import B from "../../assets/images/b.png";
import C from "../../assets/images/c.png";
import D from "../../assets/images/d.png";
import E from "../../assets/images/e.png";
import F from "../../assets/images/f.png";


const missionVision = [
  {
    id: "mission",
    label: "Our Mission",
    icon: Target,
    text: "To provide dependable industrial abrasive and polishing solutions that support our customers' operational requirements through quality-focused manufacturing, product expertise, and customer-oriented service.",
    tagline: "Delivering Reliable Solutions",
  },
  {
    id: "vision",
    label: "Our Vision",
    icon: Eye,
    text: "To become a trusted name in industrial abrasive manufacturing by building lasting partnerships, maintaining product quality, and continuously developing innovative solutions for evolving industrial needs.",
    tagline: "Building a Better Future",
  },
];

/* Timeline: odd steps (01, 03, 05) = image left / text right,
   even steps (02, 04, 06) = text left / image right.
   Swap the images below with ones that match each value. */
const coreValues = [
  {
    id: "01",
    title: "Quality",
    tagline: "Built to Perform, Batch After Batch",
    description:
      "We focus on delivering reliable products through quality-oriented manufacturing practices.",
    details:
      "From raw material selection to final inspection, we follow quality-oriented practices at every stage so that each product performs consistently on the shop floor.",
    points: [
      "Careful material selection",
      "Stage-wise inspection during manufacturing",
      "Consistent finish and performance",
    ],
    icon: ShieldCheck,
    image: F,
  },
  {
    id: "02",
    title: "Innovation",
    tagline: "Better Solutions, Always Evolving",
    description:
      "We continuously explore better approaches to improve products and manufacturing solutions.",
    details:
      "We keep studying how steel finishing needs are changing and look for improvements in our products, processes and application methods.",
    points: [
      "Improving product performance",
      "Exploring better manufacturing methods",
      "Solutions for evolving industrial needs",
    ],
    icon: Lightbulb,
    image: A,
  },
  {
    id: "03",
    title: "Customer Commitment",
    tagline: "Your Requirement, Our Priority",
    description:
      "We understand customer requirements and work toward providing suitable industrial solutions.",
    details:
      "We take time to understand your application, finishing goals and production needs before recommending a product, and we stay available for support after delivery.",
    points: [
      "Application-based recommendations",
      "Responsive enquiry handling",
      "Support after delivery",
    ],
    icon: Users,
    image: B,
  },
  {
    id: "04",
    title: "Integrity",
    tagline: "Honest Dealings, Lasting Trust",
    description:
      "We believe in honest communication, responsible practices, and long-term business relationships.",
    details:
      "We communicate clearly about what our products can and cannot do, keep our commitments, and treat every customer and partner fairly.",
    points: [
      "Transparent communication",
      "Fair and responsible business practices",
      "Focus on long-term partnerships",
    ],
    icon: Heart,
    image: C,
  },
  {
    id: "05",
    title: "Continuous Improvement",
    tagline: "Better Every Day",
    description:
      "We aim to improve our processes, product quality, and operational efficiency over time.",
    details:
      "We regularly review our processes, listen to customer feedback and make steady improvements to quality, efficiency and service.",
    points: [
      "Regular process reviews",
      "Learning from customer feedback",
      "Higher efficiency and quality over time",
    ],
    icon: TrendingUp,
    image: D,
  },
  {
    id: "06",
    title: "Reliability",
    tagline: "Consistency You Can Count On",
    description:
      "We strive to maintain consistency and dependability across our products and services.",
    details:
      "Dependable quality and steady service mean you can plan your production with confidence, order after order.",
    points: [
      "Consistent product quality",
      "Dependable service and communication",
      "Same standards across every order",
    ],
    icon: BadgeCheck,
    image: E,
  },
];

const commitmentPoints = [
  "Quality-driven product solutions",
  "Precision-focused finishing",
  "Customer-oriented approach",
];



const EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
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
      ease: EASE,
    },
  },
};

const fadeLeftVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASE,
    },
  },
};

const fadeRightVariants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: EASE,
    },
  },
};

/* =========================================================
   TIMELINE ITEM
========================================================= */

const SLIDE = 70;

const TimelineItem = ({ item, index }) => {
  const Icon = item.icon;
  const imageLeft = index % 2 === 0; 

  return (
    <li className="relative pb-14 last:pb-0 md:pb-20">
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="absolute left-4 top-2 z-10 -translate-x-1/2 md:left-1/2"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#C9972B] bg-white font-serif text-xs font-bold text-[#06182E] shadow-[0_0_0_6px_rgba(201,151,43,0.15)] sm:h-11 sm:w-11 sm:text-sm">
          {item.id}
        </span>
      </motion.div>

      <div className="grid grid-cols-1 items-center gap-6 pl-12 md:grid-cols-2 md:gap-x-20 md:pl-0">
        
        <motion.div
          initial={{ opacity: 0, x: imageLeft ? -SLIDE : SLIDE }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: EASE }}
          className={`order-1 ${imageLeft ? "md:order-1" : "md:order-2"}`}
        >
          <div className="group relative">
            <div className="relative sm:mx-auto h-[300px] sm:w-[70%] overflow-hidden rounded-2xl border border-[#DCE3EC] bg-[#E2E8F0] shadow-[0_18px_40px_-20px_rgba(6,24,46,0.35)]">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/55 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9972B]/60 bg-[#06182E]/75 text-[#E0B04A] backdrop-blur-sm transition-transform duration-300 group-hover:rotate-[8deg] group-hover:scale-110">
                <Icon size={20} strokeWidth={1.8} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: imageLeft ? SLIDE : -SLIDE }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className={`order-2 ${
            imageLeft ? "md:order-2 md:text-left" : "md:order-1 md:text-right"
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C9972B]">
            Step {item.id}
          </span>

          <h4 className="mt-2 font-serif text-2xl font-bold italic text-[#06182E] sm:text-3xl">
            {item.title}
          </h4>

          <p className="mt-1 font-serif text-sm font-semibold italic text-[#C9972B] sm:text-base">
            {item.tagline}
          </p>

          <p
            className={`mt-3 max-w-md text-sm leading-7 text-[#334155] sm:text-base ${
              imageLeft ? "" : "md:ml-auto"
            }`}
          >
            {item.description}
          </p>

          <p
            className={`mt-3 max-w-md text-sm leading-7 text-[#475569] ${
              imageLeft ? "" : "md:ml-auto"
            }`}
          >
            {item.details}
          </p>

          <ul
            className={`mt-5 max-w-md space-y-2.5 ${
              imageLeft ? "" : "md:ml-auto"
            }`}
          >
            {item.points.map((point) => (
              <li
                key={point}
                className={`flex items-start gap-2.5 text-sm font-medium leading-6 text-[#06182E] ${
                  imageLeft ? "" : "md:flex-row-reverse md:text-right"
                }`}
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#06182E] text-[10px] text-[#E0B04A]">
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <span
            className={`mt-5 flex items-center gap-2 ${
              imageLeft ? "" : "md:justify-end"
            }`}
          >
            <span className="h-[2px] w-10 rounded-full bg-gradient-to-r from-[#C9972B] to-[#F0CA6A]" />
            <ArrowUpRight size={16} className="text-[#C9972B]" />
          </span>
        </motion.div>
      </div>
    </li>
  );
};


const CoreValuesTimeline = ({ viewport }) => {
  const timelineRef = useRef(null);

  
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  return (
    <div className="mt-16 sm:mt-20">
      {/* HEADER */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.p
          variants={fadeUpVariants}
          className="text-xs font-semibold uppercase tracking-widest text-black sm:text-sm"
        >
          Our Core Values
        </motion.p>

        <motion.h3
          variants={fadeUpVariants}
          className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
        >
          Principles That
          <span className="mt-1 block font-serif italic text-[#C9972B]">
            Define Us
          </span>
        </motion.h3>

        <motion.p
          variants={fadeUpVariants}
          className="mt-4 text-sm leading-7 text-black sm:text-base"
        >
          The principles that guide our decisions, operations, and
          relationships with customers.
        </motion.p>
      </motion.div>

      
      <div ref={timelineRef} className="relative mt-14 sm:mt-20">
        
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-4 top-0 w-px -translate-x-1/2 bg-[#DCE3EC] md:left-1/2"
        />
        
        <motion.div
          aria-hidden="true"
          style={{ scaleY: lineScale }}
          className="absolute bottom-0 left-4 top-0 w-[2px] origin-top -translate-x-1/2 bg-gradient-to-b from-[#C9972B] to-[#F0CA6A] md:left-1/2"
        />

        <ol className="relative">
          {coreValues.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </ol>
      </div>

      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mx-auto mt-16 max-w-4xl rounded-2xl border border-[#DCE3EC] bg-[#F8FAFC] p-6 sm:mt-20 sm:p-8"
      >
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black">
              Our Commitment
            </p>

            <h4 className="mt-3 font-serif text-xl font-bold italic leading-snug text-[#C9972B] sm:text-2xl">
              Quality in Every Finish
            </h4>

            <p className="mt-3 text-sm leading-7 text-black">
              We believe that quality, precision, and reliability are essential
              to delivering effective steel polishing and surface finishing
              solutions.
            </p>
          </div>

          <div className="space-y-3 border-t border-[#DCE3EC] pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            {commitmentPoints.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#06182E] text-[#E0B04A]">
                  <span className="text-[10px]">✓</span>
                </div>
                <p className="text-sm font-medium leading-6 text-[#06182E]">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-6 border-l-2 border-[#C9972B] pl-4">
          <p className="font-serif text-sm italic leading-7 text-black">
            &ldquo;Every product reflects our commitment to precision,
            performance, and dependable steel finishing.&rdquo;
          </p>
        </div>
      </motion.div>
    </div>
  );
};


const MissionVisionValues = () => {
  const viewport = {
    once: true,
    amount: 0.15,
  };

  const hoverLift = {
    y: -4,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  };

  const initialAnimation = "hidden";

  return (
    <MotionConfig reducedMotion="never">
      <section className="w-full overflow-hidden bg-white pb-16 sm:pb-20 lg:pb-24">
        <div className=" px-4 sm:px-6 lg:px-8">
          

          <div className="mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
            

            <motion.div
              variants={containerVariants}
              initial={initialAnimation}
              whileInView="visible"
              viewport={viewport}
              className="w-full lg:max-w-[50%]"
            >
              <motion.div
                variants={fadeUpVariants}
                className="mb-4 flex items-center gap-3"
              >
                <span className="h-0.5 w-8 rounded-full bg-[#06182E]" />

                <p className="text-xs font-semibold uppercase tracking-widest text-black sm:text-sm">
                  Our Purpose &amp; Principles
                </p>
              </motion.div>

              

              <motion.h2
                variants={fadeUpVariants}
                className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              >
                What Drives Our{" "}
                <span className="font-serif italic text-[#C9972B]">
                  Company Forward
                </span>
              </motion.h2>
            </motion.div>

            {/* RIGHT SIDE DESCRIPTION */}

            <motion.div
              initial={initialAnimation}
              whileInView="visible"
              variants={fadeRightVariants}
              viewport={viewport}
              className="w-full lg:max-w-[45%]"
            >
              <p className="text-sm leading-7 text-black sm:text-base sm:leading-8">
                Our mission, vision, and core values define our commitment to
                quality manufacturing, customer satisfaction, and continuous
                improvement. They guide our approach to steel polishing and
                industrial abrasive solutions.
              </p>
            </motion.div>
          </div>

          {/* MISSION & VISION */}

          <motion.div
            variants={containerVariants}
            initial={initialAnimation}
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 divide-y divide-white/15 rounded-3xl bg-[#06182E] text-white md:grid-cols-2 md:divide-x md:divide-y-0"
          >
            {missionVision.map(
              ({ id, label, icon: Icon, text, tagline }, index) => (
                <motion.div
                  key={id}
                  variants={index === 0 ? fadeLeftVariants : fadeRightVariants}
                  whileHover={hoverLift}
                  className="p-6 sm:p-10 lg:p-14"
                >
                  {/* LABEL */}

                  <div className="flex items-center gap-3">
                    <motion.span
                      whileHover={{
                        rotate: 8,
                        scale: 1.1,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30"
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </motion.span>

                    <h3 className="font-serif text-xs font-semibold uppercase tracking-widest sm:text-sm">
                      {label}
                    </h3>
                  </div>

                  {/* TEXT */}

                  <p className="mt-6 text-base leading-8 text-white sm:text-lg sm:leading-9">
                    {text}
                  </p>

                  {/* TAGLINE */}

                  <p className="mt-6 inline-flex items-center gap-3 font-serif text-sm font-semibold italic text-[#C9972B]">
                    <span className="h-0.5 w-8 rounded-full bg-[#C9972B]/60" />
                    {tagline}
                  </p>
                </motion.div>
              )
            )}
          </motion.div>

          {/* CORE VALUES TIMELINE */}

          <CoreValuesTimeline viewport={viewport} />
        </div>
      </section>
    </MotionConfig>
  );
};

export default MissionVisionValues;