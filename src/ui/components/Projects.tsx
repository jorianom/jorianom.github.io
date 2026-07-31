import Image from "next/image"

type Project = {
    title: string
    description: string
    stack: string[]
    image: string
    url: string
}

const projects: Project[] = [
    {
        title: "GestoriX",
        description: "Plataforma sencilla para gestionar reservas de citas con tus clientes. Administra horarios, clientes y servicios de forma intuitiva y optimiza la experiencia de agendamiento.",
        stack: ["Next.js", "Node.js", "PostgreSQL", "Vercel"],
        image: "/project_4.webp",
        url: "https://gestorix.app/",
    },
    {
        title: "AlDía",
        description: "Aplicación móvil que te facilita mantenerte al día con tus deudas y tus deudores. Con una interfaz amigable, te ayuda a organizar tus finanzas personales de manera eficiente.",
        stack: ["Flutter", "Dart"],
        image: "/project_5.webp",
        url: "https://jorianom.me/aldia",
    },
    {
        title: "Pódium Académico",
        description: "Plataforma de gestión académica para instituciones educativas. Permite administrar cursos, estudiantes y profesores con una interfaz intuitiva y funcionalidades robustas.",
        stack: ["Next.js", "Node.js", "PostgreSQL"],
        image: "/project_1.webp",
        url: "https://podium-academico.vercel.app/",
    },
    {
        title: "Uploader NetSuite",
        description: "Extensión para Visual Studio Code diseñada para facilitar la carga y sincronización de scripts en NetSuite directamente desde el editor.",
        stack: ["TypeScript", "VS Code API", "NetSuite"],
        image: "/project_2.webp",
        url: "https://marketplace.visualstudio.com/items?itemName=jorianom.uploader-netsuite",
    },
    {
        title: "Ecommerce Seed House",
        description: "Tienda virtual minimalista para productos agrícolas. Optimizada para rendimiento, responsiva y fácil de escalar.",
        stack: ["Next.js", "Tailwind CSS"],
        image: "/project_3.webp",
        url: "https://ecommerce-seed-house.vercel.app/",
    },
]

export const Projects = () => {
    return (
        <section id="projects" className="py-20 text-white">
            <div className="flex flex-col gap-10">
                <h2 className="text-3xl font-black text-white">
                    Mis Proyectos
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((project) => (
                        <a
                            key={project.title}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative overflow-hidden rounded-xl border border-white/10 bg-surface transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
                        >
                            <div className="relative overflow-hidden aspect-[16/10]">
                                <Image
                                    src={project.image}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    alt={project.title}
                                    className="object-cover sm:grayscale sm:opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                            </div>

                            <div className="p-5 flex flex-col gap-3">
                                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-slate-400"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-white transition-colors">
                                    Ver proyecto
                                    <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}