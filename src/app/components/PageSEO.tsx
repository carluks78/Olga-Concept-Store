import { useEffect } from "react";

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
}

export function PageSEO({ title, description, keywords, canonical, ogTitle, ogDescription }: PageSEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (attrs: Record<string, string>) => {
      const key = attrs.name ? `name` : `property`;
      const val = attrs.name || attrs.property || "";
      let el = document.head.querySelector(`meta[${key}="${val}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    };

    setMeta({ name: "description", content: description });
    if (keywords) setMeta({ name: "keywords", content: keywords });
    setMeta({ property: "og:title", content: ogTitle || title });
    setMeta({ property: "og:description", content: ogDescription || description });
    setMeta({ property: "og:url", content: canonical || "https://olga-conceptstore.fr/" });

    const canonicalEl = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonicalEl) canonicalEl.href = canonical || "https://olga-conceptstore.fr/";
  }, [title, description, keywords, canonical, ogTitle, ogDescription]);

  return null;
}
