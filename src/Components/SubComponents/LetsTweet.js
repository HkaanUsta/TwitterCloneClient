import React, { useState,useEffect } from 'react'
import ReactDOM from 'react-dom';
import axios from "axios";
import Cookies from 'js-cookie';

export default function LetsTweet() {
    const [file, setFile] = useState();
    const [tweet,setTweet] = useState()
    const [user,setUser] = useState()
    const [info,setInfo] = useState()
    
    function SubmitForm(e){
        e.preventDefault();
        if(file){
            const data = new FormData();
            data.append("file", file);
            data.append("content", tweet);
            data.append("user", user._id);
            axios.post("http://localhost:5000/post_tweet", data).then((res)=>{
                setInfo(res.data.message)
                document.getElementById("clear_tweet").value = ""
                //document.getElementById("select-image").value = ""
            })
        }else{
            const data = new FormData();
            data.append("content", tweet);
            data.append("user", user._id);
            axios.post("http://localhost:5000/post_tweet", data).then((res)=>{
                setInfo(res.data.message)
                document.getElementById("clear_tweet").value = ""
                document.getElementById("select-image").value = ""
            })
        }
        
    }
    function ValidForm(){
        if(tweet){
            if(tweet.length > 0){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }
    /*function KeyListen(event){
        if(event.which === 13) {
          if(ValidForm()){
            SubmitForm()
          }
        }
    }*/
    useEffect(() => {
        //document.addEventListener("keydown", KeyListen, false);
        const auth = Cookies.getJSON("user");
        setUser(auth)
    }, [])
    return (
    <div className="tweeting">
        <form onSubmit={SubmitForm} encType="multipart/form-data">
            <div className="tweeting-top">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.palmcityyachts.com%2Fwp%2Fwp-content%2Fuploads%2Fpalmcityyachts.com%2F2015%2F09%2Fdefault-profile-480x480.png&f=1&nofb=1" alt="" />
                <input type="text" placeholder="What's happening?" id="clear_tweet" onChange={e =>{ setTweet(e.target.value) }} />
            </div>
            <div className="tweeting-bottom">
                <ul className="add-img-emoji-calendar">
                    <li>
                        <label className="add-photo-label" htmlFor="select-image">
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
                            </svg>
                            <input name="file" id="select-image" filename="file" type="file" onChange={(e)=>{ setFile(e.target.files[0]) }} />
                        </label>                        
                    </li>
                    <li>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} fill="currentColor" className="bi bi-emoji-sunglasses" viewBox="0 0 16 16">
                            <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z" />
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                            </svg>
                        </button>
                    </li>
                </ul>
                <button className="btn-primary" type="submit" disabled={!ValidForm()}>
                    Let's tweet
                </button>
            </div>
        </form>
        { info ? (<div className="alert alert-successfully">{info}</div>) : ""}
    </div>
    )
}
