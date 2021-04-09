import React, { useState, useEffect } from 'react'
import axios from "axios"

export default function WhoToFollowOne({user,auth,followers}) {
    const [follow,setFollow] = useState(false)
    const [follower, setFollower] = useState([])

    const Follow = (e)=>{
        let id = e.target.value
        axios.post(`http://localhost:5000/follow`,{id: id,auth:auth}).then((res)=>{
            setFollow(!follow)
        })
    }

    useEffect(()=>{
        setFollower(followers)
        follower.map(follower =>{
            if(follower == auth._id){
                setFollow(true)
            }
        })
    })

    return (
        <div className="who-to-follow-suggestion">
            <a href="profile/@">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.palmcityyachts.com%2Fwp%2Fwp-content%2Fuploads%2Fpalmcityyachts.com%2F2015%2F09%2Fdefault-profile-480x480.png&f=1&nofb=1" alt=""/>
                <div className="suggestion">
                    <h3>{user.first_name} {user.last_name}</h3>
                    <h3>@Şimdilik yok :)</h3>
                </div>
            </a>
            <button className="btn-follow" value={user._id} onClick={Follow}>
                {follow ? "Following" : "Follow"}
            </button>
        </div>
    )
}
