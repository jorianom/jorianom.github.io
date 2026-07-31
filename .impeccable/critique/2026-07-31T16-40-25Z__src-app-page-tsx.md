---
target: src/app/page.tsx
total_score: 28
max_score: 32
na_heuristics: 10
p0_count: 0
p1_count: 3
p2_count: 2
timestamp: 2026-07-31T16-40-25Z
slug: src-app-page-tsx
---
# Critique — Página de inicio (src/app/page.tsx)

> Design critique snapshot — Impeccable `critique`, 31 Jul 2026
> Target: src/app/page.tsx (+ composición src/ui). Dual-agent. Sin evidencia de navegador (sin automatización de browser en la sesión); evidencia estática del detector.

## Design Health Score

| # | Heurística | Score | Issue clave |
|---|-----------|-------|-------------|
| 1 | Visibilidad del estado del sistema | 4 | Skeleton del carrusel, estados sending/success/error del form, barra de progreso de scroll, back-to-top a 400px, pulse de disponibilidad |
| 2 | Coincidencia sistema/mundo real | 3 | Voz es_CO nativa ("Sin intermediarios. Sin features a medias."); el anglicismo "features" rompe el registro (Services.tsx:19) |
| 3 | Control y libertad del usuario | 3 | Esc + backdrop + close en ambos modales; el autoplay del carrusel no tiene pause/stop (Badge.tsx:110-114) |
| 4 | Consistencia y estándares | 3 | Dialecto de tarjeta disciplinado; desvíos: back-to-top `text-white` vs CTAs con `text-bg-dark`, Education `bg-surface/60` vs siblings `bg-surface`, TechStack sin `-translate-y-0.5` |
| 5 | Prevención de errores | 3 | Validación nativa required/type=email; el iframe de certificados puede fallar en blanco sin estado de error; enlaces de tarjeta completa sacan del sitio |
| 6 | Reconocimiento antes que recuerdo | 3 | Scroll-spy activo, dots del carrusel; copy truncado con `line-clamp` fuerza recuerdo entre tabs |
| 7 | Flexibilidad y eficiencia | 3 | Skip link, back-to-top, flechas en carrusel, scroll-spy; sin rutas redundantes (pocas) |
| 8 | Estética y diseño minimalista | 3 | Distintivo; ruido en el hero (sociales FB/Instagram, LinkedIn/GitHub duplicados en hero+footer) |
| 9 | Recuperación de errores | 3 | Fallback con email directo en error del form (excelente); viewer de certificados sin estado de error; fallback de badges silencioso |
| 10 | Ayuda y documentación | n/a | Superficie Experience de scroll único con patrones convencionales no necesita docs |
| **Total** | | **28/32** | **Good (87.5%)** |

## Veredicto de especificidad de diseño

**LLM assessment:** Sin ambigüedad: está autoría para este producto, no es plantilla. El concepto "a media luz" atraviesa todas las capas: suelo casi negro `#181818`, una sola brasa `#ff4d2e` reservada para ignición, voz mono de instrumento (Navbar.tsx:84, Experience.tsx:57, Services.tsx:91) que lee como panel de control, contenido inconfundible de este dev full-stack colombiano (Siigo con mini-timeline de "Promoción interna", Universidad Nacional "En curso" en verde, WhatsApp como canal de primer orden, seniority "Ssr."). La firma de 2px recorre las cuatro familias de tarjeta y el dialecto de hover cálido es consistente. Artefactos intercambiables de categoría: íconos FB/Instagram del hero, copy genérico de CTA ("Ver Proyectos / Contáctame") y hábitos de truncamiento — cosméticos, no sistémicos.

**Escaneo determinista:** Detector limpio — exit 0, `[]`, cero hallazgos en los 13 archivos. Resolvió los 4 hallazgos `design-system-font-size` (11px) del critique anterior. Contraste: todas las combinaciones de token pasan AA excepto slate-500 (3.3–3.7:1, placeholders/décor intencional, bajo AA) y blanco-sobre-primario (3.3:1, ahora solo en íconos — texto de botones ya usa `text-bg-dark`, 5.4:1). Falso positivo del critique anterior desmentido: blanco-sobre-primario ya no aplica a texto.

**Overlays visuales:** No disponibles — sin automatización de browser en la sesión. Señal de respaldo: evidencia estática del detector.

## Impresión general

