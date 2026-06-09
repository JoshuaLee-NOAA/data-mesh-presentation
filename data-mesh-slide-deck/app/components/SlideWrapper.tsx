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
      <div className="flex-1 flex items-center justify-center py-6 lg:py-8 w-full h-full">
        {children}
      </div>
    </section>
  );
}
