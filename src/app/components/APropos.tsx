import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Heart, Star, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import storeImg from "../../imports/IMG_5243.JPG";
import logoImg from "../../imports/olga-concept-store.png";

const values = [
  { icon: Heart, label: "Sélection passion", text: "Chaque article est choisi avec amour et passion" },
  { icon: Star, label: "Qualité premium", text: "Des marques et artisans soigneusement sélectionnés" },
  { icon: Award, label: "Ancrage local", text: "Fiers d'être le concept store de Pacy-sur-Eure" },
];

export function APropos() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="apropos"
      style={{
        backgroundColor: "#FAF7F4",
        padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 2.5rem)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ position: "relative" }}
        >
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              aspectRatio: "4/5",
              position: "relative",
            }}
          >
            <ImageWithFallback
              src={storeImg}
              alt="L'intérieur chaleureux d'Olga Concept Store à Pacy-sur-Eure"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                imageOrientation: "from-image",
              }}
            />
            {/* Gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, transparent 60%, rgba(74, 63, 58, 0.2))",
              }}
            />
          </div>

          {/* Floating logo badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              position: "absolute",
              bottom: "-1.5rem",
              right: "-1.5rem",
              backgroundColor: "#fff",
              borderRadius: "50%",
              width: "92px",
              height: "92px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              boxShadow: "0 8px 30px rgba(201,122,122,0.2)",
              border: "3px solid #fff",
            }}
          >
            <ImageWithFallback
              src={logoImg}
              alt="Logo Olga Concept Store"
              style={{ width: "88px", height: "88px", objectFit: "cover", borderRadius: "50%" }}
            />
          </motion.div>

          {/* Decorative element */}
          <div
            style={{
              position: "absolute",
              top: "-1rem",
              left: "-1rem",
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              backgroundColor: "rgba(201, 122, 122, 0.12)",
              zIndex: -1,
            }}
          />
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
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
            Notre Histoire
          </span>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              color: "#4A3F3A",
              margin: "0 0 1.5rem",
              lineHeight: 1.25,
              fontWeight: 600,
            }}
          >
            Une boutique née
            <br />
            <span style={{ fontStyle: "italic", color: "#C97A7A" }}>avec passion</span>
          </h2>

          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "1rem",
              color: "#7A6E69",
              lineHeight: 1.9,
              marginBottom: "1.25rem",
            }}
          >
            Chez Olga Concept Store, chaque article est choisi avec passion afin de vous proposer un univers unique mêlant
            mode, décoration, bijoux et bien-être. Notre boutique est un espace de découverte, d'inspiration et de douceur.
          </p>

          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "1rem",
              color: "#7A6E69",
              lineHeight: 1.9,
              marginBottom: "2rem",
            }}
          >
            Implantée au cœur de Pacy-sur-Eure, en Normandie, notre concept store vous accueille dans une atmosphère chaleureuse
            et raffinée. Que vous cherchiez un cadeau original, une pièce déco unique ou un bijou coup de cœur, vous trouverez
            votre bonheur chez Olga.
          </p>

          {/* Values */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(201, 122, 122, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} color="#C97A7A" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "#4A3F3A",
                        marginBottom: "2px",
                      }}
                    >
                      {v.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: "0.82rem",
                        color: "#9E8E82",
                        lineHeight: 1.5,
                      }}
                    >
                      {v.text}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Quote */}
          <div
            style={{
              borderLeft: "3px solid #C97A7A",
              paddingLeft: "1.25rem",
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.05rem",
                fontStyle: "italic",
                color: "#4A3F3A",
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              "Sélections faites avec amour"
            </p>
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.78rem",
                color: "#C97A7A",
                fontWeight: 700,
                letterSpacing: "0.1em",
                marginTop: "0.4rem",
              }}
            >
              — Olga Concept Store, Pacy-sur-Eure
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
