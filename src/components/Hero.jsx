
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero1 from '../assets/images/hero1.png'
import Hero2 from '../assets/images/hero2.png'
import Hero3 from '../assets/images/Hero3.png'
import Hero4 from '../assets/images/Hero4.png'

const slides = [
  {
    id: 1,
    image: Hero1,      
    subtitle: "KT GLOW — THALOR MANUFACTURER",
    title: "Precision Abrasives",
    highlight: "For a Flawless Steel Finish",
    description:
      "High-performance cutting, grinding and polishing solutions engineered for superior finishing.",
    button: "Explore Products",
    link: "/products",
  },
  {
    id: 2,
    image: Hero2,
    subtitle: "ENGINEERED FOR INDUSTRY",
    title: "Powerful Performance.",
    highlight: "Reliable Results.",
    description:
      "Advanced abrasive solutions built for precision, durability and demanding industrial applications.",
    button: "Discover Products",
    link: "/products",
  },
  {
    id: 3,
    image: Hero3,      
    subtitle: "QUALITY YOU CAN TRUST",
    title: "Built for Excellence.",
    highlight: "Made for Precision.",
    description:
      "Delivering consistent quality and professional finishing solutions for modern manufacturing.",
    button: "Our Products",
    link: "/products",
  },
  {
    id: 4,
    image: Hero4,      
    subtitle: "INDUSTRIAL ABRASIVE SOLUTIONS",
    title: "Designed for Strength.",
    highlight: "Made to Perform.",
    description:
      "Reliable abrasive products for demanding industrial cutting and grinding applications.",
    button: "Explore Solutions",
    link: "/products",
  },

];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // const nextSlide = () => {
  //   setActiveSlide((prev) => (prev + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#06182E]">

      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#06182E]/60" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06182E]/80 via-[#06182E]/50 to-[#06182E]/30" />

      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/50 via-transparent to-[#06182E]/20" />

      {/* Center Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">

        <div
          key={currentSlide.id}
          className="w-full max-w-4xl"
        >
          {/* Subtitle */}
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 sm:text-sm sm:tracking-[0.2em]">
            {currentSlide.subtitle}
          </p>

          {/* Heading */}
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:mt-5 sm:text-5xl lg:text-6xl xl:text-7xl">
            {currentSlide.title}
            <span className="mt-1 block text-slate-300 sm:mt-2">
              {currentSlide.highlight}
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/80 sm:mt-6 sm:text-base sm:leading-8">
            {currentSlide.description}
          </p>

          {/* CTA */}
          <Link
            to={currentSlide.link}
            className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#06182E] transition-colors duration-300 hover:bg-slate-200 sm:mt-8 sm:px-8 sm:py-3.5"
          >
            {currentSlide.button}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Previous / Next Buttons */}
      {/* <div className="absolute bottom-20 right-4 z-20 flex items-center gap-2 sm:bottom-24 sm:right-8">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20 sm:h-12 sm:w-12"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20 sm:h-12 sm:w-12"
        >
          <ChevronRight size={20} />
        </button>
      </div> */}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-10">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "w-8 bg-white"
                : "w-4 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
