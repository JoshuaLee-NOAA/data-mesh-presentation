# Product Requirements Document: Data Mesh Slide Deck Landing Page

**Feature:** Interactive Slide Deck Landing Page for the NOAA Fisheries Data Mesh White Paper  
**Date:** June 7, 2026  
**Status:** Draft

---

## 1. Introduction / Overview

This project is the development of an interactive, single-page slide deck built with **Next.js** and **Tailwind CSS** that transforms the academic white paper _"An Architectural Approach to Cross-Domain Data Interoperability at NOAA Fisheries"_ into a visually compelling, pitch-deck-style presentation. Each "slide" occupies the full viewport and the experience functions as both a presentation tool and a marketing/landing page for the white paper's concepts.

The slide deck serves as a comprehensive concept-level walkthrough of the white paper, explaining data mesh principles, the NOAA Fisheries context, GCP implementation specifics, migration strategy, tradeoffs, and future directions — all grounded in Georgetown University's brand colors to reflect the academic context of the project.

**Primary Goal:** Allow viewers (technical stakeholders, decision-makers, academics) to understand the white paper's key concepts and arguments without reading the full 100+ page document.

---

## 2. Goals

| # | Objective | Measurement |
|---|-----------|-------------|
| G1 | Present all major white paper sections in a logical, scannable narrative | ~20-25 slides covering Sections 1-9 of the paper |
| G2 | Create a visually polished pitch-deck aesthetic using Georgetown's brand palette | Consistent use of Blue (#011E41), Gray (#63666A), Gold, Light Blue accents across all slides |
| G3 | Provide intuitive navigation with section-aware top bar and directional slide arrows | Users can jump to sections, see current slide position, and navigate forward/backward |
| G4 | Ensure the experience is fully responsive across desktop, tablet, and mobile | Each slide adapts layout, typography, and spacing appropriately for all viewport sizes |
| G5 | Establish a reusable design system (colors, typography, spacing, components) that can be extended to future slides | Design tokens and Tailwind configuration that enforces visual consistency |

---

## 3. User Stories

- **As a fisheries scientist**, I want to quickly grasp how data mesh applies to NOAA Fisheries so I can understand the proposed architecture without reading the full paper.
- **As an IT decision-maker**, I want to see the GCP-specific implementation details and migration strategy so I can evaluate feasibility.
- **As a conference attendee**, I want to navigate through slides at my own pace so I can focus on sections most relevant to my interests.
- **As a mobile user**, I want to read the presentation on my phone or tablet so I can review it on the go.
- **As a presenter**, I want a polished, professional slide experience I can share via URL so recipients are impressed by the visual quality.

---

## 4. Functional Requirements

### FR-1: Slide Structure
1. The application must render each conceptual section of the white paper as a discrete "slide."
2. Each slide must fill 100% of the viewport height (`100vh` / `h-screen`).
3. The slide deck must contain approximately 20-25 slides covering the following white paper sections (at a conceptual depth):

