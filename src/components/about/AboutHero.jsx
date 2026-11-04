
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import AboutImg from '../../assets/images/abouthero.png'

const AboutHero = () => {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#06182E]">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img
          src={AboutImg}
          alt="Industrial manufacturing facility"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#06182E]/75" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06182E]/95 via-[#06182E]/70 to-[#06182E]/35" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-4 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-28 lg:px-8">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <div className="mb-5 flex items-center gap-2 text-xs font-medium text-white/75 sm:mb-6 sm:text-sm">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>

            <ChevronRight size={16} />

            <span className="text-white">About Us</span>
          </div>

          {/* Subtitle */}
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-white" />

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white sm:text-sm">
              About Our Company
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Delivering Excellence
            <span className="mt-2 block text-[#CBD5E1]">
              Through Innovation
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:mt-6 sm:text-base sm:leading-8">
            We are committed to providing reliable industrial abrasive
            and polishing solutions through quality manufacturing,
            advanced technology, and customer-focused service.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#06182E] transition-colors hover:bg-[#E2E8F0] sm:px-7"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#06182E] sm:px-7"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
