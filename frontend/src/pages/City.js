import axios from "axios"
import { useEffect, useState } from "react"

const City = (props) =>{
    const [cityData, setCityData] = useState({})
    useEffect (() => {
        axios
        .get(`http://localhost:4000/api/citiesData/${data}`)
        .then ((res) =>setCityData(res.data.answer))
    }, [])
 const data = props.match.params.id
    return(
        <div>
            <img src={cityData.src}/>
        </div>
    )
}

export default City