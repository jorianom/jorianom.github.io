"use client";

import { useState } from "react";

const COLORS = {
  primary: "#3FBF77",
  primaryDark: "#2ea362",
  secondary: "#F26457",
  tertiary: "#F2CA50",
  error: "#D92B4B",
  surface: "#F2F2F2",
  surfaceDark: "#E4E4E4",
  text: "#1A1A1A",
  textMuted: "#555555",
};

const features = [
  {
    icon: "👤",
    label: "Me deben",
    desc: "Siempre sabes quién te debe y cuánto.",
    color: COLORS.primary,
  },
  {
    icon: "💸",
    label: "Yo debo",
    desc: "Recuerda a quién le debes antes de que se te olvide.",
    color: COLORS.secondary,
  },
  {
    icon: "📅",
    label: "Vencimientos",
    desc: "Alertas suaves antes de que una deuda se venza.",
    color: COLORS.tertiary,
  },
];

const states = [
  { label: "Al día", color: COLORS.primary, dot: "🟢" },
  { label: "Próxima", color: COLORS.tertiary, dot: "🟡" },
  { label: "Vencida", color: COLORS.error, dot: "🔴" },
];

export default function AldiaLanding() {
  const [pressed, setPressed] = useState(false);

  return (
    <>
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .float { animation: floatY 3.6s ease-in-out infinite; }
        .fade-up-1 { animation: fadeUp 0.6s ease both; }
        .fade-up-2 { animation: fadeUp 0.6s 0.15s ease both; }
        .fade-up-3 { animation: fadeUp 0.6s 0.3s ease both; }
        .fade-up-4 { animation: fadeUp 0.6s 0.45s ease both; }
        .fade-up-5 { animation: fadeUp 0.6s 0.6s ease both; }
        .pulse-ring {
          position: absolute; inset: 0; border-radius: 999px;
          border: 2px solid #3FBF77;
          animation: pulse-ring 1.8s ease-out infinite;
        }
        .btn-shimmer {
          background: linear-gradient(
            90deg,
            #3FBF77 0%, #5edd96 40%, #3FBF77 60%, #2ea362 100%
          );
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        .btn-shimmer:hover { filter: brightness(1.08); }
      `}</style>

      <main
        style={{
          minHeight: "100vh",
          background: `linear-gradient(160deg, ${COLORS.surface} 0%, #e8f9ef 60%, #fdf3e3 100%)`,
          fontFamily: "var(--font-geist-sans), sans-serif",
          color: COLORS.text,
          overflowX: "hidden",
        }}
      >
        {/* ───── HERO ───── */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "72px 24px 48px",
            gap: "16px",
          }}
        >
          {/* Pill badge */}
          <span
            className="fade-up-1"
            style={{
              background: "#e8f9ef",
              border: `1.5px solid ${COLORS.primary}`,
              color: COLORS.primaryDark,
              borderRadius: "999px",
              padding: "4px 16px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            Disponible ahora · Android APK
          </span>

          {/* Title */}
          <h1
            className="fade-up-2"
            style={{
              fontSize: "clamp(2.4rem, 7vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Al
            <span style={{ color: COLORS.primary }}>Día</span>
          </h1>

          <p
            className="fade-up-3"
            style={{
              fontSize: "clamp(1rem, 3vw, 1.25rem)",
              color: COLORS.textMuted,
              maxWidth: 440,
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Tus deudas claras, sin enredos.
            <br />
            Sabe en segundos a quién le debes y quién te debe.
          </p>

          {/* CTA */}
          <div
            className="fade-up-4"
            style={{ position: "relative", marginTop: "8px" }}
          >
            <span className="pulse-ring" />
            <a
              href="/aldia.apk"
              download
              className="btn-shimmer"
              onMouseDown={() => setPressed(true)}
              onMouseUp={() => setPressed(false)}
              onMouseLeave={() => setPressed(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 32px",
                borderRadius: "999px",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                boxShadow: pressed
                  ? "0 2px 8px rgba(63,191,119,0.3)"
                  : "0 6px 24px rgba(63,191,119,0.4)",
                transform: pressed ? "scale(0.97)" : "scale(1)",
                transition: "box-shadow 0.2s, transform 0.15s",
                position: "relative",
                zIndex: 1,
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 15V3M12 15l-4-4M12 15l4-4" />
                <path d="M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
              </svg>
              Descargar APK
            </a>
          </div>

          <p
            className="fade-up-5"
            style={{ fontSize: "12px", color: "#999", marginTop: "4px" }}
          >
            Android · Gratis · Sin registro
          </p>
        </section>

        {/* ───── PHONE MOCKUP ───── */}
        <section
          style={{ display: "flex", justifyContent: "center", padding: "0 24px 64px" }}
        >
          <div
            className="float"
            style={{
              background: "#fff",
              borderRadius: "28px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
              width: "min(300px, 82vw)",
              padding: "24px 20px",
              border: `1.5px solid ${COLORS.surfaceDark}`,
            }}
          >
            {/* Mock status bar */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "11px",
                color: "#aaa",
                marginBottom: "18px",
              }}
            >
              <span>9:41</span>
              <span>● ● ●</span>
            </div>

            {/* App header */}
            <div style={{ marginBottom: "20px" }}>
              <p style={{ fontSize: "13px", color: COLORS.textMuted, margin: 0 }}>
                Buenos días 👋
              </p>
              <h2 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "2px 0 0" }}>
                ¿Cómo vas hoy?
              </h2>
            </div>

            {/* Balance cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <MockCard
                label="Me deben"
                amount="$350.000"
                bg="#e8f9ef"
                color={COLORS.primaryDark}
              />
              <MockCard
                label="Yo debo"
                amount="$120.000"
                bg="#ffeeed"
                color={COLORS.secondary}
              />
              <div
                style={{
                  background: "#fff7e0",
                  borderRadius: "12px",
                  padding: "10px 14px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: `1px solid ${COLORS.tertiary}44`,
                }}
              >
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#b58a00" }}>
                  Balance neto
                </span>
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#b58a00" }}>
                  +$230.000
                </span>
              </div>
            </div>

            {/* Alert */}
            <div
              style={{
                marginTop: "14px",
                background: "#fff3f3",
                border: `1px solid ${COLORS.error}33`,
                borderRadius: "10px",
                padding: "9px 12px",
                fontSize: "12px",
                color: COLORS.error,
                display: "flex",
                gap: "6px",
                alignItems: "center",
              }}
            >
              🔴 Deuda con Ana vence mañana
            </div>

            {/* CTA mock */}
            <div
              style={{
                marginTop: "16px",
                background: COLORS.primary,
                borderRadius: "12px",
                padding: "11px",
                textAlign: "center",
                fontSize: "14px",
                fontWeight: 700,
                color: "#fff",
              }}
            >
              + Registrar deuda
            </div>
          </div>
        </section>

        {/* ───── FEATURES ───── */}
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
              gap: "16px",
            }}
          >
            {features.map((f) => (
              <div
                key={f.label}
                style={{
                  background: "#fff",
                  borderRadius: "18px",
                  padding: "24px 20px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  borderTop: `3px solid ${f.color}`,
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{f.icon}</div>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    margin: "0 0 6px",
                    color: f.color,
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

        {/* ───── ESTADOS ───── */}
        <section
          style={{
            background: "#fff",
            padding: "48px 24px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
              fontWeight: 700,
              marginBottom: "28px",
            }}
          >
            Siempre sabes en qué estado está cada deuda
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            {states.map((s) => (
              <div
                key={s.label}
                style={{
                  background: COLORS.surface,
                  borderRadius: "999px",
                  padding: "10px 22px",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: s.color,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                {s.dot} {s.label}
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
            href="/aldia.apk"
            download
            className="btn-shimmer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 36px",
              borderRadius: "999px",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.05rem",
              textDecoration: "none",
              boxShadow: "0 8px 28px rgba(63,191,119,0.4)",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 15V3M12 15l-4-4M12 15l4-4" />
              <path d="M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" />
            </svg>
            Descargar APK gratis
          </a>
          <p style={{ marginTop: "32px", fontSize: "12px", color: "#bbb" }}>
            © {new Date().getFullYear()} AlDía ·{" "}
            <a
              href="/"
              style={{ color: COLORS.primary, textDecoration: "none" }}
            >
              jorianom.me
            </a>
          </p>
        </section>
      </main>
    </>
  );
}

function MockCard({
  label,
  amount,
  bg,
  color,
}: {
  label: string;
  amount: string;
  bg: string;
  color: string;
}) {
  return (
    <div
      style={{
        background: bg,
        borderRadius: "12px",
        padding: "10px 14px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: "13px", fontWeight: 600, color }}>{label}</span>
      <span style={{ fontSize: "15px", fontWeight: 700, color }}>{amount}</span>
    </div>
  );
}
