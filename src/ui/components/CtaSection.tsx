"use client";

import { useState } from "react";
import { IoFlame } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { ContactModal } from "./ContactModal";

export const CtaSection = () => {
    const [showContact, setShowContact] = useState(false);

    return (
        <>
            <section className="py-20 border-t border-white/5" id="contact">
                <div className="flex flex-col items-center gap-6 px-2 text-center">
                    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-400">
                        <IoFlame className="h-4 w-4 text-primary" aria-hidden="true" />
                        Hablemos
                    </p>

                    <h2 className="max-w-2xl text-3xl sm:text-4xl font-black tracking-tighter text-white">
                        ¿Buscas un desarrollador full stack?
                    </h2>

                    <p className="max-w-xl text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                        Disponibilidad inmediata · 5+ años de experiencia · Bogotá, Colombia
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                        <button
                            onClick={() => setShowContact(true)}
                            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-8 py-3 font-bold text-bg-dark transition-transform hover:scale-105 shadow-lg shadow-primary/20 cursor-pointer"
                        >
                            Contáctame
                        </button>
                        <a
                            href="https://wa.me/573205802499"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 px-8 py-3 font-bold text-white transition-all hover:bg-white/5"
                        >
                            <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                            WhatsApp
                        </a>
                    </div>

                    <p className="font-mono text-xs tracking-wider text-slate-400">
                        rianosoftware.dev@gmail.com
                    </p>
                </div>
            </section>

            <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
        </>
    );
};
