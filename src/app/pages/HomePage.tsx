import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { PageSEO } from "../components/PageSEO";
import { Hero } from "../components/Hero";
import { Univers } from "../components/Univers";
import { Link } from "react-router";
import { Camera, Sparkles, Heart, MapPin, ArrowRight, Phone } from "lucide-react";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Store"],
      "@id": "https://olga-conceptstore.fr/#business",
      name: "Olga Concept Store",
      description: "Concept store premium à Pacy-sur-Eure — mode femme, bijoux raffinés, décoration intérieure et cosmétiques naturels sélectionnés avec amour.",
      url: "https://olga-conceptstore.fr",
      telephone: "+33613096478",
      image: "https://olga-conceptstore.fr/og-image.png",
      logo: "https://olga-conceptstore.fr/olga-concept-store.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "88 A rue Edouard Isambard",
        addressLocality: "Pacy-sur-Eure",
        postalCode: "27120",
        addressCountry: "FR",
        addressRegion: "Normandie",
      },
      geo: { "@type": "GeoCoordinates", latitude: 49.0183, longitude: 1.3876 },
      sameAs: ["https://www.instagram.com/olga_conceptstore"],
      priceRange: "€€",
      hasMap: "https://maps.google.com/?q=88+Rue+Edouard+Isambard+27120+Pacy-sur-Eure",
      areaServed: [
        "Pacy-sur-Eure", "Vernon", "Évreux", "Gaillon", "Saint-Marcel",
        "Bonnières-sur-Seine", "Jouy-sur-Eure", "Eure", "Normandie",
        "Louviers", "Les Andelys", "Aubevoye", "Ménilles", "Houlbec-Cocherel",
        "La Croix-Saint-Leufroy", "Bueil", "Breuilpont", "Fontaine-sous-Jouy",
      ],
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "10:00", closes: "19:00" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://olga-conceptstore.fr/#website",
      url: "https://olga-conceptstore.fr",
      name: "Olga Concept Store",
      description: "Site officiel d'Olga Concept Store à Pacy-sur-Eure — Mode, bijoux, décoration et cosmétiques.",
      inLanguage: "fr-FR",
      potentialAction: { "@type": "SearchAction", target: "https://olga-conceptstore.fr/?q={search_term_string}", "query-input": "required name=search_term_string" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Où se trouve Olga Concept Store ?", acceptedAnswer: { "@type": "Answer", text: "88 A rue Edouard Isambard, 27120 Pacy-sur-Eure, Normandie. Accessible depuis Vernon (15 min), Évreux (30 min), Gaillon (10 min)." } },
        { "@type": "Question", name: "Quels produits trouve-t-on chez Olga Concept Store ?", acceptedAnswer: { "@type": "Answer", text: "Mode femme tendance, bijoux fins et artisanaux, décoration intérieure, cosmétiques naturels et bio, idées cadeaux originaux." } },
        { "@type": "Question", name: "Comment contacter Olga Concept Store ?", acceptedAnswer: { "@type": "Answer", text: "Par téléphone au 06 13 09 64 78, via Instagram @olga_conceptstore, ou en boutique au 88 A rue Edouard Isambard, 27120 Pacy-sur-Eure." } },
        { "@type": "Question", name: "Olga Concept Store propose-t-il des idées cadeaux ?", acceptedAnswer: { "@type": "Answer", text: "Oui ! Bijoux, accessoires de mode, objets de décoration, bougies, cosmétiques naturels — des dizaines d'idées cadeaux pour femme, disponibles en boutique à Pacy-sur-Eure." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://olga-conceptstore.fr/" }],
    },
  ],
};

