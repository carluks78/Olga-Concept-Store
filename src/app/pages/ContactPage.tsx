import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { PageSEO } from "../components/PageSEO";
import { Contact } from "../components/Contact";
import { FAQ } from "../components/FAQ";
import { Link } from "react-router";
import { ArrowLeft, MapPin, Phone, Car, Clock } from "lucide-react";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://olga-conceptstore.fr/contact#page",
      name: "Contact — Olga Concept Store Pacy-sur-Eure",
      description: "Contactez Olga Concept Store à Pacy-sur-Eure. Adresse : 88 A rue Edouard Isambard, 27120 Pacy-sur-Eure. Téléphone : 06 13 09 64 78.",
      url: "https://olga-conceptstore.fr/contact",
      mainEntity: {
        "@type": "LocalBusiness",
        name: "Olga Concept Store",
        telephone: "+33613096478",
        address: {
          "@type": "PostalAddress",
          streetAddress: "88 A rue Edouard Isambard",
          addressLocality: "Pacy-sur-Eure",
          postalCode: "27120",
          addressCountry: "FR",
        },
        geo: { "@type": "GeoCoordinates", latitude: 49.0183, longitude: 1.3876 },
        hasMap: "https://maps.google.com/?q=88+Rue+Edouard+Isambard+27120+Pacy-sur-Eure",
        sameAs: ["https://www.instagram.com/olga_conceptstore"],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://olga-conceptstore.fr/" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://olga-conceptstore.fr/contact" },
      ],
    },
  ],
};

function ContactHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #4A3F3A 0%, #5C4E47 100%)",
        padding: "clamp(6rem, 12vw, 9rem) clamp(1.25rem, 5vw, 2.5rem) clamp(3rem, 6vw, 5rem)",
        textAlign: "center",
      }}
    >
      <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
        <Link
          to="/"
          style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            color: "rgba(250,247,244,0.55)", textDecoration: "none",
            fontFamily: "'Raleway', sans-serif", fontSize: "0.75rem",
            fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          <ArrowLeft size={14} /> Retour à l'accueil
        </Link>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "0.75rem" }}>
          <div style={{ width: "24px", height: "1px", backgroundColor: "#F2C5B5" }} />
          <MapPin size={13} color="#F2C5B5" />
          <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#F2C5B5", fontWeight: 700 }}>
            Venir nous voir
          </span>
          <div style={{ width: "24px", height: "1px", backgroundColor: "#F2C5B5" }} />
        </div>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#FAF7F4", margin: "0 0 1rem", fontWeight: 600 }}>
          Nous <em style={{ color: "#F2C5B5", fontStyle: "italic" }}>Contacter</em>
        </h1>
        <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "1rem", color: "rgba(250,247,244,0.7)", maxWidth: "580px", margin: "0 auto", lineHeight: 1.9 }}>
          Venez nous rendre visite au <strong style={{ color: "#FAF7F4" }}>88 A rue Edouard Isambard, 27120 Pacy-sur-Eure</strong>. Notre boutique est accessible depuis Vernon, Évreux, Gaillon et toutes les communes de l'Eure. Appelez-nous ou écrivez-nous — nous répondons avec plaisir !
        </p>
      </motion.div>
    </div>
  );
}

