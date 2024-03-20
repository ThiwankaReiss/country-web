import NavBar from "../NavBar/NavBar"
import GoogleMap from "../GoogleMap/GoogleMap"
import "./CurrentLocation.css"
import CountryCard from "../CountryCard/CountryCard"
import WeatherCard from "../WeatherCard/WeatherCard"
import React, { useState, useEffect } from 'react';

export default function CurrentLocation() {
    const [isFirstTime, setIsFirstTime] = useState(true);
    const [longiVal, setLongiVal] = useState(null);
    const [latiVal, setLatVal] = useState(null);
   
    getLocation();
    function getLocation() {
        if (isFirstTime) {
            if (navigator.geolocation) {

                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        }

    }

    function showPosition(position) {
        console.log(position.coords.latitude + "," + position.coords.longitude);
        // setSearchVal(position.coords.latitude + "," + position.coords.longitude);
        setLongiVal(position.coords.longitude);
        setLatVal(position.coords.latitude);
        setIsFirstTime(false);
    }
    return (
        <div className="pageWidth">
            <NavBar></NavBar>
            <div className="container">
                <div className="row">
                    {
                        longiVal && latiVal && (
                            <GoogleMap lattitudes={latiVal} longitudes={longiVal} ></GoogleMap>
                        )
                    }

                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        {
                            longiVal && latiVal && (
                                <CountryCard lattitudes={latiVal} longitudes={longiVal} ></CountryCard>
                            )
                        }

                    </div>
                    <div className="col-lg-6 col-md-6">
                        {
                            longiVal && latiVal && (
                                <WeatherCard location={latiVal+","+longiVal}></WeatherCard>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}