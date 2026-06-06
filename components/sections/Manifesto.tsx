"use client";

import { motion } from "framer-motion";
import { fadeUpSlow } from "@/components/ui/MotionConfig";

export function Manifesto() {
  return (
    <section
      aria-labelledby="manifesto-heading"
      style={{
        background: "var(--color-neutral-light)",
        paddingBlock: "120px",
        paddingInline: 60,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          marginInline: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          style={{ maxWidth: 720, textAlign: "center" }}
        >
          {/* Overline */}
          <motion.p
            variants={fadeUpSlow}
            className="text-label"
            style={{ color: "var(--text-accent)", marginBottom: 40 }}
          >
            Manifesto
          </motion.p>

          {/* Pull quote — Cormorant italic, large */}
          <motion.blockquote
            variants={fadeUpSlow}
            id="manifesto-heading"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.3,
              color: "var(--text-primary)",
              margin: "0 0 48px 0",
              padding: 0,
              border: "none",
            }}
          >
            &ldquo;Non esiste una pratica perfetta. Esiste la pratica di oggi, con il corpo che hai oggi, nel momento in cui ti presenti sul tappetino.&rdquo;
          </motion.blockquote>

          {/* Body text */}
          <motion.p
            variants={fadeUpSlow}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              fontWeight: 300,
              lineHeight: 1.75,
              color: "var(--text-secondary)",
              marginBottom: 40,
            }}
          >
            L&apos;Ashtanga Vinyasa non è una tendenza del benessere. È un metodo antico, preciso, esigente. La sequenza è fissa perché la ripetizione è lo strumento, non l&apos;ostacolo. Questo progetto esiste per chi vuole capire — non solo fare.
          </motion.p>

          {/* Decorative rule */}
          <motion.div
            variants={fadeUpSlow}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
            aria-hidden="true"
          >
            <div style={{ height: 1, width: 40, background: "var(--border-accent)" }} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--text-accent)",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              Sadhana
            </span>
            <div style={{ height: 1, width: 40, background: "var(--border-accent)" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
