"use client";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check localStorage for theme preference on initial load
        const darkMode = localStorage.getItem("dark-mode") === "true";
        setIsDark(darkMode);
        document.documentElement.classList.toggle("dark", darkMode);
    }, []);

    const toggleTheme = () => {
        setIsDark(prevIsDark => {
            const newIsDark = !prevIsDark;
            document.documentElement.classList.toggle("dark", newIsDark);
            localStorage.setItem("dark-mode", newIsDark);
            return newIsDark;
        });
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-4 bg-black border-yellow-500 rounded-md shadow-md focus:outline-none"
        >
            {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-500 bg-black border-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 14v1m7-7h-1M5 12H4m15.07-6.93l-.707.707M5.636 18.364l-.707-.707M18.364 5.636l-.707.707M6.636 18.364l-.707-.707" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 14v1m7-7h-1M5 12H4m15.07-6.93l-.707.707M5.636 18.364l-.707-.707M18.364 5.636l-.707.707M6.636 18.364l-.707-.707" />
                </svg>
            )}
        </button>
    );
}
