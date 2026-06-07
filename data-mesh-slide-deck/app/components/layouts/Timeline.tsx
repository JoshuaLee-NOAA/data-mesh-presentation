import { ReactNode } from "react";

interface TimelineStep {
  step: number;
  label: string;
  detail?: string;
  icon?: ReactNode;
}

interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export default function Timeline({ steps, className = "" }: TimelineProps) {
  return (
    <div className={`relative pl-10 ${className}`}>
      {/* Vertical line */}
      <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-georgetown-cool-gray/40" />
      <div className="flex flex-col gap-4">
        {steps.map((s) => (
          <div key={s.step} className="relative flex items-start gap-4">
            {/* Step circle */}
            <div className="absolute -left-10 top-0 flex items-center justify-center w-[30px] h-[30px] rounded-full bg-georgetown-blue text-white text-xs font-bold shrink-0 z-10">
              {s.step}
            </div>
            <div className="pl-4">
              <p className="text-sm font-semibold text-georgetown-blue">{s.label}</p>
              {s.detail && (
                <p className="text-xs text-georgetown-gray mt-0.5">{s.detail}</p>
              )}
              {s.icon && <div className="mt-1">{s.icon}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}