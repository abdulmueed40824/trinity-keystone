import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Quotes } from "@phosphor-icons/react";
import { Eyebrow } from "@/components/shared/Eyebrow";
import "swiper/css";

const testimonials = [
  {
    name: "Sophia",
    image: "/images/home/testimonial-sophia.webp",
    quote:
      "The GRR8TS Investments LLC DBA Trinity Keystone Group LLC separated themselves from other companies by providing knowledge on how foreclosures work and offering competitive rates.",
  },
  {
    name: "Mia",
    image: "/images/home/testimonial-mia.webp",
    quote:
      "It all started from my husband and I wanting to make a good investment in real estate. This team guided us every step of the way.",
  },
  {
    name: "Ava",
    image: "/images/home/testimonial-ava.webp",
    quote:
      "Working with this team was exceptional. Their professionalism and attention to detail made the entire process smooth and stress-free.",
  },
];

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <div className="flex h-full flex-col rounded-sm border border-border bg-card p-8 shadow-sm">
      <Quotes size={32} weight="fill" className="mb-6 text-accent" />
      <p className="flex-1 text-base leading-[1.7] text-primary/80">{testimonial.quote}</p>
      <div className="mt-8 flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={`Portrait of ${testimonial.name}, a client`}
          width={56}
          height={56}
          loading="lazy"
          className="h-14 w-14 rounded-full object-cover object-top"
        />
        <span className="font-display text-lg text-primary">{testimonial.name}</span>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-soft-stone py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Eyebrow label="Testimonials" />
        </motion.div>

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={testimonial.name} className="!h-auto pb-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="h-full"
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
