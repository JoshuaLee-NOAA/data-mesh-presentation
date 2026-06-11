"use client";

import SectionLabel from "../ui/SectionLabel";

const domains = [
  { id: 1, label: "Stock Assessment & Surveys", cite: "MSA §404, NS2", highlight: false },
  { id: 2, label: "Fishery Monitoring", cite: "MSA §403", highlight: true },
  { id: 3, label: "Vessel Operations & Effort", cite: "MSA §402", highlight: false },
  { id: 4, label: "Permits & Limited Access", cite: "MSA §303A", highlight: false },
  { id: 5, label: "Protected Species & Bycatch", cite: "MSA NS9, ESA, MMPA", highlight: false },
  { id: 6, label: "Habitat Conservation", cite: "MSA §305, EFH", highlight: false },
  { id: 7, label: "Socioeconomics", cite: "MSA NS8", highlight: false },
  { id: 8, label: "Enforcement", cite: "MSA §311", highlight: false },
];

const refProducts = [
  "Species Taxonomies",
  "Vessel Registries",
  "Geographic Boundaries",
  "Other Shared Products",
];

export default function Slide11DomainDecomposition() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch w-full h-full px-4 lg:px-8">
      {/* LEFT: Text column (60%) */}
      <div className="flex-[1.2] flex flex-col gap-5 justify-center">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-georgetown-blue leading-tight">
          NOAA Fisheries Domain Decomposition
        </h2>

        <SectionLabel className="-mt-3">Section 5.1</SectionLabel>

        <p className="font-display text-base md:text-lg lg:text-xl text-georgetown-blue leading-relaxed font-medium">
          Eight functional domains are proposed, each mapping to specific MSA
          statutory responsibilities. Region is a metadata dimension — not an
          ownership boundary — ensuring cross-regional analyses query a single
          domain namespace rather than coordinating across six regional databases.
        </p>

        <div className="space-y-2">
          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              MSA-aligned decomposition
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              Each domain maps to a statutory function: stock assessment
              (§404), observer & EM programs (§403), catch/effort monitoring
              (§402), limited access permits (§303A), protected species (NS9),
              EFH (§305), socioeconomic impacts (NS8), and enforcement (§311).
            </p>
          </div>

          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              Region as metadata, not ownership
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              Council jurisdiction and region are attributes on each data
              product, not organizational boundaries that fragment the data
              ecosystem. A climate vulnerability assessment queries across
              regions using a single domain namespace.
            </p>
          </div>

          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              Shared reference products
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              Species taxonomies, vessel registries, and geographic boundaries
              span multiple domains and are maintained as shared reference
              products rather than duplicated independently by each domain.
            </p>
          </div>
        </div>

        <p className="font-sans text-xs text-georgetown-cool-gray italic leading-relaxed pt-2 border-t border-georgetown-cool-gray/30">
          Domain decomposition is not arbitrary — it aligns with the
          organizational structure that the Magnuson-Stevens Act intentionally
          creates, transforming Conway's Law from a constraint into an
          architectural principle.
        </p>
      </div>

      {/* RIGHT: Visual — stacked domain list (40%) */}
      <div className="flex-[0.8] flex flex-col gap-2 justify-center">
        {/* Header */}
        <div className="text-center">
          <p className="font-display text-sm md:text-base font-bold text-georgetown-blue leading-tight">
            8 Mission Domains
          </p>
              <p className="font-sans text-[10px] md:text-[11px] text-georgetown-gray leading-tight mt-0.5">
            Decomposed by MSA statutory function, not by region
          </p>
          <p className="font-sans text-[8px] md:text-[9px] italic text-georgetown-cool-gray mt-1">
            Gold = EM case study domain (MSA §403)
          </p>
        </div>

        {/* 8 stacked domain cards */}
        <div className="flex flex-col gap-1">
          {domains.map((d) => (
            <div
              key={d.id}
              className={`flex items-center justify-between rounded-lg px-3 py-1.5 bg-white ${
                d.highlight
                  ? "border-2 border-georgetown-gold bg-georgetown-gold/10"
                  : "border border-georgetown-blue/20"
              }`}
            >
              <p className="font-display text-[10px] md:text-[11px] font-bold text-georgetown-blue">
                {d.label}
              </p>
              <p className="font-sans text-[8px] md:text-[9px] text-georgetown-cool-gray ml-2 shrink-0">
                {d.cite}
              </p>
            </div>
          ))}
        </div>

        {/* Shared Reference Products */}
        <div className="border-t border-georgetown-cool-gray/30 pt-2 mt-1">
          <p className="font-sans text-[8px] md:text-[9px] text-georgetown-cool-gray text-center italic mb-1">
            Shared Reference Products
          </p>
          <div className="flex justify-center gap-2">
            {refProducts.map((r) => (
              <span
                key={r}
                className="border border-georgetown-blue/20 rounded-full px-2 py-0.5 text-[8px] md:text-[9px] text-georgetown-blue bg-georgetown-blue/5"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}