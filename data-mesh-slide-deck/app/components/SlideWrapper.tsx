import { ReactNode } from "react";

interface SlideWrapperProps {
  slideId: string;
  children: ReactNode;
  className?: string;
}

export default function SlideWrapper({
  slideId,
  children,
  className = "",
}: SlideWrapperProps) {
  return (
    <section
      data-slide-id={slideId}
      className={`slide bg-white ${className}`}
    >
      <div className="flex-1 flex items-center justify-center pt-16 pb-20 px-4">
        {children}
      </div>
    </section>
  );
}