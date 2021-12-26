import React from "react"
import "./CardCountries.css";
export default function CardCountries ({flag, name, population, region, capital}) { 
    return(
        <div className="card">
            <img src={flag} alt={name}  className="img-fluid"/>
            <div className="card-content">
                <h3>{name}</h3>
                <h4>Population: <span>{population.toLocaleString()}</span></h4>
                <h4>Region: <span>{region}</span></h4>
                <h4>Capital: <span>{capital}</span></h4>
            </div>
        </div>
    )
}