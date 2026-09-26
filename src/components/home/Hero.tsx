import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary py-20 pt-32 md:pt-36">
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/assets/hero-bg.jpg"
          alt="Couple in a consultation, reviewing paperwork with an advisor"
          className="h-full w-full object-cover opacity-30 grayscale mix-blend-luminosity"
          initial={reduceMotion ? undefined : { scale: 1.08 }}
          animate={reduceMotion ? undefined : { scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/50" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-12">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-accent" />
            <span className="text-[13px] font-bold uppercase tracking-[0.25em] text-accent">
              We're Here to Help
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="break-words font-display leading-[1.1] text-white text-[clamp(2.25rem,8vw,5.5rem)]"
          >
            Reclaim What's <br />
            <span className="text-accent">Rightfully Yours.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 mt-8 max-w-[52ch] text-lg leading-[1.7] text-white/80 md:text-xl"
          >
            Our mission is to guide and assist you through the process of recovering your unclaimed surplus funds—efficiently, securely, and with no upfront costs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="/contact-us"
              className="group inline-flex h-14 w-full items-center justify-center rounded-sm bg-accent px-8 font-bold tracking-wide text-primary transition-all hover:-translate-y-0.5 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
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
