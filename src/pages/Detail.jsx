import { NavLink, useParams } from "react-router-dom";
import "../styles/detail.scss";
import Booking from "../components/Booking";
import { useState, useEffect } from "react";
import { getTourById } from "../api";

import useBook from "../store/useBook";

export default function Detail() {
  const { id } = useParams();

  const [tour, setTour] = useState();

  const setBook = useBook((state)=> state.setBook)
  const book = useBook((state)=> state.book)

  function toggleBook() {
    setBook(true);
  }

  useEffect(() => {
    getTourById(id).then(({ data }) => {
      setTour(data);
    });
  }, []);

  return tour ? (
    <div className="detail">
      {book ? <Booking tripId={id} /> : ''}

      <div
        className="detail-background"
        style={{ backgroundImage: `url(${tour.image.url})` }}
      >
        <div className="wrapper">
          <NavLink to="/">
            <button>Go back</button>
          </NavLink>
        </div>
      </div>
      <div className="detail__info-container">
        <div className="detail__info wrapper">
          <h1>{tour.name}</h1>
          <div className="detail__info-location">
            <img src="./imgs/locationIcon.svg" alt="locationImg" />
            <h5>{tour.name}</h5>
          </div>
          <h3>Description</h3>
          <p>{tour.description}</p>
          <h3>Reviews</h3>
          <div className="detail__info-review">
            <div className="review__user">
              <img src="./imgs/userImg.png" alt="userImg" />
              <h4>Pigeon</h4>
            </div>
            <p>
              That was such a nice place. The most beautiful place I’ve ever
              seen. My advice to everyone not to forget to take warm coat
            </p>
          </div>
          <button className="book__btn" onClick={toggleBook}>
            Book now
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
