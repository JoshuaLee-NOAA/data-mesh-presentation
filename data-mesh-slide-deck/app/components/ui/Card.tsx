"use client";

import { ReactNode } from "react";

type CardVariant = "default" | "risk";

interface CardProps {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<CardVariant, string> = {
  default:
    "border border-georgetown-blue bg-white shadow-lg",
  risk: "border-l-4 border-l-rose-500 bg-white shadow-lg",
};

export default function Card({
  variant = "default",
  children,
  className = "",
}: CardProps) {
  return (
    <div className={`rounded-xl p-4 ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}