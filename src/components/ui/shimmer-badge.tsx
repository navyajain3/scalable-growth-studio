import * as React from "react";
import { cn } from "@/lib/utils";

interface ShimmerBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function ShimmerBadge({ children, className }: ShimmerBadgeProps) {
  return (
    <div 
      className={cn(
        "inline-flex items-center rounded-full p-[1px]",
        "bg-gradient-to-r from-[#501ed4] to-[#7e56e2]",
        className
      )}
    >
      <span className="inline-flex items-center px-5 py-2 rounded-full bg-card">
        <span className="text-foreground text-xs font-medium tracking-wider uppercase">
          {children}
        </span>
      </span>
    </div>
  );
}
