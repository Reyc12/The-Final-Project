import React, {useState} from "react";
import './RestaruantReservationList.css';
import RestaurantUpcoming from "./RestaurantUpcoming";
import ReservationsHistoryList from "../Customer/CustomerReservationList/ReservationsHistoryList";



function RestaurantReservationList(props){

    const [reservations, setReservations] = useState(true);

    function previousRes(){
        setReservations(false);
    }
    function futureRes(){
        setReservations(true);
    }

    return (
        <div className="restaurantReservationListContainer">
            {/*{
                    this.props.customerReservations.map( reservation => {
                        return <CustomerReservation  key={reservation.reservationId} reservation={reservation} />
                    })
                }*/}
            <div className="CusResListButtons">
                <button onClick={previousRes}>Previous Reservation</button>
                <button onClick={futureRes}>Upcoming Reservations</button>
            </div>
            {
                reservations ? (<RestaurantUpcoming resRes={props.resRes}/>) : (<ReservationsHistoryList isRestaurant={props.isRestaurant}/>)
            }
        </div>
    );

}
export default RestaurantReservationList;