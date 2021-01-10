
const findMyTableApiUrl = 'http://localhost:4000/api';

const FindMyTable = {};

FindMyTable.getDateString = (timestamp) => {
        let dateObject = new Date(timestamp);
        let month = dateObject.getMonth()+1;
        let date = dateObject.getDate();
        return (date < 10 ? '0'+date : date)+ '/' + (month < 10 ? '0'+month : month) + '/' + dateObject.getFullYear();
    }
FindMyTable.getDate = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    return today;
}
FindMyTable.search = (searchQuote) => {
    const date =  FindMyTable.getDateString(searchQuote.date);
    const url = `http://localhost:4000/api/search?location=${searchQuote.searchTerm}&guestNumber=${searchQuote.guestNumber}&time=${searchQuote.time}&date=${date}`;
    return fetch(url,{
        method: "get",
        header: { "Content-Type": "application/json" }
    }).then(res => res.json()).then(data => data.map(restaurant => ({
        restaurantId: restaurant.restaurant_id,
        restaurantName: restaurant.restaurant_name,
        restaurantCuisine: restaurant.restaurant_cuisine,
        restaurantLocation: restaurant.restaurant_location,
        rating:restaurant.restaurant_rating,
        price: restaurant.restaurant_price,
        imagePath: restaurant.restaurant_imagePath,
        tableId: restaurant.table_id
    })));
};
FindMyTable.reserve = (details, reservation, user) => {
    const date =  FindMyTable.getDateString(details.date);
    const url = `http://localhost:4000/api/reservation`;
    return fetch(url, {
        method: "PUT",
        header: {"Content-Type": "application/json"},
        body: JSON.stringify({
            customerId: user,
            table_id: reservation.tableId,
            restaurantId: reservation.restaurantId,
            time: details.time,
            date: date,
            guestNumber: details.guestNumber
        })
    }).then(res => res.json()).then(data => data.map(reservation => ({
        reservationId: reservation.reservation_id,
        restaurantId: reservation.restaurant_id,
        tableId: reservation.table_id,
        reservationTime: reservation.reservation_time,
        reservationDate: reservation.eservation_date,
        reservationGuestNumber: reservation.reservation_guestnumber,
        customerName: reservation.customer_name
    })));
}









FindMyTable.stringifyFormData =(fd) => {
    const data = {};
    for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
}


    /*FindMyTable.search = async (searchQuote) => {
        const date =  FindMyTable.getDateString(searchQuote.date);
        const url = `http://localhost:4000/api/search?location=${searchQuote.searchTerm}&guestNumber=${searchQuote.guestNumber}&time=${searchQuote.time}&date=${date}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }*/

    /*FindMyTable.search = (searchQuote) => {
        const date =  FindMyTable.getDateString(searchQuote.date);
        return fetch(`${findMyTableApiUrl}/search?location=${searchQuote.searchTerm}&guestNumber=${searchQuote.guestNumber}&time=${searchQuote.time}&date=${date}`).then(response => response.json())
            .then(jsonResponse => {
                if (!jsonResponse.items) {
                    return [];
                } else {
                    console.log(jsonResponse.items);
                    return jsonResponse.items.map(restaurant => ({
                        restaurantId: restaurant.restaurant_id,
                        restaurantName: restaurant.restaurant_name,
                        restaurantCuisine: restaurant.restaurant_cuisine,
                        numberOfReviews: restaurant.restaurant_numberOfReviews,
                        rating:restaurant.restaurant_rating,
                        price: restaurant.restaurant_price,
                        imagePath: restaurant.restaurant_imagePath,
                        tableId: restaurant.table_id
                    }));

                }
            });
    }*/

/*FindMyTable.searchForReservation = searchQuote => {
    const date =  this.getDateString(searchQuote.date);
    const url = `${findMyTableApiUrl}/search?location=${searchQuote.searchTerm}&guestNumber=${searchQuote.guestNumber}&time=${searchQuote.time}&date=${date}`;
    return fetch(url).then(response => {
        if (!response.ok) {
            return new Promise(resolve => resolve([]));
        }

        });
    };*/



export default FindMyTable;