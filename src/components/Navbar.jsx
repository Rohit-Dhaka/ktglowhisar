
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Factory,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Products",
    path: "/products",
    dropdown: [
      { name: "All Products", path: "/products" },
      { name: "Steel Sheets", path: "/products/steel-sheets" },
      { name: "Steel Pipes", path: "/products/steel-pipes" },
      { name: "Steel Plates", path: "/products/steel-plates" },
      { name: "Steel Bars", path: "/products/steel-bars" },
      { name: "Structural Steel", path: "/products/structural-steel" },
    ],
  },
  {
    name: "Industries",
    path: "/industries",
    dropdown: [
      { name: "Construction", path: "/industries/construction" },
      { name: "Automotive", path: "/industries/automotive" },
      { name: "Infrastructure", path: "/industries/infrastructure" },
      { name: "Manufacturing", path: "/industries/manufacturing" },
      { name: "Energy", path: "/industries/energy" },
    ],
  },
  { name: "Infrastructure", path: "/infrastructure" },
  { name: "Quality", path: "/quality" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const isLightNavbar = isScrolled || isOpen;

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        isLightNavbar
          ? "border-gray-200 bg-white"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-3 sm:px-5 lg:px-8">        
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded bg-[#123E74] text-white sm:h-11 sm:w-11">
            <Factory size={22} />
          </div>

          <div className="flex flex-col">
            <span
              className={`text-base font-bold leading-tight transition-colors duration-300 sm:text-lg ${
                isLightNavbar ? "text-black" : "text-white"
              }`}
            >
              SteelCore
            </span>

            <span
              className={`text-[9px] font-semibold tracking-[0.15em] transition-colors duration-300 sm:text-[10px] ${
                isLightNavbar ? "text-gray-500" : "text-gray-200"
              }`}
            >
              STEEL INDUSTRIES
            </span>
          </div>
        </Link>

        
        <div className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <div key={link.path} className="group relative">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative flex items-center gap-1.5 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? isLightNavbar
                        ? "text-[#123E74]"
                        : "text-white"
                      : isLightNavbar
                        ? "text-gray-700 hover:text-[#123E74]"
                        : "text-white/90 hover:text-white"
                  }`
                }
              >
                {link.name}

                {link.dropdown && (
                  <ChevronDown
                    size={15}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                )}                
                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-[#123E74] transition-transform duration-300 group-hover:scale-x-100" />
              </NavLink>              
              {link.dropdown && (
                <div className="invisible absolute left-0 top-full z-50 w-56 translate-y-2 rounded-xl border border-gray-200 bg-white p-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {link.dropdown.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `block rounded-lg px-3 py-2.5 text-sm transition-colors duration-200 ${
                          isActive
                            ? "text-[#123E74]"
                            : "text-gray-700 hover:text-[#123E74]"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>        
        <div className="hidden xl:flex">
          <Link
            to="/request-quote"
            className="flex items-center gap-2 rounded bg-[#123E74] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0E315C]"
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
          className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300 hover:text-[#123E74] xl:hidden ${
            isLightNavbar ? "text-black" : "text-white"
          }`}
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>      
      <div
        className={`fixed inset-x-0 top-20 z-40 h-[calc(100dvh-5rem)] overflow-y-auto border-t border-gray-200 bg-white transition-all duration-300 xl:hidden ${
          isOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        <div className="flex min-h-full flex-col p-3 sm:p-5">          
          <div className="space-y-1">
            {navLinks.map((link) => (
              <div key={link.path}>
                <div className="flex items-center justify-between">
                  <NavLink
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `relative flex flex-1 items-center rounded-lg px-3 py-3.5 text-sm font-semibold transition-colors duration-200 ${
                        isActive
                          ? "text-[#123E74]"
                          : "text-gray-700 hover:text-[#123E74]"
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
                      className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 transition-colors hover:text-[#123E74]"
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
                      <div className="ml-3 space-y-1 border-l border-gray-200 py-2 pl-3">
                        {link.dropdown.map((item) => (
                          <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={closeMenu}
                            className={({ isActive }) =>
                              `flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors duration-200 ${
                                isActive
                                  ? "text-[#123E74]"
                                  : "text-gray-600 hover:text-[#123E74]"
                              }`
                            }
                          >
                            <ChevronRight size={14} />
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>          
          <div className="mt-5 border-t border-gray-200 pt-4">
            <Link
              to="/request-quote"
              onClick={closeMenu}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#123E74] px-4 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0E315C]"
            >
              Request a Quote
              <ChevronRight size={18} />
            </Link>         
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
