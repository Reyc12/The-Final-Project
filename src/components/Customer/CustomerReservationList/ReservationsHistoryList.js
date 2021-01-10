import React, {useEffect, useState} from "react";
import CustomerReservation from "../CustomerReservation/CustomerReservation";
import axios from "axios";
import {useAuth} from "../../context/auth";
import FindMyTable from "../../utils/Findmytable";

function ReservationHistoryList(props){
    const {authTokens} = useAuth();
    const [notShowReq] = useState(true);
    const [pastReservations, setPastReservations] = useState([]);

    useEffect(()=> {
        const date = FindMyTable.getDate();

        if(!props.isRestaurant){
           axios.post('http://localhost:4000/api/customer/customerPastReservations', {
                date : `${date}`
            },{
                headers: {
                    'Authorization': `token ${authTokens.accessToken}`
                }
            }).then(({ data }) => {
                    setPastReservations(data);
                }
            );
        }
        else { axios.post('http://localhost:4000/api/restaurant/restaurantPastReservations', {
            date : `${date}`
        },{
            headers: {
                'Authorization': `token ${authTokens.accessToken}`
            }
        }).then(({ data }) => {
                setPastReservations(data);
            }
        );}

    }, []);


    return (
        <div>
            {

                pastReservations.map(reservation => {
                    return <CustomerReservation key={reservation.reservation_id} reservation={reservation} req={notShowReq}/>
                })
            }

        </div>
    );

}
export default ReservationHistoryList;