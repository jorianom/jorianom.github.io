import { IoChatbubblesOutline, IoBulbOutline, IoConstructOutline } from "react-icons/io5";
import type { IconType } from "react-icons";

type Step = {
    number: string;
    title: string;
    description: string;
    icon: IconType;
};

const steps: Step[] = [
    {
        number: "01",
        title: "Entiendo el problema",
        description: "Me cuentas qué quieres resolver, sin términos técnicos.",
        icon: IoChatbubblesOutline,
    },
    {
        number: "02",
        title: "Propongo la solución",
        description: "Te digo qué es posible, cómo lo haría y cuánto tomaría.",
        icon: IoBulbOutline,
    },
    {
        number: "03",
        title: "Construyo y acompaño",
        description: "Lo entrego funcionando y te explico cómo usarlo.",
        icon: IoConstructOutline,
    },
];

export const HowIWork = () => {
    return (
        <section className="py-20 border-t border-white/5">
            <div className="flex flex-col gap-10">
                {/* Header */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-black text-white">¿Cómo trabajo?</h2>
                    <p className="text-sm text-slate-400 max-w-lg">
                        Un proceso simple, sin tecnicismos, de la primera conversación a la entrega.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {steps.map((step) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.number}
                                className="group relative overflow-hidden rounded-xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
                            >
                                {/* Signature top bar */}
                                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/80 to-primary/10" />

                                {/* Watermark number */}
                                <span
                                    className="pointer-events-none absolute right-4 bottom-2 select-none text-7xl font-black leading-none text-primary/10"
                                    aria-hidden
                                >
                                    {step.number}
                                </span>

                                <div className="mb-4 flex items-center gap-3">
                                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                                </div>

                                <h3 className="mb-2 text-lg font-bold leading-snug text-white">
                                    {step.title}
                                </h3>

                                <p className="relative z-10 text-sm leading-relaxed text-slate-400">
                                    {step.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
