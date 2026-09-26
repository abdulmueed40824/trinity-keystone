import { useEffect, useRef, useState } from "react";

/**
 * Animates 0 -> `end` once `start` becomes true, using an eased
 * requestAnimationFrame loop. Re-triggering `start` after it has already run
 * has no effect (count-up fires once, matching the "once on scroll" spec).
 */
export function useCountUp(end: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!start || hasRun.current) return;
    hasRun.current = true;

    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }

    let frame: number;
    const startTime = performance.now();
    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(easeOutExpo(progress) * end));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, end, duration]);

  return value;
}
