import { Seo } from "@/components/Seo";
import { Hero } from "@/components/home/Hero";
import { HelpSection } from "@/components/home/HelpSection";
import { OurDetails } from "@/components/home/OurDetails";
import { Stats } from "@/components/home/Stats";
import { FAQSection } from "@/components/shared/FAQSection";
import { StayUpdated } from "@/components/home/StayUpdated";
import { Testimonials } from "@/components/home/Testimonials";
import { faqs } from "@/data/faqs";
import { contact } from "@/data/contact";

export default function Home() {
  return (
    <>
      <Seo
        title="Surplus Funds Recovery | Trinity Keystone Group"
        description="We're here to help you recover your unclaimed surplus funds—efficiently, securely, and with no upfront costs."
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
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: contact.legalName,
            address: contact.address,
            email: contact.email,
            telephone: contact.phone,
          },
        ]}
      />
      <Hero />
      <HelpSection />
      <OurDetails />
      <Stats />
      <FAQSection
        image="/images/home/faq-illustration.webp"
        imageAlt="Illustration of a person considering a question"
        intro="Find answers to common questions about our services."
        className="bg-background py-20 md:py-28"
      />
      <StayUpdated />
      <Testimonials />
    </>
  );
}
