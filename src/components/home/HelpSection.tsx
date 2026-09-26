import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eyebrow } from "@/components/shared/Eyebrow";

const cards = [
  {
    title: "Foreclosure Recovery",
    image: "/images/home/help-foreclosure.webp",
    alt: "Foreclosure Recovery service card",
    to: "/our-process",
  },
  {
    title: "Unclaimed State Funds",
    image: "/images/home/help-unclaimed.webp",
    alt: "Unclaimed State Funds service card",
    to: "/our-process#unclaimed-state-funds",
  },
  {
    title: "Bankruptcy Unclaimed Funds",
    image: "/images/home/help-bankruptcy.webp",
    alt: "Bankruptcy Unclaimed Funds service card",
    to: "/contact-us",
  },
  {
    title: "Eviction Defense",
    image: "/images/home/help-eviction.webp",
    alt: "Eviction Defense service card",
    to: "/contact-us",
  },
];

export function HelpSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Eyebrow label="How We Help" />
        </motion.div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="min-w-0"
            >
              <Link
                to={card.to}
                className="group block w-full overflow-hidden rounded-sm shadow-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <span className="sr-only">{card.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
