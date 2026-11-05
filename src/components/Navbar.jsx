// import { useEffect, useState } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import Logo from "../assets/images/Logo.png";
// import {
//   Menu,
//   X,
//   ChevronDown,
//   ChevronRight,
//   ArrowRight,
//   Phone,
//   Mail,
//   MapPin,
//   Cog,
//   Fan,
//   Disc,
//   Layers,
//   Sparkles,
//   CircleDot,
//   ShieldCheck,
// } from "lucide-react";

// const CONTACT = {
//   phone: "+919728303738",
//   phoneDisplay: "+91 97283 03738",
//   email: "vikash61289@gmail.com",
//   location: "Industrial Area, Hisar, Haryana",
//   firm: "Thalor Manufacturer",
// };

// /* Products with Subtitle & Dedicated Paths */
// const productLinks = [
//   {
//     name: "Cutting & Grinding Wheels",
//     desc: "Fast stock removal & burr-free cuts",
//     path: "/products/cutting-grinding-wheels",
//     icon: Cog,
//   },
//   {
//     name: "Flap Discs",
//     desc: "Seamless blending & weld dressing",
//     path: "/products/flap-discs",
//     icon: Fan,
//   },
//   {
//     name: "Fiber Discs",
//     desc: "Heavy-duty resin stock conditioning",
//     path: "/products/fiber-discs",
//     icon: Disc,
//   },
//   {
//     name: "Non-Woven Polishing Wheels",
//     desc: "Uniform satin & clean matte finish",
//     path: "/products/non-woven-polishing-wheels",
//     icon: Layers,
//   },
//   {
//     name: "Polishing & Buffing Wheels",
//     desc: "High-clarity mirror steel gloss",
//     path: "/products/polishing-buffing-wheels",
//     icon: Sparkles,
//   },
//   {
//     name: "Polishing Wax",
//     desc: "Precision buffing compounds & luster",
//     path: "/products/polishing-wax",
//     icon: Sparkles,
//   },
//   {
//     name: "Rubber Roll",
//     desc: "Durable contact rolls & industrial rollers",
//     path: "/products/rubber-roll",
//     icon: CircleDot,
//   },
// ];

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "About Us", path: "/about" },
//   { name: "Products", path: "/products", dropdown: productLinks },
//   { name: "Resources", path: "/resources" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [hiddenMenu, setHiddenMenu] = useState(null);
//   const location = useLocation();

//   // Close menus on route change
//   useEffect(() => {
//     closeMenu();
//   }, [location.pathname]);

