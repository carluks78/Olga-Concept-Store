import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router";
import logoImg from "../../imports/olga-concept-store.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "Univers", to: "/#univers" },
  { label: "Galerie", to: "/galerie" },
  { label: "Nouveautés", to: "/nouveautes" },
  { label: "À Propos", to: "/a-propos" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const navBg = scrolled || !isHome ? "rgba(250, 247, 244, 0.97)" : "transparent";
  const textColor = scrolled || !isHome ? "#4A3F3A" : "#FAF7F4";

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: navBg,
        backdropFilter: scrolled || !isHome ? "blur(14px)" : "none",
        boxShadow: scrolled || !isHome ? "0 1px 24px rgba(0,0,0,0.07)" : "none",
        transition: "background-color 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: isMobile ? "64px" : "76px",
          padding: `0 ${isMobile ? "1.25rem" : "clamp(1.5rem, 4vw, 2.5rem)"}`,
        }}
      >
        {/* ── Logo ── */}
        <Link
          to="/"
          aria-label="Accueil — Olga Concept Store"
          style={{
            background: "white",
            border: "none",
            cursor: "pointer",
            padding: 0,
            borderRadius: "50%",
            flexShrink: 0,
            width: isMobile ? "48px" : "56px",
            height: isMobile ? "48px" : "56px",
            overflow: "hidden",
            boxShadow: "0 2px 14px rgba(201,122,122,0.22)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          <ImageWithFallback
            src={logoImg}
            alt="Olga Concept Store"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Link>

        {/* ── Desktop nav ── */}
        {!isMobile && (
          <ul
            style={{
              display: "flex",
              gap: "clamp(1rem, 2vw, 1.75rem)",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {navLinks.map((link) => {
              const isActive =
                link.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.to.replace("/#univers", "").replace(/\/$/, "")) &&
                    link.to !== "/#univers";
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: "0.73rem",
                      letterSpacing: "0.13em",
                      textTransform: "uppercase",
                      color: isActive ? "#C97A7A" : textColor,
                      fontWeight: 600,
                      transition: "color 0.3s ease",
                      padding: "4px 0",
                      whiteSpace: "nowrap",
                      textShadow: scrolled || !isHome ? "none" : "0 1px 6px rgba(0,0,0,0.35)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C97A7A")}
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = isActive ? "#C97A7A" : textColor)
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}

        {/* ── Desktop CTA ── */}
        {!isMobile && (
          <a
            href="tel:+33613096478"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "#C97A7A",
              color: "#FAF7F4",
              borderRadius: "100px",
              padding: "9px 20px",
              textDecoration: "none",
              fontFamily: "'Raleway', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              whiteSpace: "nowrap",
              transition: "all 0.3s ease",
              boxShadow: "0 3px 14px rgba(201,122,122,0.3)",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#B86A6A";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#C97A7A";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <Phone size={13} />
            06 13 09 64 78
          </a>
        )}

        {/* ── Mobile: call button + hamburger ── */}
        {isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <a
              href="tel:+33613096478"
              aria-label="Appeler Olga Concept Store"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                backgroundColor: "#C97A7A",
                borderRadius: "50%",
                textDecoration: "none",
                boxShadow: "0 3px 12px rgba(201,122,122,0.4)",
                flexShrink: 0,
              }}
            >
              <Phone size={16} color="#FAF7F4" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Ouvrir le menu"
              style={{
                background: scrolled || !isHome ? "rgba(74,63,58,0.07)" : "rgba(250,247,244,0.18)",
                border: "none",
                cursor: "pointer",
                color: textColor,
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(4px)",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        )}
      </div>

      {/* ── Mobile drawer menu ── */}
      <AnimatePresence>
        {isMobile && mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              backgroundColor: "rgba(250, 247, 244, 0.99)",
              backdropFilter: "blur(16px)",
              borderTop: "1px solid rgba(201,122,122,0.12)",
              boxShadow: "0 16px 40px rgba(74,63,58,0.1)",
            }}
          >
            <div style={{ padding: "0.5rem 1.25rem 1.25rem" }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.22 }}
                >
                  <Link
                    to={link.to}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: "0.85rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#4A3F3A",
                      padding: "0.9rem 0",
                      borderBottom: "1px solid rgba(201,122,122,0.1)",
                      fontWeight: 600,
                      gap: "10px",
                      textDecoration: "none",
                    }}
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        backgroundColor: "#C97A7A",
                        flexShrink: 0,
                      }}
                    />
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div style={{ paddingTop: "1rem", display: "flex", gap: "0.75rem" }}>
                <a
                  href="tel:+33613096478"
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "7px",
                    backgroundColor: "#C97A7A",
                    color: "#FAF7F4",
                    borderRadius: "100px",
                    padding: "11px 16px",
                    textDecoration: "none",
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                  }}
                >
                  <Phone size={14} />
                  06 13 09 64 78
                </a>
                <a
                  href="https://www.instagram.com/olga_conceptstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "7px",
                    color: "#C97A7A",
                    border: "1.5px solid rgba(201,122,122,0.5)",
                    borderRadius: "100px",
                    padding: "11px 16px",
                    textDecoration: "none",
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    backgroundColor: "rgba(201,122,122,0.06)",
                  }}
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
