"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, fadeUpSlow } from "@/components/ui/MotionConfig";

const articles = [
  {
    slug: "perche-la-sequenza-e-fissa",
    category: "Metodo",
    readingTime: "7 min",
    date: "Maggio 2025",
    title: "Perché la sequenza è fissa",
    excerpt:
      "Non è tradizionalismo. È pedagogia. La ripetizione crea il corpo capace di fare la pratica — non il contrario.",
    featured: true,
  },
  {
    slug: "mysore-style-cosa-significa",
    category: "Pratica",
    readingTime: "5 min",
    date: "Aprile 2025",
    title: "Mysore style: cosa significa davvero",
    excerpt:
      "Il Mysore non è una classe. È un rapporto tra insegnante e studente che si sviluppa nel tempo, ogni mattina.",
    featured: false,
  },
  {
    slug: "ujjayi-il-respiro-che-unifica",
    category: "Tecniche",
    readingTime: "6 min",
    date: "Marzo 2025",
    title: "Ujjayi — il respiro che unifica",
    excerpt:
      "Prima che la postura sia corretta, il respiro deve essere vivo. Ujjayi non è una tecnica di rilassamento.",
    featured: false,
  },
];

function ArticleCard({
  article,
  index,
}: {
  article: (typeof articles)[0];
  index: number;
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      style={{
        background: "var(--color-neutral-mid)",
        border: "1px solid var(--border-default)",
        borderRadius: 8,
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        cursor: "pointer",
        transition: "border-color 250ms ease",
        gridColumn: index === 0 ? "span 1" : "auto",
      }}
      onHoverStart={(e) => {
        (e.target as HTMLElement).style.borderColor = "var(--border-accent)";
      }}
      onHoverEnd={(e) => {
        (e.target as HTMLElement).style.borderColor = "var(--border-default)";
      }}
    >
      {/* Meta row */}
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
        <span className="tag">{article.category}</span>
        <span
          className="text-label-sm"
          style={{ color: "var(--text-muted)" }}
        >
          {article.readingTime} di lettura
        </span>
        <span
          className="text-label-sm"
          style={{ color: "var(--text-muted)" }}
        >
          {article.date}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(22px, 2.5vw, 30px)",
          fontWeight: 400,
          lineHeight: 1.2,
          color: "var(--text-primary)",
          margin: 0,
        }}
      >
        {article.title}
      </h3>

      {/* Excerpt */}
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 15,
          fontWeight: 400,
          lineHeight: 1.65,
          color: "var(--text-secondary)",
          margin: 0,
          flexGrow: 1,
        }}
      >
        {article.excerpt}
      </p>

      {/* Read link */}
      <Link
        href={`/articoli/${article.slug}`}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          fontWeight: 400,
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          color: "var(--text-accent)",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          transition: "gap 200ms ease",
        }}
        aria-label={`Leggi: ${article.title}`}
      >
        Leggi
        <span aria-hidden="true">→</span>
      </Link>
    </motion.article>
  );
}

export function RecentArticles() {
  return (
    <section
      aria-labelledby="articles-heading"
      style={{
        background: "var(--color-neutral-light)",
        paddingBlock: "100px",
        paddingInline: 60,
      }}
    >
      <div style={{ maxWidth: 1200, marginInline: "auto" }}>
        {/* Section header — asymmetric */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 56,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <motion.div variants={fadeUpSlow}>
            <p className="text-label" style={{ color: "var(--text-accent)", marginBottom: 12 }}>
              Dalla pratica
            </p>
            <h2
              id="articles-heading"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 300,
                color: "var(--text-primary)",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Articoli recenti
            </h2>
          </motion.div>

          <motion.div variants={fadeUpSlow}>
            <Link
              href="/articoli"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                fontWeight: 400,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: "var(--text-secondary)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                borderBottom: "1px solid var(--border-medium)",
                paddingBottom: 2,
              }}
            >
              Tutto l&apos;archivio
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Grid — 3 columns, intentionally asymmetric via first card spanning */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {articles.map((article, i) => (
            <ArticleCard key={article.slug} article={article} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
