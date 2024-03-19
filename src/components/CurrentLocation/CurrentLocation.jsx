import NavBar from "../NavBar/NavBar"
import GoogleMap from "../GoogleMap/GoogleMap"
import "./CurrentLocation.css"
import CountryCard from "../CountryCard/CountryCard"
import WeatherCard from "../WeatherCard/WeatherCard"
export default function CurrentLocation(){
    return(
        <div className="pageWidth">
            <NavBar></NavBar>
            <div className="container">
                <div className="row">
                    <GoogleMap lattitudes="6.7881" longitudes="79.8913" ></GoogleMap>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <CountryCard lattitudes="6.7881" longitudes="79.8913"></CountryCard>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <WeatherCard location="6.7881,79.8913" ></WeatherCard>
                    </div>
                </div>
            </div>
        </div>
    )
}