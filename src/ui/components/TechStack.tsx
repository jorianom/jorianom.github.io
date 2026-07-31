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
        <section className="py-20 border-t border-white/5">
            <h2 className="mb-8 text-3xl font-black text-white">
                Tecnologías
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                        <div
                            key={cat.title}
                            className="group relative overflow-hidden rounded-xl border border-white/10 bg-surface p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                        >
                            {/* Signature top bar */}
                            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/80 to-primary/10" />

                            <div className="flex items-start justify-between gap-4">
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-xs uppercase tracking-widest text-slate-300 font-bold">
                                        {cat.title}
                                    </h3>
                                    <p className="text-slate-300 text-sm font-mono leading-relaxed">
                                        {cat.techs}
                                    </p>
                                </div>
                                <Icon className="h-8 w-8 shrink-0 text-slate-400 opacity-60 transition-all group-hover:text-primary group-hover:opacity-100" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
