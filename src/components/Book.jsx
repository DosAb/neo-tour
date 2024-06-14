import { useState } from "react"

export default function Book(){

    const [book, setBook] = useState()

    const [peopleCount, setPeopleCount] = useState(0)

    function hideBookSumbit()
    {
        setBook('book-hide')
    }

    function decreaseCountPeople(event)
    {
        event.preventDefault()
        setPeopleCount((value)=> value >= 1 ? value - 1 : 0)
    }

    function increaseCountPeople(event)
    {
        event.preventDefault()
        setPeopleCount((value)=> value < 10 ? value + 1 : 10)
    }

    function sumbiteForm(event)
    {
        event.preventDefault()
    }

    return (
        <div className={`book ${book}`}>
            <div className="book__container">
                <div className="book__close">
                    <h2>Info</h2>
                    <img src="./imgs/cross.svg" alt="cross" onClick={hideBookSumbit} />
                </div>
                <p>To submit an application for a tour reservation, you need to fill in your information and select the number of people for the reservation</p>
                <form className="book__form">
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" id="phone" name="phone" />
                    <label htmlFor="comment">Commentaries to trip</label>
                    <input type="text" placeholder="Write your wishes to trip..." id="comment" name="comment" />
                    <label htmlFor="counter">Amount of people</label>
                    <div className="people-count">
                        <div className="counter">
                            <button onClick={decreaseCountPeople}>-</button>
                            <h3 className="count">{peopleCount}</h3>
                            <button onClick={increaseCountPeople}>+</button>
                        </div>
                    </div>
                    <button className="book__form-submit" onClick={sumbiteForm}>Submit</button>
                </form>
            </div>
        </div>
    )
}