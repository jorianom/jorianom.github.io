import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Riaño | Portafolio",
  description:
    "Portafolio de John Jairo Riaño, estudiante de Ingeniería de Sistemas y desarrollador especializado en tecnologías como Node.js, React y MongoDB.",
  keywords: [
    "Desarrollador Web",
    "Portafolio",
    "Next.js",
    "Node.js",
    "React",
    "MongoDB",
    "PostgreSQL",
    "GitHub Actions",
    "Full Stack",
  ],
  authors: [{ name: "John Jairo Riaño" }],
  openGraph: {
    title: "John Jairo Riaño | Portafolio",
    description:
      "Descubre los proyectos desarrollados por John Jairo con tecnologías modernas como React y Next.js.",
    url: "https://jorianom.github.io",
    siteName: "Portafolio de John Jairo Riaño",
    locale: "es_CO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="motion-safe:scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
