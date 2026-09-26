import { motion } from "framer-motion";
import { CurrencyCircleDollar, ListChecks, Scales, MagnifyingGlass, type Icon } from "@phosphor-icons/react";

interface Pillar {
  number: string;
  title: string;
  icon: Icon;
  body: string;
}

const pillars: Pillar[] = [
  {
    number: "01",
    title: "No Upfront Fees",
    icon: CurrencyCircleDollar,
    body: "At The GRR8TS Investments LLC DBA Trinity Keystone Group LLC, we are committed to helping you recover your surplus funds without placing any financial burden on you. That’s why we charge no upfront fees and operate on a contingency basis. We only receive compensation if and when your funds are successfully recovered. This ensures our interests are fully aligned with yours, and you can have confidence that our team will work diligently to secure the maximum amount you are entitled to receive.",
  },
  {
    number: "02",
    title: "Direct Lists from the County",
    icon: ListChecks,
    body: "To streamline the recovery process, we maintain direct relationships with county courts and treasury departments. Through these connections, we receive updated records of individuals who may be entitled to surplus or unclaimed funds. This allows us to quickly identify potential claimants and take immediate action, ensuring no eligible funds go overlooked and every rightful owner has the opportunity to recover what is legally theirs.",
  },
  {
    number: "03",
    title: "No Legal Fees for You",
    icon: Scales,
    body: "We understand that legal fees can be a major concern when pursuing surplus funds. To remove this burden, The GRR8TS Investments LLC DBA Trinity Keystone Group LLC covers all legal fees associated with your claim. Our team of licensed attorneys, with experience across multiple states, has the expertise to handle every legal aspect of the recovery process. This ensures our clients can have peace of mind, knowing their claim is managed by professionals who will navigate all complexities on their behalf.",
  },
  {
    number: "04",
    title: "Dedicated Researchers and Private Investigators",
    icon: MagnifyingGlass,
    body: "At The GRR8TS Investments LLC DBA Trinity Keystone Group LLC, we have a dedicated team of researchers and private investigators who are instrumental in our success. Using their expertise, they identify individuals who may be entitled to surplus or unclaimed funds. Once potential claimants are located, we reach out to them and clearly explain our process, providing all the information needed to initiate their claim efficiently and securely.",
  },
];

export function FourPillars() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div className="hidden lg:block">
            <div className="sticky top-32 aspect-[4/5] overflow-hidden rounded-sm border-2 border-accent/60 shadow-lg">
              <img
                src="/images/process/handshake.webp"
                alt="Two professionals shaking hands over a signed contract agreement"
                width={570}
                height={570}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-16 md:space-y-20">
            {pillars.map((pillar, i) => {
              const PillarIcon = pillar.icon;
              return (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="relative border-b border-border pb-12 last:border-0 last:pb-0"
                >
                  <div className="mb-5 flex items-center gap-5">
                    <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-sm bg-primary text-accent">
                      <PillarIcon size={26} weight="light" />
                    </span>
                    <span
                      aria-hidden
                      className="font-display text-4xl text-transparent [-webkit-text-stroke:1px_hsl(var(--primary)/0.2)] md:text-5xl"
                    >
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="font-display text-primary text-2xl md:text-3xl">{pillar.title}</h3>
                  <p className="mt-4 max-w-[65ch] text-base leading-[1.7] text-primary/80 md:text-lg">
                    {pillar.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
