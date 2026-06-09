import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { PageSEO } from "../components/PageSEO";
import { Nouveautes } from "../components/Nouveautes";
import { Link } from "react-router";
import { ArrowLeft, Sparkles, Instagram } from "lucide-react";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      "@id": "https://olga-conceptstore.fr/nouveautes#list",
      name: "Nouveautés & Coups de Cœur — Olga Concept Store Pacy-sur-Eure",
      description: "Découvrez les dernières nouveautés et coups de cœur d'Olga Concept Store : mode femme, bijoux, décoration et cosmétiques soigneusement sélectionnés à Pacy-sur-Eure.",
      url: "https://olga-conceptstore.fr/nouveautes",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://olga-conceptstore.fr/" },
        { "@type": "ListItem", position: 2, name: "Nouveautés", item: "https://olga-conceptstore.fr/nouveautes" },
      ],
    },
  ],
};

function NouveautesHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #FDF6EE 0%, #FAF7F4 100%)",
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
          <div style={{ width: "24px", height: "1px", backgroundColor: "#C9A96E" }} />
          <Sparkles size={14} color="#C9A96E" />
          <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A96E", fontWeight: 700 }}>
            Coups de Cœur
          </span>
          <div style={{ width: "24px", height: "1px", backgroundColor: "#C9A96E" }} />
        </div>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#4A3F3A", margin: "0 0 1rem", fontWeight: 600 }}>
          Nouveautés & <em style={{ color: "#C97A7A", fontStyle: "italic" }}>Sélections</em>
        </h1>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "1rem", color: "#9E8E82", maxWidth: "640px", margin: "0 auto", lineHeight: 1.9 }}>
          Chez <strong style={{ color: "#7A6E69" }}>Olga Concept Store</strong> à <strong style={{ color: "#7A6E69" }}>Pacy-sur-Eure</strong>, la sélection évolue chaque semaine au fil des saisons et des coups de cœur. Retrouvez nos dernières arrivées en mode femme, bijoux fins, décoration intérieure et cosmétiques naturels — tous disponibles en boutique, accessibles depuis Vernon, Évreux et tout l'Eure.
        </p>
      </motion.div>
    </div>
  );
}

function NouveautesSEOSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} style={{ backgroundColor: "#F5EDE3", padding: "clamp(3rem, 6vw, 5rem) clamp(1.25rem, 5vw, 2.5rem)" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.4rem, 3vw, 1.9rem)", color: "#4A3F3A", marginBottom: "1rem", fontWeight: 600 }}>
            Nouvelles collections & tendances mode — Pacy-sur-Eure, Eure, Normandie
          </h2>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.93rem", color: "#7A6E69", lineHeight: 1.95, marginBottom: "1rem" }}>
            Chez <strong>Olga Concept Store</strong>, les nouvelles arrivées sont au cœur de notre démarche. Chaque semaine, nous dénichons des pièces de mode femme inédites, des bijoux fins de créateurs, des objets de décoration tendance et des cosmétiques naturels innovants — pour proposer à notre clientèle de <strong>Pacy-sur-Eure</strong>, <strong>Vernon</strong>, <strong>Évreux</strong>, <strong>Gaillon</strong> et de tout le <strong>département de l'Eure</strong> une sélection toujours fraîche et inspirante.
          </p>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#4A3F3A", margin: "1.5rem 0 0.75rem", fontWeight: 600 }}>
            Mode femme tendance — Printemps, Été, Automne, Hiver
          </h3>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.93rem", color: "#7A6E69", lineHeight: 1.95, marginBottom: "1rem" }}>
            Chaque saison apporte son lot de nouvelles pièces : robes d'été légères et romantiques, manteaux d'automne en matières nobles, pulls cosy pour l'hiver, tops colorés pour le printemps. Notre sélection intègre des <strong>marques tendance</strong> et des <strong>créateurs indépendants</strong> qui partagent nos valeurs de qualité et d'originalité. Des pièces pour toutes les occasions : casual, chic, soirée, bureau — toujours avec la touche bobo-chic signature d'Olga.
          </p>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#4A3F3A", margin: "1.5rem 0 0.75rem", fontWeight: 600 }}>
            Bijoux de créateurs — Collections permanentes et éditions limitées
          </h3>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.93rem", color: "#7A6E69", lineHeight: 1.95, marginBottom: "1rem" }}>
            Nos <strong>nouvelles collections de bijoux</strong> arrivent régulièrement : colliers délicats, bagues empilables, boucles d'oreilles créoles, bracelets joncs. Nous sélectionnons des <strong>bijoux artisanaux</strong> de créateurs français et européens alliant esthétique contemporaine et savoir-faire. Chaque pièce devient un cadeau parfait — anniversaire, mariage, Noël, fête des mères — pour les femmes de <strong>Pacy-sur-Eure</strong>, <strong>Vernon</strong>, <strong>Évreux</strong>, <strong>Gaillon</strong> et toute la Normandie.
          </p>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#4A3F3A", margin: "1.5rem 0 0.75rem", fontWeight: 600 }}>
            Décoration & cosmétiques — Nouveautés chaque semaine
          </h3>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.93rem", color: "#7A6E69", lineHeight: 1.95, marginBottom: "1.5rem" }}>
            Notre espace <strong>décoration</strong> se renouvelle avec des nouveautés design intérieur : bougies parfumées de luxe, vases en céramique, paniers en osier, miroirs dorés, coussins en lin, diffuseurs de parfum, cadres et objets d'art. Idéal pour redécorer ou offrir à quelqu'un habitant à <strong>Jouy-sur-Eure</strong>, <strong>Bonnières-sur-Seine</strong>, <strong>Ménilles</strong>, <strong>Saint-Marcel</strong> ou ailleurs dans l'Eure. Nos <strong>cosmétiques naturels et bio</strong> se renouvellent également : soins visage, corps, cheveux — des produits qui respectent votre peau et la planète.
          </p>

          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontStyle: "italic", color: "#4A3F3A", maxWidth: "520px", margin: "0 0 0.75rem" }}>
            "Nos sélections évoluent chaque semaine — venez découvrir les nouveautés en boutique !"
          </p>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.85rem", color: "#9E8E82", marginBottom: "1.5rem" }}>
            Suivez-nous sur Instagram pour ne rien manquer : <strong style={{ color: "#C97A7A" }}>@olga_conceptstore</strong>
          </p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href="https://www.instagram.com/olga_conceptstore"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                backgroundColor: "#C97A7A", color: "#FAF7F4", textDecoration: "none",
                borderRadius: "100px", padding: "12px 26px",
                fontFamily: "'Raleway', sans-serif", fontSize: "0.78rem", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                boxShadow: "0 4px 18px rgba(201,122,122,0.25)",
              }}
            >
              <Instagram size={14} /> Suivre sur Instagram
            </a>
            <Link
              to="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                border: "1.5px solid rgba(201,122,122,0.4)", color: "#C97A7A", textDecoration: "none",
                borderRadius: "100px", padding: "12px 26px",
                fontFamily: "'Raleway', sans-serif", fontSize: "0.78rem", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}
            >
              Nous contacter
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function NouveautesPage() {
  return (
    <>
      <PageSEO
        title="Nouveautés & Coups de Cœur — Olga Concept Store Pacy-sur-Eure (27120)"
        description="Découvrez les dernières nouveautés d'Olga Concept Store à Pacy-sur-Eure : mode femme tendance, bijoux raffinés, décoration originale et cosmétiques naturels. Nouvelles collections chaque semaine dans l'Eure, Normandie."
        keywords="nouveautés boutique Pacy-sur-Eure, nouvelles collections mode Eure, bijoux nouveautés Vernon, cadeaux originaux Normandie, idées cadeaux femme 27, nouvelles arrivées concept store Évreux, tendances mode Gaillon, collections saison Normandie"
        canonical="https://olga-conceptstore.fr/nouveautes"
        ogTitle="Nouveautés Olga Concept Store — Mode, Bijoux & Déco à Pacy-sur-Eure"
        ogDescription="Les dernières sélections d'Olga Concept Store : mode femme, bijoux et décoration choisis avec amour à Pacy-sur-Eure, Normandie."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <NouveautesHero />
      <Nouveautes />
      <NouveautesSEOSection />
    </>
  );
}
