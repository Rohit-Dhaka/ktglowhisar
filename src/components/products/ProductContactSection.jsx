
import {
  ArrowUpRight,
  ArrowRight,
  MessageCircle,
  Package,
  MoveUpRight,
} from "lucide-react";

const ProductContactSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#06182E] py-16 text-white sm:py-20 lg:py-24">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-white/10" />

        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#0F2B46]/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main CTA Container */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0F2B46]/50 p-6 sm:p-10 lg:p-14">
          {/* Decorative Icon */}
          <div className="absolute right-5 top-5 hidden text-white/5 sm:right-10 sm:top-10 sm:block">
            <Package size={150} strokeWidth={0.8} />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            {/* Left Content */}
            <div className="lg:col-span-8">
              {/* Label */}
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 sm:text-sm">
                <MessageCircle size={15} />
                Product Enquiry
              </span>

              {/* Heading */}
              <h2 className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                Looking For The
                <span className="mt-2 block text-slate-400">
                  Right Product?
                </span>
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                Have a specific requirement or need help choosing the
                right industrial solution? Connect with our team to
                discuss your product needs and request a quotation.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="/contact#contact-form"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#06182E] transition-colors hover:bg-slate-200"
                >
                  Request A Quote
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Contact Our Team
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* Right Highlight */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-white/10 bg-[#06182E]/60 p-5 sm:p-6">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
                  <Package size={23} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-white sm:text-2xl">
                  Your Requirements.
                  <span className="block text-slate-400">
                    Our Solutions.
                  </span>
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Share your specifications, project details, or
                  product requirements with our team.
                </p>

                {/* Divider */}
                <div className="my-5 h-px bg-white/10" />

                {/* Bottom Link */}
                <a
                  href="/contact"
                  className="group flex items-center justify-between gap-3 text-sm font-semibold text-white"
                >
                  <span>Start Your Enquiry</span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:bg-white group-hover:text-[#06182E]">
                    <MoveUpRight size={17} />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Information */}
          <div className="relative z-10 mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-6 text-slate-400 sm:text-sm">
              Let's build the right solution for your business.
            </p>

            <a
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 transition-colors hover:text-white sm:text-sm"
            >
              Explore Product Range
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductContactSection;