const pageCards = [
  {
    to: "/galerie",
    icon: Camera,
    label: "La Boutique",
    title: "Notre Galerie",
    desc: "Plongez dans l'atmosphère chaleureuse d'Olga Concept Store — murs terracotta, collections tendance, bijoux et décoration dans un écrin bobo-chic.",
    accent: "#C97A7A",
    bg: "linear-gradient(135deg, #FDF0EE 0%, #FAF5F4 100%)",
    border: "rgba(201,122,122,0.2)",
  },
  {
    to: "/nouveautes",
    icon: Sparkles,
    label: "Coups de Cœur",
    title: "Nouveautés & Sélections",
    desc: "Nos dernières arrivées en mode femme, bijoux fins, décoration et cosmétiques naturels — une sélection qui évolue chaque semaine au fil des saisons.",
    accent: "#C9A96E",
    bg: "linear-gradient(135deg, #FDF6EE 0%, #FAF8F4 100%)",
    border: "rgba(201,169,110,0.2)",
  },
  {
    to: "/a-propos",
    icon: Heart,
    label: "Notre Histoire",
    title: "À Propos d'Olga",
    desc: "Une boutique née d'une passion profonde pour le beau et l'authentique, implantée au cœur de Pacy-sur-Eure depuis notre ouverture en Normandie.",
    accent: "#A07880",
    bg: "linear-gradient(135deg, #F5EDE3 0%, #FAF7F4 100%)",
    border: "rgba(160,120,128,0.2)",
  },
  {
    to: "/contact",
    icon: MapPin,
    label: "Venir nous voir",
    title: "Contact & Accès",
    desc: "88 A rue Edouard Isambard, 27120 Pacy-sur-Eure. Accessible depuis Vernon, Évreux, Gaillon et toutes les communes de l'Eure. Appelez-nous au 06 13 09 64 78.",
    accent: "#6A8E7F",
    bg: "linear-gradient(135deg, #EFF5F2 0%, #F7FAF8 100%)",
    border: "rgba(106,142,127,0.2)",
  },
];

