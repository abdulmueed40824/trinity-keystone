import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { Eyebrow } from "@/components/shared/Eyebrow";

export function ProcessHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-primary py-20 pt-32 md:pt-36">
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/images/process/hero-agreement.webp"
          alt="Two professionals shaking hands over a signed agreement"
          className="h-full w-full object-cover object-center opacity-35"
          initial={reduceMotion ? undefined : { scale: 1.08 }}
          animate={reduceMotion ? undefined : { scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Eyebrow label="How it Works" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display leading-[1.1] text-white text-[clamp(2.25rem,5vw,4rem)]"
          >
            We work directly with the county to secure the release of your surplus funds.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 max-w-[65ch] text-lg leading-[1.7] text-white/80"
          >
            We are fully licensed and work directly with county courts and treasury departments to assist individuals in properly filing surplus funds claims. Our team conducts detailed audits of county records and maintains direct communication with the county to obtain accurate information and real-time updates on the status of each claim.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10"
          >
            <Link
              to="/contact-us"
              className="group inline-flex h-14 items-center rounded-sm bg-accent px-8 font-bold tracking-wide text-primary transition-all hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Request a Consultation Now
              <ArrowRight className="ml-3 transition-transform group-hover:translate-x-1" weight="bold" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
