---
name: aurev-accessibility
description: Guides accessibility auditing and WCAG 2.1 AA compliance for AUREV SOLUTIONS.
---

# AUREV Accessibility Auditing Skill

Use this skill to audit routes and components for accessibility compliance.

## Audit Checklist
1. **Semantic HTML**:
   - One `<h1>` per page.
   - Sequential heading order (`h1` -> `h2` -> `h3`).
   - Landmark landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`.
2. **Keyboard Navigation**:
   - All interactive elements must be focusable with `Tab`.
   - Clear visible focus indicator: `focus-visible:ring-2 focus-visible:ring-[#2457D6]`.
   - Mobile menu traps focus when opened and returns focus to toggle button when closed.
   - `Escape` key closes drawers, dialogs, and overlays.
3. **Color Contrast**:
   - Normal text: >= 4.5:1 ratio against background.
   - Large text: >= 3:1 ratio.
   - Test Navy `#10243A` and Charcoal `#20252D` against Warm White `#FAFAF8` and Light Grey `#F0F2F5`.
4. **ARIA & Assistive Tech**:
   - `aria-expanded` on accordion toggles and mobile menu buttons.
   - `aria-current="page"` on active navigation items.
   - `aria-label` on icon-only buttons (search, close, theme, social links).
   - Descriptive `alt` text on images; `aria-hidden="true"` on decorative icons.
5. **Reduced Motion**:
   - Check that `@media (prefers-reduced-motion: reduce)` disables all large translations and transforms.
