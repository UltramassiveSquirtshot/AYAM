export type Corso = {
  id: string;
  titolo: string;
  giorni: string;
  orario: string;
  /**
   * Evento Cal.com da aprire, nel formato "username/slug-evento"
   * (es. "alessandra-monticelli/mysore"). Se vuoto il pulsante resta disattivato.
   */
  calLink: string;
};

export const PROGRAMMA = {
  titolo: "Ashtanga Yoga",
  sottotitolo: "Programma Online",
  periodo: "Novembre 2026 – Febbraio 2027",
};

export const CORSI: Corso[] = [
  {
    id: "mysore",
    titolo: "Traditional Mysore Style",
    giorni: "il martedì e il giovedì",
    orario: "6:30 – 8:30",
    calLink: "",
  },
  {
    id: "led-class",
    titolo: "Led Class",
    giorni: "il sabato",
    orario: "6:30 – 8:30",
    calLink: "",
  },
  {
    id: "yoga-salute",
    titolo: "Yoga: strumento di salute, filosofia, scienza e fede",
    giorni: "il martedì e il giovedì",
    orario: "9:00 – 10:30",
    calLink: "",
  },
];
