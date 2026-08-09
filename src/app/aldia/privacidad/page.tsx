import type { Metadata } from "next";
import { COLORS, BACKGROUND_GRADIENT, CONTACT_EMAIL } from "../theme";

export const metadata: Metadata = {
  title: "Política de Privacidad — AlDía",
  description:
    "Política de privacidad de AlDía: tus datos se guardan solo en tu dispositivo y no se comparten con terceros, salvo el uso voluntario de Gemini en la entrada rápida.",
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

export default function AldiaPrivacidad() {
  return (
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
        <header style={{ padding: "16px 0 32px", textAlign: "center" }}>
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
            <span style={{ fontWeight: 800 }}>Día</span> · Política de privacidad
          </span>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              margin: "20px 0 8px",
            }}
          >
            Política de Privacidad
          </h1>
          <p style={{ margin: 0, color: COLORS.textMuted, fontSize: "0.95rem" }}>
            Última actualización: 09/08/2026
          </p>
        </header>

        {/* 1 */}
        <Section title="1. Responsable de la aplicación">
          <Ul
            items={[
              "Nombre de la app: AlDía",
              "Desarrollador: John Jairo Riaño Martinez",
              `Correo de contacto: ${CONTACT_EMAIL}`,
              "Disponible en: Google Play",
            ]}
          />
          <P>
            AlDía es una aplicación móvil de control personal de deudas
            (&quot;lo que debo&quot;) y fiados (&quot;lo que me deben&quot;). No
            requiere cuenta, no tiene backend y funciona 100% sin conexión a
            internet para su uso normal.
          </P>
        </Section>

        {/* 2 */}
        <Section title="2. Información que recopilamos y almacenamos">
          <P>
            AlDía <strong>no recopila ni almacena tus datos en servidores propios
            ni de terceros</strong> para su funcionamiento. Toda la información que
            creás se guarda <strong>únicamente en tu dispositivo</strong> (en la
            base de datos local del celular).
          </P>
          <P>Esta información es la que vos ingresás voluntariamente:</P>
          <Ul
            items={[
              "Deudas propias: persona o entidad a la que debés, monto, fecha de vencimiento, recurrencia y estado.",
              "Fiados / saldos por cobrar: clientes o personas que te deben, movimientos de deuda y de pago, saldo y fechas.",
              "Preferencias de la app: recordatorios (días de anticipación, hora), preferencias de notificaciones y estado del tutorial/onboarding.",
            ]}
          />
          <P>
            Datos técnicos del dispositivo (modelo, versión de Android){" "}
            <strong>no se recopilan automáticamente</strong>: solo se usan
            puntualmente cuando vos mismo generás un reporte de error (ver sección 4).
          </P>
        </Section>

        {/* 3 */}
        <Section title="3. Información que se envía a terceros (Gemini / Google AI)">
          <P>
            AlDía tiene una función de <strong>&quot;Entrada rápida&quot;</strong>{" "}
            que interpreta en español frases que describís, por ejemplo:{" "}
            <em>&quot;Le presté 50 mil a Pedro&quot;</em>. La interpretación se
            resuelve primero con reglas locales en tu dispositivo.
          </P>
          <P>
            <strong>
              Solo cuando las reglas locales no logran interpretar la frase
            </strong>
            , se envía el texto de esa frase (que puede contener nombres de
            personas, montos y fechas) a la{" "}
            <strong>API de Gemini, un servicio de Google</strong>, para
            estructurarla como deuda o fiado. Esta transmisión:
          </P>
          <Ul
            items={[
              "Ocurre únicamente en el momento en que usás la entrada rápida y las reglas locales fallan.",
              "No envía tu lista de deudas, contactos, ni ningún otro dato del dispositivo.",
              "Está sujeta a la política de privacidad de Google.",
            ]}
          />
          <P>
            <Link href="https://policies.google.com/privacy">
              https://policies.google.com/privacy
            </Link>
          </P>
          <P>
            Si no usás la entrada rápida con Gemini,{" "}
            <strong>no se envía ninguna información a Google ni a ningún otro
            servicio</strong>.
          </P>
        </Section>

        {/* 4 */}
        <Section title="4. Reporte de errores (envío manual)">
          <P>
            Si la app muestra un error, podés optar por{" "}
            <strong>enviar un reporte</strong> al desarrollador. Ese envío:
          </P>
          <Ul
            items={[
              "Es totalmente voluntario y lo iniciás vos desde el diálogo de error.",
              "Se hace con el compartir del sistema (email, WhatsApp u otra app que elijas), nunca en segundo plano.",
              "Incluye: descripción del error, datos técnicos del dispositivo (marca, modelo, versión de Android, versión de la app) y, opcionalmente, contexto del error.",
            ]}
          />
          <P>
            Al compartir un reporte, el mensaje viaja a través de la app que elijas
            (por ejemplo, tu correo) y esa app aplica sus propias condiciones.
          </P>
        </Section>

        {/* 5 */}
        <Section title="5. Cómo usamos la información">
          <Ul
            items={[
              "Deudas y fiados: se muestran en pantalla (resumen, gestión, vencimientos), se usan para programar recordatorios locales y para el widget de la pantalla de inicio de Android. Nada de esto sale del dispositivo.",
              "Notificaciones: los recordatorios se generan y muestran localmente desde el celular.",
              "Interpretación por Gemini: solo para estructurar la frase que escribís (sección 3).",
            ]}
          />
          <P>
            <strong>
              AlDía no usa los datos para:
            </strong>{" "}
            publicidad, perfiles de usuario, venta a terceros, estadísticas
            anónimas, ni análisis de comportamiento.{" "}
            <strong>No hay SDK de analytics ni de anuncios</strong> en la app.
          </P>
        </Section>

        {/* 6 */}
        <Section title="6. Almacenamiento y seguridad">
          <Ul
            items={[
              "Los datos viven en la base de datos local de tu dispositivo (Realm).",
              "No hay cuentas, ni sincronización, ni copias de seguridad en la nube.",
              "Al desinstalar la app se eliminan los datos locales del dispositivo.",
              "La app no solicita permisos innecesarios; los permisos que usa se detallan en la sección 8.",
            ]}
          />
        </Section>

        {/* 7 */}
        <Section title="7. Sus derechos (Ley 1581 de 2012, Colombia)">
          <P>
            Dado que tus datos residen en tu propio dispositivo y no en servidores,
            podés ejercer tus derechos directamente:
          </P>
          <Ul
            items={[
              "Acceso: revisá tus datos dentro de la app.",
              "Rectificación / actualización: editá cualquier deuda o fiado desde la app.",
              "Supresión: borrá registros desde la app o eliminá la aplicación por completo.",
            ]}
          />
          <P>
            Para cualquier consulta o solicitud, escribinos a{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{ color: COLORS.primaryDark, textDecoration: "underline" }}
            >
              {CONTACT_EMAIL}
            </a>{" "}
            y responderemos a la brevedad.
          </P>
        </Section>

        {/* 8 */}
        <Section title="8. Permisos que solicita la app y para qué">
          <div style={{ overflowX: "auto", marginBottom: "14px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.95rem",
                background: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <thead>
                <tr style={{ background: COLORS.tintPrimary, textAlign: "left" }}>
                  <th
                    style={{
                      padding: "12px 16px",
                      color: COLORS.primaryDark,
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Permiso
                  </th>
                  <th
                    style={{
                      padding: "12px 16px",
                      color: COLORS.primaryDark,
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Motivo
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderTop: `1px solid ${COLORS.surfaceDark}` }}>
                  <td style={{ padding: "12px 16px", fontWeight: 600 }}>
                    Notificaciones
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    Mostrar los recordatorios de vencimiento que programás vos
                  </td>
                </tr>
                <tr style={{ borderTop: `1px solid ${COLORS.surfaceDark}` }}>
                  <td style={{ padding: "12px 16px", fontWeight: 600 }}>
                    Alarmas exactas / programar alarmas
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    Que los recordatorios suenen a la hora prevista (se habilita
                    desde la configuración del teléfono)
                  </td>
                </tr>
                <tr style={{ borderTop: `1px solid ${COLORS.surfaceDark}` }}>
                  <td style={{ padding: "12px 16px", fontWeight: 600 }}>
                    Internet
                  </td>
                  <td style={{ padding: "12px 16px" }}>
                    Solo para la entrada rápida con Gemini (sección 3); el resto
                    de la app funciona sin conexión
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* 9 */}
        <Section title="9. Cambios en esta política">
          <P>
            Si la app cambia la forma en que trata la información, actualizaremos
            esta política y la fecha de &quot;Última actualización&quot; al inicio
            del documento. Los cambios no serán retroactivos.
          </P>
        </Section>

        {/* 10 */}
        <Section title="10. Contacto">
          <P>
            Si tenés preguntas sobre esta política o sobre el manejo de tu
            información:
          </P>
          <Ul
            items={[
              "Correo: " + CONTACT_EMAIL,
            ]}
          />
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
              href="/"
              style={{ color: COLORS.primaryDark, textDecoration: "none" }}
            >
              jorianom.me
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
