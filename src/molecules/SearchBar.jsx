import React from "react";
import CustomSelect from "../atoms/CustomSelect";
import "./SearchBar.css"

export default function SearchBar ({ searchValue, searchRegion }) {
    const searchCountry = (value) => {
        searchValue(value.toLowerCase());
    }
    const searchCountryByRegion = (value) => {
        searchRegion(value.toLowerCase())
    }
    return(
        <header className="filter-content">
            <form className="form-search">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search for a country..." onChange={(e) => searchCountry(e.target.value)} />
            </form>
            <div>
                <CustomSelect searchCountryByRegion={searchCountryByRegion}/>
            </div>
        </header>
    )
}