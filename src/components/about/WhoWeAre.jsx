import {
  ArrowRight,
  Factory,
  Settings,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import EnhancingImg from '../../assets/images/enhancingImg.png'

const companyHighlights = [
  {
    icon: Factory,
    title: "Steel Polishing Expertise",
    description:
      "Focused on polishing solutions designed for steel surface finishing applications.",
  },
  {
    icon: Settings,
    title: "Precision Finishing Solutions",
    description:
      "Products developed to support smooth surfaces, consistent finishes, and reliable polishing performance.",
  },
  {
    icon: ShieldCheck,
    title: "Quality-Focused Products",
    description:
      "Committed to product quality, dependable performance, and customer requirements.",
  },
];

const imageFeatures = [
  {
    icon: Factory,
    title: "Industrial",
    subtitle: "Applications",
  },
  {
    icon: Settings,
    title: "Precision",
    subtitle: "Finishing",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    subtitle: "Focused",
  },
];

const WhoWeAre = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading - Top */}
 
<div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
  {/* Left Side - Tag & Heading */}
  <div className="w-full lg:max-w-[50%]">
    <span className="inline-flex items-center gap-2 rounded-full border border-[#DCE3EC] bg-[#F5F7FA] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F2B46] sm:text-sm">
      <span className="h-2 w-2 rounded-full bg-[#06182E]" />
      Who We Are
    </span>

    <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#06182E] sm:text-4xl lg:text-5xl">
      Enhancing Steel
      <span className="mt-2 block text-black">
        Through Precision Polishing
      </span>
    </h2>
  </div>

  {/* Right Side - Description */}
  <div className="w-full lg:max-w-[45%]">
    <p className="text-sm leading-7 text-black sm:text-base sm:leading-8">
      KT GLOW specializes in steel polishing and industrial abrasive
      products designed to support high-quality metal surface finishing.
      We focus on precision, performance, and reliability to deliver
      professional finishing solutions for industrial applications.
   
    </p>
  </div>
</div>


        {/* Main Content */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left Image Section */}
          <div className="flex min-w-0 flex-col">

            {/* Main Image - flex-1 so it fills remaining height */}
            <div className="relative min-h-[260px] flex-1 overflow-hidden rounded-3xl border border-[#DCE3EC] sm:min-h-[320px] lg:min-h-[260px]">
              <img
                src={EnhancingImg}
                
                alt="Steel polishing and industrial metal finishing process"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />

              {/* Image Overlay */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-[#06182E]/90 p-4 sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#06182E]">
                    <Sparkles size={24} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-white sm:text-lg">
                      Steel Polishing Solutions
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-white/75 sm:text-sm">
                      Precision, surface quality, and superior finishing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Feature Cards */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {imageFeatures.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#DCE3EC] bg-[#F8FAFC] p-3 sm:p-4"
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.8}
                      className="text-[#06182E]"
                    />

                    <h4 className="mt-3 text-xs font-bold text-[#06182E] sm:text-sm">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-[10px] leading-4 text-black sm:text-xs">
                      {item.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Image Bottom Information */}
            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[#DCE3EC] bg-white p-4">
              <CheckCircle2
                size={21}
                className="shrink-0 text-[#06182E]"
              />

              <p className="text-xs font-semibold leading-5 text-[#06182E] sm:text-sm">
                Designed for Industrial Steel Surface Finishing
              </p>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="flex min-w-0 flex-col rounded-3xl border border-[#DCE3EC] bg-[#F8FAFC] p-5 sm:p-7 lg:p-8">

            {/* Content Label */}
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#DCE3EC] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#0F2B46] sm:text-sm">
              <Factory size={15} />
              Our Expertise
            </span>

            {/* Content Heading */}
            <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-[#06182E] sm:text-3xl">
              Reliable Products for
              <span className="block text-black">
                Superior Steel Finishing
              </span>
            </h3>

            {/* Description */}
            <p className="mt-5 text-sm leading-7 text-black sm:text-base sm:leading-7">
              KT GLOW focuses on steel polishing and industrial abrasive
              products designed to support metal surface finishing.
              Our solutions help businesses achieve smoother surfaces,
              refined finishes, and professional results across
              various steel polishing applications.
            </p>

            <p className="mt-4 text-sm leading-7 text-black sm:text-base sm:leading-7">
              We are committed to delivering quality-oriented products
              with a focus on performance, reliability, and customer
              requirements. Our goal is to support industrial
              metalworking with dependable polishing solutions.
            </p>

            {/* Highlights */}
            <div className="mt-7 space-y-4">
              {companyHighlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl border border-[#DCE3EC] bg-white p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#06182E] text-white">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-[#06182E] sm:text-base">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-xs leading-6 text-black sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-auto pt-7">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06182E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0F2B46]"
                >
                  About KT GLOW
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#DCE3EC] bg-white px-6 py-3 text-sm font-semibold text-[#06182E] transition-colors hover:border-[#06182E] hover:bg-[#F5F7FA]"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;