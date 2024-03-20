import NavBar from "../NavBar/NavBar"
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import "./CountryPage.css"
import GoogleMap from "../GoogleMap/GoogleMap";
import CountryCard from "../CountryCard/CountryCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import axios from "axios";
import Swal from 'sweetalert2'
export default function CountryPage() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const [countryName, setCountryName] = useState(null);
    const [cityArray, setCityArray] = useState(null);
    const apiKey = "5a3b5d0257934ff585884032242802";
    const submit = (data) => {
        console.log(data);
        setCountryName(data.country);
        // setSearchVal(data.city);
    }
    useEffect(() => {
        const fetchData = async () => {
            if (countryName != null) {
                try {
                    console.log("Came herer")
                    axios.post("https://countriesnow.space/api/v0.1/countries/population/cities/filter", {
                        limit: 10,
                        orderBy: "name",
                        country: countryName
                    })
                        .then((response) => {
                            console.log(response);
                            console.log("Came herer" + response)
                            setCityArray(response.data.data);

                        }).catch(error => {
                            console.log(error)
                            axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
                                .then(response => {
                                    console.log(response.data);
                                    setCountryName(response.data[0].name.official);
                                }, error => {
                                    console.log(error);
                                    axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${countryName}`)
                                        .then(response => {
                                            console.log(response.data);
                                            setCountryName(response.data.location.country);
                                        }, error => {
                                            console.log(error);
                                            Swal.fire({
                                                icon: "error",
                                                title: "Oops...",
                                                text: "No matching Country found.",
                                                footer: 'Enter Valid Country Name'
                                            });
                                        });

                                });
                        });
                } catch (e) {
                    console.error("Error fetching country data:", e);
                }
            }

        };

        fetchData();
    }, [countryName]);
    return (
        <div className="pageWidth ">
            <div className="backImage">
                <NavBar></NavBar>
                <div className="container mt-5">
                    <div className="row ">
                        <div className='col-lg-9'>
                            <div className="col-md-6 p-lg-5 mx-auto my-5">
                                <h1 className="display-3 fw-bold text-warning">Country App</h1>
                                <h3 className="fw-normal text-info mb-3">Enter Country Name ?</h3>


                                <div className="container">
                                    <div className="row">
                                        <div className="input-group has-validation col-lg-12">
                                            <span className="input-group-text"><i className="bi bi-globe-americas"></i></span>
                                            <input type="text" {...register("country", { required: true })} className="form-control" id="city" placeholder="Country/State" required>
                                            </input>
                                            {errors.country && <div className='col-lg-12 text-danger'> <span> Country Not Provided &#x2191; 	&#129300;</span> </div>}
                                        </div>





                                        <div className='col-lg-6'>
                                        </div>
                                        <div className='col-lg-6 mt-2'>
                                            <button onClick={handleSubmit(submit)} className="w-100 btn btn-md btn-primary" type="submit">Browse</button>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        countryName && (
                            <GoogleMap countryName={countryName} ></GoogleMap>
                        )
                    }

                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        {
                            countryName && (
                                <CountryCard countryName={countryName} ></CountryCard>
                            )
                        }

                    </div>

                    {/* {
                            countryName && (
                                <WeatherCard location={countryName}></WeatherCard>
                            )
                        } */}
                    {cityArray && cityArray.map((todo) => (
                        <div className="col-lg-6 col-md-6">
                            <WeatherCard location={todo.city}></WeatherCard>
                        </div>
                    ))}


                </div>
            </div>
        </div>

    )
}