
import {
  Factory,
  Building2,
  CarFront,
  Wrench,
  HardHat,
  Cog,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  {
    id: "01",
    icon: Factory,
    title: "Manufacturing",
    description:
      "Reliable abrasive solutions for industrial manufacturing and production processes.",
  },
  {
    id: "02",
    icon: Building2,
    title: "Construction",
    description:
      "Grinding and finishing products for metal structures and construction applications.",
  },
  {
    id: "03",
    icon: CarFront,
    title: "Automotive",
    description:
      "Surface finishing and polishing solutions for automotive components.",
  },
  {
    id: "04",
    icon: Wrench,
    title: "Metal Fabrication",
    description:
      "Efficient grinding and finishing solutions for fabricated metal parts.",
  },
  {
    id: "05",
    icon: HardHat,
    title: "Heavy Engineering",
    description:
      "Industrial abrasive products for demanding engineering operations.",
  },
  {
    id: "06",
    icon: Cog,
    title: "Industrial Workshops",
    description:
      "Versatile products for professional workshops and maintenance applications.",
  },
];

const IndustriesWeServe = () => {
  return (
    <section className="bg-[#F5F7FA] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 grid grid-cols-1 gap-6 lg:mb-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-[#123E74]" />

              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#123E74] sm:text-sm">
                Industries We Serve
              </p>
            </div>

            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#06182E] sm:text-4xl lg:text-5xl">
              Solutions for Every
              <span className="block text-[#123E74]">
                Industrial Sector
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-black sm:text-base lg:justify-self-end">
            Our abrasive and polishing products support various industries
            with dependable performance, precision, and consistent quality.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.id}
                className="group rounded-xl border border-[#DCE3EC] bg-white p-5 transition-colors duration-300 hover:border-[#123E74] sm:p-6"
              >
                {/* Card Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#06182E] text-white transition-colors duration-300 group-hover:bg-[#123E74]">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <span className="text-xs font-bold tracking-widest text-[#123E74]">
                    {industry.id}
                  </span>
                </div>

                {/* Card Content */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-[#06182E] sm:text-lg">
                      {industry.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-black">
                      {industry.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.7}
                    className="mt-1 shrink-0 text-[#123E74] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                {/* Bottom Accent */}
                <div className="mt-6 h-[2px] w-8 rounded-full bg-[#DCE3EC] transition-all duration-300 group-hover:w-14 group-hover:bg-[#123E74]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
