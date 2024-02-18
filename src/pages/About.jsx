import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import CTA from "./CTA.jsx";

import "../css/About.css";

const About = () => {
    return (
        <>
            <section id="navBar" className="page-section active">
                {/* start of nav */}
                <div className="nav" id="nav">
                    <Header />
                </div>
                {/* end of nav */}
            </section>

            {/* start of header */}
            <section id="header">
                <div className="header-container">
                    <div className="header-content">
                        <h1>
                            Unveiling Our Resort: <br />
                            Background, Mission, Vision, and FAQs
                        </h1>
                    </div>
                </div>
            </section>
            {/* end of header */}

            {/* start of background */}
            <section id="background">
                <div className="background-container">
                    <span className="section-name">BACKGROUND</span>
                    <span className="section-phrase">
                        Amaro Resort's Captivating Origins and Legacy
                    </span>
                    <div className="background-content">
                        <p>
                            Escape to Amaro Resort, your affordable quick
                            getaway in Metro Manila. Nestled in the captivating
                            landscapes of Valenzuela, Philippines, this
                            enchanting retreat offers a harmonious blend of
                            modern luxury and traditional Filipino aesthetics,
                            providing a haven of comfort and cultural
                            authenticity. Indulge in the mesmerizing infinity
                            pool, explore guided hikes to hidden waterfalls, and
                            savor delectable fusion cuisine that celebrates the
                            region's rich heritage. With a commitment to
                            sustainability and community engagement, Amaro
                            Resort ensures responsible tourism and preserves the
                            natural beauty of Valenzuela for generations to
                            come, creating an unforgettable and enriching
                            experience for all.
                        </p>
                    </div>
                </div>
            </section>
            {/* end of background */}

            {/* start of mission and vision */}
            <section id="missionVision">
                <div className="mv-container">
                    <div className="mv-content">
                        <div className="mission">
                            <h2>Our Mission</h2>
                            <p>
                                At Amaro Resort, our mission is to offer guests
                                a serene haven where they can embrace nature's
                                beauty and experience authentic Filipino
                                hospitality. Through sustainable practices and
                                community engagement, we aim to protect
                                Valenzuela's natural wonders and make a positive
                                impact on both the environment and the local
                                community.
                            </p>
                        </div>
                        <div className="vision">
                            <h2>Our Vision</h2>
                            <p>
                                At Amaro Resort, our vision is to become
                                Valenzuela's premier eco-friendly destination,
                                celebrated for offering a harmonious experience
                                with nature and genuine cultural authenticity.
                                Through responsible and ethical practices, we
                                aim to inspire guests and stakeholders to
                                cherish the environment and embrace a profound
                                connection with the rich heritage of the
                                Philippines.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of mission and vision */}

            {/* start of CTA */}
            <CTA />
            {/* end of CTA */}

            {/* start of footer */}
            <Footer />
            {/* end of footer */}
        </>
    );
};
export default About;
