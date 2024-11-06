import React from 'react'
import "./Register.css"

const Register = () => {
    return (
        <>
            <div class="body-bg">
                <div class="container">
                    <div class="card">
                        <div class="card-row">


                            <div class="left-section">
                                <img src="src/assets/preciousLogoSquare.png" alt="PreciousInfoSystem Background" />
                            </div>


                            <div class="right-section">
                                <h1>SignUp</h1>

                                <form>
                                    <input type="text" class="form-control" placeholder="Full Name" />
                                    <input type="email" class="form-control" placeholder="Email" />
                                    <input type="tel" class="form-control" placeholder="Phone Number" />
                                    <input type="password" class="form-control" placeholder="Password" />
                                    <input type="password" class="form-control" placeholder="Confirm Password" />
                                    <button type="submit" class="btn-submit">Sign Up</button>
                                </form>

                                <div class="divider">
                                    <hr class="divider-line" />
                                    <p class="divider-text">OR</p>
                                    <hr class="divider-line" />
                                </div>


                                <button class="social-btn">
                                    <img src="images/7123025_logo_google_g_icon.png" alt="Google Icon" />
                                    <span class="social-text">Sign up with Google</span>
                                </button>
                                <button class="social-btn">
                                    <img src="images/5296499_fb_facebook_facebook logo_icon.png" alt="Facebook Icon" />
                                    <span class="social-text">Sign up with Facebook</span>
                                </button>

                                <div class="login-link">
                                    <p>Already have an account? <a href="index.html">Login</a></p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register