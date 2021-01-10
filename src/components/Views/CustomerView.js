import React, {useState} from "react";
import ProfileHeader from "../Header/ProfileHeader";
import SearchBar from "../SearchBar/SearchBar";
import {useAuth} from "../context/auth";
import {withRouter} from "react-router-dom";
import CustomerReservationList from "../Customer/CustomerReservationList/CustomerReservationList";



function CustomerView (props) {
    const { setAuthTokens } = useAuth();
    const [isRestaurant] = useState(false);

    function logOut() {
        setAuthTokens("");
    }

    return (
        <div>
            <ProfileHeader onLogOut={logOut}/>
            <SearchBar onSearch={props.onSearch}/>
            <CustomerReservationList isRestaurant={isRestaurant}/>
        </div>
    );
}
export default withRouter(CustomerView);