import React, { useState, useEffect } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes"
import AuthApi from "./AuthApi";
import Cooikes from "js-cookie";

function App() {
    const [auth,setAuth] = useState(false)
    const readCookie = ()=>{
      const user = Cooikes.getJSON("user");
      if(user){
        setAuth(true);
      }
    }
    useEffect(() => {
      readCookie()
    }, [])
      return (
        <div className="App">
          <AuthApi.Provider value={{auth,setAuth}}>
            <Router>
              <ProtectedRoutes />
            </Router>
          </AuthApi.Provider>
        </div>
      );
}

export default App;