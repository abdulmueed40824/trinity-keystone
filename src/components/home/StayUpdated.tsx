import { motion } from "framer-motion";
import { contact } from "@/data/contact";

export function StayUpdated() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-visible rounded-sm bg-primary px-8 py-14 shadow-xl md:px-16 md:py-20"
        >
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative z-10 max-w-xl">
              <h2 className="font-display text-white leading-tight text-[clamp(2rem,4vw,3rem)]">
                Stay Updated!
              </h2>

              <a
                href={contact.smsLink}
                className="mt-6 block break-words font-display text-accent leading-tight text-[clamp(1.5rem,3.5vw,2.5rem)] transition-colors hover:text-accent/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              >
                TEXT START TO {contact.smsNumber}
              </a>

              <p className="mt-6 max-w-[60ch] text-xs leading-relaxed text-white/50 md:text-sm">
                By texting, you agree to receive marketing messages from {contact.legalName}. Messages &amp; data rates may apply | Freq vary | Text HELP for assistance. Text STOP to Unsubscribe.
              </p>
            </div>

            <div className="relative hidden justify-self-end lg:block">
              <img
                src="/images/home/text-start-phone.webp"
                alt="Phone screen showing a text message that says START"
                width={280}
                height={330}
                loading="lazy"
                className="relative z-10 w-[220px] translate-y-6 drop-shadow-2xl md:w-[260px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
