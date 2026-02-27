import { useState, useEffect } from "react";

export default function useColors() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return document.documentElement.classList.contains('dark') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    } catch (e) {
      return document.documentElement.classList.contains('dark');
    }
  });

  useEffect(() => {
    const updateTheme = () => {
      try {
        const stored = localStorage.getItem('theme');
        if (stored) {
          setIsDark(stored === 'dark');
        } else {
          setIsDark(document.documentElement.classList.contains('dark') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches));
        }
      } catch (e) {
        setIsDark(document.documentElement.classList.contains('dark'));
      }
    };

    updateTheme();

    const handleStorageChange = (e) => {
      if (e.key === 'theme') {
        updateTheme();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      observer.disconnect();
    };
  }, []);

  return {
    bg: isDark ? "#0A100D" : "#B9BAA3",
    text: isDark ? "#B9BAA3" : "#0A100D",
    gray: "#D6D5C9",
    accent1: "#A22C29",
    accent2: "#902923",
    accent3: "#4a2523"
  };
}
