import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CaretRight } from "@phosphor-icons/react";

interface PageHeroProps {
  title: string;
  image: string;
  imageAlt: string;
  subheading?: string;
  /** Trailing breadcrumb label; "Home" is always the first crumb. */
  crumb: string;
  /** Extra bottom padding so floating cards below can overlap the hero edge. */
  overlapBottom?: boolean;
}

export function PageHero({ title, image, imageAlt, subheading, crumb, overlapBottom }: PageHeroProps) {
  return (
    <section
      className={`relative flex min-h-[46vh] items-center overflow-hidden bg-primary pt-28 md:pt-32 ${
        overlapBottom ? "pb-32 md:pb-40" : "pb-16 md:pb-20"
      }`}
    >
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover object-center opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-12">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-sm font-medium text-white/70"
        >
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <CaretRight size={12} weight="bold" />
          <span className="text-accent">{crumb}</span>
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05]"
        >
          {title}
        </motion.h1>

        {subheading && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-[46ch] text-lg leading-[1.7] text-white/80"
          >
            {subheading}
          </motion.p>
        )}
      </div>
    </section>
  );
}
