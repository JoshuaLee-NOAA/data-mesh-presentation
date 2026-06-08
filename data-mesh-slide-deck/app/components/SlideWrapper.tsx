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
      <div className="flex-1 flex items-center justify-center pt-14 pb-16 px-6 lg:px-12">
        {children}
      </div>
    </section>
  );
}