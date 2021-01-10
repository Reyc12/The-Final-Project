import React, {useState} from "react";
import './CustomerReservation.css';
import FindMyTable from "../../utils/Findmytable";
import axios from "axios";
import {useAuth} from "../../context/auth";

function CustomerReservation(props)  {

    const {authTokens} = useAuth();
    const [searchTerm, setSearchTerm] = useState("");
    const [specialRequest, setSpecialRequest] = useState(false);

    function handleSearchTermChange(event){
        setSearchTerm(event.target.value);
    }

    function getReq(){
        setSpecialRequest(!specialRequest);
    }

    function sendSpecialRequest(){
        axios.post('http://localhost:4000/api/customer/addSpecialRequest', {
            id: `${props.reservation.reservation_id}`,
            specialRequest : `${searchTerm}`
        },{
            headers: {
                'Authorization': `token ${authTokens.accessToken}`
            }
        }).then(({ data }) => {
                console.log(data);
                getReq();
            }
        );
    }

    function cancelReservation(){
        axios.delete(`http://localhost:4000/api/reservation/${props.reservation.reservation_id}`,{
            headers: {
                'Authorization': `token ${authTokens.accessToken}`
            }
        })
            .then(resp => console.log(resp.data));
        window.location.reload(false);
        //console.log(props.reservation.reservation_id);
    }

        return(
            <div className="customerReservationContainer">
                <div className="resDetails">
                    <span>Id : {props.reservation.reservation_id}</span>
                    <p>Reservation for <span>{props.reservation.reservation_guestName}</span> on <span>{FindMyTable.getDateString(props.reservation.reservation_date)}</span> at <span>{props.reservation.reservation_time}</span> at <span>{props.reservation.restaurant_name} .</span></p>
                </div>
                {!props.req ? (<div className="btn">
                    <button className="a" onClick={getReq} >Add Special Request</button>
                    <button className="cBtn" onClick={cancelReservation}>Cancel This Reservation</button>
                </div>) : null}
                {specialRequest ? (<div className="cusResRequest">
                    <input type="text" onChange={handleSearchTermChange}/>
                    <button className="a" onClick={sendSpecialRequest}>Send Request</button>
                </div>) : null}
            </div>
        );
}
export default CustomerReservation;