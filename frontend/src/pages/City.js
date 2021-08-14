import axios from "axios"
import { useEffect, useState } from "react"

const City = (props) =>{
    const [cityData, setCityData] = useState({})
    useEffect (() => {
        axios
        .get(`http://localhost:4000/api/citiesData/${data}`)
        .then ((res) =>setCityData(res.data.answer))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
 
 const data = props.match.params.id
    return(
        <div>
            <img alt="" src={cityData.src}/>
        </div>
    )
}

export default City