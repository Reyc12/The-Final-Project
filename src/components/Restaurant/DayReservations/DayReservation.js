import './DayReservation.css';
import DayRestaurantReservation from "./DayRestaurantReservation";
import {useAuth} from "../../context/auth";
import {useState} from "react";
import axios from "axios";


function DayReservation (props) {

    const {authTokens} = useAuth();
    const [dayReservations, setDayReservations] = useState([]);
    const [date, setDate] = useState();

    function handleDateChange(event){
        setDate(event.target.value);
    }
    function findResByDate(){

        axios.post('http://localhost:4000/api/restaurant/currentDayReservations', {
            date : `${date}`
        },{
            headers: {
                'Authorization': `token ${authTokens.accessToken}`
            }
        }).then(({ data }) => {
            console.log(data);
                setDayReservations(data);
            }
        );

    }

    return (
        <div className="dayResContainer">
            <div className="dayResHeader">
                <div>
                    <p>Input date to find reservations for that particular date</p>
                </div>
                <div className="dayResHeaderInp">
                    <input type="text" placeholder="DD/MM/YYYY" onChange={handleDateChange}/>
                    <button onClick={findResByDate}>Find</button>
                </div>
            </div>
            <div>
                {
                    dayReservations.map(reservation => {
                        return <DayRestaurantReservation key={reservation._reservation_id} reservation={reservation}/>
                    })
                }
            </div>
        </div>
    );
}
export default DayReservation;