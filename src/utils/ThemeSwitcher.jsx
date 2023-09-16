export const setTheme = (theme, needStore = true) => {
    switch (theme) {
        case "dark":
            document.querySelector('meta[name="theme-color"]').setAttribute("content", "#000000");
            break;
        case "light":
            document.querySelector('meta[name="theme-color"]').setAttribute("content", "#ffffff");
            break;
    }
    let html = document.querySelector("html");
    html.setAttribute("data-bs-theme", theme);
    if (needStore) {
        setStoredTheme(theme);
    }
};

export const clearTheme = () => {
    clearStoredTheme();
    setTheme(getPreferredTheme(), false);
};

export const setDefaultTheme = () => {
    setTheme(getPreferredTheme(), false);
};

const clearStoredTheme = () => localStorage.removeItem("theme");
const getStoredTheme = () => localStorage.getItem("theme");
const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

export const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
        return storedTheme;
    }

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
        const storedTheme = getStoredTheme();
        if (!storedTheme) {
            setTheme(getPreferredTheme(), false);
        }
    });

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};
