"use client";

import { useEffect, useCallback } from "react";
import TopNav from "./components/TopNav";
import SlideArrows from "./components/SlideArrows";
import SlideWrapper from "./components/SlideWrapper";
import Slide02ProblemStatement from "./components/slides/Slide02ProblemStatement";
import Slide03ResearchQuestions from "./components/slides/Slide03ResearchQuestions";
import Slide04EMCaseStudy from "./components/slides/Slide04EMCaseStudy";
import Slide05DataLandscape from "./components/slides/Slide05DataLandscape";
import Slide06ArchitecturalFragmentation from "./components/slides/Slide06ArchitecturalFragmentation";
import Slide07LegalMandates from "./components/slides/Slide07LegalMandates";
import Slide08BigDataEvolution from "./components/slides/Slide08BigDataEvolution";
import Slide09ArchitectureFollowsOrganization from "./components/slides/Slide09ArchitectureFollowsOrganization";
import Slide10FourPrinciples from "./components/slides/Slide10FourPrinciples";
import Slide11DomainDecomposition from "./components/slides/Slide11DomainDecomposition";
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
            src="/hero-school.svg"
            alt="School of skipjack tuna"
            className="w-48 h-auto md:w-64 lg:w-72 mb-4 hero-glow hero-float"
          />
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-georgetown-blue max-w-3xl leading-tight">
            An Architectural Approach to Cross-Domain Data Interoperability at
            NOAA Fisheries
          </h1>
          <p className="font-sans text-lg lg:text-2xl text-georgetown-teal mt-3">
            Applying the Data Mesh Paradigm in Google Cloud Platform
          </p>
          <div className="w-20 h-1 gradient-divider mt-4" />
          <div className="flex items-center gap-3 mt-4">
            <span className="font-sans text-sm lg:text-base text-georgetown-gray">
              Joshua Lee — Georgetown University — Spring 2026
            </span>
          </div>
          {/* Avatar below author line */}
          <img
            src="/IMG_1865.jpg"
            alt="Joshua Lee"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-3 border-georgetown-gold mt-3 shadow-lg object-cover"
          />
          {/* Disclaimer */}
          <p className="font-sans text-[10px] text-georgetown-cool-gray italic text-center max-w-2xl leading-relaxed mt-4 pt-3 border-t border-georgetown-cool-gray/20">
            The views expressed here are my own and do not reflect the official
            positions of NOAA Fisheries or any affiliated entities. This work is
            intended for personal and academic purposes only.
          </p>
        </div>
      </SlideWrapper>

      {/* Slide 2: The Core Problem */}
      <SlideWrapper slideId="slide-02">
        <Slide02ProblemStatement />
      </SlideWrapper>

      {/* Slide 3: Research Questions & Scope */}
      <SlideWrapper slideId="slide-03">
        <Slide03ResearchQuestions />
      </SlideWrapper>

      {/* Slide 4: Case Study — Electronic Monitoring */}
      <SlideWrapper slideId="slide-04">
        <Slide04EMCaseStudy />
      </SlideWrapper>

      {/* Slide 5: The Fishery Data Landscape */}
      <SlideWrapper slideId="slide-05">
        <Slide05DataLandscape />
      </SlideWrapper>

      {/* Slide 6: Architectural Fragmentation */}
      <SlideWrapper slideId="slide-06">
        <Slide06ArchitecturalFragmentation />
      </SlideWrapper>

      {/* Slide 7: Legal and Regulatory Mandates */}
      <SlideWrapper slideId="slide-07">
        <Slide07LegalMandates />
      </SlideWrapper>

      {/* Slide 8: Evolution of Big Data Architectures */}
      <SlideWrapper slideId="slide-08">
        <Slide08BigDataEvolution />
      </SlideWrapper>

      {/* Slide 9: Architecture Follows Organization */}
      <SlideWrapper slideId="slide-09">
        <Slide09ArchitectureFollowsOrganization />
      </SlideWrapper>

      {/* Slide 10: The Four Interdependent Principles */}
      <SlideWrapper slideId="slide-10">
        <Slide10FourPrinciples />
      </SlideWrapper>

      {/* Slide 11: NOAA Fisheries Domain Decomposition */}
      <SlideWrapper slideId="slide-11">
        <Slide11DomainDecomposition />
      </SlideWrapper>

      {/* Placeholder for remaining slides (12–25) */}
      {slides.slice(11).map((slide) => (
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