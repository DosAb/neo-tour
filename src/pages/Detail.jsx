import { NavLink } from "react-router-dom"
import '../styles/detail.scss'
import Book from "../components/Book"

export default function Detail()
{
    function toggleScroll() {
        document.body.classList.toggle('no-scroll');
    }

    return (
        <div className="detail">
            {/* Book */}
            <Book />

            <div className="detail-background" style={{backgroundImage:  `url("http://res.cloudinary.com/dnidwkmlb/image/upload/v1718883243/jaiib99b96vorihifqvd.png")`}}>
                {/* <img src="./imgs/recomended/hiroshima.jpg" alt="detalBackground" /> */}
                <div className="wrapper">
                    <NavLink to="/">
                        <button>Go back</button>
                    </NavLink>
                </div>
            </div>
            <div className="detail__info-container">
                <div className="detail__info wrapper">
                    <h1>Mount Fuji</h1>
                    <div className="detail__info-location">
                        <img src="./imgs/locationIcon.svg" alt="locationImg" />
                        <h5>Honshu, Japan</h5>
                    </div>
                    <h3>Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim eget amet viverra eget fames rhoncus. Eget enim venenatis enim porta egestas malesuada et. Consequat mauris lacus euismod montes.</p>
                    <h3>Reviews</h3>
                    <div className="detail__info-review">
                        <div className="review__user">
                            <img src="./imgs/userImg.png" alt="userImg" />
                            <h4>Name</h4>
                        </div>
                        <p>That was such a nice place. The most beautiful place I’ve ever seen. My advice to everyone not to forget to take warm coat</p>
                    </div>
                    <button className="book__btn" onClick={toggleScroll}>Book now</button>
                </div>
            </div>
        </div>
    )
}