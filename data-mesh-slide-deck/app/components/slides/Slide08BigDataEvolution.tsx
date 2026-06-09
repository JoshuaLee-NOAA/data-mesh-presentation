"use client";

import SectionLabel from "../ui/SectionLabel";

const eras = [
  {
    label: "Data Warehouse",
    era: "1990s",
    body: "Centralized ETL pipelines with schema-on-write — governed and consistent but rigid, unable to keep pace with the volume and diversity of modern data.",
    cite: "Inmon (1992); Kimball (1996)",
  },
  {
    label: "Data Lake",
    era: "2010s",
    body: "Schema-on-read in cheap object storage — flexible and scalable but lacking ownership and quality controls, earning the label \"data swamp.\"",
    cite: "Dixon (2010); Marz & Warren (2015)",
  },
  {
    label: "Data Mesh",
    era: "2020s",
    body: "Federated domain ownership with data as a product, self-serve platform, and federated governance — addresses the limitations of both predecessors.",
    cite: "Dehghani (2019, 2021)",
  },
];

export default function Slide08BigDataEvolution() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch w-full h-full px-4 lg:px-8">
      {/* LEFT: Text column */}
      <div className="flex-[1.2] flex flex-col gap-5 justify-center">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-georgetown-blue leading-tight">
          Evolution of Big Data Architectures
        </h2>

        <SectionLabel className="-mt-3">Section 3.1–3.3</SectionLabel>

        <p className="font-display text-base md:text-lg lg:text-xl text-georgetown-blue leading-relaxed font-medium">
          The evolution of analytical data architectures over the past four
          decades represents a succession of paradigm shifts, each building on
          the strengths and addressing the limitations of its predecessor.
        </p>

        <p className="font-sans text-xs md:text-sm text-georgetown-gray leading-relaxed">
          The data warehouse provided governed, consistent reporting through
          centralized schema enforcement. The data lake enabled unprecedented
          scale and flexibility through schema-on-read. The data mesh —
          introduced by Zhamak Dehghani in 2019 — reconfigures the relationship
          between data ownership, infrastructure, and governance by distributing
          accountability to the domains closest to the data&rsquo;s creation
          and meaning.
        </p>

        {/* 3-Column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-1">
          {eras.map((e) => (
            <div
              key={e.label}
              className="border border-georgetown-blue/30 rounded-lg p-3 flex flex-col gap-1 bg-white"
            >
              <span className="text-[10px] uppercase tracking-wider text-georgetown-teal font-bold">
                {e.era}
              </span>
              <p className="font-display text-xs md:text-sm font-bold text-georgetown-blue leading-tight">
                {e.label}
              </p>
              <p className="font-sans text-[10px] md:text-xs text-georgetown-gray leading-relaxed flex-1">
                {e.body}
              </p>
              <p className="font-sans text-[9px] md:text-[10px] text-georgetown-cool-gray italic mt-1">
                {e.cite}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: Visual column */}
      <div className="flex-[0.8] flex items-center justify-center w-full h-full">
        <div className="w-full h-full border-2 border-dashed border-georgetown-cool-gray/40 rounded-xl bg-georgetown-off-white/50 flex items-center justify-center">
          <p className="font-sans text-xs text-georgetown-cool-gray text-center px-4">
            Visual coming soon
          </p>
        </div>
      </div>
    </div>
  );
}