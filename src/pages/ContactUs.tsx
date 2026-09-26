import { Seo } from "@/components/Seo";
import { PageHero } from "@/components/shared/PageHero";
import { ContactInfoMap } from "@/components/contact/ContactInfoMap";
import { ContactForm } from "@/components/contact/ContactForm";
import { FAQSection } from "@/components/shared/FAQSection";
import { faqs } from "@/data/faqs";
import { contact } from "@/data/contact";

export default function ContactUs() {
  return (
    <>
      <Seo
        title="Contact Us | Trinity Keystone Group"
        description="Reach out to Trinity Keystone Group to start recovering your unclaimed surplus funds—no upfront costs, no obligation."
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: contact.legalName,
            address: contact.address,
            email: contact.email,
            telephone: contact.phone,
          },
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
        title="Contact Us"
        crumb="Contact Us"
        image="/images/contact/hero-couple.webp"
        imageAlt="Couple reviewing paperwork together during a consultation"
        overlapBottom
      />
      <ContactInfoMap />
      <ContactForm />
      <FAQSection
        image="/images/contact/team-review.webp"
        imageAlt="Team reviewing documents together during a consultation"
        className="bg-background py-20 md:py-28"
      />
    </>
  );
}
