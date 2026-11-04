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

const coreValues = [
  {
    id: "01",
    title: "Quality",
    description:
      "We focus on delivering reliable products through quality-oriented manufacturing practices.",
    icon: ShieldCheck,
  },
  {
    id: "02",
    title: "Innovation",
    description:
      "We continuously explore better approaches to improve products and manufacturing solutions.",
    icon: Lightbulb,
  },
  {
    id: "03",
    title: "Customer Commitment",
    description:
      "We understand customer requirements and work toward providing suitable industrial solutions.",
    icon: Users,
  },
  {
    id: "04",
    title: "Integrity",
    description:
      "We believe in honest communication, responsible practices, and long-term business relationships.",
    icon: Heart,
  },
  {
    id: "05",
    title: "Continuous Improvement",
    description:
      "We aim to improve our processes, product quality, and operational efficiency over time.",
    icon: TrendingUp,
  },
  {
    id: "06",
    title: "Reliability",
    description:
      "We strive to maintain consistency and dependability across our products and services.",
    icon: BadgeCheck,
  },
];

const MissionVisionValues = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
    
<div className="mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
  {/* Left Side - Tag & Heading */}
  <div className="w-full lg:max-w-[50%]">
    <div className="mb-4 flex items-center gap-3">
      <span className="h-0.5 w-8 rounded-full bg-[#06182E]" />
      <p className="text-xs font-semibold uppercase tracking-widest text-black sm:text-sm">
        Our Purpose &amp; Principles
      </p>
    </div>

    <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#06182E] sm:text-4xl lg:text-5xl">
      What Drives Our Company Forward
    </h2>
  </div>

  {/* Right Side - Description */}
  <div className="w-full lg:max-w-[45%]">
    <p className="text-sm leading-7 text-black sm:text-base sm:leading-8">
      Our mission, vision, and core values define our commitment to
      quality manufacturing, customer satisfaction, and continuous
      improvement. They guide our approach to steel polishing and
      industrial abrasive solutions.      
    </p>
  </div>
</div>


        {/* Mission & Vision: one split band */}
        <div className="grid grid-cols-1 divide-y divide-white/15 rounded bg-[#06182E] text-white md:grid-cols-2 md:divide-x md:divide-y-0">
          {missionVision.map(({ id, label, icon: Icon, text, tagline }) => (
            <div key={id} className="p-6 sm:p-10 lg:p-14">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  {label}
                </h3>
              </div>

              <p className="mt-6 text-base leading-8 text-white sm:text-lg sm:leading-9">
                {text}
              </p>

              <p className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-white/80">
                <span className="h-0.5 w-8 rounded-full bg-white/60" />
                {tagline}
              </p>
            </div>
          ))}
        </div>

        {/* Core values: numbered list rows */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-12 lg:gap-14">
     
<div className="lg:col-span-4">
  <div className="lg:sticky lg:top-36">
    {/* Section Label */}
    <p className="text-xs font-semibold uppercase tracking-widest text-black sm:text-sm">
      Our Core Values
    </p>

    {/* Heading */}
    <h3 className="mt-3 text-2xl font-bold leading-tight text-[#06182E] sm:text-3xl lg:text-4xl">
      Principles That Define Us
    </h3>

    {/* Description */}
    <p className="mt-4 text-sm leading-7 text-black sm:text-base">
      The principles that guide our decisions, operations, and
      relationships with customers.
    </p>

    {/* Additional Content */}
    <div className="mt-8 rounded-2xl border border-[#DCE3EC] bg-[#F8FAFC] p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black">
        Our Commitment
      </p>

      <h4 className="mt-3 text-xl font-bold leading-snug text-[#06182E] sm:text-2xl">
        Quality in Every Finish
      </h4>

      <p className="mt-3 text-sm leading-7 text-black">
        We believe that quality, precision, and reliability are
        essential to delivering effective steel polishing and
        surface finishing solutions.
      </p>

      {/* Bottom Points */}
      <div className="mt-5 space-y-3 border-t border-[#DCE3EC] pt-5">
        {[
          "Quality-driven product solutions",
          "Precision-focused finishing",
          "Customer-oriented approach",
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#06182E] text-white">
              <span className="text-[10px]">✓</span>
            </div>

            <p className="text-sm font-medium leading-6 text-[#06182E]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom Message */}
    <div className="mt-5 border-l-2 border-[#06182E] pl-4">
      <p className="text-sm italic leading-7 text-black">
        "Every product reflects our commitment to precision,
        performance, and dependable steel finishing."
      </p>
    </div>
  </div>
</div>


          <ul className="border-b border-[#E5E7EB] lg:col-span-8">
            {coreValues.map(({ id, title, description, icon: Icon }) => (
              <li
                key={id}
                className="group grid grid-cols-[auto_1fr_auto] items-start gap-x-4 gap-y-1 border-t border-[#E5E7EB] px-2 py-6 transition-colors duration-300 hover:bg-[#F8FAFC] sm:gap-x-8 sm:px-4 sm:py-8"
              >
                <span className="pt-1 text-sm font-bold tracking-wider text-black transition-colors duration-300 group-hover:text-[#06182E]">
                  {id}
                </span>

                <div>
                  <h4 className="text-lg font-bold text-[#06182E] sm:text-2xl">
                    {title}
                  </h4>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-black">
                    {description}
                  </p>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] text-[#06182E] transition-colors duration-300 group-hover:border-[#06182E] group-hover:bg-[#06182E] group-hover:text-white sm:h-12 sm:w-12">
                  <Icon size={18} strokeWidth={1.8} className="group-hover:hidden" />
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.8}
                    className="hidden group-hover:block"
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;