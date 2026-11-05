/* =========================================================
   PRODUCT IMAGES IMPORTS
========================================================= */
// 1. Cutting & Grinding Wheels
import Cutting1 from "../../assets/productimg/Cutting & Grinding Wheels1.png";
import Cutting2 from "../../assets/productimg/Cutting & Grinding Wheels2.png";
import Cutting3 from "../../assets/productimg/Cutting & Grinding Wheels3.png";

// 2. Flap Discs (Fallback image)
import Flapdiscs1 from "../../assets/productimg/Flapdiscs1.png";
import Flapdiscs2 from "../../assets/productimg/Flapdiscs2.png";
import Flapdiscs3 from "../../assets/productimg/Flapdiscs3.png";

// 3. Fiber Discs
import Fiber1 from "../../assets/productimg/Fiber Discs1.png";
import Fiber2 from "../../assets/productimg/Fiber Discs2.png";
import Fiber3 from "../../assets/productimg/Fiber Discs3.png";

// 4. Non-Woven Polishing Wheels
import NonWoven1 from "../../assets/productimg/Non-Woven Polishing Wheels1.png";
import NonWoven2 from "../../assets/productimg/Non-Woven Polishing Wheels2.png";
import NonWoven3 from "../../assets/productimg/Non-Woven Polishing Wheels3.png";

// 5. Polishing & Buffing Wheels
import Buffing1 from "../../assets/productimg/Polishing & Buffing Wheels1.png";
import Buffing2 from "../../assets/productimg/Polishing & Buffing Wheels2.png";
import Buffing3 from "../../assets/productimg/Polishing & Buffing Wheels3.png";

// 6. Polishing Wax
import Wax1 from "../../assets/productimg/Polishing Wax1.png";
import Wax2 from "../../assets/productimg/Polishing Wax2.png";
import Wax3 from "../../assets/productimg/Polishing Wax3.png";

// 7. Rubber Roll (Agar aapki image file me .png extension hai toh .png laga lijiye)
import Ruberroll1 from "../../assets/productimg/Ruberroll1.png";
import Ruberroll2 from "../../assets/productimg/Ruberroll2.png";
import Ruberroll3 from "../../assets/productimg/Ruberroll3.png";

