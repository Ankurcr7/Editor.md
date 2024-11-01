//Theme Option
import React, { useEffect } from "react";

const ThemOption = ({ theme }) => {
    const setTheme = () => {
        document.querySelector('body').setAttribute('data-theme', theme);
        localStorage.setItem('selectedTheme', theme); 
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('selectedTheme');
        if (savedTheme) {
            document.querySelector('body').setAttribute('data-theme', savedTheme);
        }
    }, []);

    return (
        <div onClick={setTheme} className="theme-option" id={`theme-${theme}`}></div>
    );
};

export default ThemOption;
