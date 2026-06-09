import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { PageSEO } from "../components/PageSEO";
import { APropos } from "../components/APropos";
import { Link } from "react-router";
import { ArrowLeft, Heart } from "lucide-react";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Store"],
      "@id": "https://olga-conceptstore.fr/a-propos#business",
      name: "Olga Concept Store",
      description: "Concept store premium fondé avec passion à Pacy-sur-Eure en Normandie. Sélections uniques de mode femme, bijoux, décoration et cosmétiques naturels — Sélections faites avec amour.",
      url: "https://olga-conceptstore.fr/a-propos",
      telephone: "+33613096478",
      foundingLocation: { "@type": "Place", name: "Pacy-sur-Eure", address: { "@type": "PostalAddress", addressLocality: "Pacy-sur-Eure", postalCode: "27120", addressCountry: "FR" } },
      slogan: "Sélections faites avec amour",
      knowsAbout: ["Mode femme", "Bijoux", "Décoration intérieure", "Cosmétiques naturels", "Idées cadeaux"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://olga-conceptstore.fr/" },
        { "@type": "ListItem", position: 2, name: "À Propos", item: "https://olga-conceptstore.fr/a-propos" },
      ],
    },
  ],
};

function AProposHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #FAF7F4 0%, #FDF0EE 100%)",
        padding: "clamp(6rem, 12vw, 9rem) clamp(1.25rem, 5vw, 2.5rem) clamp(3rem, 6vw, 5rem)",
        textAlign: "center",
      }}
    >
      <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
        <Link
          to="/"
          style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            color: "#9E8E82", textDecoration: "none",
            fontFamily: "'Raleway', sans-serif", fontSize: "0.75rem",
            fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          <ArrowLeft size={14} /> Retour à l'accueil
        </Link>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "0.75rem" }}>
          <div style={{ width: "24px", height: "1px", backgroundColor: "#C97A7A" }} />
          <Heart size={13} color="#C97A7A" fill="#C97A7A" />
          <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C97A7A", fontWeight: 700 }}>
            Notre Histoire
          </span>
          <div style={{ width: "24px", height: "1px", backgroundColor: "#C97A7A" }} />
        </div>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#4A3F3A", margin: "0 0 1rem", fontWeight: 600 }}>
          À Propos d'<em style={{ color: "#C97A7A", fontStyle: "italic" }}>Olga</em>
        </h1>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "1rem", color: "#9E8E82", maxWidth: "660px", margin: "0 auto", lineHeight: 1.9 }}>
          Olga Concept Store est né d'une passion profonde pour le beau, l'authentique et le bien fait. Implantée au cœur de Pacy-sur-Eure depuis notre ouverture, notre boutique est devenue une adresse incontournable pour les habitants de l'Eure — de Vernon à Évreux, de Gaillon à Bonnières-sur-Seine. Chaque article est soigneusement sélectionné pour créer un univers unique, chaleureux et inspirant.
        </p>
      </motion.div>
    </div>
  );
}

