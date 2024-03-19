import { Link } from "react-router-dom";
import './NavBar.css';
export default function NavBar() {
    return (
        <div className=" pageWidth">
            <nav class="navbar navbar-expand-lg navBarColor">
                <div class="container-fluid">
                    <h1><i class="bi bi-globe-americas" ></i></h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center ">
                            <li>
                                <Link to="/" class="nav-link active text-warning" aria-current="page" href="#">Home</Link>
                            </li>
                            <li>
                                <Link to="/currentLocation" class="nav-link active text-primary" aria-current="page" href="#">Current <br></br>Location</Link>
                            </li>
                            <li>
                                <Link to="/countryPage" class="nav-link active text-primary leftMargin" aria-current="page" href="#">Find<br></br> Country</Link>
                            </li>

                        </ul>
                     
                    </div>
                </div>
            </nav>
        </div>
    )
}