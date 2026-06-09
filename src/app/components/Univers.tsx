import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Shirt, Gem, Home, Sparkles } from "lucide-react";

const categories = [
  {
    icon: Shirt,
    title: "Mode",
    description: "Vêtements tendance et intemporels pour la femme moderne. Des pièces uniques et soigneusement sélectionnées.",
    accent: "#C97A7A",
    bg: "linear-gradient(135deg, #FDF0EE 0%, #FAF5F4 100%)",
    border: "rgba(201,122,122,0.18)",
  },
  {
    icon: Gem,
    title: "Bijoux",
    description: "Bijoux fins et raffinés pour toutes les occasions. Du quotidien élégant à la pièce d'exception.",
    accent: "#C9A96E",
    bg: "linear-gradient(135deg, #FDF6EE 0%, #FAF8F4 100%)",
    border: "rgba(201,169,110,0.18)",
  },
  {
    icon: Home,
    title: "Décoration",
    description: "Objets déco à l'âme singulière. Des pièces choisies pour embellir votre intérieur avec caractère.",
    accent: "#9E8E82",
    bg: "linear-gradient(135deg, #F5EDE3 0%, #FAF7F4 100%)",
    border: "rgba(158,142,130,0.18)",
  },
  {
    icon: Sparkles,
    title: "Cosmétiques",
    description: "Produits beauté et bien-être naturels. Un soin particulier pour vous faire du bien, chaque jour.",
    accent: "#8FAF86",
    bg: "linear-gradient(135deg, #EEF3EC 0%, #F6FAF5 100%)",
    border: "rgba(143,175,134,0.18)",
  },
];

export function Univers() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="univers"
      style={{ backgroundColor: "#FAF7F4", padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 2.5rem)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "1rem",
            }}
          >
            <div style={{ width: "24px", height: "1px", backgroundColor: "#C97A7A" }} />
            <span
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#C97A7A",
                fontWeight: 700,
              }}
            >
              Notre Univers
            </span>
            <div style={{ width: "24px", height: "1px", backgroundColor: "#C97A7A" }} />
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
              color: "#4A3F3A",
              margin: "0 0 1rem",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            Un monde de
            <em style={{ color: "#C97A7A", fontStyle: "italic" }}> découvertes</em>
          </h2>
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "1rem",
              color: "#9E8E82",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.85,
            }}
          >
            Chaque article est choisi avec passion pour créer un univers unique entre mode, art de vivre et bien-être.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 36 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                style={{
                  background: cat.bg,
                  borderRadius: "20px",
                  padding: "2.25rem 1.85rem",
                  border: `1px solid ${cat.border}`,
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  boxShadow: "0 2px 12px rgba(74,63,58,0.04)",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                {/* Decorative circle */}
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    width: "90px",
                    height: "90px",
                    borderRadius: "50%",
                    backgroundColor: cat.accent,
                    opacity: 0.07,
                  }}
                />

                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "15px",
                    backgroundColor: cat.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    boxShadow: `0 8px 22px ${cat.accent}45`,
                  }}
                >
                  <Icon size={22} color="#FAF7F4" strokeWidth={1.5} />
                </div>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.35rem",
                    color: "#4A3F3A",
                    margin: "0 0 0.65rem",
                    fontWeight: 600,
                  }}
                >
                  {cat.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "0.875rem",
                    color: "#7A6E69",
                    lineHeight: 1.8,
                    margin: "0 0 1.5rem",
                  }}
                >
                  {cat.description}
                </p>

                <div
                  style={{
                    width: "28px",
                    height: "2px",
                    background: `linear-gradient(to right, ${cat.accent}, transparent)`,
                    borderRadius: "2px",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
