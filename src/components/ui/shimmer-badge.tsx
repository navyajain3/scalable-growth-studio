import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ShimmerBadgeProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
}

export function ShimmerBadge({ children, className }: Omit<ShimmerBadgeProps, 'icon'>) {
  return (
    <div className={cn(
      "inline-flex items-center px-4 py-1.5 rounded-full h-8",
      "border border-border/50 bg-card/40 backdrop-blur-sm",
      className
    )}>
      <span className="text-foreground/80 text-[13px] font-normal whitespace-nowrap">
        {children}
      </span>
    </div>
  );
}
