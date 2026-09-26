import { motion } from "framer-motion";
import { Minus, Plus } from "@phosphor-icons/react";
import * as Accordion from "@radix-ui/react-accordion";
import { faqs } from "@/data/faqs";
import { Eyebrow } from "@/components/shared/Eyebrow";

interface FAQSectionProps {
  image?: string;
  imageAlt?: string;
  intro?: string;
  className?: string;
}

export function FAQSection({ intro, className }: FAQSectionProps) {
  return (
    <section className={className}>
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col items-center text-center"
        >
          <Eyebrow label="FAQ's" className="mb-6 justify-center" />
          <h2 className="font-display text-primary leading-[1.1] text-[clamp(2rem,4.5vw,3.25rem)]">
            FAQ's
          </h2>
          {intro && (
            <p className="mt-6 max-w-[46ch] text-lg leading-[1.7] text-primary/80 md:text-xl">
              {intro}
            </p>
          )}
        </motion.div>

        <Accordion.Root
          type="single"
          collapsible
          defaultValue="item-0"
          className="mx-auto w-full max-w-3xl space-y-4"
        >
          {faqs.map((faq, i) => (
            <Accordion.Item
              key={faq.q}
              value={`item-${i}`}
              className="overflow-hidden rounded-sm border border-border bg-card"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex min-h-[56px] w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-primary/5 md:p-6">
                  <span className="font-display text-base text-primary md:text-xl">
                    {faq.q}
                  </span>
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border text-primary transition-all group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground">
                    <Plus size={16} className="transition-transform duration-300 group-data-[state=open]:hidden group-data-[state=open]:rotate-90" />
                    <Minus size={16} className="hidden group-data-[state=open]:block" />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="px-5 pb-6 pt-0 text-left text-sm leading-[1.7] text-primary/80 md:px-6 md:text-base">
                  {faq.a && <p>{faq.a}</p>}
                  {faq.steps && (
                    <ol className="space-y-3">
                      {faq.steps.map((step, idx) => (
                        <li key={step} className="flex gap-3">
                          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-primary">
                            {idx + 1}
                          </span>
                          <span className="pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
