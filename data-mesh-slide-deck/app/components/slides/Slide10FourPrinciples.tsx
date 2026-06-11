"use client";

import SectionLabel from "../ui/SectionLabel";

const principles = [
  {
    number: 1,
    label: "Domain Ownership",
    body: "Cross-functional domain teams own analytical data end-to-end — from collection and quality through publication and deprecation — eliminating handoff friction between domain experts and a central data team.",
    cite: "Dehghani (2022)",
    position: "top-left",
  },
  {
    number: 2,
    label: "Data as a Product",
    body: "Data is not a passive asset but a curated, discoverable, trustworthy, and interoperable resource governed by data contracts with explicit quality SLOs. Domains treat consumers as customers.",
    cite: "Dehghani (2022); Perrin & Broda (2024)",
    position: "top-right",
  },
  {
    number: 3,
    label: "Self-Serve Platform",
    body: "Shared infrastructure provides templates, automated compliance, and paved roads that make domain autonomy scalable — letting domains focus on data, not security, networking, and compliance.",
    cite: "Dehghani (2022)",
    position: "bottom-left",
  },
  {
    number: 4,
    label: "Federated Governance",
    body: "A governance council defines global policies, but enforcement is automated through platform services. Global policies set enterprise standards; domain policies refine them locally; product policies govern individual data products.",
    cite: "Dehghani (2022)",
    position: "bottom-right",
  },
];

export default function Slide10FourPrinciples() {
  const leftPrinciples = principles.filter(
    (p) => p.position === "top-left" || p.position === "bottom-left"
  );
  const rightPrinciples = principles.filter(
    (p) => p.position === "top-right" || p.position === "bottom-right"
  );

  return (
    <div className="flex flex-col w-full h-full px-4 lg:px-8 gap-4 justify-center">
      {/* Title */}
      <div className="text-center shrink-0">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-georgetown-blue leading-tight">
          Data Mesh: Four Interdependent Principles
        </h2>
        <SectionLabel className="mt-1">Section 4.0</SectionLabel>
      </div>

      {/* 3-column: 20% / 60% / 20% */}
      <div className="flex gap-4 flex-1 min-h-0">
        {/* LEFT: 20% — stacked top/bottom */}
        <div className="w-[20%] flex flex-col gap-3">
          {leftPrinciples.map((p) => (
            <div
              key={p.number}
              className="flex-1 border border-georgetown-blue/30 rounded-lg p-3 flex flex-col justify-center text-center bg-white"
            >
              <span className="text-[10px] uppercase tracking-wider text-georgetown-teal font-bold">
                Principle {p.number}
              </span>
              <p className="font-display text-[11px] md:text-xs font-bold text-georgetown-blue mt-1 leading-tight">
                {p.label}
              </p>
              <p className="font-sans text-[9px] md:text-[10px] text-georgetown-gray mt-1 leading-relaxed">
                {p.body}
              </p>
              <p className="font-sans text-[8px] text-georgetown-cool-gray italic mt-1.5">
                {p.cite}
              </p>
            </div>
          ))}
        </div>

        {/* CENTER: 60% — diagram placeholder with thesis overlay */}
        <div className="w-[60%] relative border-2 border-dashed border-georgetown-cool-gray/40 rounded-xl bg-georgetown-off-white/50 flex items-center justify-center">
          <p className="font-sans text-xs text-georgetown-cool-gray text-center px-4">
            Visual coming soon
          </p>
          <p className="absolute bottom-3 left-0 right-0 font-sans text-[10px] md:text-xs text-georgetown-gray text-center leading-relaxed px-4">
            These four principles are not independent architectural choices.
            They form a coherent system in which each principle both depends on
            and enables the others.
          </p>
        </div>

        {/* RIGHT: 20% — stacked top/bottom */}
        <div className="w-[20%] flex flex-col gap-3">
          {rightPrinciples.map((p) => (
            <div
              key={p.number}
              className="flex-1 border border-georgetown-blue/30 rounded-lg p-3 flex flex-col justify-center text-center bg-white"
            >
              <span className="text-[10px] uppercase tracking-wider text-georgetown-teal font-bold">
                Principle {p.number}
              </span>
              <p className="font-display text-[11px] md:text-xs font-bold text-georgetown-blue mt-1 leading-tight">
                {p.label}
              </p>
              <p className="font-sans text-[9px] md:text-[10px] text-georgetown-gray mt-1 leading-relaxed">
                {p.body}
              </p>
              <p className="font-sans text-[8px] text-georgetown-cool-gray italic mt-1.5">
                {p.cite}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}