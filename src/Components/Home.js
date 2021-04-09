import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import "./home.css";
import Cookies from "js-cookie";
import AuthApi from '../AuthApi';
import Sidebar from "./SubComponents/Sidebar"
import Tweets from "./SubComponents/Tweets"
import RightBar from "./SubComponents/RightBar"

export default function Home() {
    const [auth, setAuth] = useState();
    const [loading , setLoading] = useState(true);
    useEffect(() => {
        const auth = Cookies.getJSON("user")
        setAuth(auth);
        setLoading(false)
    }, [])
    if(loading){
        return (
            <h1>Yükleniyor lütfen bekleyiniz.</h1>
        )
    }else{
        return (
            <div className="container home">
                <div className="row h-100 w-100">
                    <Sidebar auth={auth} />
                    <Tweets auth={auth}/>
                    <RightBar/>
                </div>
            </div>
        )
    }
    
}
