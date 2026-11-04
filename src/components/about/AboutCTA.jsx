import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="w-full bg-[#F5F7FA] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#06182E]">
        {/* Decorative Elements */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

        <div className="relative grid grid-cols-1 items-center gap-10 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:py-20">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-white" />
              Let&apos;s Work Together
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Find the
              <span className="mt-2 block text-[#CBD5E1]">
                Right Industrial Solution?
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
              We are committed to helping businesses with reliable
              industrial abrasive and polishing solutions. Connect
              with our team to discuss your requirements.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#06182E] transition-colors hover:bg-[#CBD5E1] sm:px-7"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#06182E] sm:px-7"
              >
                Explore Products
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#06182E]">
              <MessageCircle size={24} />
            </div>

            <h3 className="mt-6 text-xl font-bold text-white sm:text-2xl">
              Have a Project in Mind?
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">
              Our team is ready to understand your requirements
              and help you explore suitable product solutions.
            </p>

            <div className="mt-6 border-t border-white/15 pt-5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#CBD5E1] transition-colors hover:text-white"
              >
                Get in Touch
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
