import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  User,
  Navigation,
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* =========================================================
   ANIMATION VARIANTS (Fonts & Motion Unchanged)
========================================================= */

const EASE = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

const lineReveal = {
  hidden: { y: "115%", opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

/* =========================================================
   COMPANY & MAP DATA
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

const infoItems = [
  { icon: MapPin, label: "Plant Address", value: COMPANY.address },
  { icon: User, label: "Managing Director", value: COMPANY.contactPerson },
  {
    icon: Phone,
    label: "Direct Phone",
    value: COMPANY.phoneDisplay,
    href: `tel:${COMPANY.phone}`,
  },
  {
    icon: Mail,
    label: "Sales & Support",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
];

const products = [
  "Cutting & Grinding Wheels",
  "Flap Discs",
  "Fiber Discs",
  "Buffing Wheels",
  "Polishing Wax",
];

/* =========================================================
   LOCATION SECTION COMPONENT
========================================================= */

const LocationSection = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#ededed] py-8 sm:py-10">
      {/* Google font for cursive typography */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
      />

      {/* Subtle Dot Grid Texture */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#06182E 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Ambient Floating Gold Glow */}
      <motion.div
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.15, 1],
                opacity: [0.35, 0.65, 0.35],
              }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 top-1/3 z-0 h-[300px] w-[300px] rounded-full bg-[#E0B04A]/25 blur-[100px] lg:h-[450px] lg:w-[450px]"
      />

      {/* Main Container */}
      <div className="relative z-10  px-4 sm:px-8 lg:px-12">
        {/* ===================================================
            SECTION HEADER (Font & Styling Unchanged)
        =================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mb-8 flex flex-col gap-4 sm:mb-10 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="w-full lg:max-w-[55%]">
            <motion.div variants={fadeUp} className="mb-2 flex items-center gap-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 34 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="h-0.5 shrink-0 bg-[#B8862B]"
              />
              <p className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#8A6212] sm:text-[13px]">
                Find Us
              </p>
            </motion.div>

            <h2 className="text-[32px] font-extrabold leading-[1.1] tracking-tight text-[#06182E] sm:text-[44px] lg:text-[52px]">
              <span className="block overflow-hidden pb-1">
                <motion.span variants={lineReveal} className="block">
                  Visit Us in
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-2">
                <motion.span variants={lineReveal} className="inline-block">
                  <motion.span
                    animate={
                      reduce
                        ? undefined
                        : { backgroundPosition: ["0% 50%", "200% 50%"] }
                    }
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="inline-block bg-[linear-gradient(90deg,#9A6B12,#E0B04A,#9A6B12)] bg-[length:200%_auto] bg-clip-text pr-2 font-['Dancing_Script',cursive] font-bold tracking-normal text-transparent"
                  >
                    Hisar, Haryana
                  </motion.span>
                </motion.span>
              </span>
            </h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="w-full text-[14px] leading-[1.75] text-[#06182E]/75 sm:text-[15.5px] lg:max-w-[42%]"
          >
            {COMPANY.firm} welcomes metal fabricators, industrial distributors, and
            business partners to inspect our state-of-the-art abrasive testing and manufacturing facility.
          </motion.p>
        </motion.div>

        {/* ===================================================
            👇 NEW UI FORMAT: UNIFIED INTEGRATED MASTER CONSOLE
        =================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="overflow-hidden rounded-3xl border border-[#B8862B]/30 bg-white shadow-[0_16px_45px_rgba(6,24,46,0.08)] backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* ===============================================
                LEFT: STEEL DASHBOARD CONSOLE (5 Columns)
            =============================================== */}
            <div className="flex flex-col justify-between bg-gradient-to-br from-[#06182E] via-[#092240] to-[#0D2A4A] p-6 text-white sm:p-8 lg:col-span-5">
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E0B04A]">
                      Plant Headquarters
                    </span>
                    <h3 className="mt-0.5 text-lg font-bold text-white sm:text-xl">
                      {COMPANY.firm}
                    </h3>
                  </div>

                  <span className="flex items-center gap-1 rounded-full border border-[#E0B04A]/30 bg-[#E0B04A]/10 px-2.5 py-1 text-[11px] font-bold text-[#E0B04A]">
                    <Sparkles size={11} />
                    <span>Open for Visits</span>
                  </span>
                </div>

                {/* Info List with Horizontal Pill Cards */}
                <div className="mt-5 space-y-3">
                  {infoItems.map(({ icon: Icon, label, value, href }) => (
                    <motion.div
                      key={label}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 transition-colors hover:border-[#E0B04A]/40 hover:bg-white/[0.08]"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E0B04A]/15 text-[#E0B04A]">
                        <Icon size={16} strokeWidth={1.8} />
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#E0B04A]">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="mt-0.5 block break-words text-[13px] font-semibold text-white/95 transition-colors hover:text-[#E0B04A] sm:text-[13.5px]"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="mt-0.5 break-words text-[13px] font-semibold text-white/95 sm:text-[13.5px]">
                            {value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Available Products Quick Tags */}
                <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                  <p className="text-[10.5px] font-bold uppercase tracking-wider text-white/70">
                    Samples on Display
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {products.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/15 bg-white/5 px-2 py-0.5 text-[10.5px] font-medium text-white/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons at the Bottom */}
              <div className="mt-6 grid grid-cols-2 gap-2.5 border-t border-white/10 pt-5">
                <motion.a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E0B04A] px-4 py-3 text-[13px] font-bold text-[#06182E] shadow-md transition-colors hover:bg-[#F0CA6A]"
                >
                  <Navigation size={14} />
                  <span>Directions</span>
                </motion.a>

                <motion.a
                  href={`tel:${COMPANY.phone}`}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-[13px] font-bold text-white transition-colors hover:bg-white/20"
                >
                  <Phone size={14} className="text-[#E0B04A]" />
                  <span>Call Now</span>
                </motion.a>
              </div>
            </div>

            {/* ===============================================
                RIGHT: FULL-BLEED PANORAMIC MAP (7 Columns)
            =============================================== */}
            <div className="relative min-h-[360px] w-full bg-[#E5E7EB] sm:min-h-[440px] lg:col-span-7 lg:min-h-[520px]">
              <iframe
                title={`${COMPANY.brand} location map`}
                src={MAP_EMBED_URL}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Map Pin Badge */}
              <div className="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-white/40 bg-white/95 px-3.5 py-1.5 text-xs font-bold text-[#06182E] shadow-md backdrop-blur-md">
                <MapPin size={15} className="text-[#9A6B12]" />
                <span>
                  {COMPANY.brand} &middot; Industrial Area, Hisar
                </span>
              </div>

              {/* Bottom Quick Navigation Pill */}
              <div className="absolute bottom-4 right-4 z-10 hidden sm:block">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full border border-white/40 bg-[#06182E]/90 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-md transition-all hover:bg-[#06182E] hover:text-[#E0B04A]"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;