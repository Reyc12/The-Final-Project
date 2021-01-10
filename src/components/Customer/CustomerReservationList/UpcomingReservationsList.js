import React, {useState,useEffect} from "react";
import CustomerReservation from "../CustomerReservation/CustomerReservation";
import {useAuth} from "../../context/auth";
import axios from "axios";
import FindMyTable from "../../utils/Findmytable";

function UpcomingReservationsList(props){

    const {authTokens} = useAuth();
    const [upcomingReservations, setUpcomingReservations] = useState([]);






    useEffect(()=> {
        const date = FindMyTable.getDate();
        axios.post('http://localhost:4000/api/customer/customerUpcomingReservations', {
            date : `${date}`
        },{
            headers: {
                'Authorization': `token ${authTokens.accessToken}`
            }
        }).then(({ data }) => {
            console.log('REi' ,data);
            setUpcomingReservations(data);
            }
        );
    }, []);
    return (

        <div>
            {

                upcomingReservations.map(reservation => {
                    return <CustomerReservation key={reservation.reservation_id} reservation={reservation}/>
                })
            }

        </div>





    );

}
export default UpcomingReservationsList;