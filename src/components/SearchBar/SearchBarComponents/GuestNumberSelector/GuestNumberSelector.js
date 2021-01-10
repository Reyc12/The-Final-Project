import React from "react";
import {IoMdPerson, IoMdArrowDropdown} from "react-icons/all";
import './GuestNumberSelector.css';

export default class GuestNumberSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            value : '2'
        };
        this.handleChange = this.handleChange.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.getGuestNumber = this.getGuestNumber.bind(this);
    }

    componentDidMount() {
        this.getGuestNumber();
    }

    handleChange(e) {
        const value = e.target.value;
        this.changeValue(value);
        this.props.onGuestSelection(e.target.value);

    }

    changeValue(newValue){
        this.setState({
            value: newValue
        });
    }
    getGuestNumber(){
        this.props.onGuestSelection(this.state.value);
    }


    render() {
        return (
            <div className="guestNumberSelectorContainer">
                <div>
                    <select className="guestNumberSelector" onChange={this.handleChange}>
                        <option value="1">1 person</option>
                        <option selected value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                        <option value="5">5 people</option>
                    </select>
                </div>
                <div className="guestNumberSelectorView">
                    <IoMdPerson/>
                    <span> {this.state.value === 1 ? `${this.state.value} person` : `${this.state.value} people`} </span>
                    <IoMdArrowDropdown size={22}/>
                </div>
            </div>
        );
    }
}