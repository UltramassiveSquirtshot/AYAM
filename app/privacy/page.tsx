import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

export const metadata: Metadata = {
  title: "Informativa sulla privacy — AYAM",
  description: "Come trattiamo i dati personali raccolti tramite il modulo di iscrizione.",
};

// BOZZA: da far verificare/completare dalla titolare (dati di contatto, base giuridica, conservazione).
export default function PrivacyPage() {
  const h2 = { fontStyle: "italic", fontWeight: 400, margin: "40px 0 12px" } as const;
  const p = { color: "var(--text-primary)", margin: "0 0 16px" } as const;

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section
          style={{
            background: "var(--color-hero-2)",
            paddingTop: "clamp(120px, 18vw, 160px)",
            paddingBottom: "clamp(48px, 7vw, 80px)",
            paddingInline: "clamp(24px, 5vw, 60px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <GrainOverlay />
          <div style={{ maxWidth: 720, marginInline: "auto", position: "relative", zIndex: 1 }}>
            <p className="text-label" style={{ color: "var(--text-accent)", marginBottom: 24 }}>
              Privacy
            </p>
            <h1
              className="text-h1"
              style={{ color: "var(--text-on-dark)", fontStyle: "italic", fontWeight: 300, margin: 0 }}
            >
              Informativa sulla privacy
            </h1>
          </div>
        </section>

        <section
          style={{
            background: "var(--color-neutral-light)",
            paddingBlock: "clamp(48px, 7vw, 80px)",
            paddingInline: "clamp(24px, 5vw, 60px)",
          }}
        >
          <div style={{ maxWidth: 720, marginInline: "auto" }}>
            <p className="text-body" style={p}>
              Informativa ai sensi dell&apos;art. 13 del Regolamento (UE) 2016/679 (GDPR).
            </p>

            <h2 className="text-h3" style={h2}>Titolare del trattamento</h2>
            <p className="text-body" style={p}>
              Alessandra Monticelli — Ashtanga Yoga. Per qualsiasi richiesta relativa ai tuoi dati
              puoi scrivere all&apos;indirizzo e-mail indicato nel sito.
            </p>

            <h2 className="text-h3" style={h2}>Dati raccolti e finalità</h2>
            <p className="text-body" style={p}>
              Quando ti iscrivi a un corso, tramite il calendario di prenotazione, raccogliamo nome,
              indirizzo e-mail e numero di telefono. Li usiamo esclusivamente per gestire la tua
              iscrizione e contattarti riguardo al corso scelto (orari, variazioni, comunicazioni
              organizzative).
            </p>

            <h2 className="text-h3" style={h2}>Base giuridica</h2>
            <p className="text-body" style={p}>
              Il trattamento si basa sul tuo consenso (art. 6.1.a GDPR), espresso spuntando la
              casella al momento della prenotazione, e sull&apos;esecuzione della tua richiesta di iscrizione (art.
              6.1.b).
            </p>

            <h2 className="text-h3" style={h2}>Conservazione</h2>
            <p className="text-body" style={p}>
              I dati sono conservati per la durata del programma a cui ti iscrivi e per il tempo
              strettamente necessario agli adempimenti connessi, poi cancellati.
            </p>

            <h2 className="text-h3" style={h2}>Destinatari</h2>
            <p className="text-body" style={p}>
              I dati non sono venduti né ceduti a terzi. Le prenotazioni sono gestite tramite la
              piattaforma Cal.com, che opera come responsabile del trattamento, e il sito è ospitato
              su servizi di terze parti. Cal.com tratta i dati secondo la propria informativa.
            </p>

            <h2 className="text-h3" style={h2}>I tuoi diritti</h2>
            <p className="text-body" style={p}>
              Puoi chiedere in qualsiasi momento accesso, rettifica, cancellazione, limitazione e
              portabilità dei dati, opporti al trattamento e revocare il consenso, senza effetti
              sui trattamenti già effettuati. Hai inoltre il diritto di proporre reclamo al Garante
              per la protezione dei dati personali (garanteprivacy.it).
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
