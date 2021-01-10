import React from "react";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import FrontPageRestaurantsList from "../FrontPageRestaurantList/FrontPageRestaurantsList";


export default class Home extends React.Component{

        constructor(props) {
                super(props);
        }



        render() {
                return(
                        <div>
                            <Header/>
                            <SearchBar onSearch={this.props.onSearch}  />
                            <FrontPageRestaurantsList/>
                        </div>
                );
        }
}

/*
function Home(props) {

    return (
        <div>
            <Header/>
            <SearchBar onSearch={props.onSearch} />
            <FrontPageRestaurantsList/>
        </div>
    )
}

export default Home;*/
