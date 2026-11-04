
import {
  ArrowUpRight,
  Layers,
  Sparkles,
  CircleDot,
  ShieldCheck,
  Wrench,
  Settings,
} from "lucide-react";
import A from '../assets/images/a.png'
import B from '../assets/images/b.png'
import C from '../assets/images/c.png'
import D from '../assets/images/d.png'
import E from '../assets/images/e.png'
import F from '../assets/images/f.png'

const applications = [
  {
    id: "01",
    icon: Layers,
    title: "Metal Grinding",
    description:
      "Efficient grinding solutions for shaping and preparing metal surfaces.",
    image: A
      
  },
  {
    id: "02",
    icon: Sparkles,
    title: "Surface Polishing",
    description:
      "Achieve smooth and refined finishes across various metal surfaces.",
    image: B
      
  },
  {
    id: "03",
    icon: CircleDot,
    title: "Deburring",
    description:
      "Remove unwanted edges and burrs for cleaner metal components.",
    image: C 
      
  },
  {
    id: "04",
    icon: ShieldCheck,
    title: "Rust Removal",
    description:
      "Prepare metal surfaces by removing rust and surface imperfections.",
    image: D
      
  },
  {
    id: "05",
    icon: Wrench,
    title: "Weld Finishing",
    description:
      "Refine welded areas and improve the finish of fabricated components.",
    image: E
      
  },
  {
    id: "06",
    icon: Settings,
    title: "Buffing & Finishing",
    description:
      "Support final finishing processes for clean and polished surfaces.",
    image: F
      
  },
];

const ProductApplications = () => {
  return (
    <section className="bg-[#F5F7FA] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 flex flex-col gap-5 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 rounded-full bg-[#123E74]" />

              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#123E74] sm:text-sm">
                Product Applications
              </p>
            </div>

            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#06182E] sm:text-4xl lg:text-5xl">
              Designed for
              <span className="block text-[#123E74]">
                Industrial Performance
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-black sm:text-base">
            Explore the applications of our abrasive and polishing
            solutions across different metalworking and finishing processes.
          </p>
        </div>

        {/* Application Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((application) => {
            const Icon = application.icon;

            return (
              <div
                key={application.id}
                className="group overflow-hidden rounded-xl border border-[#DCE3EC] bg-white transition-colors duration-300 hover:border-[#123E74]"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E8EDF3]">
                  <img
                    src={application.image}
                    alt={application.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#06182E]">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <span className="absolute right-4 top-4 rounded-md bg-[#06182E] px-3 py-1.5 text-xs font-semibold tracking-wider text-white">
                    {application.id}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold text-[#06182E] sm:text-lg">
                      {application.title}
                    </h3>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.7}
                      className="shrink-0 text-[#123E74] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>

                  <p className="mt-2 text-sm leading-6 text-black">
                    {application.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductApplications;
