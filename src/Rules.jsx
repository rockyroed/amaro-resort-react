import footerLogo from "./assets/FooterLogo.png";
import amaroLogo from "./assets/AmaroResort.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUserEdit,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import "./Rules.css";

function Rules() {
  return (
    <>
      <section id="navBar" className="page-section active">
        {/* start of nav */}
        <div className="nav" id="nav">
          <div className="site-nav">
            <div className="site-name" id="site-name">
              <img src={amaroLogo} alt="logo" className="logo" />
            </div>
            <div className="nav-bar" id="navbar">
              <a className="navBar" href="index.php">
                {" "}
                Home{" "}
              </a>
              <a className="navBar" href="about.html">
                {" "}
                About{" "}
              </a>
              <a className="navBar" href="services.html">
                {" "}
                Services{" "}
              </a>
              <a className="navBar" href="reservation.html">
                {" "}
                Reservation{" "}
              </a>
              <a className="navBar" href="contact.html">
                {" "}
                Contact{" "}
              </a>
            </div>

            <a href="#" id="book-button">
              <button type="button" className="book-btn">
                Book Now
              </button>
            </a>

            <div className="vl"></div>

            <span>
              <FontAwesomeIcon icon={faUserEdit} id="user" />
            </span>
          </div>
        </div>
        {/* end of nav */}
      </section>

      {/* start of content */}
      <div className="title">
        <h1>Rules and Regulations</h1>
      </div>

      <div className="content">
        <section id="rules">
          <div>
            <h4>Dear Valued Guests,</h4>
            <h5>
              {" "}
              To make your stay safe and comfortable, please observe the
              following rules and regulations.
            </h5>
          </div>

          <div className="text1">
            <p>
              1. <span className="txt1">NO WRISTBAND NO ENTRY</span>, Guest must be
              wearing their wristband at all times.
            </p>
          </div>

          <div className="text2">
            <p>
              2. <span className="txt2">NO</span> downpayment{" "}
              <span className="txt2">NO</span> reservation. Strictly{" "}
              <span className="txt2">NO</span> cancellations{" "}
              <span className="txt2">NO</span> refund policy. (Payment{" "}
              <span className="indent2">
                made for an accommodations in NON-transferable.)
              </span>
            </p>
          </div>

          <div className="text3">
            <p>
              3. Maong shorts/pants and colored and cotton t-shirts are{" "}
              <span className="txt3">NOT ALLOWED</span> as swimming attires.
            </p>
          </div>

          <div className="text4">
            <p>
              4. Strictly <span className="txt4">NO HARD DRINKS</span> (ex.
              Empilights, redhorse, Alfonso and/or any alcoholic drinks with{" "}
              <span className="indent4">
                above 5% level of alcohol content). We only allow light beers
                below 5% level of alcoholic content like pilsen, sanmiglight,
                tanduay ice, with 10-20 pesos corkage fee per bottle if you have
                your own light beers.
              </span>
            </p>
            <span className="indent4"></span>
          </div>

          <div className="text5">
            <p>
              5. Gas stove{" "}
              <span className="txt5">
                butane, superkalan electrical electrical appliances are
                prohibited
              </span>
              .
            </p>
          </div>

          <div className="text6">
            <p>
              6. Speakers size above 6 inc is{" "}
              <span className="txt6">prohibited,</span> loud system is not allowed
              please respect the privacy{" "}
              <span className="indent6">of other guests.</span>
            </p>
          </div>

          <div className="text7">
            <p>
              7. Resort security has the right to inspect every persoons bags,
              parcels or other items upon their{" "}
              <span className="indent7">admission.</span>
            </p>
          </div>

          <div className="text8">
            <p>
              8. WE are a PET FRIENDLY resort and follows strict PET POLICY. (We
              allowed pets to enter only if{" "}
              <span className="indent8">
                they were in their cage and wearing their pampers).
              </span>
            </p>
          </div>

          <div className="text9">
            <p>
              9. Avoid littering. This is Clean and Green Resort. Common
              trashcans are available at the designed{" "}
              <span className="indent9">places within the resort.</span>
            </p>
          </div>

          <div className="text10">
            <p>
              10. The resort cannot be responsible for accident or injury of any
              of our guests, nor for the lost of{" "}
              <span className="indent10">
                valuables, money or property of any kind.
              </span>
            </p>
          </div>

          <div className="text11">
            <p>
              11. Prohibited drugs and firearms are not allowed. Please
              surrender Firearms to the front desk for{" "}
              <span className="indent11">safekeeping.</span>
            </p>
          </div>

          <div className="text12">
            <p>
              12. Strictly <span className="txt12">NO TIME EXTENTION,</span> we
              prioritize our cleaning breaks.
            </p>
          </div>

          <div className="text13">
            <p>13. Prices are subject to change without prior notice.</p>
          </div>

          <div className="text14">
            <p>
              14. We reserve the right to deny admission or evic guest or group
              of guest who violate our <span className="indent14">policies.</span>
            </p>
          </div>

          <div className="text15">
            <p>
              We are putting in a lot of effort to provide you the cleanest
              Resort and safety stay.
            </p>
          </div>

          <div className="text16">
            <p>Thank you!</p>
          </div>
        </section>
      </div>
      {/* end of content */}

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
              <a href="reservation.html" id="cta-button">
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
              <img src={footerLogo} alt="logo" classNameName="ftr-logo" />
              <p className="cta-text">
                Book your unforgettable getaway now and experience the ultimate
                relaxation at our resort!
              </p>
              <div className="fb-link">
                <a href="#" id="fblink">
                  <span>
                    <FontAwesomeIcon icon={faFacebook} id="ftricon" />
                  </span>
                  <span className="label">Amaro Resort</span>
                </a>
              </div>
              <div className="email-address">
                <a href="#" id="emailadd">
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
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="reservation.html">Reservation</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="links-label">
                <h2>Legal</h2>
                <ul>
                  <li>
                    <a href="privacypolicy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="t&c.html">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="rules.html">Rules and Regulations</a>
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
          <div className="copyright">Copyright © 2023. All rights reserved.</div>
        </div>
      </section>
      {/* end of footer */}
    </>
  );
}
export default Rules;
