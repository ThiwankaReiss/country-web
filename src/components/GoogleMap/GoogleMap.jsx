import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GoogleMap({ countryName ,lattitudes,longitudes}) {
 

    useEffect(() => {
        const fetchData = async () => {
            if(countryName !=null){
                try {
                    const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
                    console.log(response.data);
                    console.log(response.data[response.data.length - 1].area);
                    
                    const zoomValue = calculateZoomValue(response.data[response.data.length - 1].area);
                    console.log("Proportional Zoom Value:", zoomValue);
                 
    
                    // Set the map frame source after setting the area country
                    const country = countryName;
                    const mapFrame = document.getElementById("mapFrame");
                    const sizeC = zoomValue + 1;
                    mapFrame.src = "https://maps.google.com/maps?q=" + encodeURIComponent(country) + `&t=&z=${sizeC}&ie=UTF8&iwloc=&output=embed`;
                } catch (error) {
                    console.error("Error fetching country data:", error);
                }
            }else if(lattitudes !=null && longitudes !=null){
                try{
                    var lat = lattitudes;
                    var lng =longitudes;
                    var mapUrl = "https://maps.google.com/maps?q=" + lat + "," + lng + "&t=&z=13&ie=UTF8&iwloc=&output=embed";
                    document.getElementById('mapFrame').src = mapUrl;
                }catch(error){
                    
                }
            }
            
        };

        fetchData();
    }, [countryName]);

    function calculateZoomValue(area) {
        // Define the minimum and maximum zoom levels
        const minZoom = 3;
        const maxZoom = 7;
    
        // Define the minimum and maximum areas
        const minArea = 6510;
        const maxArea = 3287590;
    
        // Calculate the proportional zoom value
        const zoomValue = minZoom + ((maxZoom - minZoom) * (1 - Math.log(area / minArea) / Math.log(maxArea / minArea)));
    
        // Return the zoom value rounded to the nearest integer
        return Math.round(zoomValue);
    }

    return (
        <div className="container-fluid card m-2 p-3">
            <iframe id="mapFrame" width="100%" height="500px" allowFullScreen title="Google Map"></iframe>
        </div>
    );
}