| Slide # | Section | Content Summary |
|---------|---------|-----------------|
| 1 | Title | Title, subtitle, author, date, Georgetown branding |
| 2 | 1.1 Problem Statement | The fragmentation challenge at NOAA Fisheries; why current architecture fails |
| 3 | 2.1-2.2 Fishery Data Ecosystem & Fragmentation | NOAA Fisheries mission, data landscape, consequences of fragmentation |
| 4 | 2.3 Legal & Regulatory Mandates | MSA, NIST SP 800-53, Evidence Act, OPEN Government Data Act |
| 5 | 3.1-3.2 Data Warehouse & Data Lake | Evolution: strengths and limitations of each paradigm |
| 6 | 3.3 Data Mesh Emergence | Introduction to data mesh as a paradigm shift |
| 7 | 3.4 Conway's Law & Domain-Driven Design | Organizational foundations for domain decomposition |
| 8 | 4.0-4.1 Principle 1: Domain Ownership | Definition, rationale, relevance to NOAA Fisheries |
| 9 | 5.1 Domain Decomposition | The 8 functional domains for NOAA Fisheries |
| 10 | 5.1 Region as Metadata | Why region is a dimension, not an ownership boundary |
| 11 | 4.2 Principle 2: Data as a Product | Definition, data contracts, Minimum Viable Data Product |
| 12 | 5.2 Electronic Monitoring Case Study | EM data product: lifecycle, schema, consumption patterns |
| 13 | 4.3 Principle 3: Self-Serve Data Platform | Definition, platform-as-product philosophy |
| 14 | 5.3 GCP Landing Zone Architecture | Resource hierarchy, VPC, IAM, FinOps, platform services catalog |
| 15 | 4.4 Principle 4: Federated Computational Governance | Three-tier policy model, computational enforcement |
| 16 | 5.4 NIST 800-53 & Continuous Authorization | Control mapping (AC-3, AU-2, SC-7, etc.), inheritance model |
| 17 | 5.5 Integrating the Four Principles | How domain ownership, data products, platform, and governance form a coherent system |
| 18 | 5.6 Broader Cloud Estate | Workload taxonomy, domain-coupled vs. domain-separated models |
| 19 | 6.0-6.2 Migration & Adoption Strategy | Anti-Corruption Layer, Strangler Fig, Parallel Run patterns; order of operations |
| 20 | 6.3-6.4 Organizational Change Management | Executive sponsorship, capability building, communities of practice |
| 21 | 7.0 Tradeoffs & Risks | Organizational disruption, platform costs, governance complexity, fragmentation risk |
| 22 | 8.0 Scaling to NOAA Enterprise | Limits of the mesh pattern at enterprise scale; federated approach elements |
| 23 | 9.0 Conclusion & Contributions | Summary of six contributions, research questions answered |
| 24 | 9.3-9.4 Future Directions | AI/ML integration and public data consumption |
| 25 | Key Takeaways / Thank You | Call to action, contact, references link |

### FR-2: Top Navigation Bar
4. The application must display a sticky top navigation bar visible on all slides.
5. The top nav must include section anchor links that, when clicked, smoothly scroll to the corresponding slide. Minimum anchor labels: **Problem**, **Architecture**, **Case Study**, **Migration**, **Tradeoffs**, **Future**.
6. The top nav must display a slide progress indicator showing current slide number and total slides (e.g., "12 / 25").
7. The top nav must include a progress bar element that fills proportionally as the user advances through slides.
8. The active section in the nav must be visually highlighted (e.g., different color, underline, or weight).
9. (Optional enhancement) The top nav may auto-hide on scroll-down and reappear on scroll-up to maximize content space.

### FR-3: Slide Navigation Mechanism
10. The application must render visually styled up (↑) and down (↓) arrow buttons at the bottom of each slide.
11. On the **first slide**, only the down arrow must be shown (no up arrow).
12. On the **last slide**, only the up arrow must be shown (no down arrow).
13. On all intermediate slides, both up and down arrows must be visible.
14. Clicking an arrow must advance the view to the adjacent slide (up = previous, down = next).
15. The arrows must be visually prominent and styled to match the Georgetown palette (e.g., Gold accent on Blue background, or white/light on dark slides).
16. The arrows must be centered horizontally at the bottom of the viewport, with adequate spacing from the bottom edge.
17. User scrolling (mouse wheel, trackpad, touch swipe) must also advance slides using CSS scroll-snap behavior (`scroll-snap-type: y mandatory` on the container, `scroll-snap-align: start` on each slide).
18. Keyboard arrow keys (Up/Down, Left/Right) must navigate between slides.
19. The slide transition/animation must be smooth (CSS `scroll-behavior: smooth` or equivalent JS smooth-scroll).

