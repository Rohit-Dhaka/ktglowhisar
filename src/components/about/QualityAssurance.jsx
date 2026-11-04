import {
  CheckCircle2,
  Microscope,
  
  Settings,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import QualityImg from '../../assets/images/qualityimg.png'

const qualityFeatures = [
  {
    id: "01",
    title: "Material & Product Inspection",
    description:
      "Abrasive discs, buffing wheels, and polishing compounds are evaluated against relevant product requirements to support reliable performance.",
    icon: Microscope,
  },
  {
    id: "02",
    title: "Process & Performance Monitoring",
    description:
      "Grinding, surface preparation, and polishing performance are monitored to support consistent finishing results and product reliability.",
    icon: Settings,
  },
  {
    id: "03",
    title: "Quality & Finish Consistency",
    description:
      "Finished products are checked against defined specifications to help maintain dependable quality, smooth surfaces, and consistent steel polishing results.",
    icon: CheckCircle2,
  },
];

const qualityPoints = [
  "Quality-focused manufacturing practices",
  "Product specification verification",
  "Consistent production standards",
  "Customer requirement alignment",
];

const QualityAssurance = () => {
  return (
    <section className="w-full overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ---------- Left: intro (sticky on desktop) ---------- */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-36">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-0.5 w-8 rounded-full bg-[#06182E]" />
                <p className="text-xs font-semibold uppercase tracking-widest text-black sm:text-sm">
                  Quality Assurance
                </p>
              </div>

              <h2 className="text-3xl font-bold leading-tight text-[#06182E] sm:text-4xl">
                Quality Is at the Core of Everything We Do
              </h2>

              <p className="mt-5 text-sm leading-7 text-black sm:text-base sm:leading-8">
                We focus on quality-oriented manufacturing practices, product
                inspection, and process consistency to support reliable
                industrial abrasive and polishing solutions.
              </p>

              {/* Image */}
              <div className="relative mt-8 overflow-hidden rounded border border-[#E5E7EB] bg-[#F5F6F8]">
                <img
                  src={QualityImg}
                  
                  alt="Industrial quality inspection and manufacturing"
                  className="h-[240px] w-full object-cover sm:h-[300px]"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-xs font-semibold text-[#06182E]">
                  Quality-Focused Manufacturing
                </span>
              </div>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#06182E] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Discuss Quality Requirements
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* ---------- Right: process timeline ---------- */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-black sm:text-sm">
              Our Quality Process
            </p>
            <h3 className="mt-3 text-2xl font-bold leading-tight text-[#06182E] sm:text-3xl">
              Maintaining Standards Through Every Stage
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-black sm:text-base sm:leading-8">
              From material selection to finished product inspection, we aim
              to meet defined specifications and customer expectations.
            </p>

            <ol className="relative mt-10">
              {/* Vertical line */}
              <span
                aria-hidden="true"
                className="absolute bottom-6 left-5 top-6 w-px bg-[#E5E7EB]"
              />

              {qualityFeatures.map(({ id, title, description, icon: Icon }) => (
                <li key={id} className="group relative pb-10 pl-16 last:pb-0">
                  <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#06182E] transition-colors duration-300 group-hover:border-[#06182E] group-hover:bg-[#06182E] group-hover:text-white">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>

                  <p className="text-xs font-bold uppercase tracking-widest text-black">
                    Stage {id}
                  </p>
                  <h4 className="mt-1 text-lg font-bold text-[#06182E] sm:text-xl">
                    {title}
                  </h4>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-black">
                    {description}
                  </p>
                </li>
              ))}
            </ol>         
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;