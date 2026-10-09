import { FaReact, FaNode, FaDatabase, FaCloud } from "react-icons/fa6";
import type { IconType } from "react-icons";

type Category = {
    title: string;
    techs: string;
    icon: IconType;
};

const categories: Category[] = [
    {
        title: "Frontend",
        techs: "HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS",
        icon: FaReact,
    },
    {
        title: "Backend & Logic",
        techs: "Node.js, Express, .NET, Go",
        icon: FaNode,
    },
    {
        title: "Data & Databases",
        techs: "PostgreSQL, MongoDB, SQL",
        icon: FaDatabase,
    },
    {
        title: "Cloud & DevOps",
        techs: "AWS, GitHub Actions, Vercel",
        icon: FaCloud,
    },
];

export const TechStack = () => {
    return (
        <section className="py-14 border-t border-white/5">
            <div className="mb-6 flex flex-col gap-2">
                <h2 className="text-3xl font-black text-white">
                    Stack técnico
                </h2>
                <p className="text-sm text-slate-400 max-w-lg">
                    Las tecnologías con las que construyo aplicaciones e integraciones, de la interfaz a la nube.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                        <div
                            key={cat.title}
                            className="group relative flex items-start gap-3 overflow-hidden rounded-lg border border-white/5 bg-surface px-4 py-3 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                        >
                            {/* Signature top bar */}
                            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/80 to-primary/10" />

                            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 opacity-60 transition-all group-hover:text-primary group-hover:opacity-100" />
                            <div className="flex flex-col gap-1">
                                <h3 className="font-mono text-[10px] uppercase tracking-widest text-slate-300 font-bold">
                                    {cat.title}
                                </h3>
                                <p className="text-slate-400 text-xs font-mono leading-relaxed">
                                    {cat.techs}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
