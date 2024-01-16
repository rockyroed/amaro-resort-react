import { Link } from "react-router-dom";

import amaroLogoWhite from "../assets/logo_white.png";
import amaroLogo from "../assets/AmaroResort.png";
import "../css/Reservation.css";

const Reservation = () => {
    return (
        <>
            <section id="reservation">
                <div class="left-book">
                    <div class="left-container">
                        <div class="site-name" id="site-name">
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
                                class="book-btn"
                                value="Swimming"
                                id="swimming-btn"
                            >
                                SWIMMING
                            </button>
                        </a>
                        <a href="#room-book" id="roomBook">
                            <button
                                type="button"
                                class="book-btn"
                                value="Room"
                                id="room-btn"
                            >
                                ROOM
                            </button>
                        </a>
                        <a href="#event-book" id="eventBook">
                            <button
                                type="button"
                                class="book-btn"
                                value="Event"
                                id="event-btn"
                            >
                                EVENT
                            </button>
                        </a>
                    </div>
                </div>
                <div class="right-book hidden" id="right-book">
                    <div class="right-container">
                        <img src={amaroLogo} alt="logo" className="logo" />
                        <span class="section-name" id="section-name"></span>
                        <div class="form-container">
                            <header>Guest Details</header>
                            <p>Fill out the required fields to reserve.</p>
                            <hr class="hz-line" />
                            {/* Form */}
                            <form action="" class="form" method="post">
                                {/* Full Name Column */}
                                <input
                                    class="hidden"
                                    id="restype"
                                    name="restype"
                                ></input>
                                <div class="column">
                                    {/* First Name */}
                                    <div class="input-box">
                                        <label for="FirstName">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            title="First Name"
                                            name="FirstName"
                                            value="<?php echo $firstname; ?>"
                                            size="40"
                                            maxlength="50"
                                            placeholder="First Name"
                                            required
                                        />
                                    </div>

                                    {/* Middle Name */}
                                    <div class="input-box">
                                        <label for="MiddleName">
                                            Middle Name
                                        </label>
                                        <input
                                            type="text"
                                            id="middleName"
                                            title="Middle Name"
                                            name="MiddleName"
                                            value="<?php echo $middlename; ?>"
                                            size="30"
                                            maxlength="50"
                                            placeholder="Middle Name"
                                        />
                                    </div>

                                    {/* Last Name */}
                                    <div class="input-box">
                                        <label for="LastName">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            title="Last Name"
                                            name="LastName"
                                            value="<?php echo $lastname; ?>"
                                            size="30"
                                            maxlength="50"
                                            placeholder="Last Name"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone Number */}
                                <div class="column">
                                    <div class="input-box">
                                        <label for="PhoneNumber">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            title="11-Digit Phone Number"
                                            name="PhoneNumber"
                                            placeholder="(09)00-000-0000"
                                            maxlength="11"
                                            pattern="[09]{2}[0-9]{9}"
                                            value="<?php echo $phonenumber; ?>"
                                            required
                                        />
                                    </div>

                                    {/* Email Address */}
                                    <div class="input-box">
                                        <label for="EmailAddress">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="emailAddress"
                                            title="Email Address"
                                            name="EmailAddress"
                                            value="<?php echo $emailaddress; ?>"
                                            size="50"
                                            maxlength="50"
                                            placeholder="Email Address"
                                            required
                                        />
                                    </div>
                                </div>

                                <hr class="horizontal-line" />

                                <div class="cta-buttons">
                                    <a href="index.php" id="cancelButton">
                                        <button
                                            type="button"
                                            class="secondary-btn"
                                        >
                                            CANCEL
                                        </button>
                                    </a>
                                    <a
                                        href="bookingdetails.php"
                                        id="reserveButton"
                                    >
                                        <button class="primary-btn">
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
