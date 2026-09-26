import { MapPin, EnvelopeSimple } from "@phosphor-icons/react";
import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/shared/PageHero";
import { ContactCards } from "@/components/shared/ContactCards";
import { FAQSection } from "@/components/shared/FAQSection";
import { faqs } from "@/data/faqs";
import { contact } from "@/data/contact";

export default function Faqs() {
  return (
    <>
      <Seo
        title="FAQ's | Trinity Keystone Group"
        description="Find answers to common questions about our services."
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a ?? faq.steps?.join(" "),
              },
            })),
          },
        ]}
      />
      <PageHero
        title="FAQ's"
        crumb="FAQ's"
        image="/images/faqs/team-review.webp"
        imageAlt="Team reviewing documents together during a consultation"
        subheading="Find answers to common questions about our services."
        overlapBottom
      />
      <ContactCards
        floating
        items={[
          { icon: MapPin, label: "Address", value: contact.address },
          {
            icon: EnvelopeSimple,
            label: "Email Address",
            value: contact.email,
            href: `mailto:${contact.email}`,
          },
        ]}
      />
      <FAQSection
        image="/images/faqs/consultation.webp"
        imageAlt="Advisor in a one-on-one consultation"
        className="bg-background pb-20 pt-28 md:pb-28 md:pt-32"
      />
    </>
  );
}
