import amaroLogo from "./assets/AmaroResort.png";
import profileIcon from "./assets/profile-icon.jpg";
import footerLogo from "./assets/FooterLogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faRightFromBracket,
  faUserEdit,
  faStar,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import "./App.css";

function App() {
  return (
    <>
      {/* start of home */}
      <section id="home" className="page-section active">
        {/* hero */}
        <div className="hero" id="hero">
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
          <div className="head-bottom flex">
            <h1>Your affordable quick getaway in Metro Manila!</h1>
            <p>
              Escape to our Metro Manila oasis and enjoy our resort's enticing
              offerings, including room accommodations, a versatile event area
              for memorable occasions, and a refreshing swimming pool.
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
                  Experience aquatic bliss with our comprehensive swimming
                  services, where skilled instructors offer tailored lessons for
                  all skill levels, from beginners to advanced swimmers, in our
                  family-friendly pools and lap pool.
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
                  Step into our inviting hotel room, where tasteful decor, a
                  peaceful ambiance, and plush bedding await to provide the
                  perfect retreat after a day of travel or exploration, ensuring
                  you wake up refreshed and ready for new adventures.
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
                  Our hotel provides versatile event spaces and attentive event
                  planning services for intimate celebrations, corporate
                  gatherings, weddings, anniversaries, and professional
                  conferences, ensuring a seamless and memorable event while we
                  take care of the details.
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
                  Discover Serenity and Bliss in Our Tranquil Enclave: Your
                  Gateway to Unforgettable Experiences
                </h1>
                <p className="short-preview">
                  Unwind, relax, and reconnect with yourself amidst the serene
                  surroundings of our resort. Welcome to your gateway to
                  serenity, where cherished memories are waiting to be created.
                </p>
              </div>
              <a href="about.php" id="aboutUs">
                <button type="button" className="abt-btn">
                  KNOW MORE
                </button>
              </a>
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
                The resort grounds were impeccably maintained, and the lush
                gardens and pristine beachfront created a true tropical
                paradise. I spent hours just lounging by the pool, soaking in
                the sun.
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
                Had an amazing time at the resort! Beautiful location, friendly
                staff, and excellent amenities. Will definitely be back!
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
                The resort exceeded all expectations. The rooms were
                comfortable, the food was delicious, and the beach was stunning.
                Highly recommend it!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end of feedbacks */}

      {/* start of CTA */}
      <section id="cta">
        <div className="cta-bg">
          <div className="cta-content">
            <div className="cta-above">
              <h1>Experience the perfect getaway!</h1>
              <p>
                Experience the perfect getaway at our resort, offering a range
                of event packages, enticing room accommodations, and competitive
                swimming rates for an unforgettable stay.
              </p>
            </div>
            <div className="cta-below">
              <a href="login.php" id="cta-button">
                <button type="button" className="cta-btn">
                  BOOK NOW
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end of CTA */}

      {/* start of footer */}
      <section id="footer">
        <div className="ftr-container">
          <div className="ftr-content">
            <div className="ftr-left">
              <a href="index.php" id="footerLogo">
                <img src={footerLogo} alt="logo" className="ftr-logo" />
              </a>
              <p className="cta-text">
                Book your unforgettable getaway now and experience the ultimate
                relaxation at our resort!
              </p>
              <div className="fb-link">
                <a href="https://www.facebook.com/amaroresort2023" id="fblink">
                  <span>
                    <FontAwesomeIcon icon={faFacebook} id="ftricon" />
                  </span>
                  <span className="label">Amaro Resort</span>
                </a>
              </div>
              <div className="email-address">
                <a href="mailto:amaroresort@gmail.com" id="emailadd">
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} id="ftricon" />
                  </span>
                  <span className="label">amaroresort@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="ftr-right">
              <div className="links-label">
                <h2>Links</h2>
                <ul>
                  <li>
                    <a href="index.php">Home</a>
                  </li>
                  <li>
                    <a href="about.php">About</a>
                  </li>
                  <li>
                    <a href="services.php">Services</a>
                  </li>
                  <li>
                    <a href="reservation.php">Reservation</a>
                  </li>
                  <li>
                    <a href="contact.php">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="links-label">
                <h2>Legal</h2>
                <ul>
                  <li>
                    <a href="privacypolicy.php">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="t&c.php">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="rules.php">Rules and Regulations</a>
                  </li>
                </ul>
              </div>
              <div className="newsletter">
                <h2>Newsletter</h2>
                <p className="newsletter-text">
                  Elevate your resort experience and be the first to receive
                  exclusive promotions, exciting updates, and insider insights
                  by subscribing to our newsletter.
                </p>
                <div className="subscribe">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <button type="submit" title="subscribe">
                    <FontAwesomeIcon icon={faPaperPlane} id="subButton" />
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
      {/* end of footer */}
    </>
  );
}

export default App;
