import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ShimmerBadgeProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
}

export function ShimmerBadge({ children, icon: Icon, className }: ShimmerBadgeProps) {
  return (
    <div className={cn(
      "inline-flex items-center gap-2 pl-1 pr-3.5 py-0.5 rounded-full h-8",
      "border border-border/50 bg-card/40 backdrop-blur-sm",
      className
    )}>
      {/* Icon circle */}
      {Icon && (
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-[#501ed4] to-[#7e56e2] shrink-0">
          <Icon className="w-3 h-3 text-white" strokeWidth={2} />
        </span>
      )}
      {/* Text */}
      <span className="text-foreground/80 text-[13px] font-normal whitespace-nowrap">
        {children}
      </span>
    </div>
  );
}
