import { Star, Quote } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1];
const AUTOPLAY_INTERVAL = 5000;

const clientReviews = [
  {
    name: "Arjun Malhotra",
    role: "Plant Operations Manager",
    company: "Northline Metal Works",
    initials: "AM",
    review:
      "The product information helped our team evaluate abrasive solutions with greater clarity. Communication was professional and focused on our application.",
  },
  {
    name: "Priya Nair",
    role: "Strategic Sourcing Lead",
    company: "Vertex Engineering",
    initials: "PN",
    review:
      "A straightforward enquiry experience and clear technical discussions made it easier for us to understand the available options for our requirements.",
  },
  {
    name: "Karan Bansal",
    role: "Production Supervisor",
    company: "Apex Steel Components",
    initials: "KB",
    review:
      "We value suppliers who understand industrial processes. The support team took time to discuss our needs and share relevant product details.",
  },
  {
    name: "Meera Joshi",
    role: "Quality Control Manager",
    company: "Precision Fabrication Co.",
    initials: "MJ",
    review:
      "The focus on quality and application details was useful during our product evaluation. The conversations were clear and professional.",
  },
  {
    name: "Rohit Chauhan",
    role: "Procurement Head",
    company: "Orion Industrial Supplies",
    initials: "RC",
    review:
      "Their team made our business enquiry easy to navigate and provided helpful information as we explored industrial product requirements.",
  },
  {
    name: "Sana Qureshi",
    role: "Manufacturing Engineer",
    company: "Summit Metalcraft",
    initials: "SQ",
    review:
      "Technical assistance was relevant to our manufacturing context. It was helpful to have product discussions centered on our specific application.",
  },
];

const ResourcesCTASection = () => {
  const reduceMotion = useReducedMotion();
  const [activeReview, setActiveReview] = useState(0);

  const goToReview = (index) => {
    setActiveReview((index + clientReviews.length) % clientReviews.length);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % clientReviews.length);
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(interval);
  }, []);

  const review = clientReviews[activeReview];

  return (
    <section className="w-full overflow-hidden bg-[#F7F8FA] px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, ease: EASE }}
          className="mb-9 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-[#E0B04A]/40 bg-[#E0B04A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8A641B]">
              Client Experiences
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#06182E] sm:text-4xl lg:text-5xl">
              Built on trust.
              <span className="mt-1 block font-serif italic text-[#B8862B]">
                Driven by precision.
              </span>
            </h2>
        
          </div>

          <div className="flex items-center justify-between gap-4 lg:justify-end">
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-start sm:leading-8">
              Discover how industrial teams value clear product information,
              technical guidance, and dependable business support.
            </p>
          </div>
        </motion.div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <div className="grid min-h-[420px] grid-cols-1 lg:grid-cols-2">
            {/* LEFT: INDUSTRIAL IMAGE */}
            <motion.div
              key={`image-${activeReview}`}
              initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.55, ease: EASE }}
              className="relative min-h-[260px] overflow-hidden bg-[#06182E] sm:min-h-[360px] lg:min-h-full"
            >
              <img
                src="https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1400&q=85"
                alt="Industrial metal fabrication and manufacturing environment"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/90 via-[#06182E]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                  Industry Perspective
                </span>
                <p className="mt-4 max-w-sm text-xl font-semibold leading-snug text-white sm:text-2xl">
                  Solutions shaped around real manufacturing needs.
                </p>
              </div>
            </motion.div>

            {/* RIGHT: ONE REVIEW AT A TIME */}
            <motion.article
              key={`review-${activeReview}`}
              initial={reduceMotion ? false : { opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.45, ease: EASE }}
              className="flex min-w-0 flex-col justify-center p-6 sm:p-9 lg:p-12"
              aria-live="polite"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-1 text-[#D6A23A]" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={15} fill="currentColor" strokeWidth={1.5} />
                  ))}
                </div>
                <Quote size={34} className="shrink-0 text-[#E0B04A]/60" />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#8A641B]">
                Customer Feedback
              </p>
              <blockquote className="mt-3 text-lg font-medium leading-8 text-[#06182E] sm:text-xl sm:leading-9 lg:text-2xl">
                “{review.review}”
              </blockquote>

              <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#06182E] text-sm font-bold tracking-wide text-[#E0B04A]">
                  {review.initials}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-[#06182E] sm:text-base">
                    {review.name}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                    {review.role}
                  </p>
                  <p className="mt-1 truncate text-xs font-semibold text-[#8A641B] sm:text-sm">
                    {review.company}
                  </p>
                </div>
              </div>
            </motion.article>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2" aria-label="Choose client review">
          {clientReviews.map((item, index) => (
            <button
              key={item.initials}
              type="button"
              aria-label={`Show review ${index + 1}`}
              aria-current={activeReview === index ? "true" : undefined}
              onClick={() => goToReview(index)}
              className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0B04A] ${
                activeReview === index
                  ? "w-8 bg-[#06182E]"
                  : "w-2.5 bg-slate-300 hover:bg-[#D6A23A]"
              }`}
            />
          ))}
        </div>

   
      </div>
    </section>
  );
};

export default ResourcesCTASection;