/* =========================================================
   PRODUCTS MASTER DATA
========================================================= */
export const productsData = [
  {
    id: "01",
    slug: "cutting-grinding-wheels",
    name: "Cutting & Grinding Wheels",
    badge: "Heavy Duty",
    description: "High-speed abrasive wheels built for rigorous cutting and grinding work on steel.",
    images: [Cutting1, Cutting2, Cutting3],
    overview:
      "Engineered for heavy-duty metal fabrication, our cutting and grinding wheels provide fast stock removal and clean cuts with minimal burr. Built with reinforced resinoid bonds for maximum operator safety and extended wheel life.",
    features: [
      "Fast and controlled cutting action",
      "Reinforced fiberglass mesh for enhanced safety",
      "Exceptional wheel life under heavy stock removal",
      "Optimal for mild steel, structural steel & stainless steel",
    ],
    applications: ["Metal fabrication", "Weld preparation", "Heavy stock removal", "Structural steel cutting"],
    specifications: [
      { label: "Bond Type", value: "Reinforced Resinoid" },
      { label: "Abrasive Grain", value: "Premium Aluminum Oxide / Zirconia" },
      { label: "Available Sizes", value: "4\", 4.5\", 5\", 7\", 14\"" },
      { label: "Operating Speed", value: "Up to 13,300 RPM" },
    ],
    available: "Multiple diameters, thicknesses, and arbor sizes available on request.",
  },
  {
    id: "02",
    slug: "flap-discs",
    name: "Flap Discs",
    badge: "Consistent Finish",
    description: "Layered abrasive flaps designed for smooth blending, deburring, and surface finishing.",
    images: [Flapdiscs1, Flapdiscs2, Flapdiscs3],
    overview:
      "KT Glow Flap Discs combine grinding and finishing into a single operation. Featuring overlapping abrasive cloth flaps that wear down evenly, exposing fresh mineral continuously for consistent finishing and chatter-free operation.",
    features: [
      "Simultaneous material removal and surface blending",
      "High-strength fiberglass backing plate",
      "Uniform flap wear for continuous high cut rate",
      "Minimizes heat discoloration on stainless steel surfaces",
    ],
    applications: ["Weld seam blending", "Edge beveling & deburring", "Rust & paint removal", "Surface conditioning"],
    specifications: [
      { label: "Backing", value: "Fiberglass / Plastic Backing" },
      { label: "Grain Type", value: "Zirconia Alumina / Ceramic" },
      { label: "Grit Range", value: "P36, P60, P80, P120" },
      { label: "Disc Diameter", value: "4\" (100mm) & 5\" (125mm)" },
    ],
    available: "Standard Type 27 (flat) and Type 29 (conical) profiles in stock.",
  },
  {
    id: "03",
    slug: "fiber-discs",
    name: "Fiber Discs",
    badge: "Fast Stock Removal",
    description: "Resin-bonded fiber discs for aggressive grinding and rapid surface leveling.",
    images: [Fiber1, Fiber2, Fiber3],
    overview:
      "Constructed with heavy vulcanized fiber backing and premium electrostatically coated abrasive grains, KT Glow Fiber Discs deliver high cut-rate pressure resistance during demanding metal removal tasks.",
    features: [
      "Stiff vulcanized fiber backing resists tearing under heavy load",
      "Self-sharpening grain structure for prolonged cutting life",
      "Compatible with pneumatic and electric angle grinders",
      "Cool cutting action to prevent workpiece burn",
    ],
    applications: ["Heavy beveling & chamfering", "Weld bead leveling", "Scale & corrosion removal", "Foundry snagging"],
    specifications: [
      { label: "Backing Material", value: "0.8mm / 0.6mm Vulcanized Fiber" },
      { label: "Abrasive Grain", value: "Silicon Carbide / Aluminum Oxide" },
      { label: "Arbor Hole", value: "22.23mm (7/8\") with 4 slots" },
      { label: "Grit Range", value: "P24 to P120" },
    ],
    available: "Supplied in standard 25/50 pcs moisture-sealed industrial packs.",
  },
  {
    id: "04",
    slug: "non-woven-polishing-wheels",
    name: "Non-Woven Polishing Wheels",
    badge: "Uniform Finish",
    description: "Flexible non-woven abrasive wheels for satin finishing, scratch removal, and conditioning.",
    images: [NonWoven1, NonWoven2, NonWoven3],
    overview:
      "Crafted with synthetic open-web nylon impregnated with premium abrasive grains. These wheels deliver consistent uniform satin, matte, and hairline finishes without altering workpiece geometry.",
    features: [
      "Open web structure prevents loading and clogging",
      "Flexible design conforms to irregular contours and curved tubes",
      "Produces clean, repeatable decorative matte/satin textures",
      "Can be used dry or with water/lubricants",
    ],
    applications: ["Stainless steel satin finishing", "Scratch blending", "Decorative architectural hardware", "Kitchenware finishing"],
    specifications: [
      { label: "Web Material", value: "Dense Non-Woven Synthetic Nylon" },
      { label: "Grit Grades", value: "Coarse, Medium, Fine, Very Fine" },
      { label: "Density", value: "5D, 7D, 9D (Soft to Hard)" },
      { label: "Dimensions", value: "6\"x1\", 8\"x1\", 8\"x2\"" },
    ],
    available: "Custom arbor center holes and interleaved (flap-combo) variants available.",
  },
  {
    id: "05",
    slug: "polishing-buffing-wheels",
    name: "Polishing & Buffing Wheels",
    badge: "Mirror Gloss",
    description: "Cotton and cloth wheels designed for high-clarity mirror polishing and final gloss work.",
    images: [Buffing1, Buffing2, Buffing3],
    overview:
      "Manufactured from high-grade close-weave cotton fabrics and sisal cloth. Paired with polishing compound wax, these buffing wheels generate maximum reflection, zero haze, and superior mirror brilliance on steel and brass.",
    features: [
      "High thread count cotton fabric ensures long wheel life",
      "Holds compound longer for reduced consumption",
      "Concentric stitching for balance and vibration-free running",
      "Available in soft, medium, and hard treatments",
    ],
    applications: ["Mirror polishing", "Final stage buffing", "PVD coating preparation", "Handrails & cutlery"],
    specifications: [
      { label: "Fabric", value: "100% Cotton / Sisal / Bias Cut" },
      { label: "Stitching", value: "Spiral, Concentric, Radial" },
      { label: "Diameter", value: "4\" to 18\"" },
      { label: "Ply / Thickness", value: "20 ply, 40 ply, 60 ply, 80 ply" },
    ],
    available: "Custom stitch density and arbor hole dimensions made to order.",
  },
  {
    id: "06",
    slug: "polishing-wax",
    name: "Polishing Wax",
    badge: "High Gloss",
    description: "Specialized compounding wax formulated for buffing wheels to achieve a smooth, bright luster.",
    images: [Wax1, Wax2, Wax3],
    overview:
      "Formulated with micro-fine abrasive powders and specialty lubricants, KT Glow buffing bars melt smoothly against the spinning wheel and leave a flawless, streak-free mirror shine with zero haze.",
    features: [
      "Fast cutting with ultra-fine clarity",
      "Clean wipe-off with minimal greasy residue",
      "Uniform compound consistency from end to end",
      "Available for cutting (black/brown) and finishing (green/white)",
    ],
    applications: ["Final mirror polishing", "Coloring stage", "Stainless steel fabrication", "Brass & aluminum"],
    specifications: [
      { label: "Colors Available", value: "Green (Super Mirror), White, Brown" },
      { label: "Bar Weight", value: "800g - 1000g per bar" },
      { label: "Solubility", value: "Easily cleanable in ultrasonic bath" },
      { label: "Packaging", value: "Individual wrap, master cartons" },
    ],
    available: "Available in bulk commercial cartons with Pan-India dispatch.",
  },
  {
    id: "07",
    slug: "rubber-roll",
    name: "Rubber Roll",
    badge: "High Resilience",
    description: "Heavy-duty rubber contact rolls and expander wheels engineered for uniform belt grinding and precision finishing.",
    images: [Ruberroll1, Ruberroll2, Ruberroll3],
    overview:
      "Manufactured with premium-grade synthetic and natural elastomers, KT Glow Rubber Contact Rolls provide balanced cushioning, consistent contact pressure, and vibration-free running. Designed specifically for wide-belt grinders, centerless tube polishers, and sheet finishing machinery to ensure optimal abrasive belt cut-rate and surface uniformity.",
    features: [
      "Dynamically balanced core prevents machine vibration and surface chatter marks",
      "High-grade heat- and oil-resistant rubber compound for extended service life",
      "Available with helical serrated grooves or smooth face for cutting & finishing versatility",
      "Uniform durometer hardness across the complete face width prevents uneven edge wear",
    ],
    applications: [
      "Stainless steel tube, pipe & conduit polishing",
      "Wide-belt surface grinding and hairline finishing",
      "Centerless cylindrical bar grinding",
      "Coil and strip line descaling and graining",
    ],
    specifications: [
      { label: "Hardness (Shore A)", value: "35° to 90° Durometer (Customizable)" },
      { label: "Core Material", value: "Dynamically Balanced Aluminum / Cast Steel" },
      { label: "Surface Profile", value: "Helical Serrated (Aggressive) / Plain Smooth (Finishing)" },
      { label: "Groove Angle", value: "45° / 60° Standard Spiral Fluting" },
      { label: "Operating Speed", value: "Up to 3,500 RPM" },
    ],
    available: "Custom shaft bore, keyway, face width, diameter, and grooving patterns manufactured to machine blueprints.",
  },
];