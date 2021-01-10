import React from "react";
import { MdArrowDropDown, MdArrowDropUp} from "react-icons/all";
import "./Cuisine.css";



export default class Cuisine extends React.Component{

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

    updateByCuisine(){

    }
    render() {
        return (
                <div className="cuisine">
                    <div className="cuisineHeader" onClick={this.handleClick}>
                        <span>Cuisine</span>
                        {!this.state.open ? (<MdArrowDropDown/>) : (<MdArrowDropUp/>)}
                    </div>
                    { this.state.open && (<div className="cuisineBody">
                        <div className="choice">
                        <label htmlFor="Italian">Italian</label>
                        <input type="checkbox"  id="Italian" name="cuisine" value="Italian"/>
                        </div>
                            <div className="choice">
                        <label htmlFor="Seafood">Seafood</label>
                        <input type="checkbox" id="Seafood" name="cuisine" value="Seafood"/>
                            </div>
                                <div className="choice">
                        <label htmlFor="Mexican">Mexican</label>
                        <input type="checkbox" id="Mexican" name="cuisine" value="Mexican"/>
                                </div>
                                    <div className="choice">
                        <label htmlFor="Steakhouse">Steakhouse</label>
                        <input type="checkbox" id="Steakhouse" name="cuisine" value="Steakhouse"/>
                                    </div>
                                        <div className="choice">
                        <label htmlFor="Indian">Indian</label>
                        <input type="checkbox" id="Indian" name="cuisine" value="Indian"/>
                                        </div>
                    </div>) }
                </div>

        );
    }
}