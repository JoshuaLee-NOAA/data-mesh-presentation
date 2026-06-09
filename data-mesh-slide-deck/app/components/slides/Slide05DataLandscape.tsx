"use client";

import SectionLabel from "../ui/SectionLabel";

export default function Slide05DataLandscape() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch w-full h-full px-4 lg:px-8">
      {/* LEFT: Visual column */}
      <div className="flex-[0.8] flex items-center justify-center w-full h-full">
        <div className="w-full h-full border-2 border-dashed border-georgetown-cool-gray/40 rounded-xl bg-georgetown-off-white/50 flex items-center justify-center">
          <p className="font-sans text-xs text-georgetown-cool-gray text-center px-4">
            Visual coming soon
          </p>
        </div>
      </div>

      {/* RIGHT: Text column */}
      <div className="flex-[1.2] flex flex-col gap-5 justify-center">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-georgetown-blue leading-tight">
          The Fishery Data Landscape
        </h2>

        <SectionLabel>Section 2.1</SectionLabel>

        <p className="font-display text-base md:text-lg lg:text-xl text-georgetown-blue leading-relaxed font-medium">
          The resulting data landscape is not a single, centrally governed
          enterprise but a complex federation of programmatic data producers and
          consumers shaped by statutory mandates, scientific methodologies,
          regulatory processes, and regional contexts.
        </p>

        <div className="space-y-3">
          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              Three interconnected missions
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              The agency's mission encompasses three interconnected
              objectives: sustainable fisheries management, protected species
              conservation, and habitat protection.
            </p>
            <p className="font-sans text-[10px] md:text-xs text-georgetown-cool-gray mt-1 italic">
              Wallace & Fletcher (2000)
            </p>
          </div>

          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              Decentralized by design
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              These are pursued simultaneously across a decentralized structure
              of eight Regional Fishery Management Councils, five regional
              offices, and six science centers, each with distinct
              jurisdictions, species portfolios
              portfolios, and operational responsibilities.
            </p>
            <p className="font-sans text-[10px] md:text-xs text-georgetown-cool-gray mt-1 italic">
              Magnuson-Stevens Act (2007)
            </p>
            <div className="flex items-center gap-1.5 mt-2">
          <span className="inline-flex items-center justify-center gap-1.5 border border-georgetown-blue/40 bg-georgetown-blue/10 rounded-full px-3 py-0.5 w-[145px]">
            <span className="font-display text-sm font-bold text-georgetown-blue">8</span>
            <span className="text-[8px] font-semibold uppercase tracking-wider text-georgetown-blue">
              Councils
            </span>
          </span>
          <span className="inline-flex items-center justify-center gap-1.5 border border-georgetown-blue/40 bg-georgetown-blue/10 rounded-full px-3 py-0.5 w-[145px]">
            <span className="font-display text-sm font-bold text-georgetown-blue">5</span>
            <span className="text-[8px] font-semibold uppercase tracking-wider text-georgetown-blue">
              Regional Offices
            </span>
          </span>
          <span className="inline-flex items-center justify-center gap-1.5 border border-georgetown-blue/40 bg-georgetown-blue/10 rounded-full px-3 py-0.5 w-[145px]">
            <span className="font-display text-sm font-bold text-georgetown-blue">6</span>
            <span className="text-[8px] font-semibold uppercase tracking-wider text-georgetown-blue">
              Science Centers
            </span>
          </span>
          <span className="inline-flex items-center justify-center gap-1.5 border border-georgetown-blue/40 bg-georgetown-blue/10 rounded-full px-3 py-0.5 w-[145px]">
            <span className="font-display text-sm font-bold text-georgetown-blue">8</span>
            <span className="text-[8px] font-semibold uppercase tracking-wider text-georgetown-blue">
              Natl Pgms
            </span>
          </span>
        </div>
          </div>

          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              The fundamental dynamic
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              Across all of these programs, the fundamental dynamic is the same:
              data is produced by one organizational unit and consumed by
              others, often multiple others, each with different quality
              requirements, access needs, and analytical purposes.
            </p>
          </div>
        </div>

        <p className="font-sans text-xs text-georgetown-cool-gray italic leading-relaxed pt-2 border-t border-georgetown-cool-gray/30">
          The gap between how data is collected, and how it is consumed, is a central tension that the
          architecture proposed in this paper is designed to resolve. This paper
          will address that tension through the lens of Conway's Law and Domain-Driven
          Design bounded contexts.
        </p>

        {/* Organizational scale stat pills */}
        {/* <div className="flex items-center justify-center gap-1.5 mt-2">
          <span className="inline-flex items-center justify-center gap-1.5 border border-georgetown-blue/40 bg-georgetown-blue/10 rounded-full px-3 py-0.5 w-[145px]">
            <span className="font-display text-sm font-bold text-georgetown-blue">8</span>
            <span className="text-[8px] font-semibold uppercase tracking-wider text-georgetown-blue">
              Councils
            </span>
          </span>
          <span className="inline-flex items-center justify-center gap-1.5 border border-georgetown-blue/40 bg-georgetown-blue/10 rounded-full px-3 py-0.5 w-[145px]">
            <span className="font-display text-sm font-bold text-georgetown-blue">5</span>
            <span className="text-[8px] font-semibold uppercase tracking-wider text-georgetown-blue">
              Regional Offices
            </span>
          </span>
          <span className="inline-flex items-center justify-center gap-1.5 border border-georgetown-blue/40 bg-georgetown-blue/10 rounded-full px-3 py-0.5 w-[145px]">
            <span className="font-display text-sm font-bold text-georgetown-blue">6</span>
            <span className="text-[8px] font-semibold uppercase tracking-wider text-georgetown-blue">
              Science Centers
            </span>
          </span>
          <span className="inline-flex items-center justify-center gap-1.5 border border-georgetown-blue/40 bg-georgetown-blue/10 rounded-full px-3 py-0.5 w-[145px]">
            <span className="font-display text-sm font-bold text-georgetown-blue">8</span>
            <span className="text-[8px] font-semibold uppercase tracking-wider text-georgetown-blue">
              Natl Pgms
            </span>
          </span>
        </div> */}
      </div>
    </div>
  );
}