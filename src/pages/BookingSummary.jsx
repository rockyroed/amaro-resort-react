import "../css/BookingSummary.css";
import { Link } from "react-router-dom";

const BookingSummary = () => {
    return(
        <>
            {/* <!-- start of Reservation summary --> */}
    <section id="bookingSummary">
      <div class="summary-container">
        <span class="section-phrase">Reservation Summary</span>
        <div class="booking-summary-container">
          <div class="details-container">
            <div class="section-title"><h3>Guest Details</h3></div>
            {/* <!-- First Name --> */}
            <div class="section-details">
              <span>First Name:</span>
              <p>FIRST NAME TEXT</p>
            </div>

            {/* <!-- Middle Name --> */}
            <div class="section-details">
              <span>Middle Name:</span>
              <p>MIDDLE NAME TEXT</p>
            </div>

            {/* <!-- Last Name --> */}
            <div class="section-details">
              <span>Last Name:</span>
              <p>LAST NAME TEXT</p>
            </div>

            {/* <!-- Phone Number --> */}
            <div class="section-details">
              <span>Phone Number:</span>
              <p>PHONE NUMBER TEXT</p>
            </div>

            {/* <!-- Email Address --> */}
            <div class="section-details">
              <span>Email Address:</span>
              <p>EMAIL ADDRESS TEXT</p>
            </div>
          </div>

          <div class="details-container">
            <div class="section-title"><h3>Reservation Details</h3></div>
              {/* <!-- Reservation Type--> */}
              <div class="section-details">
                <span>Reservation Type:</span>
                <p>RESERVATION TYPE TEXT</p>
              </div>

              {/* <!-- Date of Visit:--> */}
              <div class="section-details">
                <span>Date of Visit:</span>
                <p>DATE OF VISIT TEXT</p>
              </div>

              {/* <!-- Time Slot--> */}
              <div class="section-details">
                <span>Time Slot:</span>
                <p>TIME SLOT TEXT</p>
              </div>

              {/* <!-- Adult--> */}
              <div class="section-details">
                <span>Adult:</span>
                <p>ADULT TEXT</p>
              </div>

              {/* <!-- Children--> */}
              <div class="section-details">
                <span>Children:</span>
                <p>CHILDREN TEXT</p>
              </div>

              {/* <!-- Senior/PWD--> */}
              <div class="section-details">
                <span>Senior/PWD:</span>
                <p>SENIOR/PWD TEXT</p>
              </div>

              {/* <!-- Cottage Type --> */}
              <div class="section-details">
                <span>Cottage Type:</span>
                <p>COTTAGE TYPE TEXT</p>
              </div>

          <div class="details-container">
            <div class="section-title"><h3>Payment Details</h3></div>
                {/* <!-- Payment Method --> */}
                <div class="section-details">
                  <span>Payment Method:</span>
                  <p>PAYMENT TYPE TEXT</p>
                </div>

                {/* <!-- Account Name --> */}
                <div class="section-details">
                  <span>Email Address:</span>
                  <p>PAYMENT EMAILL ADDRESS TEXT</p>
                </div>

              </div>
          </div>

          <div class="details-container">
            <div class="section-title"><h3>Amount</h3></div>

            {/* <!-- Total Cost --> */}
            <div class="section-details">
              <span>Total Cost:</span>
              <p>'₱' TOTAL COST TEXT</p>
            </div>

            {/* <!-- Downpayment --> */}
            <div class="section-details">
              <span>Down Payment:</span>
              <p>'₱' DOWNPAYMENT TEXT </p>
            </div>

            <hr class="horizontal-line" />
            
            <div class="cta-buttons">
              <Link to="/" id="cancelButton">
                <button type="button" class="secondary-btn">CANCEL</button>
              </Link>
              <form method="post">
              <button class="primary-btn" name="submit">
                CONFIRM BOOKING
              </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    {/* <!-- end of booking summary --> */}
        </>
    );
}

export default BookingSummary;