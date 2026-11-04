import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  User,
  Navigation,
  ArrowRight,
} from "lucide-react";

const COMPANY = {
  brand: "KT Glow",
  firm: "Thalor Manufacturer",
  contactPerson: "Vikas Thalor",
  phone: "+919728303738",
  phoneDisplay: "+91 97283 03738",
  email: "Vikash61289@gmail.com",
  address: "Plot No. 10, Fees Market, Industrial Area, Hisar, Haryana",
};

const MAP_QUERY = encodeURIComponent(
  "Plot No 10, Fees Market, Industrial Area, Hisar, Haryana"
);

// Tip: for an exact pin, open your place on Google Maps > Share > Embed a map,
// copy the iframe "src" URL and paste it here.
const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

const infoItems = [
  { icon: MapPin, label: "Address", value: COMPANY.address },
  { icon: User, label: "Contact Person", value: COMPANY.contactPerson },
  {
    icon: Phone,
    label: "Mobile",
    value: COMPANY.phoneDisplay,
    href: `tel:${COMPANY.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
];

const products = [
  "Cutting & Grinding Wheels",
  "Flap Discs",
  "Fiber Discs",
  "Non-Woven Polishing Wheels",
  "Polishing & Buffing Wheels",
];

const LocationSection = () => {
  return (
    <section className="overflow-hidden bg-white pb-12 sm:pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
       
<div className="mb-8 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
  {/* Left Side - Tag & Heading */}
  <div className="w-full lg:max-w-[50%]">
    <div className="mb-4 flex items-center gap-3">
      <span className="h-0.5 w-8 rounded-full bg-[#06182E]" />
      <p className="text-xs font-semibold uppercase tracking-widest text-black sm:text-sm">
        Find Us
      </p>
    </div>

    <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#06182E] sm:text-3xl lg:text-4xl">
      Visit Us in Hisar, Haryana
    </h2>
  </div>

  {/* Right Side - Description */}
  <div className="w-full lg:max-w-[45%]">
    <p className="text-sm leading-7 text-black sm:text-base sm:leading-8">
      {COMPANY.firm} is located in the Industrial Area of Hisar.
      Get in touch before you visit so we can assist you better.
      We welcome customers, partners, and business enquiries with
      a commitment to quality and precision.
    </p>
  </div>
</div>


        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
          {/* Map */}
          <div className="relative h-[320px] overflow-hidden rounded border border-[#E5E7EB] bg-[#F5F6F8] sm:h-[420px] lg:col-span-3 lg:h-auto lg:min-h-[520px]">
            <iframe
              title={`${COMPANY.brand} location map`}
              src={MAP_EMBED_URL}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-semibold text-[#06182E] sm:left-4 sm:top-4">
              <MapPin size={14} />
              {COMPANY.brand} &middot; {COMPANY.firm}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <ul className="divide-y divide-[#E5E7EB] rounded border border-[#E5E7EB] bg-[#F8FAFC]">
              {infoItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#06182E] text-white">
                    <Icon size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-black">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="break-words text-sm font-semibold leading-6 text-[#06182E] sm:text-base"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="break-words text-sm font-semibold leading-6 text-[#06182E] sm:text-base">
                        {value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded bg-[#06182E] px-5 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <Navigation size={16} />
                Get Directions
              </a>
              <a
                href={`tel:${COMPANY.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded border border-[#06182E] bg-white px-5 py-3.5 text-sm font-semibold text-[#06182E] transition-colors hover:bg-[#F5F6F8]"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>

            {/* Products */}
            <div className="rounded border border-[#E5E7EB] bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-black">
                Enquire About
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {products.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-[#E5E7EB] bg-[#F8FAFC] px-3 py-1 text-xs font-medium text-[#06182E]"
                  >
                    {name}
                  </span>
                ))}
              </div>
              <Link
                to="/request-quote"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#06182E]"
              >
                Request a Quote
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;