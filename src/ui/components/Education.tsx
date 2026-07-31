"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
    IoSchoolOutline,
    IoDocumentTextOutline,
    IoCloseOutline,
    IoEyeOutline,
} from "react-icons/io5";
/* ── Types ─────────────────────────────────────────── */

type EducationItem = {
    title: string;
    institution: string;
    status?: string;
};

type DiplomaItem = {
    title: string;
    institution: string;
    hours?: string;
    /**
     * Ruta al archivo del certificado dentro de /public/certificates/
     * Soporta imágenes (.webp, .png, .jpg) y PDFs (.pdf)
     * Ejemplo: "/certificates/ml-data-science.webp"
     */
    certificate?: string;
};

/* ── Data ──────────────────────────────────────────── */

const education: EducationItem[] = [
    {
        title: "Ingeniería de Sistemas y Computación",
        institution: "Universidad Nacional de Colombia",
        status: "En curso",
    },
];

const diplomas: DiplomaItem[] = [
    {
        title: "Machine Learning and Data Science",
        institution: "Universidad Nacional de Colombia",
        hours: "192 h",
        // Descomentar cuando el archivo exista en /public/certificates/
        certificate: "/certificates/analisis.pdf",
    },
    {
        title: "Arquitectura y Calidad de Software",
        institution: "Universidad Nacional de Colombia",
        hours: "192 h",
        certificate: "/certificates/software.pdf",
    },
    {
        title: "GitHub Actions",
        institution: "GitHub",
        certificate: "/certificates/actions.pdf",
    },
];

/* ── Helpers ───────────────────────────────────────── */

function isPdf(path: string) {
    return path.toLowerCase().endsWith(".pdf");
}

/* ── Component ─────────────────────────────────────── */

export const Education = () => {
    const [viewer, setViewer] = useState<{
        title: string;
        src: string;
    } | null>(null);

    const modalRef = useRef<HTMLDivElement>(null);
    const closeBtnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!viewer) return;

        requestAnimationFrame(() => closeBtnRef.current?.focus());

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setViewer(null);
                return;
            }

            if (e.key === "Tab" && modalRef.current) {
                const focusable = modalRef.current.querySelectorAll<HTMLElement>(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                if (focusable.length === 0) return;

                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [viewer]);

    return (
        <>
            <section className="py-16 border-t border-white/5" id="education">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* ── Heading ─────────────────────────────── */}
                    <div className="lg:col-span-4">
                        <h2 className="text-3xl font-black text-white">Educación</h2>
                        <p className="text-sm text-slate-400 mt-4">
                            Formación académica y complementaria en ingeniería de software y
                            ciencia de datos.
                        </p>
                    </div>

                    {/* ── Content ─────────────────────────────── */}
                    <div className="lg:col-span-8 flex flex-col gap-10">
                        {/* Formal education — prominent card */}
                        {education.map((item) => (
                            <div
                                key={item.title}
                                className="group relative rounded-xl bg-surface/60 border border-white/5
                           hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5
                           transition-all duration-300 overflow-hidden"
                            >
                                {/* Signature top bar */}
                                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/80 to-primary/10" />

                                <div className="flex items-start gap-4 p-6">
                                    <div className="shrink-0 mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                        <IoSchoolOutline size={22} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-slate-400 font-mono mt-1">
                                            {item.institution}
                                        </p>
                                        {item.status && (
                                            <span className="inline-flex items-center gap-1.5 mt-3 text-[10px] font-mono uppercase tracking-widest text-green-400 border border-green-400/30 rounded-full px-3 py-0.5">
                                                <span className="h-1.5 w-1.5 rounded-full bg-green-400 motion-safe:animate-pulse" />
                                                {item.status}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Section label */}
                        <p className="text-xs text-slate-400 font-mono uppercase tracking-widest border-b border-white/5 pb-2">
                            Diplomados &amp; Formación Complementaria
                        </p>

                        {/* Diploma cards — 2-col grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {diplomas.map((item) => (
                                <div
                                    key={item.title}
                                    className="group relative overflow-hidden rounded-xl bg-surface/40 border border-white/5 p-5
                             hover:border-primary/40 hover:bg-surface/70 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5
                             transition-all duration-300"
                                >
                                    {/* Signature top bar */}
                                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/80 to-primary/10" />

                                    <div className="flex items-start gap-3">
                                        <div className="shrink-0 mt-0.5 flex h-8 w-8 items-center justify-center rounded-md bg-white/5 text-primary/70 group-hover:text-primary transition-colors">
                                            <IoDocumentTextOutline size={18} />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="text-sm font-semibold text-white leading-snug">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs text-slate-400 font-mono mt-1">
                                                {item.institution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Footer: hours + certificate link */}
                                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                                        {item.hours && (
                                            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">
                                                {item.hours}
                                            </span>
                                        )}

                                        {item.certificate ? (
                                            <button
                                                onClick={() =>
                                                    setViewer({
                                                        title: item.title,
                                                        src: item.certificate!,
                                                    })
                                                }
                                                className="ml-auto inline-flex min-h-11 items-center gap-1.5 rounded-md px-3 text-xs text-primary font-mono uppercase tracking-wider
                                   hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
                                            >
                                                <IoEyeOutline size={14} />
                                                Ver certificado
                                            </button>
                                        ) : (
                                            //   <span className="text-[11px] text-slate-600 font-mono uppercase tracking-wider">
                                            //     Próximamente
                                            //   </span>
                                            null
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Certificate viewer modal ───────────────── */}
            {viewer && (
                <motion.div
                    ref={modalRef}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={() => setViewer(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Visor de certificado"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                >
                    <motion.div
                        className="relative w-full max-w-3xl max-h-[90vh] rounded-2xl bg-surface border border-white/10 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                            {/* Header */}
                            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                                <p className="text-sm font-semibold text-white truncate pr-4">
                                    {viewer.title}
                                </p>
                                <button
                                    ref={closeBtnRef}
                                    onClick={() => setViewer(null)}
                                    aria-label="Cerrar"
                                    className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full
                               hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    <IoCloseOutline size={20} />
                                </button>
                            </div>

                        {/* Body */}
                        <div className="p-4 flex items-center justify-center overflow-auto max-h-[calc(90vh-56px)]">
                            {isPdf(viewer.src) ? (
                                <iframe
                                    src={viewer.src}
                                    className="w-full h-[75vh] rounded-lg"
                                    title={viewer.title}
                                />
                            ) : (
                                <Image
                                    src={viewer.src}
                                    alt={viewer.title}
                                    width={900}
                                    height={650}
                                    className="rounded-lg object-contain max-h-[75vh] w-auto"
                                    quality={90}
                                />
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};
