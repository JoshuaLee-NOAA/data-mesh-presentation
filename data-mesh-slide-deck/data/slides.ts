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
  { id: "slide-02", section: "slide-02", title: "The Core Problem" },
  { id: "slide-03", section: "", title: "Research Questions & Scope" },
  { id: "slide-04", section: "", title: "Case Study: Electronic Monitoring" },
  { id: "slide-05", section: "slide-05", title: "The Fishery Data Landscape" },
  { id: "slide-06", section: "", title: "Architectural Fragmentation" },
  { id: "slide-07", section: "slide-07", title: "Legal and Regulatory Mandates" },
  { id: "slide-08", section: "", title: "Slide 8" },
  { id: "slide-09", section: "", title: "Slide 9" },
  { id: "slide-10", section: "", title: "Slide 10" },
  { id: "slide-11", section: "", title: "Slide 11" },
  { id: "slide-12", section: "slide-12", title: "Slide 12" },
  { id: "slide-13", section: "", title: "Slide 13" },
  { id: "slide-14", section: "", title: "Slide 14" },
  { id: "slide-15", section: "", title: "Slide 15" },
  { id: "slide-16", section: "", title: "Slide 16" },
  { id: "slide-17", section: "", title: "Slide 17" },
  { id: "slide-18", section: "slide-18", title: "Slide 18" },
  { id: "slide-19", section: "", title: "Slide 19" },
  { id: "slide-20", section: "", title: "Slide 20" },
  { id: "slide-21", section: "", title: "Slide 21" },
  { id: "slide-22", section: "slide-22", title: "Slide 22" },
  { id: "slide-23", section: "", title: "Slide 23" },
  { id: "slide-24", section: "slide-24", title: "Slide 24" },
  { id: "slide-25", section: "", title: "Slide 25" },
];