### FR-4: Responsive Behavior
20. Each slide must use responsive Tailwind utility classes (`text-2xl lg:text-4xl`, `p-4 md:p-8 lg:p-16`, `flex-col lg:flex-row`, etc.) so content reflows and scales appropriately.
21. On viewports below `768px` (tablet/mobile), slides must maintain full-viewport height but internal content may stack vertically and scroll internally if content exceeds the viewport (`overflow-y-auto` on slide content).
22. Typography must scale using responsive font sizes: headings should be large and bold on desktop, smaller but still prominent on mobile.
23. The top nav must collapse/adapt on mobile: section labels may shorten to icons or a hamburger menu to prevent overflow.
24. Arrow buttons must remain tappable on touch devices (minimum 44x44px touch target).
25. Images/diagrams (if any) must be responsive (`max-w-full`, `h-auto`) and may be hidden on small screens if purely decorative.

### FR-5: Design System
26. The project must implement a Tailwind CSS design system using the full Georgetown University color palette:

| Token Name | Hex Code | Usage |
|------------|----------|-------|
| `georgetown-blue` | `#011E41` | Primary backgrounds, dark slide themes, headers |
| `georgetown-gray` | `#63666A` | Body text, borders, muted elements |
| `georgetown-gold` | `#D4A843` | Highlights, accent elements, arrow buttons, call-to-action |
| `georgetown-light-blue` | `#4883B3` | Callout boxes, secondary accents, links |
| `georgetown-white` | `#FFFFFF` | Text on dark backgrounds, light slide background |
| `georgetown-cool-gray` | `#A0A0A5` | Subtle backgrounds, dividers, inactive states |

27. The Tailwind config must extend the default theme with these custom colors and a defined set of font family tokens (e.g., system sans-serif stack for body, serif or display font for headings).
28. The design system must define consistent spacing, border-radius, and shadow tokens to be used across all slide components.
29. Common slide layout patterns must be extracted as reusable components (e.g., `SlideTitleSection`, `SlideTwoColumn`, `SlideCentered`, `SlideCallout`).

### FR-6: Technical Stack
30. The application must be initialized as a Next.js project using the App Router (`app/` directory).
31. Tailwind CSS v4 must be installed and configured as the styling framework.
32. TypeScript must be used for all component files.
33. The slide content data (headings, body text, slide metadata) must be stored in a structured data file (e.g., `data/slides.ts` or `content/slides.json`) that the slide components consume, keeping content separate from presentation.
34. The application must build successfully with `npm run build` and run in development mode with `npm run dev`.

---

## 5. Non-Goals (Out of Scope)

- This project does **not** implement interactive diagrams or charts (static SVG/PNG representations are acceptable).
- This project does **not** include a PDF export or print stylesheet.
- This project does **not** include user authentication, comments, or any backend/database.
- This project does **not** create original illustrations — text-based slides with simple visual elements (callout boxes, card layouts, icons) are sufficient.
- This project does **not** include auto-play functionality.
- This project does **not** include animations beyond smooth scrolling and perhaps simple fade-in effects on scroll.
- This project does **not** deploy to a production environment (Vercel deployment is a stretch goal only).

---

## 6. Design Considerations

### 6.1 Visual Language
- **Backgrounds:** All slides use white backgrounds. Georgetown colors are used as accents/pops — there are no full-bleed dark slides.
- **Pitch Deck Aesthetic:** Slides should feel like a high-quality investor or conference pitch deck — bold headings, ample whitespace, strong visual hierarchy.
- **Color Usage (Accents on White):**
  - Georgetown Blue (`#011E41`) — Headlines, diagram borders, primary text emphasis
  - Georgetown Gray (`#63666A`) — Body text, borders, muted elements
  - Georgetown Gold (`#D4A843`) — Section labels, accent lines, arrow buttons, key statistics, interactive highlights
  - Georgetown Light Blue (`#4883B3`) — Callout boxes, secondary accents, diagram connecting lines
  - Georgetown Cool Gray (`#A0A0A5`) — Subtle backgrounds, dividers, inactive states
