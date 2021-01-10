import React, {useState} from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import CustomerLogin from "./components/Forms/CustomerLogin";
import UserRegistration from "./components/Forms/UserRegistration";
import Home from "./components/Views/Home";
import PrivateRoute from "./components/PrivateRoute";
import CustomerView from "./components/Views/CustomerView";
import { AuthContext } from "./components/context/auth";
import FindMyTable from "./components/utils/Findmytable";
import SearchResults from "./components/Views/SearchResults";
import LoggedCustomerResults from "./components/Views/LoggedCustomerResults";
import RestaurantView from "./components/Views/RestaurantView";
import RestaurantLogin from "./components/Forms/RestaurantLogin";
import RestaurantPrivateRoute from "./components/RestaurantPrivateRoute";

function App(props) {

    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(existingTokens);
    const [searchDetails, setSearchDetails] = useState("");
    const [searchResults, setSearchResults] = useState();
    const setTokens = (data) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    }


    function search(searchQuote){
        setSearchDetails( {
                date: searchQuote.date,
                time: searchQuote.time,
                guestNumber: searchQuote.guestNumber
            });
        FindMyTable.search(searchQuote).then(restaurantList =>{
            setSearchResults(restaurantList);
        });
    }

  return (
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router >
          <Route exact path="/" component={() =><Home onSearch={search}/>} />
          <Route   path="/login" component={CustomerLogin} />
          <Route   path="/restaurantLogin" component={RestaurantLogin} />
          <Route  path="/signUp" component={UserRegistration} />
          <PrivateRoute   path="/customer" component={() => <CustomerView onSearch={search}/>}  />
          <RestaurantPrivateRoute   path="/restaurantView" component={() => <RestaurantView />} />
          <PrivateRoute   path="/customerResults" component={() => <LoggedCustomerResults searchResultRestaurants={searchResults} onSearch={search} searchDetails={searchDetails}/>}  />
          <Route  path="/results" component={() => <SearchResults  searchResultRestaurants={searchResults} onSearch={search}  />}/>
      </Router>
      </AuthContext.Provider>
  );
}

export default App;
/*

search(searchQuote){
                this.setState({searchDetails: {
                                date: searchQuote.date,
                                time: searchQuote.time,
                                guestNumber: searchQuote.guestNumber
                        }});
                FindMyTable.search(searchQuote).then(restaurantList =>{
                        this.setState({searchResults: restaurantList});
                });

        }

* */