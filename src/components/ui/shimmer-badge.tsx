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
      "inline-flex items-center gap-2.5 pl-1 pr-4 py-1 rounded-full",
      "border border-border/60 bg-card/50 backdrop-blur-sm",
      className
    )}>
      {/* Icon circle */}
      {Icon && (
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[#501ed4] to-[#7e56e2]">
          <Icon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
        </span>
      )}
      {/* Text */}
      <span className="text-foreground/90 text-sm font-normal">
        {children}
      </span>
    </div>
  );
}