- **Typography:** Playfair Display for all headlines, Inter for body text. Large, confident headings (3xl-5xl on desktop). Body text at readable sizes (base-lg). Avoid text-heavy walls.

### 6.2 Slide Layout Patterns
- **Centered:** Avatar + title + subtitle + author, vertically and horizontally centered. Used for Title Slide.
- **Two-Column:** Text left (55%), diagram/visual right (45%). Used for slides with companion diagrams.
- **Card Grid:** 2x2, 3x2, or 2x3 card layout for enumerating principles, domains, risks, or contributions.
- **Centered Concept:** One bold statement or quote, centered vertically and horizontally.
- **Timeline/Flow:** Vertical or horizontal progression showing steps, phases, or evolution.
- **Comparison Split:** Two panels side-by-side showing before/after or two architectural models.
- **Section Opener:** Bold headline with 3-4 supporting principle/pillar cards beneath.

### 6.3 Design System Components (to be built)
- **Cards:** Default card (Blue border, white bg, shadow), Highlighted card (Blue border, pale blue bg), Callout card (Light Blue left border), Risk card (rose-red left accent)
- **Pills/Badges:** Section labels (Gold, uppercase, tracking-widest, small), Stat pills (Blue bg, white text), Status indicators
- **Buttons:** Up/down arrows in color variants. Circular containers with arrow icon. Gold bg on white slides. Hover: scale 1.1 + color shift.
- **Typography tokens:** Playfair Display for headings (3xl-5xl responsive), Inter for body (sm-lg responsive)
- **Spacing tokens:** Consistent padding scale across all slide types

### 6.4 Directional Arrow Design
- Visually styled circular/pill container with arrow icon
- Gold background on white slides, with subtle hover animation (scale + color shift)
- Positioned at bottom-center of viewport, ~8-10% from bottom edge
- First slide: down arrow only. Last slide: up arrow only. All others: both.

### 6.5 Diagram Philosophy
- Each diagram is a self-contained React component built with HTML + CSS (Tailwind) + thin SVG line overlays for arrows/connections
- Color-coded to Georgetown palette:
  - Blue = domains/platform elements
  - Gold = data products/accents
  - Light Blue = callouts/connecting lines
  - Violet = governance/security
  - Cool Gray = reference data/neutral elements
  - Rose = risks/legacy
- Subtle fade-in on scroll into view (Intersection Observer)
- Diagrams are simplified, presentation-friendly versions of the paper's 17 diagrams — bolder, cleaner, fewer labels

---

## 6A. Complete Slide-by-Slide Outline

