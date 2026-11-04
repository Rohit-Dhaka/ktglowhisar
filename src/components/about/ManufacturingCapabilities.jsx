import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Settings,
  Layers,
  Gauge,
  ShieldCheck,
  Cog,
  Factory,
} from "lucide-react";

const capabilities = [
  {
    id: "01",
    title: "Advanced Manufacturing",
    description:
      "Modern manufacturing processes designed to deliver reliable and consistent industrial abrasive solutions.",
    icon: Factory,
  },
  {
    id: "02",
    title: "Product Customization",
    description:
      "Flexible product solutions tailored to specific applications, operational requirements, and customer needs.",
    icon: Settings,
  },
  {
    id: "03",
    title: "Material Expertise",
    description:
      "Careful material selection to support product performance, durability, and application efficiency.",
    icon: Layers,
  },
  {
    id: "04",
    title: "Precision Engineering",
    description:
      "Focused production practices to maintain product consistency and meet defined manufacturing specifications.",
    icon: Cog,
  },
  {
    id: "05",
    title: "Performance Focus",
    description:
      "Manufacturing solutions developed with attention to efficiency, usability, and dependable performance.",
    icon: Gauge,
  },
  {
    id: "06",
    title: "Quality Control",
    description:
      "Quality-focused manufacturing practices with inspection at relevant stages of the production process.",
    icon: ShieldCheck,
  },
];

const AUTO_DELAY = 4000;

const ManufacturingCapabilities = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance, pauses while the user hovers or focuses the section
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(
      () => setActive((i) => (i + 1) % capabilities.length),
      AUTO_DELAY
    );
    return () => clearInterval(timer);
  }, [paused, active]);

  const current = capabilities[active];
  const CurrentIcon = current.icon;

  return (
    <section className="w-full overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
      
<div className="mb-10 grid gap-6 sm:mb-14 lg:grid-cols-2 lg:items-end lg:gap-16">
  {/* Left Side - Tag & Heading */}
  <div>
    <div className="mb-4 flex items-center gap-3">
      <span className="h-0.5 w-8 rounded-full bg-[#06182E]" />
      <p className="text-xs font-semibold uppercase tracking-widest text-black sm:text-sm">
        Our Capabilities
      </p>
    </div>

    <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#06182E] sm:text-4xl lg:text-5xl">
      Manufacturing Excellence Built on Precision
    </h2>
  </div>

  {/* Right Side - Description */}
  <div className="lg:justify-self-end lg:max-w-xl">
    <p className="text-sm leading-7 text-black sm:text-base sm:leading-8">
      Our manufacturing capabilities combine technical expertise,
      quality-focused processes, and flexible solutions to support
      diverse industrial requirements. With a strong focus on precision,
      consistency, and performance, we aim to deliver reliable steel
      polishing and abrasive solutions that meet the evolving needs
      of our customers and industrial applications.
    </p>
  </div>
</div>


        {/* Selector + detail */}
        <div
          className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Manufacturing capabilities"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6 lg:col-span-5 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {capabilities.map(({ id, title }, i) => {
              const isActive = i === active;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(i)}
                  className={`flex shrink-0 items-center gap-4 rounded-full border px-5 py-3 text-left text-sm font-semibold transition-colors duration-300 lg:w-full lg:rounded-none lg:border-0 lg:border-b lg:border-[#E5E7EB] lg:bg-transparent lg:px-2 lg:py-5 lg:text-lg ${
                    isActive
                      ? "border-[#06182E] bg-[#06182E] text-white lg:text-[#06182E]"
                      : "border-[#E5E7EB] bg-white text-black hover:text-[#06182E]"
                  }`}
                >
                  <span
                    className={`text-xs font-bold tracking-wider ${
                      isActive
                        ? "text-white/70 lg:text-[#06182E]"
                        : "text-black"
                    }`}
                  >
                    {id}
                  </span>
                  <span className="whitespace-nowrap lg:whitespace-normal">
                    {title}
                  </span>
                  <span
                    className={`ml-auto hidden h-0.5 rounded-full bg-[#06182E] transition-all duration-300 lg:block ${
                      isActive ? "w-10" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detail */}
          <div
            role="tabpanel"
            className="relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded border border-[#E5E7EB] bg-white p-6 sm:min-h-[360px] sm:p-10 lg:col-span-7"
          >
            {/* Big faded number */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-4 select-none text-[9rem] font-bold leading-none text-[#F5F6F8] sm:text-[13rem]"
            >
              {current.id}
            </span>

            <div key={current.id} className="relative">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#06182E] text-white">
                <CurrentIcon size={24} strokeWidth={1.8} />
              </span>

              <h3 className="mt-8 text-2xl font-bold text-[#06182E] sm:text-3xl">
                {current.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-black sm:text-base sm:leading-8">
                {current.description}
              </p>
            </div>

            {/* Progress line */}
            <div className="relative mt-8 flex items-center gap-1.5">
              {capabilities.map(({ id }, i) => (
                <span
                  key={id}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-[#06182E]" : "w-3 bg-[#E5E7EB]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-[#E5E7EB] pt-8 sm:flex-row sm:items-center">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold text-[#06182E] sm:text-2xl">
              Looking for Custom Manufacturing Solutions?
            </h3>
            <p className="mt-2 text-sm leading-7 text-black sm:text-base">
              Connect with our team to discuss your industrial product
              requirements and explore suitable solutions.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#06182E] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Contact Our Team
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingCapabilities;