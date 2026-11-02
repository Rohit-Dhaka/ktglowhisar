import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 10000, suffix: "+", label: "Tons Delivered" },
  { value: 100, suffix: "%", label: "Quality Checked" },
];

const DURATION_MS = 1600;
const useCountUp = (target, start) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return undefined;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setCount(target);
      return undefined;
    }

    let frame;
    const startedAt = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startedAt) / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3); 
      setCount(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, start]);

  return count;
};

const StatItem = ({ stat, visible }) => {
  const count = useCountUp(stat.value, visible);

  return (
    <div className="px-6 py-8 text-center sm:py-10 lg:py-12">
      <p className="text-4xl font-bold tabular-nums text-white sm:text-5xl">
        {count.toLocaleString("en-IN")}
        <span className="text-white/50">{stat.suffix}</span>
      </p>

      <span className="mx-auto mt-4 block h-0.5 w-8 bg-white/40" />

      <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-white/60 sm:text-sm">
        {stat.label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#06182e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-white/15 lg:grid-cols-4 lg:divide-x">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;