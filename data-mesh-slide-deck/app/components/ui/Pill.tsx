type PillVariant = "gold" | "blue" | "outline";

interface PillProps {
  variant?: PillVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<PillVariant, string> = {
  gold: "bg-georgetown-gold text-white",
  blue: "bg-georgetown-blue text-white",
  outline: "border border-georgetown-blue text-georgetown-blue",
};

export default function Pill({
  variant = "gold",
  children,
  className = "",
}: PillProps) {
  return (
    <span
      className={`inline-block rounded-full text-xs font-semibold uppercase tracking-widest px-3 py-1 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}