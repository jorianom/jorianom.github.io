---
target: src/app/page.tsx
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
timestamp: 2026-07-30T23-56-43Z
slug: src-app-page-tsx
---
Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | No scroll-position feedback on 8-section page |
| 2 | Match System / Real World | 4 | Spanish copy is domain-appropriate, tone matches LATAM audience |
| 3 | User Control and Freedom | 2 | Both carousels auto-play with zero pause/stop controls |
| 4 | Consistency and Standards | 3 | Visual language consistent; dead components suggest drift |
| 5 | Error Prevention | 2 | No unsaved-changes guard on form close |
| 6 | Recognition Rather Than Recall | 3 | Carousel dot targets below WCAG 2.5.8 |
| 7 | Flexibility and Efficiency | n/a | Portfolio surface |
| 8 | Aesthetic and Minimalist Design | 3 | Clean but excessively long; dead code adds noise |
| 9 | Error Recovery | 2 | "No se pudo enviar" is vague, no inline retry |
| 10 | Help and Documentation | n/a | Portfolio surface |
| Total | 22/32 | Acceptable (68.75%) |

Design Specificity Verdict

The portfolio is distinctly John's — Spanish copy, Colombian context, full-stack positioning, and orange-red on dark theme create recognizable personal brand. The AvailabilityBadge is a genuine differentiator. But the underlying IA follows a near-ubiquitous developer portfolio template: sticky nav → hero → tech grid → carousel → services → timeline → education → badges → footer. Dead components (CardProject, ButtonNav, Inspiration) and unused CSS gradient classes suggest design drift from an earlier iteration. The gradient-text finding on the decorative project counter (Projects.tsx:100) is a mild false positive — the gradient is intentionally subtle on a decorative number.

Overall Impression

Strong raw material with clear personal brand, but let down by two auto-playing carousels that contradict the recruiter-first principle, a single-entry timeline that undersells experience breadth, and zero scroll-position feedback on a very long page. The biggest opportunity: replace the project carousel with a scannable static grid.

What's Working

1. AvailabilityBadge — brilliant detail. Bounce+pulse animation and clear copy instantly signals hire-readiness.
2. TechStack grouping — 13+ technologies into 4 labeled categories with color-coded accents. Scannable without overwhelming.
3. ContactModal architecture — 4 states (idle/sending/success/error), Escape dismiss, backdrop click, auto-focus, fallback email.

Priority Issues

[P0] Auto-playing carousels with no user pause control: Projects (7s) and Badge (8s) auto-slide. No pause button, stop, or speed control. WCAG 2.2.2 violation. Recruiters reading project descriptions lose context every 7 seconds. Fix: add pause-on-hover + visible pause toggle. ($impeccable animate)

[P1] No scroll-position feedback on 8-section page: No active nav tracking, no scroll progress, no back-to-top. Users disoriented in a 4000px+ page. Fix: IntersectionObserver on section IDs, scroll-progress bar, back-to-top FAB. ($impeccable layout)

[P1] Single-employer timeline with verbose walls of text: 1 employer, 5 dense bullets (30+ words). Timeline visual implies multiple entries. No bold keywords or metrics. Fix: trim to 3 bullets, callout card format, bold keywords. ($impeccable distill)

[P2] No skip-to-content or keyboard navigation: No skip link, no arrow-key carousel nav, no 'view all' grid. Keyboard users tab through entire navbar. Fix: skip-to-content anchor, ArrowLeft/Right on carousels. ($impeccable adapt)

[P3] Dead code: 3 components + 3 CSS classes unused: CardProject.tsx, ButtonNav.tsx, Inspiration.tsx imported nowhere. .bg-back/bg-back-inv/bg-lineal unreferenced. ButtonNav has event listener leak. Fix: delete unused files and CSS. ($impeccable harden)

Persona Red Flags

Jordan (First-Time Recruiter): Auto-sliding projects force 7s inspection window. Single employer may look like limited experience. No resume PDF. Walls of text with zero scannability.

Sam (Accessibility-Dependent): Auto-play carousels violate WCAG 2.2.2. Dot indicators ~4x5px below WCAG 2.5.8. No skip-to-content link. No custom focus-visible styles.

Casey (Mobile User): 8 expanded sections = 30+ swipes. 16:10 carousel images = heavy GPU cost. Carousel arrows barely in thumb zone.

Minor Observations

- ButtonNav.tsx:18 has addEventListener leak (no matching removeEventListener)
- globals.css sets both background and background-color on body (lines 33-34)
- Primary button uses opacity-90 hover instead of --color-primary-hover (#e63e21)
- ContactModal uses border-based CSS spinner instead of SVG icon
- No visible resume PDF download link

Questions to Consider
1. What evidence supports the auto-playing carousel increasing engagement over a user-paced static grid?
2. Why does the single-employer timeline lack a summary line, metrics, or bold keywords for 5-second scanning?
3. Are the three dead components intentional debt or artifacts to clean up?
