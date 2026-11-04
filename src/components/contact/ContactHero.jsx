
import { ArrowRight, PhoneCall, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import ContactImg from '../../assets/images/contactHero.png'

const ContactHero = () => {
  return (
    <section className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-[#06182E]">
      {/* Full Background Image */}
   

         <div className="absolute inset-0">
              <img
                src={ContactImg}
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
          <div className="mb-5 flex items-center gap-2 text-xs font-medium text-slate-300 sm:mb-6 sm:text-sm">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>

            <ChevronRight size={16} className="text-slate-500" />

            <span className="text-white">Contact Us</span>
          </div>

          {/* Eyebrow */}
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-white" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 sm:text-sm">
              Let's Connect
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Get In Touch
            <span className="mt-2 block text-slate-300">
              With Our Team
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
            Have a question about our products or services? Our team is ready
            to help you find the right solutions for your business. Connect
            with us for product enquiries, technical support, and business
            opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#06182E] transition-colors hover:bg-slate-200 sm:px-8"
            >
              Send an Enquiry
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact-information"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:px-8"
            >
              <PhoneCall size={18} />
              Contact Information
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-white/15" />
    </section>
  );
};

export default ContactHero;
