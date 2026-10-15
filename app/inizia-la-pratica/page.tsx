import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import { ProgrammaCorsi } from "@/components/sections/ProgrammaCorsi";
import { PROGRAMMA } from "@/lib/programma";

export const metadata: Metadata = {
  title: "Inizia la pratica — AYAM",
  description: `${PROGRAMMA.titolo} — ${PROGRAMMA.sottotitolo}, ${PROGRAMMA.periodo}. Iscriviti ai corsi.`,
};

export default function IniziaLaPraticaPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section
          style={{
            background: "var(--color-hero-2)",
            paddingTop: "clamp(120px, 18vw, 160px)",
            paddingBottom: "clamp(64px, 9vw, 100px)",
            paddingInline: "clamp(24px, 5vw, 60px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <GrainOverlay />
          <div style={{ maxWidth: 1200, marginInline: "auto", position: "relative", zIndex: 1 }}>
            <p className="text-label" style={{ color: "var(--text-accent)", marginBottom: 24 }}>
              {PROGRAMMA.sottotitolo} · {PROGRAMMA.periodo}
            </p>
            <h1
              className="text-h1"
              style={{ color: "var(--text-on-dark)", fontStyle: "italic", fontWeight: 300, margin: 0 }}
            >
              {PROGRAMMA.titolo}
            </h1>
          </div>
        </section>

        <section className="section-padding" style={{ background: "var(--color-neutral-light)" }}>
          <div className="container-site" style={{ padding: 0 }}>
            <ProgrammaCorsi />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
