import { useEffect, useState } from "react";

export const useTheme = () => {
    const [theme, setTheme] = useState("light");

    const html = document.documentElement;
    const changeTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            html.setAttribute("data-theme", theme);
            localStorage.setItem("theme", theme);
        } else {
            setTheme("light");
            html.setAttribute("data-theme",theme);
            localStorage.setItem("theme", theme);
        }
    };

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme") || "light";
        setTheme(currentTheme);
        html.setAttribute("data-theme", theme);
    }, [html, theme]);

    return { changeTheme };
};
