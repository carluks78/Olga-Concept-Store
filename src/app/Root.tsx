import "../styles/fonts.css";
import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { SEOHead } from "./components/SEOHead";
import { SplashScreen } from "./components/SplashScreen";

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div
      style={{
        fontFamily: "'Raleway', sans-serif",
        backgroundColor: "#FAF7F4",
        color: "#4A3F3A",
        overflowX: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SEOHead />

      {/* ✅ SPLASH ICI */}
      <SplashScreen />

      <Navbar />

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
