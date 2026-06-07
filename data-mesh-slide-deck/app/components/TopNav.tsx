"use client";

import { useState, useRef, useEffect } from "react";

interface SlideInfo {
  id: string;
  title: string;
}

interface TopNavProps {
  slides: SlideInfo[];
  currentSlide: number;
  totalSlides: number;
  onNavigate: (slideId: string) => void;
}

export default function TopNav({
  slides,
  currentSlide,
  totalSlides,
  onNavigate,
}: TopNavProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const progressPercent =
    totalSlides > 0 ? Math.round((currentSlide / totalSlides) * 100) : 0;

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-georgetown-cool-gray/20">
      {/* Main nav bar */}
      <div className="relative flex items-center justify-between max-w-7xl mx-auto px-4 lg:px-6 h-12">
        {/* Left: Logo placeholder */}
        <div className="flex items-center shrink-0">
          <img
            src="/logo-skipjack.png"
            alt="Logo"
            className="h-7 md:h-8 w-auto"
          />
        </div>

        {/* Center: Slide counter — perfectly centered */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="text-sm md:text-base font-semibold text-georgetown-blue tabular-nums tracking-tight">
            {currentSlide} / {totalSlides}
          </span>
        </div>

        {/* Right: Content button + pill */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0" ref={dropdownRef}>
          {/* Content dropdown button */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-xs md:text-sm font-medium text-georgetown-blue bg-transparent rounded-full px-2 py-1 md:px-3 md:py-1.5 cursor-pointer hover:bg-georgetown-off-white transition-colors"
            >
              <span>Content</span>
              <svg
                width="10" height="10" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
                className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 max-h-72 overflow-y-auto bg-white border border-georgetown-cool-gray/20 rounded-xl shadow-xl z-50">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      onNavigate(s.id);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-[11px] transition-colors first:rounded-t-xl last:rounded-b-xl ${
                      currentSlide === i + 1
                        ? "bg-georgetown-teal/10 text-georgetown-teal font-semibold"
                        : "text-georgetown-gray hover:bg-georgetown-off-white"
                    }`}
                  >
                    <span className="text-georgetown-cool-gray mr-2 tabular-nums">
                      {i + 1}.
                    </span>
                    {s.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Georgetown Capstone pill */}
          <span className="hidden md:inline-block bg-georgetown-teal text-white text-[10px] md:text-xs font-semibold px-2 py-1 md:px-3 md:py-1 rounded-full whitespace-nowrap">
            Georgetown Capstone
          </span>
        </div>
      </div>

      {/* Progress bar with gradient */}
      <div className="h-[3px] bg-georgetown-cool-gray/15">
        <div
          className="h-full gradient-divider progress-bar"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}