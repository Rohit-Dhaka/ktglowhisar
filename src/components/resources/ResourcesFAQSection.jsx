import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus, FileText, Wrench, PackageSearch, MessageCircle, ArrowUpRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const faqItems = [
  { id: "01", category: "Resources", question: "What can I find in the Resources section?", answer: "Explore product information, technical guidance, application insights, and supporting materials designed to help you understand industrial abrasive and polishing solutions.", icon: FileText },
  { id: "02", category: "Product Details", question: "Where can I find product specifications?", answer: "Product specifications are provided with the relevant product information when available. If you need a specific technical detail, contact our team with the product name or application requirement.", icon: PackageSearch },
  { id: "03", category: "Technical Help", question: "Can you help me choose the right abrasive for my application?", answer: "Yes. Share details such as the material, operation, finish requirement, and equipment being used. Our team can help you review suitable options and their application considerations.", icon: Wrench },
  { id: "04", category: "Documents", question: "Can I request a technical document or product guide?", answer: "You can request relevant product guides or technical documents through a business enquiry. Include the product or application you are researching so we can identify the appropriate material.", icon: FileText },
  { id: "05", category: "Support", question: "How do I get support for a specific requirement?", answer: "Use the contact or enquiry option on our website and describe your industrial requirement. Include any useful specifications, process details, or questions to help our team respond more accurately.", icon: MessageCircle },
];

const ResourcesFAQSection = () => {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full overflow-hidden bg-[#e8e9ea] px-4 py-8 sm:py-10 sm:px-8  lg:px-12">
      <div className="mx-auto">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.6, ease: EASE }}
          className="grid gap-8 border-b border-slate-200 pb-9 md:grid-cols-[1fr_auto] md:items-end sm:pb-12"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#B8862B]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8A641B]">Knowledge Center</span>
            </div>
            <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-[#06182E] sm:text-4xl lg:text-6xl">
              A clearer path to <span className="block font-serif italic text-[#B8862B]">your answers.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 md:pb-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E0B04A]/40 bg-white text-xl font-bold text-[#06182E] sm:h-16 sm:w-16 sm:text-2xl">05</div>
            <p className="max-w-[220px] text-sm leading-6 text-slate-600">Useful answers to common resource and product questions.</p>
          </div>
        </motion.header>

        <div className="mt-9 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: EASE }}
            className="flex flex-col justify-between rounded-3xl bg-[#06182E] p-6 text-white sm:p-8 lg:min-h-[520px]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E0B04A]">FAQ / Guide</p>
              <h3 className="mt-5 text-2xl font-bold leading-snug sm:text-3xl">Start with a question.<span className="mt-1 block font-serif italic text-[#E0B04A]">Find your direction.</span></h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">Select any topic from the list. The answer will unfold right beside it.</p>
            </div>
            <div className="mt-10 border-t border-white/15 pt-5">
              <div className="flex items-center justify-between gap-3"><span className="text-xs uppercase tracking-[0.14em] text-slate-400">Topics covered</span><span className="text-sm font-semibold text-[#E0B04A]">01 — 05</span></div>
              <div className="mt-4 flex gap-1.5" aria-hidden="true">
                {faqItems.map((item, index) => <span key={item.id} className={`h-1.5 flex-1 rounded-full ${index <= activeIndex ? "bg-[#E0B04A]" : "bg-white/15"}`} />)}
              </div>
            </div>
          </motion.aside>

          <div className="space-y-3">
            {faqItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;
              return (
                <motion.article
                  key={item.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.06, ease: EASE }}
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${isActive ? "border-[#E0B04A]/60 bg-white" : "border-slate-200 bg-white/70 hover:bg-white"}`}
                >
                  <button type="button" onClick={() => setActiveIndex(isActive ? -1 : index)} aria-expanded={isActive} className="flex w-full items-center gap-4 p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#E0B04A] sm:p-5">
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${isActive ? "bg-[#06182E] text-[#E0B04A]" : "bg-[#E9EDF1] text-[#06182E]"}`}><Icon size={18} strokeWidth={1.8} /></span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#8A641B] sm:text-xs">{item.id} / {item.category}</span>
                      <span className="mt-1.5 block text-sm font-semibold leading-6 text-[#06182E] sm:text-base sm:leading-7">{item.question}</span>
                    </span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${isActive ? "border-[#06182E] bg-[#06182E] text-[#E0B04A]" : "border-slate-200 text-[#06182E]"}`}>{isActive ? <Minus size={16} /> : <Plus size={16} />}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div key="answer" initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={reduceMotion ? undefined : { height: 0, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.3, ease: EASE }} className="overflow-hidden">
                        <div className="ml-[60px] border-t border-slate-100 px-4 pb-5 pt-4 sm:ml-[76px] sm:px-5">
                          <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{item.answer}</p>
                          <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#8A641B]">Helpful information <ArrowUpRight size={14} /></div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesFAQSection;
