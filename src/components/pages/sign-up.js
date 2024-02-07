import React, { useState } from "react";
import '../../App.css'
import './sign-up.css'

export default function SignUp() {

    const [loginData, setLoginData] = useState({ email: "", password: "" })
    const [registrationData, setRegistrationData] = useState({ username: "", email: "", password: "" })


    const handleSubmitLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        alert(`Thank you for your LOGIN!\n\nYour email is: ${email}\nYour password is: ${password}`)
        setLoginData({ email: "", password: "" });
    }

    const handleChangeLogin = (event) => {
        const { name, value } = event.target;
        setLoginData(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmitRegister = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        alert(`Thank you for REGISTRATION!\n\nYour username is: ${username}\nYour email is: ${email}\nYour password is: ${password}`)
        setRegistrationData({ username: "", email: "", password: "" })
    }

    const handleChangeRegister = (event) => {
        const { name, value } = event.target;
        setRegistrationData(prevState => ({ ...prevState, [name]: value }))

    }


    return (
        <div className="sign-up-body">

            <div className="signup-card first-card">

                <div className="h1-container">
                    <h1 className="sign-up">SIGN IN</h1>
                </div>

                <div className="form-container">
                    <form onSubmit={handleSubmitLogin}>
                        <input onChange={handleChangeLogin} value={loginData.email} name="email" type="email" placeholder="email"></input>
                        <input onChange={handleChangeLogin} value={loginData.password} name="password" type="password" placeholder="password"></input>
                        <div className="button-placeholder">
                            <button type="submit" className="button-button">SUBMIT</button>
                        </div>
                    </form>
                </div>

            </div>

            <div className="signup-card second-card">

                <div className="h1-container">
                    <h1 className="sign-up">REGISTER</h1>
                </div>

                <div className="form-container">
                    <form onSubmit={handleSubmitRegister}>
                        <input onChange={handleChangeRegister} value={registrationData.username} name="username" type="text" placeholder="username"></input>
                        <input onChange={handleChangeRegister} value={registrationData.email} name="email" type="email" placeholder="email"></input>
                        <input onChange={handleChangeRegister} value={registrationData.password} name="password" type="password" placeholder="password"></input>
                        <div className="button-placeholder">
                            <button type="submit" className="button-button">SUBMIT</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    )

}