import NavBar from "../NavBar/NavBar"
import "./CurrentLocation.css"
export default function CurrentLocation(){
    return(
        <div className="pageWidth">
            <NavBar></NavBar>
            <div className="container">
                <div className="row">
                    <p>Current Location page</p>
                </div>
            </div>
        </div>
    )
}