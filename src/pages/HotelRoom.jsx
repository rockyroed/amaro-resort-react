import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CTA from "./CTA.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

import "../css/HotelRoom.css";

const HotelRoom = () => {
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
                <div class="rates-container">
                    <span class="section-phrase">Room Rates</span>
                    <div class="room-rates-container">
                        <div class="left-img-1"></div>
                        <div class="right-details">
                            <div class="room-price">
                                <h2> Couple Room </h2>
                                <p>₱2,000.00</p>
                            </div>

                            <div class="inclusions">
                            <FontAwesomeIcon
                                    icon={faArrowCircleRight}
                                    className="fa-arrow-circle-right"
                                />
                                <p class="in-details">1-2 pax</p>
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

                    <div class="room-rates-container">
                        <div class="right-details">
                            <div class="room-price">
                                <h2> Family Room </h2>
                                <p>₱2,800.00</p>
                            </div>

                            <div class="inclusions">
                            <FontAwesomeIcon
                                    icon={faArrowCircleRight}
                                    className="fa-arrow-circle-right"
                                />
                                <p class="in-details">2-4 pax</p>
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

                        <div class="left-img-2"></div>
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
}
export default HotelRoom;
