# UI/UX Implementation Rules

## 1. Aesthetic Hierarchy & Editorial Layout
- Emulate the rigor of world-class design engineering: clean grids, generous breathing room, structured metadata, precise typography hierarchy.
- **Headings**: Manrope (700/600/500 weight). Confident and architectural.
- **Body**: Inter (400/500 weight). Optimal line height (1.5-1.65), max readable line length (`max-w-prose` or ~65 characters).
- **Technical Specs & Codes**: JetBrains Mono. Used selectively for IDs, metrics, tags, and status codes.

## 2. Layout Structure & Spacing
- Use an 8-point baseline grid (`gap-4`, `gap-6`, `gap-8`, `gap-12`, `p-6`, `p-8`, `py-16`, `py-24`).
- Maintain consistent outer containers: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Section transitions must be organic and structured; avoid jarring background shifts.

## 3. Interaction & Motion Standards
- Animation must be purposeful, informing the user about spatial relationships and state changes.
- Page entrances: Staggered subtle opacity and Y-translation (`y: 12 -> 0, opacity: 0 -> 1`).
- Duration: 200ms–400ms. Easing: standard ease-out (`[0.16, 1, 0.3, 1]`).
- Do not apply motion to everything. Static layouts should still feel crisp and complete without animations.
- Always provide reduced-motion alternatives via `motion` `useReducedMotion()` or CSS `@media (prefers-reduced-motion: reduce)`.
