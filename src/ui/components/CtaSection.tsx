"use client";

import { useState } from "react";
import { IoFlame, IoDownloadOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { ContactModal } from "./ContactModal";

const LINKEDIN_URL = "https://www.linkedin.com/in/jorianom/";
const CV_URL = "/cv.pdf";

export const CtaSection = () => {
    const [showContact, setShowContact] = useState(false);

    return (
        <>
        <section className="py-20 border-t border-white/5" id="contact">
            <div className="flex flex-col gap-10">
                {/* Header */}
                <div className="flex flex-col items-center gap-4 text-center">
                    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-400">
                        <IoFlame className="h-4 w-4 text-primary" aria-hidden="true" />
                        Hablemos
                    </p>

                    <h2 className="max-w-2xl text-3xl sm:text-4xl font-black tracking-tighter text-white">
                        ¿Tienes algo que construir o automatizar?
                    </h2>

                    <p className="max-w-xl text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                        Abierto a proyectos y nuevas oportunidades · 5+ años de experiencia · Bogotá, Colombia
                    </p>
                </div>

                {/* Two paths */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Path: business */}
                    <div className="group relative flex flex-col gap-5 overflow-hidden rounded-xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/80 to-primary/10" />

                        <div className="flex flex-col gap-2">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                                Proyectos y automatización
                            </span>
                            <h3 className="text-lg font-bold leading-snug text-white">
                                ¿Tienes un proceso por automatizar o un proyecto por construir?
                            </h3>
                        </div>

                        <button
                            type="button"
                            onClick={() => setShowContact(true)}
                            className="mt-auto inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-bg-dark transition-transform hover:scale-105 shadow-lg shadow-primary/20"
                        >
                            Cuéntame tu caso
                        </button>
                    </div>

                    {/* Path: recruiter */}
                    <div className="group relative flex flex-col gap-5 overflow-hidden rounded-xl border border-white/10 bg-surface p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/80 to-primary/10" />

                        <div className="flex flex-col gap-2">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                                Equipos de desarrollo
                            </span>
                            <h3 className="text-lg font-bold leading-snug text-white">
                                ¿Buscas reforzar tu equipo de desarrollo?
                            </h3>
                        </div>

                        <div className="mt-auto flex flex-wrap gap-3">
                            <a
                                href={LINKEDIN_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-bold text-white transition-all hover:bg-white/5"
                            >
                                <FaLinkedinIn className="h-4 w-4" aria-hidden="true" />
                                LinkedIn
                            </a>
                            {/* <a
                                href={CV_URL}
                                download
                                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-bold text-white transition-all hover:bg-white/5"
                            >
                                <IoDownloadOutline className="h-4 w-4" aria-hidden="true" />
                                Descargar hoja de vida
                            </a> */}
                        </div>
                    </div>
                </div>

                <p className="text-center font-mono text-xs tracking-wider text-slate-400">
                    rianosoftware.dev@gmail.com
                </p>
            </div>
        </section>

        <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
        </>
    );
};
