import React from "react";
import './FronPageRestaurant.css';
import {MdStar} from "react-icons/all";



export default class FrontPageRestaurant extends React.Component{
    constructor(props) {
        super(props);
    }
//Make Restaurants Clickable
    render() {
        return (
            <div className="restaurant">
                <div className="imageContainer">
                    <img src={this.props.restaurant.imagePath} alt="restaurant picture"/>
                </div>
                <div className="restaurantInfo">
                    <div className="restaurantInfoHeader">
                        <p>{this.props.restaurant.restaurantName}</p>
                        <span>{this.props.restaurant.rating} <MdStar className="icon" /></span>
                    </div>
                    <div className="address">
                        <span>{this.props.restaurant.restaurantLocation}</span> <br/>
                        <span>{this.props.restaurant.restaurantCuisine}</span>
                    </div>
                </div>
            </div>
        );
    }
}