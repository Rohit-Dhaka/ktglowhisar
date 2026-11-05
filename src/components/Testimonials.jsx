
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  useReducedMotion,
} from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    id: "01",
    name: "Amit Sharma",
    role: "Purchase Manager",
    company: "Sharma Steel Industries",
    review:
      "We appreciate the product quality and consistent performance. The solutions meet our industrial requirements and provide reliable results for our operations.",
    rating: 5,
  },
  {
    id: "02",
    name: "Rajesh Verma",
    role: "Procurement Manager",
    company: "Verma Engineering Works",
    review:
      "The products have been suitable for our polishing and finishing applications. Their focus on quality and professional communication makes our experience smooth.",
    rating: 5,
  },
  {
    id: "03",
    name: "Sandeep Gupta",
    role: "Production Head",
    company: "Gupta Metal Components",
    review:
      "We value the attention to product consistency and application requirements. Their industrial abrasive solutions support our day-to-day production needs.",
    rating: 5,
  },
  {
    id: "04",
    name: "Vikas Mehta",
    role: "Managing Director",
    company: "Mehta Metal Processing",
    review:
      "A dependable product range for industrial finishing requirements. We appreciate the responsive support and commitment to delivering suitable solutions.",
    rating: 5,
  },
  {
    id: "05",
    name: "Anil Kumar",
    role: "Operations Manager",
    company: "Kumar Steel Solutions",
    review:
      "The product range supports our finishing processes with dependable quality. We appreciate the professional approach and attention to our application needs.",
    rating: 5,
  },
  {
    id: "06",
    name: "Deepak Singh",
    role: "Quality Assurance Manager",
    company: "Singh Industrial Manufacturing",
    review:
      "Consistent product quality and practical solutions are important to our workflow. The range helps us address our industrial finishing requirements.",
    rating: 5,
  },
];

const AUTO_DELAY = 5000;
const EASE = [0.22, 1, 0.36, 1];

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  const reduce = useReducedMotion();

  // Responsive Items Per Slide
  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };

    updateItemsPerSlide();

    window.addEventListener("resize", updateItemsPerSlide);

    return () => {
      window.removeEventListener("resize", updateItemsPerSlide);
    };
  }, []);

  // Generate Responsive Slides
  const testimonialSlides = Array.from(
    { length: Math.ceil(testimonials.length / itemsPerSlide) },
    (_, slideIndex) =>
      testimonials.slice(
        slideIndex * itemsPerSlide,
        slideIndex * itemsPerSlide + itemsPerSlide,
      ),
  );

  const slideCount = testimonialSlides.length;

  // Keep Active Slide Valid After Resize
  useEffect(() => {
    setActiveSlide((current) => Math.min(current, slideCount - 1));
  }, [slideCount]);

  const next = () => {
    setActiveSlide((current) => (current + 1) % slideCount);
  };

  const previous = () => {
    setActiveSlide((current) => (current - 1 + slideCount) % slideCount);
  };

  // Autoplay
  useEffect(() => {
    if (reduce || slideCount <= 1) return undefined;

    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slideCount);
    }, AUTO_DELAY);

    return () => clearInterval(timer);
  }, [reduce, slideCount]);

  return (
    <MotionConfig reducedMotion="user">
      <section className="w-full overflow-hidden bg-white px-4 py-8 sm:px-8 sm:py-10 lg:px-12">
        <div className="mx-auto">
          {/* SECTION HEADER */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduce ? 0 : 0.7, ease: EASE }}
            className="grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-12"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-0.5 w-10 rounded-full bg-[#06182E]" />

                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#06182E] sm:text-sm">
                  Customer Testimonials
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Trusted by Industry.
                <span className="mt-1 block font-serif italic text-[#C9972B]">
                  Proven Through Experience.
                </span>
              </h2>
            </div>

            <div className="flex flex-col items-end">
              <p className="max-w-xl text-sm leading-7 text-[#334155] sm:text-base sm:leading-8">
                Discover what customers say about our industrial abrasive and
                polishing solutions. We focus on product quality, reliable
                performance, and customer-oriented service.
              </p>

              {/* ARROWS */}
              <div className="mt-5 flex items-center gap-3">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous testimonials"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#06182E] transition-colors hover:bg-[#06182E] hover:text-white sm:h-11 sm:w-11"
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonials"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#06182E] text-white transition-opacity hover:opacity-80 sm:h-11 sm:w-11"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* RESPONSIVE AUTOPLAY CAROUSEL */}
          <div className="mt-8 sm:mt-14">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={reduce ? false : { opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? undefined : { opacity: 0, x: -24 }}
                  transition={{
                    duration: reduce ? 0 : 0.55,
                    ease: EASE,
                  }}
                  className={`grid grid-cols-1 gap-4 ${
                    itemsPerSlide >= 2 ? "sm:grid-cols-2" : ""
                  } ${
                    itemsPerSlide >= 3 ? "lg:grid-cols-3 lg:gap-5" : ""
                  }`}
                >
                  {testimonialSlides[activeSlide].map((item, index) => (
                    <motion.article
                      key={item.id}
                      initial={reduce ? false : { opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: reduce ? 0 : 0.45,
                        delay: reduce ? 0 : index * 0.08,
                        ease: EASE,
                      }}
                      className="flex min-h-[300px] flex-col rounded-2xl border border-[#E2E8F0] bg-white p-4 sm:min-h-[350px] sm:p-6 lg:p-7"
                    >
                      {/* CARD TOP */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: item.rating }).map(
                            (_, starIndex) => (
                              <Star
                                key={starIndex}
                                size={15}
                                fill="#C9972B"
                                stroke="#C9972B"
                              />
                            ),
                          )}
                        </div>

                        <Quote
                          size={30}
                          strokeWidth={1.5}
                          className="text-[#C9972B]/50"
                          aria-hidden="true"
                        />
                      </div>

                      {/* REVIEW */}
                      <p className="mt-5 flex-1 text-sm leading-7 text-[#334155] sm:mt-6 sm:text-base sm:leading-8">
                        “{item.review}”
                      </p>

                      {/* CUSTOMER INFO */}
                      <div className="mt-6 border-t border-[#E2E8F0] pt-4 sm:mt-7 sm:pt-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#06182E] text-xs font-bold text-white sm:h-11 sm:w-11">
                            {item.id}
                          </div>

                          <div className="min-w-0">
                            <h3 className="truncate text-sm font-bold text-[#06182E] sm:text-base">
                              {item.name}
                            </h3>

                            <p className="mt-1 text-xs leading-5 text-[#64748B] sm:text-sm">
                              {item.role}
                            </p>

                            <p className="text-xs leading-5 text-[#64748B]">
                              {item.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default Testimonials;
