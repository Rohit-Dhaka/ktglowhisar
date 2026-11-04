
import {
  ArrowUpRight,
  ArrowRight,
  Headset,
  Globe,
  MessageCircle,
  BriefcaseBusiness,
  Mail,
} from "lucide-react";

const departments = [
  {
    id: "01",
    title: "Sales",
    subtitle: "Products & Quotations",
    icon: BriefcaseBusiness,
  },
  {
    id: "02",
    title: "Technical",
    subtitle: "Expert Assistance",
    icon: Headset,
  },
  {
    id: "03",
    title: "Export",
    subtitle: "Global Partnerships",
    icon: Globe,
  },
  {
    id: "04",
    title: "Support",
    subtitle: "Customer Assistance",
    icon: MessageCircle,
  },
];

const CONTACT_EMAIL = "info@ktglow.com";

const DepartmentContactSection = () => {
  return (
    <section className="overflow-hidden bg-[#F5F7FA] py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        
<div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:items-end">
  {/* Left Side - Tag & Heading */}
  <div>
    <span className="inline-flex items-center rounded-full border border-[#DCE3EC] bg-[#F5F7FA] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F2B46] sm:text-sm">
      Contact KT Glow
    </span>

    <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#06182E] sm:text-4xl lg:text-5xl">
      Let's Make
      <span className="block text-black">
        Things Happen.
      </span>
    </h2>
  </div>

  {/* Right Side - Description */}
  <div className="lg:justify-self-end lg:max-w-xl">
    <p className="text-sm leading-7 text-black sm:text-base sm:leading-8">
      Have a requirement or a new opportunity? We are just one message
      away. Our team is ready to understand your needs and provide the
      right steel polishing solutions. Whether you are looking for
      product information.
    </p>
  </div>
</div>

        {/* Department Selector */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {departments.map((department) => {
            const Icon = department.icon;

            return (
              <a
                key={department.id}
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                  department.title + " Enquiry"
                )}`}
                className="group flex items-center gap-4 rounded-2xl border border-[#DCE3EC] bg-white p-4 transition-colors duration-300 hover:border-[#06182E] sm:p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1F5F9] text-[#06182E] transition-colors group-hover:bg-[#06182E] group-hover:text-white">
                  <Icon size={20} strokeWidth={1.7} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold text-[#06182E]">
                    {department.title}
                  </h3>

                  <p className="mt-1 text-xs text-black">
                    {department.subtitle}
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-[#94A3B8] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#06182E]"
                />
              </a>
            );
          })}
        </div>

        {/* Main Contact Banner */}
        <div className="relative mt-6 overflow-hidden rounded-3xl bg-[#06182E] p-6 sm:p-8 lg:p-10">
          {/* Decorative Lines */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-10">
            <div className="absolute right-10 top-0 h-full w-px bg-white" />
            <div className="absolute right-20 top-0 h-full w-px bg-white" />
            <div className="absolute right-32 top-0 h-full w-px bg-white" />
          </div>

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                <Mail size={15} />
                One Point of Contact
              </div>

              <h3 className="mt-4 text-xl font-bold text-white sm:text-3xl">
                Every Enquiry Starts Here.
              </h3>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-3 inline-block break-all text-sm font-medium text-slate-300 transition-colors hover:text-white sm:text-base"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#06182E] transition-colors hover:bg-slate-200"
            >
              Get In Touch
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DepartmentContactSection;
