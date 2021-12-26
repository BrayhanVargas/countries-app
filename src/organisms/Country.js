import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import CardCountry from "../molecules/CardCountry";

export default function Country ({countries}) {
    const [ countryData, setCountryData ] = useState([]);
    const { name } = useParams();
    useEffect(() => {        
        const countryInfo = countries.filter( (country) => country.name === name);
        setCountryData(countryInfo);
    }, [countries, name]);
    return(
        <div>
            <Link to="/" className="btn-back">
                <i className="fas fa-arrow-left"></i> Back
            </Link>
            <CardCountry countryData={countryData}/>
        </div>
    )
}