| # | Title | Content Summary | Layout | Diagram |
|---|-------|-----------------|--------|---------|
| **1** | **Title Slide** | Title, subtitle ("Applying the Data Mesh Paradigm in Google Cloud Platform"), author ("Joshua Lee — Georgetown University — June 2026") | Centered: Avatar (circular, Gold ring), title in Playfair Blue, subtitle in Light Blue, author in Gray, Gold accent line | None |
| **2** | **The Problem** | NOAA Fisheries: 8 councils, 6 regional offices, 6 science centers — decades of autonomous data systems. Data abundant but fragmented. Delays management, multiplies costs, erodes trust. | Two-Column: Left text, Right diagram | "Current State Fragmentation" — 5-6 silo cards (Blue borders) for regional systems, dashed Gold SVG arrows converging on scientist icon, callout: "No shared discovery • Inconsistent schemas • Redundant infrastructure" |
| **3** | **NOAA Fisheries Data Landscape** | Data types: fishery-dependent (VMS, logbooks, observer/EM), fishery-independent (surveys), protected species, socioeconomic. Gap: data produced distributed, consumed cross-cutting. | Two-Column: Left text, Right diagram | "Data Landscape" — Producer icons feeding into fragmented middle, consumer icons at bottom, weak/inconsistent connecting arrows |
| **4** | **Legal & Regulatory Mandates** | MSA NS2 (best scientific info), Sec.402(b) confidentiality, NIST SP 800-53, Evidence Act, OPEN Govt Data Act. Two opposing forces: open by default vs. confidential by statute. | Card Grid 2x2: Each mandate as a card with Blue header, Gray body. Gold lock accent on confidentiality. Tension line: "The architecture must resolve both" | None |
| **5** | **The Evolution of Big Data Architectures** | Data Warehouse (1990s, schema-on-write, bottleneck) → Data Lake (2010s, schema-on-read, data swamps) → Data Mesh (2020s, domain ownership, data as product, self-serve, federated governance) | Timeline: 3 columns/cards, animated progression on scroll | None |
| **6** | **Conway's Law & Domain-Driven Design** | Conway's Law: systems mirror communication structures. DDD: bounded contexts. Parnas: hide what changes. Correct decomposition unit = mission domain. | Centered Concept: Large Conway quote, below: 3 small cards (Conway, Evans/DDD, Parnas) forming triangle around "Domain-Oriented Decomposition" | None |
| **7** | **Principle 1: Domain Ownership** | Analytical data owned by domains closest to creation. Cross-functional teams own full lifecycle. Eliminates central bottleneck. NOAA Fisheries already de facto domains — without formal accountability, platform, or contracts. | Two-Column: Left principle text, Right diagram | "Centralized vs. Domain Ownership" — Before panel: 8 domains → 1 central bottleneck. After panel: 8 domains each publishing, platform team enabling. Arrows shift from converging to parallel |
| **8** | **Domain Decomposition for NOAA Fisheries** | 8 functional domains aligned to MSA: Stock Assessment, Fishery Monitoring, Vessel Operations, Permits, Protected Species, Habitat, Socioeconomics, Enforcement. Region = metadata dimension, not ownership boundary. | Diagram: "Domain Decomposition Map" — 8 domain cards in grid, each with Blue header, Gold MSA cite, description. Shared reference layer beneath. Fishery Monitoring highlighted | **Domain Decomposition Map** — 8 domains + 3 shared reference products, SVG lines connecting |
| **9** | **Principle 2: Data as a Product** | Data = actively managed product. 6 characteristics: discoverable, addressable, trustworthy, self-describing, interoperable, secure. Data contracts formalize producer-consumer relationships. MVDP for incremental delivery. | Two-Column: Left text, Right diagram | "Data Product Anatomy" — Bounded box with 6 characteristics inside. Below: "Data Contract" box (schema, SLOs, versioning, access rules). Gold arrow to product |
| **10** | **Case Study: Electronic Monitoring** | EM captures video/sensor data on vessels. EM data product: trip metadata, raw video, reviewer notings, species IDs. 3 lifecycle stages. Consumed by Stock Assessment, Protected Species, Enforcement — each sees different governed view. | Diagram: "EM Data Product Flow" — Video/API sources → Fishery Monitoring domain box → 3 consumer arrows. Bottom: IAM, Monitoring, DLP enforcement lines | **EM Data Product Flow** — Color-coded: upstream amber, domain Blue, consumers green, governance violet |
| **11** | **Principle 3: The Self-Serve Data Platform** | Platform-as-product: foundation services, data services, developer experience. Paved roads make compliant behavior default. Domain teams focus on data — platform handles infrastructure. | Diagram: "Platform Service Tiers" — 3 stacked bands: Foundation (Blue), Data Services (Gold), Developer Experience (Green). Domain team icon at left | **Platform Service Tiers** — Three horizontal bands with service icons |
| **12** | **GCP Landing Zone Architecture** | NOAA Fisheries GCP Org → Platform, Domains, Domains-Dev, Security, Shared Services folders. Hub-and-spoke VPC, Workload Identity Federation, CMEK, label-based FinOps chargeback. | Diagram: "GCP Landing Zone" — Top-down org structure, 5 folder columns, VPC hub, 8 domain projects, 3 shared services | **GCP Landing Zone** — Simplified from paper's Diagram 3, Georgetown palette |
| **13** | **Principle 4: Federated Computational Governance** | 3 tiers: global, domain, product. Policies encoded as executable platform rules — not documents. Replaces manual gatekeeping with automated enforcement. | Diagram: "Three-Tier Governance" — Pyramid: Global bottom, Domain middle, Product top. Platform enforcement arrows upward | **Three-Tier Governance Pyramid** — With enforcement engine arrows |
| **14** | **NIST 800-53 & Continuous Authorization** | AC-3→Cloud IAM, AU-2→Cloud Logging, SC-7→VPC SC, SI-10→Dataplex, SC-13→Cloud KMS, RA-5→SCC. 3-tier inheritance: FedRAMP→Platform ATO→Data Product ATO. 60-70% controls inherited. | Diagram: "NIST Control Inheritance" — 3 stacked layers: FedRAMP (gray), Platform ATO (violet, 6 controls w/ GCP icons), Data Product ATO (blue). Upward arrows | **NIST Control Inheritance Model** — Adapted from paper's Diagram 5 |
| **15** | **Applying Governance: EM Confidentiality** | MSA sec.402(b): vessel-level data confidential. Same EM product serves 3 views: aggregated (stock assessment), filtered (protected species), full (enforcement). Row-level security + DLP enforce automatically. | Diagram: "One Product, Three Views" — Center: EM Data Product. 3 consumer panels with different access levels. IAM condition labels on arrows. DLP shield overlay | **One Product, Three Views** — IAM-governed access tiers |
| **16** | **Integrating the Four Principles** | 4 principles form coherent system. Each addresses weaknesses of others. EM data product = integrated result. | Diagram: "Four Principles Integration" — 2x2 quadrant: Domain Ownership, Data as Product, Self-Serve Platform, Federated Governance. Center hub: "EM Data Product." Tension lines between quadrants | **Four Principles Integration** — Adapted from paper's Diagram 11 |
| **17** | **The Broader Cloud Estate** | Not everything is a data product. Workload taxonomy: transactional, pipelines, apps, science computing, HPC/AI-ML. Two models: Domain-Coupled vs. Domain-Separated. Recommendation: Domain-Separated. | Comparison Split: Two panels. Left: Domain-Coupled (all in 1 folder, classification conflict). Right: Domain-Separated (separate folders, cross-folder IAM). NOAA Fisheries highlighted right | **Domain-Coupled vs. Domain-Separated** — Side-by-side resource hierarchy comparison |
| **18** | **Migration Strategy: Guiding Principles** | Evolutionary, not revolutionary. Value-first — start with EM pilot. Legacy coexistence — don't rip and replace. Learn and adapt. | Section Opener: Bold headline "Migration & Adoption Strategy." 4 principle cards beneath | None |
| **19** | **Migration Patterns** | Anti-Corruption Layer: wrap legacy behind modern API. Strangler Fig: build new native, slowly redirect. Parallel Run: run both concurrently for validation. Consumer experience never changes. | Diagram: "Three Migration Patterns" — 3 sequential panels. Below: "Consumer Perspective" callout | **Migration Patterns** — Adapted from paper's Diagrams 8 and 8b |
| **20** | **Order of Operations** | 1. Platform foundation. 2. ACL on legacy. 3. Strangler Fig incremental. 4. Parallel Run full season. 5. Legacy decommissioning. Organizational readiness enables every step. | Timeline: 5-step vertical timeline + parallel "Organizational Readiness" track with upward "Enables" arrows | **Migration Phases and Dependencies** — Adapted from paper's Diagram 12 |
| **21** | **Organizational Change Management** | Data mesh = 20% technology, 80% people. Executive sponsorship, stakeholder engagement, training, communities of practice. DPO = dedicated stewardship role. Embed data engineers in domain teams. | Split: Top — "Culture eats strategy for breakfast" quote. Bottom — 4 cards (Sponsorship, Engagement, Training, Communities) | None |
| **22** | **Tradeoffs & Risks** | 6 risk dimensions: organizational disruption, platform costs, governance complexity, legacy integration, fragmentation without integration, change management as binding constraint. All real, all manageable. | Card Grid 3x2: One card per risk. Blue header, 1-line summary, Gold mitigation text. Rose-red left accent | None |
| **23** | **Scaling to NOAA Enterprise** | Pure mesh can't scale across independent line offices without shared platform, identity, networking, governance. 4 federation elements: standardized contracts, federated catalog, cross-cloud gateways, enterprise governance council. | Diagram: "Federated NOAA Enterprise" — 5 line office cards top, 4 federation elements middle, cloud platform icons bottom | **Federated NOAA Enterprise** — Adapted from paper's Diagram 13 |
| **24** | **Conclusion & Contributions** | 6 contributions: domain decomposition for federal agency, GCP instantiation, NIST 800-53 integration, EM case study, balanced tradeoff analysis, pattern-based migration. All 5 RQs answered. | Card Grid 3x2: 6 contribution cards + RQ checkmark list at bottom | None |
| **25** | **Future Directions + Thank You** | AI/ML: curated training sources, automated quality, AI-assisted discovery. Public data: one product, tiered access — open by default, confidential by statute. | Two-Column: Left — 3 Future Direction items (Gold bullets). Right — Public Data statement. Bottom center: "Thank You" + author + references. Up arrow only | None |

