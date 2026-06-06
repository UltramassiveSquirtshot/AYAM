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
            A Mysore, in India, gli studenti arrivavano ogni mattina nello shala di Pattabhi Jois. Ognuno praticava la propria sequenza al proprio ritmo. L&apos;insegnante osservava, correggeva, aggiustava — senza guidare con la voce l&apos;intera stanza.
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
            Questo è il Mysore style: una classe individuale in un contesto collettivo. Non si aspetta che l&apos;insegnante dica cosa fare — lo studente conosce la sequenza. Il corpo è diventato il testo.
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
            È esattamente il contrario di una lezione condotta. E proprio per questo funziona: l&apos;attenzione è distribuita in modo equo, e la relazione tra studente e insegnante può approfondirsi nel tempo.
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
              title: "La sequenza è memorizzata",
              body: "Lo studente conosce ogni asana e la loro progressione. Il corpo diventa autonomo.",
            },
            {
              n: "02",
              title: "Il ritmo è personale",
              body: "Si pratica al proprio respiro, non a quello dell'insegnante. Non c'è una voce che comanda.",
            },
            {
              n: "03",
              title: "L'insegnante osserva e tocca",
              body: "Gli aggiustamenti sono fisici, specifici, individuali. La relazione si costruisce nel tempo.",
            },
            {
              n: "04",
              title: "Si viene ogni mattina",
              body: "Non è un'attività. È una sadhana — una disciplina quotidiana che cambia il corpo e la mente.",
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
