import { Link } from "react-router-dom";

import amaroLogo from "../assets/AmaroResort.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

import "../App.css";

const Header = () => {
    return (
        <>
            <div className="site-nav">
                <div className="site-name" id="site-name">
                    <a href="index.php" id="navlogo">
                        <img src={amaroLogo} alt="logo" className="logo" />
                    </a>
                </div>
                <div className="nav-bar" id="navbar">
                    <Link to="/" className="navbar">
                        {" "}
                        Home{" "}
                    </Link>
                    <Link to="/about" className="navbar">
                        {" "}
                        About{" "}
                    </Link>
                    <Link to="/services" className="navbar">
                        {" "}
                        Services{" "}
                    </Link>
                    <Link to="/reservation" className="navbar">
                        {" "}
                        Reservation{" "}
                        </Link>
                    <Link to="/contacts" className="navbar">
                        {" "}
                        Contact{" "}
                    </Link>
                </div>
                <a href="login.php" id="book-button">
                    <button type="button" className="book-btn">
                        Book Now
                    </button>
                </a>

                <div className="vl"></div>

                <div className="mobile-button">
                    <span id="user-button">
                        <a href="login.php">
                            <FontAwesomeIcon icon={faSignInAlt} id="user" />
                        </a>
                    </span>

                    <span id="menu-bar">
                        <FontAwesomeIcon icon={faBars} id="main-menu" />
                    </span>
                </div>
            </div>
        </>
    );
}

export default Header;