---

## 6B. Implementation Plan

### Phase 1: Design System Foundation
1. Configure Tailwind v4 with Georgetown color tokens, font stacks (Playfair Display + Inter)
2. Create globals.css with scroll-snap styles, custom utilities
3. Build design system showcase page (`/design-system`) displaying:
   - Color palette swatches with hex codes
   - Typography scale (headings + body in both fonts)
   - Card variants, pill/badge variants, button/arrow variants
   - Layout primitives (two-column, card grids, centered)

### Phase 2: Diagram Components
Build each diagram as a self-contained React component using Tailwind + SVG overlays:
- `CurrentStateFragmentation` (Slide 2)
- `DataLandscape` (Slide 3)
- `CentralizedVsDomainOwnership` (Slide 7)
- `DomainDecompositionMap` (Slide 8)
- `DataProductAnatomy` (Slide 9)
- `EMDataProductFlow` (Slide 10)
- `PlatformServiceTiers` (Slide 11)
- `GCPLandingZone` (Slide 12)
- `ThreeTierGovernance` (Slide 13)
- `NISTControlInheritance` (Slide 14)
- `OneProductThreeViews` (Slide 15)
- `FourPrinciplesIntegration` (Slide 16)
- `DomainCoupledVsSeparated` (Slide 17)
- `MigrationPatterns` (Slide 19)
- `MigrationPhases` (Slide 20)
- `FederatedNOAAEnterprise` (Slide 23)

