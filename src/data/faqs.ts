export interface Faq {
  q: string;
  /** Plain paragraph answer. Mutually exclusive with `steps`. */
  a?: string;
  /** Numbered-list answer. Mutually exclusive with `a`. */
  steps?: string[];
}

/**
 * The 5 FAQs, verbatim from the Content folder. Identical on every page —
 * do not fork this list per-page.
 */
export const faqs: Faq[] = [
  {
    q: "What exactly are surplus funds and how do they arise?",
    a: "Surplus funds — also called excess proceeds — are the leftover money from a foreclosure sale after the mortgage balance, liens, and related costs have been fully paid. If your property sells for more than what you owed, that remaining amount belongs to you and can be claimed.",
  },
  {
    q: "What indicates that I might be entitled to surplus funds?",
    a: "If your property was sold at a foreclosure auction and the sale generated funds above what was owed in debts and fees, you may be eligible to claim the surplus. Our team can help assess your eligibility by reviewing the relevant sale details and court records",
  },
  {
    q: "Can you explain the process for getting surplus funds released after a foreclosure?",
    steps: [
      "Confirming your eligibility to claim surplus funds after a foreclosure sale.",
      "Collecting the necessary documentation and court records to support your claim.",
      "Preparing and submitting the claim to the appropriate county, court, or state office.",
      "Monitoring and following up to ensure your claim is processed and resolved.",
    ],
  },
  {
    q: "Do I need to pay anything upfront to begin the claim process?",
    a: "No — we work on a contingency basis, which means you won't pay anything upfront. We only receive a fee if and when we successfully recover your funds, so there's no financial risk to you.",
  },
  {
    q: "How much time does it usually take to recover surplus funds?",
    a: "The time it takes to recover surplus funds can vary based on how complex your case is and how quickly the county processes claims. In many cases, the process takes several weeks to a few months, and in more involved situations it may take longer. Our team works hard to move things along efficiently and keeps you updated at every step.",
  },
];
