import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/ui/SkipLink";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

export const metadata: Metadata = {
  title: "Chi sono — Alessandra Monticelli",
  description:
    "Infermiera, ricercatrice, insegnante di Ashtanga Yoga. Nata a Fabriano nel 1993, studentessa di Camilla Chiannella e Susanna Finocchi, pratico all'SYC di Mysore.",
  openGraph: {
    title: "Chi sono — Alessandra Monticelli",
    description:
      "Infermiera, ricercatrice, insegnante di Ashtanga Yoga. Il mio percorso tra Fabriano, Bologna, Londra, Berlino e Mysore.",
    locale: "it_IT",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <>
      <SkipLink />
      <Navbar />

      <main id="main-content">
        {/* Hero header */}
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
              Chi sono
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
              Alessandra Monticelli
            </h1>
          </div>
        </section>

        {/* Bio */}
        <section
          style={{
            background: "var(--color-neutral-light)",
            paddingBlock: 100,
            paddingInline: 60,
          }}
        >
          <div style={{ maxWidth: 720, marginInline: "auto" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
                Nasco in una piccola città delle Marche, Fabriano, nell&apos;anno 93, a cavallo tra
                l&apos;era dell&apos;analogico e del digitale.
              </p>
              <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
                Nella mia infanzia son stata male. Soffrivo di bronchiti croniche, sinusiti ed
                emicranie. Non crescevo, finché non ho ricevuto una tonsillectomia. Ero silenziosa
                e timida e cercavo di far andare sempre tutti d&apos;accordo spesso a mie spese.
              </p>
              <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
                Questa attitudine da giovane adulta si è trasformata in professione, prima attraverso
                l&apos;infermieristica e poi con l&apos;insegnamento dello yoga.
              </p>
              <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
                Ho vissuto anni densi di esperienze e di socialità tra Bologna, Londra e Berlino.
                Con la fortuna di conoscere il mondo pre Covid 19, ho studiato tanto e mi sono
                laureata anche in scienze regionali del sud asia dell&apos;università HU di Berlino.
              </p>
              <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
                Ho svolto ricerca sul campo in India, riguardo i diritti delle persone queer ed
                LGBTQ, per avere una lente sulle dinamiche mondiali di élite, dominanza e body
                politics come politiche di discriminazione.
              </p>
              <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
                Ho conseguito poi lo scorso anno un master in infermieristica di famiglia e comunità,
                con la speranza e la visione di una sanità capillarizzata e orientata alla
                prevenzione e promozione della salute, anche attraverso lo yoga.
              </p>
              <p className="text-body-lg" style={{ color: "var(--text-primary)", margin: 0 }}>
                Sono studentessa di Camilla Chiannella e Susanna Finocchi e Studio Ashtanga yoga
                presso l&apos;SYC di Mysore.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote
              style={{
                borderLeft: "2px solid var(--color-accent)",
                paddingLeft: 32,
                marginBlock: 64,
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
                &ldquo;Practice, and all is coming.&rdquo;
              </p>
            </blockquote>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
