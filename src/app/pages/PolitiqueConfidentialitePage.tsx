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

export function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageSEO
        title="Politique de Confidentialité — Olga Concept Store Pacy-sur-Eure"
        description="Politique de confidentialité et gestion des données personnelles d'Olga Concept Store à Pacy-sur-Eure (27120). RGPD, cookies et protection des données."
        canonical="https://olga-conceptstore.fr/politique-de-confidentialite"
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
          Politique de <em style={{ color: "#C97A7A", fontStyle: "italic" }}>Confidentialité</em>
        </h1>
      </div>

      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "clamp(3rem, 6vw, 5rem) clamp(1.25rem, 5vw, 2.5rem)" }}>
        <Section title="Responsable du traitement">
          <p><strong>Olga Concept Store</strong><br />
          88 A rue Edouard Isambard, 27120 Pacy-sur-Eure<br />
          Téléphone : <a href="tel:+33613096478" style={{ color: "#C97A7A" }}>06 13 09 64 78</a></p>
        </Section>

        <Section title="Données collectées">
          <p>Nous collectons les données suivantes via le formulaire de contact :</p>
          <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Contenu du message</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>Ces données sont utilisées uniquement pour répondre à votre demande. Elles ne sont jamais vendues ni transmises à des tiers.</p>
        </Section>

        <Section title="Durée de conservation">
          <p>Vos données personnelles sont conservées pour une durée maximale de 3 ans à compter de votre dernier contact avec nous.</p>
        </Section>

        <Section title="Vos droits (RGPD)">
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
          <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement ("droit à l'oubli")</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit d'opposition</li>
          </ul>
          <p style={{ marginTop: "0.75rem" }}>Pour exercer vos droits, contactez-nous au <a href="tel:+33613096478" style={{ color: "#C97A7A" }}>06 13 09 64 78</a>.</p>
        </Section>

        <Section title="Cookies">
          <p>Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de tracking tiers n'est utilisé sans votre consentement.</p>
        </Section>

        <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(201,122,122,0.15)" }}>
          <Link to="/mentions-legales" style={{ color: "#C97A7A", fontFamily: "'Raleway', sans-serif", fontSize: "0.85rem", fontWeight: 600 }}>
            Voir les mentions légales →
          </Link>
        </div>
      </div>
    </>
  );
}
