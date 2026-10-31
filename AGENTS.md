# AUREV SOLUTIONS — Master Agent Directives & Rules (AGENTS.md)

This document defines the permanent, non-negotiable rules and architectural standards for the development of the **AUREV SOLUTIONS** digital platform. Every coding agent, subagent, and human contributor must strictly adhere to these rules without deviation.

---

## 1. Identity & Non-Negotiable Content Truths

1. **Organization Definition**: AUREV SOLUTIONS is a **founder-led technology and innovation initiative**, led by Founder & CTO **Vishnu Prashanth S.**
2. **Legal & Physical Reality**:
   - AUREV SOLUTIONS is **not** confirmed as a legally incorporated company. Do **NOT** refer to it as an enterprise, registered corporation, or incorporated entity.
   - Do **NOT** invent or imply physical infrastructure: no corporate headquarters, offices, laboratory complexes, R&D campuses, server rooms, or manufacturing plants.
   - Do **NOT** generate or display AI-generated human portraits as team members or fictional facility photographs.
   - Show technology and products actually engineered, not facilities that do not exist.
3. **Core Team Registry**:
   - **Vishnu Prashanth S**: Founder & Chief Technology Officer (CTO)
   - **Sanjitha A**: Chief Innovation Officer (CIO)
   - **Nithiga S**: Chief Strategy & Product Innovation Officer (CSO)
   - Designations are proposed internal leadership designations. Do not fabricate degrees, past employment history, or unverified achievements.
   - Team contributions are project-specific; never assume every member worked on every project.

---

## 2. Project & Product Registry & Truthfulness

Every project must strictly maintain its verified status:
- **PROJECT 01 — Temple Finance Tracker**: Commercially Delivered. ₹15,000, Invoice #2894 (Jan 24, 2026), clients associated with Aruppukkottai & Peraiyur. Do not invent transaction volumes or tech stack.
- **PROJECT 02 — Customer Relationship & Payment Tracking System**: Developed Application (deployment status unconfirmed). Do not claim confirmed commercial deployment.
- **PROJECT 03 — Personal Finance Manager**: **UNCONFIRMED / INTERNAL ONLY**. Do **NOT** publish to the public website, navigation, or featured showcase until confirmed by the owner.
- **PROJECT 04 — College Feedback Management Portal**: Existing department application with development improvements. Never claim unverified improvements are implemented; never expose sensitive student or institutional data.
- **PROJECT 05 — NIVORA**: Working prototype grocery ordering platform (HACKSPRINT'26, Velammal College). Do not claim live banking or production payment processing.
- **PROJECT 06 — AUREV AI Payment Recovery**: Backend payment failure verification prototype. Core principle: *"Never retry a payment blindly. Verify the previous transaction before initiating another payment attempt."* Never claim AI controls live bank funds.
- **PROJECT 07 — AUREV AI Personal Assistant**: Concept and planned development (separate from NIVORA). Label all unimplemented capabilities as planned.
- **PROJECT 08 — NEOCHILL**: Zero-electricity produce cooling container for street vendors. Design, engineering drawings, presentation & demonstration only (Young Innovators Kickstart 2026, PSNA CET). Do not invent an award title or display fictional prototype photos.
- **PROJECT 09 — ARCTIC-MESH**: Sustainable produce storage concept (HDPE material). Do not combine with NEOCHILL. Do not claim aluminium construction.
- **PROJECT 10 — Smart AI Sanitation System**: Proposed IoT/hardware architecture (ESP32, gas/water sensors, automated pumps). Estimated cost reference (~₹2 lakh) is an earlier estimate, not a deployed quote. Do not claim deployed status.
- **PROJECT 11 — BHARATPLAY**: Cultural gaming concept (Smart India Hackathon 2026, Problem Statement 26208). Label proposed features truthfully.

---

## 3. UI/UX & Visual Design Rules

- **Design Philosophy**: Premium Minimal Technology. Editorial, architectural, high-contrast, uncluttered.
- **Colour Palette**:
  - Deep Navy (Primary brand): `#10243A`
  - Corporate Blue (Accent): `#2457D6`
  - Warm White (Primary surface): `#FAFAF8`
  - Light Grey (Secondary surface): `#F0F2F5`
  - Charcoal (Text): `#20252D`
  - Muted Blue (Borders / subtext): `#8DA8CC`
  - Surface hierarchy: Clean white and light grey must dominate; deep navy is reserved for intentional high-contrast structural accents. No neon, no random gradients, no heavy glassmorphism.
- **Typography Hierarchy**:
  - Headings: `Manrope` (distinctive, confident, architectural)
  - Body: `Inter` (neutral, legible, comfortable)
  - Monospace / Technical labels: `JetBrains Mono` (sparingly for metrics, tags, IDs)
- **Components & Layout**:
  - Generous whitespace, disciplined 8pt grid, controlled maximum content widths (`max-w-7xl`).
  - Strict absence of generic AI tropes: no floating robot heads, no glowing neural networks, no matrix digital rain, no cyberpunk themes.

---

## 4. Technical Architecture & Code Standards

- **Core Framework**: Next.js App Router (15.x / 16.x), React 19.x, TypeScript (strict mode enabled).
- **Styling**: Tailwind CSS, CSS variables for theme tokens.
- **Motion**: Motion for React (`framer-motion` / `motion`). Every animation must support `prefers-reduced-motion: reduce`.
- **Icons**: Lucide React.
- **Validation**: Zod for typed schemas.
- **State & Architecture**:
  - Server Components by default; Client Components (`"use client"`) only where genuine interactivity is required.
  - Zero mock submissions for contact forms — use `mailto:` or real validated endpoints.
  - Clean separation of typed data (`/data/projects.ts`, `/data/team.ts`, `/data/products.ts`).

---

## 5. Quality Assurance & Testing Standards

- Every route must render cleanly without hydration mismatch or console errors.
- Target zero accessibility violations (WCAG 2.1 AA compliant, proper ARIA attributes, semantic headings, visible focus outlines).
- Responsive testing at Desktop (1440px), Laptop (1024px), Tablet (768px), and Mobile (375px).
- Respect Dell Vostro hardware constraints: zero heavy unoptimized 3D or runaway WebGL loops; prioritize fast, smooth rendering.

---

## 6. Modular Rules & Skills Reference

Before executing any phase, consult:
- Modular Rules in `.agents/rules/`
- Reusable Agent Skills in `.agents/skills/`
