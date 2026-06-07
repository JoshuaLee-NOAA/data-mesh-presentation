"use client";

import { useEffect, useState, useRef, useCallback } from "react";

export interface SlideMeta {
  id: string;
  section: string;
}

export function useActiveSlide(slides: SlideMeta[]) {
  const [activeIndex, setActiveIndex] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const slideId = entry.target.getAttribute("data-slide-id");
          const idx = slides.findIndex((s) => s.id === slideId);
          if (idx !== -1) {
            setActiveIndex(idx);
          }
        }
      });
    },
    [slides]
  );

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
      rootMargin: "0px",
    });

    const slideElements = document.querySelectorAll("[data-slide-id]");
    slideElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [handleIntersection]);

  const activeSection = slides[activeIndex]?.section ?? "";
  const totalSlides = slides.length;

  const goToSlide = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, slides.length - 1));
    const el = document.querySelector(
      `[data-slide-id="${slides[clamped].id}"]`
    );
    el?.scrollIntoView({ behavior: "smooth" });
  }, [slides]);

  const goNext = useCallback(() => goToSlide(activeIndex + 1), [activeIndex, goToSlide]);
  const goPrev = useCallback(() => goToSlide(activeIndex - 1), [activeIndex, goToSlide]);

  return {
    activeIndex,
    activeSection,
    totalSlides,
    goToSlide,
    goNext,
    goPrev,
    isFirst: activeIndex === 0,
    isLast: activeIndex === slides.length - 1,
  };
}