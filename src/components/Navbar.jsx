import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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
} from "lucide-react";

const CONTACT = {
  phone: "+919728303738",
  phoneDisplay: "+91 97283 03738",
  email: "vikash61289@gmail.com",
  location: "Industrial Area, Hisar, Haryana",
  firm: "Thalor Manufacturer",
};

const productLinks = [
  { name: "Cutting & Grinding Wheels", path: "/products", icon: Cog,},
  { name: "Flap Discs", path: "/products", icon: Fan },
  { name: "Fiber Discs", path: "/products", icon: Disc },
  { name: "Non-Woven Polishing Wheels", path: "/products", icon: Layers,},
  {
    name: "Polishing & Buffing Wheels",
    path: "/products",
    icon: Sparkles,
  },
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
  
  const { pathname } = useLocation();

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

  
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  
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
      
      <div
        className={`overflow-hidden bg-[#06182E] text-white transition-[height] duration-300 ${
          isScrolled ? "h-0" : "h-9"
        }`}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-3 text-xs sm:px-5 lg:px-8">
          <div className="flex items-center gap-5 max-sm:justify-between max-sm:w-full">
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-1.5 hover:opacity-80"
            >
              <Phone size={13} />
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className=" items-center gap-1.5 hover:opacity-80 flex"
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

      
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:h-20 sm:px-5 lg:px-8">
        
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src={Logo}
            alt="KT Glow"
            className="h-10 w-auto rounded sm:h-18"
          />
        </Link>

        
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

              
              {link.dropdown && (
                <div
                  className={`invisible absolute left-[50%] translate-x-[-50%] top-full z-50 translate-y-2 pt-6 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
                    hiddenMenu === link.name
                      ? "!pointer-events-none !invisible !translate-y-2 !opacity-0"
                      : ""
                  }`}
                >
                  <div className="flex w-[800px] overflow-hidden rounded border border-[#E5E7EB] bg-white">
                    <div className="grid flex-1 grid-cols-2 gap-1 p-4">
                      {link.dropdown.map(({ name, path, icon: Icon }) => (
                        <NavLink
                          key={path}
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

                      <Link
                        to="/products"
                        onClick={(e) => hideDesktopMenu(e, link.name)}
                        className="flex items-center justify-between gap-3 rounded bg-[#06182E] p-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                      >
                        View All Products
                        <ArrowRight size={16} />
                      </Link>
                    </div>

                    <div className="hidden w-56 shrink-0 flex-col justify-between border-l border-[#E5E7EB] bg-[#F8FAFC] p-5 lg:flex">
                      <div>
                        <p className="text-sm font-semibold text-[#06182E]">
                          Need help choosing?
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-black">
                          Talk to us directly about the right product for your
                          work.
                        </p>
                      </div>
                      <a
                        href={`tel:${CONTACT.phone}`}
                        className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#06182E]"
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

        <div className="hidden xl:flex">
          <Link
            to="/request-quote"
            className="flex items-center gap-2 rounded bg-[#06182E] px-4 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90"
          >
            Request a Quote
            <ChevronRight size={17} />
          </Link>
        </div>

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
                            key={path}
                            to={path}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                              `flex items-center gap-3 rounded px-3 py-3 text-sm transition-colors ${
                                isActive
                                  ? "bg-[#F5F6F8] font-semibold text-[#06182E]"
                                  : "text-black hover:text-[#06182E]"
                              }`
                            }
                          >
                            <Icon size={16} />
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
            to="/request-quote"
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