import React from "react";
import './TimeSelector.css';
import {IoMdArrowDropdown, IoMdTime} from "react-icons/all";


export default class TimeSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            value : '17:30'
        };
        this.handleChange = this.handleChange.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    componentDidMount() {
        this.props.onTimeSelection(this.state.value);
    }

    changeValue(newValue){
        this.setState({
            value: newValue
        });
    }
    handleChange(e) {
        const value = e.target.value;
        this.changeValue(value);
        this.props.onTimeSelection(e.target.value);
    }

    render() {
        return (
            <div className="timeSelectorContainer">
                <div>
                    <select className="timeSelector" onChange={this.handleChange}>
                        <option value="12:30">12:30</option>
                        <option value="15:00">15:00</option>
                        <option defaultValue={"17:30"} >17:30</option>
                        <option value="20:00">20:00</option>
                        <option value="22:30">22:30</option>
                    </select>
                </div>
                <div className="timeSelectorView">
                    <IoMdTime size={24}/>
                    <span>{this.state.value}</span>
                    <IoMdArrowDropdown size={22} />
                </div>
            </div>


        );
    }
}