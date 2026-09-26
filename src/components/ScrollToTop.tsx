import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Restores scroll position on every route change. If the new URL carries a
 * hash (e.g. /our-process#unclaimed-state-funds), scrolls that section into
 * view instead of jumping to the top — used by react-router `Link`s across
 * pages (no in-page hash-scrolling nav).
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a tick so the destination page has mounted before we measure it.
      const id = window.setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        window.scrollTo({ top: 0 });
      }, 60);
      return () => window.clearTimeout(id);
    }

    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}
