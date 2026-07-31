'use client'

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { IoArrowUp, IoClose, IoMenu, IoTerminal } from "react-icons/io5";
import { ContactModal } from "./ContactModal";

const navLinks = [
    { label: "Proyectos", href: "#projects" },
    { label: "Servicios", href: "#services" },
    { label: "Experiencia", href: "#experience" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const sections = navLinks
            .map((l) => document.getElementById(l.href.slice(1)))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                }
            },
            { rootMargin: "-80px 0px -40% 0px", threshold: 0 }
        );

        for (const s of sections) {
            if (s) observer.observe(s);
        }
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const total = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
            setShowBackToTop(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const linkClass = (href: string) =>
        `text-sm font-medium transition-colors ${
            activeSection === href.slice(1)
                ? "text-primary"
                : "text-white hover:text-primary"
        }`;

    return (
        <>
            <div
                className="fixed top-0 left-0 z-[60] h-[2px] bg-primary transition-[width] duration-150 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />

            <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-bg-dark/90 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                            <IoTerminal className="h-5 w-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold leading-none tracking-tight text-white">
                                John Jairo Riaño Martinez
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                                Software Developer
                            </span>
                        </div>
                    </Link>

                    <nav className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={linkClass(link.href)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button
                            onClick={() => setShowContact(true)}
                            className="rounded-lg bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-primary-hover transition-all cursor-pointer"
                        >
                            Contáctame
                        </button>
                    </nav>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-2.5"
                        aria-label="Abrir menú"
                    >
                        {isOpen ? <IoClose className="h-6 w-6" /> : <IoMenu className="h-6 w-6" />}
                    </button>
                </div>

                {isOpen && (
                    <nav className="md:hidden border-t border-white/5 bg-bg-dark/95 backdrop-blur-md px-6 pb-4">
                        <div className="flex flex-col gap-3 pt-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={linkClass(link.href)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <button
                                onClick={() => { setIsOpen(false); setShowContact(true); }}
                                className="mt-1 rounded-lg bg-primary px-5 py-2 text-center text-sm font-bold text-white hover:bg-primary-hover transition-all cursor-pointer"
                            >
                                Contáctame
                            </button>
                        </div>
                    </nav>
                )}
            </header>

            <button
                onClick={scrollToTop}
                aria-label="Volver al inicio"
                className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary-hover ${
                    showBackToTop
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                }`}
            >
                <IoArrowUp className="h-5 w-5" />
            </button>

            <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
        </>
    );
};