import React, {useEffect, useState} from "react";
import RestaurantReservation from "./DayReservations/RestaurantReservation";
import {useAuth} from "../context/auth";
import FindMyTable from "../utils/Findmytable";
import axios from "axios";

function RestaurantUpcoming(props){

    const {authTokens} = useAuth();
    const [upcomingReservations, setUpcomingReservations] = useState([]);

    useEffect(()=> {
        const date = FindMyTable.getDate();
        axios.post('http://localhost:4000/api/restaurant/restaurantUpcomingReservations', {
            date : `${date}`
        },{
            headers: {
                'Authorization': `token ${authTokens.accessToken}`
            }
        }).then(({ data }) => {
                setUpcomingReservations(data);
            }
        );
    }, []);

    return (
        <div>
            {
                    upcomingReservations.map( reservation => {
                        return <RestaurantReservation  key={reservation.reservation_id} reservation={reservation} />
                    })
                }
        </div>
    );

}
export default RestaurantUpcoming;