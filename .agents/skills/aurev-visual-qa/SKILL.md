---
name: aurev-visual-qa
description: Procedures for visual testing, responsive verification across desktop/tablet/mobile, and screenshot inspection.
---

# AUREV Visual QA Skill

Use this skill to visually verify routes, layouts, typography, and responsive breakpoints after implementation.

## Verification Protocol
1. **Breakpoints to Inspect**:
   - Desktop (1440px x 900px): Verify maximum container alignment (`max-w-7xl`), multi-column card grids, horizontal navigation.
   - Laptop (1024px x 768px): Verify grid wrap and spacing comfort.
   - Tablet (768px x 1024px): Verify 2-column transitions and tablet navigation behavior.
   - Mobile (375px x 812px): Verify zero horizontal overflow, drawer menu, legible body text, and single-column cards.
2. **Visual Checklist**:
   - [ ] No clipped headings or broken word breaks.
   - [ ] No overlapping text or cards.
   - [ ] Status badges are clearly legible with distinct contrast.
   - [ ] Image and fallback placeholders render with correct aspect ratios without layout shift.
   - [ ] Active route indicator correctly highlights the current page.
   - [ ] Interactive hover and focus states trigger smoothly.
3. **Screenshot Protocol**:
   - Capture full-page or section screenshots across routes (`/`, `/projects`, `/projects/[slug]`, `/products`, `/team`, `/contact`).
   - Review screenshots directly to spot micro-misalignments before marking tasks as complete.
