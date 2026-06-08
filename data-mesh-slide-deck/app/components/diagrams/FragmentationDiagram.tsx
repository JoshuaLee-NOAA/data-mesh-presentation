"use client";

import { useEffect, useRef } from "react";

interface SiloData {
  region: string;
  fishery: string;
  ingestion: string;
  accentClass: string;
  lineColor: string;
  lineStyle: string;
  lineOpacity: number;
}

const silos: SiloData[] = [
  {
    region: "Northeast",
    fishery: "Fishery A",
    ingestion: "Video hard drive shipped by mail",
    accentClass: "border-georgetown-blue bg-[#EBF0F5]",
    lineColor: "#011E41",
    lineStyle: "solid",
    lineOpacity: 0.6,
  },
  {
    region: "Northeast",
    fishery: "Fishery B",
    ingestion: "FTP server, no metadata",
    accentClass: "border-georgetown-blue bg-[#EBF0F5]",
    lineColor: "#14B8A6",
    lineStyle: "dashed",
    lineOpacity: 0.7,
  },
  {
    region: "Northeast",
    fishery: "Fishery C",
    ingestion: "Dropbox link shared ad-hoc",
    accentClass: "border-georgetown-blue bg-[#EBF0F5]",
    lineColor: "#F4B942",
    lineStyle: "dotted",
    lineOpacity: 0.5,
  },
  {
    region: "West Coast",
    fishery: "Fishery A",
    ingestion: "Emailed species lists",
    accentClass: "border-georgetown-blue bg-[#EBF0F5]",
    lineColor: "#8B5CF6",
    lineStyle: "dashed",
    lineOpacity: 0.3,
  },
  {
    region: "West Coast",
    fishery: "Fishery B",
    ingestion: "Separate database, no API",
    accentClass: "border-georgetown-blue bg-[#EBF0F5]",
    lineColor: "#F43F5E",
    lineStyle: "dashed",
    lineOpacity: 0.55,
  },
  {
    region: "West Coast",
    fishery: "Fishery C",
    ingestion: "Footage not digitized",
    accentClass: "border-georgetown-blue bg-[#EBF0F5]",
    lineColor: "transparent",
    lineStyle: "none",
    lineOpacity: 0,
  },
];

export default function FragmentationDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const svg = svgRef.current;
    if (!container || !svg) return;

    const draw = () => {
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.35;

      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      svg.style.width = w + "px";
      svg.style.height = h + "px";

      let html = "";
      silos.forEach((s, i) => {
        if (s.lineStyle === "none") return;
        const angle = (i / silos.length) * Math.PI * 2 - Math.PI / 2;
        const sx = cx + Math.cos(angle) * radius;
        const sy = cy + Math.sin(angle) * radius;

        const strokeDasharray =
          s.lineStyle === "dashed" ? "5 4" : s.lineStyle === "dotted" ? "2 4" : "";

        html += `<line x1="${sx}" y1="${sy}" x2="${cx}" y2="${cy}" stroke="${s.lineColor}" stroke-width="1.2" stroke-opacity="${s.lineOpacity}"${strokeDasharray ? ` stroke-dasharray="${strokeDasharray}"` : ""}/>`;
      });

      svg.innerHTML = html;
    };

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, []);

  return (
    <div className="relative w-full max-w-[420px] mx-auto" ref={containerRef} style={{ aspectRatio: "1/1" }}>
      <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />

      {/* Center: ML Scientist */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[95px] md:w-[110px] bg-white border-2 border-georgetown-blue rounded-xl shadow-lg flex flex-col items-center justify-center text-center p-2">
        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-georgetown-blue">
          ML Scientist
        </span>
        <span className="text-[8px] md:text-[9px] font-medium text-georgetown-gray mt-0.5 leading-tight">
          Species ID Model
        </span>
      </div>

      {/* Silo cards — positioned radially */}
      {silos.map((s, i) => {
        const angle = (i / silos.length) * Math.PI * 2 - Math.PI / 2;
        const top = `${50 + Math.sin(angle) * 37}%`;
        const left = `${50 + Math.cos(angle) * 37}%`;

        return (
          <div
            key={i}
            className={`absolute z-20 w-[105px] md:w-[120px] border-2 ${s.accentClass} rounded-lg shadow-md p-2 text-center`}
            style={{
              top,
              left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-wider text-georgetown-blue">
              {s.region}
            </p>
            <p className="text-[8px] md:text-[9px] font-semibold text-georgetown-gray mt-0.5">
              {s.fishery}
            </p>
            <p className="text-[7px] md:text-[8px] italic mt-1 pt-1 border-t border-georgetown-cool-gray/30 text-georgetown-cool-gray leading-tight">
              {s.ingestion}
            </p>
          </div>
        );
      })}
    </div>
  );
}