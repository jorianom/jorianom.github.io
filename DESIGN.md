---
name: Portafolio John Riaño — El Espacio de Trabajo a Media Luz
description: Portafolio oscuro de desarrollador full stack, acento naranja brasa (Rastro de Fuego), Geist y precisión de instrumento.
colors:
  fire-trail: "#ff4d2e"
  fire-trail-deep: "#e63e21"
  fire-glow: "#ff7a63"
  signal-green: "#4ade80"
  ink-void: "#181818"
  slate-surface: "#222222"
  paper: "#ffffff"
  mist: "#cbd5e1"
  ash: "#94a3b8"
  stone: "#64748b"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 6vw, 3rem)"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 900
    lineHeight: 1.2
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.625
  label:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.625rem"
    fontWeight: 700
    letterSpacing: "0.1em"
  meta:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.08em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  xxl: "24px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  section: "64px"
  section-lg: "80px"
  container: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.fire-trail}"
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    rounded: "{rounded.full}"
    padding: "12px 32px"
  button-primary-square:
    backgroundColor: "{colors.fire-trail}"
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    padding: "8px 20px"
  button-ghost:
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    rounded: "{rounded.full}"
    padding: "12px 32px"
  chip:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "{colors.ash}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
  input:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  card-surface:
    backgroundColor: "{colors.slate-surface}"
    rounded: "{rounded.lg}"
---

# Design System: El Espacio de Trabajo a Media Luz

## Overview

**Creative North Star: "El Espacio de Trabajo a Media Luz"**

El portafolio es un espacio de trabajo a oscuras, enfocado y cálido, donde una sola brasa naranja — el Rastro de Fuego — ilumina lo que importa: la acción y la señal. El fondo casi negro (`ink-void`) y las superficies de carbón (`slate-surface`) aportan el silencio; el acento encendido guía la mirada del reclutador hacia los puntos de decisión en vez de competir con ellos. Es el ambiente de un ingeniero que trabaja de noche con una luz precisa, no el escaparate de una agencia de marketing.

La densidad es media-alta pero ordenada: etiquetas técnicas en mono, líneas de borde finas (`white/10`), y tarjetas con acento superior en gradiente de 2px que separan secciones sin ruido. La tipografía Geist, con su corte limpio y letras técnicas, refuerza la credibilidad de ingeniería: títulos en negro pesado, metadatos en mono 10px en mayúsculas, y el acento reservado para CTA, foco, enlaces y líneas de timeline. Los estados hover son táctiles y nítidos — elevación sutil, borde que enciende, sombra cálida — nunca decoración gratuita.

El sistema rechaza explícitamente la estética genérica de SaaS: sin gradientes pesados, sin glassmorphism, sin sombras difusas de marketing ni plantillas. Cada superficie es un carbón sólido delimitado por una línea fina; la profundidad se construye por capas tonales y se confirma con sombras tintadas en el acento únicamente cuando el usuario interactúa.

**Key Characteristics:**
- Fondo casi negro (`#181818`) y superficies de carbón (`#222222`) con líneas de borde finas (`white/5`–`white/10`).
- Un solo acento caliente (`#ff4d2e`) usado con parcimonia; rareza es su poder.
- Metadatos y etiquetas en Geist Mono 10px, mayúsculas, tracking amplio — voz de instrumento.
- Tarjetas con acento superior en gradiente de 2px como firma recurrente.
- Estados hover nítidos y táctiles: elevación de 2px + sombra cálida.
- Animación solo para señal (pulso de disponibilidad, carrusel) y respeta `prefers-reduced-motion`.

## Colors

Paleta de espacio nocturno con un único acento caliente y un verde reservado para vida y verificación.

