import {
  ArrowUpRight,
  ArrowRight,
  Layers3,
  Disc3,
  CircleDot,
  Settings2,
  Sparkles,
  Wrench,
} from "lucide-react";

import A from "../../assets/images/a.png";
import B from "../../assets/images/b.png";
import C from "../../assets/images/c.png";
import D from "../../assets/images/d.png";
import E from "../../assets/images/e.png";
import F from "../../assets/images/f.png";

const productRanges = [
  {
    id: "01",
    title: "Polishing Wheels",
    description: "Achieve smooth surfaces and a refined steel finish.",
    image: F,

    icon: Disc3,
  },
  {
    id: "02",
    title: "Grinding Discs",
    description: "Reliable grinding solutions for steel surface preparation.",
    image: A,

    icon: CircleDot,
  },
  {
    id: "03",
    title: "Abrasive Products",
    description: "Precision abrasives for professional metal finishing.",
    image: D,

    icon: Layers3,
  },
  {
    id: "04",
    title: "Buffing Solutions",
    description: "Enhance steel surfaces with a clean, polished appearance.",
    image: D,

    icon: Sparkles,
  },
  {
    id: "05",
    title: "Finishing Tools",
    description: "Essential tools for smooth and consistent finishing.",
    image: F,

    icon: Settings2,
  },
  {
    id: "06",
    title: "Polishing Accessories",
    description: "Supporting accessories for steel polishing applications.",
    image: E,

    icon: Wrench,
  },
];

const ProductRangeSection = () => {
  return (
    <section
      id="product-categories"
      className="bg-[#F5F7FA] py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
      
<div className="mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
  {/* Left Side - Tag & Heading */}
  <div className="w-full lg:max-w-[50%]">
    <span className="inline-flex items-center gap-2 rounded-full border border-[#DCE3EC] bg-white px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F2B46]">
      <Layers3 size={15} />
      Steel Polishing Products
    </span>

    <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#06182E] sm:text-4xl lg:text-5xl">
      Products for a Perfect Steel Finish.
    </h2>
  </div>

  {/* Right Side - Description */}
  <div className="w-full lg:max-w-[45%]">
    <p className="text-sm leading-7 text-black sm:text-base sm:leading-8">
      Discover our range of polishing and abrasive solutions for smooth,
      precise, and professional steel finishing. From grinding and surface
      preparation to buffing.
    </p>
  </div>
</div>


        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {productRanges.map((range) => {
            const Icon = range.icon;

            return (
              <article
                key={range.id}
                className="group overflow-hidden rounded-2xl border border-[#DCE3EC] bg-white transition-colors duration-300 hover:border-[#06182E]"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E2E8F0]">
                  <img
                    src={range.image}
                    alt={range.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/60 via-transparent to-transparent" />

                  {/* Number */}
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#06182E]/70 px-3 py-1.5 text-xs font-semibold tracking-wider text-white">
                    {range.id}
                  </span>

                  {/* Icon */}
                  <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-[#06182E]/70 text-white">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-[#06182E] sm:text-xl">
                    {range.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-black">
                    {range.description}
                  </p>

                  <a
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 border-t border-[#E2E8F0] pt-4 text-sm font-semibold text-[#0F2B46] transition-colors hover:text-black"
                  >
                    Enquire Now
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col gap-5 rounded-2xl bg-[#06182E] p-6 sm:mt-12 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Custom Requirements
            </p>

            <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
              Looking for the Right Finish?
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Connect with our team for product enquiries.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#06182E] transition-colors hover:bg-slate-200"
          >
            Contact Us
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductRangeSection;
