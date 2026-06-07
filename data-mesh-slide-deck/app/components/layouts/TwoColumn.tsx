import { ReactNode } from "react";

interface TwoColumnProps {
  children: ReactNode;
  leftWeight?: string;
  rightWeight?: string;
  className?: string;
}

export default function TwoColumn({
  children,
  leftWeight = "55",
  rightWeight = "45",
  className = "",
}: TwoColumnProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-6 lg:gap-10 items-center w-full max-w-6xl mx-auto px-6 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}