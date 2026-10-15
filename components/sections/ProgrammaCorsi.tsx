"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { CORSI } from "@/lib/programma";

const CAL_CONFIG = JSON.stringify({ layout: "month_view", theme: "light" });

export function ProgrammaCorsi() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({});
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        cssVarsPerTheme: {
          light: { "cal-brand": "#003631" },
          dark: { "cal-brand": "#003631" },
        },
      });
    })();
  }, []);

  return (
    <div className="grid-3col">
      {CORSI.map((corso) => (
        <article key={corso.id} className="corso-card">
          <h2
            className="text-h3"
            style={{ margin: 0, color: "var(--text-primary)", fontStyle: "italic", fontWeight: 400 }}
          >
            {corso.titolo}
          </h2>
          <p className="text-body" style={{ margin: 0, color: "var(--text-secondary)" }}>
            {corso.giorni}
          </p>
          <p className="text-label" style={{ margin: 0, color: "var(--text-primary)" }}>
            {corso.orario}
          </p>
          <button
            type="button"
            className="btn-cta"
            style={{
              marginTop: "auto",
              alignSelf: "flex-start",
              opacity: corso.calLink ? 1 : 0.5,
              cursor: corso.calLink ? "pointer" : "not-allowed",
            }}
            disabled={!corso.calLink}
            data-cal-link={corso.calLink || undefined}
            data-cal-config={CAL_CONFIG}
          >
            Iscriviti
          </button>
        </article>
      ))}
    </div>
  );
}
