
import {
  Factory,
  Layers,
  Settings,
  CheckCircle2,
} from "lucide-react";

const processSteps = [
  {
    id: "01",
    icon: Factory,
    title: "Material Selection",
    description:
      "Carefully selecting suitable raw materials to ensure product quality and durability.",
  },
  {
    id: "02",
    icon: Layers,
    title: "Manufacturing",
    description:
      "Using efficient manufacturing processes to produce reliable industrial products.",
  },
  {
    id: "03",
    icon: Settings,
    title: "Precision Processing",
    description:
      "Maintaining accuracy and consistency through controlled production processes.",
  },
  {
    id: "04",
    icon: CheckCircle2,
    title: "Quality Inspection",
    description:
      "Inspecting finished products to meet quality standards before delivery.",
  },
];

const ManufacturingProcess = () => {
  return (
    <section className="bg-[#06182E] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-blue-300 sm:text-sm">
            Our Manufacturing Process
          </p>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            From Raw Materials
            <span className="block text-blue-300">
              to Reliable Products
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Every step is focused on quality, precision, and dependable
            industrial performance.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-300">
                    STEP {step.id}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-blue-300">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>
                </div>

                <h3 className="text-base font-semibold text-white sm:text-lg">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingProcess;
