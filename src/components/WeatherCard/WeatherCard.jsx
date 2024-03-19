import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function WeatherCard({location}){
    const apiKey = "5a3b5d0257934ff585884032242802";
    useEffect(() => {
        const fetchData = async () => {
            if (location != null) {
                try {
                    
                    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}`)
                        .then(response => {
                            console.log(response.data);
                           
                        }, error => {
                            console.log(error);
                        });
                } catch (error) {
                    console.error("Error fetching country data:", error);
                }
            } 

        };

        fetchData();
    }, [location]);
    return (
        <div className='container-fluid card p-3  m-2'>
            <div className="row ">
                
            </div>
        </div>
    )
}