import { useState } from 'react'
import { NavLink } from "react-router-dom"
import '../styles/home.scss'
import { useEffect } from 'react'

export default function Recomended()
{
    const [imgData, setImgData] = useState([])

    async function getData(url)
    {
        try{
            const responce = await fetch(url)
            const data = await responce.json()

            setImgData(data)
            
        }catch (err){
            console.log(err.message)
        }
    }

    useEffect(()=>{
        getData('./data/recomended.json')
    },[])
    

    return (
        <div className="recomended wrapper">
            <h2>Recomended</h2>
            <div className="recomended-gallery">
                {imgData.map((data)=>
                    <NavLink key={data.id} to={data.id}>
                        <div  className="gallery-img">
                            <img src={data.imgSrc}  alt="recomd" />
                            <div className="images-overlay">
                                <h4>Racek’s House</h4>
                            </div>
                        </div>
                    </NavLink>
                )}
            </div>
        </div>
    )
}