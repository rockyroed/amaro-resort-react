import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CTA from "./CTA.jsx";

import "../css/Rules.css";

function Rules() {
    return (
        <>
            <section id="navBar" className="page-section active">
                {/* start of nav */}
                <div className="nav" id="nav">
                    <Header />
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
                            To make your stay safe and comfortable, please
                            observe the following rules and regulations.
                        </h5>
                    </div>

                    <div className="text1">
                        <p>
                            1.{" "}
                            <span className="txt1">NO WRISTBAND NO ENTRY</span>,
                            Guest must be wearing their wristband at all times.
                        </p>
                    </div>

                    <div className="text2">
                        <p>
                            2. <span className="txt2">NO</span> downpayment{" "}
                            <span className="txt2">NO</span> reservation.
                            Strictly <span className="txt2">NO</span>{" "}
                            cancellations <span className="txt2">NO</span>{" "}
                            refund policy. (Payment{" "}
                            <span className="indent2">
                                made for an accommodations in NON-transferable.)
                            </span>
                        </p>
                    </div>

                    <div className="text3">
                        <p>
                            3. Maong shorts/pants and colored and cotton
                            t-shirts are{" "}
                            <span className="txt3">NOT ALLOWED</span> as
                            swimming attires.
                        </p>
                    </div>

                    <div className="text4">
                        <p>
                            4. Strictly{" "}
                            <span className="txt4">NO HARD DRINKS</span> (ex.
                            Empilights, redhorse, Alfonso and/or any alcoholic
                            drinks with{" "}
                            <span className="indent4">
                                above 5% level of alcohol content). We only
                                allow light beers below 5% level of alcoholic
                                content like pilsen, sanmiglight, tanduay ice,
                                with 10-20 pesos corkage fee per bottle if you
                                have your own light beers.
                            </span>
                        </p>
                        <span className="indent4"></span>
                    </div>

                    <div className="text5">
                        <p>
                            5. Gas stove{" "}
                            <span className="txt5">
                                butane, superkalan electrical electrical
                                appliances are prohibited
                            </span>
                            .
                        </p>
                    </div>

                    <div className="text6">
                        <p>
                            6. Speakers size above 6 inc is{" "}
                            <span className="txt6">prohibited,</span> loud
                            system is not allowed please respect the privacy{" "}
                            <span className="indent6">of other guests.</span>
                        </p>
                    </div>

                    <div className="text7">
                        <p>
                            7. Resort security has the right to inspect every
                            persoons bags, parcels or other items upon their{" "}
                            <span className="indent7">admission.</span>
                        </p>
                    </div>

                    <div className="text8">
                        <p>
                            8. WE are a PET FRIENDLY resort and follows strict
                            PET POLICY. (We allowed pets to enter only if{" "}
                            <span className="indent8">
                                they were in their cage and wearing their
                                pampers).
                            </span>
                        </p>
                    </div>

                    <div className="text9">
                        <p>
                            9. Avoid littering. This is Clean and Green Resort.
                            Common trashcans are available at the designed{" "}
                            <span className="indent9">
                                places within the resort.
                            </span>
                        </p>
                    </div>

                    <div className="text10">
                        <p>
                            10. The resort cannot be responsible for accident or
                            injury of any of our guests, nor for the lost of{" "}
                            <span className="indent10">
                                valuables, money or property of any kind.
                            </span>
                        </p>
                    </div>

                    <div className="text11">
                        <p>
                            11. Prohibited drugs and firearms are not allowed.
                            Please surrender Firearms to the front desk for{" "}
                            <span className="indent11">safekeeping.</span>
                        </p>
                    </div>

                    <div className="text12">
                        <p>
                            12. Strictly{" "}
                            <span className="txt12">NO TIME EXTENTION,</span> we
                            prioritize our cleaning breaks.
                        </p>
                    </div>

                    <div className="text13">
                        <p>
                            13. Prices are subject to change without prior
                            notice.
                        </p>
                    </div>

                    <div className="text14">
                        <p>
                            14. We reserve the right to deny admission or evic
                            guest or group of guest who violate our{" "}
                            <span className="indent14">policies.</span>
                        </p>
                    </div>

                    <div className="text15">
                        <p>
                            We are putting in a lot of effort to provide you the
                            cleanest Resort and safety stay.
                        </p>
                    </div>

                    <div className="text16">
                        <p>Thank you!</p>
                    </div>
                </section>
            </div>
            {/* end of content */}

            {/* start of CTA */}
            <CTA />
            {/* end of CTA */}

            {/* start of footer */}
            <Footer />
            {/* end of footer */}
        </>
    );
}
export default Rules;
