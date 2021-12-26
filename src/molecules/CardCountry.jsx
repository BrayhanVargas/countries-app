import React from "react";
import "./CardCountry.css"

export default function CardCountry ({countryData}) {
    return(
        <div>
            {!countryData ? "No Hay Data" : 
                <section className="country">
                {countryData.map((c) => {
                const {
                    numericCode,
                    flag,
                    name,
                    nativeName,
                    population,
                    region,
                    subregion,
                    capital,
                    topLevelDomain,
                    currencies,
                    languages,
                    borders,
                } = c
                return (
                <article key={numericCode}>
                    <div className="card__country">
                        <img src={flag} alt={name} className="card__country--img"/>                    
                    <div>
                        <div className="card__country--cont">
                        <div>
                            <h2>{name}</h2>
                            <h4>Native Name: <span>{nativeName}</span></h4>
                            <h4>Population: <span>{population.toLocaleString()}</span></h4>
                            <h4>Region: <span>{region}</span></h4>
                            <h4>Sub Region: <span>{subregion}</span></h4>
                            <h4>Capital: <span>{capital}</span></h4>
                        </div>
                        <div>
                            <h4>Top Level Domain: <span>{topLevelDomain}</span></h4>
                            <h4>Currencies: <span>{currencies[0].name}</span></h4>
                            <h4>Languages: <span>{languages[0].name}</span></h4>
                        </div>
                        </div>
                        <h4>Border Countries: </h4>
                        <div className="borders">
                            {!borders ? null : borders.map((border) => {
                            return (
                                <ul key={border}>
                                    <li>{border}</li>
                                </ul>
                            )
                            })}
                        </div>
                    </div>                    
                    </div>
                    <div>
                    
                </div>
                </article>
                )
            })}
            </section>}
        </div>
    )
}