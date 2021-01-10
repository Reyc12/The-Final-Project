import React, {useState,useEffect} from "react";

import './CustomerReservationList.css';
import CustomerReservation from "../CustomerReservation/CustomerReservation";
import ReservationsHistoryList from "./ReservationsHistoryList";
import UpcomingReservationsList from "./UpcomingReservationsList";
import axios from "axios";
import {useAuth} from "../../context/auth";



function CustomerReservationList(props){

    const [reservations, setReservations] = useState(true);


    function previousRes(){
        setReservations(false);

    }
    function futureRes(){
        setReservations(true);
    }


    /*function getUpcomingRes() {


        fetch(`http://localhost:4000/api/customer/customerUpcomingReservations`, {
            method: 'POST',
            body: JSON.stringify(inputs),
            headers: myHeaders,
        }).then(res => res.json()).then(data => {setUpcomingReservations(data); console.log(data);});

        axios.post('http://localhost:4000/api/customer/customerUpcomingReservations', {
            date : '06/01/2021'
        },{
            headers: {
                'Authorization': `token ${authTokens.accessToken}`
            }
        }).then(({ data }) => {
                setUpcomingReservations(data);
                console.log('REi' ,data);}
            );



    }*/

    /*const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Bearer ${authTokens.accessToken}`);
    const inputs = {date: "06/01/2021"};*/

        return (
            <div className="customerReservationListContainer">
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
                    reservations ? (<UpcomingReservationsList resRes={props.resRes} />) : (<ReservationsHistoryList isRestaurant={props.isRestaurant}/>)
                }
            </div>
        );

}
export default CustomerReservationList;