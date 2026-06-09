import { motion } from "motion/react";
import { Instagram, MapPin, Phone, Heart } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImg from "../../imports/olga-concept-store.png";

const links = [
  { label: "Accueil", to: "/" },
  { label: "Notre Univers", to: "/#univers" },
  { label: "Galerie", to: "/galerie" },
  { label: "Nouveautés", to: "/nouveautes" },
  { label: "À Propos", to: "/a-propos" },
  { label: "Contact", to: "/contact" },
];

const categories = ["Mode Femme", "Bijoux & Accessoires", "Décoration", "Cosmétiques", "Idées Cadeaux"];

export function Footer() {

  return (
    <footer
      style={{
        backgroundColor: "#2C2420",
        padding: "4rem 2rem 0",
        color: "rgba(250, 247, 244, 0.7)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(250, 247, 244, 0.08)",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.25rem" }}>
              <ImageWithFallback
                src={logoImg}
                alt="Olga Concept Store"
                style={{
                  width: "52px",
                  height: "52px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1rem",
                    color: "#FAF7F4",
                    fontStyle: "italic",
                    fontWeight: 500,
                  }}
                >
                  Olga Concept Store
                </div>
                <div
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "0.68rem",
                    color: "#C97A7A",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Pacy-sur-Eure
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.85rem",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
                color: "rgba(250, 247, 244, 0.55)",
              }}
            >
              "Sélections faites avec amour" — Mode, bijoux, décoration et cosmétiques à Pacy-sur-Eure.
            </p>
            <a
              href="https://www.instagram.com/olga_conceptstore"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: "rgba(201, 122, 122, 0.15)",
                border: "1px solid rgba(201, 122, 122, 0.25)",
                borderRadius: "100px",
                padding: "7px 14px",
                textDecoration: "none",
                color: "#F2C5B5",
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(201, 122, 122, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(201, 122, 122, 0.15)";
              }}
            >
              <Instagram size={13} />
              @olga_conceptstore
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#FAF7F4",
                marginBottom: "1.25rem",
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: "0.875rem",
                      color: "rgba(250, 247, 244, 0.55)",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F2C5B5")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(250, 247, 244, 0.55)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#FAF7F4",
                marginBottom: "1.25rem",
              }}
            >
              Nos Univers
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {categories.map((cat) => (
                <li
                  key={cat}
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(250, 247, 244, 0.55)",
                  }}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#FAF7F4",
                marginBottom: "1.25rem",
              }}
            >
              Nous Trouver
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <a
                href="https://maps.google.com/?q=88+Rue+Edouard+Isambard+27120+Pacy-sur-Eure"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  textDecoration: "none",
                  color: "rgba(250, 247, 244, 0.55)",
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F2C5B5")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250, 247, 244, 0.55)")}
              >
                <MapPin size={14} style={{ flexShrink: 0, marginTop: "2px" }} color="#C97A7A" />
                88 A rue Edouard Isambard<br />27120 Pacy-sur-Eure
              </a>
              <a
                href="tel:+33613096478"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  color: "rgba(250, 247, 244, 0.55)",
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "0.85rem",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F2C5B5")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250, 247, 244, 0.55)")}
              >
                <Phone size={14} color="#C97A7A" />
                06 13 09 64 78
              </a>
            </div>

            {/* Local SEO links */}
            <div style={{ marginTop: "2rem" }}>
              <div
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(250, 247, 244, 0.3)",
                  marginBottom: "0.6rem",
                }}
              >
                Liens Utiles
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                {[
                  { label: "Mairie de Pacy-sur-Eure", href: "https://www.pacy-sur-eure.fr" },
                  { label: "Office de Tourisme de l'Eure", href: "https://www.normandie-tourisme.fr" },
                  { label: "Voir sur Google Maps", href: "https://maps.google.com/?q=88+Rue+Edouard+Isambard+27120+Pacy-sur-Eure" },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: "0.75rem",
                      color: "rgba(250, 247, 244, 0.35)",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(250, 247, 244, 0.6)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250, 247, 244, 0.35)")}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            padding: "1.5rem 0",
          }}
        >
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.75rem",
              color: "rgba(250, 247, 244, 0.3)",
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            © 2025 Olga Concept Store — Pacy-sur-Eure. Fait avec{" "}
            <Heart size={11} color="#C97A7A" fill="#C97A7A" /> en Normandie.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link
              to="/mentions-legales"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.72rem",
                color: "rgba(250, 247, 244, 0.3)",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(250, 247, 244, 0.6)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(250, 247, 244, 0.3)")}
            >
              Mentions légales
            </Link>
            <Link
              to="/politique-de-confidentialite"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.72rem",
                color: "rgba(250, 247, 244, 0.3)",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(250, 247, 244, 0.6)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(250, 247, 244, 0.3)")}
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
