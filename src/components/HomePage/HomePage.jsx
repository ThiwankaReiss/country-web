import NavBar from "../NavBar/NavBar"
import './HomePage.css';
export default function HomePage(){
    return(
        <div className=" pageWidth">
            <NavBar></NavBar>
            <div className="container">
                <div className="row">
                    <p>Home page</p>
                </div>
            </div>
        </div>
    )
}