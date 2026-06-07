"use client";

import { useEffect, useCallback } from "react";
import TopNav from "./components/TopNav";
import SlideArrows from "./components/SlideArrows";
import SlideWrapper from "./components/SlideWrapper";
import { useActiveSlide } from "../lib/useActiveSlide";
import { slides } from "../data/slides";

export default function Home() {
  const {
    activeIndex,
    activeSection,
    totalSlides,
    goToSlide,
    goNext,
    goPrev,
    isFirst,
    isLast,
  } = useActiveSlide(slides);

  const handleNavigate = useCallback(
    (slideId: string) => {
      const idx = slides.findIndex((s) => s.id === slideId);
      if (idx !== -1) goToSlide(idx);
    },
    [goToSlide]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  return (
    <main className="slide-container h-dvh bg-white">
      <TopNav
        slides={slides}
        currentSlide={activeIndex + 1}
        totalSlides={totalSlides}
        onNavigate={handleNavigate}
      />

      {/* Slide 1: Title */}
      <SlideWrapper slideId="slide-01">
        <div className="flex flex-col items-center text-center">
          {/* Hero image */}
          <img
            src="/hero-school.png"
            alt="School of skipjack tuna"
            className="w-48 h-auto md:w-64 lg:w-72 mb-6 hero-glow hero-float"
          />
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-georgetown-blue max-w-3xl leading-tight">
            An Architectural Approach to Cross-Domain Data Interoperability at
            NOAA Fisheries
          </h1>
          <p className="font-sans text-lg lg:text-2xl text-georgetown-teal mt-4">
            Applying the Data Mesh Paradigm in Google Cloud Platform
          </p>
          <div className="w-20 h-1 gradient-divider mt-5" />
          <div className="flex items-center gap-3 mt-6">
            <span className="font-sans text-sm lg:text-base text-georgetown-gray">
              Joshua Lee — Georgetown University — Spring 2026
            </span>
          </div>
          {/* Avatar below author line */}
          <img
            src="/IMG_1865.jpg"
            alt="Joshua Lee"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-3 border-georgetown-gold mt-4 shadow-lg object-cover"
          />
        </div>
      </SlideWrapper>

      {/* Placeholder for remaining slides */}
      {slides.slice(1).map((slide) => (
        <SlideWrapper key={slide.id} slideId={slide.id}>
          <div className="text-center">
            <p className="font-display text-3xl text-georgetown-cool-gray">
              {slide.title}
            </p>
            <p className="font-sans text-georgetown-cool-gray mt-2">
              Slide {slide.id.split("-")[1]} — Coming soon
            </p>
          </div>
        </SlideWrapper>
      ))}

      <SlideArrows
        onNext={goNext}
        onPrev={goPrev}
        isFirst={isFirst}
        isLast={isLast}
      />
    </main>
  );
}