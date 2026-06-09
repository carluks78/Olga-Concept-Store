import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { X, ZoomIn } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import img1 from "../../imports/IMG_5238.JPG";
import img2 from "../../imports/IMG_5239.JPG";
import img3 from "../../imports/IMG_5241.JPG";
import img4 from "../../imports/IMG_5242.JPG";
import img5 from "../../imports/IMG_5243.JPG";
import img6 from "../../imports/IMG_5244.JPG";
import img7 from "../../imports/IMG_5245.JPG";
import img8 from "../../imports/IMG_5240.JPG";

const photos = [
  { src: img4, alt: "Intérieur principal d'Olga Concept Store - murs terracotta et tapis coloré" },
  { src: img1, alt: "Portant vêtements - sélection mode chez Olga Concept Store" },
  { src: img6, alt: "Espace bijoux et accessoires - Olga Concept Store Pacy-sur-Eure" },
  { src: img3, alt: "Vitrine et entrée de la boutique Olga Concept Store" },
  { src: img7, alt: "Espace décoration - miroir vintage et lampe dorée" },
  { src: img5, alt: "Vue d'ensemble de la boutique Olga Concept Store" },
  { src: img2, alt: "Étagères cadeaux et décoration - Olga Concept Store" },
  { src: img8, alt: "Sélection de produits artisanaux et cadeaux" },
];

export function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      id="galerie"
      style={{
        backgroundColor: "#F5EDE3",
        padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 2.5rem)",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 clamp(0.25rem, 2vw, 1rem)" }}>
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
            La Boutique
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
            Un espace
            <span style={{ fontStyle: "italic", color: "#C97A7A" }}> chaleureux</span>
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
            Chaque recoin de la boutique raconte une histoire. Venez nous rendre visite à Pacy-sur-Eure.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 600: 2, 900: 3, 1200: 4 }}>
            <Masonry gutter="12px">
              {photos.map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  style={{
                    position: "relative",
                    borderRadius: "12px",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => setSelected(i)}
                >
                  <ImageWithFallback
                    src={photo.src}
                    alt={photo.alt}
                    style={{
                      width: "100%",
                      display: "block",
                      imageOrientation: "from-image",
                      objectFit: "cover",
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(74, 63, 58, 0.45)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(250, 247, 244, 0.9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ZoomIn size={18} color="#4A3F3A" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              backgroundColor: "rgba(30, 25, 22, 0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              backdropFilter: "blur(8px)",
            }}
          >
            <button
              onClick={() => setSelected(null)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                background: "rgba(250, 247, 244, 0.15)",
                border: "1px solid rgba(250, 247, 244, 0.3)",
                borderRadius: "50%",
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#FAF7F4",
              }}
              aria-label="Fermer"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90vw",
                maxHeight: "88vh",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <ImageWithFallback
                src={photos[selected].src}
                alt={photos[selected].alt}
                style={{
                  maxWidth: "90vw",
                  maxHeight: "88vh",
                  objectFit: "contain",
                  imageOrientation: "from-image",
                  display: "block",
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
