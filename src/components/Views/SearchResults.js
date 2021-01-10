import React from "react";
import FilteringOptions from "../SearchResults/FilteringOptions/FilteringOptions";
import SearchResultsList from "../SearchResults/SearchResultsList/SearchResultsList";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import {Modal} from "../Modal/Modal";
import './Home.css';


export default class SearchResults extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            modal : false,
            resDetails: {}
        }

        this.openModal = this.openModal.bind(this);

    }
    openModal = () => {
        this.setState({
            modal : !this.state.modal
        })
    };
    setResDetails = (reservationDetails) => {
        this.setState({
            resDetails: {
                tableId : reservationDetails.tableId,
                restaurantId : reservationDetails.restaurantId
            }
        })
    };


    render() {
        return(
            <div>
                <Header/>
                <SearchBar onSearch={this.props.onSearch} />
                <div className="body">
                    <FilteringOptions resultRestaurants={this.props.searchResultRestaurants}/>
                    <SearchResultsList resultRestaurants={this.props.searchResultRestaurants} setShowModal={this.openModal} onReserve={this.setResDetails} searchDetails={this.props.searchDetails}/>
                </div>
                <Modal showModal={this.state.modal} setShowModal={this.openModal}  resDetails={this.state.resDetails}/>
            </div>
        );
    }
}