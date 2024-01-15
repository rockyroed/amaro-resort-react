import amaroLogo from "./assets/AmaroResort.png";
import footerLogo from "./assets/FooterLogo.png";
import locationLogo from "./assets/location.png";
import telephoneLogo from "./assets/telephone.png";
import emailLogo from "./assets/email.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

} from "@fortawesome/free-solid-svg-icons";

import "./Contacts.css";

function Contacts() {
    return (
        <>
    <section id="navBar" className="page-section active">
    {/* <!-- start of nav --> */}
    <div className="nav" id="nav">
      <div className="site-nav">
        <div className="site-name" id="site-name">
          <a href="index.php" id="navlogo">
            <img src={amaroLogo} alt="logo" className="logo"></img>
          </a>
        </div>
        <div className="nav-bar" id="navbar">
        <a className="navBar" href="index.php"> Home </a>
        <a className="navBar" href="about.php"> About </a>
        <a className="navBar" href="services.php"> Services </a>
        <a className="navBar" href="login.php"> Reservation </a>
        <a className="navBar" href="contact.php"> Contact </a>
        </div>

          <a href="login.php" id="book-button">
            <button type="button" className="book-btn">Book Now</button>
          </a>

        <div className="mobile-button">
          <span id="user-button">
              <a href="login.php">
                <i className="fas fa-sign-in-alt" id="user" title="Log In"></i>
              </a>
          </span>

          <span id="menu-bar">
            <i className="fas fa-bars" id="main-menu"></i>
          </span>
        </div>

        <div className="account-menu" id="account-menu">
          <a href="account.php"><i className="fas fa-user-edit"></i>Account</a>
          <a href="logout.php?type=guest"><i className="fas fa-sign-out-alt"></i>Logout</a>
        </div>
      </div>
    </div>
    {/* <!-- end of nav --> */}
  </section>

  {/* <!-- start of content --> */}
  <div className="content">

    <div className="imagecontainer">
      <img src={locationLogo} alt="locationicon" className="custom-image"> </img>
    </div>

    <div className="address">
      <h3>Address</h3>
      <h5>11 San Baraquiel Street, Brgy. Punturin, Valenzuela City</h5>

    </div>

    <div className="imagecon2">
      <img src={telephoneLogo} alt="telephoneicon" className="custom-image2"></img>
    </div>

    <div className="telephone">
      <h3>Contact Numbers</h3>
      <h5>LANDLINE: 02 83667226</h5>
    </div>

    <div className="contact2">
      <h5>GLOBE: 0977 714 5122</h5>
    </div>

    <div className="contact3">
      <h5>SMART: 0947 369 1817</h5>
    </div>

    <div className="imagecon3">
      <img src={emailLogo} alt="telephoneicon" className="custom-image3"></img>
    </div>

    <div className="mail">
      <h3>Email Address</h3>
      <h5>amaroresort@gmail.com</h5>
    </div>


    <h4>Send us a message</h4>
    <h6>We would love to hear from you! Send us a message using the contact form below.</h6>

    <input type="fname" id="fname" name="fname" placeholder="Enter your name" required></input>
    <input type="email" id="emailAdd" name="email" placeholder="Enter your email" required></input>
    <input type="message" id="message" name="message" placeholder="Enter your message" required></input>

    <a href="#" id="send-button">
      <button type="button" className="send-btn">SEND NOW</button>
    </a>
    </div>


  <div className="box">
    <h2>Our Location</h2>

  </div>

  {/* <div className="google-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15433.960618757048!2d120.9856815!3d14.7413931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b107a4606dcb%3A0xddff5b3356ef5b20!2sAMARO%20RESORT!5e0!3m2!1sen!2sph!4v1689492395935!5m2!1sen!2sph" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div> */}
  {/* <!-- end of content --> */}

  {/* <!-- start of footer --> */}
  <section id="footer">
    <div className="ftr-container">
      <div className="ftr-content">
        <div className="ftr-left">
          <a href="index.php" id="footerLogo">
            <img src={footerLogo} alt="logo" className="ftr-logo"></img>
          </a>
          <p className="cta-text">
            Book your unforgettable getaway now and experience the ultimate
            relaxation at our resort!
          </p>
          <div className="fb-link">
            <a href="https://www.facebook.com/amaroresort2023" id="fblink">
              <span><i className="fab fa-facebook" id="ftricon"></i></span>
              <span className="label">Amaro Resort</span>
            </a>
          </div>
          <div className="email-address">
            <a href="mailto:amaroresort@gmail.com" id="emailadd">
              <span><i className="fas fa-envelope" id="ftricon"></i></span>
              <span className="label">amaroresort@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="ftr-right">
          <div className="links-label">
            <h2>Links</h2>
            <ul>
              <li><a href="index.php">Home</a></li>
              <li><a href="about.php">About</a></li>
              <li><a href="services.php">Services</a></li>
              <li><a href="reservation.php">Reservation</a></li>
              <li><a href="contact.php">Contact</a></li>
            </ul>
          </div>
          <div className="links-label">
            <h2>Legal</h2>
            <ul>
              <li><a href="privacypolicy.php">Privacy Policy</a></li>
              <li><a href="t&c.php">Terms & Conditions</a></li>
              <li><a href="rules.php">Rules and Regulations</a></li>
              </ul>
          </div>
          <div className="newsletter">
            <h2>Newsletter</h2>
            <p className="newsletter-text">
              Elevate your resort experience and be the first to receive exclusive promotions,
              exciting updates, and insider insights by subscribing to our newsletter.
            </p>
            <div className="subscribe">
              <input type="email" id="email" name="email" placeholder="Enter your email"></input>
              <button type="submit" title="subscribe"><i className="fas fa-paper-plane" id="subButton"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright © 2023. All rights reserved.
      </div>
    </div>
  </section>
  {/* <!-- end of footer --> */}
        </>
    );
}

export default Contacts;