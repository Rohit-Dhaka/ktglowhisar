import { ArrowRight, MessageCircle, MoveUpRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#06182E] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          {/* Background Decoration */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80" />

          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full border border-white/10 sm:h-64 sm:w-64" />

          <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#0F2B46]/70 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-white" />
                Let's Work Together
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Have a Project
                <span className="block text-slate-300">
                  in Mind?
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                Whether you need product information, a custom solution,
                or a business partnership, our team is ready to help.
                Let's discuss your requirements and find the right solution.
              </p>
            </div>

            {/* Right CTA Card */}
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 sm:p-7">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Let's Start a Conversation
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                Get in touch with our team today. We will help you with
                your enquiries and business requirements.
              </p>

              <div className="mt-7 flex flex-col gap-3">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#06182E] transition-colors hover:bg-slate-200"
                >
                  Send an Enquiry
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#contact-information"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Contact Our Team
                  <MoveUpRight size={18} />
                </a>
              </div>

              <div className="mt-6 border-t border-white/15 pt-5">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <MessageCircle size={18} className="shrink-0" />
                  <span>We are ready to assist your business.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
