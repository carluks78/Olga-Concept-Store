import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown, MapPin, Phone, Instagram } from "lucide-react";
import heroImg from "../../imports/IMG_5242.JPG";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div
      ref={ref}
      id="accueil"
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "580px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Parallax image */}
      <motion.div style={{ position: "absolute", inset: "-10%", y }}>
        <img
          src={heroImg}
          alt="Intérieur d'Olga Concept Store à Pacy-sur-Eure — mode bijoux déco cosmétiques"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            imageOrientation: "from-image",
          }}
        />
      </motion.div>

      {/* Rose poudré gradient — left opaque → right transparent */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isMobile
            ? "linear-gradient(to right, rgba(184,90,90,0.9) 0%, rgba(184,90,90,0.78) 38%, rgba(184,90,90,0.38) 68%, rgba(184,90,90,0.08) 100%)"
            : "linear-gradient(to right, rgba(184,90,90,0.92) 0%, rgba(184,90,90,0.82) 30%, rgba(184,90,90,0.48) 55%, rgba(184,90,90,0.12) 78%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* Dark vignette bottom */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(60,40,35,0.5) 0%, transparent 28%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          padding: isMobile ? "0 1.5rem" : "0 clamp(2rem, 7vw, 6rem)",
          maxWidth: isMobile ? "100%" : "min(680px, 58vw)",
          opacity: textOpacity,
        }}
      >
        {/* Location pill */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            backgroundColor: "rgba(255,255,255,0.22)",
            border: "1px solid rgba(255,255,255,0.5)",
            borderRadius: "100px",
            padding: "5px 14px",
            marginBottom: "1.5rem",
            backdropFilter: "blur(8px)",
          }}
        >
          <MapPin size={12} color="#fff" />
          <span
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.68rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            Pacy-sur-Eure · Normandie
          </span>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? "clamp(3rem, 14vw, 4.5rem)" : "clamp(3rem, 6.5vw, 5.8rem)",
              color: "#ffffff",
              margin: "0 0 0.2rem",
              lineHeight: 1.05,
              fontWeight: 600,
              textShadow: "0 2px 20px rgba(60,40,35,0.35)",
              letterSpacing: "-0.01em",
            }}
          >
            Olga
          </h1>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? "clamp(1.5rem, 7vw, 2.4rem)" : "clamp(1.6rem, 3.5vw, 3.2rem)",
              color: "rgba(255,255,255,0.96)",
              margin: "0 0 1.5rem",
              lineHeight: 1.2,
              fontWeight: 400,
              fontStyle: "italic",
              textShadow: "0 2px 14px rgba(60,40,35,0.3)",
              letterSpacing: "0.02em",
            }}
          >
            Concept Store
          </h1>
        </motion.div>

        {/* Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.72 }}
        >
          {/* Decorative separator */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.85rem" }}>
            <div style={{ height: "1px", width: "28px", backgroundColor: "rgba(255,255,255,0.7)" }} />
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: isMobile ? "1rem" : "1.15rem",
                fontStyle: "italic",
                color: "#ffffff",
                fontWeight: 500,
                textShadow: "0 1px 12px rgba(60,40,35,0.4)",
                letterSpacing: "0.02em",
              }}
            >
              "Sélections faites avec amour"
            </span>
          </div>

          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: isMobile ? "0.9rem" : "0.97rem",
              color: "#ffffff",
              margin: "0 0 2.25rem",
              lineHeight: 1.75,
              fontWeight: 400,
              textShadow: "0 1px 10px rgba(60,40,35,0.45)",
              letterSpacing: "0.01em",
            }}
          >
            Mode, bijoux, décoration et cosmétiques
            {!isMobile && <br />}
            {isMobile ? " " : ""}soigneusement sélectionnés pour vous.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}
        >
          <button
            onClick={() => document.getElementById("univers")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              backgroundColor: "#ffffff",
              color: "#B86A6A",
              border: "none",
              borderRadius: "100px",
              padding: isMobile ? "12px 24px" : "13px 28px",
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.transform = "translateY(-2px)";
              (e.target as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.transform = "translateY(0)";
              (e.target as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
            }}
          >
            Découvrir la boutique
          </button>

          <a
            href="tel:+33613096478"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "rgba(255,255,255,0.18)",
              color: "#ffffff",
              border: "1.5px solid rgba(255,255,255,0.75)",
              borderRadius: "100px",
              padding: isMobile ? "12px 22px" : "13px 24px",
              textDecoration: "none",
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
              backdropFilter: "blur(8px)",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.28)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.18)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Phone size={13} />
            Nous appeler
          </a>
        </motion.div>

        {/* Instagram follow link */}
        <motion.a
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          href="https://www.instagram.com/olga_conceptstore"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            color: "rgba(255,255,255,0.8)",
            textDecoration: "none",
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.78rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            marginTop: "1rem",
            padding: "4px 0",
            borderBottom: "1px solid rgba(255,255,255,0.35)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.8)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(255,255,255,0.8)";
            e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.35)";
          }}
        >
          <Instagram size={14} />
          Suivre @olga_conceptstore
        </motion.a>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        onClick={() => document.getElementById("univers")?.scrollIntoView({ behavior: "smooth" })}
        style={{
          position: "absolute",
          bottom: "1.75rem",
          left: "50%",
          transform: "translateX(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          zIndex: 10,
        }}
        aria-label="Défiler"
      >
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} color="rgba(255,255,255,0.7)" />
        </motion.div>
      </motion.button>
    </div>
  );
}
