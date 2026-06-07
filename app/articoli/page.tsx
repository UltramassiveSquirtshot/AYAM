import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/ui/SkipLink";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

export const metadata: Metadata = {
  title: "Articoli — Ashtanga Senza Compromessi",
  description:
    "Riflessioni sulla pratica Ashtanga Vinyasa Yoga, filosofia, metodo, ricerca. Scritti da Alessandra Monticelli.",
  openGraph: {
    title: "Articoli — Ashtanga Senza Compromessi",
    description:
      "Riflessioni sulla pratica Ashtanga Vinyasa Yoga, filosofia, metodo, ricerca.",
    locale: "it_IT",
    type: "website",
  },
};

const articoli = [
  {
    slug: "yoga-queer-indigeno-manipur",
    titolo: "Yoga, identità indigena e queerness: lezioni dal Nordest dell'India",
    sommario:
      "Il Manipur custodisce tradizioni spirituali che includono identità di genere non binarie da secoli. Cosa può insegnare questa storia a chi pratica yoga in Occidente?",
    tags: ["Filosofia", "Ricerca"],
    data: "Giugno 2026",
  },
  {
    slug: "body-politics-yoga-e-marginalita",
    titolo: "Body politics: il corpo yoga tra élite, dominanza e marginalità",
    sommario:
      "La pratica non avviene mai nel vuoto. I corpi che entrano nelle aule portano con sé storie di potere, inclusione ed esclusione. Una riflessione nata da anni di ricerca sul campo in India.",
    tags: ["Ricerca", "Pratica"],
    data: "Giugno 2026",
  },
];

export default function ArticoliPage() {
  return (
    <>
      <SkipLink />
      <Navbar />

      <main id="main-content">
        {/* Header */}
        <section
          style={{
            background: "var(--color-hero-2)",
            paddingTop: 160,
            paddingBottom: 100,
            paddingInline: 60,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <GrainOverlay />
          <div style={{ maxWidth: 720, marginInline: "auto", position: "relative", zIndex: 1 }}>
            <p
              className="text-label"
              style={{ color: "var(--text-accent)", marginBottom: 24 }}
            >
              Archivio
            </p>
            <h1
              className="text-h1"
              style={{
                color: "var(--text-on-dark)",
                fontStyle: "italic",
                fontWeight: 300,
                margin: 0,
              }}
            >
              Articoli
            </h1>
          </div>
        </section>

        {/* Listing */}
        <section
          style={{
            background: "var(--color-neutral-light)",
            paddingBlock: 100,
            paddingInline: 60,
          }}
        >
          <div style={{ maxWidth: 1200, marginInline: "auto" }}>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              {articoli.map((art, i) => (
                <li
                  key={art.slug}
                  style={{
                    borderTop: i === 0 ? "1px solid var(--border-default)" : undefined,
                    borderBottom: "1px solid var(--border-default)",
                  }}
                >
                  <Link
                    href={`/articoli/${art.slug}`}
                    style={{ textDecoration: "none", display: "block", paddingBlock: 48 }}
                  >
                    <article
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr auto",
                        gap: 40,
                        alignItems: "start",
                      }}
                    >
                      <div>
                        <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
                          {art.tags.map((tag) => (
                            <span key={tag} className="tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2
                          className="text-h3"
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontStyle: "italic",
                            color: "var(--text-primary)",
                            margin: "0 0 16px",
                            transition: "color 200ms ease",
                          }}
                        >
                          {art.titolo}
                        </h2>
                        <p
                          className="text-body"
                          style={{ color: "var(--text-secondary)", margin: 0, maxWidth: 640 }}
                        >
                          {art.sommario}
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          gap: 24,
                          flexShrink: 0,
                        }}
                      >
                        <p
                          className="text-label"
                          style={{ color: "var(--text-muted)", margin: 0, whiteSpace: "nowrap" }}
                        >
                          {art.data}
                        </p>
                        <span className="article-read-link">
                          Leggi →
                        </span>
                      </div>
                    </article>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
