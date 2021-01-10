import React, {useState} from "react";
import '../../Customer/CustomerReservation/CustomerReservation.css';
import FindMyTable from "../../utils/Findmytable";
import axios from "axios";

function RestaurantReservation(props)  {


    /*{
            headers: {
                'Authorization': `token ${authTokens.accessToken}`
            }
        }*/
    function cancelReservation(){
        axios.delete(`http://localhost:4000/api/reservation/${props.reservation.reservation_id}`)
            .then(resp => console.log(resp.data));
        window.location.reload(false);
        //console.log(props.reservation.reservation_id);
    }


    return(
        <div className="customerReservationContainer">
            <div className="resDetails">
                <span>Reservation Id: {props.reservation.reservation_id}</span>
                <p>Reservation for <span>{props.reservation.reservation_guestnumber}</span> on <span>{FindMyTable.getDateString(props.reservation.reservation_date)}</span> at <span>{props.reservation.reservation_time}</span> </p>
            </div>
            <div className="btn">
                <button className="cBtn" onClick={cancelReservation}>Cancel This Reservation</button>
            </div>
            <div className="cusResRequest">
                <h4>Special Request</h4>
                <p>{props.reservation.reservation_specialRequest}</p>
            </div>
        </div>
    );
}
export default RestaurantReservation;