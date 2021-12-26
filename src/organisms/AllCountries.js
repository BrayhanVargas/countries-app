import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import CardCountries from "../molecules/CardCountries";
import SearchBar from "../molecules/SearchBar";
import "./AllCountries.css";
const urlAllCountries = "https://restcountries.com/v2/all";

export default function Allountries ({countriesData}) {
    const _isMounted = useRef(true);
    const [ countries, setCountries ] = useState([]);
    const [ filtered, setFiltered ] = useState([]);
    const [ parallelFiltered, setParallelFiltered ] = useState([]);
    const [ filters, setFilters ] = useState({
        filterSearch: "",
        filterRegion: "",
    });
    const getAllCountries = async  () => {
        try {
            const resp = await fetch(urlAllCountries);
            const data = await resp.json()
            if (_isMounted){
                setCountries(data);
                countriesData(data);
            }
        } catch (error) {
            console.warn(error)
        }
    }
    useEffect(() => {
        getAllCountries();
        return () => {
            _isMounted.current = false;
        }
    })
    const filtersActives = (search, region) => {
        if(!!search && !!region){
            const formularioFiltrado = countries.filter(item => {
                const textoApiSearch = item.name.toLowerCase();
                const textoApiRegion = item.region.toLowerCase();
                if ((textoApiSearch.indexOf(search) !== -1) && (textoApiRegion.indexOf(region) !== -1)) {
                    return item
                }
                return false
            })
            setParallelFiltered(formularioFiltrado);
        }
        if (!!search) {
            const formularioFiltrado = countries.filter(item => {
                const textoApi = item.name.toLowerCase();
                if (textoApi.indexOf(search) !== -1) {
                    return item
                }
                return false
            })
            setFiltered(formularioFiltrado);
        } 
        if (!!region) {
            const formularioFiltrado = countries.filter(item => {
                const textoApi = item.region.toLowerCase();
                if (textoApi.indexOf(region) !== -1) {
                    return item
                }
                return false
            })
            setFiltered(formularioFiltrado);
        } 
    }
    const searchCountries = (searchValue) => {
        setFilters({
            ...filters,
            filterSearch: searchValue,
        })
        filtersActives(searchValue, filters.filterRegion)
    }
    const searchRegion = (searchRegion) => {
        setFilters({
            ...filters,
            filterRegion: searchRegion,
        })
        filtersActives(filters.filterSearch, searchRegion)
    }
    return(
        <div>
            <SearchBar searchValue={searchCountries} searchRegion={searchRegion}/>
                <div className="card__countries">
                    {!!filters.filterRegion.length && !!filters.filterSearch.length ? parallelFiltered.map((country) => {
                        const { numericCode, name, flag, population, region, capital } = country;
                        return (
                            <Link className="card__countries--disabled" to={`/country/${name}`} key={numericCode} >
                                <CardCountries 
                                    flag={flag}
                                    name={name} 
                                    population={population} 
                                    region={region} 
                                    capital={capital} 
                                />
                            </Link>
                        )
                }) : !!filters.filterRegion.length || !!filters.filterSearch.length ? filtered.map((country) => {
                    const { numericCode, name, flag, population, region, capital } = country;
                    return (
                        <Link className="card__countries--disabled" to={`/country/${name}`} key={numericCode} >
                            <CardCountries 
                                flag={flag}
                                name={name} 
                                population={population} 
                                region={region} 
                                capital={capital} 
                            />
                        </Link>
                    )
            }) : countries.map((country) => {
                    const { numericCode, name, flag, population, region, capital } = country;
                    return (
                        <Link className="card__countries--disabled" to={`/country/${name}`} key={numericCode} >
                            <CardCountries 
                                flag={flag}
                                name={name} 
                                population={population} 
                                region={region} 
                                capital={capital} 
                            />
                        </Link>
                    )
            })}
                </div>
        </div>
    )
}