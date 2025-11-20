"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";

const baseStyles = "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark focus-visible:outline-brand",
  secondary: "bg-white text-brand border border-brand/40 hover:border-brand focus-visible:outline-brand",
  ghost: "bg-transparent text-brand hover:bg-brand/10 focus-visible:outline-brand"
};

export type ButtonVariant = keyof typeof variants;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    />
  )
);

Button.displayName = "Button";