### Phase 3: Navigation Components
- `TopNav` — Sticky bar with section anchors, slide counter, progress bar, Intersection Observer active detection
- `SlideArrows` — Up/down arrow buttons, context-aware visibility (first/last slide logic)

### Phase 4: Slide Assembly
- 25 slide content components, each composing layout primitives + diagram components + text
- Content data file (`data/slides.ts`) for slide metadata

### Phase 5: Main Page
- Scroll-snap container, Intersection Observer for active slide, keyboard navigation
- Wire TopNav + SlideArrows to slide navigation
- Responsive testing

---

## 7. Technical Considerations

### 7.1 Project Structure
```
data-mesh-slide-deck/
├── app/
│   ├── layout.tsx              # Root layout (metadata, Playfair + Inter fonts)
│   ├── page.tsx                # Main page (scroll container + all slides)
│   ├── design-system/
│   │   └── page.tsx            # Design system showcase
│   ├── globals.css             # Tailwind v4 directives + custom styles
│   └── components/
│       ├── TopNav.tsx           # Sticky navigation bar
│       ├── SlideArrows.tsx      # Up/down arrow buttons
│       ├── SlideWrapper.tsx     # Individual slide wrapper (h-screen, snap-align)
│       ├── layouts/
│       │   ├── TwoColumn.tsx    # 55/45 two-column layout
│       │   ├── CardGrid.tsx     # Configurable grid (2x2, 3x2, 2x3)
│       │   ├── Centered.tsx     # Vertically/horizontally centered content
│       │   └── Timeline.tsx     # Vertical timeline layout
│       ├── ui/
│       │   ├── Card.tsx         # Card variants (default, highlight, callout, risk)
│       │   ├── Pill.tsx         # Badge/pill component
│       │   └── SectionLabel.tsx # Gold uppercase section label
│       ├── diagrams/
│       │   ├── CurrentStateFragmentation.tsx
│       │   ├── DomainDecompositionMap.tsx
│       │   ├── EMDataProductFlow.tsx
│       │   ├── GCPLandingZone.tsx
│       │   ├── NISTControlInheritance.tsx
│       │   ├── FourPrinciplesIntegration.tsx
│       │   ├── MigrationPatterns.tsx
│       │   ├── FederatedNOAAEnterprise.tsx
│       │   └── ... (remaining diagram components)
│       └── slides/
│           ├── Slide01Title.tsx
│           ├── Slide02Problem.tsx
│           ├── Slide03DataLandscape.tsx
│           ├── ... (remaining slide components)
│           └── Slide25ThankYou.tsx
├── data/
│   └── slides.ts               # Slide metadata (titles, section anchors, content)
├── lib/
│   └── useActiveSlide.ts       # Intersection Observer hook
└── package.json
```