export function AProposPage() {
  return (
    <>
      <PageSEO
        title="Notre Histoire — Olga Concept Store à Pacy-sur-Eure, Normandie"
        description="Découvrez l'histoire d'Olga Concept Store, boutique lifestyle premium à Pacy-sur-Eure (27120). Une adresse unique en Normandie pour la mode femme, les bijoux, la décoration et les cosmétiques naturels. Proche de Vernon et Évreux."
        keywords="histoire boutique Pacy-sur-Eure, concept store fondateur Eure, boutique lifestyle Normandie, valeurs boutique mode 27, à propos Olga Concept Store"
        canonical="https://olga-conceptstore.fr/a-propos"
        ogTitle="L'Histoire d'Olga Concept Store — Boutique à Pacy-sur-Eure"
        ogDescription="Née d'une passion pour le beau et l'authentique, Olga Concept Store à Pacy-sur-Eure est la boutique lifestyle incontournable de l'Eure."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <AProposHero />
      <APropos />

      {/* SEO text block */}
      <section style={{ backgroundColor: "#F5EDE3", padding: "clamp(3rem, 6vw, 5rem) clamp(1.25rem, 5vw, 2.5rem)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "#4A3F3A", marginBottom: "1rem", fontWeight: 600 }}>
            Le concept store de référence dans l'Eure et en Normandie
          </h2>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.93rem", color: "#7A6E69", lineHeight: 1.95, marginBottom: "1rem" }}>
            Nichée au cœur de <strong>Pacy-sur-Eure</strong>, notre boutique est facilement accessible depuis toutes les communes de l'Eure : <strong>Vernon</strong>, <strong>Saint-Marcel</strong>, <strong>Gaillon</strong>, <strong>Évreux</strong>, <strong>Aubevoye</strong>, <strong>Bonnières-sur-Seine</strong>, <strong>Ménilles</strong>, <strong>Jouy-sur-Eure</strong>, <strong>Croisy-sur-Eure</strong>, <strong>Houlbec-Cocherel</strong>, <strong>La Croix-Saint-Leufroy</strong>, <strong>Bueil</strong>, <strong>Breuilpont</strong>, <strong>Fains</strong>, <strong>Fontaine-sous-Jouy</strong>, <strong>Louviers</strong> et <strong>Les Andelys</strong>.
          </p>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#4A3F3A", margin: "1.5rem 0 0.75rem", fontWeight: 600 }}>
            Une boutique indépendante portée par des valeurs fortes
          </h3>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.93rem", color: "#7A6E69", lineHeight: 1.95, marginBottom: "1rem" }}>
            Chez Olga, nous croyons profondément au <strong>commerce local</strong> et au soutien aux <strong>créateurs indépendants</strong>. Chaque produit que vous trouvez en boutique a été sélectionné avec soin, en privilégiant la qualité, l'éthique et l'originalité. Nous travaillons avec des <strong>marques françaises et européennes</strong> qui partagent nos valeurs : respect de l'environnement, fabrication responsable, et beauté authentique. Choisir Olga Concept Store, c'est soutenir une boutique indépendante de <strong>Pacy-sur-Eure</strong> et contribuer à la vitalité du tissu commercial local dans le <strong>département de l'Eure (27)</strong>.
          </p>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#4A3F3A", margin: "1.5rem 0 0.75rem", fontWeight: 600 }}>
            Une expérience shopping unique en Normandie
          </h3>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.93rem", color: "#7A6E69", lineHeight: 1.95, marginBottom: "1.5rem" }}>
            Nous proposons une sélection de <strong>mode femme tendance</strong>, <strong>bijoux fins et artisanaux</strong>, <strong>décoration intérieure</strong>, <strong>cosmétiques naturels et bio</strong> et <strong>idées cadeaux originaux</strong> — tout soigneusement choisi pour vous offrir une expérience shopping unique, loin des grandes chaînes. Notre boutique est aussi un lieu de découverte et d'inspiration : venez flâner, vous laisser surprendre et repartir avec la perle rare. À <strong>Pacy-sur-Eure</strong>, la Normandie a son concept store lifestyle signature.
          </p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link
              to="/galerie"
              style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                backgroundColor: "#C97A7A", color: "#FAF7F4", textDecoration: "none",
                borderRadius: "100px", padding: "11px 24px",
                fontFamily: "'Raleway', sans-serif", fontSize: "0.78rem", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                boxShadow: "0 4px 16px rgba(201,122,122,0.25)",
              }}
            >
              Voir la galerie
            </Link>
            <Link
              to="/contact"
              style={{
                display: "inline-flex", alignItems: "center",
                border: "1.5px solid rgba(201,122,122,0.4)", color: "#C97A7A", textDecoration: "none",
                borderRadius: "100px", padding: "11px 24px",
                fontFamily: "'Raleway', sans-serif", fontSize: "0.78rem", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}
            >
              Nous rendre visite
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
