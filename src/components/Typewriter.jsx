import { useEffect, useMemo, useRef, useState } from "react";

export default function Typewriter({
    words = [],
    typingSpeedMs = 80,
    deleteSpeedMs = 40,
    pauseMs = 1400,
    loop = true,
    className = "",
    cursorClassName = "text-white",
}) {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const timeoutRef = useRef(null);

    const currentWord = useMemo(() => (words.length ? words[wordIndex % words.length] : ""), [words, wordIndex]);

    useEffect(() => {
        if (!currentWord) return;

        const tick = () => {
            if (isDeleting) {
                const next = currentWord.substring(0, displayText.length - 1);
                setDisplayText(next);
                if (next.length === 0) {
                    setIsDeleting(false);
                    if (!loop && wordIndex >= words.length - 1) return;
                    setWordIndex((idx) => (idx + 1) % words.length);
                }
            } else {
                const next = currentWord.substring(0, displayText.length + 1);
                setDisplayText(next);
                if (next.length === currentWord.length) {
                    timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseMs);
                    return; // schedule separate pause timer
                }
            }

            const speed = isDeleting ? deleteSpeedMs : typingSpeedMs;
            timeoutRef.current = setTimeout(tick, speed);
        };

        timeoutRef.current = setTimeout(tick, isDeleting ? deleteSpeedMs : typingSpeedMs);
        return () => clearTimeout(timeoutRef.current);
    }, [currentWord, displayText, isDeleting, typingSpeedMs, deleteSpeedMs, pauseMs, loop, wordIndex, words.length]);

    // When finishing a deletion after last word and loop=false, stop scheduling
    useEffect(() => {
        if (!loop && wordIndex === words.length - 1 && isDeleting && displayText.length === 0) {
            clearTimeout(timeoutRef.current);
        }
    }, [loop, wordIndex, words.length, isDeleting, displayText.length]);

    return (
        <span className={className}>
            {displayText}
            <span className={cursorClassName}>
                |
            </span>
        </span>
    );
}


