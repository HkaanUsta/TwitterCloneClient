import React from 'react';
import { Redirect, Switch,Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import LoginRegister from "./Components/LoginRegister";
import Home from "./Components/Home";
import Explore from "./Components/SubComponents/Explore";
import AuthApi from "./AuthApi";
import Profile from './Components/SubComponents/Profile';

function ProtectedRoutes() {
    const Auth = React.useContext(AuthApi)
    return (
        <Switch>
            <Route path="/register" exact component={Register} />
            <ProtectedLogin path="/login" exact component={Login} auth={Auth.auth} />
            <Route path="/" exact component={LoginRegister} />
            <Route path="/explore" exact component={Explore} />
            <ProtectedRoute path="/profile" auth={Auth.auth} exact component={Profile} />
            <ProtectedRoute path="/dashboard" auth={Auth.auth} exact component={Home} />

        </Switch>
    )
}

export default ProtectedRoutes;

const ProtectedRoute = ({auth,component: Component, ...rest}) =>{
    return(
        <Route  
        {...rest}
        render = {()=> auth ? (
            <Component />
        ): (
            <Redirect to="/login" />
        )}
        />
    )
}

const ProtectedLogin = ({auth,component: Component, ...rest}) =>{
    return(
        <Route  
        {...rest}
        render = {()=> !auth ? (
            <Component />
        ): (
            <Redirect to="/dashboard" />
        )}
        />
    )
}