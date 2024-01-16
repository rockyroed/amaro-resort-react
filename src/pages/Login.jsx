import { Link } from "react-router-dom";

import amaroLogo from "../assets/AmaroResort.png";

import "../css/Login.css";

const Login = () => {
    return (
        <>
            <section id="login-container">
                <div class="left-side">
                    <div class="left-container">
                        <div class="site-name" id="site-name">
                            <Link to="/" id="navlogo">
                                <img
                                    src={amaroLogo}
                                    alt="logo"
                                    className="logo"
                                />
                            </Link>
                        </div>
                        <h1>Login to your Account</h1>
                        <p>Welcome back! Please login to continue</p>
                        <div class="form">
                            <form action="login.php" method="post">
                                {/* Email Address */}
                                <div class="input-box">
                                    <label for="emailAdd">Email Address</label>
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

                                {/* <?php if (!empty($error)) : ?>
              <div class="error-message"><?php echo $error; ?></div>
            <?php endif; ?> */}

                                <button class="primary-btn">LOGIN</button>
                            </form>

                            <div class="signup-link">
                                <span class="question">
                                    Don't have an account yet?
                                </span>
                                <a href="signup.php" id="signupLink">
                                    <span class="textlink">SIGN UP</span>
                                </a>
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
export default Login;
