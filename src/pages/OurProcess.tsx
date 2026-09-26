import { Seo } from "@/components/Seo";
import { ProcessHero } from "@/components/process/ProcessHero";
import { FourPillars } from "@/components/process/FourPillars";
import { UnclaimedStateFunds } from "@/components/process/UnclaimedStateFunds";
import { HowItWorksCta } from "@/components/process/HowItWorksCta";
import { FAQSection } from "@/components/shared/FAQSection";
import { faqs } from "@/data/faqs";

export default function OurProcess() {
  return (
    <>
      <Seo
        title="Our Process | Trinity Keystone Group"
        description="We are fully licensed and work directly with county courts and treasury departments to assist individuals in properly filing surplus funds claims."
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
      <ProcessHero />
      <FourPillars />
      <UnclaimedStateFunds />
      <HowItWorksCta />
      <FAQSection
        image="/images/home/faq-illustration.webp"
        imageAlt="Illustration of a person considering a question"
        className="bg-background py-20 md:py-28"
      />
    </>
  );
}
