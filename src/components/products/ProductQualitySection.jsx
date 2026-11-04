import {
  ArrowUpRight,
  ShieldCheck,
  BadgeCheck,
  Microscope,
  Settings2,
  CheckCircle2,
  ScanLine,
} from "lucide-react";

const qualityFeatures = [
  {
    id: "01",
    title: "Precision Engineering",
    description:
      "Products developed with attention to detail and precision for consistent industrial performance.",
    icon: Settings2,
  },
  {
    id: "02",
    title: "Quality Inspection",
    description:
      "A quality-focused approach to ensure products meet defined requirements and specifications.",
    icon: Microscope,
  },
  {
    id: "03",
    title: "Reliable Performance",
    description:
      "Designed to support dependable operation across demanding industrial environments.",
    icon: ShieldCheck,
  },

];

import AllImg from '../../assets/images/all.png'
const ProductQualitySection = () => {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Layout */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Image Content */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-[#06182E]">
              <img
                src={AllImg}                
                alt="Industrial product quality inspection"
                loading="lazy"
                className="aspect-[4/5] max-h-[650px] w-full object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/90 via-[#06182E]/20 to-transparent" />

              {/* Top Label */}
              <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#06182E]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                  <ScanLine size={15} />
                  Quality Assurance
                </span>
              </div>

              {/* Image Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <div className="max-w-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                    Our Commitment
                  </p>

                  <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                    Quality That Supports
                    <span className="block text-slate-300">
                      Every Application.
                    </span>
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    A consistent focus on product quality, precision,
                    and dependable industrial solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Quality Highlight */}
            <div className="absolute -bottom-5 right-3 rounded-2xl border border-[#DCE3EC] bg-white p-4 sm:right-8 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5F7FA] text-[#06182E]">
                  <ShieldCheck size={23} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                    Quality Focus
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#06182E]">
                    Built Around Standards
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="pt-5 lg:pt-0">
            {/* Section Label */}
            <span className="inline-flex items-center gap-2 rounded-full border border-[#DCE3EC] bg-[#F5F7FA] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F2B46] sm:text-sm">
              <BadgeCheck size={15} />
              Quality & Excellence
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#06182E] sm:text-4xl lg:text-5xl">
            Quality Is At The Core Of Every Product.
            </h2>

            {/* Description */}
            <p className="mt-5 text-sm leading-7 text-black sm:text-base sm:leading-8">
              We understand the importance of quality in industrial
              applications. Our product-focused approach emphasizes
              precision, consistency, and reliability to help meet
              the needs of our customers and their industries.
            </p>

            {/* Feature List */}
            <div className="mt-8 divide-y divide-[#DCE3EC] border-y border-[#DCE3EC]">
              {qualityFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.id}
                    className="group flex gap-4 py-5 sm:gap-5"
                  >
                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5F7FA] text-[#0F2B46] transition-colors duration-300 group-hover:bg-[#06182E] group-hover:text-white">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    {/* Feature Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-base font-bold text-[#06182E] sm:text-lg">
                          {feature.title}
                        </h3>

                        <span className="text-xs font-semibold text-[#94A3B8]">
                          {feature.id}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-black">
                        {feature.description}
                      </p>
                    </div>

                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[#94A3B8] transition-colors group-hover:text-[#0F2B46]"
                    />
                  </div>
                );
              })}
            </div>

        
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductQualitySection;