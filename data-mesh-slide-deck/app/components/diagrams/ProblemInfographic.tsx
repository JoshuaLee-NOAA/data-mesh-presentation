"use client";

import { TriangleAlert } from "lucide-react";

const cards = [
  {
    id: 1,
    icon: TriangleAlert,
    title: "The Mission Dependency",
    subtitle: "Data as the Evidentiary Foundation",
    body: "The agency's regulatory decisions — from annual catch limits to fishery closures — depend on analytical data that must be accurate, accessible, and legally defensible. When data quality, provenance, and accessibility cannot be assessed with confidence, the agency's ability to make timely, defensible management decisions is directly impaired.",
    color: "teal",
  },
  {
    id: 2,
    icon: TriangleAlert,
    title: "Programmatic Autonomy",
    subtitle: "Decades of Independent System Development",
    body: "The data systems were not designed as an enterprise architecture. They accumulated through decades of programmatic and regional autonomy, each built to serve a specific program's needs with the technology available at the time, under local governance practices that evolved independently.",
    color: "gold",
  },
  {
    id: 3,
    icon: TriangleAlert,
    title: "Architectural Fragmentation",
    subtitle: "A Landscape of Siloed Data Assets",
    body: "The result is a landscape in which data is abundant but difficult to discover, assess, and integrate across organizational boundaries. This fragmentation is not a failure of any individual program — each serves its purpose — but a structural consequence of an organizational model.",
    color: "teal",
  },
  {
    id: 4,
    icon: TriangleAlert,
    title: "The Structural Condition",
    subtitle: "Distributed Ownership Without a Shared Platform",
    body: "A structural consequence of a model in which data ownership, infrastructure, and governance are distributed without a shared platform that makes cross-domain data sharing the path of least resistance. The architectural problem cascades into a mission problem.",
    color: "gold",
  },
];

const colorClasses = (c: string) =>
  c === "teal"
    ? { title: "text-georgetown-teal", icon: "text-georgetown-teal", iconBg: "bg-georgetown-teal/10" }
    : { title: "text-georgetown-gold", icon: "text-georgetown-gold", iconBg: "bg-georgetown-gold/10" };

export default function ProblemInfographic() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 w-full">
      {cards.map((c) => {
        const Icon = c.icon;
        const colors = colorClasses(c.color);
        return (
          <div
            key={c.id}
            className="flex flex-col border border-georgetown-blue bg-white rounded-xl shadow-lg p-5 md:p-6 text-left"
          >
            <span className="font-sans text-[10px] uppercase tracking-wider text-georgetown-cool-gray font-semibold mb-3">
              {c.subtitle}
            </span>
            <div className="flex items-start gap-3 mb-2">
              <div className={`w-8 h-8 rounded-lg ${colors.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                <Icon size={16} className={colors.icon} />
              </div>
              <p className={`font-display text-sm md:text-base font-bold ${colors.title}`}>
                {c.title}
              </p>
            </div>
            <p className="font-sans text-xs md:text-sm text-georgetown-gray leading-relaxed flex-1">
              {c.body}
            </p>
          </div>
        );
      })}
    </div>
  );
}