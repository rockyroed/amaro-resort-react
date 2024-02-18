import { Link } from "react-router-dom";

import amaroLogoWhite from "../assets/logo_white.png";
import amaroLogo from "../assets/AmaroResort.png";
import "../css/Reservation.css";

const Reservation = () => {
    return (
        <>
            <section id="reservation">
                <div className="left-book">
                    <div className="left-container">
                        <div className="site-name" id="site-name">
                            <Link to="/" id="navlogo">
                                <img
                                    src={amaroLogoWhite}
                                    alt="logo"
                                    className="logo"
                                />
                            </Link>
                        </div>
                        <h1>CHOOSE A RESERVATION</h1>
                        <a href="#swim-book" id="swimBook">
                            <button
                                type="button"
                                className="book-btn"
                                value="Swimming"
                                id="swimming-btn"
                            >
                                SWIMMING
                            </button>
                        </a>
                        <a href="#room-book" id="roomBook">
                            <button
                                type="button"
                                className="book-btn"
                                value="Room"
                                id="room-btn"
                            >
                                ROOM
                            </button>
                        </a>
                        <a href="#event-book" id="eventBook">
                            <button
                                type="button"
                                className="book-btn"
                                value="Event"
                                id="event-btn"
                            >
                                EVENT
                            </button>
                        </a>
                    </div>
                </div>
                <div className="right-book hidden" id="right-book">
                    <div className="right-container">
                        <img src={amaroLogo} alt="logo" className="logo" />
                        <span className="section-name" id="section-name"></span>
                        <div className="form-container">
                            <header>Guest Details</header>
                            <p>Fill out the required fields to reserve.</p>
                            <hr className="hz-line" />
                            {/* Form */}
                            <form action="" className="form" method="post">
                                {/* Full Name Column */}
                                <input
                                    className="hidden"
                                    id="restype"
                                    name="restype"
                                ></input>
                                <div className="column">
                                    {/* First Name */}
                                    <div className="input-box">
                                        <label htmlFor="FirstName">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            title="First Name"
                                            name="FirstName"
                                            size="40"
                                            maxLength="50"
                                            placeholder="First Name"
                                            required
                                        />
                                    </div>

                                    {/* Middle Name */}
                                    <div className="input-box">
                                        <label htmlFor="MiddleName">
                                            Middle Name
                                        </label>
                                        <input
                                            type="text"
                                            id="middleName"
                                            title="Middle Name"
                                            name="MiddleName"
                                            size="30"
                                            maxLength="50"
                                            placeholder="Middle Name"
                                        />
                                    </div>

                                    {/* Last Name */}
                                    <div className="input-box">
                                        <label htmlFor="LastName">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            title="Last Name"
                                            name="LastName"
                                            size="30"
                                            maxLength="50"
                                            placeholder="Last Name"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div className="column">
                                    <div className="input-box">
                                        <label htmlFor="PhoneNumber">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            title="11-Digit Phone Number"
                                            name="PhoneNumber"
                                            placeholder="(09)00-000-0000"
                                            maxLength="11"
                                            pattern="[09]{2}[0-9]{9}"
                                            required
                                        />
                                    </div>

                                    {/* Email Address */}
                                    <div className="input-box">
                                        <label htmlFor="EmailAddress">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="emailAddress"
                                            title="Email Address"
                                            name="EmailAddress"
                                            size="50"
                                            maxLength="50"
                                            placeholder="Email Address"
                                            required
                                        />
                                    </div>
                                </div>

                                <hr className="horizontal-line" />

                                <div className="cta-buttons">
                                    <a href="index.php" id="cancelButton">
                                        <button
                                            type="button"
                                            className="secondary-btn"
                                        >
                                            CANCEL
                                        </button>
                                    </a>
                                    <a
                                        href="bookingdetails.php"
                                        id="reserveButton"
                                    >
                                        <button className="primary-btn">
                                            BOOK NOW
                                        </button>
                                    </a>
                                </div>
                            </form>
                            {/* End of Form */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Reservation;
