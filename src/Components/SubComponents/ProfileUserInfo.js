import React from 'react'

export default function ProfileUserInfo() {
    return (
        <div className="profile-info">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.palmcityyachts.com%2Fwp%2Fwp-content%2Fuploads%2Fpalmcityyachts.com%2F2015%2F09%2Fdefault-profile-480x480.png&f=1&nofb=1" alt="" />
            <div className="user-name-tag">
                <h2>Enes Pınar</h2>
                <h3 style={{margin: "3px 0"}}>@ensePNR</h3>
            </div>
            <div className="following-followers">
                <div className="following"><h3>54</h3><h3 className="followers-following-text">Following</h3></div>
                <div className="followers"><h3>21</h3><h3 className="followers-following-text">Followers</h3></div>
            </div>
        </div>
    )
}
