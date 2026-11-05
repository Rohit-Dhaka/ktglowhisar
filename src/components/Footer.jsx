// import { Link } from "react-router-dom";
// import {
//   motion,
//   useReducedMotion,
// } from "framer-motion";
// import Logo from "../assets/images/Logo.png";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   User,
//   MoveUpRight,
//   Sparkles,
// } from "lucide-react";



// const COMPANY = {
//   brand: "KT Glow",
//   firm: "Thalor Manufacturer",
//   tagline: "Steel Polishing & Abrasive Products",
//   contactPerson: "Vikas Thalor",
//   phone: "+919728303738",
//   phoneDisplay: "+91 97283 03738",
//   email: "vikash61289@gmail.com",
//   address: "Plot No. 10, Fees Market, Industrial Area, Hisar, Haryana",
// };

// const footerLinks = {
//   quickLinks: [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Products", path: "/products" },
//     { name: "Resources", path: "/resources" },
//     { name: "Contact Us", path: "/contact" },    
//   ],
//   products: [
//     {
//       name: "Cutting & Grinding Wheels",
//       path: "/products/cutting-grinding-wheels",
//     },
//     { name: "Flap Discs", path: "/products/flap-discs" },
//     { name: "Fiber Discs", path: "/products/fiber-discs" },
//     {
//       name: "Non-Woven Polishing Wheels",
//       path: "/products/non-woven-polishing-wheels",
//     },
//     {
//       name: "Polishing & Buffing Wheels",
//       path: "/products/polishing-buffing-wheels",
//     },
//     {
//       name: "Polishing Wax & Compounds",
//       path: "/products/polishing-wax",
//     },
//   ],
// };

// const contactItems = [
//   {
//     icon: User,
//     label: "Managing Director",
//     value: COMPANY.contactPerson,
//   },
//   {
//     icon: Phone,
//     label: "Direct Phone",
//     value: COMPANY.phoneDisplay,
//     href: `tel:${COMPANY.phone}`,
//   },
//   {
//     icon: Mail,
//     label: "Sales & Support",
//     value: COMPANY.email,
//     href: `mailto:${COMPANY.email}`,
//   },
//   {
//     icon: MapPin,
//     label: "Plant Location",
//     value: COMPANY.address,
//     href: "https://www.google.com/maps/search/?api=1&query=Plot+No+10+Fees+Market+Industrial+Area+Hisar+Haryana",
//   },
// ];

// const legalLinks = [
//   { name: "Privacy Policy", path: "/privacy-policy" },
//   { name: "Terms & Conditions", path: "/terms-and-conditions" },
// ];


// const FooterLinkList = ({ title, links }) => (
//   <div>
//     <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#E0B04A]">
//       {title}
//     </h3>

//     <ul className="space-y-2.5">
//       {links.map((link) => (
//         <li key={link.path}>
//           <Link
//             to={link.path}
//             className="group inline-flex items-center gap-2 text-[13.5px] leading-6 text-white/70 transition-colors duration-200 hover:text-[#E0B04A]"
//           >
//             <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E0B04A]/40 transition-all duration-300 group-hover:w-3 group-hover:bg-[#E0B04A]" />
//             <span>{link.name}</span>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// );



// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   const reduce = useReducedMotion();

//   return (
//     <footer className="relative w-full overflow-hidden bg-[#06182E] text-white">
      
//       <link
//         rel="stylesheet"
//         href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
//       />

 
//       <motion.div
//         aria-hidden="true"
//         animate={
//           reduce
//             ? undefined
//             : {
//                 scale: [1, 1.15, 1],
//                 opacity: [0.2, 0.45, 0.2],
//               }
//         }
//         transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//         className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#E0B04A]/20 blur-[90px]"
//       />

//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#B8862B]/15"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#B8862B]/20"
//       />

  
//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
//         <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-12 lg:gap-8 lg:py-14">
  
//           <div className="sm:col-span-2 lg:col-span-4">
//             <Link to="/" aria-label="KT Glow Home" className="inline-block">
//               <img
//                 src={Logo}
//                 alt={COMPANY.brand}
//                 className="h-12 w-auto rounded-lg object-contain transition-opacity duration-300 hover:opacity-90 sm:h-14"
//               />
//             </Link>

