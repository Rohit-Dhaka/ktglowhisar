import {
  ArrowUpRight,
  ArrowRight,
  Factory,
  Building2,
  Settings2,
  Truck,
  Cog,
  HardHat,
  Layers3,
} from "lucide-react";
import IndustryImg from '../../assets/images/IndustryImg.png'

const industries = [
  {
    id: "01",
    title: "Construction",
    description:
      "Reliable industrial products for construction projects, infrastructure development, and building applications.",
    icon: Building2,
  },
  {
    id: "02",
    title: "Manufacturing",
    description:
      "Product solutions designed to support manufacturing operations, production systems, and industrial processes.",
    icon: Factory,
  },
  {
    id: "03",
    title: "Engineering",
    description:
      "Precision-focused products for engineering applications, technical projects, and equipment requirements.",
    icon: Settings2,
  },
  {
    id: "04",
    title: "Automotive",
    description:
      "Industrial components and product solutions for automotive production and related applications.",
    icon: Truck,
  },
  {
    id: "05",
    title: "Heavy Industries",
    description:
      "Dependable products for demanding industrial environments and heavy-duty operational requirements.",
    icon: Cog,
  },
  {
    id: "06",
    title: "Infrastructure",
    description:
      "Products supporting infrastructure projects, industrial facilities, and large-scale developments.",
    icon: HardHat,
  },
];

const IndustryApplicationsSection = () => {
  return (
    <section className="overflow-hidden bg-[#F5F7FA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#DCE3EC] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F2B46] sm:text-sm">
            <Layers3 size={15} />
            Industry Applications
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#06182E] sm:text-4xl lg:text-5xl">
            Supporting Industries
            <span className="block text-black">
              Through Reliable Products.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-black sm:text-base sm:leading-8">
            Our product range serves a wide variety of industrial
            applications. Explore the industries where our product
            solutions can support your operational requirements.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
          {/* Left Image */}
          <div className="relative lg:col-span-5">
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-3xl bg-[#06182E] sm:min-h-[500px]">
              <img
                src={IndustryImg}
                
                alt="Industrial manufacturing and engineering applications"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/95 via-[#06182E]/30 to-[#06182E]/10" />

              {/* Top Label */}
              <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#06182E]/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
                  <Factory size={15} />
                  Industrial Applications
                </span>
              </div>

              {/* Image Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Across Multiple Sectors
                </p>

                <h3 className="mt-3 max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                  Products That Support
                  <span className="block text-slate-300">
                    Industrial Progress.
                  </span>
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
                  Explore applications across diverse industries
                  with product solutions tailored to different
                  operational needs.
                </p>

                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#06182E]"
                >
                  Discuss Your Industry
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Industry List */}
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center justify-between border-b border-[#DCE3EC] pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black">
                Industries We Serve
              </p>

              <span className="rounded-full border border-[#DCE3EC] bg-white px-3 py-1.5 text-xs font-semibold text-[#0F2B46]">
                06 Sectors
              </span>
            </div>

            <div className="divide-y divide-[#DCE3EC]">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <a
                    href="/contact"
                    key={industry.id}
                    className="group flex items-start gap-4 py-5 transition-colors sm:gap-5 sm:py-6"
                  >
                    {/* Number */}
                    <span className="pt-1 text-xs font-semibold tracking-wider text-[#94A3B8] sm:text-sm">
                      {industry.id}
                    </span>

                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#DCE3EC] bg-white text-[#0F2B46] transition-colors duration-300 group-hover:bg-[#06182E] group-hover:text-white">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    {/* Details */}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold text-[#06182E] transition-colors group-hover:text-black sm:text-lg">
                        {industry.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-black">
                        {industry.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DCE3EC] bg-white text-[#0F2B46] transition-colors duration-300 group-hover:bg-[#06182E] group-hover:text-white">
                      <ArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-[#DCE3EC] bg-white p-5 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <h3 className="text-lg font-bold text-[#06182E] sm:text-xl">
              Your Industry. Your Requirements.
            </h3>

            <p className="mt-2 text-sm leading-6 text-black">
              Contact our team to explore suitable product solutions
              for your business.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#06182E] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0F2B46]"
          >
            Contact Our Team
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustryApplicationsSection;