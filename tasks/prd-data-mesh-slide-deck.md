# Product Requirements Document: Data Mesh Slide Deck Landing Page

**Feature:** Interactive Slide Deck Landing Page for the NOAA Fisheries Data Mesh White Paper  
**Date:** June 8, 2026  
**Status:** Updated

---

## 1. Introduction / Overview

This project is the development of an interactive, single-page slide deck built with **Next.js** and **Tailwind CSS** that transforms the academic white paper _"An Architectural Approach to Cross-Domain Data Interoperability at NOAA Fisheries"_ into a visually compelling presentation. Each "slide" occupies the full viewport. The experience functions as both a presentation tool and a landing page for the white paper's concepts.

The slide deck serves as a comprehensive concept-level walkthrough of the white paper, explaining data mesh principles, the NOAA Fisheries context, GCP implementation specifics, migration strategy, tradeoffs, and future directions — all grounded in Georgetown University's brand colors.

**Primary Goal:** Allow viewers (technical stakeholders, decision-makers, academics) to understand the white paper's key concepts and arguments without reading the full 100+ page document.

---

## 2. Goals

| # | Objective | Measurement |
|---|-----------|-------------|
| G1 | Present all major white paper sections in a logical, scannable narrative | 24 slides organized in 3 acts covering Sections 1-9 |
| G2 | Create a visually polished aesthetic using Georgetown's brand palette | Consistent use of Blue (#011E41), Gray (#63666A), Gold (#F4B942), Teal (#14B8A6) accents across all slides |
| G3 | Provide intuitive navigation with section-aware top bar and directional slide arrows | Users can jump to sections, see current slide position, and navigate forward/backward |
| G4 | Ensure the experience is fully responsive across desktop, tablet, and mobile | Each slide adapts layout, typography, and spacing for all viewport sizes |
| G5 | Establish a reusable design system that can be extended to future slides | Design tokens and Tailwind configuration that enforces visual consistency |

---

## 3. User Stories

- **As a fisheries scientist**, I want to quickly grasp how data mesh applies to NOAA Fisheries so I can understand the proposed architecture without reading the full paper.
- **As an IT decision-maker**, I want to see the GCP-specific implementation details and migration strategy so I can evaluate feasibility.
- **As a conference attendee**, I want to navigate through slides at my own pace so I can focus on sections most relevant to my interests.
- **As a mobile user**, I want to read the presentation on my phone or tablet so I can review it on the go.
- **As a presenter**, I want a polished, professional slide experience I can share via URL.

---

## 4. Functional Requirements

### FR-1: Slide Structure
1. The application must render each conceptual section of the white paper as a discrete "slide."
2. Each slide must fill 100% of the viewport height (`100vh` / `h-screen`).
3. The slide deck must contain exactly 24 slides organized across three acts:

**Master Presentation Outline**

| Act | Slides | Focus |
|-----|--------|-------|
| **Act I: The Context & The Crisis** | 1–7 | Problem, research questions, EM case study, data landscape, fragmentation, legal mandates |
| **Act II: Architectural Foundations & Reference Design** | 8–18 | Big data evolution, theoretical foundations, 4 principles, domain decomposition, EM architecture, GCP landing zone, FinOps, governance, NIST, cloud estate, resource hierarchy |
| **Act III: Execution & Strategy** | 19–24 | Migration strategy, legacy displacement, change management, tradeoffs, enterprise scaling, AI/ML + public access futures |