//             <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-white/70">
//               <strong className="text-white">{COMPANY.brand}</strong> is the flagship industrial abrasives trademark of{" "}
//               <strong className="text-[#E0B04A]">{COMPANY.firm}</strong>, engineered for superior cutting, blending,
//               and mirror-grade stainless steel surface perfection.
//             </p>

            
//             <div className="mt-4">
//               <span className="text-xs text-white/60">Engineered for a </span>
//               <motion.span
//                 animate={
//                   reduce
//                     ? undefined
//                     : { backgroundPosition: ["0% 50%", "200% 50%"] }
//                 }
//                 transition={{
//                   duration: 6,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="inline-block bg-[linear-gradient(90deg,#C9972B,#F0CA6A,#C9972B)] bg-[length:200%_auto] bg-clip-text font-['Dancing_Script',cursive] text-base font-bold tracking-normal text-transparent"
//               >
//                 Flawless Steel Finish
//               </motion.span>
//             </div>

            
//             <div className="mt-5">
//               <Link
//                 to="/about"
//                 className="group inline-flex items-center gap-2 text-[13.5px] font-bold text-[#E0B04A] transition-colors hover:text-white"
//               >
//                 <span>Discover Our Company</span>
//                 <MoveUpRight
//                   size={15}
//                   className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
//                 />
//               </Link>
//             </div>

//             <div className="mt-6 flex items-center gap-2.5">
//               <span className="h-0.5 w-6 bg-[#E0B04A]" />
//               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E0B04A]/90">
//                 Industrial Manufacturing Excellence
//               </span>
//             </div>
//           </div>


//           <div className="lg:col-span-2">
//             <FooterLinkList
//               title="Explore"
//               links={footerLinks.quickLinks}
//             />
//           </div>

//           <div className="lg:col-span-3">
//             <FooterLinkList
//               title="Abrasives Range"
//               links={footerLinks.products}
//             />
//           </div>

      
//           <div className="lg:col-span-3">
//             <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#E0B04A]">
//               Get In Touch
//             </h3>

//             <ul className="space-y-3.5">
//               {contactItems.map(({ icon: Icon, label, value, href }) => (
//                 <li key={label} className="flex items-start gap-3">
//                   <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#E0B04A]/30 bg-[#E0B04A]/10 text-[#E0B04A]">
//                     <Icon size={15} strokeWidth={1.8} />
//                   </span>

//                   <div className="min-w-0 flex-1">
//                     <p className="text-[10px] font-bold uppercase tracking-wider text-[#E0B04A]">
//                       {label}
//                     </p>

//                     {href ? (
//                       <a
//                         href={href}
//                         target={href.startsWith("http") ? "_blank" : undefined}
//                         rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
//                         className="mt-0.5 block break-words text-[12.5px] leading-5 text-white/80 transition-colors hover:text-[#E0B04A]"
//                       >
//                         {value}
//                       </a>
//                     ) : (
//                       <p className="mt-0.5 break-words text-[12.5px] leading-5 text-white/80">
//                         {value}
//                       </p>
//                     )}
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//         </div>

//         <div className="flex flex-col gap-4 border-t border-white/10 py-5 sm:py-6 md:flex-row md:items-center md:justify-between">
//           <p className="text-xs text-white/60">
//             © {currentYear}{" "}
//             <span className="font-bold text-[#E0B04A]">{COMPANY.brand}</span>{" "}
//             · {COMPANY.firm}. All rights reserved.
//           </p>

//           <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
//             {legalLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className="text-xs text-white/50 transition-colors hover:text-[#E0B04A]"
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <span className="flex items-center gap-1 text-[11px] font-semibold text-[#E0B04A]">
//               <Sparkles size={11} />
//               <span>Hisar, Haryana</span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Logo from "../assets/images/Logo.png";
import {
  MapPin,
  Phone,
  Mail,
  User,
  MoveUpRight,
  Sparkles,
} from "lucide-react";

/* Clean Inline SVG Social Icons (Zero-dependency & safe across all Lucide versions) */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.28a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const COMPANY = {
  brand: "KT Glow",
  firm: "Thalor Manufacturer",
  tagline: "Steel Polishing & Abrasive Products",
  contactPerson: "Vikas Thalor",
  phone: "+919728303738",
  phoneDisplay: "+91 97283 03738",
  email: "vikash61289@gmail.com",
  address: "Plot No. 10, Fees Market, Industrial Area, Hisar, Haryana",
};

/* Social Media Channels */
const socialLinks = [
  {
    name: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com",
  },
  {
    name: "YouTube",
    icon: YoutubeIcon,
    href: "https://www.youtube.com",
  },
];

const footerLinks = {
  quickLinks: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Resources", path: "/resources" },
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
    {
      name: "Polishing Wax & Compounds",
      path: "/products/polishing-wax",
    },
    {
      name: "Rubber Roll & Wheels",
      path: "/products/rubber-roll",
    },
  ],
};

