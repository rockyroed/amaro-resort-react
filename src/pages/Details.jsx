import "../css/Details.css";
import { Link } from "react-router-dom";

import Header from "./Header.jsx";

const Details = () => {
    return(
        <>
    <section id="navBar" class="page-section active">
        {/* <!-- start of nav --> */}
        <div class="nav" id="nav">
        <Header/>
        </div>
        {/* <!-- end of nav --> */}
    </section>

    {/* <!-- start of Reservation summary --> */}
  <section id="bookingSummary">
    <div class="summary-container">
      <span class="section-phrase">View Details</span>
      <div class="booking-summary-container">
        <div class="details-container">
          <div class="section-title">
            <h3>Reservation</h3>
          </div>
          {/* <!-- Reservation Number --> */}
          <div class="section-details">
            <span>Reservation Number: </span>
            <p>RESERVATION ID</p>
          </div>

          {/* <!-- Transaction Date --> */}
          <div class="section-details">
            <span>Transaction Date:</span>
            <p>TRANSACTION DATE</p>
          </div>

          {/* <!-- Reservation Status --> */}
          <div class="section-details">
            <span>Reservation Status:</span>
            <p>RESERVATION STATUS</p>
          </div>
        </div>

        <div class="details-container">
          <div class="section-title">
            <h3>Guest Details</h3>
          </div>
          {/* <!-- First Name --> */}
          <div class="section-details">
            <span>First Name:</span>
            <p>FIRST NAME</p>
          </div>

          {/* <!-- Middle Name --> */}
          <div class="section-details">
            <span>Middle Name:</span>
            <p>MIDDLE NAME</p>
          </div>

          {/* <!-- Last Name --> */}
          <div class="section-details">
            <span>Last Name:</span>
            <p>LAST NAME</p>
          </div>

          {/* <!-- Phone Number --> */}
          <div class="section-details">
            <span>Phone Number:</span>
            <p>PHONE NUMBER</p>
          </div>

         {/* <!-- Email Address -->  */}
          <div class="section-details">
            <span>Email Address:</span>
            <p>EMAIL ADDRESS</p>
          </div>
        </div>

        <div class="details-container">
          <div class="section-title">
            <h3>Reservation Details</h3>
          </div>
            {/* <!-- Reservation Type--> */}
            <div class="section-details">
              <span>Reservation Type:</span>
              <p>RESERVATION TYPE</p>
            </div>

            {/* <!-- Date of Visit:--> */}
            <div class="section-details">
              <span>Date of Visit:</span>
              <p>DATE OF VISIT</p>
            </div>

            {/* <!-- Time Slot--> */}
            <div class="section-details">
              <span>Time Slot:</span>
              <p>TIMESLOT</p>
            </div>

            {/* <!-- Adult--> */}
            <div class="section-details">
              <span>Adult:</span>
              <p>ADULT</p>
            </div>

            {/* <!-- Children--> */}
            <div class="section-details">
              <span>Children:</span>
              <p>CHILDREN</p>
            </div>

            {/* <!-- Senior/PWD--> */}
            <div class="section-details">
              <span>Senior/PWD:</span>
              <p>SENIOR/PWD</p>
            </div>

            {/* <!-- Cottage Type --> */}
            <div class="section-details">
              <span>Cottage Type:</span>
              <p>COTTAGE TYPE</p>
            </div>

            {/* <!-- Cottage ID --> */}
            <div class="section-details">
              <span>Cottage Number:</span>
              <p>COTTAGE ID</p>
            </div>

          <div class="details-container">
            <div class="section-title">
              <h3>Payment Details</h3>
            </div>
              {/* <!-- Payment Method --> */}
              <div class="section-details">
                <span>Payment Method:</span>
                <p>PAYMENT METHOD</p>
              </div>

              {/* <!-- Account Name --> */}
              <div class="section-details">
                <span>Email Address:</span>
                <p>EMAIL ADDRESS</p>
              </div>

          </div>
        </div>

        <div class="details-container">
          <div class="section-title">
            <h3>Amount</h3>
          </div>

          {/* <!-- Total Cost --> */}
          <div class="section-details">
            <span>Total Cost:</span>
            <p>'₱' TOTAL COST</p>
          </div>

          {/* <!-- Downpayment --> */}
          <div class="section-details">
            <span>Down Payment:</span>
            <p>'₱' DOWN PAYMENT</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- end of booking summary --> */}

        </>
    );
}

export default Details;