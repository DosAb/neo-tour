import { NavLink } from "react-router-dom"

import { getTrips } from "../api"
import { useState, useEffect } from "react"

export default function Slider()
{

    const [trip, setTrip] = useState([])

    useEffect(()=>{
        getTrips(0, 10).then(( data ) => {
            console.log(data)
        })
    },[])


    return(
        <div className="slider wrapper">
            <div className="slider__top">
                <h2>Discover</h2>
                <div className="slider__btn-container">
                    <button className="slider__btn"><img src="./imgs/darkArrow.svg" alt="arrow" /></button>
                    <button className="slider__btn-reverse"><img src="./imgs/darkArrow.svg" alt="arrow" /></button>
                </div>
            </div>
            <div className="slider__nav">
                <ul>
                    <li>Popular</li>
                    <li>Featured</li>
                    <li>Most Visted</li>
                    <li>Europe</li>
                    <li>Asia</li>
                </ul>
            </div>
            <div className="slider__images">
                <NavLink to="/detail" >
                    <div className="slider__images-container">
                        <img src="./imgs/northern-mountain.jpg" alt="northernMountain" />
                        <div className="images-overlay">
                            <h4>Northern Mountain</h4>
                        </div>
                    </div>
                </NavLink>
                <div className="slider__images-container">
                    <img src="./imgs/MountFuji.jpg" alt="MountFuji" />
                    <div className="images-overlay">
                        <h4>Mount Fuji</h4>
                    </div>
                </div>
                <div className="slider__images-container">
                    <img src="./imgs/house.jpg" alt="house" />
                    <div className="images-overlay">
                        <h4>Racek’s House</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}