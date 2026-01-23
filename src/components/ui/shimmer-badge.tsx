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
      <span className="relative inline-flex items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full bg-card">
        {/* Icon circle */}
        {Icon && (
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#501ed4] to-[#7e56e2]">
            <Icon className="w-4 h-4 text-white" strokeWidth={2} />
          </span>
        )}
        {/* Text */}
        <span className="text-foreground text-sm font-medium pr-1">
          {children}
        </span>
      </span>
    </div>
  );
}
