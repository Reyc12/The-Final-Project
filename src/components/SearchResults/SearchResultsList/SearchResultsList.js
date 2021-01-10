import React from "react";

import './SearchResultsList.css';
import SearchResultsRestaurant from "../SearchResultsRestaurant/SearchResultsRestaurant";


export default class SearchResultsList extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.resultRestaurants){
            return (

                <div className="resultListContainer">

                    {
                        this.props.resultRestaurants.map( restaurant => {
                            return <SearchResultsRestaurant  key={restaurant.restaurantId} restaurant={restaurant} onReserve={this.props.onReserve} setShowModal={this.props.setShowModal} searchDetails={this.props.searchDetails}/>
                        })
                    }

                </div>
            );
        } else {
            return (<div className="resultListNoResults">
                <span>We could not find an available Restaurant based on your search criteria</span>
            </div>);
        }

    }

}