function AccessInfoBand() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const items = [
    { icon: MapPin, label: "Adresse", value: "88 A rue Edouard Isambard, 27120 Pacy-sur-Eure" },
    { icon: Phone, label: "Téléphone", value: "06 13 09 64 78", href: "tel:+33613096478" },
    { icon: Car, label: "Accès voiture", value: "Vernon 15 min · Gaillon 10 min · Évreux 30 min" },
    { icon: Clock, label: "Parking", value: "Parking disponible à proximité de la boutique" },
  ];
  return (
    <div ref={ref} style={{ backgroundColor: "#FAF7F4", borderBottom: "1px solid rgba(201,122,122,0.1)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1.5rem clamp(1.25rem, 5vw, 2.5rem)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
            >
              <div style={{ width: "32px", height: "32px", borderRadius: "8px", backgroundColor: "rgba(201,122,122,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={14} color="#C97A7A" />
              </div>
              <div>
                <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C97A7A", fontWeight: 700, marginBottom: "2px" }}>{item.label}</div>
                {item.href ? (
                  <a href={item.href} style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.85rem", color: "#4A3F3A", fontWeight: 600, textDecoration: "none" }}>{item.value}</a>
                ) : (
                  <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.85rem", color: "#4A3F3A", fontWeight: 500 }}>{item.value}</div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function ContactSEOSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} style={{ backgroundColor: "#F5EDE3", padding: "clamp(3rem, 6vw, 5rem) clamp(1.25rem, 5vw, 2.5rem)" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.4rem, 3vw, 1.9rem)", color: "#4A3F3A", marginBottom: "1rem", fontWeight: 600 }}>
            Comment venir chez Olga Concept Store à Pacy-sur-Eure (27120)
          </h2>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.93rem", color: "#7A6E69", lineHeight: 1.95, marginBottom: "1rem" }}>
            <strong>Olga Concept Store</strong> est situé au <strong>88 A rue Edouard Isambard, 27120 Pacy-sur-Eure</strong>, dans le département de l'Eure (27), en région Normandie. La boutique est idéalement placée sur l'axe routier principal reliant <strong>Vernon</strong> à <strong>Évreux</strong>, ce qui la rend facilement accessible depuis de nombreuses communes normandes.
          </p>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#4A3F3A", margin: "1.5rem 0 0.75rem", fontWeight: 600 }}>
            Temps de trajet depuis les communes voisines
          </h3>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.93rem", color: "#7A6E69", lineHeight: 1.95, marginBottom: "1rem" }}>
            Notre boutique est accessible en voiture depuis : <strong>Vernon</strong> (15 min) · <strong>Gaillon</strong> (10 min) · <strong>Saint-Marcel</strong> (12 min) · <strong>Évreux</strong> (30 min) · <strong>Louviers</strong> (25 min) · <strong>Aubevoye</strong> (8 min) · <strong>Jouy-sur-Eure</strong> (7 min) · <strong>Ménilles</strong> (5 min) · <strong>Houlbec-Cocherel</strong> (8 min) · <strong>La Croix-Saint-Leufroy</strong> (12 min) · <strong>Bueil</strong> (10 min) · <strong>Breuilpont</strong> (6 min) · <strong>Fontaine-sous-Jouy</strong> (8 min) · <strong>Fains</strong> (5 min) · <strong>Croisy-sur-Eure</strong> (10 min) · <strong>Bonnières-sur-Seine</strong> (20 min) · <strong>Les Andelys</strong> (35 min) · <strong>Rouen</strong> (55 min) · <strong>Mantes-la-Jolie</strong> (35 min).
          </p>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#4A3F3A", margin: "1.5rem 0 0.75rem", fontWeight: 600 }}>
            Parking & itinéraire
          </h3>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.93rem", color: "#7A6E69", lineHeight: 1.95, marginBottom: "1rem" }}>
            Un parking est disponible à proximité immédiate de la boutique dans le centre de Pacy-sur-Eure. Depuis l'<strong>autoroute A13</strong> (Paris–Caen), prenez la sortie vers Vernon puis continuez vers Pacy-sur-Eure via la D181 ou la D836. Depuis <strong>Évreux</strong>, empruntez la D836 en direction de Vernon — la boutique est sur votre route. Des transports en commun relient Pacy-sur-Eure à Vernon et aux communes voisines.
          </p>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", color: "#4A3F3A", margin: "1.5rem 0 0.75rem", fontWeight: 600 }}>
            Nous contacter pour vos commandes et questions
          </h3>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.93rem", color: "#7A6E69", lineHeight: 1.95, marginBottom: "1.5rem" }}>
            Pour toute question sur nos produits ou pour mettre de côté un article, appelez-nous au <a href="tel:+33613096478" style={{ color: "#C97A7A", fontWeight: 700 }}>06 13 09 64 78</a> ou écrivez-nous via le formulaire ci-dessus. Suivez-nous sur Instagram <strong>@olga_conceptstore</strong> pour les nouveautés. Pour les cadeaux d'entreprise ou commandes spéciales, notre équipe est à votre écoute.
          </p>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href="tel:+33613096478"
              style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                backgroundColor: "#C97A7A", color: "#FAF7F4", textDecoration: "none",
                borderRadius: "100px", padding: "12px 26px",
                fontFamily: "'Raleway', sans-serif", fontSize: "0.78rem", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                boxShadow: "0 4px 18px rgba(201,122,122,0.25)",
              }}
            >
              <Phone size={14} /> 06 13 09 64 78
            </a>
            <a
              href="https://maps.google.com/?q=88+Rue+Edouard+Isambard+27120+Pacy-sur-Eure"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                border: "1.5px solid rgba(201,122,122,0.4)", color: "#C97A7A", textDecoration: "none",
                borderRadius: "100px", padding: "12px 26px",
                fontFamily: "'Raleway', sans-serif", fontSize: "0.78rem", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}
            >
              <MapPin size={14} /> Itinéraire Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ContactPage() {
  return (
    <>
      <PageSEO
        title="Contact & Accès — Olga Concept Store à Pacy-sur-Eure (27120)"
        description="Contactez Olga Concept Store à Pacy-sur-Eure. 88 A rue Edouard Isambard, 27120. Tél : 06 13 09 64 78. Boutique accessible depuis Vernon (15 min), Évreux (30 min), Gaillon (10 min) et tout l'Eure en Normandie."
        keywords="contact Olga Concept Store, adresse boutique Pacy-sur-Eure, téléphone boutique Eure, accès boutique Vernon, comment venir Pacy-sur-Eure, parking Pacy-sur-Eure, itinéraire boutique Normandie, horaires boutique 27120"
        canonical="https://olga-conceptstore.fr/contact"
        ogTitle="Contact Olga Concept Store — 88 A rue Edouard Isambard, Pacy-sur-Eure"
        ogDescription="Contactez Olga Concept Store à Pacy-sur-Eure. Boutique mode, bijoux et déco accessible depuis Vernon, Évreux et toute la Normandie."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <ContactHero />
      <AccessInfoBand />
      <Contact />
      <FAQ />
      <ContactSEOSection />
    </>
  );
}
