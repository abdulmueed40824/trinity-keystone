import { Link } from "react-router-dom";
import { contact } from "@/data/contact";

const navigate = [
  { name: "Home", to: "/" },
  { name: "Our Process", to: "/our-process" },
  { name: "FAQ's", to: "/faqs" },
  { name: "Contact Us", to: "/contact-us" },
];

const services = [
  { name: "Foreclosure Recovery", to: "/our-process" },
  { name: "Unclaimed State Funds", to: "/our-process#unclaimed-state-funds" },
  { name: "Bankruptcy Unclaimed Funds", to: "/contact-us" },
  { name: "Eviction Defense", to: "/contact-us" },
];

const linkClass =
  "relative w-fit text-white/70 transition-colors hover:text-accent after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-primary pt-20 pb-10 text-white md:pt-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 text-center sm:text-left md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          <div className="flex flex-col items-center gap-6 sm:items-start">
            <img src="/assets/logo-39fcf6c184dc.png" alt="Trinity Keystone Group" className="h-10 w-auto brightness-0 invert" />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Our mission is to guide and assist you through the process of recovering your unclaimed surplus funds—efficiently, securely, and with no upfront costs.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 sm:items-start">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.3em] text-accent">Navigate</h4>
            <nav className="flex flex-col items-center gap-4 sm:items-start">
              {navigate.map((item) => (
                <Link key={item.name} to={item.to} className={linkClass}>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center gap-6 sm:items-start">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.3em] text-accent">Services</h4>
            <nav className="flex flex-col items-center gap-4 sm:items-start">
              {services.map((item) => (
                <Link key={item.name} to={item.to} className={cnLinkSm()}>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center gap-6 sm:items-start">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.3em] text-accent">Contact</h4>
            <div className="flex flex-col items-center gap-5 sm:items-start">
              <div>
                <span className="mb-1 block text-[12px] uppercase tracking-widest text-white/40">Address</span>
                <p className="max-w-[22ch] font-display text-lg">{contact.address}</p>
              </div>
              <div>
                <span className="mb-1 block text-[12px] uppercase tracking-widest text-white/40">Phone</span>
                <a href={contact.phoneTel} className="font-display text-lg hover:text-accent transition-colors">
                  {contact.phone}
                </a>
              </div>
              <div>
                <span className="mb-1 block text-[12px] uppercase tracking-widest text-white/40">Email</span>
                <a href={`mailto:${contact.email}`} className="break-all font-display text-lg hover:text-accent transition-colors">
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-center text-[12px] font-medium uppercase tracking-widest text-white/40 md:flex-row md:text-left">
          <p>© 2026 {contact.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function cnLinkSm() {
  return "relative w-fit text-sm text-white/70 transition-colors hover:text-accent after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full";
}
