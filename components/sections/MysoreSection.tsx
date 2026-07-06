"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, fadeUpSlow } from "@/components/ui/MotionConfig";

export function MysoreSection() {
  return (
    <section
      aria-labelledby="mysore-heading"
      style={{
        background: "var(--color-hero-1)",
        paddingBlock: "140px 160px",
        paddingInline: 60,
        position: "relative",
      }}
      className="section-diagonal-top section-diagonal-bottom"
    >
      <div
        style={{
          maxWidth: 1200,
          marginInline: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}
      >
        {/* Left — long-form text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-label"
            style={{ color: "var(--text-accent)", marginBottom: 24 }}
          >
            Il metodo
          </motion.p>

          <motion.h2
            variants={fadeUp}
            id="mysore-heading"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.15,
              color: "var(--text-primary)",
              margin: "0 0 40px 0",
            }}
          >
            Cos&apos;è il Mysore style
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 18,
              fontWeight: 300,
              lineHeight: 1.75,
              color: "var(--text-secondary)",
              marginBottom: 24,
            }}
          >
            A Mysore, in India, gli studenti arrivavano ogni mattina nello shala di Pattabhi Jois: ognuno praticava la propria sequenza al proprio ritmo. L&apos;insegnante osservava, correggeva, aggiustava — senza guidare l&apos;intera stanza.
          </motion.p>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.75,
              color: "var(--text-secondary)",
              marginBottom: 24,
            }}
          >
            Questo è il Mysore style: una pratica individuale in un contesto collettivo. Non si aspetta che l&apos;insegnante guidi una classe, lo studente studia la sequenza per apprenderla e praticarla autonomamente.
          </motion.p>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.75,
              color: "var(--text-secondary)",
              marginBottom: 48,
            }}
          >
            Il corpo diviene il testo. L&apos;attenzione dell&apos;insegnante è distribuita in modo equo.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link href="/inizia-da-qui" className="btn-cta">
              Scopri come iniziare
            </Link>
          </motion.div>
        </motion.div>

        {/* Right — numbered list / principles */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          style={{ paddingTop: 80 }}
        >
          {[
            {
              n: "01",
              title: "La sequenza si apprende per essere memorizzata",
              body: "Lo studente integra man mano le posizioni e la loro progressione.",
            },
            {
              n: "02",
              title: "Il ritmo è personale",
              body: "Si pratica al proprio respiro.",
            },
            {
              n: "03",
              title: "L'insegnante osserva.",
              body: "Gli aggiustamenti sono misurati, precisi ed individuali. La fiducia si costruisce nel tempo.",
            },
            {
              n: "04",
              title: "Si viene ogni mattina",
              body: "È il senso della sadhana, la disciplina quotidiana che cambia il corpo e la mente.",
            },
          ].map((item) => (
            <motion.div
              key={item.n}
              variants={fadeUpSlow}
              style={{
                display: "flex",
                gap: 24,
                marginBottom: 40,
                paddingBottom: 40,
                borderBottom: "1px solid var(--border-default)",
              }}
            >
              <span
                className="text-label-sm"
                style={{
                  color: "var(--text-accent)",
                  minWidth: 28,
                  paddingTop: 4,
                }}
                aria-hidden="true"
              >
                {item.n}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: 22,
                    fontWeight: 400,
                    color: "var(--text-primary)",
                    margin: "0 0 10px 0",
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    fontWeight: 400,
                    lineHeight: 1.65,
                    color: "var(--text-secondary)",
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
