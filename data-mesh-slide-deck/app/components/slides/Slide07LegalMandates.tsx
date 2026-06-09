"use client";

import SectionLabel from "../ui/SectionLabel";
import MandateVenn from "../diagrams/MandateVenn";

export default function Slide07LegalMandates() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch w-full h-full px-4 lg:px-8">
      {/* LEFT: Visual column */}
      <div className="flex-[0.8] flex items-center justify-center w-full h-full">
        <MandateVenn />
      </div>

      {/* RIGHT: Text column */}
      <div className="flex-[1.2] flex flex-col gap-5 justify-center">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-georgetown-blue leading-tight">
          Legal and Regulatory Mandates
        </h2>

        <SectionLabel className="-mt-3">Section 2.3</SectionLabel>

        <p className="font-display text-base md:text-lg lg:text-xl text-georgetown-blue leading-relaxed font-medium">
          Fishery data products must satisfy overlapping statutory mandates that
          create inherent tensions between openness and confidentiality.
        </p>

        <div className="space-y-2">
          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              Magnuson-Stevens Act
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              National Standard 2 requires fisheries to be managed using the
              &ldquo;best scientific information available,&rdquo; pushing
              agencies toward data quality and broad access. Simultaneously,
              §402(b) mandates strict confidentiality of proprietary fishery data
              such as catch records and vessel locations — pulling in the
              opposite direction toward restricted access.
            </p>
          </div>

          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              NIST SP 800-53
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              Mandates security controls across access control, audit, and system
              integrity. Each system must independently demonstrate compliance,
              driving redundant effort across the fragmented landscape.
            </p>
          </div>

          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              Evidence Act / OPEN Data Act
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              Requires agencies to publish data openly by default and use
              evidence for decision-making — but offers no operational guidance
              on satisfying this mandate while respecting confidentiality.
            </p>
          </div>
        </div>

        <p className="font-sans text-xs text-georgetown-cool-gray italic leading-relaxed pt-2 border-t border-georgetown-cool-gray/30">
          These mandates are not inherently conflicting, but the current
          architecture forces each program to interpret and reconcile them
          independently — producing inconsistent, non-interoperable outcomes.
        </p>
      </div>
    </div>
  );
}