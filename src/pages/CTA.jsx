import { Link } from "react-router-dom";

import "../App.css";

const CTA = () => {
    return (
        <>
            <section id="cta">
                <div className="cta-bg">
                    <div className="cta-content">
                        <div className="cta-above">
                            <h1>Experience the perfect getaway!</h1>
                            <p>
                                Experience the perfect getaway at our resort,
                                offering a range of event packages, enticing
                                room accommodations, and competitive swimming
                                rates for an unforgettable stay.
                            </p>
                        </div>
                        <div className="cta-below">
                            <Link to="/login" id="cta-button">
                                <button type="button" className="cta-btn">
                                    BOOK NOW
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CTA;
