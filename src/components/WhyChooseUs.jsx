
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
      "Strict quality standards ensure durable and dependable products.",
  },
  {
    id: "02",
    icon: Award,
    title: "Industry Expertise",
    description:
      "Professional knowledge and experience in industrial solutions.",
  },
  {
    id: "03",
    icon: Settings,
    title: "Precision Engineering",
    description:
      "Advanced processes focused on accuracy and consistency.",
  },
  {
    id: "04",
    icon: Truck,
    title: "Reliable Delivery",
    description:
      "Efficient supply and timely delivery for your business.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#06182E] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Section Heading */}
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-blue-300 sm:text-sm">
              Why Choose Us
            </p>

            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Your Trusted Partner
              <span className="mt-2 block text-blue-300">
                in Industrial Solutions
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
              We focus on delivering quality products backed by technical
              expertise, dependable service, and a commitment to customer
              satisfaction.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.id}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-blue-300/30 sm:p-6"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-blue-300">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
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