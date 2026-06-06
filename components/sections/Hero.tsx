"use client";

import Link from "next/link";
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
        paddingTop: 80,
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
          paddingBlock: "100px 140px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          style={{ maxWidth: 820 }}
        >
          {/* Overline label */}
          <motion.p variants={fadeUp} className="text-label" style={{ color: "var(--text-accent)", marginBottom: 32 }}>
            Ashtanga Vinyasa Yoga
          </motion.p>

          {/* Display heading — Cormorant italic */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(52px, 8vw, 96px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--text-on-dark)",
              marginBottom: 32,
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
              fontSize: 18,
              fontWeight: 300,
              lineHeight: 1.7,
              color: "rgba(237, 227, 200, 0.7)",
              maxWidth: 520,
              marginBottom: 56,
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
        </motion.div>

        {/* Bottom corner — practice count / metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{
            position: "absolute",
            bottom: 80,
            right: 60,
            textAlign: "right",
          }}
          className="hidden lg:block"
          aria-hidden="true"
        >
          <p className="text-label-sm" style={{ color: "rgba(237,227,200,0.35)", marginBottom: 6 }}>
            La sequenza è fissa
          </p>
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 48,
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(237,227,200,0.12)",
              lineHeight: 1,
            }}
          >
            Primary
          </p>
        </motion.div>
      </div>
    </section>
  );
}
