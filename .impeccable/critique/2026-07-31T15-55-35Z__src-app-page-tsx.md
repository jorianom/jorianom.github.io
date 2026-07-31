---
timestamp: 2026-07-31T15-55-35Z
slug: src-app-page-tsx
---
# Diseño de crítica — Página de inicio (src/app/page.tsx)

> Design critique snapshot — Impeccable `critique`, 31 Jul 2026
> Target: src/app/page.tsx (+ composición src/ui). Sin evidencia de navegador (sin automatización de browser en la sesión); evidencia estática del detector.

## Veredicto

El sistema existe y está mayormente ejecutado bien (Experience, ContactModal, AvailabilityBadge, trío hover de tarjetas, accesibilidad). El problema central no es "que no se vea bien": es que la implementación no confía en su propio sistema — el acento único se diluye en casi todas las secciones, los tokens declarados mueren sin uso, y la firma de 2px se aplica de cuatro maneras distintas. **Tres frentes para subir de 17/20 → 19/20: (1) recuperar el acento, (2) unificar los dialectos de tarjeta/sección, (3) disciplina de contraste y motion.**

## Evidencia del detector

4 hallazgos, todos `design-system-font-size` (11px arbitrarios en metadata mono), 0 errores/warnings, 0 suprimidos por config. Fuera de la rampa documentada (Monómetro 10–12px):
- Education.tsx:181 (`text-[11px]` pie de institución)
- Education.tsx:203 (`text-[11px]` "Ver certificado")
- Projects.tsx:97 (`text-[11px]` metadata mono)
- Services.tsx:127 (`text-[11px]` metadata mono)

## Issues priorizados

### 1. El acento ya no enciende: es papel tapiz (Rastro ≤10% rota)
Evidencia: logo tile naranja (Navbar.tsx:75), subtítulo naranja (Navbar.tsx:82), 4 títulos TechStack naranjas (TechStack.tsx:62), claims + tags + watermark naranjas en 4 cards (Services.tsx:27,101,113), 5 links "Ver proyecto" (Projects.tsx:103), 8 anillos naranjas Credly (Badge.tsx:228).
Acción: reservar `#ff4d2e` para puntos de decisión/ignición. Badges → `ring-1 ring-white/10`; títulos de categoría → slate; claims → `--color-accent` (fire-glow) en vez de `text-primary/80`; mantener el watermark como única voz grande del acento (una sola vez).

### 2. Tokens muertos y drift
- `--color-accent: #ff7a63` (globals.css:10) definido y nunca usado; DESIGN.md:118 lo asigna a claims en itálica.
- `--background/--foreground` y bloque `prefers-color-scheme: dark` inalcanzables; `body` hard-overridea (globals.css:33-34). Remanentes de tema claro `--color-bg-light/--color-text-dark` (globals.css:13-14) sin uso.
- Scrollbar thumb `rgba(255,0,0,0.244)` (globals.css:75) — rojo puro, fuera de tokens.
- `--color-accent: #1b1b1b/#171717` sin efecto.

### 3. Sistema de gradientes de 6 tonos sin tokenizar
Cyan/green/blue/orange (TechStack.tsx:18,25,32,39) + yellow/emerald (Services.tsx:50,62). Ninguno de cyan/yellow/emerald existe en el token set. Azul doble-usado ("datos" TechStack vs "integraciones" Services). **`from-green-400/80` + `text-green-400` en Backend (TechStack.tsx:24-25) pinta un estado no-vivo con el Verde de Señal de Vida — violación directa de DESIGN.md:138.**
Acción: acentos de categoría → neutros (slate) o fire-trail; verde solo para estados vivos reales.

### 4. Ritmo de sección inconsistente
Declarado `py-16–py-20` + `border-t border-white/5` (DESIGN.md:162). Real: TechStack `py-8 border-b` (TechStack.tsx:45), Badge `py-10` (Badge.tsx:161), Footer `mt-10` (Footer.tsx:17). Brechas entre secciones alternan 56px/112px/160px. Divisores: coin-flip entre `border-b`, sin borde (Projects.tsx:57), y `border-t` (Services/Experience/Education/Badge).
Acción: unificar `py-20 border-t border-white/5` en las 6 secciones; Projects gana su `border-t`.

### 5. Tres dialectos de hover para la misma familia de tarjetas
TechStack/Projects: `hover:border-primary/40 + shadow-primary/5` (correcto, on-spec). Services: `hover:border-white/20 + hover:shadow-xl` (shadow-xl = sombra gris difusa, viola DESIGN.md:249). Education: `hover:border-primary/20` (mitad de intensidad).
Acción: un solo dialecto = `hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5`.

### 6. La firma de 2px se aplica de 4 maneras
Top bar 2px correcta (TechStack.tsx:58, Services.tsx:89). **Ausente en Projects** (Projects.tsx:70-71). Education la sustituye por barra izquierda `w-1` (Education.tsx:136). Badge la reinterpreta como frame completo `p-[2px]` (Badge.tsx:228). DESIGN.md:107 define "firma recurrente".
Acción: definir la firma una sola vez (barra superior 2px fire-trail) y aplicarla idéntica en los 4 componentes.

