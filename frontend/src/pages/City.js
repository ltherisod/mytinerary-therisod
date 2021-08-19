import axios from "axios"
import { useEffect, useState } from "react"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import Itinerary from "../components/Itinerary"
import { Link } from "react-router-dom"

const City = (props) =>{
    const [cityData, setCityData] = useState({})
    const [itineraries, setItineraries] = useState([])
    const [loader, setLoader] = useState (true)
    useEffect (() => {
        window.scroll(0,0)
        axios
        .get(`http://localhost:4000/api/citiesData/${data}`)
        .then ((res) =>{
            if(res.data.success){
                setCityData(res.data.answer)
            }else{
                props.history.push('/fail')
            }
        })
        .catch((error) => {
            props.history.push('/fail')
            console.log(error)
        })
        .finally(() => setLoader(false))
        axios
        .get(`http://localhost:4000/api/itineraries/`)
        .then ((res) =>{
            if(res.data.success){
                setItineraries(res.data.answer)
            }else{
                props.history.push('/fail')
            }
        })
        .catch((error) => {
            props.history.push('/fail')
            console.log(error)
        })
        .finally(() => setLoader(false))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
 const itineraryCard = itineraries.map((itineraryData, index) => {return(<Itinerary data={itineraryData} key={index} />)})
 const data = props.match.params.id
 if(loader){
    return(
        <div className="loaderdiv d-flex justify-content-center align-content-center">
                <img alt="loader"  className="loaderGif" src="/assets/sky-2-unscreen.gif"/> 
        </div>
)}
    return(
        <>
            <NavBar/>
            <header className="cityHeader" style={{backgroundImage:`url('${cityData.background}')`}}>
            <h1><span> Welcome to {cityData.name} </span></h1>
            </header>
            <main>
                <div className="titles">
                     <h2>Join us in this wonderfull adventure</h2>
                     <div className="textDeco"></div>
                </div>
               
                <div className= "itinerariesBox">
                    {itineraryCard}
                </div>
                <div className="comingSoon">
                    {/* <h3>Itineraries coming soon</h3>
                    <img alt="icon" src="/assets/info3.gif"/> */}
                   <Link to="/cities"><button className="back">Back to Cities</button> </Link> 
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default City