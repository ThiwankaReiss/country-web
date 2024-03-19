import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CountryCard.css'

export default function CountryCard({ countryName, lattitudes, longitudes }) {

    const [county, setCountry] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            if (countryName != null) {
                try {
                    axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
                        .then(response => {
                            console.log(response.data);
                            setCountry(response.data[0]);
                        }, error => {
                            console.log(error);
                        });
                } catch (error) {
                    console.error("Error fetching country data:", error);
                }
            } else if (lattitudes != null && longitudes != null) {
                try {

                } catch (error) {

                }
            }

        };

        fetchData();
    }, [countryName]);

    return (
        <div className='container-fluid card p-3  m-2'>
            <div className="row ">
                <div className='col-12'>
                    {county && (
                        <div className=' d-flex justify-content-center '>
                            <img className='addShadow' src={county.flags.png && county.flags.png}></img>
                        </div>
                    )
                    }
                </div>
                <div className='col-12'>
                    <hr className='m-3 '></hr>
                </div>

                <div className='col-10'>
                    {county && (
                        <div >
                            <h1 className=' g-0 m-0 p-0'>
                                {county.name.common && county.name.common}
                            </h1>
                            <div className='text-secondary g-0 m-0 p-0'>
                                {county.name.official && county.name.official}
                            </div>
                        </div>
                    )
                    }
                </div>
                <div className='col-2'>
                    {county && (
                        <div >
                            <img height="70px" src={county.coatOfArms.png && county.coatOfArms.png}></img>
                        </div>
                    )
                    }
                </div>

                <div className="col-12 mt-3">

                    {county && (
                        <p>
                            {county.flags.alt && county.flags.alt}
                        </p>
                    )
                    }

                </div>
                <div className="col-12 ">
                    {county && (
                        <p>
                            <h5>Region : {county.continents && county.continents}</h5>
                            <h5>Native Name : {county.name.nativeName &&  Object.values(county.name.nativeName)[0].official}</h5>
                            <h5>Currency : {county.currencies && Object.values(county.currencies)[0].name}</h5>
                            <h5>Symbol : {county.currencies && Object.values(county.currencies)[0].symbol}</h5>
                        </p>
                    )
                    }

                </div>
            </div>
        </div>
    )
}