//   // Real Scroll Detection for dynamic navbar elevation
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 25);
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const closeMenu = () => {
//     setIsOpen(false);
//     setActiveDropdown(null);
//   };

//   const toggleMenu = () => {
//     setIsOpen((prev) => !prev);
//     setActiveDropdown(null);
//   };

//   const toggleDropdown = (name) =>
//     setActiveDropdown((prev) => (prev === name ? null : name));

//   const hideDesktopMenu = (e, name) => {
//     setHiddenMenu(name);
//     e.currentTarget.blur();
//   };

//   // Lock body scroll on mobile drawer open
//   useEffect(() => {
//     document.body.style.overflow = isOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   // Escape key & resize listener
//   useEffect(() => {
//     if (!isOpen) return;
//     const onKey = (e) => e.key === "Escape" && closeMenu();
//     const onResize = () => window.innerWidth >= 1280 && closeMenu();
//     window.addEventListener("keydown", onKey);
//     window.addEventListener("resize", onResize);
//     return () => {
//       window.removeEventListener("keydown", onKey);
//       window.removeEventListener("resize", onResize);
//     };
//   }, [isOpen]);

//   return (
//     <header className="fixed inset-x-0 top-0 z-50 w-full transition-all duration-300">
      
//       {/* ===================================================
//           1. TOP UTILITY STRIP (Smooth Hide on Scroll)
//       =================================================== */}
//       <div
//         className={`overflow-hidden bg-[#06182E] text-white transition-all duration-300 ${
//           isScrolled ? "h-0 opacity-0" : "h-9 opacity-100"
//         }`}
//       >
//         <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-[11px] sm:px-6 lg:px-8">
//           {/* Contact Details */}
//           <div className="flex items-center gap-6 max-sm:w-full max-sm:justify-between">
//             <a
//               href={`tel:${CONTACT.phone}`}
//               className="flex items-center gap-1.5 font-medium text-slate-200 transition-colors hover:text-[#E0B04A]"
//             >
//               <Phone size={12} className="text-[#E0B04A]" />
//               <span>{CONTACT.phoneDisplay}</span>
//             </a>
//             <a
//               href={`mailto:${CONTACT.email}`}
//               className="flex items-center gap-1.5 font-medium text-slate-200 transition-colors hover:text-[#E0B04A]"
//             >
//               <Mail size={12} className="text-[#E0B04A]" />
//               <span>{CONTACT.email}</span>
//             </a>
//           </div>

//           {/* Location & Firm Badge */}
//           <div className="hidden items-center gap-5 lg:flex">
//             <span className="flex items-center gap-1.5 text-slate-300">
//               <MapPin size={12} className="text-[#E0B04A]" />
//               <span>{CONTACT.location}</span>
//             </span>
//             <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-[#E0B04A]">
//               {CONTACT.firm}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* ===================================================
//           2. MAIN NAVIGATION BAR
//       =================================================== */}
//       <nav
//         className={`border-b transition-all duration-300 ${
//           isScrolled
//             ? "border-[#E5E7EB]/80 bg-white/95 shadow-[0_4px_25px_rgba(6,24,46,0.06)] backdrop-blur-md"
//             : "border-[#E5E7EB] bg-white shadow-sm"
//         }`}
//       >
//         <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          
//           {/* Brand Logo */}
//           <Link
//             to="/"
//             onClick={closeMenu}
//             className="group flex shrink-0 items-center transition-transform duration-300 hover:scale-[1.02]"
//           >
//             <img
//               src={Logo}
//               alt="KT Glow"
//               className="h-10 w-auto rounded object-contain sm:h-14 lg:h-16"
//             />
//           </Link>

//           {/* Desktop Navigation Links */}
//           <div className="hidden items-center gap-8 xl:flex">
//             {navLinks.map((link) => (
//               <div
//                 key={link.path}
//                 className="group relative"
//                 onMouseLeave={() => {
//                   if (hiddenMenu === link.name) setHiddenMenu(null);
//                 }}
//               >
//                 <NavLink
//                   to={link.path}
//                   end={link.path === "/"}
//                   onClick={(e) => {
//                     if (link.dropdown) hideDesktopMenu(e, link.name);
//                   }}
//                   className="relative flex items-center gap-1.5 py-2 text-[13.5px] font-semibold tracking-wide"
//                 >
//                   {({ isActive }) => (
//                     <>
//                       <span
//                         className={`transition-colors duration-200 ${
//                           isActive
//                             ? "text-[#06182E]"
//                             : "text-[#3A434F] group-hover:text-[#06182E]"
//                         }`}
//                       >
//                         {link.name}
//                       </span>

//                       {link.dropdown && (
//                         <ChevronDown
//                           size={14}
//                           className="text-black/60 transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#06182E]"
//                         />
//                       )}

//                       {/* Active Underline Indicator */}
//                       <span
//                         className={`absolute -bottom-1 left-0 h-[2.5px] w-full origin-left rounded-full bg-[#B8862B] transition-transform duration-300 ${
//                           isActive
//                             ? "scale-x-100"
//                             : "scale-x-0 group-hover:scale-x-100"
//                         }`}
//                       />
//                     </>
//                   )}
//                 </NavLink>

//                 {/* ===================================================
//                     MEGA-MENU DROPDOWN FOR PRODUCTS
//                 =================================================== */}
//                 {link.dropdown && (
//                   <div
//                     className={`invisible absolute left-[50%] -translate-x-[50%] top-full z-50 translate-y-3 pt-4 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
//                       hiddenMenu === link.name
//                         ? "!pointer-events-none !invisible !translate-y-3 !opacity-0"
//                         : ""
//                     }`}
//                   >
//                     <div className="flex w-[820px] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_20px_60px_rgba(6,24,46,0.12)] ring-1 ring-black/5">
                      
//                       {/* Products Grid (2 Columns) */}
//                       <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
//                         <div className="mb-2.5 flex items-center justify-between border-b border-[#E5E7EB] pb-2">
//                           <span className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#8A6212]">
//                             Precision Range
//                           </span>
//                           <span className="text-[10.5px] font-medium text-slate-400">
//                             {productLinks.length} Product Categories
//                           </span>
//                         </div>

//                         <div className="grid grid-cols-2 gap-2">
//                           {link.dropdown.map(({ name, desc, path, icon: Icon }) => (
//                             <NavLink
//                               key={name}
//                               to={path}
//                               onClick={(e) => hideDesktopMenu(e, link.name)}
//                               className={({ isActive }) =>
//                                 `group/item flex items-start gap-3 rounded-xl p-2.5 transition-all duration-200 hover:bg-[#FAF8F5] ${
//                                   isActive
//                                     ? "bg-[#FAF8F5] ring-1 ring-[#B8862B]/30"
//                                     : ""
//                                 }`
//                               }
//                             >
//                               <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#E5E7EB] bg-[#F5F6F8] text-[#06182E] transition-colors group-hover/item:border-[#B8862B]/60 group-hover/item:bg-[#06182E] group-hover/item:text-[#E0B04A]">
//                                 <Icon size={16} />
//                               </div>
//                               <div className="min-w-0">
//                                 <p className="text-[13px] font-bold leading-snug text-[#06182E] transition-colors group-hover/item:text-[#8A6212]">
//                                   {name}
//                                 </p>
//                                 <p className="mt-0.5 line-clamp-1 text-[11px] text-slate-500">
//                                   {desc}
//                                 </p>
//                               </div>
//                             </NavLink>
//                           ))}
//                         </div>

//                         {/* Dropdown Bottom Full Catalogue Bar */}
//                         <div className="mt-3 border-t border-[#E5E7EB] pt-3">
//                           <Link
//                             to="/products"
//                             onClick={(e) => hideDesktopMenu(e, link.name)}
//                             className="flex items-center justify-between rounded-xl bg-[#06182E] px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#0D2A4A] hover:text-[#E0B04A]"
//                           >
//                             <span>Explore Complete Product Catalogue</span>
//                             <ArrowRight size={15} />
//                           </Link>
//                         </div>
//                       </div>

//                       {/* Right Side Support Panel */}
//                       <div className="flex w-64 shrink-0 flex-col justify-between border-l border-[#E5E7EB] bg-[#FAF8F5] p-5">
//                         <div>
//                           <div className="inline-flex items-center gap-1.5 rounded-full border border-[#B8862B]/40 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8A6212]">
//                             <ShieldCheck size={12} className="text-[#718865]" />
//                             <span>ISO Certified</span>
//                           </div>

//                           <h4 className="mt-3 text-sm font-extrabold text-[#06182E]">
//                             Need Technical Advice?
//                           </h4>
//                           <p className="mt-1.5 text-[11.5px] leading-relaxed text-[#06182E]/70">
//                             Speak with our abrasives specialists to select exact grit sizes, densities, or customized orders.
//                           </p>
//                         </div>

//                         <div className="mt-4 rounded-xl border border-[#E5E7EB] bg-white p-3">
//                           <p className="text-[10px] font-bold uppercase tracking-wider text-[#8A6212]">
//                             Direct Support Line
//                           </p>
//                           <a
//                             href={`tel:${CONTACT.phone}`}
//                             className="mt-1 flex items-center gap-1.5 text-xs font-extrabold text-[#06182E] hover:text-[#B8862B]"
//                           >
//                             <Phone size={13} className="text-[#B8862B]" />
//                             <span>{CONTACT.phoneDisplay}</span>
//                           </a>
//                         </div>
//                       </div>

//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Desktop Right Action: Request Quote Button */}
//           <div className="hidden items-center gap-3 xl:flex">
//             <Link
//               to="/contact"
//               className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#06182E] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#06182E]/15 transition-all duration-300 hover:bg-[#0D2A4A] hover:text-[#E0B04A] hover:shadow-lg"
//             >
//               <span>Request a Quote</span>
//               <ChevronRight
//                 size={15}
//                 className="transition-transform duration-300 group-hover:translate-x-1 text-[#E0B04A]"
//               />
//             </Link>
//           </div>

//           {/* Mobile Hamburger Toggle Button */}
//           <button
//             type="button"
//             onClick={toggleMenu}
//             aria-label={isOpen ? "Close menu" : "Open menu"}
//             className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white text-[#06182E] shadow-sm transition-colors hover:bg-[#FAF8F5] xl:hidden"
//           >
//             <Menu size={20} />
//           </button>

//         </div>
//       </nav>

//       {/* ===================================================
//           3. MOBILE SLIDE-OUT DRAWER
//       =================================================== */}
//       <div
//         className={`fixed inset-0 z-[60] flex flex-col bg-white transition-all duration-300 xl:hidden ${
//           isOpen
//             ? "visible translate-x-0 opacity-100"
//             : "invisible translate-x-full opacity-0"
//         }`}
//       >
//         {/* Drawer Header */}
//         <div className="flex h-16 shrink-0 items-center justify-between border-b border-[#E5E7EB] px-4 sm:px-6">
//           <Link to="/" onClick={closeMenu} className="flex items-center">
//             <img
//               src={Logo}
//               alt="KT Glow"
//               className="h-10 w-auto rounded object-contain"
//             />
//           </Link>
//           <button
//             type="button"
//             onClick={closeMenu}
//             aria-label="Close menu"
//             className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E7EB] text-[#06182E] hover:bg-[#FAF8F5]"
//           >
//             <X size={18} />
//           </button>
//         </div>

//         {/* Drawer Navigation Links List */}
//         <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6">
//           <div className="space-y-1">
//             {navLinks.map((link) => (
//               <div key={link.path}>
//                 <div className="flex items-center justify-between">
//                   <NavLink
//                     to={link.path}
//                     end={link.path === "/"}
//                     onClick={closeMenu}
//                     className={({ isActive }) =>
//                       `flex flex-1 items-center rounded-xl px-3.5 py-3 text-sm font-bold transition-colors ${
//                         isActive
//                           ? "bg-[#FAF8F5] text-[#8A6212]"
//                           : "text-[#06182E] hover:bg-[#F5F6F8]"
//                       }`
//                     }
//                   >
//                     {link.name}
//                   </NavLink>

//                   {link.dropdown && (
//                     <button
//                       type="button"
//                       onClick={() => toggleDropdown(link.name)}
//                       aria-label={`Toggle ${link.name}`}
//                       className="flex h-10 w-10 items-center justify-center rounded-lg text-[#06182E] hover:bg-[#F5F6F8]"
//                     >
//                       <ChevronDown
//                         size={17}
//                         className={`transition-transform duration-200 ${
//                           activeDropdown === link.name ? "rotate-180 text-[#8A6212]" : ""
//                         }`}
//                       />
//                     </button>
//                   )}
//                 </div>

//                 {/* Mobile Dropdown Sublinks */}
//                 {link.dropdown && (
//                   <div
//                     className={`grid transition-all duration-300 ${
//                       activeDropdown === link.name
//                         ? "grid-rows-[1fr] opacity-100"
//                         : "grid-rows-[0fr] opacity-0"
//                     }`}
//                   >
//                     <div className="overflow-hidden">
//                       <div className="ml-3 space-y-1 border-l-2 border-[#B8862B]/30 py-2 pl-3">
//                         {link.dropdown.map(({ name, path, icon: Icon }) => (
//                           <NavLink
//                             key={name}
//                             to={path}
//                             onClick={closeMenu}
//                             className={({ isActive }) =>
//                               `flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-xs font-semibold transition-colors ${
//                                 isActive
//                                   ? "bg-[#FAF8F5] font-bold text-[#8A6212]"
//                                   : "text-[#06182E]/80 hover:bg-[#FAF8F5] hover:text-[#06182E]"
//                               }`
//                             }
//                           >
//                             <Icon size={14} className="text-[#B8862B]" />
//                             <span>{name}</span>
//                           </NavLink>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Drawer Bottom Quick Contact & Action Buttons */}
//         <div className="shrink-0 space-y-3 border-t border-[#E5E7EB] bg-[#FAF8F5] p-4 sm:p-5">
//           <div className="grid grid-cols-2 gap-2.5">
//             <a
//               href={`tel:${CONTACT.phone}`}
//               className="flex items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-3 py-2.5 text-xs font-bold text-[#06182E] shadow-sm hover:border-[#06182E]"
//             >
//               <Phone size={14} className="text-[#B8862B]" />
//               <span>Call Us</span>
//             </a>
//             <a
//               href={`mailto:${CONTACT.email}`}
//               className="flex items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-3 py-2.5 text-xs font-bold text-[#06182E] shadow-sm hover:border-[#06182E]"
//             >
//               <Mail size={14} className="text-[#B8862B]" />
//               <span>Email</span>
//             </a>
//           </div>

//           <Link
//             to="/contact"
//             onClick={closeMenu}
//             className="flex w-full items-center justify-center gap-2 rounded-full bg-[#06182E] px-4 py-3 text-xs font-bold text-white shadow-md shadow-[#06182E]/20"
//           >
//             <span>Request a Quote</span>
//             <ChevronRight size={16} className="text-[#E0B04A]" />
//           </Link>
//         </div>

//       </div>

//     </header>
//   );
// };

// export default Navbar;




import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Cog,
  Fan,
  Disc,
  Layers,
  Sparkles,
  CircleDot,
} from "lucide-react";

