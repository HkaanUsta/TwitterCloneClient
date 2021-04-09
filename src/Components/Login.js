import axios from 'axios';
import React, { useState, useContext } from 'react';
import {Link, Redirect} from "react-router-dom";
import "./login.css";
import Cookies from "js-cookie";
import AuthApi from '../AuthApi';

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [info, setInfo] = useState();
    const Auth = useContext(AuthApi)
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

    function SubmitForm(e){
        e.preventDefault()
        console.log(email, password)
        axios.post("http://localhost:5000/login",{ email: email, password: password}).then((res)=>{
            if(res.data.auth){
                Cookies.set("user",res.data.user, { secure: true});
                Auth.setAuth(true);
                setInfo(res.data.message);
                return <Redirect to="/dashboard" />
            }else{
                setInfo(res.data.message);
            }
        })
    }
    return (
        <div className="login">
            <div className="container">
                <div className="row login-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                    <h1>
                        Login to Twitter
                    </h1>
                    {
                        info ? (<div className='alert alert-danger w-50 p-3 text-justify text-center'>{info}</div>) : ("")
                    }
                    <form className="login-form" onSubmit={SubmitForm}>
                        <input type="text" name="email" placeholder="e-mail adress" onChange={handleChangeEmail}/>
                        <input type="password" name="password" placeholder="password" onChange={handleChangePassword}/>
                        <button className="btn-primary login-btn" disabled={!ValidForm()}>Login</button>
                    </form>
                    <div className="other-actions">
                        <Link to="/password_reset">Forgot password?</Link>
                        <span>|</span>
                        <Link to="/register">Create account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
