"use client";

import SectionLabel from "../ui/SectionLabel";

export default function Slide06ArchitecturalFragmentation() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch w-full h-full px-4 lg:px-8">
      {/* LEFT: Text column */}
      <div className="flex-[1.2] flex flex-col gap-5 justify-center">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-georgetown-blue leading-tight">
          Architectural Fragmentation
        </h2>

        <SectionLabel className="-mt-3">Section 2.2</SectionLabel>

        <p className="font-display text-base md:text-lg lg:text-xl text-georgetown-blue leading-relaxed font-medium">
          NOAA Fisheries' data architecture is an accretion of independently
          developed systems accumulated over decades of programmatic and
          regional autonomy.
        </p>

        <div className="space-y-2">
          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              Limited discovery
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              No enterprise-wide mechanism exists for discovering what data
              exists, where it resides, or who owns it — making data
              acquisition an organizational challenge, not a technical one.
            </p>
          </div>

          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              Inconsistent quality
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              Some science centers document methodology comprehensively while
              others provide no metadata, undermining National Standard 2's
              requirement that data quality be assessable.
            </p>
          </div>

          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              Redundant infrastructure
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              Multiple offices maintain independent copies of reference
              datasets on different sync schedules, and data pipelines are
              reimplemented independently by each consuming office.
            </p>
          </div>

          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              Extended lead times
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              Cross-domain data acquisition can consume weeks or months — by
              the time analysis completes, the management context may have
              shifted or the Council cycle passed.
            </p>
          </div>

          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              Governance gaps
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              NIST SP 800-53, MSA §402(b), and Evidence Act mandates must be
              satisfied independently by each system, producing inconsistent
              implementations and complicating enterprise-wide assurance.
            </p>
          </div>
        </div>

        <p className="font-sans text-xs text-georgetown-cool-gray italic leading-relaxed pt-2 border-t border-georgetown-cool-gray/30">
          These are not failures of individual programs, but the predictable
          result of an architecture without a platform that makes compliant,
          interoperable behavior the path of least resistance.
        </p>
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