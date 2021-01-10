import React from "react";
import {MdArrowDropDown, MdArrowDropUp} from "react-icons/all";
import "./Price.css";

export default class Price extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false,
        }
    }
    handleClick = () => {
        this.setState(state => {
            return {
                open: !state.open
            }
        });
    };
    render() {
        return (
            <div>
                <div className="priceHeader" onClick={this.handleClick}>
                    <span>Price</span>
                    {!this.state.open ? (<MdArrowDropDown/>) : (<MdArrowDropUp/>) }
                </div>
                {this.state.open && (<div className="priceBody">
                    <div><button>$$</button></div>
                    <div><button>$$$</button></div>
                    <div><button>$$$$</button></div>
                </div>)}
            </div>
        );
    }
}