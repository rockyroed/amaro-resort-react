import "../css/Confirmation.css";
import { Link } from "react-router-dom";

import Header from "./Header.jsx";

const Confirmation = () => {
    return (
        <>
        <section id="navBar" className="page-section active">
            {/* header */}
            <Header/>
            {/* end of header */}
        </section>
        {/* !-- start of booking summary --> */}
  <section id="bookingSummary">
    <div className="summary-container">
      <span className="section-phrase">
        Reservation Complete! <br />
        We're excited to welcome you.
      </span>
      <div className="booking-summary-container">
        <div className="details-container">
          <div className="section-title">
            <h3>Transaction Details</h3>
          </div>
          {/* <!-- Reference Number --> */}
          <div className="section-details">
            <span>Reference Number:</span>
            <p>REFERENCE NUMBER TEXT</p>
          </div>

          {/* <!-- Guest Name --> */}
          <div className="section-details">
            <span>Guest Name:</span>
            <p>FIRST NAME MIDDLE NAME LAST NAME</p>
          </div>

          {/* <!-- Reservation Type --> */}
          <div className="section-details">
            <span>Reservation Type:</span>
            <p>RESERVATION TYPE</p>
          </div>

          {/* <!-- Reservation Date --> */}
          <div className="section-details">
            <span>Reservation Date:</span>
            <p>RESERVATION DATE TYPE</p>
          </div>

          {/* <!-- Pax Number --> */}
            {/* <!-- Adult--> */}
            <div className="section-details">
              <span>Adult:</span>
              <p>ADULT</p>
            </div>

            {/* <!-- Children--> */}
            <div className="section-details">
              <span>Children:</span>
              <p>CHILDREN TYPE</p>
            </div>

            {/* <!-- Senior/PWD--> */}
            <div className="section-details">
              <span>Senior/PWD:</span>
              <p>SENIOR/PWD</p>
            </div>

          {/* <!-- Payment Method --> */}
          <div className="section-details">
            <span>Payment Method:</span>
            <p>PAYMENT METHOD</p>
          </div>

          {/* <!-- Total Cost --> */}
          <div className="section-details">
            <span>Total Cost:</span>
            <p>TOTAL COST </p>
          </div>

          {/* <!-- Total Cost --> */}
          <div className="section-details">
            <span>Down Payment:</span>
            <p>DOWN PAYMENT</p>
          </div>
        </div>

        <p> Present this confirmation slip to the resort receptionist. See you soon! </p>

      </div>
      <div className="cta-buttons">
        <Link to="/" id="backToHome">
          <button type="button" className="secondary-btn">GO TO HOME</button>
        </Link>
        <Link to="/reservation" id="backToHome">
          <button type="button" className="primary-btn">ADD ANOTHER BOOKING</button>
        </Link>
      </div>
    </div>
  </section>
  {/* <!-- end of booking summary --> */}
        </>
    );
}

export default Confirmation;