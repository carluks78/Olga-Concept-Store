import { PageSEO } from "../components/PageSEO";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "#4A3F3A", marginBottom: "0.75rem", fontWeight: 600 }}>
        {title}
      </h2>
      <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.9rem", color: "#7A6E69", lineHeight: 1.9 }}>
        {children}
      </div>
    </div>
  );
}

export function MentionsLegalesPage() {
  return (
    <>
      <PageSEO
        title="Mentions Légales — Olga Concept Store Pacy-sur-Eure"
        description="Mentions légales d'Olga Concept Store, boutique à Pacy-sur-Eure (27120). Informations légales, éditeur du site, hébergement et politique d'utilisation."
        canonical="https://olga-conceptstore.fr/mentions-legales"
      />

      <div
        style={{
          background: "linear-gradient(135deg, #F5EDE3 0%, #FAF7F4 100%)",
          padding: "clamp(6rem, 12vw, 9rem) clamp(1.25rem, 5vw, 2.5rem) clamp(3rem, 5vw, 4rem)",
          textAlign: "center",
        }}
      >
        <Link
          to="/"
          style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            color: "#9E8E82", textDecoration: "none",
            fontFamily: "'Raleway', sans-serif", fontSize: "0.75rem",
            fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          <ArrowLeft size={14} /> Retour à l'accueil
        </Link>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#4A3F3A", margin: 0, fontWeight: 600 }}>
          Mentions <em style={{ color: "#C97A7A", fontStyle: "italic" }}>Légales</em>
        </h1>
      </div>

      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "clamp(3rem, 6vw, 5rem) clamp(1.25rem, 5vw, 2.5rem)" }}>
        <Section title="Éditeur du site">
          <p><strong>Olga Concept Store</strong><br />
          88 A rue Edouard Isambard<br />
          27120 Pacy-sur-Eure, France<br />
          Téléphone : <a href="tel:+33613096478" style={{ color: "#C97A7A" }}>06 13 09 64 78</a><br />
          Instagram : <a href="https://www.instagram.com/olga_conceptstore" target="_blank" rel="noopener noreferrer" style={{ color: "#C97A7A" }}>@olga_conceptstore</a></p>
        </Section>

        <Section title="Propriété intellectuelle">
          <p>L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes) sont la propriété exclusive d'Olga Concept Store ou de leurs auteurs respectifs. Toute reproduction, distribution, modification ou utilisation, même partielle, est strictement interdite sans autorisation préalable écrite.</p>
        </Section>

        <Section title="Responsabilité">
          <p>Olga Concept Store s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, et se réserve le droit d'en corriger le contenu à tout moment. Cependant, Olga Concept Store ne peut garantir l'exhaustivité, l'exactitude ou la pertinence des informations disponibles sur ce site.</p>
        </Section>

        <Section title="Données personnelles">
          <p>Les données personnelles collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes et ne sont jamais transmises à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous au 06 13 09 64 78.</p>
        </Section>

        <Section title="Cookies">
          <p>Ce site peut utiliser des cookies à des fins de fonctionnement et d'analyse d'audience. Vous pouvez configurer votre navigateur pour refuser les cookies.</p>
        </Section>

        <Section title="Hébergement">
          <p>Ce site est hébergé par une plateforme tierce. Pour toute question relative à l'hébergement, veuillez nous contacter directement.</p>
        </Section>

        <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(201,122,122,0.15)" }}>
          <Link
            to="/politique-de-confidentialite"
            style={{ color: "#C97A7A", fontFamily: "'Raleway', sans-serif", fontSize: "0.85rem", fontWeight: 600 }}
          >
            Voir la politique de confidentialité →
          </Link>
        </div>
      </div>
    </>
  );
}
