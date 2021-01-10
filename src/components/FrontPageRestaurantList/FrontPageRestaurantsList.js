import React from "react";
import './FrontPageRestaurantList.css';
import FrontPageRestaurant from "../FrontPageRestaurant/FrontPageRestaurant";
export default class FrontPageRestaurantsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
            userAddress: "",
            restaurants: []
        }
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.reverseGeoCode = this.reverseGeoCode.bind(this);
        this.getRestaurants = this.getRestaurants.bind(this);
    }
    componentDidMount() {
        if ("geolocation" in navigator) {
            console.log("Available");
            this.getLocation();
        } else {
            console.log("Geolocation Not Available");
        }

    }
    getLocation(){
        navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
    }
    getCoordinates(position){
        console.log(position);
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
        this.reverseGeoCode();
    }
    reverseGeoCode(){
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=AIzaSyBO1Oz4H4yQUYMWoAl9zeK6XQ7n2AH-trE`).then(
            response => response.json()
        ).then(
              (data) => {this.setState({
                userAddress: data.results[7].formatted_address.slice(0, 8) //sliced the text for simplicity of demonstration since both Hastings and Brighton have 8 letters and are the only places that are populated in database
            });
                  this.getRestaurants();
              }
        ).catch(error => console.log(error));
    }
    getRestaurants () {
        fetch(`http://localhost:4000/api/home/${this.state.userAddress}`, {
            method: "get",
            header: {"Content-Type": "application/json"}
        })
            .then(res => res.json()).then(data => data.map(restaurant => ({
            restaurantId: restaurant.restaurant_id,
            restaurantName: restaurant.restaurant_name,
            restaurantLocation: restaurant.restaurant_location,
            restaurantCuisine: restaurant.restaurant_cuisine,
            numberOfReviews: restaurant.restaurant_numberOfReviews,
            rating: restaurant.restaurant_rating,
            price: restaurant.restaurant_price,
            imagePath: restaurant.restaurant_imagePath,
            tableId: restaurant.table_id
        }))).then( data => {this.setState({restaurants: data}); console.log(data);});

    }






    handleLocationError(error) {
        // eslint-disable-next-line
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.")
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.")
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.")
                break;

        }
    }

    render() {

        return (
            <div className="restaurantListComponent">
                <h2> Restaurants Near You</h2>
                {
                    this.state.restaurants.map( restaurant => {
                        return <FrontPageRestaurant  key={restaurant.restaurantId} restaurant={restaurant}  />
                    })
                }
            </div>
        );
    }
}