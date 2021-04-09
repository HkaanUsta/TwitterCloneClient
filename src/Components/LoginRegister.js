import React from 'react';
import { Link } from "react-router-dom";
import "./login-register.css";

function LoginRegister() {
    return (
        <div className="login-register">
            <div className="row top">
                <div className="col-md-7 background">
                    <svg xmlns="http://www.w3.org/2000/svg" width="350" height="350" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                </div>
                <div className="col-md-5 login-register">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                    <span className="titles">
                        <h1 className="title">Twitter</h1>
                        <h2 className="sub-title">Join Twitter now</h2>
                    </span>
                    <span className="actions">
                        <Link to="/login" className="btn-primary">Login</Link>
                        <Link to="/register" className="btn-secondary">Register</Link>
                    </span>
                </div>
            </div>
            <div className="row bottom">
                <div className="col-md-12 bottom-list">
                    <ul>
                        <li>
                            <a href="/about">about</a>
                        </li>
                        <li>
                            <a href="/help">help center</a>
                        </li>
                        <li>
                            <a href="/tos">terms of service</a>
                        </li>
                        <li>
                            <a href="/privacy">privacy policy</a>
                        </li>
                        <li>
                            <a href="/cookies">cookies policy</a>
                        </li>
                        <li>
                            <a href="/ads">ads information</a>
                        </li>
                        <li>
                            <a href="/blog">blog</a>
                        </li>
                        <li>
                            <a href="/status">status</a>
                        </li>
                        <li>
                            <a href="/career">career</a>
                        </li>
                        <li>
                            <a href="/brand-assets">brand assets</a>
                        </li>
                        <li>
                            <a href="/adversite">adversite</a>
                        </li>
                        <li>
                            <a href="/marketing">marketing</a>
                        </li>
                        <li>
                            <a href="/business">business</a>
                        </li>
                        <li>
                            <a href="/dev">developers</a>
                        </li>
                        <li>
                            <a href="/direvtory">directory</a>
                        </li>
                        <li>
                            <a href="/settings">settings</a>
                        </li>
                        <li>
                            copyrighted by MadMans
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LoginRegister;
