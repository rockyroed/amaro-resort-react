import amaroLogo from "./assets/AmaroResort.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faRightFromBracket,
    faUserEdit,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function Header() {
    return (
        <>
            <div className="site-nav">
                <div className="site-name" id="site-name">
                    <a href="index.php" id="navlogo">
                        <img src={amaroLogo} alt="logo" className="logo" />
                    </a>
                </div>
                <div className="nav-bar" id="navbar">
                    <a className="navBar" href="index.php">
                        {" "}
                        Home{" "}
                    </a>
                    <a className="navBar" href="about.php">
                        {" "}
                        About{" "}
                    </a>
                    <a className="navBar" href="services.php">
                        {" "}
                        Services{" "}
                    </a>
                    <a className="navBar" href="login.php">
                        {" "}
                        Reservation{" "}
                    </a>
                    <a className="navBar" href="contact.php">
                        {" "}
                        Contact{" "}
                    </a>
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
                            <FontAwesomeIcon icon={faBars} id="main-menu" />
                        </a>
                    </span>

                    <span id="menu-bar">
                        <FontAwesomeIcon icon={faBars} id="main-menu" />
                    </span>
                </div>

                <div className="account-menu" id="account-menu">
                    <a href="account.php">
                        <FontAwesomeIcon icon={faUserEdit} />
                        Account
                    </a>
                    <a href="logout.php?type=guest">
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Header;
