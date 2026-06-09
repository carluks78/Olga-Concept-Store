import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { PageSEO } from "../components/PageSEO";
import { Gallery } from "../components/Gallery";
import { Link } from "react-router";
import { ArrowLeft, Camera, MapPin } from "lucide-react";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageGallery",
      "@id": "https://olga-conceptstore.fr/galerie#gallery",
      name: "Galerie Olga Concept Store — Photos de la boutique à Pacy-sur-Eure",
      description: "Découvrez en photos l'atmosphère unique et chaleureuse d'Olga Concept Store à Pacy-sur-Eure : murs terracotta, tapis colorés, collections mode, bijoux et décoration.",
      url: "https://olga-conceptstore.fr/galerie",
      about: { "@type": "LocalBusiness", name: "Olga Concept Store", address: { "@type": "PostalAddress", addressLocality: "Pacy-sur-Eure", postalCode: "27120" } },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://olga-conceptstore.fr/" },
        { "@type": "ListItem", position: 2, name: "Galerie", item: "https://olga-conceptstore.fr/galerie" },
      ],
    },
  ],
};

function GalerieHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #F5EDE3 0%, #FDF0EE 100%)",
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
          <Camera size={14} color="#C97A7A" />
          <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C97A7A", fontWeight: 700 }}>
            La Boutique en Photos
          </span>
          <div style={{ width: "24px", height: "1px", backgroundColor: "#C97A7A" }} />
        </div>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#4A3F3A", margin: "0 0 1rem", fontWeight: 600 }}>
          Notre <em style={{ color: "#C97A7A", fontStyle: "italic" }}>Galerie</em>
        </h1>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "1rem", color: "#9E8E82", maxWidth: "620px", margin: "0 auto", lineHeight: 1.9 }}>
          Découvrez l'atmosphère chaleureuse et raffinée d'<strong style={{ color: "#7A6E69" }}>Olga Concept Store</strong> à <strong style={{ color: "#7A6E69" }}>Pacy-sur-Eure</strong>. Murs terracotta, collections tendance, bijoux précieux et décoration soignée — chaque recoin de notre boutique normande a une âme. À visiter depuis Vernon, Évreux, Gaillon et tout l'Eure.
        </p>
      </motion.div>
    </div>
  );
}

function GalerieCtaBottom() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} style={{ backgroundColor: "#FAF7F4", padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 5vw, 2.5rem)" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.4rem, 3vw, 1.9rem)", color: "#4A3F3A", marginBottom: "1rem", fontWeight: 600 }}>
            Venez découvrir notre boutique à Pacy-sur-Eure — la Normandie a son adresse shopping incontournable
          </h2>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.93rem", color: "#7A6E69", lineHeight: 1.95, marginBottom: "1rem" }}>
            Ces photos vous donnent un aperçu de l'univers d'<strong>Olga Concept Store</strong>, mais rien ne remplace une visite en personne ! Notre boutique, située au <strong>88 A rue Edouard Isambard, 27120 Pacy-sur-Eure</strong>, vous accueille dans un espace chaleureux et inspirant. Les murs terracotta, les matières naturelles et la lumière tamisée créent une atmosphère unique, propice à la découverte et au plaisir du shopping.
          </p>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.93rem", color: "#7A6E69", lineHeight: 1.95, marginBottom: "1rem" }}>
            Notre boutique est facilement accessible depuis <strong>Vernon</strong> (15 minutes), <strong>Gaillon</strong> (10 minutes), <strong>Évreux</strong> (30 minutes), <strong>Louviers</strong>, <strong>Les Andelys</strong>, <strong>Saint-Marcel</strong>, <strong>Aubevoye</strong>, <strong>Jouy-sur-Eure</strong>, <strong>Ménilles</strong>, <strong>Bonnières-sur-Seine</strong>, <strong>Houlbec-Cocherel</strong>, <strong>La Croix-Saint-Leufroy</strong>, <strong>Bueil</strong>, <strong>Breuilpont</strong>, <strong>Fontaine-sous-Jouy</strong> et toutes les communes de la vallée de l'Eure. Parking disponible à proximité de la boutique.
          </p>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.93rem", color: "#7A6E69", lineHeight: 1.95, marginBottom: "1.5rem" }}>
            Que vous cherchiez une <strong>tenue mode femme</strong> pour une occasion spéciale, un <strong>bijou fin</strong> comme cadeau, un objet de <strong>décoration unique</strong> pour votre intérieur ou un <strong>cosmétique naturel</strong> pour votre routine beauté, vous trouverez forcément la perle rare chez Olga. Notre sélection évolue chaque semaine — suivez-nous sur Instagram <strong>@olga_conceptstore</strong> pour ne rien manquer des nouvelles arrivées.
          </p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
            <Link
              to="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                backgroundColor: "#C97A7A", color: "#FAF7F4", textDecoration: "none",
                borderRadius: "100px", padding: "12px 26px",
                fontFamily: "'Raleway', sans-serif", fontSize: "0.78rem", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                boxShadow: "0 4px 18px rgba(201,122,122,0.25)",
              }}
            >
              <MapPin size={14} /> Venir nous voir
            </Link>
            <Link
              to="/nouveautes"
              style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                border: "1.5px solid rgba(201,122,122,0.4)", color: "#C97A7A", textDecoration: "none",
                borderRadius: "100px", padding: "12px 26px",
                fontFamily: "'Raleway', sans-serif", fontSize: "0.78rem", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}
            >
              Voir les nouveautés
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function GaleriePage() {
  return (
    <>
      <PageSEO
        title="Galerie Photos — Olga Concept Store à Pacy-sur-Eure | Boutique Mode & Déco Normandie"
        description="Découvrez en photos l'ambiance unique d'Olga Concept Store à Pacy-sur-Eure (27120). Boutique chaleureuse mode femme, bijoux, décoration et cosmétiques naturels. À visiter depuis Vernon, Évreux, Gaillon en Normandie."
        keywords="photos boutique Pacy-sur-Eure, galerie concept store Eure, intérieur boutique mode Vernon, boutique déco Normandie, ambiance boutique bobo-chic 27, photos boutique lifestyle Évreux"
        canonical="https://olga-conceptstore.fr/galerie"
        ogTitle="Galerie Olga Concept Store — Photos de la boutique à Pacy-sur-Eure"
        ogDescription="Plongez dans l'univers chaleureux d'Olga Concept Store à Pacy-sur-Eure. Mode, bijoux et décoration dans une atmosphère bobo-chic unique en Normandie."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <GalerieHero />
      <Gallery />
      <GalerieCtaBottom />
    </>
  );
}
