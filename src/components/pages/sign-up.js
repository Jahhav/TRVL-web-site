import React from "react";
import '../../App.css'
import './sign-up.css'

export default function SignUp() {

    const handleSubmit = () => {

    }


    return (
        <div className="sign-up-body">

            <div className="signup-card first-card">

                <div className="h1-container">
                    <h1 className="sign-up">SIGN IN</h1>
                </div>

                <div className="form-container">
                    <form>
                        <input type="email" placeholder="email"></input>
                        <input type="password" placeholder="password"></input>
                        <div className="button-placeholder">
                            <button type="submit" className="button-button" onClick={handleSubmit}>SUBMIT</button>
                        </div>
                    </form>
                </div>

            </div>

            <div className="signup-card second-card">

                <div className="h1-container">
                    <h1 className="sign-up">REGISTER</h1>
                </div>

                <div className="form-container">
                    <form>
                        <input type="text" placeholder="username"></input>
                        <input type="email" placeholder="email"></input>
                        <input type="password" placeholder="password"></input>
                        <div className="button-placeholder">
                            <button type="submit" className="button-button" onClick={handleSubmit}>SUBMIT</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    )

}