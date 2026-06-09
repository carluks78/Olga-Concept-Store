import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Phone, Instagram, Send, Clock, CheckCircle } from "lucide-react";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      ref={ref}
      id="contact"
      style={{
        background: "linear-gradient(135deg, #4A3F3A 0%, #5C4E47 100%)",
        padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 2.5rem)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#F2C5B5",
              fontWeight: 700,
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            Venir nous voir
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#FAF7F4",
              margin: "0 0 1rem",
              fontWeight: 600,
            }}
          >
            Nous
            <span style={{ fontStyle: "italic", color: "#F2C5B5" }}> contacter</span>
          </h2>
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "1rem",
              color: "rgba(250, 247, 244, 0.65)",
              maxWidth: "460px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Retrouvez-nous à Pacy-sur-Eure ou contactez-nous directement.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Contact cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {[
                {
                  icon: MapPin,
                  title: "Adresse",
                  line1: "88 A rue Edouard Isambard",
                  line2: "27120 Pacy-sur-Eure, France",
                  href: "https://maps.google.com/?q=88+Rue+Edouard+Isambard+27120+Pacy-sur-Eure",
                },
                {
                  icon: Phone,
                  title: "Téléphone",
                  line1: "06 13 09 64 78",
                  line2: "Appel ou SMS",
                  href: "tel:+33613096478",
                },
                {
                  icon: Instagram,
                  title: "Instagram",
                  line1: "@olga_conceptstore",
                  line2: "Nouveautés & actualités",
                  href: "https://www.instagram.com/olga_conceptstore",
                },
                {
                  icon: Clock,
                  title: "Horaires",
                  line1: "Nous contacter pour les horaires",
                  line2: "Ouverture variable selon saison",
                  href: null,
                },
              ].map((item) => {
                const Icon = item.icon;
                const content = (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      backgroundColor: "rgba(250, 247, 244, 0.07)",
                      border: "1px solid rgba(250, 247, 244, 0.1)",
                      borderRadius: "14px",
                      padding: "1.1rem 1.25rem",
                      transition: "background-color 0.3s ease",
                      cursor: item.href ? "pointer" : "default",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(201, 122, 122, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={16} color="#F2C5B5" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Raleway', sans-serif",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: "#F2C5B5",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          marginBottom: "2px",
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Raleway', sans-serif",
                          fontSize: "0.9rem",
                          color: "#FAF7F4",
                          fontWeight: 500,
                        }}
                      >
                        {item.line1}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Raleway', sans-serif",
                          fontSize: "0.78rem",
                          color: "rgba(250, 247, 244, 0.55)",
                        }}
                      >
                        {item.line2}
                      </div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.title}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{ textDecoration: "none" }}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.title}>{content}</div>
                );
              })}
            </div>

            {/* Google Maps */}
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(250, 247, 244, 0.1)",
                height: "220px",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.5!2d1.3876!3d49.0183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673b7c5e9f999%3A0x1234567890abcdef!2s88+Rue+Edouard+Isambard%2C+27120+Pacy-sur-Eure!5e0!3m2!1sfr!2sfr!4v1686340000000"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Olga Concept Store - 88 rue Edouard Isambard, Pacy-sur-Eure"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              backgroundColor: "rgba(250, 247, 244, 0.06)",
              border: "1px solid rgba(250, 247, 244, 0.1)",
              borderRadius: "24px",
              padding: "2.5rem",
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.5rem",
                color: "#FAF7F4",
                margin: "0 0 0.5rem",
                fontWeight: 600,
              }}
            >
              Envoyez-nous un message
            </h3>
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.875rem",
                color: "rgba(250, 247, 244, 0.55)",
                margin: "0 0 2rem",
                lineHeight: 1.6,
              }}
            >
              Une question, une demande spéciale ou envie d'en savoir plus sur nos produits ?
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  textAlign: "center",
                  padding: "3rem 1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <CheckCircle size={48} color="#A8B89A" />
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.2rem",
                    color: "#FAF7F4",
                    fontStyle: "italic",
                  }}
                >
                  Message envoyé avec succès !
                </p>
                <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.875rem", color: "rgba(250,247,244,0.6)" }}>
                  Nous vous répondrons dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{
                    background: "none",
                    border: "1px solid rgba(250,247,244,0.3)",
                    color: "#FAF7F4",
                    borderRadius: "100px",
                    padding: "8px 20px",
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    marginTop: "0.5rem",
                  }}
                >
                  Nouveau message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { name: "name", label: "Votre nom", type: "text", placeholder: "Prénom Nom", required: true },
                  { name: "email", label: "Email", type: "email", placeholder: "votre@email.fr", required: true },
                ].map((field) => (
                  <div key={field.name} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(250, 247, 244, 0.6)",
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) => setForm((f) => ({ ...f, [field.name]: e.target.value }))}
                      style={{
                        backgroundColor: "rgba(250, 247, 244, 0.08)",
                        border: "1px solid rgba(250, 247, 244, 0.15)",
                        borderRadius: "10px",
                        padding: "12px 14px",
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: "0.9rem",
                        color: "#FAF7F4",
                        outline: "none",
                        transition: "border-color 0.3s ease",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(201, 122, 122, 0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(250, 247, 244, 0.15)")}
                    />
                  </div>
                ))}

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(250, 247, 244, 0.6)",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Votre message..."
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    style={{
                      backgroundColor: "rgba(250, 247, 244, 0.08)",
                      border: "1px solid rgba(250, 247, 244, 0.15)",
                      borderRadius: "10px",
                      padding: "12px 14px",
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: "0.9rem",
                      color: "#FAF7F4",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(201, 122, 122, 0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(250, 247, 244, 0.15)")}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: "#C97A7A",
                    color: "#FAF7F4",
                    border: "none",
                    borderRadius: "100px",
                    padding: "14px 28px",
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 16px rgba(201, 122, 122, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#B86A6A";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#C97A7A";
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  }}
                >
                  <Send size={14} />
                  Envoyer le message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
