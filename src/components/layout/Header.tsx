import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link, useLocation } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { contact } from "@/data/contact";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Our Process", to: "/our-process" },
  { name: "FAQ's", to: "/faqs" },
  { name: "Contact Us", to: "/contact-us" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  // Esc-to-close + body scroll lock while the mobile menu is open.
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isMobileMenuOpen, closeMenu]);

  const showSolid = isScrolled || isMobileMenuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-5 md:px-8 lg:px-12",
          showSolid
            ? "py-4 bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
            : "py-8 bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <Link to="/" className="relative h-12 flex-shrink-0 md:h-16">
            <img
              src="/assets/logo-39fcf6c184dc.png"
              alt="Trinity Keystone Group"
              className={cn("h-full w-auto transition-all duration-300", !showSolid && "brightness-0 invert")}
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "relative py-1 text-sm font-medium tracking-wide transition-colors",
                    showSolid ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white",
                    isActive && (showSolid ? "text-primary" : "text-white"),
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-px bg-current transition-all duration-300",
                        isActive ? "w-full" : "w-0",
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact-us"
              className={cn(
                "hidden h-11 items-center rounded-sm px-6 text-sm font-semibold tracking-wide transition-all md:inline-flex",
                showSolid ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-white text-primary hover:bg-white/90",
              )}
            >
              Request a Consultation Now
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn("p-2 transition-colors lg:hidden", showSolid ? "text-foreground" : "text-white")}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <List size={28} weight="light" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[55] bg-primary/60 backdrop-blur-sm"
              onClick={closeMenu}
              aria-hidden
            />
            <motion.div
              key="panel"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed inset-y-0 right-0 z-[60] flex w-full max-w-sm flex-col bg-background shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border p-6">
                <img src="/assets/logo-39fcf6c184dc.png" alt="Trinity Keystone Group" className="h-8 w-auto" />
                <button onClick={closeMenu} className="p-2 text-foreground" aria-label="Close menu">
                  <X size={28} weight="light" />
                </button>
              </div>

              <div className="flex flex-1 flex-col space-y-6 overflow-y-auto p-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    className={({ isActive }) =>
                      cn("font-display text-2xl transition-colors", isActive ? "text-accent" : "text-foreground hover:text-primary")
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                <div className="mt-auto space-y-6 border-t border-border pt-8">
                  <Link
                    to="/contact-us"
                    className="inline-flex w-full items-center justify-center rounded-sm bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground"
                  >
                    Request a Consultation Now
                  </Link>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>
                      <a href={contact.phoneTel} className="hover:text-primary">{contact.phone}</a>
                    </p>
                    <p>
                      <a href={`mailto:${contact.email}`} className="hover:text-primary break-all">{contact.email}</a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
