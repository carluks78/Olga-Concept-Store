import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Instagram as InstagramIcon, ExternalLink } from "lucide-react";

export function Instagram() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #F5EDE3 0%, #FAF7F4 50%, #FDF0EE 100%)",
        padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 5vw, 2.5rem)",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center" }}
        >
          {/* Instagram badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #f09433, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888)",
              marginBottom: "1.5rem",
              boxShadow: "0 8px 24px rgba(220,39,67,0.25)",
            }}
          >
            <InstagramIcon size={34} color="#fff" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.72rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C97A7A",
              fontWeight: 700,
              marginBottom: "0.75rem",
            }}
          >
            Retrouvez-nous
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#4A3F3A",
              margin: "0 0 1rem",
              fontWeight: 600,
            }}
          >
            Suivez-nous sur
            <span style={{ fontStyle: "italic", color: "#C97A7A" }}> Instagram</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: "1rem",
              color: "#9E8E82",
              maxWidth: "460px",
              margin: "0 auto 2rem",
              lineHeight: 1.8,
            }}
          >
            Retrouvez nos nouveautés, coups de cœur et l'ambiance de la boutique au quotidien sur{" "}
            <strong style={{ color: "#C97A7A" }}>@olga_conceptstore</strong>.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.65 }}
            href="https://www.instagram.com/olga_conceptstore"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "linear-gradient(135deg, #f09433, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888)",
              color: "#FAF7F4",
              borderRadius: "100px",
              padding: "14px 32px",
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 6px 22px rgba(220,39,67,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(220,39,67,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 22px rgba(220,39,67,0.2)";
            }}
          >
            <InstagramIcon size={17} />
            Suivre @olga_conceptstore
            <ExternalLink size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
