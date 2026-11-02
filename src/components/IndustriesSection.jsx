const industries = [
  {
    id: "01",
    title: "Construction",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "02",
    title: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "03",
    title: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "04",
    title: "Engineering",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
  },
];

// Desktop mosaic: first tile is large, last tile is wide
const tileSpan = [
  "lg:col-span-2 lg:row-span-2",
  "",
  "",
  "lg:col-span-2",
];

const IndustriesSection = () => {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#123E74]">
                Industries We Serve
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#06182e] sm:text-4xl lg:text-5xl">
              Steel solutions for
              <span className="block text-[#123E74]">every industry.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-gray-500 sm:text-base">
            Our steel products support a wide range of industries with
            dependable materials and quality solutions.
          </p>
        </div>

        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[15rem] lg:grid-cols-4">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className={`group relative h-60 overflow-hidden rounded-lg lg:h-auto ${tileSpan[index]}`}
            >
              <img
                src={industry.image}
                alt={industry.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#06182e]/85 via-[#06182e]/15 to-transparent" />

              <span className="absolute left-5 top-5 text-xs font-semibold tracking-widest text-white/80">
                {industry.id}
              </span>

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h3
                  className={`font-bold text-white ${
                    index === 0 ? "text-2xl sm:text-3xl" : "text-xl"
                  }`}
                >
                  {industry.title}
                </h3>                                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;


// import React from "react";

// const industries = [
//   {
//     id: 1,
//     title: "Construction",
//     image:
//       "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 2,
//     title: "Manufacturing",
//     image:
//       "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 3,
//     title: "Infrastructure",
//     image:
//       "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 4,
//     title: "Engineering",
//     image:
//       "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
//   },
// ];

// const IndustriesSection = () => {
//   return (
//     <section className="bg-white py-14 sm:py-16 lg:py-20">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


//         <div className="mb-10">
//           <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#123E74]">
//             Industries We Serve
//           </p>

//           <h2 className="text-2xl font-bold text-[#06182e] sm:text-3xl lg:text-4xl">
//             Steel Solutions for Every Industry
//           </h2>

//           <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
//             Our steel products support a wide range of industries with
//             dependable materials and quality solutions.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {industries.map((industry) => (
//             <div
//               key={industry.id}
//               className="group overflow-hidden rounded-xl border border-gray-200 bg-white"
//             >
//               <div className="h-52 overflow-hidden">
//                 <img
//                   src={industry.image}
//                   alt={industry.title}
//                   className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
//                 />
//               </div>

//               <div className="p-4">
//                 <h3 className="text-base font-semibold text-[#06182e] sm:text-lg">
//                   {industry.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default IndustriesSection;
