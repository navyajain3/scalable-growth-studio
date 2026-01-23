import * as React from "react";
import { cn } from "@/lib/utils";

interface ShimmerBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function ShimmerBadge({ children, className }: ShimmerBadgeProps) {
  return (
    <div className={cn("relative inline-flex rounded-full p-[1px]", className)}>
      {/* Rotating gradient border */}
      <span 
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(from var(--trail-angle, 0deg) at 50% 50%, #501ed4 0%, #7e56e2 25%, #501ed4 50%, #7e56e2 75%, #501ed4 100%)`,
          animation: "trail 3s linear infinite",
        }}
      />
      
      {/* Inner content */}
      <span className="relative inline-flex items-center px-4 py-1.5 rounded-full bg-background text-foreground text-xs font-medium uppercase tracking-wider">
        {children}
      </span>
    </div>
  );
}
