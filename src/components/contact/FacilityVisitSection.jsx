
import { useReducedMotion, motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  User,
  Navigation,
  ArrowUpRight,
  ArrowRight,
  Building2,
  Factory,
  LocateFixed,
  ExternalLink,
} from "lucide-react";

/* =========================================================
   ANIMATION CONFIGURATION
========================================================= */

const EASE = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/* =========================================================
   COMPANY INFORMATION
========================================================= */

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

const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;

const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;



const contactItems = [
  {
    id: "01",
    icon: MapPin,
    label: "Facility Address",
    value: COMPANY.address,
    description: "Visit our manufacturing facility",
    href: DIRECTIONS_URL,
    action: "Get Directions",
    external: true,
  },
  {
    id: "02",
    icon: User,
    label: "Contact Person",
    value: COMPANY.contactPerson,
    description: "Managing Director",
  },
  {
    id: "03",
    icon: Phone,
    label: "Direct Contact",
    value: COMPANY.phoneDisplay,
    description: "Connect with our team",
    href: `tel:${COMPANY.phone}`,
    action: "Call Now",
  },
  {
    id: "04",
    icon: Mail,
    label: "Sales & Support",
    value: COMPANY.email,
    description: "For product and business enquiries",
    href: `mailto:${COMPANY.email}`,
    action: "Send Email",
  },
];

/* =========================================================
   PRODUCT INFORMATION
========================================================= */

const products = [
  "Cutting & Grinding Wheels",
  "Flap Discs",
  "Fiber Discs",
  "Buffing Wheels",
  "Polishing Wax",
];

/* =========================================================
   FACILITY VISIT SECTION
========================================================= */

