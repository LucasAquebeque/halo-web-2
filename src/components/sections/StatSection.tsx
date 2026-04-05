"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

export default function StatsSection() {
  const stats: Stat[] = [
    { value: 25, suffix: "+", label: "Years of Experience" },
    { value: 850, suffix: "+", label: "Completed projects" },
    { value: 40, suffix: "+", label: "Service Points worldwide" },
  ];

  const [start, setStart] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#f5f5f5] py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 text-center">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} start={start} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({
  stat,
  start,
  delay,
}: {
  stat: Stat;
  start: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const timeout = setTimeout(() => {
      let current = 0;
      const increment = stat.value / 60;

      const counter = setInterval(() => {
        current += increment;

        if (current >= stat.value) {
          setCount(stat.value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 20);
    }, delay);

    return () => clearTimeout(timeout);
  }, [start, stat.value, delay]);

  return (
    <div className="opacity-0 translate-y-6 animate-fadeUp">
      <h3 className="text-5xl md:text-6xl font-light text-black">
        {count}
        {stat.suffix}
      </h3>

      <p className="mt-2 text-sm md:text-base text-gray-600">
        {stat.label}
      </p>
    </div>
  );
}