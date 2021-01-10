import React,{useState} from "react";
import './SearchBar.css';
import {IoMdSearch} from "react-icons/all";
import MyDatePicker from "./SearchBarComponents/DateSelector/MyDatePicker";
import TimeSelector from "./SearchBarComponents/TimeSelector/TimeSelector";
import GuestNumberSelector from "./SearchBarComponents/GuestNumberSelector/GuestNumberSelector";
import {useHistory} from 'react-router-dom';
import {useAuth} from "../context/auth";



function SearchBar(props) {
    const { authTokens } = useAuth();
    const [searchTerm, setSearchTerm] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guestNumber, setGuestNumber] = useState("");
    const history = useHistory();

    function handleSearchTermChange(event){
        setSearchTerm(event.target.value);
    }
    function getDate(requiredDate){
        setDate(requiredDate);
    }
    function getGuestNumber(guestNumber){
        setGuestNumber(guestNumber);
    }
    function getTime(time){
       setTime(time);
    }

    function search(){
        const searchQuote = {
            searchTerm: searchTerm,
            date: date,
            time: time,
            guestNumber: guestNumber
        };
        props.onSearch(searchQuote);
    }
    function nextPath() {
        if(authTokens.accessToken){
           return history.push('/customerResults');
        }
        return history.push('/results');
    }


    return(
        <div className="searchBarContainer">
            <div className="componentsContainer">
                <div className="selectors">

                    <MyDatePicker onDateSelection={getDate}/>
                    <TimeSelector onTimeSelection={getTime} />
                    <GuestNumberSelector  onGuestSelection={getGuestNumber}/>
                </div>
                <div className="searchField">
                    <IoMdSearch className="searchFieldIcon" size={28}/>
                    <input type="text" placeholder="Enter Location Name" onChange={handleSearchTermChange}/>
                </div>
                <button type="button" className="searchButton" onClick={() => { search(); nextPath();}}>Find My Table</button>
            </div>
        </div>
    );


}
export default SearchBar;

 /*class SearchBar extends React.Component {
     /!*const history = useHistory();
    history.push("/");*!/
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            date: '',
            time: '',
            guestNumber: ''
        };

        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
        this.getDate = this.getDate.bind(this);
        this.getGuestNumber = this.getGuestNumber.bind(this);
        this.getTime = this.getTime.bind(this);
        this.search = this.search.bind(this);
    }


    handleSearchTermChange(event){
        this.setState({
            searchTerm: event.target.value
        });
    }
    getDate(requiredDate){
        this.setState( {date: requiredDate});
    }
    getGuestNumber(guestNumber){
        this.setState({guestNumber:guestNumber});
    }
    getTime(time){
        this.setState({time:time});
    }

    search(){
        const searchQuote = {
            searchTerm: this.state.searchTerm,
            date: this.state.date,
            time: this.state.time,
            guestNumber: this.state.guestNumber
        };
        this.props.onSearch(searchQuote);
    }

     nextPath(path) {
         this.props.history.push(path);
     }




    render(){
        return(
            <div className="searchBarContainer">
                <div className="componentsContainer">
                    <div className="selectors">

                        <MyDatePicker onDateSelection={this.getDate}/>
                        <TimeSelector onTimeSelection={this.getTime} />
                        <GuestNumberSelector  onGuestSelection={this.getGuestNumber}/>
                    </div>
                    <div className="searchField">
                        <IoMdSearch className="searchFieldIcon" size={28}/>
                        <input type="text" placeholder="Enter Location Name" onChange={this.handleSearchTermChange}/>
                    </div>
                   <button type="button" className="searchButton" onClick={() => { this.search(); this.nextPath('/results');}}>Find My Table</button>
                </div>
            </div>
        );
        {/!* <Link to="/results">*!/}<button type="button" className="searchButton" onClick={() => { this.search(); this.nextPath('/results');}}>Find My Table</button>{/!*</Link>*!/}
                    {/!*<NavLink to="/SearchResultsView"></NavLink>*!/}
    }
}

export default withRouter(SearchBar);*/
