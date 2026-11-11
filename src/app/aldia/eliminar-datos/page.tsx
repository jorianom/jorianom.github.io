import type { Metadata } from "next";
import { COLORS, BACKGROUND_GRADIENT, CONTACT_EMAIL } from "../theme";

const DELETE_SUBJECT = "Eliminación de datos — AlDía";
const DELETE_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  DELETE_SUBJECT
)}`;

export const metadata: Metadata = {
  title: "Eliminación de datos — AlDía",
  description:
    "Cómo eliminar tus datos en AlDía: borra registros dentro de la app, desinstala o solicita la eliminación por correo al desarrollador John Jairo Riaño Martinez.",
  alternates: {
    canonical: "https://jorianom.me/aldia/eliminar-datos",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        padding: "32px 0",
        borderTop: `1px solid ${COLORS.surfaceDark}`,
      }}
    >
      <h2
        style={{
          fontSize: "1.4rem",
          fontWeight: 800,
          margin: "0 0 16px",
          color: COLORS.text,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          fontSize: "0.98rem",
          lineHeight: 1.75,
          color: COLORS.textMuted,
        }}
      >
        {children}
      </div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ margin: "0 0 14px" }}>{children}</p>;
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: "0 0 14px", paddingLeft: "22px" }}>
      {items.map((item) => (
        <li key={item} style={{ marginBottom: "8px" }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: COLORS.primaryDark, textDecoration: "underline" }}
    >
      {children}
    </a>
  );
}

function Info({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p
        style={{
          margin: "0 0 4px",
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: COLORS.textMuted,
        }}
      >
        {label}
      </p>
      <p style={{ margin: 0, fontSize: "0.98rem", fontWeight: 600, lineHeight: 1.5 }}>
        {children}
      </p>
    </div>
  );
}

function StepCard({
  number,
  title,
  path,
  note,
}: {
  number: number;
  title: string;
  path: string;
  note?: string;
}) {
  return (
    <li
      style={{
        listStyle: "none",
        background: "#fff",
        border: `1px solid ${COLORS.surfaceDark}`,
        borderRadius: "14px",
        padding: "18px 20px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <span
          style={{
            width: "26px",
            height: "26px",
            flexShrink: 0,
            borderRadius: "50%",
            background: COLORS.tintPrimary,
            color: COLORS.primaryDark,
            fontSize: "0.8rem",
            fontWeight: 800,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {number}
        </span>
        <h3 style={{ margin: 0, fontSize: "1rem", fontWeight: 700, color: COLORS.text }}>
          {title}
        </h3>
      </div>
      <code
        style={{
          display: "block",
          padding: "8px 10px",
          borderRadius: "8px",
          background: COLORS.surface,
          color: COLORS.text,
          fontFamily: "var(--font-geist-mono), monospace",
          fontSize: "0.82rem",
          lineHeight: 1.6,
          overflowWrap: "anywhere",
        }}
      >
        {path}
      </code>
      {note ? (
        <p
          style={{
            margin: "8px 0 0",
            fontSize: "0.85rem",
            lineHeight: 1.6,
            color: COLORS.textMuted,
          }}
        >
          {note}
        </p>
      ) : null}
    </li>
  );
}

function MailButton() {
  return (
    <a
      className="delete-cta"
      href={DELETE_MAILTO}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "13px 26px",
        borderRadius: "999px",
        background: COLORS.primary,
        color: "#fff",
        fontWeight: 700,
        fontSize: "0.98rem",
        textDecoration: "none",
        boxShadow: "0 6px 20px rgba(53, 37, 205, 0.24)",
      }}
    >
      Solicitar eliminación por correo
    </a>
  );
}

export default function AldiaEliminarDatos() {
  return (
    <>
      <style>{`
        .delete-cta { transition: background 0.2s, transform 0.15s, box-shadow 0.2s; }
        .delete-cta:hover { background: ${COLORS.primaryDark}; box-shadow: 0 8px 24px rgba(53, 37, 205, 0.32); }
        .delete-cta:active { transform: scale(0.98); }
        .delete-cta:focus-visible { outline: 3px solid rgba(53, 37, 205, 0.35); outline-offset: 3px; }
        @media (max-width: 480px) {
          .delete-cta { width: 100%; }
        }
      `}</style>

      <main
        style={{
          minHeight: "100vh",
          background: BACKGROUND_GRADIENT,
          fontFamily: "var(--font-geist-sans), sans-serif",
          color: COLORS.text,
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "56px 24px 80px" }}>
          {/* Header */}
          <header style={{ padding: "16px 0 28px", textAlign: "center" }}>
            <span
              style={{
                background: COLORS.tintPrimary,
                border: `1.5px solid ${COLORS.primary}`,
                color: COLORS.primaryDark,
                borderRadius: "999px",
                padding: "4px 16px",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              Al
              <span style={{ fontWeight: 800 }}>Día</span> · Eliminación de datos
            </span>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 2.8rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                margin: "20px 0 8px",
              }}
            >
              Eliminación de datos
            </h1>
            <p style={{ margin: "0 0 6px", color: COLORS.textMuted, fontSize: "0.98rem" }}>
              App AlDía · Desarrollador: John Jairo Riaño Martinez
            </p>
            <p style={{ margin: 0, color: COLORS.textMuted, fontSize: "0.9rem" }}>
              Última actualización: 11/11/2026 · Página pública, sin inicio de sesión
            </p>
          </header>

          {/* Identidad */}
          <div
            style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "22px 24px",
              boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: "18px",
              marginBottom: "16px",
            }}
          >
            <Info label="App">AlDía</Info>
            <Info label="Desarrollador">John Jairo Riaño Martinez</Info>
            <Info label="Contacto">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{ color: COLORS.primaryDark, textDecoration: "underline" }}
              >
                {CONTACT_EMAIL}
              </a>
            </Info>
          </div>

          {/* Aviso principal */}
          <div
            style={{
              background: COLORS.tintPrimary,
              borderLeft: `4px solid ${COLORS.primary}`,
              borderRadius: "0 12px 12px 0",
              padding: "18px 20px",
              marginBottom: "8px",
            }}
          >
            <p style={{ margin: 0, fontSize: "0.98rem", lineHeight: 1.7, color: COLORS.text }}>
              <strong>AlDía no tiene cuentas ni servidores propios:</strong> toda la
              información se guarda en tu dispositivo.
            </p>
          </div>

          <Section title="1. Borrar registros dentro de la app">
            <P>
              Podés eliminar los datos directamente desde AlDía, sin solicitar nada
              al desarrollador.
            </P>
            <ol
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 4px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "14px",
              }}
            >
              <StepCard
                number={1}
                title="Deudas"
                path="Gestión → Yo debo → elegí la deuda → Eliminar"
                note="La deuda se borra del dispositivo."
              />
              <StepCard
                number={2}
                title="Fiados / saldos por cobrar"
                path="Gestión → Me deben → abrí el cliente → eliminá movimientos o el cliente"
                note="Algunos registros se archivan."
              />
              <StepCard
                number={3}
                title="Servicios propios"
                path="Servicios → abrí el servicio → Eliminar"
                note="Se elimina el servicio propio que hayas creado."
              />
              <StepCard
                number={4}
                title="Notificaciones"
                path="Ajustes → desactivá los recordatorios"
                note="Se cancelan las notificaciones programadas."
              />
            </ol>
          </Section>

          <Section title="2. Desinstalar la app">
            <P>
              Al desinstalar AlDía se eliminan todos los datos locales del
              dispositivo:
            </P>
            <Ul
              items={[
                "Deudas, fiados, clientes y movimientos.",
                "Preferencias (ciudad, recordatorios, tema, onboarding/tutorial).",
                "Servicios propios.",
                "Datos del widget y notificaciones programadas.",
              ]}
            />
            <P>
              <strong>No hay copia en la nube ni backup.</strong> Una vez
              desinstalada la app, esa información no se puede recuperar.
            </P>
          </Section>

          <Section title="3. Solicitar la eliminación por correo">
            <P>
              Si querés que el desarrollador elimine datos que haya recibido (por
              ejemplo, un reporte de error que enviaste por correo), escribí a{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{ color: COLORS.primaryDark, textDecoration: "underline" }}
              >
                {CONTACT_EMAIL}
              </a>{" "}
              con el asunto <strong>&quot;{DELETE_SUBJECT}&quot;</strong>.
            </P>
            <div style={{ margin: "20px 0 14px" }}>
              <MailButton />
            </div>
            <P>
              Responderemos y eliminaremos esos datos en un plazo máximo de{" "}
              <strong>30 días</strong>.
            </P>
          </Section>

          <Section title="4. Qué datos se eliminan y cuáles se conservan">
            <P>
              AlDía guarda todo en tu dispositivo. El desarrollador no tiene acceso
              a esos datos.
            </P>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
                margin: "8px 0 24px",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  border: `1px solid ${COLORS.surfaceDark}`,
                  borderRadius: "14px",
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 12px",
                    fontSize: "1.02rem",
                    fontWeight: 800,
                    color: COLORS.primaryDark,
                  }}
                >
                  Se eliminan
                </h3>
                <ul style={{ margin: 0, paddingLeft: "20px" }}>
                  {[
                    "Deudas.",
                    "Fiados y saldos por cobrar.",
                    "Clientes y movimientos.",
                    "Preferencias (ciudad, recordatorios, tema, onboarding/tutorial).",
                    "Servicios propios.",
                    "Datos del widget.",
                    "Notificaciones programadas.",
                  ].map((item) => (
                    <li key={item} style={{ marginBottom: "8px" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  background: COLORS.tintTertiary,
                  border: `1px solid ${COLORS.surfaceDark}`,
                  borderRadius: "14px",
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 12px",
                    fontSize: "1.02rem",
                    fontWeight: 800,
                    color: COLORS.primaryDark,
                  }}
                >
                  No los conserva el desarrollador
                </h3>
                <p style={{ margin: "0 0 10px" }}>
                  La app no tiene backend, cuentas ni backups. No hay datos en
                  servidores propios.
                </p>
                <p style={{ margin: 0 }}>
                  Al borrar registros o desinstalar la app, no queda copia en la
                  nube.
                </p>
              </div>
            </div>

            <h3 style={{ margin: "0 0 8px", fontSize: "1.05rem", fontWeight: 800, color: COLORS.text }}>
              Reportes de error
            </h3>
            <P>
              Si enviaste un reporte de error por correo, el mensaje puede
              permanecer en el buzón del desarrollador hasta que solicites su
              eliminación. Se elimina en un plazo máximo de 30 días.
            </P>

            <h3 style={{ margin: "24px 0 8px", fontSize: "1.05rem", fontWeight: 800, color: COLORS.text }}>
              Entrada rápida con Gemini
            </h3>
            <P>
              Cuando las reglas locales fallan, el texto se envía a la API de
              Gemini (Google). El desarrollador no lo almacena; Google lo procesa
              según su política de privacidad (
              <Link href="https://policies.google.com/privacy">
                https://policies.google.com/privacy
              </Link>
              ). Para solicitar la eliminación de esos datos, contactá a Google.
            </P>

            <h3 style={{ margin: "24px 0 8px", fontSize: "1.05rem", fontWeight: 800, color: COLORS.text }}>
              Portales de pago
            </h3>
            <P>
              Se abren en el navegador y son sitios de terceros; AlDía no recibe ni
              almacena datos de pago.
            </P>
          </Section>

          <Section title="5. Contacto">
            <P>
              Para consultas sobre la eliminación de datos o sobre el manejo de tu
              información, escribí a:
            </P>
            <div
              style={{
                background: "#fff",
                border: `1px solid ${COLORS.surfaceDark}`,
                borderRadius: "14px",
                padding: "20px",
                margin: "4px 0 16px",
              }}
            >
              <p style={{ margin: "0 0 6px", fontWeight: 700, color: COLORS.text }}>
                John Jairo Riaño Martinez
              </p>
              <p style={{ margin: "0 0 4px" }}>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  style={{ color: COLORS.primaryDark, textDecoration: "underline" }}
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p style={{ margin: 0, fontSize: "0.88rem" }}>
                Asunto sugerido: &quot;{DELETE_SUBJECT}&quot;
              </p>
            </div>
            <MailButton />
          </Section>

          {/* Footer */}
          <footer style={{ paddingTop: "32px", textAlign: "center" }}>
            <p style={{ margin: 0, fontSize: "13px", color: COLORS.textMuted }}>
              AlDía ·{" "}
              <a
                href="/aldia"
                style={{ color: COLORS.primaryDark, textDecoration: "none" }}
              >
                Volver a AlDía
              </a>{" "}
              ·{" "}
              <a
                href="/aldia/privacidad"
                style={{ color: COLORS.primaryDark, textDecoration: "none" }}
              >
                Política de privacidad
              </a>{" "}
              ·{" "}
              <a
                href="/"
                style={{ color: COLORS.primaryDark, textDecoration: "none" }}
              >
                jorianom.me
              </a>
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
