import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CTA from "./CTA.jsx";

import "../css/Services.css";

const Services = () => {
    return (
        <>
            {/* start of nav */}
            <section id="navBar" className="page-section active">
                <div className="nav" id="nav">
                    <Header />
                </div>
            </section>
            {/* end of nav */}

            {/* start of header */}
            <section id="header">
                <div className="header-container">
                    <div className="header-content">
                        <h1>
                            Exquisite Offerings: <br></br>
                            Discover Our Resort's Services and Amenities
                        </h1>
                    </div>
                </div>
            </section>
            {/* end of header */}

            {/* start of services */}
            <section id="services">
                <div className="svc-container">
                    <span className="section-name">OUR SERVICES</span>
                    <span className="section-phrase">
                        Experience Our Exceptional Services
                    </span>
                    <div className="svc-options">
                        <div className="svc-type">
                            <div className="swim-img-container"></div>
                            <div className="svctype-desc">
                                <h1 className="svc-title">Swimming</h1>
                                <p className="svc-desc">
                                    Experience aquatic bliss with our
                                    comprehensive swimming services, where
                                    skilled instructors offer tailored lessons
                                    for all skill levels, from beginners to
                                    advanced swimmers, in our family-friendly
                                    pools and lap pool.
                                </p>
                            </div>
                            <a href="swimming.php" id="swimBook">
                                <button type="button" className="svc-btn">
                                    VIEW DETAILS
                                </button>
                            </a>
                        </div>

                        <div className="svc-type">
                            <div className="room-img-container"></div>
                            <div className="svctype-desc">
                                <h1 className="svc-title">Hotel Room</h1>
                                <p className="svc-desc">
                                    Step into our inviting hotel room, where
                                    tasteful decor, a peaceful ambiance, and
                                    plush bedding await to provide the perfect
                                    retreat after a day of travel or
                                    exploration, ensuring you wake up refreshed
                                    and ready for new adventures.
                                </p>
                            </div>
                            <a href="hotelroom.php" id="roomBook">
                                <button type="button" className="svc-btn">
                                    VIEW DETAILS
                                </button>
                            </a>
                        </div>

                        <div className="svc-type">
                            <div className="event-img-container"></div>
                            <div className="svctype-desc">
                                <h1 className="svc-title">Event</h1>
                                <p className="svc-desc">
                                    Our hotel provides versatile event spaces
                                    and attentive event planning services for
                                    intimate celebrations, corporate gatherings,
                                    weddings, anniversaries, and professional
                                    conferences, ensuring a seamless and
                                    memorable event while we take care of the
                                    details.
                                </p>
                            </div>
                            <a href="event.php" id="eventBook">
                                <button type="button" className="svc-btn">
                                    VIEW DETAILS
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of services */}

            {/* start of amenities */}
            <section id="amenities">
                <div className="amenities-container">
                    <span className="section-name">AMENITIES</span>
                    <span className="section-phrase">
                        Experience the Exceptional Amenities at Amaro Resort{" "}
                    </span>
                    <div className="amenities-content">
                        <div className="categories">
                            <h2>Swimming Pool</h2>
                            <div className="amenities-image-container">
                                <div className="facilities">
                                    <div className="amenities-area11"></div>
                                </div>

                                <div className="facilities">
                                    <div className="amenities-area12"></div>
                                </div>
                            </div>
                        </div>

                        <div className="categories">
                            <h2>Outdoor View</h2>
                            <div className="amenities-image-container">
                                <div className="facilities">
                                    <div className="amenities-area21"></div>
                                </div>

                                <div className="facilities">
                                    <div className="amenities-area22"></div>
                                </div>

                                <div className="facilities">
                                    <div className="amenities-area23"></div>
                                </div>
                            </div>
                        </div>

                        <div className="categories">
                            <h2>Dining Area</h2>
                            <div className="amenities-image-container">
                                <div className="facilities">
                                    <div className="amenities-area31"></div>
                                </div>

                                <div className="facilities">
                                    <div className="amenities-area32"></div>
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
export default Services;
