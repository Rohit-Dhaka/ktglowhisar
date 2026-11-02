
import React from "react";
import { Award, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Quality Driven",
    description:
      "Focused on quality, precision, and dependable steel solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Reliability",
    description:
      "Committed to reliable products and responsible manufacturing.",
  },
];

const AboutSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">


<div className="relative h-[300px] overflow-hidden rounded-xl sm:h-[400px] lg:h-[540px]">
  <img
    src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=85"
    alt="Steel manufacturing and industrial production"
    className="h-full w-full object-cover"
    loading="lazy"
  />
</div>


          
          <div>
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#123E74] sm:text-sm">
                About SteelCore Industries
              </p>

              <h2 className="mt-3 text-2xl font-bold leading-tight text-[#06182e] sm:text-3xl lg:text-4xl">
                Delivering Strength,
                <span className="mt-1 block text-[#123E74]">
                  Quality & Precision
                </span>
              </h2>
            </div>

            
            <div className="space-y-4 text-sm leading-7 text-gray-600 sm:text-base">
              <p>
                SteelCore Industries is committed to delivering high-quality
                steel solutions for industrial, commercial, and infrastructure
                requirements. We focus on precision, durability, and consistency
                in every product.
              </p>

              <p>
                With a quality-driven approach and customer-focused mindset,
                we provide dependable steel products designed to meet the
                evolving needs of diverse industries.
              </p>
            </div>

            
            <div className="mt-7 grid grid-cols-1 gap-5 border-t border-gray-200 pt-6 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#123E74]">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-[#06182e] sm:text-base">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
