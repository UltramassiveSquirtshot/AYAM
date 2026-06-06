"use client";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link"
      onFocus={(e) => ((e.currentTarget as HTMLElement).style.left = "0")}
      onBlur={(e) => ((e.currentTarget as HTMLElement).style.left = "-9999px")}
      style={{
        position: "absolute",
        left: -9999,
        top: 0,
        zIndex: 999,
        background: "var(--color-hero-2)",
        color: "var(--text-on-dark)",
        padding: "8px 16px",
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: "0.16em",
        textDecoration: "none",
      }}
    >
      Salta al contenuto principale
    </a>
  );
}
