import React, {useState} from "react";
import ProfileHeader from "../Header/ProfileHeader";
import SearchBar from "../SearchBar/SearchBar";
import {useAuth} from "../context/auth";
import {withRouter} from "react-router-dom";
import SearchResultsList from "../SearchResults/SearchResultsList/SearchResultsList";
import FilteringOptions from "../SearchResults/FilteringOptions/FilteringOptions";
import './Home.css';


function LoggedCustomerResults (props) {
    const { setAuthTokens } = useAuth();

    function logOut() {
        setAuthTokens("");
    }

    return (
        <div>
            <ProfileHeader onLogOut={logOut}/>
            <SearchBar onSearch={props.onSearch} />
            <div className="body">
                <FilteringOptions resultRestaurants={props.searchResultRestaurants}/>
                <SearchResultsList resultRestaurants={props.searchResultRestaurants} searchDetails={props.searchDetails}/>
            </div>
        </div>
    );
}
export default withRouter(LoggedCustomerResults);