import amaroLogo from "./assets/AmaroResort.png";
import footerLogo from "./assets/FooterLogo.png";
import locationLogo from "./assets/location.png";
import telephoneLogo from "./assets/telephone.png";
import emailLogo from "./assets/email.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

} from "@fortawesome/free-solid-svg-icons";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import "./Contacts.css";

function Contacts() {
    return (
        <>
    <section id="navBar" className="page-section active">
    {/* <!-- start of nav --> */}
    <div className="nav" id="nav">
      <Header/>
    </div>
    {/* <!-- end of nav --> */}
  </section>

  {/* <!-- start of content --> */}
  <div className="content">

    <div className="imagecontainer">
      <img src={locationLogo} alt="locationicon" className="custom-image" />
    </div>

    <div className="address">
      <h3>Address</h3>
      <h5>11 San Baraquiel Street, Brgy. Punturin, Valenzuela City</h5>

    </div>

    <div className="imagecon2">
      <img src={telephoneLogo} alt="telephoneicon" className="custom-image2" />
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
      <img src={emailLogo} alt="telephoneicon" className="custom-image3" />
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

  <div className="google-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15433.960618757048!2d120.9856815!3d14.7413931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b107a4606dcb%3A0xddff5b3356ef5b20!2sAMARO%20RESORT!5e0!3m2!1sen!2sph!4v1689492395935!5m2!1sen!2sph" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
  </div>
  {/* <!-- end of content --> */}

  {/* <!-- start of footer --> */}
  <Footer/>
  {/* <!-- end of footer --> */}
        </>
    );
}

export default Contacts;