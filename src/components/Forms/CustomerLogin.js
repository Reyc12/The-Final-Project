import React, {useState} from "react";
import './CustomerLogin.css';
import {Link, Redirect} from "react-router-dom";
import {useAuth} from "../context/auth";
import axios from "axios";



function CustomerLogin(props)  {

    const referer = props.location.state.referer || '/';
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();

    function postLogin() {
        axios.post("http://localhost:8080/customerLogin", {
            username,
            password
        }).then(result => {
            if (result.status === 200) {
                setAuthTokens(result.data);
                setLoggedIn(true);
            } else {
                setIsError(true);
            }
        }).catch(e => {
            setIsError(true);
        });
    }

    if (isLoggedIn) {
        return <Redirect to={referer} />;
    }
    if (isError) {
        console.log(isError);
    }


        return (
            <div className="customerLogInContainer">
                <div className="customerLogInForm">
                    <label>Email:</label>
                        <input
                            className="inputs"
                            name="username"
                            type="text"
                            onChange={e => {
                                setUserName(e.target.value);
                            }}
                            placeholder="username"/>
                    <label>Password:</label>
                        <input
                            className="inputs"
                            name="password"
                            type="password"
                            onChange={e => {
                                setPassword(e.target.value);
                            }}
                            placeholder="password"/>
                    <button onClick={postLogin} className="logInButton"> Log In</button>
                </div>
                <div className="notYetAccount">
                    <p> You do not have an account yet ? </p>
                    <Link to="/signUp">Sign Up</Link>
                </div>
            </div>
        );


}

export default CustomerLogin;