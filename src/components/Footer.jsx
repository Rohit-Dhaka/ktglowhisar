import { Link } from "react-router-dom";
import {
  Factory,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ChevronRight,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Infrastructure", path: "/infrastructure" },
  { name: "Quality", path: "/quality" },
  { name: "Contact Us", path: "/contact" },
];

const productLinks = [
  { name: "Steel Sheets", path: "/products/steel-sheets" },
  { name: "Steel Pipes", path: "/products/steel-pipes" },
  { name: "Steel Plates", path: "/products/steel-plates" },
  { name: "Steel Bars", path: "/products/steel-bars" },
  { name: "Structural Steel", path: "/products/structural-steel" },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    url: "https://facebook.com/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://linkedin.com/",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://youtube.com/",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#06182e] text-white">
  
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#123E74] text-white">
                <Factory size={24} />
              </div>

              <div>
                <h2 className="text-xl font-bold leading-tight">SteelCore</h2>

                <p className="text-[9px] font-semibold tracking-[0.2em] text-white/60 sm:text-[10px]">
                  STEEL INDUSTRIES
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/65 sm:leading-7">
              Delivering reliable steel solutions through strength, precision,
              and innovation. We are committed to quality manufacturing and
              building a stronger future.
            </p>

            
            <div className="mt-6">
              <h3 className="mb-3 text-sm font-semibold text-white">
                Follow Us
              </h3>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white/70 transition-colors duration-200 hover:border-[#123E74] hover:bg-[#123E74] hover:text-white"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          
          <div className="lg:col-span-4">
            <h3 className="text-base font-semibold sm:text-lg">Explore</h3>

            <div className="mt-5 grid grid-cols-2 gap-5">
              
              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/45">
                  Quick Links
                </h4>

                <div className="space-y-3">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="group flex items-center gap-2 text-sm text-white/65 transition-colors duration-200 hover:text-white"
                    >
                      <ChevronRight
                        size={14}
                        className="shrink-0 text-white/35 transition-colors group-hover:text-[#6FA8E8]"
                      />

                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              
              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/45">
                  Products
                </h4>

                <div className="space-y-3">
                  {productLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="group flex items-center gap-2 text-sm text-white/65 transition-colors duration-200 hover:text-white"
                    >
                      <ChevronRight
                        size={14}
                        className="shrink-0 text-white/35 transition-colors group-hover:text-[#6FA8E8]"
                      />

                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          
          <div className="lg:col-span-4">
            <h3 className="text-base font-semibold sm:text-lg">Get In Touch</h3>

            <p className="mt-4 text-sm leading-6 text-white/65">
              Have a project in mind or need reliable steel products? Contact
              our team for assistance.
            </p>

            <div className="mt-5 space-y-4">
              
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#6FA8E8]">
                  <MapPin size={17} />
                </div>

                <p className="pt-1 text-sm leading-6 text-white/65">
                  Industrial Area,
                  <br />
                  Hisar, Haryana, India
                </p>
              </div>

             
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm text-white/65 transition-colors duration-200 hover:text-white"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#6FA8E8]">
                  <Phone size={17} />
                </div>
                +91 98765 43210
              </a>

              
              <a
                href="mailto:info@steelcore.com"
                className="flex items-center gap-3 text-sm text-white/65 transition-colors duration-200 hover:text-white"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#6FA8E8]">
                  <Mail size={17} />
                </div>
                info@steelcore.com
              </a>
            </div>
          </div>
        </div>
      </div>      
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:px-6 md:flex-row lg:px-8">
          <p className="text-center text-xs leading-6 text-white/50 sm:text-sm md:text-left">
            © {new Date().getFullYear()} SteelCore Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