### Primary
- **Rastro de Fuego** (#ff4d2e): el acento único del sistema. Se usa en CTA, enlaces activos del nav, foco (`focus-visible`), línea de timeline, íconos de acento, marcas de lista y gradiente superior de tarjetas. Nunca como relleno decorativo de grandes áreas.
- **Rastro de Fuego Profundo** (#e63e21): estado hover/pressed del acento (botones, back-to-top).
- **Resplandor de Ascua** (#ff7a63): variante suave del acento para textos secundarios (claims en cursiva de servicios).

### Secondary
*(omitido — el sistema tiene un solo acento, no inventar roles)*

### Tertiary
*(omitido)*

### Neutral
- **Vacío de Tinta** (#181818, `ink-void`): fondo de página y base del navbar.
- **Superficie de Carbón** (#222222, `slate-surface`): fondo de tarjetas, hero, modal.
- **Papel** (#ffffff, `paper`): texto principal, títulos e íconos activos.
- **Neblina** (#cbd5e1, `mist`): cuerpo secundario sobre superficie (slate-300).
- **Ceniza** (#94a3b8, `ash`): texto apagado, metadatos y etiquetas mono legibles (AA), chips y body terciario (slate-400).
- **Piedra** (#64748b, `stone`): placeholders y texto decorativo de bajo énfasis.
- **Verde de Señal de Vida** (#4ade80): únicamente estados vivos — disponible para trabajar, estudios en curso, credenciales verificadas y certificados.

### Named Rules
**La Regla del Rastro de Fuego.** El acento `#ff4d2e` se usa en ≤10% de cualquier pantalla. Su rareza es el punto: cuando enciende, es porque hay una acción que tomar o una señal que leer.

**La Regla del Verde de Vida.** El verde no es decorativo. Si algo no está vivo (disponible, en curso, verificado), no lo toca el verde.

**La Regla de la Línea Fina.** Los bordes entre superficies nunca superan 1px y usan `white/5`–`white/10`; la distinción de capas la hace el tono, no el grosor de la línea.

## Typography

**Display Font:** Geist Sans (con fallback `ui-sans-serif, system-ui`)
**Body Font:** Geist Sans
**Label/Mono Font:** Geist Mono (con fallback `ui-monospace, monospace`)

**Character:** Geist aporta la calma técnica del sistema — geométrico, sin serif y sin adornos — mientras que Geist Mono introduce la voz de instrumento: etiquetas, periodos y metadatos se leen como lectura de panel, no como copy de marketing. El contraste entre un título en negro (900) y su etiqueta mono de 10px define la jerarquía de todo el portafolio.

### Hierarchy
- **Display** (900, clamp(1.875rem–3rem), line-height 1.1, tracking -0.05em): el headline del hero ("Construyo productos digitales de principio a fin."). Solo una vez por página.
- **Headline** (900, 1.875rem, line-height 1.2): títulos de sección (Mis Proyectos, Tecnologías, Trayectoria Profesional...). Abren cada sección con `text-3xl font-black`.
- **Title** (700, 1.25rem, line-height 1.3): títulos de tarjeta, nombres de empresa, títulos de proyecto. Hover → acento.
- **Body** (500, 0.875rem, line-height 1.625): descripciones y bullets. En `slate-300` sobre superficie; línea de lectura ~65ch.
- **Label** (700, 0.625rem, Geist Mono, tracking 0.1em, mayúsculas): etiquetas de metadata (roles, periodos, tags de servicio, "Promoción interna"). Siempre mono, siempre compacta.
- **Meta** (500, 0.75rem, Geist Mono, tracking 0.08em): chips de tecnología y enlaces de acción compactos (`text-xs`). Escalón intermedio de la rampa para datos que necesitan un punto más de legibilidad que Label.

### Named Rules
**La Regla del Monómetro.** Cualquier cosa que sea un dato — periodo, rol, tecnología, estado — se escribe en Geist Mono a 10–12px, mayúsculas y con tracking amplio. Si es copy, es Geist Sans. No se mezclan.

## Layout

Un solo contenedor centrado `max-w-7xl` (1280px) con gutter `px-6` (24px). Cada sección se separa por `py-16`–`py-20` (64–80px) y por una línea divisoria `border-t border-white/5`.

- **Hero**: grid de 12 columnas (7/5 en `lg`) con la foto circular a la derecha; en móvil se invierte el orden (foto arriba).
- **Tecnologías**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`, gap 24px, tarjetas con acento superior en gradiente.
- **Proyectos**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`, gap 20px, tarjetas 16:10 con imagen + degradado.
- **Servicios**: `grid-cols-1 sm:grid-cols-2`, gap 20px, con número de agua gigante (text-8xl) en la esquina.
- **Experiencia / Educación**: grid de 12 columnas, encabezado en 4 columnas y contenido en 8, con timeline vertical `border-l border-primary/30`.
- **Breakpoints**: sm 640px · md 768px · lg 1024px (grids colapsan a una columna bajo su punto de quiebre).

La densidad usa un ritmo de 8px: `gap-2` (8px) para íconos, `gap-3` (12px) entre elementos de una fila, `gap-4` (16px) dentro de tarjetas, `gap-5` (20px) entre tarjetas, `gap-10` (40px) dentro de secciones.

## Elevation & Depth

El sistema transmite profundidad **por capas tonales** antes que por sombras: fondo `ink-void` → superficie `slate-surface` → superficies internas `bg-white/5`. Las sombras existen para dos trabajos: confirmar la jerarquía de superposiciones (hero, modal, foto) y responder al estado hover de acciones e interacción — siempre tintadas en el acento, nunca grises neutras difusas.

### Shadow Vocabulary
- **Ambiental cálida** (`0 10px 15px -3px rgba(255, 77, 46, 0.2)`): bajo CTAs primarios y el botón back-to-top. Hace que la acción parezca "encendida".
- **Elevación hover** (`0 10px 15px -3px rgba(255, 77, 46, 0.05)`): al hacer hover en tarjetas, junto con `translateY(-2px)` y borde `fire-trail/40`.
- **Superpuesta** (`0 25px 50px -12px rgba(0, 0, 0, 0.5)`): hero card, modal de contacto y foto de perfil (`shadow-2xl`).
- **Brillo verde** (`0 0 20px rgba(74, 222, 128, 0.15)`): solo el badge de disponibilidad, para señalar presencia.

### Named Rules
**La Regla del Carbonizado.** Las superficies son planas y sólidas en reposo. La elevación aparece solo como respuesta al hover, al foco o a la superposición real (modal/hero). Una tarjeta que "flota" sin razón viola el sistema.

## Shapes

Lenguaje de forma nítido y táctil: radios grandes en superficies de primer plano, radios medios en elementos operativos, y círculos para píldoras, puntos y el avatar.

- **full (9999px)**: píldoras CTA, badge de disponibilidad, avatar, puntos de timeline, botones de paginación y back-to-top.
- **xxl (24px)**: tarjeta del hero (`rounded-3xl`).
- **xl (16px)**: modal de contacto y visor de certificados, tiles de insignias.
- **lg (12px)**: tarjetas de sección (tecnologías, proyectos, servicios, educación).
- **md (8px)**: inputs, botones del navbar y de envío, tiles de ícono.
- **sm (6px)**: chips de tecnología y tags.

Las tarjetas de sección llevan una **firma de 2px** recurrente: un acento superior en gradiente horizontal del Rastro de Fuego (`h-[2px] bg-gradient-to-r from-primary/80 to-primary/10`). Una sola firma para todo el sistema — la categoría no cambia el color de la firma y el verde queda reservado para estados vivos (Regla del Verde de Vida). Los bordes de tarjeta son `white/10` en reposo y se encienden a `fire-trail/40` en hover.

## Components

### Buttons
- **Shape:** dos familias — píldora `full` para CTAs del hero, cuadrado `md` para acciones del navbar/forms.
- **Primario (píldora):** fondo Rastro de Fuego, texto Vacío de Tinta (#181818, AA 4.8:1), padding `12px 32px`, `font-bold`. En hover: `scale(1.05)` + sombra ambiental cálida.
- **Primario (cuadrado):** fondo Rastro de Fuego, texto Vacío de Tinta (#181818), padding `8px 20px`, alto mínimo 44px. En hover: sombra ambiental cálida (`shadow-lg shadow-primary/20`).
- **Fantasma (secundario):** transparente, borde `white/20`, texto blanco, misma píldora y padding; hover → `bg-white/5`.
- **Focus:** `focus-visible` con outline de 2px en el acento, offset 2px (global).

### Chips (tecnologías / tags)
- **Estilo:** fondo `white/5`, borde `white/10`, texto Ceniza, Geist Mono 12px, radio `sm` (6px), padding `2px 10px`.
- **Estado:** pasivos; sin variantes seleccionadas en este sistema.

### Cards / Contenedores
- **Corner Style:** `lg` (12px) tarjetas de sección; `xl` (16px) modales; `xxl` (24px) hero.
- **Background:** Superficie de Carbón (`#222222`); superficies internas `white/5`.
- **Shadow Strategy:** ver Regla del Carbonizado — planas en reposo, elevación solo en hover/superposición.
- **Border:** `white/10` reposo → `fire-trail/40` hover.
- **Firma:** acento superior en gradiente de 2px, color según categoría.
- **Internal Padding:** `p-6` (24px) tarjetas estándar, `p-5` (20px) tarjetas compactas.

### Inputs / Fields
- **Style:** fondo `white/5`, borde `white/10`, texto blanco, radio `md` (8px), padding `10px 16px`, placeholder Piedra.
- **Focus:** borde → `fire-trail/50` + ring 1px `fire-trail/30`. Outline global como respaldo.
- **Error:** texto de error en rojo (`red-400`), mono, centrado, bajo el botón de envío.

### Navigation
- Barra fija con `backdrop-blur-md` y fondo `bg-bg-dark/90`; borde inferior `white/5`.
- Enlaces en Geist Sans `text-sm font-medium`; activo → acento (detectado con IntersectionObserver), reposo → blanco, hover → acento.
- CTA "Contáctame" cuadrado primario a la derecha (desktop) o botón de menú hamburguesa (móvil).
- Barra de progreso de scroll de 2px en el acento, fija arriba (`z-[60]`).
- Botón back-to-top píldora del acento, aparece tras 400px de scroll.

### Timeline (Experiencia) — firma del sistema
- Línea vertical `border-l border-primary/30` con puntos `h-4 w-4` del acento y `ring-4 ring-primary/20`.
- Mini-timeline interno de promoción: dos puntos (actual en acento, previo `white/20`) unidos por línea de 1px `primary/30`, con la etiqueta "Promoción interna" en mono.
- Bullets de logros con marca `▹` en el acento; `**bold**` en el texto se renderiza como `<strong>`.

## Do's and Don'ts

### Do:
- **Do** usar el Rastro de Fuego para una sola intención por pantalla: la acción principal.
- **Do** escribir metadatos y datos técnicos en Geist Mono 10–12px mayúsculas.
- **Do** separar secciones con `border-t border-white/5` y ritmo de 8px.
- **Do** respetar `prefers-reduced-motion`: sin animación de disponibilidad ni transiciones de carrusel cuando el usuario lo pide.
- **Do** mantener targets táctiles ≥44px (44px de alto mínimo en íconos y botones de icono).
- **Do** usar el verde únicamente para estados vivos (disponible, en curso, verificado).

### Don't:
- **Don't** aplicar gradientes de fondo pesados ni glassmorphism en superficies de contenido.
- **Don't** usar sombras grises difusas de marketing; la elevación es por capas tonales o sombra cálida en hover.
- **Don't** llenar las tarjetas con el acento; la Regla del Rastro de Fuego (≤10%) se mantiene.
- **Don't** mezclar copy en Geist Mono ni datos en Geist Sans dentro de la misma etiqueta.
- **Don't** inventar componentes sin estado funcional; cada tarjeta, botón e input responde a una acción real.
