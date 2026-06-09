import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Heart, Star } from "lucide-react";
import img1 from "../../imports/IMG_5244.JPG";
import img2 from "../../imports/IMG_5245.JPG";
import img3 from "../../imports/IMG_5238.JPG";
import img4 from "../../imports/IMG_5239.JPG";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const items = [
  {
    img: img1,
    tag: "Coup de cœur",
    title: "Bijoux & Accessoires",
    desc: "Notre nouvelle sélection de bijoux fins — bagues, colliers et bracelets pour sublimer chaque tenue.",
    tagColor: "#C97A7A",
    isNew: true,
  },
  {
    img: img2,
    tag: "Nouveauté",
    title: "Décoration Maison",
    desc: "Miroirs vintage, luminaires dorés et objets déco uniques pour créer une atmosphère raffinée chez vous.",
    tagColor: "#C9A96E",
    isNew: true,
  },
  {
    img: img3,
    tag: "Sélection du moment",
    title: "Mode Femme",
    desc: "Des pièces intemporelles et tendance pour la femme moderne — portants et sélections exclusives.",
    tagColor: "#9E8E82",
    isNew: false,
  },
  {
    img: img4,
    tag: "Artisanat & Cadeaux",
    title: "Idées Cadeaux",
    desc: "Livres illustrés, mugs originaux, cartes et objets artisanaux pour offrir avec originalité.",
    tagColor: "#A8B89A",
    isNew: false,
  },
];

export function Nouveautes() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="nouveautes"
      style={{
        backgroundColor: "#FAF7F4",
        padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 2.5rem)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
            Coups de Cœur
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
            Nouveautés &
            <span style={{ fontStyle: "italic", color: "#C97A7A" }}> Sélections</span>
          </h2>
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "1rem",
              color: "#9E8E82",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Découvrez nos dernières arrivées et les coups de cœur d'Olga — des pièces uniques choisies avec soin.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 2px 16px rgba(74, 63, 58, 0.06)",
                border: "1px solid rgba(0,0,0,0.04)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(74, 63, 58, 0.12)" }}
            >
              {/* Image */}
              <div style={{ position: "relative", overflow: "hidden", height: "240px" }}>
                <ImageWithFallback
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    imageOrientation: "from-image",
                    transition: "transform 0.5s ease",
                  }}
                />
                {/* Tag */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    backgroundColor: item.tagColor,
                    color: "#FAF7F4",
                    borderRadius: "100px",
                    padding: "4px 12px",
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.tag}
                </div>
                {item.isNew && (
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "3px",
                      backgroundColor: "rgba(250, 247, 244, 0.9)",
                      borderRadius: "100px",
                      padding: "4px 8px",
                    }}
                  >
                    <Star size={10} color="#C9A96E" fill="#C9A96E" />
                    <span
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: "0.62rem",
                        fontWeight: 700,
                        color: "#4A3F3A",
                        letterSpacing: "0.06em",
                      }}
                    >
                      NOUVEAU
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: "1.5rem" }}>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.15rem",
                    color: "#4A3F3A",
                    margin: "0 0 0.6rem",
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "0.875rem",
                    color: "#7A6E69",
                    lineHeight: 1.7,
                    margin: "0 0 1.25rem",
                  }}
                >
                  {item.desc}
                </p>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#C97A7A",
                    padding: 0,
                  }}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Heart size={13} />
                  En savoir plus
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
