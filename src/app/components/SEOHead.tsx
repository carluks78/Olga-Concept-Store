import { useEffect } from "react";

export function SEOHead() {
  useEffect(() => {
    // Title
    document.title = "Olga Concept Store — Mode, Bijoux, Déco & Cosmétiques à Pacy-sur-Eure";

    const setMeta = (attrs: Record<string, string>) => {
      const selector = Object.entries(attrs)
        .filter(([k]) => k !== "content")
        .map(([k, v]) => `[${k}="${v}"]`)
        .join("");
      let el = document.head.querySelector(`meta${selector}`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        Object.entries(attrs).filter(([k]) => k !== "content").forEach(([k, v]) => el!.setAttribute(k, v));
        document.head.appendChild(el);
      }
      el.setAttribute("content", attrs.content);
    };

    const setLink = (attrs: Record<string, string>) => {
      const rel = attrs.rel;
      const href = attrs.href;
      const selector = `link[rel="${rel}"]${attrs.sizes ? `[sizes="${attrs.sizes}"]` : ""}`;
      let el = document.head.querySelector(selector) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    };

    // Primary SEO
    setMeta({ name: "description", content: "Olga Concept Store à Pacy-sur-Eure (27120) — Boutique premium : mode femme, bijoux raffinés, décoration intérieure et cosmétiques naturels. Sélections faites avec amour. Concept store près de Vernon, Évreux, Gaillon." });
    setMeta({ name: "keywords", content: "concept store Pacy-sur-Eure, boutique déco Pacy-sur-Eure, bijoux Pacy-sur-Eure, boutique cadeaux Eure, cosmétiques naturels Normandie, mode femme Vernon, boutique lifestyle Eure, idées cadeaux Évreux, décoration intérieure 27" });
    setMeta({ name: "robots", content: "index, follow" });
    setMeta({ name: "author", content: "Olga Concept Store" });
    setMeta({ name: "theme-color", content: "#C97A7A" });

    // Geo tags
    setMeta({ name: "geo.region", content: "FR-27" });
    setMeta({ name: "geo.placename", content: "Pacy-sur-Eure" });
    setMeta({ name: "geo.position", content: "49.0183;1.3876" });
    setMeta({ name: "ICBM", content: "49.0183, 1.3876" });

    // Open Graph
    setMeta({ property: "og:type", content: "website" });
    setMeta({ property: "og:url", content: "https://olga-conceptstore.fr/" });
    setMeta({ property: "og:site_name", content: "Olga Concept Store" });
    setMeta({ property: "og:title", content: "Olga Concept Store — Boutique mode, bijoux & déco à Pacy-sur-Eure" });
    setMeta({ property: "og:description", content: "Concept store premium à Pacy-sur-Eure. Mode femme, bijoux raffinés, décoration et cosmétiques naturels. Sélections faites avec amour, près de Vernon et Évreux." });
    setMeta({ property: "og:image", content: "https://olga-conceptstore.fr/og-image.png" });
    setMeta({ property: "og:image:width", content: "1200" });
    setMeta({ property: "og:image:height", content: "630" });
    setMeta({ property: "og:image:alt", content: "Olga Concept Store — Pacy-sur-Eure" });
    setMeta({ property: "og:locale", content: "fr_FR" });

    // Twitter / X
    setMeta({ name: "twitter:card", content: "summary_large_image" });
    setMeta({ name: "twitter:site", content: "@olga_conceptstore" });
    setMeta({ name: "twitter:title", content: "Olga Concept Store — Mode, Bijoux & Déco à Pacy-sur-Eure" });
    setMeta({ name: "twitter:description", content: "Boutique lifestyle premium à Pacy-sur-Eure. Mode, bijoux, décoration et cosmétiques sélectionnés avec amour." });
    setMeta({ name: "twitter:image", content: "https://olga-conceptstore.fr/og-image.png" });

    // Canonical
    setLink({ rel: "canonical", href: "https://olga-conceptstore.fr/" });

    // Favicon
    setLink({ rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" });
    setLink({ rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" });
    setLink({ rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" });
  }, []);

  return null;
}
