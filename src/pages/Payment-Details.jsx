import amaroLogo from "../assets/AmaroResort.png";
import paypalLogo from "../assets/Paypal.png";
import gcashLogo from "../assets/GCash.png";
import mcardLogo from "../assets/mastercard.png";

import "../css/Payment-Details.css";

const PaymentDetails = () => {
    return (
        <>
            <section id="reservation">
                <div class="right-book">
                    <div class="right-container">
                        <img src={amaroLogo} alt="logo" className="logo" />
                        {/* <span class="section-name"><?php echo $type.' '.'RESERVATION'?></span> */}
                        <div class="form-container">
                            <header>Payment Method</header>
                            <p>Select your payment option.</p>

                            <hr class="hz-line" />
                            {/* Form */}
                            <form action="" class="form" method="post">
                                <div class="payment--options">
                                    <button
                                        class="payment"
                                        name="paypal"
                                        type="button"
                                        title="PayPal"
                                    >
                                        <img
                                            src={paypalLogo}
                                            alt="logo"
                                            className="logo"
                                        />
                                    </button>
                                    <button
                                        class="payment"
                                        name="gcash"
                                        type="button"
                                        title="GCash"
                                    >
                                        <img
                                            src={gcashLogo}
                                            alt="logo"
                                            className="logo"
                                        />
                                    </button>
                                    <button
                                        class="payment"
                                        name="mastercard"
                                        type="button"
                                        title="Mastercard"
                                    >
                                        <img
                                            src={mcardLogo}
                                            alt="logo"
                                            className="logo"
                                        />
                                    </button>
                                </div>
                            </form>
                            {/* End of form */}
                        </div>

                        {/* Paypal Form */}
                        <div class="form-container payment-details hidden">
                            <header>
                                <img
                                    src="css/page-images/PayPal.png"
                                    alt="logo"
                                    class="logo"
                                />
                            </header>
                            <hr class="hz-line" />
                            {/* Form */}
                            <form action="" class="form" method="post">
                                <div class="column">
                                    <div class="input-box">
                                        {/* Email Address */}
                                        <label for="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email-address"
                                            title="emailadd"
                                            name="paymentEmailadd"
                                            size="40"
                                            maxlength="50"
                                            placeholder=""
                                            required
                                        />
                                    </div>
                                    <input
                                        class="hidden"
                                        name="paymentPPType"
                                        id="paymentPPType"
                                    ></input>
                                </div>

                                <div class="cta-buttons">
                                    <a
                                        href="bookingdetails.html"
                                        id="cancelButton"
                                    >
                                        <button
                                            type="button"
                                            class="secondary-btn"
                                        >
                                            BACK
                                        </button>
                                    </a>
                                    {/* <!-- <a href="bookingsummary.php" id="confirm"> --> */}
                                    <button class="primary-btn">
                                        CONFIRM PAYMENT
                                    </button>
                                    {/* </a> */}
                                </div>
                            </form>
                            {/* End of Form */}
                        </div>
                        {/* End of Paypal Form */}

                        {/* Gcash Form */}
                        <div class="form-container payment-details hidden">
                            <header>
                                <img
                                    src="css/page-images/GCash.png"
                                    alt="logo"
                                    class="logo"
                                />
                            </header>
                            <hr class="hz-line" />
                            {/* Form */}
                            <form action="" class="form" method="post">
                                <div class="column">
                                    <div class="input-box">
                                        {/* Account Name */}
                                        <label for="accountname">
                                            Account Name
                                        </label>
                                        <input
                                            type="text"
                                            id="account-name"
                                            title="Account Name"
                                            name="paymentAccountname"
                                            size="40"
                                            maxlength="100"
                                            placeholder=""
                                            required
                                        />
                                    </div>

                                    {/* Account Number */}
                                    <div class="input-box">
                                        <label for="accountnumber">
                                            Account Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="account-number"
                                            title="Account Number"
                                            name="paymentAccountnumber"
                                            placeholder="(09)00-000-0000"
                                            maxlength="11"
                                            pattern="[09]{2}[0-9]{9}"
                                            required
                                        />
                                    </div>
                                    <input
                                        class="hidden"
                                        name="paymentGType"
                                        id="paymentGType"
                                    ></input>
                                </div>

                                <div class="cta-buttons">
                                    <a
                                        href="bookingdetails.html"
                                        id="cancelButton"
                                    >
                                        <button
                                            type="button"
                                            class="secondary-btn"
                                        >
                                            BACK
                                        </button>
                                    </a>
                                    {/* <!-- <a href="bookingsummary.html" id="confirm"> --> */}
                                    <button class="primary-btn">
                                        CONFIRM PAYMENT
                                    </button>
                                    {/* <!-- </a> --> */}
                                </div>
                            </form>
                            {/* End of Form */}
                        </div>
                        {/* End of GCash Form */}

                        {/* Mastercard Form */}
                        <div class="form-container payment-details hidden">
                            <header>
                                <img
                                    src="css/page-images/mastercard.png"
                                    alt="logo"
                                    class="logo"
                                />
                            </header>
                            <hr class="hz-line" />
                            {/* Form */}
                            <form action="" class="form" method="post">
                                <div class="input-box">
                                    {/* Adult */}
                                    <label for="CardNumber">Card Number</label>
                                    <input
                                        type="text"
                                        id="cardNum"
                                        title="Card Number"
                                        name="paymentCardnumber"
                                        size="40"
                                        maxlength="50"
                                        required
                                    />
                                </div>

                                <div class="input-box">
                                    {/* Cardholder's Name */}
                                    <label for="CardNumber">
                                        Cardholder's Name
                                    </label>
                                    <input
                                        type="text"
                                        id="cardName"
                                        title="Card Name"
                                        name="paymentCardname"
                                        size="40"
                                        maxlength="50"
                                        required
                                    />
                                </div>

                                <div class="column">
                                    <div class="input-box">
                                        {/* MM */}
                                        <label for="MM">MM</label>
                                        <input
                                            type="text"
                                            id="mm"
                                            title="MM"
                                            name="mm"
                                            size="40"
                                            maxlength="50"
                                            required
                                        />
                                    </div>

                                    <div class="input-box">
                                        {/* YYYY */}
                                        <label for="YYYY">YYYY</label>
                                        <input
                                            type="text"
                                            id="yyyy"
                                            title="YYYY"
                                            name="YYYY"
                                            size="40"
                                            maxlength="50"
                                            required
                                        />
                                    </div>

                                    {/* CVV */}
                                    <div class="input-box">
                                        <label for="CVV">CVV</label>
                                        <input
                                            type="text"
                                            id="cvv"
                                            title="CVV"
                                            name="CVV"
                                            size="30"
                                            maxlength="50"
                                            required
                                        />
                                    </div>
                                    <input
                                        class="hidden"
                                        name="paymentCCType"
                                        id="paymentCCType"
                                    ></input>
                                </div>

                                <div class="cta-buttons">
                                    <a
                                        href="bookingdetails.html"
                                        id="cancelButton"
                                    >
                                        <button
                                            type="button"
                                            class="secondary-btn"
                                        >
                                            BACK
                                        </button>
                                    </a>
                                    {/* <!-- <a href="bookingsummary.html" id="confirm"> --> */}
                                    <button class="primary-btn">
                                        CONFIRM PAYMENT
                                    </button>
                                    {/* <!-- </a> --> */}
                                </div>
                            </form>
                            {/* End of Form */}
                        </div>
                        {/* End of Mastercard Form */}
                    </div>
                </div>
            </section>
        </>
    );
};
export default PaymentDetails;