const FacilityVisitSection = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#F3F4F1] py-16 sm:py-20 lg:py-24">
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#E0B04A]/10 blur-3xl"
      />

      <div className="relative z-10  px-4 sm:px-6 lg:px-8">
        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-10 grid gap-6 sm:mb-14 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <motion.div
              variants={fadeUp}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-0.5 w-10 bg-[#B8862B]" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#8A6212] sm:text-sm">
                Our Facility
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-extrabold leading-[1.08] tracking-tight text-[#06182E] sm:text-4xl lg:text-5xl xl:text-6xl"
            >
              Find Our
              <span className="block font-serif font-bold italic text-[#B8862B]">
                Manufacturing Hub.
              </span>
            </motion.h2>
          </div>

          <motion.div
            variants={fadeUp}
            className="lg:col-span-5 lg:pl-8"
          >
            <p className="max-w-lg text-sm leading-7 text-[#06182E]/70 sm:text-base sm:leading-8">
              {COMPANY.firm} welcomes metal fabricators, industrial
              distributors, and business partners to visit our manufacturing
              facility in Hisar, Haryana.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#B8862B]/25 bg-[#E0B04A]/10 px-3.5 py-2 text-xs font-semibold text-[#8A6212]">
                <Factory size={15} />
                Manufacturing Facility
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-[#06182E]/10 bg-white px-3.5 py-2 text-xs font-semibold text-[#06182E]/70">
                <MapPin size={15} />
                Hisar, Haryana
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* =================================================
            FULL WIDTH MAP AREA
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative overflow-hidden rounded-2xl border border-[#06182E]/10 bg-white"
        >
          {/* Map Header */}
          <div className="flex flex-col gap-4 border-b border-[#06182E]/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#06182E] text-[#E0B04A]">
                <LocateFixed size={20} />
              </span>

              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A6212] sm:text-xs">
                  Find Our Location
                </p>

                <h3 className="mt-1 text-sm font-bold text-[#06182E] sm:text-base">
                  {COMPANY.brand} — Industrial Area, Hisar
                </h3>
              </div>
            </div>

            <motion.a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#06182E] px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-[#0D2A4A] sm:text-sm"
            >
              <Navigation size={15} className="text-[#E0B04A]" />
              Get Directions
              <ArrowUpRight size={15} />
            </motion.a>
          </div>

          {/* Full Width Google Map */}
          <div className="relative h-[320px] w-full bg-[#E5E7EB] sm:h-[400px] lg:h-[480px]">
            <iframe
              title={`${COMPANY.brand} manufacturing facility location`}
              src={MAP_EMBED_URL}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map Location Label */}
            <div className="pointer-events-none absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto">
              <div className="flex max-w-md items-start gap-3 rounded-2xl border border-white/60 bg-white/95 p-4 backdrop-blur-md">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E0B04A]/15 text-[#8A6212]">
                  <MapPin size={19} />
                </span>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8A6212]">
                    Plant Headquarters
                  </p>

                  <p className="mt-1 break-words text-xs font-semibold leading-5 text-[#06182E] sm:text-sm">
                    {COMPANY.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            CONTACT INFORMATION CARDS
        ================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
          className="mt-12 sm:mt-16"
        >
          {/* Contact Heading */}
          <motion.div
            variants={fadeUp}
            className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8A6212]">
                Contact Directory
              </p>

              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-[#06182E] sm:text-3xl">
                Connect With Our Team
              </h3>
            </div>

            <p className="max-w-sm text-xs leading-6 text-[#06182E]/60 sm:text-sm">
              Reach us directly for product details, technical assistance,
              and business enquiries.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {contactItems.map(
              ({
                id,
                icon: Icon,
                label,
                value,
                description,
                href,
                action,
                external,
              }) => (
                <motion.div
                  key={id}
                  variants={fadeUp}
                  whileHover={reduce ? undefined : { y: -4 }}
                  className="group flex min-w-0 flex-col rounded-2xl border border-[#06182E]/10 bg-white p-5 transition-colors duration-300 hover:border-[#B8862B]/50 sm:p-6"
                >
                  {/* Card Top */}
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06182E] text-[#E0B04A] transition-colors group-hover:bg-[#E0B04A] group-hover:text-[#06182E]">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>

                    <span className="text-xs font-bold tracking-[0.15em] text-[#B8862B]">
                      {id}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="mt-6 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A6212] sm:text-xs">
                      {label}
                    </p>

                    <p className="mt-3 break-words text-sm font-bold leading-6 text-[#06182E] sm:text-base">
                      {value}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-[#06182E]/55">
                      {description}
                    </p>
                  </div>

                  {/* Card Action */}
                  {href && action && (
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="mt-6 inline-flex items-center gap-2 border-t border-[#06182E]/10 pt-4 text-xs font-bold text-[#8A6212] transition-colors hover:text-[#06182E]"
                    >
                      {action}

                      {external ? (
                        <ExternalLink
                          size={14}
                          className="transition-transform group-hover:translate-x-0.5"
                        />
                      ) : (
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      )}
                    </a>
                  )}
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* =================================================
            PRODUCT SHOWCASE STRIP
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-12 overflow-hidden rounded-2xl bg-[#06182E] sm:mt-16"
        >
          <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-12 lg:items-center lg:p-8">
            {/* Product Intro */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#E0B04A]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E0B04A] sm:text-xs">
                  Product Range
                </p>
              </div>

              <h3 className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl">
                Explore Our
                <span className="ml-2 italic text-[#E0B04A]">
                  Products.
                </span>
              </h3>

              <p className="mt-3 text-xs leading-6 text-slate-400 sm:text-sm">
                Explore our industrial abrasive and polishing product range.
              </p>
            </div>

            {/* Product Tags */}
            <div className="flex flex-wrap gap-2 lg:col-span-8 lg:justify-end">
              {products.map((product, index) => (
                <motion.span
                  key={product}
                  initial={{ opacity: 0, y: reduce ? 0 : 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                    ease: EASE,
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-2.5 text-xs font-medium text-white/90 transition-colors hover:border-[#E0B04A]/50 hover:text-[#E0B04A] sm:px-4 sm:text-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E0B04A]" />

                  {product}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =================================================
            BOTTOM CALL TO ACTION
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#B8862B]/20 bg-[#E0B04A]/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div>
            <p className="text-sm font-bold text-[#06182E] sm:text-base">
              Planning a facility visit?
            </p>

            <p className="mt-1 text-xs leading-5 text-[#06182E]/60 sm:text-sm">
              Contact our team to discuss your requirements before visiting.
            </p>
          </div>

          <a
            href={`tel:${COMPANY.phone}`}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#06182E] px-6 py-3 text-xs font-bold text-white transition-colors hover:bg-[#0D2A4A] sm:text-sm"
          >
            <Phone size={15} className="text-[#E0B04A]" />
            Contact Our Team
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilityVisitSection;
