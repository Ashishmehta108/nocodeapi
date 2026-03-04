"use client";

import * as React from "react";
import { Sun1, Moon } from "iconsax-reactjs";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle({ className }: { className?: string | undefined }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={className}
      >
        <Sun1
          variant="Bold"
          className="h-[1.2rem] w-[1.2rem] rotate-0 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Moon
          variant="Bold"
          className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
      </Button>
    </div>
  );
}

