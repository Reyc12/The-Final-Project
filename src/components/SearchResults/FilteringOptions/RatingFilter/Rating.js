import React from 'react';
import styled from 'styled-components';
import {MdStar, MdArrowDropUp, MdArrowDropDown} from "react-icons/all";
import "./Rating.css";


const sliderThumbStyles = (props) => (`
  width: 5px;
  height: 5px;
  background: ${props.color};
  cursor: pointer;
  outline: 5px solid rgba(191, 116, 116, 0.85);
  opacity: ${props.opacity};
  -webkit-transition: .2s;
  transition: opacity .2s;
`);

const Styles = styled.div`
  display: flex;
  align-items: center;
  color: rgba(191, 116, 116, 0.85);
  margin-top: 2rem;
  margin-bottom: 2rem;
  .value {
    flex: 2;
    font-size: 2rem;
    display:flex;
    align-items: center;
    margin-left: 20px;
  }
  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;
    background: #efefef;
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${props => sliderThumbStyles(props)}
    }
  }
`;

export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 3,
            open: false,
        }
    }

    handleOnChange = (e) => this.setState({ value: e.target.value });
    handleClick = () => {
        this.setState( state => {
            return {
                open : !this.state.open,
            }
        });
    };

    render() {
        return (
            <div>
                <div className="ratingHeader" onClick={this.handleClick}>
                    <span>Rating</span>
                    {!this.state.open ? (<MdArrowDropDown/>) : (<MdArrowDropUp/>)}
                </div>
                {this.state.open && (<Styles opacity={this.state.value > 1 ? (this.state.value / 5) : .1} color={this.props.color}>
                <input type="range" min={1} max={5} value={this.state.value} className="slider" onChange={this.handleOnChange} />
                <div className="value">
                    {this.state.value}
                    <MdStar/>
                </div>
            </Styles>)}
            </div>
        )
    }
}