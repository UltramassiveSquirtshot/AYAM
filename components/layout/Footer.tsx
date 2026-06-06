import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Progetto: [
    { href: "/inizia-da-qui", label: "Inizia da qui" },
    { href: "/articoli", label: "Articoli" },
    { href: "/membership", label: "Membership" },
    { href: "/about", label: "Chi sono" },
  ],
  Pratica: [
    { href: "/articoli?cat=metodo", label: "Il metodo" },
    { href: "/articoli?cat=pratica", label: "Pratica quotidiana" },
    { href: "/articoli?cat=tecniche", label: "Tecniche" },
    { href: "/articoli?cat=filosofia", label: "Filosofia" },
  ],
};

export function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        background: "var(--color-hero-2)",
        paddingBlock: "80px 48px",
        paddingInline: 60,
        borderTop: "1px solid var(--border-on-dark)",
      }}
    >
      <div style={{ maxWidth: 1200, marginInline: "auto" }}>
        {/* Top grid — 3 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
            gap: 60,
            marginBottom: 80,
          }}
        >
          {/* Col 1 — Logo + tagline + social */}
          <div>
            <Link
              href="/"
              aria-label="Ashtanga Yoga Alessandra Monticelli — homepage"
              style={{ display: "inline-block", lineHeight: 0, marginBottom: 24 }}
            >
              <Image
                src="/logo.png"
                alt="AYAM — Ashtanga Yoga Alessandra Monticelli"
                width={80}
                height={80}
                style={{
                  width: 80,
                  height: 80,
                  objectFit: "contain",
                  borderRadius: "50%",
                  opacity: 0.92,
                }}
              />
            </Link>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 300,
                lineHeight: 1.7,
                color: "rgba(237, 227, 200, 0.5)",
                maxWidth: 280,
                marginBottom: 32,
              }}
            >
              Progetto editoriale e comunità dedicata all&apos;Ashtanga Vinyasa Yoga. Non una tendenza del benessere — un metodo.
            </p>

            {/* Social links */}
            <div style={{ display: "flex", gap: 20 }}>
              {[
                { href: "https://youtube.com", label: "YouTube" },
                { href: "https://instagram.com", label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-label-sm footer-social"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 & 3 — Nav links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p
                className="text-label"
                style={{ color: "var(--text-accent)", marginBottom: 20 }}
              >
                {group}
              </p>
              <nav aria-label={`Link ${group}`}>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="footer-link"
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 14,
                          fontWeight: 400,
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "var(--border-on-dark)",
            marginBottom: 32,
          }}
          aria-hidden="true"
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 15,
              fontStyle: "italic",
              fontWeight: 300,
              color: "rgba(237,227,200,0.25)",
              margin: 0,
            }}
          >
            &ldquo;Practice, and all is coming.&rdquo;
          </p>

          <p
            className="text-label-sm"
            style={{ color: "rgba(237,227,200,0.25)", margin: 0 }}
          >
            © {new Date().getFullYear()} Ashtanga — Senza Compromessi
          </p>
        </div>
      </div>
    </footer>
  );
}
