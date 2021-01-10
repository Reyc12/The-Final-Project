import React,{useState} from "react";
import {MdArrowDropDown, MdArrowDropUp, IoMdPerson} from "react-icons/all";
import './ProfileHeader.css';
import {Link} from "react-router-dom";

function ProfileHeader (props) {

    const [isOpen, setOpenState] = useState(false);

    function logOut() {
        props.onLogOut();
    }
    function changeState(){
        setOpenState(!isOpen);
    }

    return (
        <div>
            <header>
                <Link to="/customer"><h2>FindMyTable</h2></Link>
                <div className="profileHeaderContainer">
                    <div className="profileContainer">
                        <div className="profile" onClick={changeState}>
                            <IoMdPerson/>
                            <span>Profile</span>
                            {isOpen ?  (<MdArrowDropUp/>) : (<MdArrowDropDown/>)}
                        </div>
                        {isOpen && (<div className="profileOptions">
                            <span>Profile Details</span>
                            <span>Reservation History</span>
                        </div>)}
                    </div>
                    <button onClick={logOut}>Log Out</button>
                </div>
            </header>
        </div>
        );

}

export default  ProfileHeader;
/*

const [isOpen, setOpenState] = useState(false);

return (
            <div>
                <header>
                    <h2>FindMyTable</h2>
                    <div className="profileHeaderContainer">
                    <div className="profileContainer">
                        <div className="profile" onClick={e => {setOpenState(!isOpen);}>
                            <IoMdPerson/>
                            <span>Profile</span>
                            {!this.state.open ? (<MdArrowDropDown/>) : (<MdArrowDropUp/>)}
                        </div>
                        {this.state.open && (<div className="profileOptions">
                            <span>Profile Details</span>
                            <span>Reservation History</span>
                        </div>)}
                    </div>
                    <button>Log Out</button>
                    </div>
                </header>
            </div>
        )
* */

/*
export default class ProfileHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            open : false,
        }
    }
    handleClick = () => {
        this.setState(state => {
            return {
                open: !state.open,
            };
        });
    };
    render() {
        return (
            <div>
                <header>
                    <h2>FindMyTable</h2>
                    <div className="profileHeaderContainer">
                        <div className="profileContainer">
                            <div className="profile" onClick={this.handleClick}>
                                <IoMdPerson/>
                                <span>Profile</span>
                                {!this.state.open ? (<MdArrowDropDown/>) : (<MdArrowDropUp/>)}
                            </div>
                            {this.state.open && (<div className="profileOptions">
                                <span>Profile Details</span>
                                <span>Reservation History</span>
                            </div>)}
                        </div>
                        <button>Log Out</button>
                    </div>
                </header>
            </div>
        )
    }
}*/
