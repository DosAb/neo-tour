import { useState } from "react";

import useBook from "../store/useBook";
import { postBooking } from "../api";

export default function Booking({tripId}) {
  const setBook = useBook((state)=> state.setBook)
  const book = useBook((state)=> state.book)

  const [showFlags, setShowFlags] = useState(true);
  const [country, setCountry] = useState("kg");
  const [peopleCount, setPeopleCount] = useState(0);
  const [formData, setFormData] = useState({
    phone: '',
    comment: ''
  });



  function hideBookSumbit() {
    setBook(false);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  function decreaseCountPeople(event) {
    event.preventDefault();
    setPeopleCount((value) => (value >= 1 ? value - 1 : 0));
  }

  function increaseCountPeople(event) {
    event.preventDefault();
    setPeopleCount((value) => (value < 10 ? value + 1 : 10));
  }


  function handleSubmit (e){
    e.preventDefault();
    
    const sendData = {
      phone: formData.phone,
      comment: formData.comment,
      peopleAmount: peopleCount,
      tripId: Number(tripId)
    }

    postBooking(sendData).then((data)=>{
      console.log(data)
    })
  };

  function showPhoneFlags() {
    setShowFlags(!showFlags);
  }

  function selectPhone(country) {
    setCountry(country);
    setShowFlags(true);
  }

  return (
    <div className={`book ${book}`}>
      <div className="book__container">
        <div className="book__close">
          <h2>Info</h2>
          <img src="./imgs/cross.svg" alt="cross" onClick={hideBookSumbit} />
        </div>
        <p>
          To submit an application for a tour reservation, you need to fill in
          your information and select the number of people for the reservation
        </p>
        <form className="book__form">
          <label htmlFor="phone">Phone number</label>
          <div className="book__form-phone">
            <ol className="show__phone-flag">
              <div className="country__option" onClick={showPhoneFlags}>
                <img src={`./imgs/flag_${country}.svg`} alt="flag" />
                <div className="phone__arrow"></div>
              </div>
            </ol>
            <ol
              className={`select__phone-flag ${
                showFlags ? "phone__select-active" : null
              }`}
            >
              <div
                className="country__option"
                onClick={() => {
                  selectPhone("kg");
                }}
              >
                <img src="./imgs/flag_kg.svg" alt="flag" />
                <strong>+996</strong>
                <div className="phone__arrow"></div>
              </div>
              <div
                className="country__option"
                onClick={() => {
                  selectPhone("kz");
                }}
              >
                <img src="./imgs/flag_kz.svg" alt="flag" />
                <strong>+7</strong>
                <div className="phone__arrow"></div>
              </div>
              <div
                className="country__option"
                onClick={() => {
                  selectPhone("ru");
                }}
              >
                <img src="./imgs/flag_ru.svg" alt="flag" />
                <strong>+7</strong>
                <div className="phone__arrow"></div>
              </div>
            </ol>
            <input
              type="number"
              id="phone"
              maxLength={13}
              name="phone"
              placeholder="+996 (999) 999 999"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="comment">Commentaries to trip</label>
          <input
            type="text"
            placeholder="Write your wishes to trip..."
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />
          <label htmlFor="counter">Amount of people</label>
          <div className="people-count">
            <div className="counter">
              <button onClick={decreaseCountPeople}>-</button>
              <h3 className="count">{peopleCount}</h3>
              <button onClick={increaseCountPeople}>+</button>
            </div>
          </div>
          <button className="book__form-submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
