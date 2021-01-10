
import './RestaurantBanner.css';
import {useAuth} from "../context/auth";
import {useEffect, useState} from "react";
import FindMyTable from "../utils/Findmytable";
import axios from "axios";
function RestaurantBanner(){
    const {authTokens} = useAuth();
    const [totalCustomers, setTotalCustomers] = useState([]);
    const [totalGuests, setTotalGuests] = useState([]);
    const [avgGuests, setAvgGuests] = useState([]);

    useEffect(()=> {

        axios.get('http://localhost:4000/api/restaurant/totalReservations', {
            headers: {
                'Authorization': `token ${authTokens.accessToken}`
            }
        }).then(({ data }) => {
                setTotalCustomers(data[0]);
                console.log(data);
            }
        );
        axios.get('http://localhost:4000/api/restaurant/totalGuests', {
            headers: {
                'Authorization': `token ${authTokens.accessToken}`
            }
        }).then(({ data }) => {
                setTotalGuests(data[0]);
                console.log(data);
            }
        );
        axios.get('http://localhost:4000/api/restaurant/avgDailyGuest', {
            headers: {
                'Authorization': `token ${authTokens.accessToken}`
            }
        }).then(({ data }) => {
                setAvgGuests(data[0]);
                console.log(data);
            }
        );
    }, []);


    return(
        <div className="restaurantBannerContainer">
            <div className="bannerContent">
                <div>
                    <span className="span">{totalCustomers.totalReservations} </span> Customers have reserved your restaurant since you joined us and a total of <span className="span">{totalGuests.totalGuests} </span> guests diners.
                </div>
                <div>
                    <span className="span">{avgGuests.avgGuest} </span> Is the daily Average number of guests that have visited your restaurant in the past month.
                </div>
            </div>
        </div>
    );
}
export default RestaurantBanner;