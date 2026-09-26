import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";

export function HowItWorksCta() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="font-display text-white leading-[1.1] text-[clamp(2rem,4.5vw,3.25rem)]"
          >
            How It Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-[65ch] text-lg leading-[1.7] text-white/80"
          >
            At The GRR8TS Investments LLC DBA Trinity Keystone Group LLC, we manage the entire surplus funds recovery process for you — from research and documentation to handling legal fees and follow-up with the county. This allows our clients to relax while we navigate the complexities on their behalf. Trust our experienced team to help you reclaim your surplus funds efficiently and professionally. Contact us today to start recovering what is rightfully yours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
