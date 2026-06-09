"use client";

import { Fish, Shield, Database } from "lucide-react";

export default function MandateVenn() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto" style={{ aspectRatio: "1/1" }}>
      {/* Circle 1: Fisheries Science and Policy (Gold) — top-left */}
      <div
        className="absolute rounded-full border-2 flex flex-col items-center justify-center text-center p-3 shadow-lg"
        style={{
          width: "50%",
          height: "50%",
          top: "5%",
          left: "2%",
          background: "rgba(244, 185, 66, 0.13)",
          borderColor: "rgba(244, 185, 66, 0.5)",
          zIndex: 1,
        }}
      >
        <Fish size={14} className="text-georgetown-gold mb-1" />
        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-georgetown-gold leading-tight text-center mb-1">
          Fisheries Science{" "}
          <br className="md:hidden" />
          & Policy
        </span>
        <span className="text-[7px] md:text-[8px] font-medium text-georgetown-gray leading-tight">
          MSA, ESA, MMPA & NEPA
        </span>
      </div>

      {/* Circle 2: Information Security (Blue) — top-right */}
      <div
        className="absolute rounded-full border-2 flex flex-col items-center justify-center text-center p-3 shadow-lg"
        style={{
          width: "50%",
          height: "50%",
          top: "5%",
          right: "2%",
          background: "rgba(1, 30, 65, 0.10)",
          borderColor: "rgba(1, 30, 65, 0.45)",
          zIndex: 1,
        }}
      >
        <Shield size={14} className="text-georgetown-blue mb-1" />
        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-georgetown-blue leading-tight text-center mb-1">
          Information{" "}
          <br className="md:hidden" />
          Security
        </span>
        <span className="text-[7px] md:text-[8px] font-medium text-georgetown-gray leading-tight">
          NIST SP 800-53
        </span>
      </div>

      {/* Circle 3: Data (Teal) — bottom-center */}
      <div
        className="absolute rounded-full border-2 flex flex-col items-center justify-center text-center p-3 shadow-lg"
        style={{
          width: "50%",
          height: "50%",
           bottom: "3%",
           left: "50%",
           transform: "translateX(-50%)",
           background: "rgba(20, 184, 166, 0.10)",
          borderColor: "rgba(20, 184, 166, 0.45)",
          zIndex: 1,
        }}
      >
        <Database size={14} className="text-georgetown-teal mb-1" />
        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-georgetown-teal mb-1">
          Data
        </span>
        <span className="text-[7px] md:text-[8px] font-medium text-georgetown-gray leading-tight">
          Evidence / OPEN Data Acts
        </span>
      </div>

      {/* Center overlap label with glow animation */}
      <div
        className="absolute bg-white border-2 border-georgetown-blue rounded-lg flex flex-col items-center justify-center text-center p-2 z-20 venn-center-glow"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "32%",
          minHeight: "18%",
        }}
      >
        <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-wider text-georgetown-blue leading-tight">
          Fishery Data Products
        </span>
      </div>

      {/* Tension annotation: Gold-Blue seam (top-center, outside circles) */}
      <div
        className="absolute text-center z-30"
        style={{
          top: "16%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <span className="text-[7px] md:text-[8px] italic text-georgetown-cool-gray leading-tight bg-white/80 px-1.5 rounded">
          quality vs. security
        </span>
      </div>

      {/* Tension annotation: Gold-Teal seam (left side, outside circles) */}
      <div
        className="absolute text-center z-30"
        style={{
          top: "48%",
          left: "0%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <span className="text-[7px] md:text-[8px] italic text-georgetown-cool-gray leading-tight bg-white/80 px-1.5 rounded whitespace-nowrap">
          confidentiality vs. openness
        </span>
      </div>

      {/* Tension annotation: Blue-Teal seam (right side, outside circles) */}
      <div
        className="absolute text-center z-30"
        style={{
          top: "48%",
          right: "0%",
          transform: "translate(50%, -50%)",
        }}
      >
        <span className="text-[7px] md:text-[8px] italic text-georgetown-cool-gray leading-tight bg-white/80 px-1.5 rounded whitespace-nowrap">
          security vs. access
        </span>
      </div>
    </div>
  );
}