
import React from "react";
import "./FilteringOptions.css";
import Cuisine from "./CuisineFilter/Cuisine";
import Price from "./PriceFilter/Price";
import Rating from "./RatingFilter/Rating";

export default class Options extends React.Component{
    render() {
        return (
            <div className="filtersContainer">
                <div className="subContainer">
                    <div className="container"><Cuisine resultRestaurants={this.props.resultRestaurants}/> </div>
                    <div className="container"><Rating/></div>
                    <div className="container"><Price/></div>
                </div>
            </div>
        );
    }
}