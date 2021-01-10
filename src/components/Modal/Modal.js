import React, {useRef, useEffect, useCallback, useState} from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import {Link} from "react-router-dom";
import axios from "axios";
import FindMyTable from "../utils/Findmytable";


const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 55;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  margin: 0 auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  .modalButton {
    padding: 10px 24px;
    background: #a7874b;
    color: #fff;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    transition: background-color .5s;
    outline: none;
    height:45px;
  }

  .modalButton:hover {
    cursor: pointer;
    background-color: #b87257;
  }

  .modalButton:active {
    background-color: coral;
    color: #be6b58;
  }
  
  

  .guestButton {
    -webkit-appearance: none;
    -moz-appearance: none;
    color: #a22f2f;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }
  .guestButton:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .popUpUpper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }

  .popUpLogin {
    text-align: center;
  }

  .popUpLogin p {
    margin-bottom: 15px;
  }

  .guestReservationForm{
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .guestReservationForm > label {
    display: none;
  }
  .guestReservationForm .guestInputs {
    -webkit-appearance: none;
    box-sizing: border-box;
    padding-left: 5px;
    border: solid 1px #a7874b;
    border-radius: 2px;
    height:45px;
    margin-bottom: 20px;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  color: #a7874b;
`;

/*export const Modal = ({ showModal, setShowModal })*/
export const Modal = (props) => {

  const [isToggled, setToggled] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');

  const toggleTrueFalse = () => setToggled(!isToggled);
  const toggleFalse = () => setToggled(false);
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: props.showModal ? 1 : 0,
    transform: props.showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      props.setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && props.showModal) {
        props.setShowModal(false);
        console.log('I pressed');
      }
    },
    [props.setShowModal, props.showModal]

  );

  function handleNameChange(event){
    setGuestName(event.target.value);
  }
  function handleEmailChange(event){
    setGuestEmail(event.target.value);
  }

  useEffect(
    () => {
      toggleFalse();
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  function reserveTable(){
    axios.put('http://localhost:4000/api/reservation/guestCustomer',
        {
          restaurantId: props.resDetails.restaurantId,
      table_id: props.resDetails.tableId,
      time: props.searchDetails.time,
        date: FindMyTable.getDateString(props.searchDetails.date),
        guestNumber: props.searchDetails.guestNumber,
        guestName: guestName,
        guestEmail: guestEmail
        }).then(({ data }) => {
      console.log(data);
    });
  }
  /*function reserveTable(){
    const a = {
      restaurantId: props.resDetails.restaurantId,
      table_id: props.resDetails.tableId,
      time: props.searchDetails.time,
        date: props.searchDetails.date,
        guestNumber: props.searchDetails.guestNumber,
        guestName: guestName,
        guestEmail: guestEmail
    };
    console.log(a);
  }*/

  return (
    <>
      {props.showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={props.showModal}>
              <ModalImg src="https://findmytable.s3.eu-west-2.amazonaws.com/pic1.jpg" alt='restaurant' />
              {
                !isToggled ? (<ModalContent>
                  <div className="popUpUpper">
                    <button className="modalButton" >Sign Up</button>
                    <button className="guestButton" onClick={toggleTrueFalse} >Reserve as Guest</button>
                  </div>
                  <div className="popUpLogin">
                    <p> Already have an account ? </p>
                    <Link to="/customerResults">Log In</Link>
                  </div>
                </ModalContent>)  : (<ModalContent><div className="guestReservationForm">
                  <label>Name:</label>
                  <input className="guestInputs" type="text" placeholder="Full Name" onChange={handleNameChange}/>
                  <label>Email:</label>
                  <input className="guestInputs" type="email" placeholder="Email" onChange={handleEmailChange}/>
                  <button className="modalButton" onClick={reserveTable}> Reserve </button>
                </div></ModalContent>)
              }
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => {
                  props.setShowModal(prev => !prev);
                }}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
