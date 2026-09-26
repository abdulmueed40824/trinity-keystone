import { motion } from "framer-motion";
import { MapPin, EnvelopeSimple, Phone } from "@phosphor-icons/react";
import { ContactCard } from "@/components/shared/ContactCards";
import { contact } from "@/data/contact";

export function ContactInfoMap() {
  return (
    <section className="relative z-10 -mt-16 w-full overflow-hidden bg-background pb-20 pt-10 md:-mt-20 md:pb-28 md:pt-14">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] lg:gap-10">
          <div className="grid grid-cols-1 gap-6">
            <ContactCard item={{ icon: MapPin, label: "Address", value: contact.address }} delay={0} />
            <ContactCard
              item={{ icon: EnvelopeSimple, label: "Email Address", value: contact.email, href: `mailto:${contact.email}` }}
              delay={0.08}
            />
            <ContactCard
              item={{ icon: Phone, label: "Phone Number", value: contact.phone, href: contact.phoneTel }}
              delay={0.16}
            />
          </div>

          <motion.a
            href={contact.mapQueryUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative block min-w-0 overflow-hidden rounded-sm border border-border shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Open our location, 278 Cedar Lane, Vienna VA 22180, in Google Maps"
          >
            <img
              src="/images/contact/map.webp"
              alt="Static map showing our office location at 278 Cedar Lane, Vienna VA 22180"
              width={1280}
              height={600}
              loading="lazy"
              className="h-full min-h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-primary/0 p-6 transition-colors group-hover:bg-primary/10">
              <span className="rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                Open in Google Maps
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
