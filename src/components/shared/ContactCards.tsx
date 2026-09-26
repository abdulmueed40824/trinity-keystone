import { motion } from "framer-motion";
import type { Icon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export interface ContactCardItem {
  icon: Icon;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

export function ContactCard({ item, delay = 0 }: { item: ContactCardItem; delay?: number }) {
  const CardIcon = item.icon;
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className="group flex h-full w-full min-w-0 items-start gap-5 rounded-sm border border-border bg-card p-6 shadow-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl md:p-8"
    >
      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm bg-accent text-primary transition-transform duration-300 group-hover:-translate-y-0.5">
        <CardIcon size={24} weight="light" />
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-[12px] font-bold uppercase tracking-widest text-primary/50">
          {item.label}
        </span>
        <span className="mt-1 break-words font-display text-lg text-primary md:text-xl">{item.value}</span>
      </span>
    </motion.div>
  );

  if (!item.href) return content;

  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className="block min-w-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {content}
    </a>
  );
}

interface ContactCardsProps {
  items: ContactCardItem[];
  /** Pulls the grid up over the hero's bottom edge. */
  floating?: boolean;
  className?: string;
}

export function ContactCards({ items, floating, className }: ContactCardsProps) {
  return (
    <div
      className={cn(
        "relative z-10 mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-12",
        floating && "-mt-16 pt-10 md:-mt-20 md:pt-14",
        className,
      )}
    >
      <div
        className={cn(
          "grid grid-cols-1 gap-6",
          items.length === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2",
        )}
      >
        {items.map((item, i) => (
          <ContactCard key={item.label} item={item} delay={i * 0.08} />
        ))}
      </div>
    </div>
  );
}
