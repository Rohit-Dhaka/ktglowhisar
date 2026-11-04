
import { ArrowUpRight, Headset, MessageCircle } from "lucide-react";

const ResourcesCTASection = () => {
  return (
    <section className="bg-white px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#06182E] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          {/* Background Decoration */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80" />

          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full border border-white/10 sm:h-60 sm:w-60" />

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 sm:text-sm">
                <Headset size={15} />
                Need Assistance?
              </span>

              {/* Heading */}
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Looking for More
                <span className="block text-slate-300">
                  Product Information?
                </span>
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                Our team is here to help you find the right industrial
                abrasive and polishing solutions. Get in touch for
                product details, technical specifications, or business enquiries.
              </p>
            </div>

            {/* Actions */}
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#06182E] transition-colors hover:bg-slate-200"
              >
                Contact Our Team
                <ArrowUpRight size={18} />
              </a>

              <a
                href="/contact#contact-form"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <MessageCircle size={18} />
                Send An Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesCTASection;
