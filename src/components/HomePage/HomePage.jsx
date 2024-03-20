import NavBar from "../NavBar/NavBar"
import './HomePage.css';
import React, { useState, useEffect } from 'react';
import mapGoogle from './../../assets/mapGoogle.png'
import travel from './../../assets/countryTravel.png'
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "aos/dist/aos.js";

export default function HomePage() {
    const [clickedOnce, setClicked] = useState(false);
    return (
        <div className=" pageWidth">
            <NavBar></NavBar>
            <div className="container mt-5">

                <div class="p-4 p-md-5  mb-4 rounded text-body-emphasis flagImage ">
                    <div class="col-lg-6 px-0 contentContainer">
                        <h1 class="display-4 fst-italic">Welcome To Country Web Applicatiion</h1>
                        <p class="lead my-3">This website provides you with very decsriptive information about your location or any country you wish</p>
                        <p class="lead mb-0">
                            {clickedOnce == false && (<button className="btn btn-light" onClick={() => { setClicked(!clickedOnce) }} >Continue reading...<i class="bi bi-caret-down"></i></button>)}
                            {clickedOnce == true && (
                                <div>
                                    <p>
                                        Please visit the "Current Location" section in the navigation bar to get details about your current location
                                        and details related to wheather forecast and country .
                                        <br></br><br></br>
                                        Please visit the "Find Country" section in the navigation bar to get details about your different countries
                                        their weather and location in map etc.
                                        <br></br><br></br>
                                        <h3>About Site Developemet</h3>
                                        <p>This site is hosted on git hub as a demo project for a country appilication by me "Thiwanka Reiss -Undergraduate UMO, Diploma ICET"
                                            <br></br>
                                            Site is developed by react framework and few weather and country api's.
                                        </p>

                                    </p>
                                    <button className="btn btn-light" onClick={() => { setClicked(!clickedOnce) }} >Hide <i class="bi bi-caret-up"></i></button>
                                </div>

                            )}
                        </p>
                    </div>
                </div>
                <div class="row mb-2" >
                    <div class="col-md-6">
                        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-primary-emphasis">Local</strong>
                                <h3 class="mb-0 text-success">Current Location</h3>
                                <div class="mb-1 text-body-secondary">&nbsp;</div>
                                <p class="card-text mb-auto">Visit this section and allow site to access your location to get details about your location.</p>
                                <div className="w-100 d-flex justify-content-end">
                                    <div className="w-30">
                                        <Link to="/country-web/currentLocation">
                                            <button href="#" class="btn btn-outline-primary btn-sm ">
                                                <i class="bi bi-geo-alt"></i> Find My Location
                                            </button>
                                        </Link>
                                    </div>
                                </div>


                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <img src={mapGoogle} width="200" height="250"></img>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" >
                            <div class="col p-4 d-flex flex-column position-static">
                                <strong class="d-inline-block mb-2 text-success-emphasis">Global</strong>
                                <h3 class="mb-0 text-success">Countries/States data</h3>
                                <div class="mb-1 text-body-secondary">&nbsp;</div>
                                <p class="card-text mb-auto">Visit this section to get details about various countries.</p>
                                <div className="w-100 d-flex justify-content-end">
                                    <div className="w-30">
                                        <Link to="/country-web/countryPage">
                                            <button href="#" class="btn btn-outline-primary btn-sm ">
                                                <i class="bi bi-search"></i> Browse Counrty Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>


                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <img src={travel} width="200" height="250"></img>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}