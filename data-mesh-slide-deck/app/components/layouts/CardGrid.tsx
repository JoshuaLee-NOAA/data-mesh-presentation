import { ReactNode } from "react";

type GridCols = 2 | 3 | 4;

interface CardGridProps {
  children: ReactNode;
  cols?: GridCols;
  className?: string;
}

const colsClasses: Record<GridCols, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export default function CardGrid({
  children,
  cols = 2,
  className = "",
}: CardGridProps) {
  return (
    <div className={`grid ${colsClasses[cols]} gap-4 lg:gap-6 w-full max-w-6xl mx-auto px-6 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}