
import { ArrowRight, ArrowUpRight, ChevronRight, FileText } from "lucide-react";

const ResourcesHero = () => {
  return (
    <section className="relative flex min-h-[520px] items-center overflow-hidden bg-[#06182E] sm:min-h-[600px] lg:min-h-[680px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2000&q=90')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#06182E]/85" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06182E]/95 via-[#06182E]/80 to-[#06182E]/50" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm font-medium text-white/70">
            <a href="/" className="transition-colors hover:text-white">
              Home
            </a>

            <ChevronRight size={16} />

            <span className="text-white">Resources</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm sm:text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-white" />
            Resources & Documentation
          </div>

          {/* Heading */}
          <h1 className="mt-7 text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Explore Our
            <span className="mt-2 block text-slate-300">
              Product Documents.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8 lg:text-lg">
            Access our product catalogues, technical documentation, and
            company resources. Discover detailed information about our
            industrial abrasive and steel polishing solutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
            <a
              href="#pdf-documents"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#06182E] transition-colors hover:bg-slate-200 sm:px-8"
            >
              Explore Documents
              <ArrowRight size={18} />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/15 sm:px-8"
            >
              Contact Us
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesHero;
