import { useState } from 'react'
import { NavLink } from "react-router-dom"
import '../styles/home.scss'
import { useEffect } from 'react'
import { getTrips } from "../api"

export default function Recomended()
{
    const [trip, setTrip] = useState([])

    useEffect(()=>{
        getTrips(0, 12).then(( {data} ) => {
            setTrip(data.content)
        })
    },[])
    

    return (
        <div className="recomended wrapper">
            <h2>Recomended</h2>
            <div className="recomended__gallery">
                {trip.map((data)=>
                    <NavLink key={data.id} to={data.id.toString()}>
                        <div  className="gallery__img">
                            <img src={data.image.url}  alt="recomd" />
                            <div className="images__overlay">
                                <h4>{data.name}</h4>
                            </div>
                        </div>
                    </NavLink>
                )}
            </div>
        </div>
    )
}