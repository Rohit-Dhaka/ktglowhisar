
import {
  ArrowRight,
  ArrowUpRight,
  Package,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import ProductImg from '../../assets/images/productHero.png'

const ProductsHero = () => {
  return (
    <section className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-[#06182E] text-white">
      {/* Full Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={ProductImg}
          
          alt="Steel polishing and industrial metal finishing"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-[#06182E]/75" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06182E]/95 via-[#06182E]/70 to-[#06182E]/35" />

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-white/15" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-4 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-28 lg:px-8">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <div className="mb-5 flex items-center gap-2 text-xs font-medium text-slate-300 sm:mb-6 sm:text-sm">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>

            <ChevronRight size={16} className="text-slate-500" />

            <span className="text-white">Products</span>
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Package size={16} className="text-slate-200" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200 sm:text-sm">
              Steel Polishing Solutions
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Perfect Finish.
            <span className="block text-slate-300">
              Superior Shine.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:mt-6 sm:text-base sm:leading-8">
            Explore our range of steel polishing, grinding and finishing
            products designed to deliver smooth surfaces, consistent
            performance and professional results.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <a
              href="#product-categories"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#06182E] transition-colors hover:bg-slate-200"
            >
              Explore Products
              <ArrowRight size={18} />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Request A Quote
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
