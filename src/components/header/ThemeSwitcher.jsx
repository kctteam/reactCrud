import { useState } from "react";
import { setTheme, getPreferredTheme } from "../../utils/ThemeSwitcher";

const ThemeSwitcher = () => {
    const [nowTheme, setNowTheme] = useState(getPreferredTheme());

    const ButtonLight = () => {
        return (
            <button
                className="btn btn-link text-body"
                title="На сторону света"
                onClick={() => {
                    setTheme("light");
                    setNowTheme("light");
                }}
            >
                <i className="fa-light fa-sun fa-fw me-2"></i>
            </button>
        );
    };
    const ButtonDark = () => {
        return (
            <button
                className="btn btn-link text-body"
                title="На сторону тьмы"
                onClick={() => {
                    setTheme("dark");
                    setNowTheme("dark");
                }}
            >
                <i className="fa-light fa-moon fa-fw me-2"></i> 
            </button>
        );
    };

    return (nowTheme === "light") ? <ButtonDark /> : <ButtonLight />;
};

export default ThemeSwitcher;
