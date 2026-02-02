import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

interface TechBadgeProps {
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export function TechBadge({ label, icon, className }: TechBadgeProps) {
  return (
    <span
      className={twMerge(
        clsx(
          "px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-300 border border-white/10 backdrop-blur-sm flex items-center gap-2 bg-white/5",
          className
        )
      )}
    >
      {icon && <span className="text-sm">{icon}</span>}
      {label}
    </span>
  );
}
