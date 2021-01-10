import React from "react";
import './Header.css';
import {Link, NavLink} from "react-router-dom";

export default class Header extends React.Component {


    render() {
        return (
            <div>
            <header>
                <Link to="/"><h2>FindMyTable</h2></Link>
                <div className="navLinks">
                    <Link  to="/customer" className="logInLink" >Log In</Link>
                    <NavLink  to="/signUp" className="signUpLink">Sign Up</NavLink>
                    <NavLink  to="/restaurantView" className="logInLink" >Restaurant Owners</NavLink>
                </div>
            </header>
            </div>
        );
    }
}