| Slide # | Act | Title | White Paper Section |
|---------|-----|-------|---------------------|
| 1 | I | Title Slide | — |
| 2 | I | The Core Problem Statement | 1.1 |
| 3 | I | Research Questions & Scope | 1.2–1.3 |
| 4 | I | Case Study Target: Commercial Fishing Electronic Monitoring | 1.4 |
| 5 | I | The Fishery Data Landscape | 2.1 |
| 6 | I | Architectural Fragmentation | 2.2 |
| 7 | I | Legal and Regulatory Mandates | 2.3 |
| 8 | II | Evolution of Big Data Architectures | 3.1–3.3 |
| 9 | II | The Theoretical Blueprint | 3.4 |
| 10 | II | The Four Interdependent Principles | 4.0 |
| 11 | II | NOAA Fisheries Domain Decomposition | 5.1 |
| 12 | II | Data as a Product: The EM Architecture | 5.2 |
| 13 | II | The Self-Serve GCP Landing Zone | 5.3 |
| 14 | II | FinOps: Cost Attribution Engine | 5.3 |
| 15 | II | Federated Computational Governance | 5.4 |
| 16 | II | NIST SP 800-53 Control Inheritance | 5.4 |
| 17 | II | The Broader Cloud Estate | 5.6 |
| 18 | II | Recommended Resource Hierarchy | 5.6 |
| 19 | III | The Evolutionary Migration Strategy | 6.1 |
| 20 | III | Legacy Displacement Mechanics | 6.2 |
| 21 | III | Organizational Capabilities & Change Management | 6.3–6.4 |
| 22 | III | High-Stakes Tradeoffs and Risks | 7.0 |
| 23 | III | Scaling Beyond the Line Office Boundary | 8.0 |
| 24 | III | Strategic Horizons: AI/ML & Public Access | 9.3–9.4 |

### FR-2: Top Navigation Bar
4. The application must display a sticky top navigation bar visible on all slides.
5. The top nav must include section anchor links. Minimum anchor labels: **Problem**, **Architecture**, **Migration**, **Future**.
6. The top nav must display a slide progress indicator showing current slide number and total slides (e.g., "12 / 24").
7. The top nav must include a Gold→Teal gradient progress bar that fills proportionally.
8. The active section in the nav must be visually highlighted with Teal background.
9. The top nav must include a Content dropdown listing all slide titles for direct navigation.

### FR-3: Slide Navigation Mechanism
10. The application must render visually styled up (↑) and down (↓) arrow buttons at the bottom of each slide.
11. On the **first slide**, only the down arrow must be shown.
12. On the **last slide**, only the up arrow must be shown.
13. On all intermediate slides, both up and down arrows must be visible.
14. The up arrow uses Teal background with Teal glow; the down arrow uses dimmed Gold with Gold glow.
15. User scrolling must advance slides using CSS scroll-snap behavior.
16. Keyboard arrow keys (Up/Down, Left/Right) must navigate between slides.

### FR-4: Responsive Behavior
17. Each slide must use responsive Tailwind utility classes for reflow and scaling.
18. On viewports below `768px`, slides maintain full-viewport height with `overflow-y-auto`. Content stacks vertically.
19. Typography scales: headings are large on desktop, smaller but prominent on mobile.
20. Arrow buttons remain tappable on touch devices (minimum 44×44px touch target).

### FR-5: Design System
21. The project must implement a Tailwind CSS design system using these Georgetown color tokens:

| Token Name | Hex Code | Usage |
|------------|----------|-------|
| `georgetown-blue` | `#011E41` | Headlines, diagram borders, emphasis |
| `georgetown-gray` | `#63666A` | Body text, muted elements |
| `georgetown-gold` | `#F4B942` | Arrows, section labels, accents, highlights |
| `georgetown-teal` | `#14B8A6` | Callouts, active nav, gradient endpoints |
| `georgetown-cool-gray` | `#A0A0A5` | Dividers, backgrounds, inactive states |
| `georgetown-off-white` | `#F5F5F0` | Subtle backgrounds |

22. Fonts: Roboto for headings (`--font-display`), Inter for body (`--font-sans`), loaded via `next/font/google`.
23. Cards: `default` variant (Blue border, shadow-lg, rounded-xl) and `risk` variant (rose-red left accent).
24. Common slide layout patterns include: Centered, Two-Column, Card Grid (2×2, 3×2), Timeline, Comparison Split.

### FR-6: Technical Stack
25. Next.js App Router (`app/` directory), Tailwind CSS v4, TypeScript.
26. Slide content data stored in `data/slides.ts` — separated from presentation.
27. Diagram components use HTML + CSS (Tailwind) + thin SVG overlays for arrows/connections.
28. `npm run build` must succeed with zero errors.

---

## 5. Non-Goals (Out of Scope)

- No interactive charts — static HTML/CSS/SVG diagrams only.
- No PDF export or print stylesheet.
- No authentication, comments, backend, or database.
- No auto-play functionality.
- No animations beyond smooth scrolling and subtle fade-in effects.

---

## 6. Design Considerations

### 6.1 Visual Language
- **Backgrounds:** All slides use white backgrounds. Georgetown colors are used as accents/pops.
- **Color Usage (Accents on White):**
  - Georgetown Blue (`#011E41`) — Headlines, diagram borders, primary text emphasis
  - Georgetown Gray (`#63666A`) — Body text, borders, muted elements
  - Georgetown Gold (`#F4B942`) — Section labels, accent lines, arrow buttons, key statistics
  - Georgetown Teal (`#14B8A6`) — Callout boxes, active nav, gradient endpoints, connecting lines
  - Georgetown Cool Gray (`#A0A0A5`) — Subtle backgrounds, dividers, inactive states
- **Typography:** Roboto for all headlines, Inter for body text. Headings at 2xl-4xl on desktop. Body at base-lg.

### 6.2 Slide Layout Patterns
- **Centered:** Vertically and horizontally centered content. Used for Title Slide.
- **Two-Column (50/50):** Text left, visual/diagram right. Responsive — stacks on mobile.
- **Card Grid:** 2×2, 3×2, or 3×3 card layout for enumerating items.
- **Timeline/Flow:** Horizontal or vertical progression.
- **Comparison Split:** Two panels side-by-side showing contrasting models.
- **Hub-and-Spoke:** Central node with surrounding satellite elements.
- **Three-Column:** Three side-by-side columns for contrasting concepts.
- **Quadrant:** 2×2 grid with central hub, for interrelated concepts.
- **Three-Panel Flow:** Sequential before/during/after panels.
- **Vertical Stack with Arrows:** Cascading policy or process flow.

### 6.3 Diagram Philosophy
- Each diagram is a self-contained React component built with HTML + CSS (Tailwind) + thin SVG line overlays.
- Color-coded to Georgetown palette. Blue = domains/platform. Gold = data products/accents. Teal = callouts/connections. Violet = governance. Cool Gray = reference/neutral. Rose = risks/legacy.
- Diagrams are simplified, presentation-friendly versions of the white paper's figures — bolder, cleaner, fewer labels.
- SVG lines redraw on window resize.

---

## 6A. Slide-by-Slide Content & Layout Guide (New — 24 Slides, 3 Acts)

### Act I: The Context & The Crisis (Slides 1–7)

**Slide 1: Title Slide** — COMPLETE
- Layout: Centered. Hero image (school of skipjack tuna, floating animation + teal glow), title, subtitle, gradient divider, author line, avatar.
- Diagram: None.

**Slide 2: The Core Problem Statement (Section 1.1)**
- Summary: Translating the structural architecture problem into a mission problem. Decades of programmatic autonomy have siloed analytical data, delaying resource management decisions, multiplying compliance costs, and degrading public confidence.
- Layout: Two-Column (50/50). Left: Text explaining the structural core of the problem. Right: Visual/diagram.
- Diagram: Fragmented data sources visualization (TBD).

**Slide 3: Research Questions & Scope (Sections 1.2–1.3)**
- Summary: Five core research questions (RQ1–RQ5), bounded within NOAA Fisheries' six regions, six science centers, and eight Regional Fishery Management Councils.
- Layout: Card Grid (3×3). 5 RQ cards + scope boundary card.
- Diagram: None.

**Slide 4: Case Study Target: Commercial Fishing Electronic Monitoring (Section 1.4)**
- Summary: Introduction of the running EM case study. EM collects video, sensors, and metadata; spans multiple producers and consumers; governed by strict MSA confidentiality and multi-staged federal retention schedule.
- Layout: Two-Column. Left: High-level EM summary. Right: Horizontal chevron timeline showing 3-stage retention lifecycle (Ingestion/Validation → Active Publication → Archival/Destruction).
- Diagram: Chevron timeline (3 stages).

**Slide 5: The Fishery Data Landscape (Section 2.1)**
- Summary: Fishery data as the direct evidentiary foundation for regulatory decisions with binding legal effects (Annual Catch Limits, area closures).
- Layout: Hub-and-spoke diagram. Central hub: "Legally Binding Fishery Management Decision." Surrounding cards: Fishery-Dependent data and Fishery-Independent data categories.
- Diagram: Hub-and-spoke.

