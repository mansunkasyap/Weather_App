import React, { useEffect, useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_API_URL, geoApiOptions } from '../api';
const Search = ({ onSearchChange }) => {
    
    const [search, setSearch] = useState(null)
    function handleOnChange(searchData) {
        setSearch(searchData);
        onSearchChange(searchData);
    }


    const loadOptions = (inputValue) => {
        // console.log("Fetching..");
        return (
            fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`
                , geoApiOptions
            ).then(res => res.json())
                .then((response) =>  
                    ({
                        options: response.data.map(
                            (city) => {
                               return { 
                                    value: `${city.latitude} ${city.longitude}`, 
                                    label: `${city.name} ${city.countryCode}`
                                }
                            }
                        )
                    })
                )
                .catch(err => console.log(err))
        )
    }


    // useEffect(loadOptions, [])
    return (
        <AsyncPaginate
            placeholder='Search for City'
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search