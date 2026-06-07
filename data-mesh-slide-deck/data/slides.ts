export interface SlideMeta {
  id: string;
  section: string;
  title: string;
}

export interface SectionAnchor {
  label: string;
  slideId: string;
}

export const sectionAnchors: SectionAnchor[] = [
  { label: "Problem", slideId: "slide-02" },
  { label: "Evolution", slideId: "slide-05" },
  { label: "Principles", slideId: "slide-07" },
  { label: "Architecture", slideId: "slide-12" },
  { label: "Migration", slideId: "slide-18" },
  { label: "Tradeoffs", slideId: "slide-22" },
  { label: "Future", slideId: "slide-24" },
];

export const slides: SlideMeta[] = [
  { id: "slide-01", section: "", title: "Title" },
  { id: "slide-02", section: "slide-02", title: "The Problem" },
  { id: "slide-03", section: "", title: "Data Landscape" },
  { id: "slide-04", section: "", title: "Legal Mandates" },
  { id: "slide-05", section: "slide-05", title: "Evolution of Big Data" },
  { id: "slide-06", section: "", title: "Conway's Law" },
  { id: "slide-07", section: "slide-07", title: "Domain Ownership" },
  { id: "slide-08", section: "", title: "Domain Decomposition" },
  { id: "slide-09", section: "", title: "Data as a Product" },
  { id: "slide-10", section: "", title: "EM Case Study" },
  { id: "slide-11", section: "", title: "Self-Serve Platform" },
  { id: "slide-12", section: "slide-12", title: "GCP Landing Zone" },
  { id: "slide-13", section: "", title: "Federated Governance" },
  { id: "slide-14", section: "", title: "NIST 800-53" },
  { id: "slide-15", section: "", title: "EM Confidentiality" },
  { id: "slide-16", section: "", title: "Integrating the Four Principles" },
  { id: "slide-17", section: "", title: "Broader Cloud Estate" },
  { id: "slide-18", section: "slide-18", title: "Migration Principles" },
  { id: "slide-19", section: "", title: "Migration Patterns" },
  { id: "slide-20", section: "", title: "Order of Operations" },
  { id: "slide-21", section: "", title: "Change Management" },
  { id: "slide-22", section: "slide-22", title: "Tradeoffs & Risks" },
  { id: "slide-23", section: "", title: "NOAA Enterprise" },
  { id: "slide-24", section: "slide-24", title: "Contributions" },
  { id: "slide-25", section: "", title: "Future + Thank You" },
];