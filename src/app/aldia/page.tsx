import {
  FaGooglePlay,
  FaHandHoldingHeart,
  FaMoneyBillWave,
  FaBell,
} from "react-icons/fa6";
import { COLORS, PLAY_STORE_URL } from "./theme";

const features = [
  {
    icon: FaHandHoldingHeart,
    label: "Me deben",
    desc: "Siempre sabes quién te debe y cuánto.",
    color: COLORS.primary,
    tint: COLORS.tintPrimary,
  },
  {
    icon: FaMoneyBillWave,
    label: "Yo debo",
    desc: "Recuerda a quién le debes antes de que se te olvide.",
    color: COLORS.secondary,
    tint: COLORS.tintSecondary,
  },
  {
    icon: FaBell,
    label: "Vencimientos",
    desc: "Alertas suaves antes de que una deuda se venza.",
    color: COLORS.tertiary,
    tint: COLORS.tintTertiary,
  },
];

export default function AldiaLanding() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up-1 { animation: fadeUp 0.6s ease both; }
        .fade-up-2 { animation: fadeUp 0.6s 0.15s ease both; }
        .fade-up-3 { animation: fadeUp 0.6s 0.3s ease both; }
        .fade-up-4 { animation: fadeUp 0.6s 0.45s ease both; }
        .btn-download {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          border-radius: 999px;
          background: ${COLORS.primary};
          color: #fff;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          box-shadow: 0 6px 24px rgba(53, 37, 205, 0.28);
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
        }
        .btn-download:hover {
          background: ${COLORS.primaryDark};
          box-shadow: 0 8px 28px rgba(53, 37, 205, 0.36);
        }
        .btn-download:active { transform: scale(0.97); }
        .hero-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center; }
        .hero-copy { display: flex; flex-direction: column; align-items: flex-start; }
        @media (max-width: 840px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; text-align: center; }
          .hero-copy { align-items: center; }
        }
      `}</style>

      <main
        style={{
          minHeight: "100vh",
          background: "#F7F8FC",
          fontFamily: "var(--font-geist-sans), sans-serif",
          color: COLORS.text,
        }}
      >
        {/* ───── HERO: botón + captura ───── */}
        <section
          className="hero-grid"
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "72px 24px 72px",
          }}
        >
          <div className="hero-copy">
            <span
              className="fade-up-1"
              style={{
                background: COLORS.tintPrimary,
                border: `1.5px solid ${COLORS.primary}`,
                color: COLORS.primaryDark,
                borderRadius: "999px",
                padding: "4px 14px",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              Disponible en Google Play
            </span>

            <h1
              className="fade-up-2"
              style={{
                fontSize: "clamp(2.6rem, 7vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                margin: "20px 0 0",
              }}
            >
              Tus deudas claras,
              <br />
              <span style={{ color: COLORS.primary }}>sin enredos.</span>
            </h1>

            <p
              className="fade-up-3"
              style={{
                fontSize: "clamp(1rem, 3vw, 1.2rem)",
                color: COLORS.textMuted,
                maxWidth: 420,
                margin: "16px 0 28px",
                lineHeight: 1.6,
              }}
            >
              AlDía te dice en segundos a quién le debes y quién te debe.
            </p>

            <a
              className="fade-up-4 btn-download"
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGooglePlay size={20} />
              Descargar en Google Play
            </a>

            <a
              className="fade-up-5"
              href="/aldia.apk"
              download
              style={{
                fontSize: "12px",
                color: COLORS.primaryDark,
                textDecoration: "underline",
                marginTop: "12px",
              }}
            >
              O descarga el APK directamente
            </a>
          </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "min(300px, 74vw)",
                  aspectRatio: "9 / 20",
                  borderRadius: "36px",
                  background: "#fff",
                  border: `1px solid ${COLORS.surfaceDark}`,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                  transform: "translateZ(0)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/aldia.png"
                  alt="Captura de la app AlDía"
                  width={1080}
                  height={2400}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
        </section>

        {/* ───── FUNCIONALIDADES ───── */}
        <section
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 24px 72px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.4rem, 4vw, 1.9rem)",
              fontWeight: 700,
              marginBottom: "36px",
            }}
          >
            Todo lo que necesitas, nada más.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
            }}
          >
            {features.map((f) => (
              <div
                key={f.label}
                style={{
                  background: "#fff",
                  borderRadius: "18px",
                  padding: "28px 22px",
                  boxShadow: "0 4px 18px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: f.tint,
                    color: f.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <f.icon size={22} />
                </div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    margin: "0 0 6px",
                    color: COLORS.text,
                  }}
                >
                  {f.label}
                </p>
                <p style={{ fontSize: "14px", color: COLORS.textMuted, margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ───── FOOTER CTA ───── */}
        <section
          style={{
            textAlign: "center",
            padding: "64px 24px 80px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.4rem, 4vw, 2rem)",
              fontWeight: 800,
              marginBottom: "12px",
            }}
          >
            Empieza hoy. Es gratis.
          </h2>
          <p
            style={{
              color: COLORS.textMuted,
              fontSize: "1rem",
              marginBottom: "28px",
            }}
          >
            Registra tu primera deuda en menos de 30 segundos.
          </p>
          <a
            className="btn-download"
            style={{ padding: "14px 36px", fontSize: "1.05rem" }}
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGooglePlay size={22} />
            Descargar en Google Play
          </a>
          <p style={{ marginTop: "32px", fontSize: "12px", color: "#bbb" }}>
            © {new Date().getFullYear()} AlDía ·{" "}
            <a
              href="/"
              style={{ color: COLORS.primary, textDecoration: "none" }}
            >
              jorianom.me
            </a>{" "}
            ·{" "}
            <a
              href="/aldia/privacidad"
              style={{ color: COLORS.primary, textDecoration: "none" }}
            >
              Política de privacidad
            </a>
          </p>
        </section>
      </main>
    </>
  );
}
