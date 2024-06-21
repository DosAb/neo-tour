import { NavLink } from "react-router-dom"

import { getPopular, getFeatured, getMostVisited, getAsia, getEurope } from "../api"
import { useState, useEffect } from "react"

export default function Slider()
{

    const [discovery, setDiscovery] = useState([])

    function setPopularTours(){
        getPopular(0, 3).then(( {data} ) => {
            setDiscovery(data.content)
        })
    }

    function setFeaturedTours(){
        getFeatured(0, 3).then(( {data} ) => {
            setDiscovery(data.content)
        })
    }
    function setMostVisitedTours(){
        getMostVisited(0, 3).then(( {data} ) => {
            setDiscovery(data.content)
        })
    }
    function setAsiaTours(){
        getAsia(0, 3).then(( {data} ) => {
            setDiscovery(data.content)
        })
    }
    function setEuropeTours(){
        getEurope(0, 3).then(( {data} ) => {
            setDiscovery(data.content)
        })
    }

    useEffect(()=>{
        getPopular(0, 3).then(( {data} ) => {
            setDiscovery(data.content)
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
                    <button onClick={setPopularTours} autoFocus>Popular</button>
                    <button onClick={setFeaturedTours}>Featured</button>
                    <button onClick={setMostVisitedTours}>Most Visted</button>
                    <button onClick={setEuropeTours}>Europe</button>
                    <button onClick={setAsiaTours}>Asia</button>
                </ul>
            </div>
            <div className="slider__images">
                {discovery.map((data)=>                
                    <NavLink key={data.id} to={data.id.toString()} >
                        <div className="slider__images-container">
                            <img src={data.image.url} alt="northernMountain" />
                            <div className="images-overlay">
                                <h4>{data.name}</h4>
                            </div>
                        </div>
                    </NavLink>
                )}
            </div>
        </div>
    )
}