function PageCards() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} style={{ backgroundColor: "#FAF7F4", padding: "clamp(3rem, 7vw, 5rem) clamp(1.25rem, 5vw, 2.5rem)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "clamp(2rem, 4vw, 3rem)" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "0.75rem" }}>
            <div style={{ width: "28px", height: "1px", backgroundColor: "#C97A7A" }} />
            <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C97A7A", fontWeight: 700 }}>Explorer</span>
            <div style={{ width: "28px", height: "1px", backgroundColor: "#C97A7A" }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "#4A3F3A", margin: "0 0 0.75rem", fontWeight: 600 }}>
            Découvrez <em style={{ color: "#C97A7A", fontStyle: "italic" }}>notre univers</em>
          </h2>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.95rem", color: "#9E8E82", maxWidth: "520px", margin: "0 auto", lineHeight: 1.75 }}>
            Chaque section du site vous invite à explorer une facette d'Olga Concept Store — boutique lifestyle premium à Pacy-sur-Eure, Normandie.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {pageCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.to}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <Link
                  to={card.to}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    padding: "1.75rem",
                    background: card.bg,
                    border: `1.5px solid ${card.border}`,
                    borderRadius: "18px",
                    textDecoration: "none",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = `0 12px 40px ${card.border}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "10px", backgroundColor: `${card.accent}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={18} color={card.accent} />
                    </div>
                    <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: card.accent, fontWeight: 700 }}>
                      {card.label}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "#4A3F3A", margin: "0 0 0.6rem", fontWeight: 600, lineHeight: 1.3 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.83rem", color: "#7A6E69", lineHeight: 1.75, margin: "0 0 1.25rem", flex: 1 }}>
                    {card.desc}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px", color: card.accent, fontFamily: "'Raleway', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em" }}>
                    Découvrir <ArrowRight size={13} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SEOSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} style={{ backgroundColor: "#F5EDE3", padding: "clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 5vw, 2.5rem)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2.1rem)", color: "#4A3F3A", marginBottom: "1.25rem", fontWeight: 600 }}>
            Olga Concept Store — La boutique lifestyle de référence à Pacy-sur-Eure (27120), Normandie
          </h2>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.93rem", color: "#7A6E69", lineHeight: 1.95, marginBottom: "1.1rem" }}>
            Nichée au <strong>88 A rue Edouard Isambard, 27120 Pacy-sur-Eure</strong>, Olga Concept Store est bien plus qu'une boutique : c'est une adresse incontournable pour toutes celles qui cherchent une sélection premium de <strong>mode femme</strong>, <strong>bijoux artisanaux</strong>, <strong>décoration intérieure</strong> et <strong>cosmétiques naturels</strong> dans le département de l'Eure, en plein cœur de la Normandie. Que vous veniez de <strong>Vernon</strong>, d'<strong>Évreux</strong>, de <strong>Gaillon</strong> ou d'une des nombreuses communes environnantes, notre boutique est facilement accessible et vous reserve une expérience shopping unique, loin des grandes enseignes.
          </p>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#4A3F3A", margin: "1.75rem 0 0.75rem", fontWeight: 600 }}>
            Mode femme, bijoux & décoration — Une sélection faite avec amour
          </h3>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.93rem", color: "#7A6E69", lineHeight: 1.95, marginBottom: "1.1rem" }}>
            Chez Olga, chaque article est soigneusement choisi pour vous offrir le meilleur du style contemporain. Notre rayon <strong>mode femme</strong> propose des <strong>vêtements tendance et intemporels</strong> adaptés à toutes les morphologies : robes, tops, vestes, pantalons et accessoires aux coupes flatteuses et aux matières nobles. Côté <strong>bijoux</strong>, vous trouverez des pièces fines et raffinées — colliers, bagues, bracelets, boucles d'oreilles — fabriquées par des créateurs soigneux, idéales pour un cadeau ou pour se faire plaisir. Notre espace <strong>décoration</strong> regorge d'objets uniques : bougies parfumées, vases, coussins, art de la table, petits meubles et objets déco tendance boho-chic. Enfin, notre sélection de <strong>cosmétiques naturels et bio</strong> vous permet de prendre soin de vous avec des produits respectueux de votre peau et de l'environnement.
          </p>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#4A3F3A", margin: "1.75rem 0 0.75rem", fontWeight: 600 }}>
            Accessible depuis toute la vallée de l'Eure et la région Normandie
          </h3>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.93rem", color: "#7A6E69", lineHeight: 1.95, marginBottom: "1.1rem" }}>
            Pacy-sur-Eure est idéalement situé sur l'axe <strong>Vernon–Évreux</strong>, à la croisée de nombreuses routes normandes. Notre boutique est accessible en voiture depuis <strong>Vernon</strong> (15 min), <strong>Gaillon</strong> (10 min), <strong>Évreux</strong> (30 min), <strong>Saint-Marcel</strong>, <strong>Aubevoye</strong>, <strong>Jouy-sur-Eure</strong>, <strong>Ménilles</strong>, <strong>Houlbec-Cocherel</strong>, <strong>La Croix-Saint-Leufroy</strong>, <strong>Bueil</strong>, <strong>Breuilpont</strong>, <strong>Fontaine-sous-Jouy</strong>, <strong>Fains</strong>, <strong>Croisy-sur-Eure</strong> et <strong>Bonnières-sur-Seine</strong>. Des clients viennent également régulièrement depuis <strong>Louviers</strong>, <strong>Les Andelys</strong>, <strong>Rouen</strong>, <strong>Mantes-la-Jolie</strong> et <strong>Paris</strong> pour découvrir notre sélection unique. Un parking est disponible à proximité pour faciliter votre visite.
          </p>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#4A3F3A", margin: "1.75rem 0 0.75rem", fontWeight: 600 }}>
            Idées cadeaux originales dans l'Eure — Anniversaire, Noël, Saint-Valentin, Fête des mères
          </h3>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.93rem", color: "#7A6E69", lineHeight: 1.95, marginBottom: "1.1rem" }}>
            Vous cherchez un <strong>cadeau original pour une femme</strong> dans l'Eure ou en Normandie ? Olga Concept Store est la destination idéale pour trouver des <strong>idées cadeaux uniques</strong> : bijoux personnalisés, pochettes et sacs tendance, bougies de luxe, cosmétiques naturels en coffret, objets déco sur-mesure. Pour <strong>Noël</strong>, la <strong>Saint-Valentin</strong>, la <strong>fête des mères</strong> ou un <strong>anniversaire</strong>, notre boutique vous propose une sélection renouvelée régulièrement, afin que chaque occasion devienne un souvenir inoubliable. Notre équipe est disponible pour vous conseiller et vous aider à trouver le cadeau parfait.
          </p>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#4A3F3A", margin: "1.75rem 0 0.75rem", fontWeight: 600 }}>
            Un concept store bobo-chic unique en Normandie
          </h3>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.93rem", color: "#7A6E69", lineHeight: 1.95, marginBottom: "1.75rem" }}>
            Le terme <strong>concept store</strong> désigne un espace de vente qui mêle différentes catégories de produits dans une atmosphère cohérente et inspirante. Chez Olga, l'univers est <strong>bobo-chic</strong> : des teintes chaudes (terracotta, rose poudré, doré), des matières naturelles (lin, osier, coton bio) et une curation exigeante qui s'adresse aux femmes qui ont du goût. Notre boutique est régulièrement citée comme l'une des meilleures adresses shopping de <strong>Pacy-sur-Eure</strong> et plus largement du <strong>département de l'Eure (27)</strong>. Suivez-nous sur Instagram <strong>@olga_conceptstore</strong> pour ne manquer aucune nouveauté, et venez nous rendre visite au <strong>88 A rue Edouard Isambard, 27120 Pacy-sur-Eure</strong> — nous serons ravies de vous accueillir !
          </p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link
              to="/galerie"
              style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                backgroundColor: "#C97A7A", color: "#FAF7F4", textDecoration: "none",
                borderRadius: "100px", padding: "12px 26px",
                fontFamily: "'Raleway', sans-serif", fontSize: "0.78rem", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                boxShadow: "0 4px 18px rgba(201,122,122,0.25)",
              }}
            >
              <Camera size={14} /> Voir la galerie
            </Link>
            <a
              href="tel:+33613096478"
              style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                border: "1.5px solid rgba(201,122,122,0.4)", color: "#C97A7A", textDecoration: "none",
                borderRadius: "100px", padding: "12px 26px",
                fontFamily: "'Raleway', sans-serif", fontSize: "0.78rem", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}
            >
              <Phone size={14} /> 06 13 09 64 78
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <PageSEO
        title="Olga Concept Store — Mode, Bijoux, Déco & Cosmétiques à Pacy-sur-Eure (27120)"
        description="Olga Concept Store à Pacy-sur-Eure (27120) — Boutique premium : mode femme, bijoux raffinés, décoration intérieure et cosmétiques naturels. Sélections faites avec amour. Concept store près de Vernon, Évreux, Gaillon, en Normandie."
        keywords="concept store Pacy-sur-Eure, boutique mode femme Eure, bijoux Pacy-sur-Eure, boutique cadeaux Normandie, cosmétiques naturels Vernon, décoration intérieure Évreux, idées cadeaux femme 27, boutique bobo-chic Normandie, shopping Pacy-sur-Eure, boutique lifestyle Eure"
        canonical="https://olga-conceptstore.fr/"
        ogTitle="Olga Concept Store — Boutique Mode, Bijoux & Déco à Pacy-sur-Eure"
        ogDescription="Concept store premium à Pacy-sur-Eure (27120) — mode femme, bijoux, décoration et cosmétiques naturels. Sélections faites avec amour en Normandie."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <Hero />
      <Univers />
      <PageCards />
      <SEOSection />
    </>
  );
}
