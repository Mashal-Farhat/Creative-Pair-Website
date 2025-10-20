import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(() => {
        try {
            const stored = localStorage.getItem('theme');
            if (stored) return stored === 'dark';
            return document.documentElement.classList.contains('dark') || window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        } catch (e) {
            return document.documentElement.classList.contains('dark');
        }
    });

    useEffect(() => {
        // Initialize theme on mount respecting localStorage
        try {
            const stored = localStorage.getItem('theme');
            if (stored) {
                if (stored === 'dark') document.documentElement.classList.add('dark');
                else document.documentElement.classList.remove('dark');
            } else {
                // respect prefers-color-scheme if no stored preference
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            }
        } catch (e) {
            /* ignore */
        }
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        try {
            if (next) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
        } catch (e) {
            /* ignore */
        }
    };

    return (
        <button
            className="theme-toggle"
            onClick={toggle}
            aria-pressed={isDark}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Light mode' : 'Dark mode'}
        >
            <span className="theme-toggle__inner" aria-hidden>
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </span>
        </button>
    );
}
