"use client";

import { FlaskConical } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";

const questions = [
  {
    id: "RQ1",
    text: "What constitutes an appropriate data mesh reference architecture for the NOAA Fisheries context?",
  },
  {
    id: "RQ2",
    text: "How can the four data mesh principles be instantiated using specific GCP services and configurations?",
  },
  {
    id: "RQ3",
    text: "How can federal regulatory and security requirements be encoded as computational governance policies within a data mesh framework?",
  },
  {
    id: "RQ4",
    text: "What is a viable migration path from the current fragmented state toward a data mesh architecture?",
  },
  {
    id: "RQ5",
    text: "What organizational and operational capabilities are necessary to sustain a data mesh beyond initial migration?",
  },
];

export default function Slide03ResearchQuestions() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch w-full h-full px-4 lg:px-8">
      {/* LEFT: Visual column (flex-row default = visual first in DOM = left side) */}
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
          Research Questions & Scope
        </h2>

        <SectionLabel className="-mt-3">Sections 1.2–1.3</SectionLabel>

        <p className="font-display text-base md:text-lg lg:text-xl text-georgetown-blue leading-relaxed font-medium">
          This paper addresses five research questions that span reference
          architecture definition, GCP implementation, computational
          governance, migration strategy, and organizational sustainability.
        </p>

        <div className="space-y-2">
          {questions.map((q) => (
            <div key={q.id} className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-georgetown-teal/10 shrink-0 mt-0.5">
                <FlaskConical size={14} className="text-georgetown-teal" />
              </span>
              <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-georgetown-teal mt-1.5 shrink-0">
                {q.id}
              </span>
              <p className="font-sans text-xs md:text-sm text-georgetown-gray leading-relaxed">
                {q.text}
              </p>
            </div>
          ))}
        </div>

        <p className="font-sans text-xs text-georgetown-cool-gray italic leading-relaxed pt-2 border-t border-georgetown-cool-gray/30">
          The goal: cross-domain data interoperability on GCP that satisfies MSA
          confidentiality, NIST security, and federal governance — enforced by
          the platform, not by manual processes. The reference architecture is
          designed with sufficient specificity that an engineering team could
          derive actionable implementation guidance.
        </p>
      </div>
    </div>
  );
}