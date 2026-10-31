# Performance & Resource Efficiency Rules

## 1. Hardware Awareness (Dell Vostro / Real Device Optimization)
- Avoid unthrottled WebGL/Three.js loops or high-polygon scenes that cause fan spin or thermal throttling on integrated GPUs.
- Prefer CSS transforms, hardware-accelerated SVG compositions, and lightweight canvas effects over heavy 3D rendering.
- If a 3D visual is introduced in the hero, it must:
  - Be loaded dynamically with `next/dynamic` and `ssr: false`.
  - Pause rendering when off-screen via `IntersectionObserver`.
  - Provide a high-fidelity static SVG/CSS fallback.

## 2. Core Web Vitals & Asset Delivery
- **LCP (Largest Contentful Paint)**: Prioritize hero typography and critical CSS. Preload primary heading fonts via `next/font`.
- **CLS (Cumulative Layout Shift)**: Always specify `width` and `height` or aspect-ratio on images and placeholders. Reserve container space for dynamic content.
- **FID / INP**: Keep main-thread JavaScript lean. Default to React Server Components (RSC). Only ship client bundles for components requiring user interaction or client state.
- **Images**: Use `next/image` with modern formats (`webp`, `avif`), responsive `sizes`, and proper priority flags for hero media.
