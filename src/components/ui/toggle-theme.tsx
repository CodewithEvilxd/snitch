"use client";

import React from "react";
import { ThemeToggle as MotionThemeToggle } from "../motion/theme-toggle";

interface ThemeToggleProps {
  className?: string;
}

export function ToggleTheme({ className }: ThemeToggleProps) {
  return <MotionThemeToggle variant="blinds" className={className} />;
}