### 7.2 Key Dependencies
- `next` (latest stable)
- `react` + `react-dom`
- `tailwindcss` (v4)
- `typescript`
- `@tailwindcss/typography` (optional)
- No additional UI libraries — all components built with Tailwind.

### 7.3 Scroll-Snap Implementation
- CSS `scroll-snap-type: y mandatory` on scroll container
- `scroll-snap-align: start` on each slide
- `scroll-behavior: smooth` for transitions
- Programmatic navigation: `element.scrollIntoView({ behavior: 'smooth' })`

### 7.4 Active Slide Detection
- Intersection Observer API on each slide element
- Threshold-based detection for current slide index
- Updates TopNav active section, slide counter, and arrow visibility

## 8. Success Metrics

| Metric | Target |
|--------|--------|
| Total slides | 20-25 covering all white paper sections |
| Build succeeds | `npm run build` exits with 0 errors |
| Responsive behavior | Slides render correctly at 320px, 768px, 1024px, 1440px widths |
| Navigation functionality | Scroll-snap, arrow buttons, and keyboard nav all advance slides correctly |
| Design consistency | All slides use Georgetown palette; no hardcoded colors outside design tokens |
| Performance | Page load under 3 seconds; no layout shift on navigation |

---

## 9. Open Questions

1. **Diagram inclusion:** Should the slide deck attempt to recreate any of the 16 figures referenced in the white paper (e.g., Domain Decomposition Map, GCP Landing Zone Architecture) as simple visual diagrams, or are text-based descriptions sufficient?
2. **Font selection:** Should the project use Georgetown's official brand font (if available/licensed) or a freely available alternative (e.g., Inter for body, Playfair Display for headings)?
3. **Deployment target:** Should the project be configured for Vercel deployment, or is local-only development sufficient?
4. **Slide footer:** Should each slide include a running footer with the white paper title and/or Georgetown branding, or is the top nav sufficient?