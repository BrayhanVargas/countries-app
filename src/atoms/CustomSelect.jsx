import React from "react";
import { useState } from "react";
import "./CustomSelect.css"

export default function CustomSelect ({searchCountryByRegion}) {
    const [ defaultSelectText, setDefaultSelectText ]  = useState("Filter by Region");
    const [ showOptionList, setShowOptionList ]  = useState(false);
    const optionsList = [
        { id: 1, name: "Todos" },
        { id: 2, name: "Africa" },
        { id: 3, name: "America" },
        { id: 4, name: "Asia" },
        { id: 5, name: "Europa" },
        { id: 6, name: "Oceania" },
    ]
    const handleOptionClick = (e) => {
        setDefaultSelectText(e.target.getAttribute("data-name"));
        if(e.target.getAttribute("data-name") === "Todos"){
            searchCountryByRegion("");
        } else {
            searchCountryByRegion(e.target.getAttribute("data-name"));
        }
        setShowOptionList(false);
    }
    const handleListDisplay = () => { setShowOptionList(!showOptionList) }
    return(
        <div className="custom-select-container">
            <div className="selected-text" onClick={handleListDisplay}>
                <span>{defaultSelectText}</span>
                <i className="fas fa-angle-down"></i>
            </div>
        {showOptionList && (
            <div className="select-options">
                <ul>
                {optionsList.map((option) => {
                    return (
                    <li data-name={option.name} key={option.id} onClick={handleOptionClick}>
                        {option.name}
                    </li>
                    );
                })}
                </ul>
            </div>
        )}
    </div>
    )
}