### 7. Tipografía: faltan la voz mono y kickers de sección
La pauta es headline + kicker mono 10px (`ds-heading-meta`, design.json:157). La implementación la invierte: "CERTIFICACIONES & INSIGNIAS" es el **h2** (Badge.tsx:166-168), y el resto abre con párrafo prosa (Services.tsx:74-76, Experience.tsx:36-38). El kocker mono de sección no existe.
Otros: `leading-tight` (ProfileCard.tsx:28) vs 1.1 declarado; Projects bajo el token title (`text-lg` vs 1.25rem); hero `max-w-2xl` ~70ch vs ~65ch; 4x `text-[11px]` fuera de rampa.

### 8. Contraste AA (texto sobre fondos)
FALLOS:
- Blanco sobre `#ff4d2e` = **3.3:1** — botones primarios + CTA navbar (ProfileCard.tsx:45, Navbar.tsx:100, ContactModal.tsx:199) fallan AA texto normal.
- `text-primary/80` claims = **3.5:1** (Services.tsx:113).
- `text-primary/50` "Promoción interna" = **2.1:1** (Experience.tsx:63).
- `text-[10px] text-slate-500` ≈ **3.7:1** (Experience.tsx:58,71; Footer.tsx:38; Education.tsx:181,190).
- Form labels `text-slate-500` ≈ **3.3:1** (ContactModal.tsx:124,142,159,179).
PASAN: `#ff4d2e` on `#181818` 5.4:1; ash 6.2:1; verde 9.1:1.

### 9. Motion: muertos, incompletos y sorpresas
- **Hover del watermark muerto**: `group-hover:opacity-100` (Services.tsx:93) sobre un color que ya tiene alpha y opacity base nunca reducida → no cambia nada. Requiere swap de color, no opacidad.
- Reduced-motion solo a medias: `animate-pulse` en dot "En curso" (Education.tsx:151) y skeleton (Badge.tsx:201), `animate-spin` (ContactModal.tsx:210), `scroll-smooth` (layout.tsx:53) y `scrollToTop` (Navbar.tsx:55) ignoran el media query.
- Dos lenguajes de modal: spring declarado en ContactModal, cero animación en el viewer de certificados (Education.tsx:224-274).
- Pulse dividido: scale-pulse del sistema (design.json:87) vs `animate-pulse` de opacidad de Tailwind (Education.tsx:151).
- Progress bar con `transition-[width]` en cada scroll event → lag (Navbar.tsx:68).
- Navbar active-section solo se setea, nunca se limpia (Navbar.tsx:28-31) — la última sección queda marcada al llegar al footer.
- Arrow-key listener global en Badge pagina el carrusel mientras se escribe en cualquier parte (Badge.tsx:116-131).

### 10. Touch targets < 44px
CTA navbar ~36px (Navbar.tsx:100), closes de modal h-8=32px (ContactModal.tsx:113, Education.tsx:246), page dots h-1.5 (Badge.tsx:264-268), "Ver certificado" 11px (Education.tsx:203). DESIGN.md:244 exige ≥44px.

### 11. Menores
- Avatar ring `border-4` (ProfileCard.tsx:61) rompe la regla de borde ≤1px (DESIGN.md:140).
- Skeleton de badges fijo `h-56` vs tiles a contenido (Badge.tsx:201) → salto de layout al cargar.

## Qué funciona (concreto)
- **Experience**: única sección 100% del sistema — timeline `border-l border-primary/30`, dot de 16px ringed, mini-timeline "Promoción interna", bullets `▹` con parsing de `<strong>`.
- **ContactModal**: máquina de estados idle/sending/success/error con reset al reabrir, auto-close en success, fallback con email en error.
- **AvailabilityBadge**: uso modelo del verde — un solo estado vivo, pulse de escala + float, gated por reduced-motion, glow = token brillo-verde.
- **Trío hover TechStack/Projects**: fiel al token Elevación.
- **Plomería a11y**: skip link, un solo h1, focus trap + Escape + foco inicial en viewer de certificados, labels asociados.
- **Tratamiento de imagen en Projects** (`grayscale → color`): ignición sin tocar el acento.

## Recomendaciones priorizadas (orden de impacto)
1. Reclamar el acento: badges → anillos neutros, títulos de categoría → slate, claims → fire-glow, un solo watermark.
2. Tokenizar/neutralizar el sistema de gradientes; verde solo para estados vivos.
3. Unificar firma 2px y dialecto de hover en las 6 secciones; ritmo `py-20 border-t`.
4. Subir `text-primary/50`→`/60+` o usar fire-glow para "Promoción interna"; botones primarios con texto oscuro `#181818` sobre `#ff4d2e` (5.4:1+).
5. Enforced reduced-motion; arreglar watermark muerto; limpiar active-section; quitar arrow-key global.
6. Llevar los 4 `11px` a la rampa (10px o 12px).
7. Touch targets ≥44px (CTA, closes, dots, certificado).
8. Borrar tokens muertos (accent light, prefers-color-scheme, rojo scrollbar, tema claro).

## Scoring sugerido
Audit anterior: 12/20 → 17/20. Tras 1–3: ~18.5/20. Tras 4–7: ~19.5/20.
