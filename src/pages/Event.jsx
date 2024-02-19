import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CTA from "./CTA.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

import "../css/Event.css";

const Event = () => {
    return (
        <>
            <section id="navBar" className="page-section active">
                {/* start of nav */}
                <div className="nav" id="nav">
                    <Header />
                </div>
                {/* end of nav */}
            </section>

            {/* start of room rates */}
            <section id="roomRates">
                <div className="rates-container">
                    <span className="section-phrase">Event Rates</span>
                    <div className="room-rates-container">
                        <div className="event-left-img-1"></div>
                        <div className="right-details">
                            <div className="room-price">
                                <h2> Function Hall </h2>
                                <p>₱25,000.00</p>
                            </div>

                            <div className="inclusions">
                                <FontAwesomeIcon
                                    icon={faArrowCircleRight}
                                    className="fa-arrow-circle-right"
                                />
                                <p className="in-details">70-80 pax</p>
                            </div>

                            <span>Additional Information:</span>
                            <ul>
                                <li>
                                    Standard check in 2:00 PM - 12:00 NN check
                                    out
                                </li>
                                <li>Swimming entrance is not included.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="room-rates-container">
                        <div className="right-details">
                            <div className="room-price">
                                <h2> Court / Events Place</h2>
                                <p>₱35,000.00</p>
                            </div>

                            <div className="inclusions">
                                <FontAwesomeIcon
                                    icon={faArrowCircleRight}
                                    className="fa-arrow-circle-right"
                                />
                                <p className="in-details">200-250 pax</p>
                            </div>

                            <span>Additional Information:</span>
                            <ul>
                                <li>
                                    Standard check in 2:00 PM - 12:00 NN check
                                    out
                                </li>
                                <li>Swimming entrance is not included.</li>
                            </ul>
                        </div>

                        <div className="event-left-img-2"></div>
                    </div>
                </div>
            </section>
            {/* end of room rates */}

            {/* start of CTA */}
            <CTA />
            {/* end of CTA */}

            {/* start of footer */}
            <Footer />
            {/* end of footer */}
        </>
    );
};
export default Event;
