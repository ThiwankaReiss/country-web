import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherCard.css'
export default function WeatherCard({ location }) {
    const apiKey = "5a3b5d0257934ff585884032242802";
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (location != null) {
                try {

                    axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}`)
                        .then(response => {
                            console.log(response.data);
                            setWeatherData(response.data);

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
                <div className='col-8'>
                    <h2 className='text-info'>{weatherData && weatherData.location.name}</h2>
                </div>
                <div className="col-4 text-secondary d-flex justify-content-end align-items-center">
                    <div>{weatherData && weatherData.location.localtime}</div>
                </div>
                <div className="col-12">
                    <div className="container card addShadow ">
                        <div className="row">
                            <div className="col-2">
                                <div>
                                    <img height="75px" src={weatherData && weatherData.current.condition.icon} />
                                </div>
                            </div>
                            <div className="col-3 align-self-center">
                                <h5 className='mb-0 p-0'>{weatherData && weatherData.current.condition.text}</h5>
                                <p className='textDataTopic'>Now</p>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-3 justify-content-end align-self-center">
                                <div><i class="bi bi-thermometer-half"></i>{weatherData && weatherData.current.temp_c}&deg;C <br></br> <i class="bi bi-thermometer-half"></i>{weatherData && weatherData.current.temp_f}&deg;F</div>
                            </div>
                            <div className="col-3 justify-content-center align-items-center">
                                <div>
                                    <p className='m-0 p-0'>
                                        <i className="bi bi-droplet-fill m-0"></i> {weatherData && weatherData.current.humidity} % <br></br>
                                        <i className="bi bi-wind"></i> {weatherData && weatherData.current.wind_mph} mph <br></br>
                                        <i className="bi bi-wind"></i> {weatherData && weatherData.current.wind_kph} kph
                                    </p>

                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="container card addShadow mt-2">
                        <div className="row">
                            <div className="col-2">
                                <div>
                                    <img height="75px" src={weatherData && weatherData.forecast.forecastday[0].day.condition.icon} />
                                </div>
                            </div>
                            <div className="col-3 align-self-center">
                                <h5 className='m-0 p-0'>{weatherData && weatherData.forecast.forecastday[0].day.condition.text}</h5>
                                <p className='textDataTopic'>Day</p>
                            </div>
                            <div className="col-1"></div>
                            <div className="col-3 justify-content-end align-self-center">
                                <div><i class="bi bi-thermometer-half"></i>{weatherData && weatherData.forecast.forecastday[0].day.avgtemp_c}&deg;C <br></br> <i class="bi bi-thermometer-half"></i>{weatherData && weatherData.forecast.forecastday[0].day.avgtemp_f}&deg;F</div>
                            </div>
                            <div className="col-3 justify-content-center align-self-center">
                                <div>
                                    <p className='m-0 p-0 '>

                                        <i class="bi bi-sunrise"></i> {weatherData && weatherData.forecast.forecastday[0].astro.sunrise}  <br></br>
                                        <i class="bi bi-sunset"></i> {weatherData && weatherData.forecast.forecastday[0].astro.sunset}
                                    </p>

                                </div>

                            </div>
                            <div className="col-12"><hr></hr></div>
                            <div className="col-12">
                                <div className="container-fluid">
                                    <div className="row">
                                        {weatherData && weatherData.forecast.forecastday[0].hour.map((data, index) => (
                                            <React.Fragment key={index}>
                                                
                                                <div className="col-2">
                                                    <div className='align-items-center justify-items-center'>
                                                        <div className='textData'>{data && (data.time).split(" ")[1]}{index < 12 && "a.m" || index == 12 && "noon" || "p.m"}</div>
                                                        <img height="50px" src={data && data.condition.icon} alt="weather icon" />
                                                        <div className='textData'>{data && data.condition.text}</div>
                                                    </div>
                                                </div>
                                                {index > 0 && (index + 1) % 6 === 0 && <hr className="col-12" />}
                                            </React.Fragment>
                                        ))}

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}