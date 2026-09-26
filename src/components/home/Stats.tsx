import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { useCountUp } from "@/lib/useCountUp";

const stats = [
  { value: 1000, format: (n: number) => `${n.toLocaleString()}+`, label: "Trusted Clients" },
  { value: 95, format: (n: number) => `${n}%`, label: "Successful Recovery" },
  { value: 10, format: (n: number) => `${n}M+`, label: "Surplus funds claimed" },
];

function StatItem({ value, format, label, delay }: { value: number; format: (n: number) => string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCountUp(value, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="font-display text-accent leading-none text-[clamp(2.75rem,6vw,4.5rem)]">
        {format(count)}
      </div>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-white/70 md:text-base">
        {label}
      </p>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="relative w-full overflow-hidden bg-primary py-20 md:py-28">
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="mb-10 flex justify-center md:mb-14">
          <Eyebrow label="Our Impact" />
        </div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <img
            src="/images/home/stats-map.webp"
            alt="World map with an upward trend arrow representing surplus funds claimed"
            width={612}
            height={408}
            loading="lazy"
            className="mx-auto h-auto w-full max-w-md opacity-80"
          />

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} {...stat} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
