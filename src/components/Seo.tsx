import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  /** Extra JSON-LD objects to inject as <script type="application/ld+json">. */
  jsonLd?: object[];
}

/**
 * Lightweight head manager — no react-helmet dependency. Sets the per-page
 * <title>/<meta description> and injects/cleans up JSON-LD <script> tags on
 * mount/unmount so structured data never leaks across route changes.
 */
export function Seo({ title, description, jsonLd }: SeoProps) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    let descTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const createdDescTag = !descTag;
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.name = "description";
      document.head.appendChild(descTag);
    }
    const prevDescription = descTag.content;
    descTag.content = description;

    const scripts: HTMLScriptElement[] = [];
    (jsonLd ?? []).forEach((data) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
      scripts.push(script);
    });

    return () => {
      document.title = prevTitle;
      if (createdDescTag) {
        descTag?.remove();
      } else if (descTag) {
        descTag.content = prevDescription;
      }
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, jsonLd]);

  return null;
}
