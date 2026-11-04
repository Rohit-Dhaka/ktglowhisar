import {
  Award,
  ShieldCheck,
  ArrowRight,
  Tag,
  Building2,
  MapPin,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";

import ABOUT_IMAGE from "../assets/images/all.png";

const features = [
  {
    icon: Award,
    title: "Quality Driven",
    description: "Focused on consistent quality in every product we make.",
  },
  {
    icon: ShieldCheck,
    title: "Dependable Finish",
    description: "Products made for a clean, reliable steel polishing result.",
  },
];

const facts = [
  { icon: Tag, label: "Brand", value: "KT Glow" },
  { icon: Building2, label: "Firm", value: "Thalor Manufacturer" },
  { icon: MapPin, label: "Location", value: "Industrial Area, Hisar, Haryana" },
  {
    icon: Package,
    label: "Products",
    value: "Steel Polish Material & Abrasive Products",
  },
];

const AboutSection = () => {
  return (
    <section className="overflow-hidden bg-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ---------- Image ---------- */}
          <div className="relative pb-3 pr-3 sm:pb-4 sm:pr-4">
            {/* Offset outline frame */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-full w-full rounded border border-[#06182E]"
            />

            <div className="overflow-hidden rounded border border-[#E5E7EB] bg-[#F5F6F8]">
              {/* Image */}
              <div className="">
                <img
                  src={ABOUT_IMAGE}
                  alt="Steel manufacturing and industrial production"
                  className="h-full w-full "
                  loading="lazy"
                />
              </div>

            

              {/* Caption Card */}
              <div className="bg-[#06182E] p-4 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-white">
                  Thalor Manufacturer
                </p>

                <h3 className="mt-1 text-base font-bold text-white sm:text-xl">
                  Built on Quality. Driven by Precision.
                </h3>
              </div>
            </div>
          </div>

          {/* ---------- Content ---------- */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-0.5 w-8 rounded-full bg-[#06182E]" />
              <p className="text-xs font-semibold uppercase tracking-widest text-black sm:text-sm">
                About KT Glow
              </p>
            </div>

            <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#06182E] sm:text-3xl lg:text-4xl xl:text-5xl">
              Built for a Brighter Steel Finish
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-7 text-black sm:text-base sm:leading-8">
              <p>
                Thalor Manufacturer, based in the Industrial Area of Hisar,
                Haryana, makes steel polishing and abrasive products under the
                KT Glow trademark.
              </p>
              <p>
                Our focus is simple: dependable products that help you reach a
                clean, consistent finish on steel surfaces.
              </p>
            </div>

            {/* Brand at a glance */}
            <dl className="mt-7 divide-y divide-[#E5E7EB] rounded border border-[#E5E7EB] bg-[#F8FAFC]">
              {facts.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 px-4 py-3 sm:items-center"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#06182E] text-white">
                    <Icon size={14} />
                  </span>
                  <div className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-black">
                      {label}
                    </dt>
                    <dd className="text-sm font-semibold text-[#06182E] sm:text-right">
                      {value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            {/* Features */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 rounded border border-[#E5E7EB] bg-white p-4 transition-colors duration-300 hover:bg-[#F5F6F8]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] text-[#06182E]">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#06182E] sm:text-base">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-black sm:text-sm sm:leading-6">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 rounded bg-[#06182E] px-5 py-3 text-sm font-semibold text-white transition-opacity duration-300 hover:opacity-90 sm:px-6"
              >
                Discover Our Company
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
