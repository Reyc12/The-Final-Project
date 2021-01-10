import React from "react";
import './UserRegistration.css';
import {Link} from "react-router-dom";


function UserRegistration() {

    return (
        <div className="signUpContainer">
            <div className="signUpForm">
                <label>Name:</label>
                <input className="inputs" type="text" placeholder="Full Name" />
                <label>Email:</label>
                <input className="inputs" type="email" placeholder="Email" />
                <label>Address:</label>
                <input className="inputs" type="text" placeholder="Your City" />
                <label>New Password:</label>
                <input className="inputs" type="password" placeholder="New Password" />
                <button className="signUpButton"> Sign Up</button>
                <div className="alreadyAccount">
                    <p> Already have an account ? </p>
                    <Link to="/customer">Log In</Link>
                </div>
            </div>
        </div>
        );
}

export default UserRegistration;
/*
export default class UserRegistration extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address: "",
            password: ""
        }
    }

    changeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }
    changeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    changeAddress = (event) => {
        this.setState({
           address: event.target.value
        })
    }
    changeThePassw = (event) => {
        this.setState({
            password: event.target.value
        })
    }



    /!*handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        this.setState({
            res: FindMyTable.stringifyFormData(data)
        });
    }*!/
        render() {
        return (
            <div className="signUpForm">
                    <label>Name:</label>
                    <input className="inputs" type="text" placeholder="Input Full Name" onChange={this.changeName}/>
                    <label>Email:</label>
                    <input className="inputs" type="email" placeholder="Input Email" onChange={this.changeEmail}/>
                    <label>Address:</label>
                    <input className="inputs" type="text" placeholder="Input Your City" onChange={this.changeAddress}/>
                    <label>New Password:</label>
                    <input className="inputs" type="password" placeholder="New Password" onChange={this.changeThePassw}/>
                   <NavLink to="/CustomerView"><input type="submit" className="button" value="Sign Up"/></NavLink>
            </div>);
    }
}*/