El sistema ahora se sostiene: un acento, una firma, un dialecto de hover, el detector limpio y la voz en orden. El problema central dejó de ser "la implementación no confía en su sistema" y pasó a ser **"el sistema se detiene antes del último acto"** — el carrusel se mueve solo, el modal de contacto (el objetivo principal) es invisible para tecnologías de asistencia, y la página termina en frío sin un momento de conversión. La oportunidad más grande: cerrar con la llama, no con el footer.

## Qué funciona

1. **Disciplina de firma** — una barra fire-trail de 2px y un solo dialecto de hover (border-primary/40 + shadow-primary/5 + lift) en TechStack/Projects/Services/Education/Badge. Raro y repetible (TechStack.tsx:48, Projects.tsx:72, Services.tsx:79, Education.tsx:138,177).
2. **Microcopy que vende sin adjetivos** — claims de servicios ("Un script bien hecho ahorra semanas de trabajo") y metadata mono que mantiene todos los datos escaneables.
3. **Estados de form hechos bien** — skeleton → sent → success con auto-close, más fallback humano real en error (ContactModal.tsx:208-222); targets ≥44px consistentes (`min-h-11`).

## Issues priorizados

### 1. P1 — Autoplay del carrusel incontrolable y sin gate de reduced-motion
- **Qué**: Badge.tsx:110-114 avanza cada 8s sin pausa en hover/focus y sin detenerse bajo `prefers-reduced-motion`; el stagger `delay: idx * 0.08` (Badge.tsx:225) también lo ignora. `reducedMotion` solo anula la transición, no el intervalo.
- **Por qué importa**: viola WCAG 2.2.2 (pause/stop/hide) y el contrato "motion solo para señal, gated" de DESIGN.md. El contenido cambia bajo el cursor del reclutador mientras evalúa credenciales.
- **Fix**: pausar en `mouseenter`/`focusin`, gatear el intervalo con `matchMedia`, o quitar autoplay (flechas + dots bastan).
- **Comando**: $impeccable animate

### 2. P1 — ContactModal es una caja negra de a11y
- **Qué**: sin `role="dialog"`/`aria-modal`, sin focus trap, sin bloqueo de scroll de fondo, sin retorno de foco al cerrar (ContactModal.tsx:83-100). El viewer de Educación sí tiene trap — la inconsistencia es la pista. El menú móvil suma: label estático "Abrir menú" sin `aria-expanded` (Navbar.tsx:111).
- **Por qué importa**: el formulario de contacto es la acción primaria del portfolio; un reclutador con lector de pantalla o teclado no puede usarlo.
- **Fix**: semántica completa de dialog + gestión de foco (trap, retorno, scroll lock); `aria-expanded` en el hamburguesa.
- **Comando**: $impeccable harden

### 3. P1 — La página termina en frío: sin momento de cierre
- **Qué**: la última interacción es el footer (Footer.tsx:17) — cuatro tiles de íconos y un copyright de 10px, sin llama final, sin "¿Trabajamos juntos?". Violación de peak-end: el acto de mayor intención (contacto) exige volver a subir.
- **Por qué importa**: el reclutador con más intención de contratar no recibe ningún camino primario al final del recorrido.
- **Fix**: sección de cierre sobre el footer (p. ej. "¿Trabajamos juntos?" con la píldora del fuego).
- **Comando**: $impeccable layout

### 4. P2 — El Verde de Señal de Vida está a medio implementar
- **Qué**: "8 credenciales verificadas" es slate (Badge.tsx:170-172); ningún badge/certificado lleva marcador verificado en verde. La señal de confianza más fuerte que define el sistema está sin usar.
- **Por qué importa**: el sistema promete "verde = verificado/vivo" pero no lo cumple en credenciales; la Regla del Verde se queda en un solo estado.
- **Fix**: check verde en credenciales verificadas, manteniendo disponibilidad + "En curso" como únicos otros verdes.
- **Comando**: $impeccable colorize

### 5. P2 — Detalles residuales de a11y y rampa
- **Qué**: springs de entrada/salida de ambos modales ignoran reduced-motion (Education.tsx:231-247, ContactModal.tsx:85-100); placeholders slate-500 a 2.89:1 (intencional pero bajo AA — sign-off o subir); back-to-top `text-white` sobre primario 3.3:1 (solo ícono, inconsistente con `text-bg-dark`); targets <44px: skip link ~36px (page.tsx:16), links del nav ~20px, campos de form ~40px.
- **Por qué importa**: Sam (teclado/lector) paga cada detalle; el color del back-to-top rompe la regla de texto oscuro en primario.
- **Fix**: `MotionConfig reducedMotion="user"`; placeholders → slate-400; ícono back-to-top → `text-bg-dark`; subir targets.
- **Comando**: $impeccable audit