const contactItems = [
  {
    icon: User,
    label: "Managing Director",
    value: COMPANY.contactPerson,
  },
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
  {
    icon: MapPin,
    label: "Plant Location",
    value: COMPANY.address,
    href: "https://www.google.com/maps/search/?api=1&query=Plot+No+10+Fees+Market+Industrial+Area+Hisar+Haryana",
  },
];

const legalLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms-and-conditions" },
];

const FooterLinkList = ({ title, links }) => (
  <div>
    <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#E0B04A]">
      {title}
    </h3>

    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={link.path}>
          <Link
            to={link.path}
            className="group inline-flex items-center gap-2 text-[13.5px] leading-6 text-white/70 transition-colors duration-200 hover:text-[#E0B04A]"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E0B04A]/40 transition-all duration-300 group-hover:w-3 group-hover:bg-[#E0B04A]" />
            <span>{link.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const reduce = useReducedMotion();

  return (
    <footer className="relative w-full overflow-hidden bg-[#06182E] text-white">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
      />

      {/* Ambient Gold Glow & Subtle Rings */}
      <motion.div
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.45, 0.2],
              }
        }
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#E0B04A]/20 blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#B8862B]/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#B8862B]/20"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        
        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-12 lg:gap-8 lg:py-14">
          
          {/* Column 1: Brand Info & Social Media */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to="/" aria-label="KT Glow Home" className="inline-block">
              <img
                src={Logo}
                alt={COMPANY.brand}
                className="h-12 w-auto rounded-lg object-contain transition-opacity duration-300 hover:opacity-90 sm:h-14"
              />
            </Link>

            <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-white/70">
              <strong className="text-white">{COMPANY.brand}</strong> is the flagship industrial abrasives trademark of{" "}
              <strong className="text-[#E0B04A]">{COMPANY.firm}</strong>, engineered for superior cutting, blending,
              and mirror-grade stainless steel surface perfection.
            </p>

            <div className="mt-4">
              <span className="text-xs text-white/60">Engineered for a </span>
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
                className="inline-block bg-[linear-gradient(90deg,#C9972B,#F0CA6A,#C9972B)] bg-[length:200%_auto] bg-clip-text font-['Dancing_Script',cursive] text-base font-bold tracking-normal text-transparent"
              >
                Flawless Steel Finish
              </motion.span>
            </div>

            <div className="mt-5">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-[13.5px] font-bold text-[#E0B04A] transition-colors hover:text-white"
              >
                <span>Discover Our Company</span>
                <MoveUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            {/* Social Media Links with Inline SVG */}
            <div className="mt-6">
              <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#E0B04A]">
                Follow &amp; Connect
              </p>
              <div className="flex items-center gap-2.5">
                {socialLinks.map(({ name, icon: Icon, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit KT Glow on ${name}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E0B04A] hover:bg-[#E0B04A] hover:text-[#06182E] shadow-sm"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2.5">
              <span className="h-0.5 w-6 bg-[#E0B04A]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E0B04A]/90">
                Industrial Manufacturing Excellence
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <FooterLinkList
              title="Explore"
              links={footerLinks.quickLinks}
            />
          </div>

          {/* Column 3: All 7 Products */}
          <div className="lg:col-span-3">
            <FooterLinkList
              title="Abrasives Range"
              links={footerLinks.products}
            />
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#E0B04A]">
              Get In Touch
            </h3>

            <ul className="space-y-3.5">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#E0B04A]/30 bg-[#E0B04A]/10 text-[#E0B04A]">
                    <Icon size={15} strokeWidth={1.8} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#E0B04A]">
                      {label}
                    </p>

                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-0.5 block break-words text-[12.5px] leading-5 text-white/80 transition-colors hover:text-[#E0B04A]"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 break-words text-[12.5px] leading-5 text-white/80">
                        {value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-5 sm:py-6 md:flex-row md:items-center md:justify-between">
          
          {/* Copyright */}
          <p className="text-xs text-white/60">
            © {currentYear}{" "}
            <span className="font-bold text-[#E0B04A]">{COMPANY.brand}</span>{" "}
            · {COMPANY.firm}. All rights reserved.
          </p>

          {/* Developed By Nosh Infotech */}
          <p className="text-xs text-white/60">
            Designed &amp; Developed by{" "}
            <a
              href="https://noshinfotech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#E0B04A] underline underline-offset-4 decoration-[#E0B04A]/40 transition-colors hover:text-white hover:decoration-white"
            >
              Nosh Infotech
            </a>
          </p>

          {/* Legal Links & Location Badge */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs text-white/50 transition-colors hover:text-[#E0B04A]"
              >
                {link.name}
              </Link>
            ))}
            <span className="flex items-center gap-1 text-[11px] font-semibold text-[#E0B04A]">
              <Sparkles size={11} />
              <span>Hisar, Haryana</span>
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;