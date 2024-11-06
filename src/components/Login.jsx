import React from 'react'
import "./Login.css"
const Login = () => {
    return (
        <>
            <div className='container'>
                <div className='left'>
                    <img
                        className='w-20'
                        src="src/assets/preciousLogoSquare.png" alt="logo" />
                </div>

                <div className='right'>
                    <h1>Login</h1>
                    <form class="form-container">
                        <div class="form-group">
                            <input type="text" name="floating_first_name" id="floating_first_name" class="form-input form-input-dark" placeholder=" " required />
                            <label for="floating_first_name" class="form-label form-label-dark">First name</label>
                        </div>
                        <div class="form-group">
                            <input type="text" name="floating_last_name" id="floating_last_name" class="form-input form-input-dark" placeholder=" " required />
                            <label for="floating_last_name" class="form-label form-label-dark">Last name</label>
                        </div>
                        <div class="form-group">
                            <input type="email" name="floating_email" id="floating_email" class="form-input form-input-dark" placeholder=" " required />
                            <label for="floating_email" class="form-label form-label-dark">Email address</label>
                        </div>
                        <div class="form-group">
                            <input type="password" name="floating_password" id="floating_password" class="form-input form-input-dark" placeholder=" " required />
                            <label for="floating_password" class="form-label form-label-dark">Password</label>
                        </div>
                        <div class="form-group">
                            <input type="password" name="repeat_password" id="floating_repeat_password" class="form-input form-input-dark" placeholder=" " required />
                            <label for="floating_repeat_password" class="form-label form-label-dark">Confirm password</label>
                        </div>
                        <div class="form-grid">
                            <div class="form-group">
                                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="form-input form-input-dark" placeholder=" " maxlength="10" required />
                                <label for="floating_phone" class="form-label form-label-dark">Phone number(+91)</label>
                            </div>
                        </div>
                        <button type="submit" class="form-button form-button-dark">Submit</button>
                    </form>

                </div>
            </div >
        </>
    )
}

export default Login