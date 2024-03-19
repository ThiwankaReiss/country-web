import NavBar from "../NavBar/NavBar"
import GoogleMap from "../GoogleMap/GoogleMap"
import "./CurrentLocation.css"
export default function CurrentLocation(){
    return(
        <div className="pageWidth">
            <NavBar></NavBar>
            <div className="container">
                <div className="row">
                    <GoogleMap lattitudes="6.7881" longitudes="79.8913" ></GoogleMap>
                </div>
            </div>
        </div>
    )
}