## Carga cognitiva

6 de 8 ítems fallan (alta): **foco único** — 4 llamas en el primer viewport (logo tile, CTA nav, acento del headline, CTA hero) + glow de disponibilidad; **chunking** — Projects renderiza 5 tarjetas → fila huérfana de 2 (Projects.tsx:63); **una cosa a la vez** — el carrusel cambia contenido cada 8s sin acción del usuario y las tarjetas de proyecto son doble-affordance (card-link + "Ver proyecto"); **≤4 opciones** — ~10 targets accionables sobre el pliegue; **memoria de trabajo** — `line-clamp-2` (Projects.tsx:88) y nombres de badges truncados fuerzan comparación entre tabs; **progressive disclosure** — Projects no tiene capa de detalle interna: binario de tarjeta truncada o salir del sitio. Pasan: agrupación (labels mono + ritmo de sección) y jerarquía visual (display→headline→title→meta).

## Viaje emocional

El pico es el hero: glow de disponibilidad y "de principio a fin." a la luz de la brasa. Reaseguro presente en ambos portones de alto riesgo: el form de contacto ofrece fallback humano en error, y "En curso" señala estudio activo. Pero el final viola peak-end: la última interacción es un footer escueto, sin llama de cierre. Valle secundario: Projects en gris completo en desktop (Projects.tsx:79) — contenido, pero un skimmer rápido lo lee como trabajo muerto antes del hover que teclado/touch nunca obtiene.

## Persona red flags

**Alex (power user impaciente):** cada tarjeta de proyecto es una salida de una vía a un tab externo (Projects.tsx:65); el gris (Projects.tsx:79) esconde el pago hasta el hover; 5 bullets de logros por empresa; no puede parar el autoplay. Alex se va a LinkedIn en 30s.

**Sam (lector de pantalla/teclado/contraste):** ContactModal invisible para SR (sin role/aria-modal/trap); el label del menú miente ("Abrir menú" mientras está abierto); el ícono back-to-top falla contraste; los springs de modal corren bajo reduced-motion; se pierde el foco tras cerrar el viewer de certificados. La base sólida (skip link, focus-visible, flechas en carrusel) hace estos huecos más fuertes.

**Casey (móvil/44px/interrupción):** el certificado PDF abre en un iframe de 75vh (Education.tsx:268-272) — pinch-and-squint, sin enlace de descarga; el autoplay cambia el contenido a mitad de scroll; sociales duplicados desperdician taps; llegar al contacto desde el footer significa tocar un ícono pelado.

## Observaciones menores

- El Footer vive dentro de `<main>` (page.tsx:21-30) — el skip link cae en main que incluye el footer.
- Inconsistencia de nombre: "John Jairo Riaño Martinez" (Navbar.tsx:82) vs "John Riaño" (Footer.tsx:39, layout.tsx:17).
- Ritmo de sección mezcla `py-16` (Experience:29, Education:116) y `py-20`; TechStack es el único h2 pelado, sin sublínea (TechStack.tsx:36).
- TechStack viola el Monómetro: títulos de categoría en Sans bold 12px (TechStack.tsx:52), no mono 10px label. También Projects.tsx:104 "Ver proyecto", AvailabilityBadge.tsx:5, Badge.tsx:239.
- Código muerto: comentario "Próximamente" (Education.tsx:216-218) deja una tarjeta con footer vacío si `certificate` está ausente; comentario stale en línea 47.
- Sociales del hero: la URL de Instagram lleva `utm_source=qr&igsh=...` (SocialList.tsx:13) — filtra el origen de QR-share.
- 5 de 10 colores de DESIGN.md (paper, mist, ash, stone, signal-green) no son custom properties; los componentes usan defaults de Tailwind (slate-300/400/500, green-300, red-400) en vez de tokens.

## Preguntas para considerar

1. "La rareza es poder" — ¿por qué arden cuatro llamas simultáneas en el primer viewport (logo tile, CTA nav, headline, CTA hero)? ¿Y si el CTA nav se quedara ghost hasta 400px para que "Ver Proyectos" del hero sea la llama única?
2. Los proyectos en gris son una apuesta "a media luz" — pero el pago de color solo existe en hover de desktop. Para los ~60% que nunca hacen hover (touch/teclado/scan), el trabajo más importante se lee monocromo para siempre. ¿Vale el trade?
3. El carrusel, el viewer y el timeline son bespoke — el portfolio está claramente hecho a mano. ¿Se le muestra a un reclutador, o se lee como plantilla oscura en un vistazo de 5 segundos?
