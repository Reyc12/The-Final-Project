import FindMyTable from "../../utils/Findmytable";
import React, {useEffect} from "react";
import axios from "axios";


function DayRestaurantReservation(props)  {






    return(
        <div className="customerReservationContainer">
            <div className="resDetails">
                <span>Reservation Id: {props.reservation.reservation_id} </span>
                <p>Reservation for <span>{props.reservation.reservation_guestnumber}</span> for <span>{props.reservation.reservation_guestName}</span>  </p>
            </div>
        </div>
    );
}
export default DayRestaurantReservation;