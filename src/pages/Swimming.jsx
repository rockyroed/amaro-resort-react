import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CTA from "./CTA.jsx";

import "../css/Swimming.css";

const Swimming = () => {
    return (
        <>
            {/* start of nav */}
            <section id="navBar" className="page-section active">
                {/* start of nav */}
                <div className="nav" id="nav">
                    <Header />
                </div>
                {/* end of nav */}
            </section>

            {/* start of swimming rates */}
            <section id="swimRates">
                <div className="rates-container">
                    <span className="section-phrase">Swimming Rates</span>
                    <div className="swim-rates-container">
                        <div className="left-img"></div>
                        <div className="right-details">
                            <h2> Entrance Fee </h2>
                            <h3> DAY (8:00 AM - 5:00 PM) </h3>
                            <ul>
                                <li>Above 4ft: ₱280.00</li>
                                <li>Below 4ft up to 1 year old: ₱250.00</li>
                                <li>
                                    Senior Citizen/PWD (with presented ID):
                                    ₱224.00
                                </li>
                            </ul>

                            <h3> NIGHT (7:00 PM - 4:00 AM) </h3>
                            <ul>
                                <li>Above 4ft: ₱300.00</li>
                                <li>Below 4ft up to 1 year old: ₱250.00</li>
                                <li>
                                    Senior Citizen/PWD (with presented ID):
                                    ₱240.00
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of swimming rates */}

            {/* start of amenities */}
            <section id="amenities">
                <div className="amenities-container">
                    <span className="section-phrase"> Cottages </span>
                    <div className="amenities-content">
                        <div className="categories">
                            <div className="amenities-image-container">
                                <div className="facilities">
                                    <div className="amenities-area11"></div>
                                    <div className="cottage-price">
                                        <h3> Canopy </h3>
                                        <h2>₱1,000.00</h2>
                                    </div>
                                    <p> 5-10 pax </p>
                                </div>

                                <div className="facilities">
                                    <div className="amenities-area12"></div>
                                    <div className="cottage-price">
                                        <h3> Trellis 1 </h3>
                                        <h2>₱1,500.00</h2>
                                    </div>
                                    <p> 10-15 pax </p>
                                </div>
                            </div>
                        </div>

                        <div className="categories">
                            <div className="amenities-image-container">
                                <div className="facilities">
                                    <div className="amenities-area21"></div>
                                    <div className="cottage-price">
                                        <h3> Trellis 2 </h3>
                                        <h2>₱2,000.00</h2>
                                    </div>
                                    <p> 15-20 pax </p>
                                </div>

                                <div className="facilities">
                                    <div className="amenities-area22"></div>
                                    <div className="cottage-price">
                                        <h3> Kubo </h3>
                                        <h2>₱1,200.00</h2>
                                    </div>
                                    <p> 5-10 pax </p>
                                </div>
                            </div>
                        </div>

                        <div className="categories">
                            <div className="amenities-image-container">
                                <div className="facilities">
                                    <div className="amenities-area31"></div>
                                    <div className="cottage-price">
                                        <h3> Pavilion 1 </h3>
                                        <h2>₱7,500.00</h2>
                                    </div>
                                    <p> 50 pax </p>
                                </div>

                                <div className="facilities">
                                    <div className="amenities-area32"></div>
                                    <div className="cottage-price">
                                        <h3> Pavilion 2 </h3>
                                        <h2>₱8,500.00</h2>
                                    </div>
                                    <p> 65 pax </p>
                                </div>
                            </div>
                        </div>

                        <div className="categories">
                            <div className="amenities-image-container">
                                <div className="facilities">
                                    <div className="amenities-area41"></div>
                                    <div className="cottage-price">
                                        <h3> Pavilion 3 </h3>
                                        <h2>₱9,500.00</h2>
                                    </div>
                                    <p> 100 pax </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of amenities */}

            {/* start of CTA */}
            <CTA />
            {/* end of CTA */}

            {/* start of footer */}
            <Footer />
            {/* end of footer */}
        </>
    );
};
export default Swimming;
