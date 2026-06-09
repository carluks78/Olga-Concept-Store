import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Où se trouve Olga Concept Store à Pacy-sur-Eure ?",
    a: "Olga Concept Store est situé au 88 A rue Edouard Isambard, 27120 Pacy-sur-Eure, en Normandie. Facilement accessible depuis Vernon, Évreux, Gaillon, Saint-Marcel et les communes voisines de l'Eure.",
  },
  {
    q: "Quels produits trouve-t-on chez Olga Concept Store ?",
    a: "Vous trouverez chez Olga Concept Store une sélection premium de mode femme, bijoux et accessoires, objets de décoration intérieure, cosmétiques naturels et bien-être, ainsi que de nombreuses idées cadeaux originales. Chaque article est soigneusement choisi par Olga.",
  },
  {
    q: "Où acheter des bijoux originaux à Pacy-sur-Eure et dans l'Eure ?",
    a: "Olga Concept Store propose une belle sélection de bijoux fins, raffinés et tendance à Pacy-sur-Eure. Bagues, colliers, bracelets et boucles d'oreilles pour toutes les occasions. La boutique est accessible depuis Vernon, Évreux, Gaillon et tout le département de l'Eure.",
  },
  {
    q: "Où trouver des idées cadeaux originales dans l'Eure ?",
    a: "Pour un cadeau unique et original dans l'Eure, Olga Concept Store est votre adresse de référence. Bijoux, décoration, cosmétiques et objets artisanaux — des cadeaux qui font plaisir, disponibles à Pacy-sur-Eure, à deux pas de Vernon et d'Évreux.",
  },
  {
    q: "Quels sont les horaires d'ouverture de la boutique ?",
    a: "Pour connaître les horaires d'ouverture actuels, nous vous invitons à nous contacter par téléphone au 06 13 09 64 78 ou via Instagram @olga_conceptstore. Les horaires peuvent varier selon les saisons.",
  },
  {
    q: "Où trouver une boutique déco originale près de Vernon ?",
    a: "Olga Concept Store à Pacy-sur-Eure est le concept store incontournable pour la décoration dans l'Eure. À seulement quelques minutes de Vernon, Saint-Marcel et Gaillon, notre boutique propose des objets déco uniques et soigneusement sélectionnés.",
  },
  {
    q: "Faites-vous de la vente en ligne ?",
    a: "Actuellement, Olga Concept Store est une boutique physique à Pacy-sur-Eure. Une boutique en ligne est en cours de développement pour vous permettre de retrouver bientôt vos coups de cœur en ligne. Suivez-nous sur Instagram @olga_conceptstore pour être les premiers informés.",
  },
  {
    q: "Proposez-vous des cosmétiques naturels à Pacy-sur-Eure ?",
    a: "Oui, Olga Concept Store propose une sélection de cosmétiques naturels et de produits de bien-être, soigneusement choisis pour leur qualité. Une belle adresse beauté dans l'Eure pour les amateurs de produits naturels et raffinés.",
  },
  {
    q: "Puis-je contacter la boutique par téléphone ?",
    a: "Oui, vous pouvez joindre Olga Concept Store au 06 13 09 64 78. Vous pouvez également nous contacter via le formulaire de contact sur ce site ou par message sur Instagram @olga_conceptstore.",
  },
  {
    q: "Olga Concept Store est-il accessible depuis Évreux et les villes voisines ?",
    a: "Absolument. Olga Concept Store à Pacy-sur-Eure est facilement accessible depuis Évreux, Vernon, Gaillon, Saint-Marcel, Bonnières-sur-Seine, Jouy-sur-Eure, Aubevoye, Ménilles, Croisy-sur-Eure, Houlbec-Cocherel, La Croix-Saint-Leufroy, Bueil, Breuilpont, Fains et Fontaine-sous-Jouy.",
  },
  {
    q: "Faites-vous des emballages cadeaux ?",
    a: "Olga Concept Store met tout son soin dans la présentation. Pour les détails sur l'emballage cadeau, n'hésitez pas à nous contacter directement au 06 13 09 64 78 ou via Instagram.",
  },
];

export function FAQ() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#FAF7F4",
        padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 2.5rem)",
      }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C97A7A",
              fontWeight: 700,
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            FAQ
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#4A3F3A",
              margin: "0 0 1rem",
              fontWeight: 600,
            }}
          >
            Questions
            <span style={{ fontStyle: "italic", color: "#C97A7A" }}> fréquentes</span>
          </h2>
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "1rem",
              color: "#9E8E82",
              maxWidth: "460px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Tout ce que vous souhaitez savoir sur Olga Concept Store à Pacy-sur-Eure.
          </p>
        </motion.div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              style={{
                backgroundColor: open === i ? "#fff" : "rgba(255,255,255,0.6)",
                borderRadius: "16px",
                border: `1px solid ${open === i ? "rgba(201, 122, 122, 0.25)" : "rgba(0,0,0,0.05)"}`,
                overflow: "hidden",
                transition: "background-color 0.3s ease, border-color 0.3s ease",
                boxShadow: open === i ? "0 4px 20px rgba(201, 122, 122, 0.08)" : "none",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.25rem 1.5rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "1rem",
                }}
                aria-expanded={open === i}
              >
                <span
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#4A3F3A",
                    lineHeight: 1.5,
                    flex: 1,
                  }}
                >
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ flexShrink: 0 }}
                >
                  <ChevronDown size={18} color="#C97A7A" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: "0.9rem",
                        color: "#7A6E69",
                        lineHeight: 1.8,
                        padding: "0 1.5rem 1.25rem",
                        margin: 0,
                        borderTop: "1px solid rgba(201, 122, 122, 0.1)",
                        paddingTop: "1rem",
                      }}
                    >
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
