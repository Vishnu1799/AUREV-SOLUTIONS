# Project Content Accuracy Rules

## 1. Absolute Truth in Status Classification
Every project on AUREV SOLUTIONS must be tagged with exactly one verified status from this taxonomy:
1. `Commercially Delivered`: Only for projects delivered and paid for (e.g., Temple Finance Tracker).
2. `Developed`: Fully developed software whose external deployment is pending or unconfirmed.
3. `Working Prototype`: Functional prototypes demonstrated in competitions or labs (e.g., NIVORA, AUREV AI Payment Recovery).
4. `In Development`: Active codebase work in progress.
5. `Design / Demonstration`: Physical or mechanical concepts demonstrated at events (e.g., NEOCHILL).
6. `Concept`: Architectural, IoT, or system concepts awaiting fabrication/testing (e.g., ARCTIC-MESH, Smart AI Sanitation System, BHARATPLAY).
7. `Internal Review / Unconfirmed`: NOT visible on public pages.

## 2. Specific Project Guardrails
- **Temple Finance Tracker**: State exact invoice details (Invoice #2894, ₹15,000, delivered Jan 24, 2026 for temple clients in Aruppukkottai & Peraiyur). Do not fabricate tech stack or extra features.
- **Personal Finance Manager**: Keep in internal registry ONLY (`status: 'Internal Review'`). Do not display on `/projects` or `/products`.
- **NIVORA**: Customer-facing grocery ordering prototype for HACKSPRINT'26. Do not claim live banking integration.
- **AUREV AI Payment Recovery**: Backend verification engine. Core thesis: *"Never retry a payment blindly. Verify the previous transaction before initiating another payment attempt."* Do not claim AI moves real money.
- **AUREV AI Personal Assistant**: Keep strictly labelled as "Concept & Planned Development".
- **NEOCHILL**: Zero-electricity produce cooler container for street vendors (PSNA CET, Young Innovators Kickstart 2026). Do not invent award wording.
- **ARCTIC-MESH**: Sustainable produce storage concept made of High-Density Polyethylene (HDPE). Never describe as aluminium. Keep distinct from NEOCHILL.
- **Smart AI Sanitation System**: Proposed IoT architecture (ESP32, gas/water sensors). State ₹2 lakh as an engineering estimate, not a deployed contract.
- **College Feedback Portal**: Department application with requested improvements. Never claim unverified features are completed or expose confidential student data.

## 3. Separation of Implemented vs Planned Features
In all case studies, explicitly distinguish:
- **Verified / Implemented Features**
- **Planned / Conceptual Architecture**
Never blur these two categories.
