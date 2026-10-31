# Accessibility Rules (a11y)

## 1. Compliance Standard: WCAG 2.1 AA
- **Color Contrast**: Minimum contrast ratio of 4.5:1 for normal body text and 3:1 for large text (18pt+ or 14pt bold). Deep Navy `#10243A` and Charcoal `#20252D` on Warm White `#FAFAF8` exceed 10:1.
- **Focus Rings**: Never remove `outline: none` without providing a distinct visible focus ring (e.g., `focus-visible:ring-2 focus-visible:ring-[#2457D6] focus-visible:ring-offset-2`).
- **Semantic HTML**:
  - Exactly one `<h1>` per page.
  - Strict hierarchical heading order (`h1` -> `h2` -> `h3`); never skip levels for styling.
  - Correct Landmark regions: `<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`, `<section aria-labelledby="...">`.

## 2. Interactive Components
- Buttons must use `<button>`, links must use `<a>` or Next.js `<Link>`. Never put `onClick` handlers on generic `<div>` or `<span>` without proper ARIA roles and keyboard listeners (`Enter`, `Space`).
- Accessible Dialogs / Modals / Mobile Menus:
  - Manage focus with initial focus and focus trap.
  - Close on `Escape` key press.
  - Proper `aria-expanded`, `aria-controls`, and `aria-label` attributes.
- Image Alt Text: All informative images must have descriptive `alt` text. Decorative visuals must have `alt=""` or `aria-hidden="true"`.

## 3. Motion Accessibility
- Provide complete graceful fallback when `@media (prefers-reduced-motion: reduce)` is active: instant opacity transitions or zero movement.
