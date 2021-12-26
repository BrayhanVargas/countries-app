import React, { useEffect } from "react";
import { useState } from "react";
import "./Header.css";

export default function Header ({darkTheme}) {
    const [ darkMode, setDarkMode ] = useState(true);
    const handleClick = (e) => e && setDarkMode(!darkMode);
    useEffect(() => {
        darkTheme(darkMode);            
    },[darkMode, darkTheme]);
    return(
        <header className="navbar">
            <a href="/" className="title">
                <h1>Where in the world?</h1>
            </a>            
            <button onClick={handleClick} className="btn-dark-mode">
                { darkMode ? <i className="fas fa-sun"></i> :<i className="fas fa-moon"></i>}
                <span> Dark Mode</span>
            </button>
        </header>
    )
}