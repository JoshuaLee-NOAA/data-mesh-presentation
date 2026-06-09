"use client";

import { Video, Clock, Archive } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";

export default function Slide04EMCaseStudy() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch w-full h-full px-4 lg:px-8">
      {/* LEFT: Text column */}
      <div className="flex-[1.2] flex flex-col gap-5 justify-center">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-georgetown-blue leading-tight">
          Case Study: Electronic Monitoring
        </h2>

        <SectionLabel className="-mt-3">Section 1.4</SectionLabel>

        <p className="font-display text-base md:text-lg lg:text-xl text-georgetown-blue leading-relaxed font-medium">
          The EM data product was selected as a running case study because it
          exhibits characteristics that generalize to many NOAA Fisheries data
          products while representing the full complexity of the agency's
          regulatory environment.
        </p>

        <div className="space-y-3">
          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              Multiple producers & consumers
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              EM service providers collect video, sensor data, and metadata from
              fishing vessels. Stock assessment scientists, protected species
              biologists, and enforcement personnel each consume it for
              different purposes — requiring flexible access.
            </p>
            <p className="font-sans text-[10px] md:text-xs text-georgetown-cool-gray mt-1 italic">
              Perrin & Broda (2024) — Customer 360 case study pattern
            </p>
          </div>

          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              Strict confidentiality
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              Subject to MSA §402(b) and §403(c), requiring fine-grained access
              controls that differentiate between what each consumer role can
              see from the same underlying dataset.
            </p>
          </div>

          <div className="tier-dot">
            <p className="font-display text-sm font-bold text-georgetown-blue">
              Three-stage lifecycle
            </p>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray mt-0.5 leading-relaxed">
              Data creation during the fishing year, 12-month active retention
              for compliance and accountability, then 5-year NARA archival
              before destruction.
            </p>
            {/* Lifecycle pill chain — uniform, full-width, no backgrounds */}
            <p className="font-sans text-[10px] md:text-xs text-georgetown-cool-gray mt-1 italic">
              Alger (2020) — fishing year and retention; NARA (2020) — archival schedule
            </p>
            <div className="flex items-center gap-1.5 mt-2 w-full">
              <span className="inline-flex items-center justify-center gap-1.5 border border-georgetown-blue/40 bg-georgetown-blue/10 rounded-full px-3 py-0.5 w-[145px]">
                <Video size={10} className="text-georgetown-blue shrink-0" />
                <span className="text-[9px] font-semibold uppercase tracking-wider text-georgetown-blue">
                  Monitoring
                </span>
              </span>
              <span className="text-georgetown-cool-gray/50 text-xs font-bold">→</span>
              <span className="inline-flex items-center justify-center gap-1.5 border border-georgetown-blue/40 bg-georgetown-blue/10 rounded-full px-3 py-0.5 w-[145px]">
                <Clock size={10} className="text-georgetown-blue shrink-0" />
                <span className="text-[9px] font-semibold uppercase tracking-wider text-georgetown-blue">
                  12-Mo Retention
                </span>
              </span>
              <span className="text-georgetown-cool-gray/50 text-xs font-bold">→</span>
              <span className="inline-flex items-center justify-center gap-1.5 border border-georgetown-blue/40 bg-georgetown-blue/10 rounded-full px-3 py-0.5 w-[145px]">
                <Archive size={10} className="text-georgetown-blue shrink-0" />
                <span className="text-[9px] font-semibold uppercase tracking-wider text-georgetown-blue">
                  NARA 5yr
                </span>
              </span>
            </div>
          </div>
        </div>

        <p className="font-sans text-xs text-georgetown-cool-gray italic leading-relaxed pt-2 border-t border-georgetown-cool-gray/30">
          Throughout the architecture, the EM data product demonstrates how each
          principle translates to concrete decisions — domain ownership, data
          product specification, platform configuration, and governance
          enforcement.
        </p>
      </div>

      {/* RIGHT: Visual column */}
      <div className="flex-[0.8] flex items-center justify-center w-full h-full">
        <img
          src="/slide-4.png"
          alt="Electronic Monitoring camera system on a fishing vessel"
          className="w-full h-full object-cover object-center rounded-xl"
        />
      </div>
    </div>
  );
}