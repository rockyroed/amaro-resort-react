import "../css/BookingDetails.css";
import { Link } from "react-router-dom";

import amaroLogo from "../assets/AmaroResort.png";

const BookingDetails = () => {
    return (
        <>
    <section id="reservation">
      <div className="right-book">
        <div className="right-container">
          <img src={amaroLogo} alt="logo" className="logo" />
          <span className="section-name">RESERVATION</span>
          <div className="form-container">
            <header>Reservation Details</header>
            <p>Fill out the required fields to reserve.</p>
            <hr className="hz-line" />
            {/* <!-- Form --> */}
            <form action="" className="form" method="post">
              <div className="column">
                {/* <!-- Date of Visit --> */}
                <div className="input-box">
                  <label for="DateOfVisit">Date of Visit</label>
                  <input
                    type="date"
                    id="dateofvisit"
                    name="dateofvisit"
                    title="Date of Visit"
                    placeholder="DD-MMM-YYYY"
                    required
                  />
                </div>

                {/* <!-- Time Slot --> */}
                <div className="input-box">
                  <label for="TimeSlot">Time Slot</label>
                  <div className="select-box">
                    <select
                      title="timeslot"
                      id="timeSlot"
                      name="timeslot"
                      required
                    >
                      <option hidden value="">Day or Night</option>
                      <option value="Day">DAY (8:00 AM - 5:00 PM)</option>
                      <option value="Night">NIGHT (7:00 PM - 4:00 AM)</option>
                    </select>
                  </div>
                </div>
                <div className="hidden" id="timeRet">

                </div>
              </div>
              <div className="column">
                <div className="input-box">
                  {/* <!-- Adult --> */}
                  <label for="Adult">Adult</label>
                  <input
                    type="number"
                    id="adult"
                    title="Adult"
                    name="Adult"
                    value="0"
                    size="40"
                    maxlength="50"
                    placeholder="0"
                    required

                  />
                </div>

                {/* <!-- Children --> */}
                <div className="input-box">
                  <label for="Children">Children</label>
                  <input
                    type="number"
                    id="children"
                    title="Children"
                    name="Children"
                    value="0"
                    size="30"
                    maxlength="50"
                    placeholder="0"
                    required
                  />
                </div>

                {/* <!-- Senior/PWD --> */}
                <div className="input-box">
                  <label for="SeniorPWD">Senior/PWD</label>
                  <input
                    type="number"
                    id="seniorPWD"
                    title="SeniorPWD"
                    name="SeniorPWD"
                    value="0"
                    size="30"
                    maxlength="50"
                    placeholder="0"
                    required
                  />
                </div>
              </div>

              {/* <!-- Cottage Type --> */}
              <div className="input-box">
                <label for="CottageType">Cottage Type</label>
                <div className="select-box">
                  <select
                    title="cottage type"
                    id="cottagetype"
                    name="cottagetype"
                    required

                  >
                    <option hidden value="0">Select Cottage</option>
                    <option value="0">None</option>
                    <option value="1000">Canopy (5-10 pax): P1,000.00</option>
                    <option value="1500">Trellis 1</option>
                    <option value="2000">Trellis 2</option>
                    <option value="1200">Kubo</option>
                    <option value="7500">Pavilion 1</option>
                    <option value="8500">Pavilion 2</option>
                    <option value="9500">Pavilion 3</option>
                  </select>
                </div>
              </div>

              {/* <!-- Additional Notes -->
              <!-- <div className="input-box">
                <label for="Notes">Additional Notes</label>
                <textarea
                  id="notesRoom"
                  title="AdditionalNotes"
                  name="notesroom"
                  placeholder="Type any additional notes here"
                ></textarea>
              </div> --> */}

              <hr className="horizontal-line" />

              {/* <!-- Payment -->
              <!-- <div className="input-box">
                <label for="payment">Payment</label>
                <div className="select-box">
                  <select
                    title="payment"
                    id="payment"
                    name="payment"
                    required
                  >
                    <option hidden value="">
                      Down Payment or Full Payment
                    </option>
                    <option value="DownPayment">Down Payment (20%)</option>
                  </select>
                </div>
              </div> --> */}

              {/* <!-- Total Cost --> */}
              <div className="input-box">
                <label for="TotalCost" id="tcostLabel">Total Cost</label>
                <input className="hidden" id="tcPost" name="totalCost"></input>
                <p id="totalCost">0</p>
              </div>

              {/* <!-- Down Payment --> */}
              <div className="input-box">
                <label for="DownPayment" id="dpaymentLabel">Down Payment</label>
                <input className="hidden" id="dpPost" name="downPayment"></input>
                <p id="downPayment" name="">0</p>
              </div>

              <div className="cta-buttons">
                <Link to="/reservation" id="backButton">
                  <button type="button" className="secondary-btn">BACK</button>
                </Link>
                {/* <!-- <a href="" id="proceedPayment"> --> */}
                  <button className="primary-btn">
                    PROCEED TO PAYMENT
                  </button>
                {/* </a> */}
              </div>
            </form>
            {/* <!-- End of Form --> */}
          </div>
          </div>
      </div>
    </section>
        </>
    );
}

export default BookingDetails;