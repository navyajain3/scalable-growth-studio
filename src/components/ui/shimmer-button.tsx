import * as React from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  size?: "default" | "sm" | "lg";
}

const sizeClasses = {
  default: "h-11 px-6 text-sm",
  sm: "h-9 px-5 text-xs",
  lg: "h-12 px-8 text-base",
};

const ShimmerButton = React.forwardRef<HTMLAnchorElement, ShimmerButtonProps>(
  ({ className, children, size = "default", ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {/* Rotating gradient border */}
        <span 
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from var(--trail-angle, 0deg) at 50% 50%, #501ed4 0%, #7e56e2 25%, #501ed4 50%, #7e56e2 75%, #501ed4 100%)`,
            animation: "trail 3s linear infinite",
          }}
        />
        
        {/* Inner background - maintains button shape */}
        <span className="absolute inset-[1px] rounded-full bg-card/90 backdrop-blur-sm transition-colors duration-300 group-hover:bg-card" />
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2 text-foreground">
          {children}
        </span>
      </a>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";

export { ShimmerButton };