**Slide 6: Architectural Fragmentation (Section 2.2)**
- Summary: Analyzing the cost of uncoordinated systems. Regional databases, incompatible schemas, multi-cloud sprawl, duplicated ML models.
- Layout: Based on paper Figure 1. Central "ML Scientist" node attempting to build a species ID model. Surrounding regional database nodes with broken/fragmented connection lines (Fragile, Blocked, Uncertain, None).
- Diagram: Fragmentation radial — adapted from Figure 1 / 9b.

**Slide 7: Legal and Regulatory Mandates (Section 2.3)**
- Summary: Bidirectional tension between open public access mandates (OPEN Government Data Act, Evidence Act) and statutory confidentiality (MSA sec. 402(b) & 403(c)), within NIST SP 800-53 security perimeters.
- Layout: Three-Column. Col 1: "The Mandate for Openness." Col 2: "The Mandate for Confidentiality." Col 3: "The Compliance Enforcer" (NIST RMF).
- Diagram: None.

### Act II: Architectural Foundations & Reference Design (Slides 8–18)

**Slide 8: Evolution of Big Data Architectures (Sections 3.1–3.3)**
- Summary: Tracing the transition from Data Warehouse (1990s, schema-on-write, bottleneck) → Data Lake (2010s, schema-on-read, data swamps) → Data Mesh (2020s, decentralized domain-driven, product thinking, automated policy enforcement).
- Layout: Three-stage horizontal progression flow.
- Diagram: None.

**Slide 9: The Theoretical Blueprint (Section 3.4)**
- Summary: Conway's Law (architectures copy organizational structures), Parnas decomposition (isolating change behind stable contracts), and Evans's Domain-Driven Design bounded contexts.
- Layout: Three vertical pillars side-by-side (Conway, Parnas, DDD).
- Diagram: None.

**Slide 10: The Four Interdependent Principles (Section 4.0)**
- Summary: The four data mesh principles form a self-reinforcing system. Any single principle fails without the enablement of the other three.
- Layout: Quadrant with central "Interoperable Mesh" hub. Q1: Domain Ownership. Q2: Data as a Product. Q3: Self-Serve Platform. Q4: Federated Computational Governance.
- Diagram: Quadrant hub diagram — adapted from Figure 11.

**Slide 11: NOAA Fisheries Domain Decomposition (Section 5.1)**
- Summary: 8 functional domains based on MSA statutory mandates. Region is a metadata dimension, not an ownership boundary.
- Layout: Top block (Fishery Monitoring = Producer Domain). Middle: 3 consumer cards (Stock Assessment, Protected Species, Enforcement). Bottom: Cross-Cutting Reference Data.
- Diagram: Domain decomposition map — adapted from Figure 2.

**Slide 12: Data as a Product: The EM Architecture (Section 5.2)**
- Summary: Anatomical components of the EM data product. Shift from ad-hoc extraction to contractual reliability using BigQuery tables and Cloud Storage tiers.
- Layout: Three horizontal layers (Storage, Interface, Governance) — adapted from Figure 4.
- Diagram: EM data product anatomy — adapted from Figure 4.

**Slide 13: The Self-Serve GCP Landing Zone (Section 5.3)**
- Summary: GCP landing zone architecture. Isolated domain projects under folder perimeters, Shared VPC networking, CMEK encryption, automated Terraform templates.
- Layout: Multi-column resource hierarchy — adapted from Figures 6 and 7.
- Diagram: GCP Landing Zone — adapted from Figures 6/7.

**Slide 14: FinOps: Cost Attribution Engine (Section 5.3)**
- Summary: Navigating federal funding fragmentation. Centralized budgets fund platform capital services; variable domain usage is cost-recovered via automated resource labeling.
- Layout: Split horizontal. Top: Centralized funding block. Bottom: Fan-out flow showing labeled resources routing billing to regional Financial Management Centers.
- Diagram: FinOps flow.

**Slide 15: Federated Computational Governance (Section 5.4)**
- Summary: Cross-domain Council defines global standards encoded as executable platform policies (Terraform guardrails, Dataplex rules), eliminating manual approval bottlenecks.
- Layout: Vertical cascading sequence. Step 1: Global Policies. Step 2: Domain Policies. Step 3: Product Policies. Callout box: code snippet (GCP IAM Custom Role).
- Diagram: Three-tier governance cascade.

