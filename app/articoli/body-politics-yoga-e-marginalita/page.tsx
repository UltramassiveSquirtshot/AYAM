import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/ui/SkipLink";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

export const metadata: Metadata = {
  title: "Body politics: il corpo yoga tra élite, dominanza e marginalità — AYAM",
  description:
    "La pratica yoga non avviene mai nel vuoto. I corpi che entrano nelle aule portano con sé storie di inclusione ed esclusione. Una riflessione sulla ricerca in India.",
  openGraph: {
    title: "Body politics: il corpo yoga tra élite, dominanza e marginalità",
    description:
      "La pratica yoga non avviene mai nel vuoto. I corpi che entrano nelle aule portano con sé storie di inclusione ed esclusione.",
    locale: "it_IT",
    type: "article",
  },
};

export default function ArticoloBodyPolitics() {
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
              <span className="tag">Ricerca</span>
              <span className="tag">Pratica</span>
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
              Body politics: il corpo yoga tra élite, dominanza e marginalità
            </h1>
            <p
              className="text-body-lg"
              style={{ color: "rgba(237,227,200,0.65)", margin: 0, maxWidth: 600 }}
            >
              La pratica non avviene mai nel vuoto. I corpi che entrano nelle aule portano con
              sé storie di potere, inclusione ed esclusione. Una riflessione nata da anni di
              ricerca sul campo in India.
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
              Il corpo è politico. Non nel senso della retorica, ma in quello concreto: ogni
              corpo che si muove nello spazio porta con sé una storia di accesso o esclusione,
              di visibilità o invisibilità. Questo vale in ogni aula yoga, anche — soprattutto —
              in quelle che si definiscono &ldquo;aperte a tutti&rdquo;.
            </p>

            <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
              Quando mi sono avvicinata alle scienze regionali del Sud Asia all&apos;Università
              Humboldt di Berlino, stavo cercando un linguaggio per qualcosa che sentivo già nel
              corpo: che la pratica yoga non è neutrale. Che dietro ogni sequenza c&apos;è una
              genealogia, e quella genealogia è intrecciata con relazioni di potere.
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
              Élite e dominanza: chi può permettersi di praticare?
            </h2>

            <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
              La mia ricerca sul campo in India si è concentrata sui diritti delle persone queer
              e LGBTQ, con una lente specifica sulle body politics come politiche di
              discriminazione. Quello che ho trovato conferma quello che si osserva anche in
              Europa: l&apos;accesso alla pratica corporea — yoga, danza, arti marziali — segue
              le linee della classe, del genere, dell&apos;etnia.
            </p>

            <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
              In India, questa stratificazione è amplificata. Le comunità queer del Nordest, come
              quelle documentate dall&apos;attivista Santa Khurai a Manipur, sono doppie volte
              marginali: geograficamente periferiche rispetto ai centri del potere nazionale e
              culturalmente invisibili nelle narrative mainstream sull&apos;India moderna.
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
                &ldquo;Le identità queer indigene subiscono ingiustizia, appartenendo ai corpi
                non mainstream.&rdquo;
              </p>
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
              Il corpo come campo di battaglia culturale
            </h2>

            <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
              Il concetto di <em>body politics</em> non è solo teorico. Si manifesta in chi viene
              fotografato per promuovere uno studio yoga, in chi viene invitato a insegnare, in
              che tipo di adattamenti vengono offerti. Si manifesta nel linguaggio che usiamo per
              descrivere il corpo &ldquo;ideale&rdquo; del praticante — sempre elastico, sempre
              leggero, sempre in qualche modo conforme.
            </p>

            <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
              Ho conseguito un master in infermieristica di famiglia e comunità con la visione
              di una sanità capillarizzata, orientata alla prevenzione. Quella stessa visione
              vale per lo yoga: una pratica che raggiunga i corpi che ne hanno più bisogno,
              non solo quelli che già stanno bene e possono permettersi di pagarla.
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
              Cosa chiedo a me stessa come insegnante
            </h2>

            <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
              La domanda che mi pongo ogni volta che entro in una sala è: sto replicando le
              stesse dinamiche di esclusione che critico? La pratica Ashtanga è esigente — lo
              so, la faccio ogni giorno. Ma l&apos;esigenza tecnica non deve diventare un filtro
              sociale. Il metodo è per tutti i corpi che vogliono incontrarlo con serietà.
            </p>

            <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
              La ricerca mi ha insegnato a guardare oltre la superficie della postura. A chiedermi
              quali corpi mancano dalla stanza, e perché. A capire che insegnare yoga è anche un
              atto politico — nel senso più ampio e più necessario del termine.
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
