"use client";

import SectionLabel from "../ui/SectionLabel";

export default function Slide02ProblemStatement() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch w-full h-full px-4 lg:px-8">
      {/* LEFT: Text column */}
      <div className="flex-[1.2] flex flex-col gap-5 justify-center">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-georgetown-blue leading-tight">
          The Core Problem Statement
        </h2>

        <SectionLabel className="-mt-3">Section 1.1</SectionLabel>

        <p className="font-display text-base md:text-lg lg:text-xl text-georgetown-blue leading-relaxed font-medium">
          The analytical data that supports fisheries management resides in
          systems that decades of programmatic autonomy have fragmented across
          organizational boundaries, cloud platforms, and governance regimes.
          When data cannot be assembled across domains, management decisions are
          delayed, compliance costs multiply, and public confidence declines. An
          architectural problem cascades into a mission problem.
        </p>

        <div className="space-y-3">
          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              The mission dependency
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              NOAA Fisheries' regulatory decisions — from annual catch
              limits to fishery closures to species protections — depend on
              analytical data that must be accurate, accessible, and legally
              defensible.
            </p>
            <p className="font-sans text-[10px] md:text-xs text-georgetown-cool-gray mt-1 italic">
              MSA §301(a)(2) — National Standard 2: best scientific information available
            </p>
          </div>

          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              The structural cause
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              Data systems were not designed as an enterprise architecture. They
              accumulated through decades of programmatic and regional autonomy,
              each built to serve a specific program's needs with the
              technology and governance practices of the time.
            </p>
            <p className="font-sans text-[10px] md:text-xs text-georgetown-cool-gray mt-1 italic">
              Conway's Law — architectures copy organizational structures
            </p>
          </div>

          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              The consequence
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              Data is abundant but cannot be efficiently discovered, assessed,
              or integrated across organizational boundaries. The cost is
              measured in delayed management decisions, multiplied compliance
              costs, and eroded public confidence.
            </p>
          </div>
        </div>

        <p className="font-sans text-xs text-georgetown-cool-gray italic leading-relaxed pt-2 border-t border-georgetown-cool-gray/30">
          This fragmentation is not a bug — it is a feature of the
          Magnuson-Stevens Act, which intentionally distributes fisheries
          management authority across eight Regional Fishery Management
          Councils. The architecture must respect this distributed governance,
          not fight it.
        </p>
      </div>

      {/* RIGHT: Visual column — fills 100% of container height */}
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