**Slide 16: NIST SP 800-53 Control Inheritance (Section 5.4)**
- Summary: Three-tier control inheritance enabling continuous authorization. ~60-70% of NIST controls are inherited from the platform, shifting the compliance burden from domain scientists.
- Layout: Three stacked layers — adapted from Figure 9. Top: System-Specific Controls. Middle: Platform ATO Hybrid Controls (6 controls). Bottom: FedRAMP Common Controls.
- Diagram: NIST control inheritance — adapted from Figure 9.

**Slide 17: The Broader Cloud Estate (Section 5.6)**
- Summary: Taxonomy for non-mesh workloads: transactional sources, software apps, data pipelines, scientific computing, HPC & AI/ML training systems.
- Layout: 5-column horizontal card layout, one per workload type.
- Diagram: None (card taxonomy).

**Slide 18: Recommended Resource Hierarchy (Section 5.6)**
- Summary: Side-by-side comparison of Domain-Coupled vs. Domain-Separated resource designs. Paper recommends Domain-Separated as optimal for NOAA Fisheries.
- Layout: Comparison Split. Left: Domain-Coupled (with red PII risks annotation). Right: Domain-Separated (with green optimal annotation) — adapted from Figures 11 and 12.
- Diagram: Domain-Coupled vs. Domain-Separated — adapted from Figures 11/12.

### Act III: Execution & Strategy (Slides 19–24)

**Slide 19: The Evolutionary Migration Strategy (Section 6.1)**
- Summary: Socio-technical migration roadmap. Technical phases must be preceded by organizational readiness tracks (capability building, change management, governance formation).
- Layout: Two parallel tracks — adapted from Figure 13. Top: Technical Migration timeline. Bottom: Organizational Readiness timeline. Vertical "Enables" arrows.
- Diagram: Migration phases and dependencies — adapted from Figure 13.

**Slide 20: Legacy Displacement Mechanics (Section 6.2)**
- Summary: Software engineering patterns for safely replacing legacy Oracle databases with BigQuery data products without interrupting operational quotas or stock assessments.
- Layout: Three-panel sequential flow — adapted from Figure 15. Panel 1 (Before): ACL → Oracle. Panel 2 (During): ACL splits → Oracle + BigQuery. Panel 3 (After): ACL → BigQuery, Oracle decommissioned.
- Diagram: Migration data flow — adapted from Figure 15.

**Slide 21: Organizational Capabilities & Change Management (Sections 6.3–6.4)**
- Summary: Shifting central IT from gatekeepers to platform enablers, embedding data engineers within scientific domains, constructing communities of practice.
- Layout: Two-Column. Left: Strategic Workstreams (Sponsorship, Engagement, Training). Right: Tactical Resource Shifts (embedded engineer model, DPO stewardship, feedback loop).
- Diagram: None.

**Slide 22: High-Stakes Tradeoffs and Risks (Section 7.0)**
- Summary: Balanced evaluation of data mesh vulnerabilities. Domain agility vs. organizational disruption, upfront platform investments vs. long-term duplicate-cost reduction, danger of uncoordinated fragmentation.
- Layout: Structured 2×3 matrix. Row 1: Risks. Row 2: Corresponding Mitigations.
- Diagram: None (risk matrix).

**Slide 23: Scaling Beyond the Line Office Boundary (Section 8.0)**
- Summary: Limits of the mesh pattern at NOAA enterprise scale. Recommends pragmatic federated approach over monolithic unified mesh, using platform-agnostic data contracts, federated catalogs, and cross-cloud gateways.
- Layout: Hub-and-spoke — adapted from Figure 16. Top: NOAA Line Office nodes. Bottom: 4 federation bridges spanning multi-cloud platforms.
- Diagram: Federated NOAA Enterprise — adapted from Figure 16.

**Slide 24: Strategic Horizons: AI/ML & Public Access (Sections 9.3–9.4)**
- Summary: Using contract-governed data products to feed ML pipelines (automated species ID) and deliver real-time public data (industry quota tracking) via policy-governed BigQuery views.
- Layout: Two-Column. Left: AI/ML pipeline schematic. Right: Public Access — single data product serving internal managers and public fishermen via row-level filters.
- Diagram: AI/ML + Public Access flow.

