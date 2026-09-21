"use client";

import { forwardRef } from "react";
import Link from "next/link";

/**
 * Wrapper component for Next.js Link with Material-UI components.
 * Use this when passing Link to MUI components via the `component` prop
 * to avoid serialization errors.
 */
export const LinkComponent = forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string }
>(({ href = "", ...props }, ref) => (
  <Link ref={ref} href={href} {...props} />
));
LinkComponent.displayName = "LinkComponent";
