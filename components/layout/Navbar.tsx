"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/articoli", label: "Articoli" },
  { href: "/about", label: "Chi sono" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      role="banner"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(0, 54, 49, 0.97)" : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(237, 227, 200, 0.1)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background-color 400ms ease, border-color 400ms ease",
      }}
    >
      <div
        className="container-site"
        style={{
          paddingBlock: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          aria-label="Ashtanga Yoga Alessandra Monticelli — homepage"
          style={{ display: "flex", alignItems: "center", lineHeight: 0, flexShrink: 0 }}
        >
          <Image
            src="/logo-nav.png"
            alt="AYAM logo"
            width={60}
            height={60}
            style={{ width: 60, height: 60, objectFit: "contain", display: "block" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Navigazione principale"
          className="nav-desktop"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                fontWeight: 400,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: "var(--text-on-dark)",
                textDecoration: "none",
                opacity: 0.75,
                transition: "opacity 150ms ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "1")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.75")
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-toggle"
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            flexDirection: "column",
            gap: 5,
            padding: 4,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 22,
                height: 1,
                background: "var(--text-on-dark)",
                transition: "transform 250ms ease, opacity 250ms ease",
                transform:
                  menuOpen && i === 0
                    ? "translateY(6px) rotate(45deg)"
                    : menuOpen && i === 2
                    ? "translateY(-6px) rotate(-45deg)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              background: "var(--color-hero-2)",
              borderTop: "1px solid rgba(237, 227, 200, 0.1)",
              paddingInline: 24,
              paddingBlock: 32,
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 400,
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "var(--text-on-dark)",
                  textDecoration: "none",
                  opacity: 0.8,
                }}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
