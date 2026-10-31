# Security & Code Quality Rules

## 1. Zero Secrets & Data Privacy
- Never expose environment variables, private API keys, or database credentials in client code.
- Never commit private contact numbers or personal information without explicit founder authorization.
- Never hardcode mock analytics or third-party trackers without privacy disclosures.

## 2. Form & Data Integrity
- Do not build fake success simulations for contact forms.
- Use validated `mailto:` interactions or secure API routes verified with Zod schemas.
- Sanitize all text inputs against script injection.

## 3. Code Standards & Architecture
- Strict TypeScript (`"strict": true` in `tsconfig.json`). No `any` types; all project and team entities must use strict interfaces.
- Component architecture: Atomic, decoupled, reusable UI primitives located in `@/components/ui/` and feature blocks in `@/components/sections/`.
- Clean linting with zero unhandled warnings or broken imports.
