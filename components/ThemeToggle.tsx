"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Sun1, Moon } from "iconsax-reactjs";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="h-9 w-9" />;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex items-center justify-center rounded-full size-9 cursor-pointer text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors duration-200"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun1 variant="Bold" className="size-5" />
            ) : (
                <Moon variant="Bold" className="size-5" />
            )}
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}