"use client";

interface SlideArrowsProps {
  onNext: () => void;
  onPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function SlideArrows({
  onNext,
  onPrev,
  isFirst,
  isLast,
}: SlideArrowsProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-50">
      {!isFirst && (
        <button
          onClick={onPrev}
          aria-label="Previous slide"
          className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-georgetown-teal text-white arrow-glow-teal arrow-btn"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7-7 7 7" />
          </svg>
        </button>
      )}
      {!isLast && (
        <button
          onClick={onNext}
          aria-label="Next slide"
          className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-georgetown-gold/80 text-white arrow-glow-gold arrow-btn"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7 7 7-7" />
          </svg>
        </button>
      )}
    </div>
  );
}