import { motion } from "framer-motion";
import { HandCoins, ShieldCheck } from "@phosphor-icons/react";
import { Eyebrow } from "@/components/shared/Eyebrow";

const callouts = [
  {
    icon: HandCoins,
    text: "We operate on a contingency-fee basis, which means there are no upfront costs and we only get paid when your funds are successfully recovered.",
  },
  {
    icon: ShieldCheck,
    text: "Our experienced legal team brings over 20 years of industry expertise, ensuring your claim is handled professionally, accurately, and with the highest level of care to maximize your recovery.",
  },
];

export function OurDetails() {
  return (
    <section className="bg-soft-stone py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm border-2 border-accent/60 shadow-lg lg:sticky lg:top-32"
          >
            <img
              src="/images/home/consultation.webp"
              alt="Three colleagues reviewing surplus funds paperwork together at a table"
              width={600}
              height={790}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <Eyebrow label="You're entitled funds!" className="mb-6" />
              <h2 className="font-display text-primary leading-[1.1] text-[clamp(2rem,4.5vw,3.25rem)]">
                Reclaim What's Rightfully Yours
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-8 max-w-[65ch] space-y-6 text-base leading-[1.7] text-primary/80 md:text-lg"
            >
              <p>
                Our role is to guide and assist you through the process of filing a claim for your unclaimed surplus funds. We work directly with county agencies to ensure your claim is properly prepared, submitted, and followed through until your funds are successfully recovered.
              </p>
              <p>
                The advantage of working with us is that there are no upfront costs. We operate on a contingency basis and only receive a finder's fee once your claim is successfully approved and your funds are released—meaning you take on absolutely no financial risk.
              </p>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="my-10 border-l-2 border-accent pl-6 font-display text-xl italic leading-snug text-primary md:text-2xl"
            >
              We are here to make the surplus funds recovery process simple and completely hassle-free for you.
            </motion.blockquote>

            <div className="space-y-5">
              {callouts.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-5 rounded-sm border border-border bg-card p-6"
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm bg-primary text-accent">
                      <Icon size={22} weight="light" />
                    </span>
                    <p className="text-sm leading-relaxed text-primary/80 md:text-base">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
