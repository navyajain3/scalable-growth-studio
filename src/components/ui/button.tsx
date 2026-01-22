import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-sm hover:from-violet-600 hover:to-purple-600 hover:shadow-glow-sm",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-violet-500/30 bg-transparent text-foreground hover:bg-gradient-to-r hover:from-violet-500/10 hover:to-purple-500/10 hover:border-violet-500/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-foreground hover:bg-secondary hover:text-foreground",
        link: "text-violet-500 underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-glow hover:from-violet-600 hover:to-purple-600 hover:-translate-y-0.5 rounded-full",
        "hero-outline": "border border-violet-500/30 bg-card/50 text-foreground backdrop-blur-sm hover:bg-gradient-to-r hover:from-violet-500/10 hover:to-purple-500/10 hover:border-violet-500/50 hover:-translate-y-0.5",
        nav: "bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-full hover:from-violet-600 hover:to-purple-600",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-5 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
