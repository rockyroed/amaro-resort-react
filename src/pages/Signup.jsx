import { Link } from "react-router-dom";

import amaroLogo from "../assets/AmaroResort.png";

import "../css/Signup.css";

const Signup = () => {
    return (
        <>
            {/* start of signup */}
            <section id="login-container">
                <div class="left-side">
                    <div class="left-container">
                        <div class="site-name" id="site-name">
                            <Link to="/home" id="navlogo">
                                <img src={amaroLogo} />
                            </Link>
                        </div>
                        <h1>Create your Account</h1>
                        <p>Sign up now to book a reservation!</p>
                        <div class="form">
                            {/* Form */}
                            <form method="post">
                                <div class="column">
                                    {/* First Name */}
                                    <div class="input-box">
                                        <label for="emailAdd">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            title="First Name"
                                            name="firstname"
                                            value=""
                                            size="40"
                                            maxlength="50"
                                            placeholder="First Name"
                                            required
                                        />
                                    </div>

                                    {/* Middle Name */}
                                    <div class="input-box">
                                        <label for="middleName">
                                            Middle Name
                                        </label>
                                        <input
                                            type="text"
                                            id="middleName"
                                            title="Middle Name"
                                            name="middlename"
                                            value=""
                                            size="40"
                                            maxlength="50"
                                            placeholder="Middle Name"
                                        />
                                    </div>

                                    {/* Last Name */}
                                    <div class="input-box">
                                        <label for="lastName">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            title="Last Name"
                                            name="lastname"
                                            value=""
                                            size="40"
                                            maxlength="50"
                                            placeholder="Last Name"
                                            required
                                        />
                                    </div>
                                </div>

                                <div class="column">
                                    {/* Email Address */}
                                    <div class="input-box">
                                        <label for="phoneNumber">
                                            Phone Number
                                        </label>
                                        <input
                                            type="telnet"
                                            id="phoneNumber"
                                            title="Phone Number"
                                            name="phonenumber"
                                            value=""
                                            size="40"
                                            maxlength="50"
                                            placeholder="Phone Number"
                                            required
                                        />
                                    </div>

                                    {/* Email Address */}
                                    <div class="input-box">
                                        <label for="emailAdd">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="emailAdd"
                                            title="Email Address"
                                            name="emailaddress"
                                            value=""
                                            size="40"
                                            maxlength="50"
                                            placeholder="Email Address"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div class="input-box">
                                    <label for="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        title="Password"
                                        name="password"
                                        value=""
                                        size="40"
                                        maxlength="50"
                                        placeholder="Password"
                                        required
                                    />
                                </div>

                                {/* Password */}
                                <div class="input-box">
                                    <label for="password">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        id="confirmpassword"
                                        title="Password"
                                        name="confirmpassword"
                                        value=""
                                        size="40"
                                        maxlength="50"
                                        placeholder="Password"
                                        required
                                    />
                                </div>

                                <button class="primary-btn">SIGN UP</button>
                            </form>

                            <div class="signup-link">
                                <span class="question">Have an account?</span>
                                <Link to="/login" id="loginLink">
                                    <span class="textlink">LOGIN</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-side">
                    <div class="right-container">
                        <h4>Welcome to Amaro Resort!</h4>
                        <p>Your affordable quick getaway in Metro Manila.</p>
                    </div>
                </div>
            </section>
            {/* end of login */}
        </>
    );
};
export default Signup;
