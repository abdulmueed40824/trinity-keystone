import { cn } from "@/lib/utils";

interface EyebrowProps {
  label: string;
  className?: string;
  lineClassName?: string;
  textClassName?: string;
}

/** Thin gold line + uppercase gold tracked label, used before every H1/H2. */
export function Eyebrow({ label, className, lineClassName, textClassName }: EyebrowProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className={cn("h-px w-10 bg-accent", lineClassName)} />
      <span
        className={cn(
          "text-[13px] font-bold uppercase tracking-[0.25em] text-accent",
          textClassName,
        )}
      >
        {label}
      </span>
    </div>
  );
}
