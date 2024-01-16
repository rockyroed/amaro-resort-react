import profileIcon from "../assets/profile-icon.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CTA from "./CTA.jsx";

const Home = () => {
    return (
        <>
            {/* start of home */}
            <section id="home" className="page-section active">
                {/* hero */}
                <div className="hero" id="hero">
                    <Header />
                    <div className="head-bottom flex">
                        <h1>Your affordable quick getaway in Metro Manila!</h1>
                        <p>
                            Escape to our Metro Manila oasis and enjoy our
                            resort's enticing offerings, including room
                            accommodations, a versatile event area for memorable
                            occasions, and a refreshing swimming pool.
                        </p>
                        <a href="login.php" id="check-menu">
                            <button type="button" className="head-btn">
                                BOOK NOW
                            </button>
                        </a>
                    </div>
                </div>
                {/* end of hero */}
            </section>
            {/* end of home */}

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
                            <Link to="/swimming" id="swimBook">
                                <button type="button" className="svc-btn">
                                    VIEW DETAILS
                                </button>
                            </Link>
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
                            <Link to="/hotelroom" id="roomBook">
                                <button type="button" className="svc-btn">
                                    VIEW DETAILS
                                </button>
                            </Link>
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
                            <Link to="/event" id="eventBook">
                                <button type="button" className="svc-btn">
                                    VIEW DETAILS
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of services */}

            {/* start of about */}
            <section id="about">
                <div className="about-container">
                    <span className="section-name">ABOUT US</span>
                    <span className="section-phrase">
                        Discover the Essence of Our Resort
                    </span>
                    <div className="content">
                        <div className="left-content">
                            <div className="abt-preview">
                                <h1 className="headline">
                                    Discover Serenity and Bliss in Our Tranquil
                                    Enclave: Your Gateway to Unforgettable
                                    Experiences
                                </h1>
                                <p className="short-preview">
                                    Unwind, relax, and reconnect with yourself
                                    amidst the serene surroundings of our
                                    resort. Welcome to your gateway to serenity,
                                    where cherished memories are waiting to be
                                    created.
                                </p>
                            </div>
                            <Link to="/about" id="aboutUs">
                                <button type="button" className="abt-btn">
                                    KNOW MORE
                                </button>
                            </Link>
                        </div>
                        <div className="right-content">
                            <div className="slideshow">
                                <div className="slide-image"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of about */}

            {/* start of feedbacks */}
            <section id="feedbacks">
                <div className="feedbacks-container">
                    <span className="section-name">FEEDBACKS</span>
                    <span className="section-phrase">
                        Delighted Guests Speak: Reviews and Testimonials
                    </span>
                    <div className="feedbacks-list">
                        <div className="customer">
                            <img src={profileIcon} alt="customer image" />

                            <div className="rating">
                                <span>
                                    <FontAwesomeIcon icon={faStar} id="star" />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faStar} id="star" />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faStar} id="star" />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faStar} id="star" />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faStar} id="star" />
                                </span>
                            </div>

                            <h3>Aimee Cruz</h3>
                            <p>
                                The resort grounds were impeccably maintained,
                                and the lush gardens and pristine beachfront
                                created a true tropical paradise. I spent hours
                                just lounging by the pool, soaking in the sun.
                            </p>
                        </div>

                        <div className="customer">
                            <img src={profileIcon} alt="customer image" />

                            <div className="rating">
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                            </div>

                            <h3>John Doe</h3>
                            <p>
                                Had an amazing time at the resort! Beautiful
                                location, friendly staff, and excellent
                                amenities. Will definitely be back!
                            </p>
                        </div>
                        <div className="customer">
                            <img src={profileIcon} alt="customer image" />

                            <div className="rating">
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                            </div>

                            <h3>Finn Steiner</h3>
                            <p>
                                The resort exceeded all expectations. The rooms
                                were comfortable, the food was delicious, and
                                the beach was stunning. Highly recommend it!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of feedbacks */}

            {/* start of CTA */}
            <CTA />
            {/* end of CTA */}

            {/* start of footer */}
            <Footer />
            {/* end of footer */}
        </>
    );
};

export default Home;
