"use client";

import SectionLabel from "../ui/SectionLabel";

export default function Slide09ArchitectureFollowsOrganization() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch w-full h-full px-4 lg:px-8">
      {/* LEFT: Visual column — split 50/50 stacked */}
      <div className="flex-[0.8] flex flex-col gap-4 h-full">
        {/* Top: Conway portrait + quote overlay */}
        <div className="flex-1 relative rounded-xl overflow-hidden bg-georgetown-blue flex items-center justify-center">
          {/* Conway portrait as background */}
          <img
            src="/conway.png"
            alt="Melvin Conway"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/35" />
          {/* Quote overlay */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 py-4 max-w-md">
            <p className="font-display text-sm md:text-base lg:text-lg text-white italic leading-relaxed drop-shadow-lg">
              &ldquo;Conway&rsquo;s Law: Systems mirror organizational
              communication structures. The fragmentation at NOAA Fisheries
              isn&rsquo;t a bug; it&rsquo;s a structural consequence of
              distributed regional and programmatic autonomy.&rdquo;
            </p>
            <p className="font-sans text-[9px] md:text-[10px] text-georgetown-gold mt-2 drop-shadow-md">
              — Conway, M. (1968). &ldquo;How Do Committees Invent?&rdquo;{" "}
              <span className="italic">Datamation.</span>
            </p>
          </div>
        </div>

        {/* Bottom: Bounded Contexts vertical diagram */}
        <div className="flex-1 flex flex-col items-center justify-center gap-2 p-3">
          {/* Top domain: Stock Assessment */}
          <div className="w-full max-w-[290px] h-[110px] border-2 border-dashed border-georgetown-blue rounded-lg p-3 text-center bg-white">
            <span className="text-[8px] uppercase tracking-wider text-georgetown-teal font-bold">
              bounded context
            </span>
            <p className="font-display text-[11px] md:text-xs font-bold text-georgetown-blue mt-0.5">
              Stock Assessment & Surveys
            </p>
            <p className="font-sans text-[9px] md:text-[10px] italic text-georgetown-cool-gray mt-1 leading-tight">
              &ldquo;bycatch&rdquo; = total fishing mortality
              <br />
              <span className="not-italic text-georgetown-gray">A biological modeling input</span>
            </p>
          </div>

          {/* Vertical connector */}
          <div className="flex flex-col items-center py-0.5">
            <span className="text-[8px] md:text-[9px] font-semibold text-georgetown-gold">
              ▼ Data Contract ▲
            </span>
          </div>

          {/* Bottom domain: Fishery Monitoring */}
          <div className="w-full max-w-[290px] h-[110px] border-2 border-dashed border-georgetown-blue rounded-lg p-3 text-center bg-white">
            <span className="text-[8px] uppercase tracking-wider text-georgetown-teal font-bold">
              bounded context
            </span>
            <p className="font-display text-[11px] md:text-xs font-bold text-georgetown-blue mt-0.5">
              Fishery Monitoring
            </p>
            <p className="font-sans text-[9px] md:text-[10px] italic text-georgetown-cool-gray mt-1 leading-tight">
              &ldquo;bycatch&rdquo; = fish harvested but
              <br />
              not kept for personal use
              <br />
              <span className="not-italic text-georgetown-gray">A regulatory definition under MSA &sect;3(2)</span>
            </p>
          </div>

          {/* Caption — defines bounded context */}
          <p className="font-sans text-[7px] md:text-[8px] text-georgetown-cool-gray text-center max-w-[260px] leading-tight mt-1">
            <span className="italic">A bounded context is a boundary within
            which a particular domain model applies consistently — with its
            own ubiquitous language, quality standards, and data semantics.
            — Evans (2003)</span>
          </p>
        </div>
      </div>

      {/* RIGHT: Text column */}
      <div className="flex-[1.2] flex flex-col gap-5 justify-center">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-georgetown-blue leading-tight">
          Architecture Follows Organization
        </h2>

        <SectionLabel className="-mt-3">Section 3.4</SectionLabel>

        <p className="font-display text-base md:text-lg lg:text-xl text-georgetown-blue leading-relaxed font-medium">
          Conway&rsquo;s Law, domain-driven design, and Parnas decomposition
          criteria collectively establish that mission domains — not technology
          layers — are the correct unit of decomposition for analytical data
          architecture.
        </p>

        <div className="space-y-2">
          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              Conway&rsquo;s Law (1968)
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              Organizations produce designs that mirror their communication
              structures. The alignment between organizational structure and
              data architecture is not a preference but a structural constraint.
            </p>
          </div>

          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              Parnas Decomposition (1971)
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              The most effective modularization isolates the design decisions
              most likely to change behind stable interfaces — so that when one
              domain revises its methodology, the blast radius of that change
              is contained within the domain rather than propagating across
              the entire analytical infrastructure.
            </p>
          </div>

          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              Domain-Driven Design (Evans, 2003)
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              Bounded contexts with shared ubiquitous language provide the
              methodology. Domain boundaries are discovered through
              collaborative knowledge crunching with domain experts — not
              inferred from database schemas. (Steinegger et al., 2017)
            </p>
          </div>
        </div>

        <p className="font-sans text-xs text-georgetown-cool-gray italic leading-relaxed pt-2 border-t border-georgetown-cool-gray/30">
          Conway&rsquo;s Law explains why domain-oriented decomposition is
          necessary; Parnas explains why it is architecturally sound; DDD
          provides the methodology for executing it. Together, they establish
          that the correct unit of decomposition is the mission domain —
          respecting boundaries the organization already produces rather than
          overriding them.
        </p>
      </div>
    </div>
  );
}