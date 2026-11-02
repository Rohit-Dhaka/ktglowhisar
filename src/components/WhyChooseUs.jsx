
import React from "react";
import {
  ShieldCheck,
  Award,
  Settings,
  Truck,
} from "lucide-react";

const features = [
  {
    id: "01",
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Strict quality standards ensure durable and dependable steel products.",
  },
  {
    id: "02",
    icon: Award,
    title: "Industry Expertise",
    description:
      "Professional knowledge and experience in industrial steel solutions.",
  },
  {
    id: "03",
    icon: Settings,
    title: "Precision Engineering",
    description:
      "Advanced processes focused on accuracy, strength, and consistency.",
  },
  {
    id: "04",
    icon: Truck,
    title: "Reliable Delivery",
    description:
      "Efficient supply and timely delivery for your business requirements.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">

          
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#123E74]">
              Why Choose Us
            </p>

            <h2 className="text-2xl font-bold leading-tight text-[#06182e] sm:text-3xl lg:text-4xl">
              Your Trusted Partner
              <span className="block text-[#123E74]">
                in Steel Solutions
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-gray-600 sm:text-base">
              At SteelCore Industries, we focus on delivering quality steel
              products backed by reliability, technical expertise, and
              customer-oriented service.
            </p>
          </div>          
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.id}
                  className="border-b border-gray-200 py-6 sm:px-5 sm:py-7"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-[#123E74]">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <span className="text-sm font-medium text-gray-300">
                      {feature.id}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-[#06182e] sm:text-lg">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
