"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { staggerContainer, fadeUp } from "@/components/ui/MotionConfig";

export function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        position: "relative",
        background: "var(--color-hero-2)",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
      className="section-diagonal-bottom"
    >
      <GrainOverlay opacity={0.045} />

      {/* Decorative vertical rule */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 60,
          top: 0,
          bottom: 0,
          width: 1,
          background: "var(--border-on-dark)",
        }}
        className="hidden lg:block"
      />

      <div
        style={{
          maxWidth: 1200,
          marginInline: "auto",
          paddingInline: 60,
          paddingTop: 140,
          paddingBottom: 140,
          width: "100%",
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* LEFT — Logo grande */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/logo.png"
            alt="AYAM — Ashtanga Yoga Alessandra Monticelli"
            width={420}
            height={420}
            style={{
              width: "min(380px, 100%)",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 8px 40px rgba(237,227,200,0.08))",
            }}
            priority
          />
        </motion.div>

        {/* RIGHT — Testo + CTA */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Overline label */}
          <motion.p
            variants={fadeUp}
            className="text-label"
            style={{ color: "var(--text-accent)", marginBottom: 28 }}
          >
            Ashtanga Vinyasa Yoga
          </motion.p>

          {/* Display heading — Cormorant italic */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(48px, 6vw, 88px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--text-on-dark)",
              marginBottom: 28,
            }}
          >
            Senza
            <br />
            Compromessi.
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 17,
              fontWeight: 300,
              lineHeight: 1.75,
              color: "rgba(237, 227, 200, 0.65)",
              marginBottom: 48,
            }}
          >
            Sadhana — la pratica quotidiana. Non una filosofia da leggere, ma un corpo che si muove, respira, fatica ogni mattina.
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}
          >
            <Link href="/inizia-da-qui" className="btn-cta">
              Inizia da qui
            </Link>
            <Link href="/articoli" className="btn-ghost">
              Leggi gli articoli
            </Link>
          </motion.div>

          {/* Decorative bottom label */}
          <motion.div
            variants={fadeUp}
            style={{ marginTop: 56, display: "flex", alignItems: "center", gap: 16 }}
            aria-hidden="true"
          >
            <div style={{ height: 1, width: 32, background: "var(--border-on-dark)" }} />
            <span className="text-label-sm" style={{ color: "rgba(237,227,200,0.3)" }}>
              La sequenza è fissa
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