---

## 6B. Implementation Plan

### Phase 1: Design System Foundation ✅ COMPLETE
- Tailwind v4 with Georgetown color tokens, Roboto + Inter fonts
- globals.css with scroll-snap, gradients, glow effects, float animation
- Design system showcase page at `/design-system`

### Phase 2: Layout Primitives & UI Components ✅ COMPLETE
- `TwoColumn.tsx`, `CardGrid.tsx`, `Centered.tsx`, `Timeline.tsx`
- `Card.tsx` (default + risk variants), `Pill.tsx`, `SectionLabel.tsx`

### Phase 3: Navigation Components ✅ COMPLETE
- `TopNav.tsx` — Logo, centered slide counter, Content dropdown, Georgetown Capstone pill, gradient progress bar
- `SlideArrows.tsx` — Teal up arrow with glow, dimmed Gold down arrow with glow
- `useActiveSlide.ts` — Intersection Observer hook

### Phase 4: Main Page Scaffold ✅ COMPLETE
- `SlideWrapper.tsx`, `page.tsx` with scroll-snap, keyboard nav, Slide 1 rendered

### Phase 5: Slide-by-Slide Build (IN PROGRESS)
Build each slide (2–24) as a complete unit: text content + layout + diagram (if applicable). Slide 1 is complete.

### Phase 6: Final Integration & Deployment
- Verify all 24 slides, responsive testing, `npm run build`, Vercel deployment

---

## 7. Technical Considerations

### 7.1 Current Project Structure
```
data-mesh-slide-deck/
├── app/
│   ├── layout.tsx              # Root layout (Roboto + Inter fonts, metadata)
│   ├── page.tsx                # Main page (scroll container + all slides)
│   ├── globals.css             # Tailwind v4 + custom styles
│   ├── design-system/page.tsx  # Design system showcase
│   └── components/
│       ├── TopNav.tsx
│       ├── SlideArrows.tsx
│       ├── SlideWrapper.tsx
│       ├── layouts/ (TwoColumn, CardGrid, Centered, Timeline)
│       ├── ui/ (Card, Pill, SectionLabel)
│       ├── diagrams/ (FragmentationDiagram.tsx + future diagrams)
│       └── slides/ (future per-slide components)
├── data/slides.ts
├── lib/useActiveSlide.ts
└── package.json
```

### 7.2 Key Dependencies
- `next`, `react`, `react-dom`, `tailwindcss` (v4), `typescript`, `lucide-react`
- Fonts: Roboto + Inter via `next/font/google`

### 7.3 Scroll-Snap Implementation
- CSS `scroll-snap-type: y mandatory` on scroll container
- `scroll-snap-align: start` on each slide, `scroll-behavior: smooth`
- Programmatic navigation: `element.scrollIntoView({ behavior: 'smooth' })`

### 7.4 Active Slide Detection
- Intersection Observer API with 0.5 threshold
- Updates TopNav active section, slide counter, arrow visibility, and Content dropdown current selection

---

## 8. Success Metrics

| Metric | Target |
|--------|--------|
| Total slides | 24 covering all white paper sections |
| Build succeeds | `npm run build` exits with 0 errors |
| Responsive behavior | Slides render correctly at 320px, 768px, 1024px, 1440px |
| Navigation functionality | Scroll-snap, arrows, keyboard nav all advance correctly |
| Design consistency | All slides use Georgetown palette design tokens |

---

## 9. Resolved Questions

1. **Diagram inclusion** ✅ — Yes, simplified diagram components based on white paper figures, built with Tailwind + SVG overlays.
2. **Font selection** ✅ — Roboto (headings) + Inter (body), loaded via `next/font/google`.
3. **Deployment target** ✅ — Vercel.
4. **Slide footer** ✅ — Top nav with Logo + counter + Content dropdown + Georgetown Capstone pill is sufficient.
5. **Color palette** ✅ — Blue `#011E41`, Gray `#63666A`, Gold `#F4B942`, Teal `#14B8A6`, Cool Gray `#A0A0A5`, Off White `#F5F5F0`.