"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { staggerContainer, fadeUp } from "@/components/ui/MotionConfig";

export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <section
      aria-labelledby="newsletter-heading"
      style={{
        background: "var(--color-hero-2)",
        paddingBlock: "100px",
        paddingInline: 60,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <GrainOverlay opacity={0.04} />

      <div
        style={{
          maxWidth: 1200,
          marginInline: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          style={{ maxWidth: 600 }}
        >
          <motion.p
            variants={fadeUp}
            className="text-label"
            style={{ color: "var(--text-accent)", marginBottom: 24 }}
          >
            Lettere dalla pratica
          </motion.p>

          <motion.h2
            variants={fadeUp}
            id="newsletter-heading"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.15,
              color: "var(--text-on-dark)",
              margin: "0 0 24px 0",
            }}
          >
            Segui il progetto
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              fontWeight: 300,
              lineHeight: 1.7,
              color: "rgba(237, 227, 200, 0.65)",
              marginBottom: 48,
              maxWidth: 480,
            }}
          >
            Non una newsletter di contenuti da consumare. Lettere irregolari sulla pratica, sul metodo, su cosa cambia quando ti presenti ogni mattina sul tappetino. Nessuno spam, nessuna urgenza.
          </motion.p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 24,
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "var(--text-on-dark)",
                  marginBottom: 8,
                }}
              >
                Ottimo.
              </p>
              <p
                className="text-label-sm"
                style={{ color: "rgba(237,227,200,0.5)" }}
              >
                Riceverai la prossima lettera quando ci sarà qualcosa da dire.
              </p>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
              noValidate
            >
              <label htmlFor="newsletter-email" style={{ display: "none" }}>
                Indirizzo email
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="la-tua@email.it"
                required
                autoComplete="email"
                style={{
                  flex: "1 1 260px",
                  background: "rgba(237, 227, 200, 0.08)",
                  border: "1px solid var(--border-on-dark)",
                  borderRadius: 8,
                  padding: "14px 20px",
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "var(--text-on-dark)",
                  outline: "none",
                  transition: "border-color var(--transition-normal)",
                }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "rgba(196,182,143,0.5)")
                }
                onBlur={(e) =>
                  (e.target.style.borderColor = "var(--border-on-dark)")
                }
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-cta"
                style={{
                  opacity: loading ? 0.6 : 1,
                  cursor: loading ? "wait" : "pointer",
                  background: "var(--color-hero-1)",
                  color: "var(--color-hero-2)",
                }}
              >
                {loading ? "..." : "Seguimi"}
              </button>
            </motion.form>
          )}

          {/* Privacy note */}
          {!submitted && (
            <motion.p
              variants={fadeUp}
              className="text-label-sm"
              style={{
                color: "rgba(237,227,200,0.3)",
                marginTop: 20,
              }}
            >
              Nessun dato venduto. Disiscrizione in un click.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
