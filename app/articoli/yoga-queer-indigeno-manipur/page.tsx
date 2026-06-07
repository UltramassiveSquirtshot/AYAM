import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/ui/SkipLink";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

export const metadata: Metadata = {
  title: "Yoga, identità indigena e queerness: lezioni dal Nordest dell'India — AYAM",
  description:
    "Il Manipur custodisce tradizioni spirituali che includono identità di genere non binarie da secoli. Cosa può insegnare questa storia a chi pratica yoga in Occidente?",
  openGraph: {
    title: "Yoga, identità indigena e queerness: lezioni dal Nordest dell'India",
    description:
      "Il Manipur custodisce tradizioni spirituali che includono identità di genere non binarie da secoli. Cosa può insegnare questa storia a chi pratica yoga in Occidente?",
    locale: "it_IT",
    type: "article",
  },
};

export default function ArticoloYogaQueerIndigeno() {
  return (
    <>
      <SkipLink />
      <Navbar />

      <main id="main-content">
        {/* Hero */}
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
            <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
              <span className="tag">Filosofia</span>
              <span className="tag">Ricerca</span>
            </div>
            <h1
              className="text-h1"
              style={{
                color: "var(--text-on-dark)",
                fontStyle: "italic",
                fontWeight: 300,
                margin: "0 0 32px",
              }}
            >
              Yoga, identità indigena e queerness: lezioni dal Nordest dell&apos;India
            </h1>
            <p
              className="text-body-lg"
              style={{ color: "rgba(237,227,200,0.65)", margin: 0, maxWidth: 600 }}
            >
              Il Manipur custodisce tradizioni spirituali che includono identità di genere non
              binarie da secoli. Cosa può insegnare questa storia a chi pratica yoga in Occidente?
            </p>
            <div
              style={{
                display: "flex",
                gap: 24,
                marginTop: 48,
                alignItems: "center",
                borderTop: "1px solid rgba(237,227,200,0.12)",
                paddingTop: 24,
              }}
            >
              <p
                className="text-label"
                style={{ color: "var(--text-accent)", margin: 0 }}
              >
                Alessandra Monticelli
              </p>
              <span style={{ color: "rgba(237,227,200,0.2)", fontSize: 12 }}>·</span>
              <p
                className="text-label"
                style={{ color: "rgba(237,227,200,0.4)", margin: 0 }}
              >
                Giugno 2026
              </p>
            </div>
          </div>
        </section>

        {/* Article body */}
        <article
          style={{
            background: "var(--color-neutral-light)",
            paddingBlock: 100,
            paddingInline: 60,
          }}
        >
          <div
            style={{
              maxWidth: 720,
              marginInline: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
              Quando ho iniziato la mia ricerca sul campo in India, una delle domande che mi
              portavo dietro era semplice e insieme impossibile: esiste un corpo yoga che non sia
              già stato colonizzato dal mercato del benessere occidentale?
            </p>

            <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
              La risposta, almeno parziale, l&apos;ho trovata in un angolo del paese che spesso
              manca dalle narrative mainstream sull&apos;India: il Nordest, e in particolare il
              Manipur. È qui che ho incontrato la tradizione dei <em>Nupa-Amaibi</em> — figure
              sacre che praticano riti sciamanici e che da secoli abitano una identità di genere
              non binaria, riconosciuta e rispettata dalla comunità.
            </p>

            <h2
              className="text-h3"
              style={{
                fontFamily: "var(--font-heading)",
                fontStyle: "italic",
                color: "var(--text-primary)",
                margin: "16px 0 0",
              }}
            >
              Una queerness che precede il nome
            </h2>

            <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
              Santa Khurai, attivista e rappresentante della comunità queer di Manipur, descrive
              questa tradizione con una precisione che sfida ogni categoria importata:{" "}
              <em>&ldquo;Non mi comprometto con la mia indigeneità!&rdquo;</em> Questa frase,
              pronunciata in un&apos;intervista alla Heinrich Böll Stiftung nel 2020, riassume
              qualcosa che i corsi di yoga in Europa faticano ancora a vedere: le identità non
              normative non sono un&apos;invenzione contemporanea, né un prestito culturale
              dall&apos;Occidente.
            </p>

            <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
              Esistevano — esistono — radicate in sistemi spirituali e corporei che hanno poco a
              che fare con le categorie LGBTQ+ come le conosciamo noi. E tuttavia, nel networking
              nazionale, le comunità del Nordest sono sistematicamente sottorappresentate,
              geograficamente periferiche, culturalmente invisibilizzate.
            </p>

            <blockquote
              style={{
                borderLeft: "2px solid var(--color-accent)",
                paddingLeft: 32,
                marginBlock: 16,
                marginInline: 0,
              }}
            >
              <p
                className="text-h3"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "var(--text-primary)",
                  margin: 0,
                }}
              >
                &ldquo;I ricercatori ci trattano come specimen per i loro studi.&rdquo;
              </p>
              <footer
                className="text-label"
                style={{ color: "var(--text-accent)", marginTop: 16 }}
              >
                — Santa Khurai
              </footer>
            </blockquote>

            <h2
              className="text-h3"
              style={{
                fontFamily: "var(--font-heading)",
                fontStyle: "italic",
                color: "var(--text-primary)",
                margin: "16px 0 0",
              }}
            >
              Cosa c&apos;entra lo yoga
            </h2>

            <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
              Lo yoga — l&apos;Ashtanga in particolare — è una pratica che lavora sul corpo come
              luogo di trasformazione. Non come ornamento, non come performance. Eppure le aule
              yoga in Italia rispecchiano quasi sempre un&apos;immagine del praticante che è
              bianca, flessibile, benestante, cisgender.
            </p>

            <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
              Portare nella pratica la consapevolezza di tradizioni come quella dei Nupa-Amaibi
              non significa esotizzare. Significa ricordare che il corpo in movimento è sempre
              anche un corpo politico — e che la spiritualità non è mai stata neutrale rispetto
              al potere.
            </p>

            <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
              Mysore, il luogo dove ho approfondito la mia pratica all&apos;SYC con Camilla
              Chiannella e Susanna Finocchi, è già un luogo di mescolanza: studenti da tutto il
              mondo che portano i propri corpi davanti a un metodo antico. La domanda che mi
              faccio ogni mattina sul tappetino è la stessa che mi facevo in India: chi è benvenuto
              qui? Quali corpi vengono visti?
            </p>

            {/* Source attribution */}
            <div
              style={{
                marginTop: 32,
                padding: 32,
                background: "var(--color-neutral-mid)",
                borderRadius: 4,
              }}
            >
              <p
                className="text-label"
                style={{ color: "var(--text-accent)", marginBottom: 12 }}
              >
                Fonte
              </p>
              <p className="text-body-sm" style={{ color: "var(--text-secondary)", margin: "0 0 8px" }}>
                Questo articolo è ispirato e trae spunto dall&apos;intervista:
              </p>
              <a
                href="https://in.boell.org/en/2020/08/31/rescuing-traditional-queerness-interview-santa-khurai"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  color: "var(--color-hero-2)",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                  wordBreak: "break-word",
                }}
              >
                &ldquo;Rescuing traditional queerness: An interview with Santa Khurai&rdquo; — Alessandra Monticelli,
                Heinrich Böll Stiftung India, 4 settembre 2020
              </a>
            </div>

            {/* Nav back */}
            <div style={{ marginTop: 24, paddingTop: 48, borderTop: "1px solid var(--border-default)" }}>
              <Link href="/articoli" className="archive-link">
                ← Tutti gli articoli
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
