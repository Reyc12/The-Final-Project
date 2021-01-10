import React, {useState} from "react";
import {MdLocationOn, MdStar} from "react-icons/all";
import './SearchResultsRestaurant.css';
import {useAuth} from "../../context/auth";
import axios from "axios";
import FindMyTable from "../../utils/Findmytable";


function SearchResultsRestaurant(props){
    const { authTokens } = useAuth();

    function reserve(){
        if(authTokens){
            /*return console.log(authTokens.accessToken)*/
            return reserveCustomerTable();
        }
        const reservationDetails = {
            tableId: props.restaurant.tableId,
            restaurantId: props.restaurant.restaurantId,
        };
        props.onReserve(reservationDetails);
       return props.setShowModal();
    }
    function reserveCustomerTable(){
        axios.put('http://localhost:4000/api/reservation/registeredCustomer',
            {
                restaurantId: props.restaurant.restaurantId,
                table_id: props.restaurant.tableId,
                time: props.searchDetails.time,
                date: FindMyTable.getDateString(props.searchDetails.date),
                guestNumber: props.searchDetails.guestNumber,
            },{
                headers: {
                    'Authorization': `token ${authTokens.accessToken}`
                }
            }).then(({ data }) => {
            console.log(data);
        });
    }

    return (
        <div className="resultRestaurantContainer">
            <div className="imageContainer">
                <img src={props.restaurant.imagePath} alt="restaurant picture"/>
            </div>
            <div className="information">
                <div className="headInfo">
                    <h3>{props.restaurant.restaurantName}</h3>
                    <div className="rating">
                        <span>Rating {props.restaurant.rating}</span>
                        <MdStar className="icon"/>
                    </div>
                </div>
                <div className="bodyInfo">
                    <span>{props.restaurant.price < 99 ? '$$' : '$$$' }</span>
                    <span className="cuisine">{props.restaurant.restaurantCuisine}</span>
                    <div className="area" >
                        <span >{props.restaurant.restaurantLocation}</span>
                        <MdLocationOn/>
                    </div>
                </div>
                <div className="buttonContainer">
                    <button onClick={reserve}>Reserve My Table</button>
                </div>
            </div>
        </div>
    );
}
export default SearchResultsRestaurant;
/*
export default class SearchResultsRestaurant extends React.Component {
    constructor(props) {
        super(props);
        this.handleReservation = this.handleReservation.bind(this);
        this.reserve = this.reserve.bind(this);
    }

    handleReservation(){
        const reservation = {
            tableId:this.props.restaurant.tableId,
            restaurantId:this.props.restaurant.restaurantId
        };
        this.props.onReserve(reservation);
    }
    reserve(){
        this.props.setShowModal();
    }

    render() {
        return (
            <div className="resultRestaurantContainer">
                <div className="imageContainer">
                    <img src={this.props.restaurant.imagePath} alt="restaurant picture"/>
                </div>
                <div className="information">
                    <div className="headInfo">
                    <h3>{this.props.restaurant.restaurantName}</h3>
                        <div className="rating">
                        <span>Rating {this.props.restaurant.rating}</span>
                        <MdStar className="icon"/>
                        </div>
                    </div>
                    <div className="bodyInfo">
                        <span>{this.props.restaurant.price < 99 ? '$$' : '$$$' }</span>
                        <span className="cuisine">{this.props.restaurant.restaurantCuisine}</span>
                        <div className="area" >
                        <span >{this.props.restaurant.restaurantLocation}</span>
                        <MdLocationOn/>
                        </div>
                    </div>
                    <div className="buttonContainer">
                    <button onClick={this.reserve}>Reserve My Table</button>
                    </div>
                </div>
            </div>
        );
    }

}*/
