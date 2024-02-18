import { Link } from "react-router-dom";

import footerLogo from "../assets/FooterLogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import "../App.css";

const Footer = () => {
    return (
        <>
            <section id="footer">
                <div className="ftr-container">
                    <div className="ftr-content">
                        <div className="ftr-left">
                            <Link to="/home" id="footerLogo">
                                <img
                                    src={footerLogo}
                                    alt="logo"
                                    className="ftr-logo"
                                />
                            </Link>
                            <p className="cta-text">
                                Book your unforgettable getaway now and
                                experience the ultimate relaxation at our
                                resort!
                            </p>
                            <div className="fb-link">
                                <a
                                    href="https://www.facebook.com/amaroresort2023"
                                    id="fblink"
                                >
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faFacebook}
                                            id="ftricon"
                                        />
                                    </span>
                                    <span className="label">Amaro Resort</span>
                                </a>
                            </div>
                            <div className="email-address">
                                <a
                                    href="mailto:amaroresort@gmail.com"
                                    id="emailadd"
                                >
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            id="ftricon"
                                        />
                                    </span>
                                    <span className="label">
                                        amaroresort@gmail.com
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="ftr-right">
                            <div className="links-label">
                                <h2>Links</h2>
                                <ul>
                                    <li>
                                        <Link to="/" className="navbar">
                                            {" "}
                                            Home{" "}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about" className="navbar">
                                            {" "}
                                            About{" "}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services" className="navbar">
                                            {" "}
                                            Services{" "}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/reservation"
                                            className="navbar"
                                        >
                                            {" "}
                                            Reservation{" "}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contacts" className="navbar">
                                            {" "}
                                            Contact{" "}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="links-label">
                                <h2>Legal</h2>
                                <ul>
                                    <li>
                                        <a href="privacypolicy.php">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="t&c.php">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <Link to="/rules" className="navbar">
                                            {" "}
                                            Rules{" "}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="newsletter">
                                <h2>Newsletter</h2>
                                <p className="newsletter-text">
                                    Elevate your resort experience and be the
                                    first to receive exclusive promotions,
                                    exciting updates, and insider insights by
                                    subscribing to our newsletter.
                                </p>
                                <div className="subscribe">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                    />
                                    <button type="submit" title="subscribe">
                                        <FontAwesomeIcon
                                            icon={faPaperPlane}
                                            id="subButton"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        Copyright © 2023. All rights reserved.
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
