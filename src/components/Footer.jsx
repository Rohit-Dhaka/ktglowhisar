import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import {
  MapPin,
  Phone,
  Mail,
  User,
  MoveUpRight,
} from "lucide-react";

const COMPANY = {
  brand: "KT Glow",
  firm: "Thalor Manufacturer",
  tagline: "Steel Polishing & Abrasive Products",
  contactPerson: "Vikas Thalor",
  phone: "+919728303738",
  phoneDisplay: "+91 97283 03738",
  email: "Vikash61289@gmail.com",
  address: "Plot No. 10, Fees Market, Industrial Area, Hisar, Haryana",
};

const footerLinks = {
  quickLinks: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Applications", path: "/applications" },
    { name: "Infrastructure", path: "/infrastructure" },
    { name: "Quality", path: "/quality" },
    { name: "Contact Us", path: "/contact" },
  ],
  products: [
    {
      name: "Cutting & Grinding Wheels",
      path: "/products/cutting-grinding-wheels",
    },
    { name: "Flap Discs", path: "/products/flap-discs" },
    { name: "Fiber Discs", path: "/products/fiber-discs" },
    {
      name: "Non-Woven Polishing Wheels",
      path: "/products/non-woven-polishing-wheels",
    },
    {
      name: "Polishing & Buffing Wheels",
      path: "/products/polishing-buffing-wheels",
    },
  ],
};

const contactItems = [
  {
    icon: User,
    label: "Contact Person",
    value: COMPANY.contactPerson,
  },
  {
    icon: Phone,
    label: "Phone",
    value: COMPANY.phoneDisplay,
    href: `tel:${COMPANY.phone}`,
  },
  {
    icon: Mail,
    label: "Email Address",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: COMPANY.address,
  },
];

const legalLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms-and-conditions" },
];

const FooterLinkList = ({ title, links }) => (
  <div>
    <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
      {title}
    </h3>

    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.path}>
          <Link
            to={link.path}
            className="group inline-flex items-center gap-2 text-sm leading-6 text-white/70 transition-colors duration-200 hover:text-[#A5E8F4]"
          >
            <span className="h-1 w-1 shrink-0 rounded-full bg-white/30 transition-all duration-200 group-hover:w-2 group-hover:bg-[#A5E8F4]" />
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-[#06182E] text-white">
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/[0.06]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-12 lg:gap-8 lg:py-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link
              to="/"
              aria-label="KT Glow Home"
              className=""
            >
              <img
                src={Logo}
                alt={COMPANY.brand}
                className="h-11 w-auto rounded-lg object-contain sm:h-18"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              <span className="font-semibold text-white">{COMPANY.brand}</span>{" "}
              is a brand of {COMPANY.firm}, delivering steel polishing and
              abrasive products from Hisar, Haryana.
            </p>

            <Link
              to="/about"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#A5E8F4] transition-colors hover:text-white"
            >
              Discover Our Company
              <MoveUpRight size={16} />
            </Link>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#A5E8F4]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Built for Better Finishes
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <FooterLinkList
              title="Explore"
              links={footerLinks.quickLinks}
            />
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <FooterLinkList
              title="Our Products"
              links={footerLinks.products}
            />
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
              Get In Touch
            </h3>

            <ul className="space-y-5">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#A5E8F4]">
                    <Icon size={15} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                      {label}
                    </p>

                    {href ? (
                      <a
                        href={href}
                        className="break-words text-sm leading-6 text-white/80 transition-colors hover:text-[#A5E8F4]"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="break-words text-sm leading-6 text-white/80">
                        {value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-6 sm:py-7 md:flex-row md:items-center md:justify-between">
          <p className="text-xs leading-5 text-white/45">
            © {currentYear}{" "}
            <span className="font-semibold text-white/70">{COMPANY.brand}</span>{" "}
            · {COMPANY.firm}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs text-white/50 transition-colors hover:text-[#A5E8F4]"
              >
                {link.name}
              </Link>
            ))}

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;