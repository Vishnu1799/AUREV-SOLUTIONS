---
name: aurev-performance
description: Guides runtime and build-time optimization for low and mid-range devices (Dell Vostro class).
---

# AUREV Performance Optimization Skill

Use this skill to optimize asset delivery, bundle size, Core Web Vitals, and runtime memory.

## Optimization Guidelines
1. **Server-First Architecture**:
   - Default all pages and layout components to React Server Components (RSC).
   - Only use `"use client"` for components requiring React hooks (`useState`, `useEffect`, `usePathname`).
2. **Font & Asset Delivery**:
   - Preload Google Fonts via `next/font/google` with `display: 'swap'`.
   - Never load large uncompressed image files.
   - Use `next/image` with responsive `sizes` attributes and `priority` only for above-the-fold hero imagery.
3. **GPU & Memory Protection**:
   - Do not load heavy 3D WebGL scenes that continuously render unpaused in the background.
   - Pause any canvas or animation loops when the element is off-screen using `IntersectionObserver`.
   - Keep total client bundle under 150KB for the initial page load.
