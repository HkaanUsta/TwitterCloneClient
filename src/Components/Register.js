import React, {useState} from 'react';
import { Link } from "react-router-dom";
import axios from "axios"
import "./register.css";

export default function Register() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    function ValidForm(){
        if(email && password){
            if(email.length > 0 && password.length > 0){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }
    function handleChangePassword(e) {
        setPassword(e.target.value);
    }
    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }
    function handleChangeFirstName(e) {
        setFirstName(e.target.value);
    }
    function handleChangeLastName(e) {
        setLastName(e.target.value);
    }

    function SubmitForm(e){
        e.preventDefault()
        console.log(email, password)
        axios.post("http://localhost:5000/register",{ email: email, password: password, firstName:firstName,lastName:lastName}).then((res)=>{
            console.log(res)
        })
    }

    return (
        <div className="register">
            <div className="container">
                <div className="row register-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                    <h1>
                        Register to Twitter
                    </h1>
                    <form className="register-form" onSubmit={SubmitForm}>
                        <input type="text" placeholder="Email"  onChange={handleChangeEmail}/>
                        <input type="text" placeholder="Firt Name" onChange={handleChangeFirstName}/>
                        <input type="text" placeholder="Last Name" onChange={handleChangeLastName}/>
                        <input type="password" placeholder="Password" onChange={handleChangePassword}/>
                        <div className="registration-terms">
                        By registering you accept the <a href="/tos">Terms of usage</a> and <a href="privacy">Privacy policy</a>
                        </div>
                        <button type="submit" className="btn-primary" disabled={!ValidForm()}>Register</button>      
                    </form>
                    <span className="link-to-login">
                        Have you account? Go to
                        <Link to="/login" className="login-page-link"> login page </Link>
                        to login.
                    </span>
                </div>
            </div>
        </div>
    )
}
