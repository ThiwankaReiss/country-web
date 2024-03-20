import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navBarCustom fixed-top">
            <div className="container-fluid">
                <Link to="/country-web/" className="navbar-brand">
                    <i className="bi bi-globe-americas"></i> Countries
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/country-web/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/country-web/currentLocation" className="nav-link">Current Location</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/country-web/countryPage" className="nav-link">Find Country</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