const CONTACT = {
  phone: "+919728303738",
  phoneDisplay: "+91 97283 03738",
  email: "vikash61289@gmail.com",
  location: "Industrial Area, Hisar, Haryana",
  firm: "Thalor Manufacturer",
};

/* 7 Dedicated Products + Icons */
const productLinks = [
  { name: "Cutting & Grinding Wheels", path: "/products/cutting-grinding-wheels", icon: Cog },
  { name: "Flap Discs", path: "/products/flap-discs", icon: Fan },
  { name: "Fiber Discs", path: "/products/fiber-discs", icon: Disc },
  { name: "Non-Woven Polishing Wheels", path: "/products/non-woven-polishing-wheels", icon: Layers },
  { name: "Polishing & Buffing Wheels", path: "/products/polishing-buffing-wheels", icon: Sparkles },
  { name: "Polishing Wax", path: "/products/polishing-wax", icon: Sparkles },
  { name: "Rubber Roll", path: "/products/rubber-roll", icon: CircleDot },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products", dropdown: productLinks },      
  { name: "Resources", path: "/resources" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hiddenMenu, setHiddenMenu] = useState(null);
  
  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name) =>
    setActiveDropdown((prev) => (prev === name ? null : name));

  const hideDesktopMenu = (e, name) => {
    setHiddenMenu(name);
    e.currentTarget.blur();
  };

  // Scroll detection: hides utility strip on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key & resize listener
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && closeMenu();
    const onResize = () => window.innerWidth >= 1280 && closeMenu();
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-[#E5E7EB] bg-white">
      
      {/* 1. TOP UTILITY STRIP */}
      <div
        className={`overflow-hidden bg-[#06182E] text-white transition-[height] duration-300 ${
          isScrolled ? "h-0" : "h-9"
        }`}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-3 text-xs sm:px-5 lg:px-8">
          <div className="flex items-center gap-5 max-sm:justify-between max-sm:w-full">
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
            >
              <Phone size={13} />
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
            >
              <Mail size={13} />
              {CONTACT.email}
            </a>
          </div>
          <div className="hidden items-center gap-5 lg:flex">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} />
              {CONTACT.location}
            </span>
            <span className="rounded-full border border-white/30 px-3 py-0.5 font-medium">
              {CONTACT.firm}
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:h-20 sm:px-5 lg:px-8">
        
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src={Logo}
            alt="KT Glow"
            className="h-10 w-auto rounded sm:h-16"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <div
              key={link.path}
              className="group relative"
              onMouseLeave={() => {
                if (hiddenMenu === link.name) setHiddenMenu(null);
              }}
            >
              <NavLink
                to={link.path}
                end={link.path === "/"}
                onClick={(e) => {
                  if (link.dropdown) hideDesktopMenu(e, link.name);
                }}
                className="relative flex items-center gap-1 py-2 text-[13px] font-medium"
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`transition-colors duration-200 ${
                        isActive
                          ? "font-semibold text-[#06182E]"
                          : "text-[#30343a] group-hover:text-[#06182E]"
                      }`}
                    >
                      {link.name}
                    </span>

                    {link.dropdown && (
                      <ChevronDown
                        size={14}
                        className="text-black transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#06182E]"
                      />
                    )}

                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-[#06182E] transition-transform duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>

              {/* CLEAN MEGA-DROPDOWN */}
              {link.dropdown && (
                <div
                  className={`invisible absolute left-[50%] translate-x-[-50%] top-full z-50 translate-y-2 pt-6 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
                    hiddenMenu === link.name
                      ? "!pointer-events-none !invisible !translate-y-2 !opacity-0"
                      : ""
                  }`}
                >
                  <div className="flex w-[820px] overflow-hidden rounded border border-[#E5E7EB] bg-white shadow-xl">
                    
                    {/* Left: 2 Columns × 4 Rows = 8 Cards */}
                    <div className="grid flex-1 grid-cols-2 gap-1 p-4">
                      {link.dropdown.map(({ name, path, icon: Icon }) => (
                        <NavLink
                          key={name}
                          to={path}
                          end
                          onClick={(e) => hideDesktopMenu(e, link.name)}
                          className={({ isActive }) =>
                            `flex items-center gap-3 rounded p-3 text-sm transition-colors duration-200 hover:bg-[#F5F6F8] ${
                              isActive
                                ? "bg-[#F5F6F8] font-semibold text-[#06182E]"
                                : "text-[#06182E]"
                            }`
                          }
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] bg-white">
                            <Icon size={16} />
                          </span>
                          <span className="leading-snug text-nowrap">{name}</span>
                        </NavLink>
                      ))}

                      {/* 8th Slot: View All Products Button */}
                      <Link
                        to="/products"
                        onClick={(e) => hideDesktopMenu(e, link.name)}
                        className="flex items-center justify-between gap-3 rounded bg-[#06182E] p-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                      >
                        <span>View All Products</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>

                    {/* Right: Support Info Box */}
                    <div className="hidden w-56 shrink-0 flex-col justify-between border-l border-[#E5E7EB] bg-[#F8FAFC] p-5 lg:flex">
                      <div>
                        <p className="text-sm font-semibold text-[#06182E]">
                          Need help choosing?
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-black/80">
                          Talk to us directly about the right product for your work.
                        </p>
                      </div>
                      <a
                        href={`tel:${CONTACT.phone}`}
                        className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#06182E] hover:opacity-80"
                      >
                        <Phone size={15} />
                        {CONTACT.phoneDisplay}
                      </a>
                    </div>

                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right CTA Button */}
        <div className="hidden xl:flex">
          <Link
            to="/contact"
            className="flex items-center gap-2 rounded bg-[#06182E] px-4 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
          >
            Request a Quote
            <ChevronRight size={17} />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded border border-[#E5E7EB] text-[#06182E] transition-colors hover:bg-[#F5F6F8] xl:hidden"
        >
          <Menu size={20} />
        </button>
      </nav>

      {/* 3. MOBILE SLIDE-OUT DRAWER */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-white transition-all duration-300 xl:hidden ${
          isOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-[#E5E7EB] px-3 sm:h-20 sm:px-5">
          <Link to="/" onClick={closeMenu} className="flex items-center">
            <img
              src={Logo}
              alt="KT Glow"
              className="h-10 w-auto rounded sm:h-12"
            />
          </Link>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded border border-[#E5E7EB] text-[#06182E] hover:bg-[#F5F6F8]"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3 sm:p-5">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <div key={link.path}>
                <div className="flex items-center justify-between">
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `flex flex-1 items-center rounded px-3 py-3 text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-[#F5F6F8] text-[#06182E]"
                          : "text-black hover:text-[#06182E]"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>

                  {link.dropdown && (
                    <button
                      type="button"
                      onClick={() => toggleDropdown(link.name)}
                      aria-label={`Toggle ${link.name} dropdown`}
                      aria-expanded={activeDropdown === link.name}
                      className="flex h-10 w-10 items-center justify-center rounded text-black transition-colors hover:bg-[#F5F6F8] hover:text-[#06182E]"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {link.dropdown && (
                  <div
                    className={`grid transition-all duration-300 ${
                      activeDropdown === link.name
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="ml-3 space-y-1 border-l border-[#E5E7EB] py-2 pl-3">
                        {link.dropdown.map(({ name, path, icon: Icon }) => (
                          <NavLink
                            key={name}
                            to={path}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                              `flex items-center gap-3 rounded px-3 py-2.5 text-sm transition-colors ${
                                isActive
                                  ? "bg-[#F5F6F8] font-semibold text-[#06182E]"
                                  : "text-black hover:text-[#06182E]"
                              }`
                            }
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] bg-white">
                              <Icon size={14} />
                            </span>
                            <span>{name}</span>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Drawer Bottom Actions */}
        <div className="shrink-0 space-y-3 border-t border-[#E5E7EB] bg-[#F8FAFC] p-3 sm:p-5">
          <div className="grid grid-cols-2 gap-3">
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center justify-center gap-2 rounded border border-[#E5E7EB] bg-white px-3 py-3 text-sm font-semibold text-[#06182E]"
            >
              <Phone size={16} />
              Call
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center justify-center gap-2 rounded border border-[#E5E7EB] bg-white px-3 py-3 text-sm font-semibold text-[#06182E]"
            >
              <Mail size={16} />
              Email
            </a>
          </div>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="flex w-full items-center justify-center gap-2 rounded bg-[#06182E] px-4 py-3.5 text-sm font-semibold text-white"
          >
            Request a Quote
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;