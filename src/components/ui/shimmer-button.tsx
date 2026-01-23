import * as React from "react";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const ShimmerButton = React.forwardRef<HTMLAnchorElement, ShimmerButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-8 text-base font-medium transition-all duration-300 hover:-translate-y-0.5",
          className
        )}
        {...props}
      >
        {/* Animated border gradient */}
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-[-100%] animate-[shimmer-spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,hsl(225_90%_60%/0.2)_0%,hsl(245_90%_65%/0.8)_10%,hsl(225_90%_60%/0.2)_20%)]" />
        </span>
        
        {/* Inner background */}
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
