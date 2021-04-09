import React,{ useState, useEffect } from 'react';
import axios from "axios";
import Cookies from "js-cookie"
import WhoToFollowOne from "./WhoToFollowOne"

export default function WhoToFollow() {
    const [users,setUsers] = useState([])
    const [auth,setAuth] = useState()

    useEffect(() => {
        axios.get("http://localhost:5000/get_user").then((res)=>{
            setUsers(res.data);
        })
        const user = Cookies.getJSON("user")
        setAuth(user)
    }, [])
    return (
        <div className="who-to-follow">
            <div className="who-to-follow-header">
                <h2>Who to follow</h2>
            </div>
            {users.map((user)=>
                <WhoToFollowOne key={user._id} user={user} auth={auth} followers={user.followers} />
            )}
        </div>
    )
}
