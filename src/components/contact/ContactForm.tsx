import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CircleNotch, WarningCircle } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { submitContactForm } from "@/lib/submitContactForm";
import { contact } from "@/data/contact";

interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  transactionalConsent: boolean;
  marketingConsent: boolean;
}

type FormErrors = Partial<Record<keyof Pick<FormValues, "firstName" | "lastName" | "email">, string>>;

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  transactionalConsent: false,
  marketingConsent: false,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  return errors;
}

const inputClass = (hasError: boolean) =>
  cn(
    "h-14 w-full rounded-sm border bg-soft-stone/40 px-4 text-primary placeholder:text-primary/40 transition-all focus:outline-none focus:ring-2 focus:ring-accent",
    hasError ? "border-destructive" : "border-border",
  );

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const setField = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    setSubmitError(null);

    const result = await submitContactForm(values);

    if (result.success) {
      setStatus("idle");
      setValues(initialValues);
    } else {
      setStatus("error");
      setSubmitError(result.error ?? "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-soft-stone py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden aspect-[4/5] overflow-hidden rounded-sm border-2 border-accent/60 shadow-lg lg:sticky lg:top-32 lg:block"
          >
            <img
              src="/images/contact/consultation.webp"
              alt="Advisor greeting a client for a consultation"
              width={600}
              height={790}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="mb-10 font-display text-primary leading-[1.1] text-[clamp(2rem,4.5vw,3.25rem)]"
            >
              Have Any Question?
            </motion.h2>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary/70">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={values.firstName}
                    onChange={(e) => setField("firstName", e.target.value)}
                    aria-invalid={!!errors.firstName}
                    aria-describedby={errors.firstName ? "firstName-error" : undefined}
                    className={inputClass(!!errors.firstName)}
                  />
                  {errors.firstName && (
                    <p id="firstName-error" className="mt-2 flex items-center gap-1.5 text-sm text-destructive">
                      <WarningCircle size={16} /> {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary/70">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={(e) => setField("lastName", e.target.value)}
                    aria-invalid={!!errors.lastName}
                    aria-describedby={errors.lastName ? "lastName-error" : undefined}
                    className={inputClass(!!errors.lastName)}
                  />
                  {errors.lastName && (
                    <p id="lastName-error" className="mt-2 flex items-center gap-1.5 text-sm text-destructive">
                      <WarningCircle size={16} /> {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary/70">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone"
                    value={values.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    className={inputClass(false)}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary/70">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={(e) => setField("email", e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={inputClass(!!errors.email)}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 flex items-center gap-1.5 text-sm text-destructive">
                      <WarningCircle size={16} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <label htmlFor="transactionalConsent" className="flex items-start gap-3 cursor-pointer">
                  <input
                    id="transactionalConsent"
                    type="checkbox"
                    checked={values.transactionalConsent}
                    onChange={(e) => setField("transactionalConsent", e.target.checked)}
                    className="mt-1 h-5 w-5 flex-shrink-0 accent-primary"
                  />
                  <span className="text-xs leading-relaxed text-primary/70">
                    I consent to receive transactional messages related to my account, orders, or services I have requested from {contact.legalName}. These messages may include appointment reminders, order confirmations, and account notifications among others. Message frequency may vary. Message &amp; Data rates may apply. Reply HELP for help or STOP to opt-out.
                  </span>
                </label>

                <label htmlFor="marketingConsent" className="flex items-start gap-3 cursor-pointer">
                  <input
                    id="marketingConsent"
                    type="checkbox"
                    checked={values.marketingConsent}
                    onChange={(e) => setField("marketingConsent", e.target.checked)}
                    className="mt-1 h-5 w-5 flex-shrink-0 accent-primary"
                  />
                  <span className="text-xs leading-relaxed text-primary/70">
                    I consent to receive marketing and promotional messages, including special offers, discounts, new product updates among others from {contact.legalName}. Message frequency may vary. Message &amp; Data rates may apply. Reply HELP for help or STOP to opt-out.
                  </span>
                </label>
              </div>

              {status === "error" && submitError && (
                <div role="alert" className="flex items-start gap-2 rounded-sm border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
                  <WarningCircle size={18} className="mt-0.5 flex-shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className={cn(
                  "flex h-14 w-full items-center justify-center gap-2 rounded-sm bg-primary text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  status === "submitting" ? "cursor-not-allowed opacity-70" : "hover:-translate-y-0.5 hover:bg-primary/90 shadow-lg",
                )}
              >
                {status === "submitting" ? (
                  <CircleNotch size={20} className="animate-spin" />
                ) : (
                  <>
                    SUBMIT
                    <ArrowRight size={18} weight="bold" />
                  </>
                )}
              </button>

              <p className="pt-2 text-center text-xs text-primary/60">
                <a href="#" className="underline hover:text-accent">Privacy Policy</a>
                {" | "}
                <a href="#" className="underline hover:text-accent">Terms of Service</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
