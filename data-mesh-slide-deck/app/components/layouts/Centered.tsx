import { ReactNode } from "react";

interface CenteredProps {
  children: ReactNode;
  className?: string;
}

export default function Centered({ children, className = "" }: CenteredProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center w-full max-w-3xl mx-auto px-6 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}