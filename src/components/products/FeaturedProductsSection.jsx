import {
  ArrowUpRight,
  ArrowRight,
  Package,
  Layers3,
  Cog,
  Disc3,
  Sparkles,
} from "lucide-react";

import EngineeredImg from "../../assets/images/EngineeredImg.png";
import FlapDiscs from "../../assets/images/FlapDiscs.png";
import BuffingWheels from "../../assets/images/BuffingWheels.png";

const featuredProducts = [
  {
    id: "01",
    name: "Abrasive Grinding & Cutting Discs",
    category: "Metal Grinding Solutions",
    description:
      "High-performance abrasive discs designed for steel cutting, grinding, weld removal, and precise metal surface preparation.",
    image: EngineeredImg,
    icon: Disc3,
    featured: true,
  },
  {
    id: "02",
    name: "Flap Discs & Surface Conditioning Wheels",
    category: "Steel Surface Finishing",
    description:
      "Reliable abrasive finishing products for removing surface imperfections, blending welds, and achieving smooth, consistent steel finishes.",
    image: FlapDiscs,

    icon: Cog,
  },
  {
    id: "03",
    name: "Buffing Wheels & Polishing Wax",
    category: "Metal Polishing Solutions",
    description:
      "Professional buffing wheels, polishing compounds, and steel polishing wax developed to enhance surface smoothness and achieve a refined metallic shine.",
    image: BuffingWheels,

    icon: Sparkles,
  },
];

const FeaturedProductsSection = () => {
  const mainProduct = featuredProducts[0];
  const otherProducts = featuredProducts.slice(1);

  const MainIcon = mainProduct.icon;

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}

        <div className="mb-10 flex flex-col gap-6 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          {/* Left Side - Tag & Heading */}
          <div className="w-full lg:max-w-[50%]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#DCE3EC] bg-[#F5F7FA] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0F2B46] sm:text-sm">
              <Layers3 size={15} />
              Featured Products
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#06182E] sm:text-4xl lg:text-5xl">
              Advanced Steel
              <span className="block text-black">Polishing Solutions.</span>
            </h2>
          </div>

          {/* Right Side - Description */}
          <div className="w-full lg:max-w-[45%]">
            <p className="text-sm leading-7 text-black sm:text-base sm:leading-8">
              Explore our comprehensive range of abrasive products, polishing
              wheels, and finishing compounds designed for high-quality steel
              finishing. From grinding and surface preparation to buffing and
              precision polishing.
            </p>
          </div>
        </div>

        {/* Featured Product Layout */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Main Featured Product */}
          <article className="group overflow-hidden rounded-3xl border border-[#DCE3EC] bg-[#F5F7FA] lg:col-span-7">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#E2E8F0] sm:aspect-[16/10]">
              <img
                src={mainProduct.image}
                alt={mainProduct.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/80 via-transparent to-transparent" />

              {/* Label */}
              <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#06182E]/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
                  <Package size={15} />
                  Featured
                </span>
              </div>

              {/* Image Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                  {mainProduct.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                  {mainProduct.name}
                </h3>
              </div>
            </div>

            {/* Product Content */}
            <div className="p-5 sm:p-7">
              <p className="max-w-xl text-sm leading-7 text-black sm:text-base">
                {mainProduct.description}
              </p>

              <div className="mt-6 flex flex-col gap-4 border-t border-[#DCE3EC] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0F2B46]">
                    <MainIcon size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                      Product Category
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#06182E]">
                      {mainProduct.category}
                    </p>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#06182E] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0F2B46]"
                >
                  Enquire Now
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </article>

          {/* Other Featured Products */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            {otherProducts.map((product) => {
              const Icon = product.icon;

              return (
                <article
                  key={product.id}
                  className="group grid flex-1 grid-cols-1 overflow-hidden rounded-3xl border border-[#DCE3EC] bg-[#F5F7FA] sm:grid-cols-[42%_1fr]"
                >
                  {/* Image */}
                  <div className="relative min-h-[200px] overflow-hidden bg-[#E2E8F0] sm:min-h-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/60 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[#06182E]/10" />

                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#06182E]/70 px-3 py-1.5 text-xs font-semibold text-white">
                      {product.id}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between p-5 sm:p-6">
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#0F2B46]">
                        <Icon size={20} />
                      </div>

                      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                        {product.category}
                      </p>

                      <h3 className="mt-2 text-xl font-bold leading-tight text-[#06182E]">
                        {product.name}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-black">
                        {product.description}
                      </p>
                    </div>

                    <a
                      href="/contact"
                      className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#0F2B46] transition-colors hover:text-black"
                    >
                      Product Enquiry
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col gap-5 rounded-2xl bg-[#06182E] p-5 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
              <Package size={21} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                Looking for the Right Steel Polishing Product?
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                Tell us about your metal finishing application, surface
                requirements, and specifications to explore the right abrasive
                and polishing solutions.
              </p>
            </div>
          </div>

          <a
            href="/contact#contact-form"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#06182E] transition-colors hover:bg-slate-200"
          >
            Request A Quote
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
