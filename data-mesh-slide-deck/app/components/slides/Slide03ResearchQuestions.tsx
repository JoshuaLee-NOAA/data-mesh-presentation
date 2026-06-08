"use client";

import { Search, Shield, GitMerge, Cloud, ArrowRightLeft } from "lucide-react";

const questions = [
  {
    id: "RQ1",
    icon: Search,
    color: "teal",
    text: "How can NOAA Fisheries' current data architecture be characterized in terms of interoperability, governance, and discoverability?",
  },
  {
    id: "RQ2",
    icon: Shield,
    color: "gold",
    text: "What are the organizational barriers — technical, cultural, and legal/regulatory — that perpetuate data silos within the agency?",
  },
  {
    id: "RQ3",
    icon: GitMerge,
    color: "teal",
    text: "How might the four data mesh principles be applied within NOAA Fisheries to achieve cross-domain interoperability?",
  },
  {
    id: "RQ4",
    icon: Cloud,
    color: "gold",
    text: "What GCP native services can satisfy the requirements of a self-serve data platform while maintaining compliance with federal security standards?",
  },
  {
    id: "RQ5",
    icon: ArrowRightLeft,
    color: "teal",
    text: "What migration strategy can transform the current fragmented architecture into a federated data mesh, supported by a formal change management framework?",
  },
];

const scopeStats = [
  { value: "6", label: "Regions" },
  { value: "6", label: "Science Centers" },
  { value: "8", label: "Regional Fishery\nManagement Councils" },
];

const colorClasses = (c: string) =>
  c === "teal"
    ? { pillBg: "bg-georgetown-teal/10", pillText: "text-georgetown-teal", iconColor: "text-georgetown-teal", iconBg: "bg-georgetown-teal/10" }
    : { pillBg: "bg-georgetown-gold/10", pillText: "text-georgetown-gold", iconColor: "text-georgetown-gold", iconBg: "bg-georgetown-gold/10" };

export default function Slide03ResearchQuestions() {
  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-6 lg:px-12">
      <span className="font-sans text-xs uppercase tracking-[0.2em] text-georgetown-gold font-semibold mb-2">
        Research Framework
      </span>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-georgetown-blue mb-2 leading-tight text-center">
        Research Questions & Scope
      </h2>
      <p className="font-sans text-sm text-georgetown-gray mb-6 text-center max-w-2xl">
        Five core research questions bounded within NOAA Fisheries' organizational footprint
      </p>

      {/* Research Question Cards — 3 columns on lg, 2 on sm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 w-full mb-6">
        {questions.map((q) => {
          const colors = colorClasses(q.color);
          const Icon = q.icon;
          return (
            <div
              key={q.id}
              className="flex flex-col border border-georgetown-blue bg-white rounded-xl shadow-lg p-4 md:p-5 text-left"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-8 h-8 rounded-lg ${colors.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                  <Icon size={16} className={colors.iconColor} />
                </div>
                <span className={`font-sans text-[10px] font-bold uppercase tracking-wider ${colors.pillText} ${colors.pillBg} px-2 py-0.5 rounded-full`}>
                  {q.id}
                </span>
              </div>
              <p className="font-sans text-sm md:text-base text-georgetown-gray leading-relaxed flex-1">
                {q.text}
              </p>
            </div>
          );
        })}
      </div>

      {/* Scope boundary card */}
      <div className="border border-georgetown-cool-gray/40 bg-georgetown-off-white rounded-xl p-5 md:p-6 w-full">
        <span className="font-sans text-[10px] uppercase tracking-wider text-georgetown-cool-gray font-semibold mb-3 block">
          Scope Boundary
        </span>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {scopeStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-georgetown-blue">
                {stat.value}
              </p>
              <p className="font-sans text-xs md:text-sm text-georgetown-gray leading-tight whitespace-pre-line">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}