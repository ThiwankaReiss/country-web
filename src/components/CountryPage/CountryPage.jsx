import NavBar from "../NavBar/NavBar"
import "./CountryPage.css"
export default function CountryPage(){
    return(
        <div className="pageWidth">
            <NavBar></NavBar>
            <div className="container">
                <div className="row">
                    <p>Country page</p>
                </div>
            </div>
        </div>
    )
}