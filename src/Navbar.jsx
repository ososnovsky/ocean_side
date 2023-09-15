import SailingIcon from '@mui/icons-material/Sailing';
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true); // Initialize state

    // Function to toggle the navbar collapse state
    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <SailingIcon style={{ marginRight: '5' }} />
                <Link to="/" className="navbar-brand">Ocean Side</Link>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <button
                    className={`navbar-toggler ${isNavCollapsed ? 'collapsed' : ''}`} // Toggle collapsed class
                    type="button"
                    onClick={handleNavCollapse} // Call handleNavCollapse when clicked
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div className="collapse navbar-collapse justify-content-end" id="navbarNav"> */}

                <div
                    className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`} // Toggle show class
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" onClick={handleNavCollapse} className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" onClick={handleNavCollapse} className="nav-link">Gallery</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/features" onClick={handleNavCollapse} className="nav-link">Features</Link>
                        </li> */}
                    </ul>

                </div>
            </div>
        </nav>
    )
}