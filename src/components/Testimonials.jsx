import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  useReducedMotion,
} from "framer-motion";
import {
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
  MessageSquareQuote,
} from "lucide-react";

const testimonials = [
  {
    id: "01",
    name: "Customer Name",
    role: "Industrial Buyer",
    company: "Manufacturing Company",
    review:
      "We appreciate the product quality and consistent performance. The solutions meet our industrial requirements and provide reliable results for our operations.",
    rating: 5,
  },
  {
    id: "02",
    name: "Customer Name",
    role: "Procurement Manager",
    company: "Engineering Industry",
    review:
      "The products have been suitable for our polishing and finishing applications. Their focus on quality and professional communication makes our experience smooth.",
    rating: 5,
  },
  {
    id: "03",
    name: "Customer Name",
    role: "Production Head",
    company: "Industrial Manufacturing",
    review:
      "We value the attention to product consistency and application requirements. Their industrial abrasive solutions support our day-to-day production needs.",
    rating: 5,
  },
  {
    id: "04",
    name: "Customer Name",
    role: "Business Owner",
    company: "Metal Processing Company",
    review:
      "A dependable product range for industrial finishing requirements. We appreciate the responsive support and commitment to delivering suitable solutions.",
    rating: 5,
  },
  {
    id: "05",
    name: "Customer Name",
    role: "Operations Manager",
    company: "Steel Processing Company",
    review:
      "The product range supports our finishing processes with dependable quality. We appreciate the professional approach and attention to our application needs.",
    rating: 5,
  },
  {
    id: "06",
    name: "Customer Name",
    role: "Quality Manager",
    company: "Metal Components Manufacturer",
    review:
      "Consistent product quality and practical solutions are important to our workflow. The range helps us address our industrial finishing requirements.",
    rating: 5,
  },
];

const AUTO_DELAY = 5000;
const EASE = [0.22, 1, 0.36, 1];
const ITEMS_PER_SLIDE = 3;

const testimonialSlides = Array.from(
  { length: Math.ceil(testimonials.length / ITEMS_PER_SLIDE) },
  (_, slideIndex) =>
    testimonials.slice(
      slideIndex * ITEMS_PER_SLIDE,
      slideIndex * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
    )
);

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const reduce = useReducedMotion();
  const slideCount = testimonialSlides.length;

  const next = () => {
    setActiveSlide((current) => (current + 1) % slideCount);
  };

  const previous = () => {
    setActiveSlide((current) => (current - 1 + slideCount) % slideCount);
  };

  useEffect(() => {
    if (reduce || slideCount <= 1) return undefined;

    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slideCount);
    }, AUTO_DELAY);

    return () => clearInterval(timer);
  }, [reduce, slideCount]);

  return (
    <MotionConfig reducedMotion="user">
      <section className="w-full overflow-hidden bg-white px-4 sm:px-8 lg:px-12 py-14 sm:py-20  lg:py-24">
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

            <p className="max-w-xl text-sm leading-7 text-[#334155] sm:text-base sm:leading-8 lg:justify-self-end">
              Discover what customers say about our industrial abrasive and
              polishing solutions. We focus on product quality, reliable
              performance, and customer-oriented service.
            </p>
          </motion.div>

          {/* AUTOPLAY CAROUSEL: 3 CARDS PER SLIDE */}
          <div className="mt-10 sm:mt-14">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={reduce ? false : { opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? undefined : { opacity: 0, x: -24 }}
                  transition={{ duration: reduce ? 0 : 0.55, ease: EASE }}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
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
                      className="flex min-h-[320px] flex-col rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:min-h-[350px] sm:p-6 lg:p-7"
                    >
                      {/* CARD TOP */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: item.rating }).map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              size={15}
                              fill="#C9972B"
                              stroke="#C9972B"
                            />
                          ))}
                        </div>

                        <Quote
                          size={30}
                          strokeWidth={1.5}
                          className="text-[#C9972B]/50"
                          aria-hidden="true"
                        />
                      </div>

                      {/* REVIEW */}
                      <p className="mt-6 flex-1 text-sm leading-7 text-[#334155] sm:text-base sm:leading-8">
                        “{item.review}”
                      </p>

                      {/* CUSTOMER INFO */}
                      <div className="mt-7 border-t border-[#E2E8F0] pt-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#06182E] text-xs font-bold text-white">
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

                        <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#64748B] sm:text-xs">
                          <MessageSquareQuote size={14} />
                          Customer Feedback
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* CAROUSEL CONTROLS */}
          <div className="mt-7 flex flex-col items-center justify-between gap-5 sm:flex-row">
       

            {/* ARROWS */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous testimonials"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#06182E] transition-colors hover:bg-[#06182E] hover:text-white"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonials"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#06182E] text-white transition-opacity hover:opacity-80"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default Testimonials;
