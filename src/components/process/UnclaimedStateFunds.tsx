import { motion } from "framer-motion";

const sources = [
  "bank accounts",
  "safety deposit boxes",
  "uncashed checks",
  "money orders",
  "insurance policies",
  "stocks",
  "bonds",
  "mutual funds",
  "trust funds",
  "royalties",
  "escrow accounts",
];

export function UnclaimedStateFunds() {
  return (
    <section id="unclaimed-state-funds" className="bg-soft-stone py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="font-display text-primary leading-[1.1] text-[clamp(2rem,4.5vw,3.25rem)]"
          >
            Unclaimed State Funds
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 space-y-6 text-base leading-[1.7] text-primary/80 md:text-lg"
          >
            <p>
              Unclaimed state funds are money that rightfully belongs to individuals but has gone unclaimed. It may sound surprising, but many people have funds owed to them from sources such as bank accounts, safety deposit boxes, uncashed checks, money orders, insurance policies, stocks, bonds, mutual funds, trust funds, royalties, and escrow accounts. When these funds remain unclaimed, they are eventually turned over to the state treasury after the institutions are unable to contact the rightful owners.
            </p>
            <p>
              At The GRR8TS Investments LLC DBA Trinity Keystone Group LLC, we are licensed finders who work directly with the state to help you file a claim and recover these funds.
            </p>
            <p>
              We charge no upfront fees and handle all filings on your behalf, ensuring the process is simple, professional, and completely risk-free.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {sources.map((source) => (
            <span
              key={source}
              className="rounded-full border border-accent/50 bg-card px-5 py-2.5 text-sm font-medium capitalize text-primary"
            >
              {source}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
