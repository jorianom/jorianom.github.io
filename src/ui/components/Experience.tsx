function renderBullet(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : part,
  );
}

const experiences = [
  {
    company: "Siigo",
    roles: [
      { title: "Desarrollador Full Stack Ssr.", period: "2025 – Presente" },
      { title: "Desarrollador Full Stack Jr.", period: "2021 – 2024" },
    ],
    achievements: [
      "Automatización de procesos sobre **Oracle NetSuite** con scripts en **JavaScript**, reduciendo carga operativa y mejorando la trazabilidad de datos.",
      "Diseño e implementación de **APIs REST** con **.NET**, **Go** y **Node.js** para integración entre sistemas de información y consolidación de datos.",
      "Administración de bases de datos **relacionales** y **no relacionales** para consulta, actualización, análisis y generación de reportes.",
      "Análisis técnico de **requerimientos** y definición de soluciones para la implementación de nuevas funcionalidades e integraciones entre sistemas.",
      "Control de versiones con **Git** y automatización de despliegues, garantizando la estabilidad y disponibilidad de los sistemas.",
    ],
  },
] as const;

export const Experience = () => {
  return (
    <section className="py-16 border-t border-white/5" id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: heading */}
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-black text-white">
            Trayectoria Profesional
          </h2>
          <p className="text-sm text-slate-400 mt-4">
            Foco en resultados técnicos y soluciones de integración empresarial.
          </p>
        </div>

        {/* Right: timeline */}
        <div className="lg:col-span-8">
          <div className="relative pl-8 border-l border-primary/30 flex flex-col gap-12">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative">
                {/* Dot */}
                <div className="absolute -left-[37px] top-0 h-4 w-4 rounded-full bg-primary ring-4 ring-primary/20" />

                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                <div className="flex flex-col mb-4">
                  <div className="flex items-start gap-2">
                    <div className="flex flex-col items-center mt-[3px]">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <div className="w-px h-4 bg-primary/30" />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase text-primary leading-tight">{exp.roles[0].title}</p>
                      <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">{exp.roles[0].period}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-px h-4 bg-primary/30 ml-[3px]" />
                    <span className="text-[10px] text-primary/50 font-mono uppercase tracking-wider">Promoción interna</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex flex-col items-center mt-[3px]">
                      <div className="h-2 w-2 rounded-full bg-white/20" />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase text-slate-400 leading-tight">{exp.roles[1].title}</p>
                      <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">{exp.roles[1].period}</p>
                    </div>
                  </div>
                </div>

                <ul className="flex flex-col gap-4 text-sm text-slate-300">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-0.5 shrink-0">▹</span>
                      <span>{renderBullet(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
