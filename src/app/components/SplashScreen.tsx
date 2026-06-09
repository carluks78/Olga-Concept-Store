import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImg from "../../imports/olga-concept-store.png";

const SPLASH_KEY = "olga_splash_shown";

export function SplashScreen() {
  const [visible, setVisible] = useState(() => {
    return !sessionStorage.getItem(SPLASH_KEY);
  });

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      sessionStorage.setItem(SPLASH_KEY, "1");
      setVisible(false);
    }, 2600);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
          onClick={() => { sessionStorage.setItem(SPLASH_KEY, "1"); setVisible(false); }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(160deg, #E8B4B4 0%, #C97A7A 35%, #B86060 65%, #9E5050 100%)",
            cursor: "pointer",
          }}
        >
          {/* Decorative circles */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.12 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              position: "absolute",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              border: "1.5px solid #FAF7F4",
              pointerEvents: "none",
            }}
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.08 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
            style={{
              position: "absolute",
              width: "820px",
              height: "820px",
              borderRadius: "50%",
              border: "1px solid #FAF7F4",
              pointerEvents: "none",
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            style={{
              width: "clamp(100px, 22vw, 148px)",
              height: "clamp(100px, 22vw, 148px)",
              borderRadius: "50%",
              overflow: "hidden",
              background: "#ffffff",
              boxShadow: "0 8px 48px rgba(74,63,58,0.28), 0 2px 12px rgba(74,63,58,0.18)",
              marginBottom: "2rem",
            }}
          >
            <ImageWithFallback
              src={logoImg}
              alt="Olga Concept Store"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{ textAlign: "center" }}
          >
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
              color: "#FAF7F4",
              fontWeight: 600,
              letterSpacing: "0.02em",
              lineHeight: 1.2,
              textShadow: "0 2px 20px rgba(74,63,58,0.25)",
              marginBottom: "0.4rem",
            }}>
              Olga
            </div>
            <div style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "clamp(0.65rem, 2vw, 0.8rem)",
              color: "rgba(250,247,244,0.85)",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              fontWeight: 600,
              textShadow: "0 1px 8px rgba(74,63,58,0.2)",
            }}>
              Concept Store
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)",
              color: "rgba(250,247,244,0.7)",
              fontStyle: "italic",
              marginTop: "1.75rem",
              letterSpacing: "0.04em",
            }}
          >
            Sélections faites avec amour
          </motion.p>

          {/* Loading dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            style={{ display: "flex", gap: "6px", marginTop: "2.5rem" }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(250,247,244,0.7)",
                  display: "block",
                }}
              />
            ))}
          </motion.div>

          {/* Skip hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            style={{
              position: "absolute",
              bottom: "2rem",
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.68rem",
              color: "rgba(250,247,244,0.45)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Appuyer pour continuer
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
