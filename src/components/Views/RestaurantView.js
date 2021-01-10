import React, {useState} from "react";
import ProfileHeader from "../Header/ProfileHeader";
import {useAuth} from "../context/auth";
import {withRouter} from "react-router-dom";
import CustomerReservationList from "../Customer/CustomerReservationList/CustomerReservationList";
import RestaurantBanner from "../Restaurant/RestaurantBanner";
import './RestaurantView.css';
import DayReservation from "../Restaurant/DayReservations/DayReservation";
import RestaurantReservationList from "../Restaurant/RestaurantReservationList";




function RestaurantView (props) {
    const { setAuthTokens } = useAuth();
    const [isRestaurant] = useState(true);

    function logOut() {
        setAuthTokens("");
    }

    return (
        <div>
            <ProfileHeader onLogOut={logOut}/>
            <RestaurantBanner/>
            <div className="resViewContainer">
                <RestaurantReservationList isRestaurant={isRestaurant}/>
                <DayReservation/>
            </div>


        </div>
    );
}
export default withRouter(RestaurantView);